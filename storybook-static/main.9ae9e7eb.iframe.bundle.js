(self.webpackChunk_gmcotta_design_system_team_lp=self.webpackChunk_gmcotta_design_system_team_lp||[]).push([[179],{"./generated-stories-entry.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)},"./src/components/card-content/card-content.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CardContent:function(){return card_content_stories_CardContent},default:function(){return card_content_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),jsx_runtime=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@gmcotta/design-system-core/dist/components/card.js"),__webpack_require__("./node_modules/@gmcotta/design-system-core/dist/components/tag.js"),__webpack_require__("./node_modules/@gmcotta/design-system-core/dist/components/heading.js"),__webpack_require__("./node_modules/@gmcotta/design-system-core/dist/components/paragraph.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),CardContent=function CardContent(_ref){var tagContent=_ref.tagContent,headingContent=_ref.headingContent,paragraphContent=_ref.paragraphContent;return(0,jsx_runtime.jsxs)("dsc-card",{class:"card-content",children:[(0,jsx_runtime.jsx)("dsc-tag",{children:tagContent}),(0,jsx_runtime.jsx)("dsc-heading",{level:"h3",size:"lg",children:headingContent}),(0,jsx_runtime.jsx)("dsc-paragraph",{children:paragraphContent})]})};CardContent.__docgenInfo={description:"",methods:[],displayName:"CardContent"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/card-content/index.jsx"]={name:"CardContent",docgenInfo:CardContent.__docgenInfo,path:"src/components/card-content/index.jsx"});var card_content_stories={title:"Landing Page/Card Content",component:CardContent},card_content_stories_CardContent=function Template(args){return(0,jsx_runtime.jsx)("div",{style:{width:"320px",height:"420px"},children:(0,jsx_runtime.jsx)(CardContent,(0,objectSpread2.Z)({},args))})}.bind({});card_content_stories_CardContent.args={tagContent:"Tag Highlight",headingContent:"Heading",paragraphContent:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente iusto asperiores ullam molestiae dolore, distinctio laborum minus minima eius nihil nesciunt odit quisquam ratione! Dignissimos exercitationem alias tempora. Quibusdam, temporibus?"},card_content_stories_CardContent.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => {\n  return (\n    <div style={{\n      width: '320px',\n      height: '420px'\n    }}>\n      <CardContentComponent {...args} />\n    </div>\n  )\n}"}},card_content_stories_CardContent.parameters)},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{decorators:function(){return decorators},globalTypes:function(){return globalTypes},parameters:function(){return parameters}});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},globalTypes={theme:{name:"Themes",description:"Temas",defaultValue:"marca-a/tema-1",right:!0,toolbar:{icon:"globe",items:[{value:"marca-a/tema-1",title:"Marca A",right:"Tema 1"},{value:"marca-a/tema-2",title:"Marca A",right:"Tema 2"}],showName:!0}},mode:{name:"Mode",description:"Mode",defaultValue:"light",right:!0,toolbar:{icon:"globe",items:[{value:"light",title:"Light"},{value:"dark",title:"Dark"}],showName:!0}}},decorators=[function(Story,context){var style="",_context$globals$them=context.globals.theme.split("/"),_context$globals$them2=(0,slicedToArray.Z)(_context$globals$them,2),brand=_context$globals$them2[0],theme=_context$globals$them2[1],mode=context.globals.mode;return"dark"===mode&&(style=".sb-show-main { background: #292929 !important; }"),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("style",{children:style}),(0,jsx_runtime.jsxs)("div",{brand:brand,theme:theme,mode:mode,children:[(0,jsx_runtime.jsx)("link",{rel:"stylesheet",type:"text/css",href:"tokens/global.css"}),(0,jsx_runtime.jsx)("link",{rel:"stylesheet",type:"text/css",href:"tokens/".concat(brand,"/").concat(theme,"/").concat(mode,".css")}),Story()]})]})}];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.kg.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./components/card-content/card-content.stories.jsx":"./src/components/card-content/card-content.stories.jsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[281],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.js")}));__webpack_require__.O()}]);