parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"nIQY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.WorkerManager=void 0;var e=12e4,t=function(){function t(e){var t=this;this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval(function(){return t._checkIfIdle()},3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(function(){return t._stopWorker()})}return t.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},t.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},t.prototype._checkIfIdle=function(){this._worker&&(Date.now()-this._lastUsedTime>e&&this._stopWorker())},t.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/css/cssWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client},t.prototype.getLanguageServiceWorker=function(){for(var e,t=this,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return this._getClient().then(function(t){e=t}).then(function(e){return t._worker.withSyncedResources(r)}).then(function(t){return e})},t}();exports.WorkerManager=t;
},{}],"vCc8":[function(require,module,exports) {
"use strict";var e,t,n,r,i,o,s,a,c,u,d,f,p,g,l,x,m,h,v;Object.defineProperty(exports,"__esModule",{value:!0}),exports.TextDocumentSaveReason=exports.TextDocument=exports.EOL=exports.DocumentLink=exports.FormattingOptions=exports.CodeLens=exports.CodeAction=exports.CodeActionContext=exports.CodeActionKind=exports.DocumentSymbol=exports.SymbolInformation=exports.SymbolKind=exports.DocumentHighlight=exports.DocumentHighlightKind=exports.SignatureInformation=exports.ParameterInformation=exports.Hover=exports.MarkedString=exports.CompletionList=exports.CompletionItem=exports.InsertTextFormat=exports.CompletionItemKind=exports.MarkupContent=exports.MarkupKind=exports.TextDocumentItem=exports.VersionedTextDocumentIdentifier=exports.TextDocumentIdentifier=exports.WorkspaceChange=exports.WorkspaceEdit=exports.DeleteFile=exports.RenameFile=exports.CreateFile=exports.TextDocumentEdit=exports.TextEdit=exports.Command=exports.Diagnostic=exports.DiagnosticSeverity=exports.DiagnosticRelatedInformation=exports.FoldingRange=exports.FoldingRangeKind=exports.ColorPresentation=exports.ColorInformation=exports.Color=exports.LocationLink=exports.Location=exports.Range=exports.Position=void 0,exports.Position=e,function(e){e.create=function(e,t){return{line:e,character:t}},e.is=function(e){var t=e;return $.objectLiteral(t)&&$.number(t.line)&&$.number(t.character)}}(e||(exports.Position=e={})),exports.Range=t,function(t){t.create=function(t,n,r,i){if($.number(t)&&$.number(n)&&$.number(r)&&$.number(i))return{start:e.create(t,n),end:e.create(r,i)};if(e.is(t)&&e.is(n))return{start:t,end:n};throw new Error("Range#create called with invalid arguments["+t+", "+n+", "+r+", "+i+"]")},t.is=function(t){var n=t;return $.objectLiteral(n)&&e.is(n.start)&&e.is(n.end)}}(t||(exports.Range=t={})),exports.Location=n,function(e){e.create=function(e,t){return{uri:e,range:t}},e.is=function(e){var n=e;return $.defined(n)&&t.is(n.range)&&($.string(n.uri)||$.undefined(n.uri))}}(n||(exports.Location=n={})),exports.LocationLink=r,function(e){e.create=function(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}},e.is=function(e){var n=e;return $.defined(n)&&t.is(n.targetRange)&&$.string(n.targetUri)&&(t.is(n.targetSelectionRange)||$.undefined(n.targetSelectionRange))&&(t.is(n.originSelectionRange)||$.undefined(n.originSelectionRange))}}(r||(exports.LocationLink=r={})),exports.Color=i,function(e){e.create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}},e.is=function(e){var t=e;return $.number(t.red)&&$.number(t.green)&&$.number(t.blue)&&$.number(t.alpha)}}(i||(exports.Color=i={})),exports.ColorInformation=o,function(e){e.create=function(e,t){return{range:e,color:t}},e.is=function(e){var n=e;return t.is(n.range)&&i.is(n.color)}}(o||(exports.ColorInformation=o={})),exports.ColorPresentation=s,function(e){e.create=function(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}},e.is=function(e){var t=e;return $.string(t.label)&&($.undefined(t.textEdit)||g.is(t))&&($.undefined(t.additionalTextEdits)||$.typedArray(t.additionalTextEdits,g.is))}}(s||(exports.ColorPresentation=s={})),exports.FoldingRangeKind=a,function(e){e.Comment="comment",e.Imports="imports",e.Region="region"}(a||(exports.FoldingRangeKind=a={})),exports.FoldingRange=c,function(e){e.create=function(e,t,n,r,i){var o={startLine:e,endLine:t};return $.defined(n)&&(o.startCharacter=n),$.defined(r)&&(o.endCharacter=r),$.defined(i)&&(o.kind=i),o},e.is=function(e){var t=e;return $.number(t.startLine)&&$.number(t.startLine)&&($.undefined(t.startCharacter)||$.number(t.startCharacter))&&($.undefined(t.endCharacter)||$.number(t.endCharacter))&&($.undefined(t.kind)||$.string(t.kind))}}(c||(exports.FoldingRange=c={})),exports.DiagnosticRelatedInformation=u,function(e){e.create=function(e,t){return{location:e,message:t}},e.is=function(e){var t=e;return $.defined(t)&&n.is(t.location)&&$.string(t.message)}}(u||(exports.DiagnosticRelatedInformation=u={})),exports.DiagnosticSeverity=d,function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(d||(exports.DiagnosticSeverity=d={})),exports.Diagnostic=f,function(e){e.create=function(e,t,n,r,i,o){var s={range:e,message:t};return $.defined(n)&&(s.severity=n),$.defined(r)&&(s.code=r),$.defined(i)&&(s.source=i),$.defined(o)&&(s.relatedInformation=o),s},e.is=function(e){var n=e;return $.defined(n)&&t.is(n.range)&&$.string(n.message)&&($.number(n.severity)||$.undefined(n.severity))&&($.number(n.code)||$.string(n.code)||$.undefined(n.code))&&($.string(n.source)||$.undefined(n.source))&&($.undefined(n.relatedInformation)||$.typedArray(n.relatedInformation,u.is))}}(f||(exports.Diagnostic=f={})),exports.Command=p,function(e){e.create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return $.defined(n)&&n.length>0&&(i.arguments=n),i},e.is=function(e){var t=e;return $.defined(t)&&$.string(t.title)&&$.string(t.command)}}(p||(exports.Command=p={})),exports.TextEdit=g,function(e){e.replace=function(e,t){return{range:e,newText:t}},e.insert=function(e,t){return{range:{start:e,end:e},newText:t}},e.del=function(e){return{range:e,newText:""}},e.is=function(e){var n=e;return $.objectLiteral(n)&&$.string(n.newText)&&t.is(n.range)}}(g||(exports.TextEdit=g={})),exports.TextDocumentEdit=l,function(e){e.create=function(e,t){return{textDocument:e,edits:t}},e.is=function(e){var t=e;return $.defined(t)&&C.is(t.textDocument)&&Array.isArray(t.edits)}}(l||(exports.TextDocumentEdit=l={})),exports.CreateFile=x,function(e){e.create=function(e,t){var n={kind:"create",uri:e};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(n.options=t),n},e.is=function(e){var t=e;return t&&"create"===t.kind&&$.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||$.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||$.boolean(t.options.ignoreIfExists)))}}(x||(exports.CreateFile=x={})),exports.RenameFile=m,function(e){e.create=function(e,t,n){var r={kind:"rename",oldUri:e,newUri:t};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(r.options=n),r},e.is=function(e){var t=e;return t&&"rename"===t.kind&&$.string(t.oldUri)&&$.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||$.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||$.boolean(t.options.ignoreIfExists)))}}(m||(exports.RenameFile=m={})),exports.DeleteFile=h,function(e){e.create=function(e,t){var n={kind:"delete",uri:e};return void 0===t||void 0===t.recursive&&void 0===t.ignoreIfNotExists||(n.options=t),n},e.is=function(e){var t=e;return t&&"delete"===t.kind&&$.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||$.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||$.boolean(t.options.ignoreIfNotExists)))}}(h||(exports.DeleteFile=h={})),exports.WorkspaceEdit=v,function(e){e.is=function(e){var t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every(function(e){return $.string(e.kind)?x.is(e)||m.is(e)||h.is(e):l.is(e)}))}}(v||(exports.WorkspaceEdit=v={}));var b,C,y,k,E,I,D,w,_,T,S,R,L,A,F,O,M,P=function(){function e(e){this.edits=e}return e.prototype.insert=function(e,t){this.edits.push(g.insert(e,t))},e.prototype.replace=function(e,t){this.edits.push(g.replace(e,t))},e.prototype.delete=function(e){this.edits.push(g.del(e))},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e}(),j=function(){function e(e){var t=this;this._textEditChanges=Object.create(null),e&&(this._workspaceEdit=e,e.documentChanges?e.documentChanges.forEach(function(e){if(l.is(e)){var n=new P(e.edits);t._textEditChanges[e.textDocument.uri]=n}}):e.changes&&Object.keys(e.changes).forEach(function(n){var r=new P(e.changes[n]);t._textEditChanges[n]=r}))}return Object.defineProperty(e.prototype,"edit",{get:function(){return this._workspaceEdit},enumerable:!0,configurable:!0}),e.prototype.getTextEditChange=function(e){if(C.is(e)){if(this._workspaceEdit||(this._workspaceEdit={documentChanges:[]}),!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var t=e;if(!(r=this._textEditChanges[t.uri])){var n={textDocument:t,edits:i=[]};this._workspaceEdit.documentChanges.push(n),r=new P(i),this._textEditChanges[t.uri]=r}return r}if(this._workspaceEdit||(this._workspaceEdit={changes:Object.create(null)}),!this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new P(i),this._textEditChanges[e]=r}return r},e.prototype.createFile=function(e,t){this.checkDocumentChanges(),this._workspaceEdit.documentChanges.push(x.create(e,t))},e.prototype.renameFile=function(e,t,n){this.checkDocumentChanges(),this._workspaceEdit.documentChanges.push(m.create(e,t,n))},e.prototype.deleteFile=function(e,t){this.checkDocumentChanges(),this._workspaceEdit.documentChanges.push(h.create(e,t))},e.prototype.checkDocumentChanges=function(){if(!this._workspaceEdit||!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.")},e}();exports.WorkspaceChange=j,exports.TextDocumentIdentifier=b,function(e){e.create=function(e){return{uri:e}},e.is=function(e){var t=e;return $.defined(t)&&$.string(t.uri)}}(b||(exports.TextDocumentIdentifier=b={})),exports.VersionedTextDocumentIdentifier=C,function(e){e.create=function(e,t){return{uri:e,version:t}},e.is=function(e){var t=e;return $.defined(t)&&$.string(t.uri)&&(null===t.version||$.number(t.version))}}(C||(exports.VersionedTextDocumentIdentifier=C={})),exports.TextDocumentItem=y,function(e){e.create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},e.is=function(e){var t=e;return $.defined(t)&&$.string(t.uri)&&$.string(t.languageId)&&$.number(t.version)&&$.string(t.text)}}(y||(exports.TextDocumentItem=y={})),exports.MarkupKind=k,function(e){e.PlainText="plaintext",e.Markdown="markdown"}(k||(exports.MarkupKind=k={})),function(e){e.is=function(t){var n=t;return n===e.PlainText||n===e.Markdown}}(k||(exports.MarkupKind=k={})),exports.MarkupContent=E,function(e){e.is=function(e){var t=e;return $.objectLiteral(e)&&k.is(t.kind)&&$.string(t.value)}}(E||(exports.MarkupContent=E={})),exports.CompletionItemKind=I,function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(I||(exports.CompletionItemKind=I={})),exports.InsertTextFormat=D,function(e){e.PlainText=1,e.Snippet=2}(D||(exports.InsertTextFormat=D={})),exports.CompletionItem=w,function(e){e.create=function(e){return{label:e}}}(w||(exports.CompletionItem=w={})),exports.CompletionList=_,function(e){e.create=function(e,t){return{items:e||[],isIncomplete:!!t}}}(_||(exports.CompletionList=_={})),exports.MarkedString=T,function(e){e.fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},e.is=function(e){var t=e;return $.string(t)||$.objectLiteral(t)&&$.string(t.language)&&$.string(t.value)}}(T||(exports.MarkedString=T={})),exports.Hover=S,function(e){e.is=function(e){var n=e;return!!n&&$.objectLiteral(n)&&(E.is(n.contents)||T.is(n.contents)||$.typedArray(n.contents,T.is))&&(void 0===e.range||t.is(e.range))}}(S||(exports.Hover=S={})),exports.ParameterInformation=R,function(e){e.create=function(e,t){return t?{label:e,documentation:t}:{label:e}}}(R||(exports.ParameterInformation=R={})),exports.SignatureInformation=L,function(e){e.create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return $.defined(t)&&(i.documentation=t),$.defined(n)?i.parameters=n:i.parameters=[],i}}(L||(exports.SignatureInformation=L={})),exports.DocumentHighlightKind=A,function(e){e.Text=1,e.Read=2,e.Write=3}(A||(exports.DocumentHighlightKind=A={})),exports.DocumentHighlight=F,function(e){e.create=function(e,t){var n={range:e};return $.number(t)&&(n.kind=t),n}}(F||(exports.DocumentHighlight=F={})),exports.SymbolKind=O,function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(O||(exports.SymbolKind=O={})),exports.SymbolInformation=M,function(e){e.create=function(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o}}(M||(exports.SymbolInformation=M={}));var K,H,W,N,U,V=function(){return function(){}}();exports.DocumentSymbol=V,function(e){e.create=function(e,t,n,r,i,o){var s={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(s.children=o),s},e.is=function(e){var n=e;return n&&$.string(n.name)&&$.number(n.kind)&&t.is(n.range)&&t.is(n.selectionRange)&&(void 0===n.detail||$.string(n.detail))&&(void 0===n.deprecated||$.boolean(n.deprecated))&&(void 0===n.children||Array.isArray(n.children))}}(V||(exports.DocumentSymbol=V={})),exports.CodeActionKind=K,function(e){e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports"}(K||(exports.CodeActionKind=K={})),exports.CodeActionContext=H,function(e){e.create=function(e,t){var n={diagnostics:e};return null!=t&&(n.only=t),n},e.is=function(e){var t=e;return $.defined(t)&&$.typedArray(t.diagnostics,f.is)&&(void 0===t.only||$.typedArray(t.only,$.string))}}(H||(exports.CodeActionContext=H={})),exports.CodeAction=W,function(e){e.create=function(e,t,n){var r={title:e};return p.is(t)?r.command=t:r.edit=t,void 0!==n&&(r.kind=n),r},e.is=function(e){var t=e;return t&&$.string(t.title)&&(void 0===t.diagnostics||$.typedArray(t.diagnostics,f.is))&&(void 0===t.kind||$.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||p.is(t.command))&&(void 0===t.edit||v.is(t.edit))}}(W||(exports.CodeAction=W={})),exports.CodeLens=N,function(e){e.create=function(e,t){var n={range:e};return $.defined(t)&&(n.data=t),n},e.is=function(e){var n=e;return $.defined(n)&&t.is(n.range)&&($.undefined(n.command)||p.is(n.command))}}(N||(exports.CodeLens=N={})),exports.FormattingOptions=U,function(e){e.create=function(e,t){return{tabSize:e,insertSpaces:t}},e.is=function(e){var t=e;return $.defined(t)&&$.number(t.tabSize)&&$.boolean(t.insertSpaces)}}(U||(exports.FormattingOptions=U={}));var z=function(){return function(){}}();exports.DocumentLink=z,function(e){e.create=function(e,t,n){return{range:e,target:t,data:n}},e.is=function(e){var n=e;return $.defined(n)&&t.is(n.range)&&($.undefined(n.target)||$.string(n.target))}}(z||(exports.DocumentLink=z={}));var q,B,Q=["\n","\r\n","\r"];exports.EOL=Q,exports.TextDocument=q,function(e){e.create=function(e,t,n,r){return new G(e,t,n,r)},e.is=function(e){var t=e;return!!($.defined(t)&&$.string(t.uri)&&($.undefined(t.languageId)||$.string(t.languageId))&&$.number(t.lineCount)&&$.func(t.getText)&&$.func(t.positionAt)&&$.func(t.offsetAt))},e.applyEdits=function(e,t){for(var n=e.getText(),r=function e(t,n){if(t.length<=1)return t;var r=t.length/2|0,i=t.slice(0,r),o=t.slice(r);e(i,n),e(o,n);for(var s=0,a=0,c=0;s<i.length&&a<o.length;){var u=n(i[s],o[a]);t[c++]=u<=0?i[s++]:o[a++]}for(;s<i.length;)t[c++]=i[s++];for(;a<o.length;)t[c++]=o[a++];return t}(t,function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n}),i=n.length,o=r.length-1;o>=0;o--){var s=r[o],a=e.offsetAt(s.range.start),c=e.offsetAt(s.range.end);if(!(c<=i))throw new Error("Overlapping edit");n=n.substring(0,a)+s.newText+n.substring(c,n.length),i=a}return n}}(q||(exports.TextDocument=q={})),exports.TextDocumentSaveReason=B,function(e){e.Manual=1,e.AfterDelay=2,e.FocusOut=3}(B||(exports.TextDocumentSaveReason=B={}));var $,G=function(){function t(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=null}return Object.defineProperty(t.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),t.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},t.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=null},t.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},t.prototype.positionAt=function(t){t=Math.max(Math.min(t,this._content.length),0);var n=this.getLineOffsets(),r=0,i=n.length;if(0===i)return e.create(0,t);for(;r<i;){var o=Math.floor((r+i)/2);n[o]>t?i=o:r=o+1}var s=r-1;return e.create(s,t-n[s])},t.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(t.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),t}();!function(e){var t=Object.prototype.toString;e.defined=function(e){return void 0!==e},e.undefined=function(e){return void 0===e},e.boolean=function(e){return!0===e||!1===e},e.string=function(e){return"[object String]"===t.call(e)},e.number=function(e){return"[object Number]"===t.call(e)},e.func=function(e){return"[object Function]"===t.call(e)},e.objectLiteral=function(e){return null!==e&&"object"==typeof e},e.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)}}($||($={}));
},{}],"GB/r":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FoldingRangeAdapter=exports.DocumentColorAdapter=exports.DocumentSymbolAdapter=exports.RenameAdapter=exports.ReferenceAdapter=exports.DefinitionAdapter=exports.DocumentHighlightAdapter=exports.HoverAdapter=exports.CompletionAdapter=exports.DiagnosticsAdapter=void 0;var e=n(require("./_deps/vscode-languageserver-types/main.js"));function n(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};r.get||r.set?Object.defineProperty(n,t,r):n[t]=e[t]}return n.default=e,n}var t=monaco.Uri,r=monaco.Range,o=function(){function e(e,n,t){var r=this;this._languageId=e,this._worker=n,this._disposables=[],this._listener=Object.create(null);var o=function(e){var n,t=e.getModeId();t===r._languageId&&(r._listener[e.uri.toString()]=e.onDidChangeContent(function(){clearTimeout(n),n=setTimeout(function(){return r._doValidate(e.uri,t)},500)}),r._doValidate(e.uri,t))},i=function(e){monaco.editor.setModelMarkers(e,r._languageId,[]);var n=e.uri.toString(),t=r._listener[n];t&&(t.dispose(),delete r._listener[n])};this._disposables.push(monaco.editor.onDidCreateModel(o)),this._disposables.push(monaco.editor.onWillDisposeModel(i)),this._disposables.push(monaco.editor.onDidChangeModelLanguage(function(e){i(e.model),o(e.model)})),t.onDidChange(function(e){monaco.editor.getModels().forEach(function(e){e.getModeId()===r._languageId&&(i(e),o(e))})}),this._disposables.push({dispose:function(){for(var e in r._listener)r._listener[e].dispose()}}),monaco.editor.getModels().forEach(o)}return e.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},e.prototype._doValidate=function(e,n){this._worker(e).then(function(n){return n.doValidation(e.toString())}).then(function(t){var r=t.map(function(n){return a(e,n)}),o=monaco.editor.getModel(e);o.getModeId()===n&&monaco.editor.setModelMarkers(o,n,r)}).then(void 0,function(e){console.error(e)})},e}();function i(n){switch(n){case e.DiagnosticSeverity.Error:return monaco.MarkerSeverity.Error;case e.DiagnosticSeverity.Warning:return monaco.MarkerSeverity.Warning;case e.DiagnosticSeverity.Information:return monaco.MarkerSeverity.Info;case e.DiagnosticSeverity.Hint:return monaco.MarkerSeverity.Hint;default:return monaco.MarkerSeverity.Info}}function a(e,n){var t="number"==typeof n.code?String(n.code):n.code;return{severity:i(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:t,source:n.source}}function u(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function s(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function c(e){if(e)return new monaco.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function d(n){var t=monaco.languages.CompletionItemKind;switch(n){case e.CompletionItemKind.Text:return t.Text;case e.CompletionItemKind.Method:return t.Method;case e.CompletionItemKind.Function:return t.Function;case e.CompletionItemKind.Constructor:return t.Constructor;case e.CompletionItemKind.Field:return t.Field;case e.CompletionItemKind.Variable:return t.Variable;case e.CompletionItemKind.Class:return t.Class;case e.CompletionItemKind.Interface:return t.Interface;case e.CompletionItemKind.Module:return t.Module;case e.CompletionItemKind.Property:return t.Property;case e.CompletionItemKind.Unit:return t.Unit;case e.CompletionItemKind.Value:return t.Value;case e.CompletionItemKind.Enum:return t.Enum;case e.CompletionItemKind.Keyword:return t.Keyword;case e.CompletionItemKind.Snippet:return t.Snippet;case e.CompletionItemKind.Color:return t.Color;case e.CompletionItemKind.File:return t.File;case e.CompletionItemKind.Reference:return t.Reference}return t.Property}function l(e){if(e)return{range:c(e.range),text:e.newText}}exports.DiagnosticsAdapter=o;var m=function(){function n(e){this._worker=e}return Object.defineProperty(n.prototype,"triggerCharacters",{get:function(){return[" ",":"]},enumerable:!0,configurable:!0}),n.prototype.provideCompletionItems=function(n,t,o,i){var a=n.uri;return this._worker(a).then(function(e){return e.doComplete(a.toString(),u(t))}).then(function(o){if(o){var i=n.getWordUntilPosition(t),a=new r(t.lineNumber,i.startColumn,t.lineNumber,i.endColumn),u=o.items.map(function(n){var t={label:n.label,insertText:n.insertText||n.label,sortText:n.sortText,filterText:n.filterText,documentation:n.documentation,detail:n.detail,range:a,kind:d(n.kind)};return n.textEdit&&(t.range=c(n.textEdit.range),t.insertText=n.textEdit.newText),n.additionalTextEdits&&(t.additionalTextEdits=n.additionalTextEdits.map(l)),n.insertTextFormat===e.InsertTextFormat.Snippet&&(t.insertTextRules=monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet),t});return{isIncomplete:o.isIncomplete,suggestions:u}}})},n}();function p(e){return e&&"object"==typeof e&&"string"==typeof e.kind}function g(e){return"string"==typeof e?{value:e}:p(e)?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"}}function f(e){if(e)return Array.isArray(e)?e.map(g):[g(e)]}exports.CompletionAdapter=m;var h=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,n,t){var r=e.uri;return this._worker(r).then(function(e){return e.doHover(r.toString(),u(n))}).then(function(e){if(e)return{range:c(e.range),contents:f(e.contents)}})},e}();function v(n){switch(n){case e.DocumentHighlightKind.Read:return monaco.languages.DocumentHighlightKind.Read;case e.DocumentHighlightKind.Write:return monaco.languages.DocumentHighlightKind.Write;case e.DocumentHighlightKind.Text:return monaco.languages.DocumentHighlightKind.Text}return monaco.languages.DocumentHighlightKind.Text}exports.HoverAdapter=h;var y=function(){function e(e){this._worker=e}return e.prototype.provideDocumentHighlights=function(e,n,t){var r=e.uri;return this._worker(r).then(function(e){return e.findDocumentHighlights(r.toString(),u(n))}).then(function(e){if(e)return e.map(function(e){return{range:c(e.range),kind:v(e.kind)}})})},e}();function b(e){return{uri:t.parse(e.uri),range:c(e.range)}}exports.DocumentHighlightAdapter=y;var C=function(){function e(e){this._worker=e}return e.prototype.provideDefinition=function(e,n,t){var r=e.uri;return this._worker(r).then(function(e){return e.findDefinition(r.toString(),u(n))}).then(function(e){if(e)return[b(e)]})},e}();exports.DefinitionAdapter=C;var x=function(){function e(e){this._worker=e}return e.prototype.provideReferences=function(e,n,t,r){var o=e.uri;return this._worker(o).then(function(e){return e.findReferences(o.toString(),u(n))}).then(function(e){if(e)return e.map(b)})},e}();function K(e){if(e&&e.changes){var n=[];for(var r in e.changes){for(var o=[],i=0,a=e.changes[r];i<a.length;i++){var u=a[i];o.push({range:c(u.range),text:u.newText})}n.push({resource:t.parse(r),edits:o})}return{edits:n}}}exports.ReferenceAdapter=x;var S=function(){function e(e){this._worker=e}return e.prototype.provideRenameEdits=function(e,n,t,r){var o=e.uri;return this._worker(o).then(function(e){return e.doRename(o.toString(),u(n),t)}).then(function(e){return K(e)})},e}();function _(n){var t=monaco.languages.SymbolKind;switch(n){case e.SymbolKind.File:return t.Array;case e.SymbolKind.Module:return t.Module;case e.SymbolKind.Namespace:return t.Namespace;case e.SymbolKind.Package:return t.Package;case e.SymbolKind.Class:return t.Class;case e.SymbolKind.Method:return t.Method;case e.SymbolKind.Property:return t.Property;case e.SymbolKind.Field:return t.Field;case e.SymbolKind.Constructor:return t.Constructor;case e.SymbolKind.Enum:return t.Enum;case e.SymbolKind.Interface:return t.Interface;case e.SymbolKind.Function:return t.Function;case e.SymbolKind.Variable:return t.Variable;case e.SymbolKind.Constant:return t.Constant;case e.SymbolKind.String:return t.String;case e.SymbolKind.Number:return t.Number;case e.SymbolKind.Boolean:return t.Boolean;case e.SymbolKind.Array:return t.Array}return t.Function}exports.RenameAdapter=S;var I=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,n){var t=e.uri;return this._worker(t).then(function(e){return e.findDocumentSymbols(t.toString())}).then(function(e){if(e)return e.map(function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:_(e.kind),range:c(e.location.range),selectionRange:c(e.location.range)}})})},e}();exports.DocumentSymbolAdapter=I;var k=function(){function e(e){this._worker=e}return e.prototype.provideDocumentColors=function(e,n){var t=e.uri;return this._worker(t).then(function(e){return e.findDocumentColors(t.toString())}).then(function(e){if(e)return e.map(function(e){return{color:e.color,range:c(e.range)}})})},e.prototype.provideColorPresentations=function(e,n,t){var r=e.uri;return this._worker(r).then(function(e){return e.getColorPresentations(r.toString(),n.color,s(n.range))}).then(function(e){if(e)return e.map(function(e){var n={label:e.label};return e.textEdit&&(n.textEdit=l(e.textEdit)),e.additionalTextEdits&&(n.additionalTextEdits=e.additionalTextEdits.map(l)),n})})},e}();exports.DocumentColorAdapter=k;var w=function(){function e(e){this._worker=e}return e.prototype.provideFoldingRanges=function(e,n,t){var r=e.uri;return this._worker(r).then(function(e){return e.provideFoldingRanges(r.toString(),n)}).then(function(e){if(e)return e.map(function(e){var n={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(n.kind=D(e.kind)),n})})},e}();function D(n){switch(n){case e.FoldingRangeKind.Comment:return monaco.languages.FoldingRangeKind.Comment;case e.FoldingRangeKind.Imports:return monaco.languages.FoldingRangeKind.Imports;case e.FoldingRangeKind.Region:return monaco.languages.FoldingRangeKind.Region}}exports.FoldingRangeAdapter=w;
},{"./_deps/vscode-languageserver-types/main.js":"vCc8"}],"7I3f":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setupMode=o;var e=require("./workerManager.js"),r=n(require("./languageFeatures.js"));function n(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(r,n,o):r[n]=e[n]}return r.default=e,r}function o(n){var o=new e.WorkerManager(n),t=function(e){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];return o.getLanguageServiceWorker.apply(o,[e].concat(r))},a=n.languageId;monaco.languages.registerCompletionItemProvider(a,new r.CompletionAdapter(t)),monaco.languages.registerHoverProvider(a,new r.HoverAdapter(t)),monaco.languages.registerDocumentHighlightProvider(a,new r.DocumentHighlightAdapter(t)),monaco.languages.registerDefinitionProvider(a,new r.DefinitionAdapter(t)),monaco.languages.registerReferenceProvider(a,new r.ReferenceAdapter(t)),monaco.languages.registerDocumentSymbolProvider(a,new r.DocumentSymbolAdapter(t)),monaco.languages.registerRenameProvider(a,new r.RenameAdapter(t)),monaco.languages.registerColorProvider(a,new r.DocumentColorAdapter(t)),monaco.languages.registerFoldingRangeProvider(a,new r.FoldingRangeAdapter(t)),new r.DiagnosticsAdapter(a,t,n)}
},{"./workerManager.js":"nIQY","./languageFeatures.js":"GB/r"}]},{},["7I3f"], null)