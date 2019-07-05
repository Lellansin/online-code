/**
 * Request
 * 请求后端服务
 */
'use strict';

const kitx = require('kitx');
const Axios = require('axios');
const FCClient = require('@alicloud/fc2');
const querystring = require('querystring');

const uid = '1834461034413514';
const ak = 'LTAI3ejqZgZdHizv';
const sk = 'Vx5HIIcPio3E87HhX4ZVCBZGWtcz46';
const axios = Axios.create();

const client = new FCClient(uid, {
  accessKeyID: ak,
  accessKeySecret: sk,
  region: 'cn-shanghai',
});

var serviceName = 'online-judge';

/**
 * @template T
 * @param {string} name
 * @param {string=} event
 * @param {{ [key: string]: string }={}} headers
 * @returns { Promise<T> }
 */
module.exports = (name, event, headers = {}) => {
  return client.invokeFunction(serviceName, name, event, headers);
};

/**
 * 兼容浏览器端请求
 */
client.request = function(method, path, query, body, headers = {}, opts = {}) {
  // 使用兼容的 date header
  headers['x-fc-date'] = new Date().toUTCString();

  // 以下是原逻辑
  var url = `${this.endpoint}/${this.version}${path}`;
  if (query && Object.keys(query).length > 0) {
    url = `${url}?${querystring.stringify(query)}`;
  }

  headers = Object.assign(this.buildHeaders(), this.headers, headers);
  var postBody;
  if (body) {
    var buff = null;
    if (Buffer.isBuffer(body)) {
      buff = body;
      headers['content-type'] = 'application/octet-stream';
    } else if (typeof body === 'string') {
      buff = new Buffer(body, 'utf8');
      headers['content-type'] = 'application/octet-stream';
    } else {
      buff = new Buffer(JSON.stringify(body), 'utf8');
      headers['content-type'] = 'application/json';
    }
    const digest = kitx.md5(buff, 'hex');
    const md5 = new Buffer(digest, 'utf8').toString('base64');
    headers['content-length'] = buff.length;
    headers['content-md5'] = md5;
    postBody = buff;
  }

  var queriesToSign = null;
  if (path.startsWith('/proxy/')) {
    queriesToSign = query || {};
  }
  var signature = FCClient.getSignature(
    this.accessKeyID,
    this.accessKeySecret,
    method,
    `/${this.version}${path}`,
    headers,
    queriesToSign,
  );
  headers['authorization'] = signature;
  /*
   * 以上是 fc-nodejs-sdk 中的代码
   * 以下是重写的逻辑
   */
  // 移除浏览器报警的 headers
  removeUnsafeHeaders(headers);
  // 使用 axios 替换 httpx
  return axios
    .request({
      url,
      method,
      timeout: this.timeout,
      headers,
      data: postBody,
    })
    .then((response) => {
      return {
        headers: response.headers,
        data: response.data,
      };
    });

  function removeUnsafeHeaders(headers) {
    delete headers['date'];
    delete headers['host'];
    delete headers['user-agent'];
    delete headers['content-length'];
  }
};
