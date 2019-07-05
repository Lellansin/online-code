// @ts-check

const invoke = require('./utils/invoke');
var funcName = 'compile-and-run';

invoke(funcName, 'hello?')
  .then((resp) => {
    console.log(resp);
  })
  .catch((err) => {
    console.error('err', err);
  });

// TODO add https://www.npmjs.com/package/eslint-plugin-jsdoc
