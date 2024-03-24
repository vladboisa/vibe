"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[2555,957],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Tabs/TabList/__stories__/tab-list.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Overview:()=>Overview,Sizes:()=>Sizes,Stretched:()=>Stretched,__namedExportsOrder:()=>__namedExportsOrder,default:()=>tab_list_stories});__webpack_require__("../../node_modules/react/index.js");var TabList=__webpack_require__("./src/components/Tabs/TabList/TabList.tsx"),Tab=__webpack_require__("./src/components/Tabs/Tab/Tab.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),tab_list_stories_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/Tabs/TabList/__stories__/tab-list.stories.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(tab_list_stories_module.A,options);const _stories_tab_list_stories_module=tab_list_stories_module.A&&tab_list_stories_module.A.locals?tab_list_stories_module.A.locals:void 0;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const tab_list_stories={title:"Navigation/Tabs/TabList",component:TabList.A};var tabListTemplate=function tabListTemplate(args){return(0,jsx_runtime.jsxs)(TabList.A,_objectSpread(_objectSpread({},args),{},{children:[(0,jsx_runtime.jsx)(Tab.A,{children:"First"}),(0,jsx_runtime.jsx)(Tab.A,{children:"Second"}),(0,jsx_runtime.jsx)(Tab.A,{children:"Third"}),(0,jsx_runtime.jsx)(Tab.A,{disabled:!0,children:"Disabled"})]}))};tabListTemplate.displayName="tabListTemplate";var Overview={render:tabListTemplate.bind({}),name:"Overview"},Default={render:function render(){return(0,jsx_runtime.jsxs)(TabList.A,{children:[(0,jsx_runtime.jsx)(Tab.A,{children:"First"}),(0,jsx_runtime.jsx)(Tab.A,{children:"Second"}),(0,jsx_runtime.jsx)(Tab.A,{children:"Third"}),(0,jsx_runtime.jsx)(Tab.A,{disabled:!0,children:"Disabled"})]})},name:"Default"},Stretched={render:function render(){return(0,jsx_runtime.jsx)("div",{style:{width:"100%"},children:(0,jsx_runtime.jsxs)(TabList.A,{tabType:"stretched",children:[(0,jsx_runtime.jsx)(Tab.A,{children:"First"}),(0,jsx_runtime.jsx)(Tab.A,{children:"Second"}),(0,jsx_runtime.jsx)(Tab.A,{children:"Third"}),(0,jsx_runtime.jsx)(Tab.A,{disabled:!0,children:"Disabled"})]})})},name:"Stretched"},Sizes={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:_stories_tab_list_stories_module.tabsSizesContainer,children:[(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Small",(0,jsx_runtime.jsxs)(TabList.A,{size:"sm",children:[(0,jsx_runtime.jsx)(Tab.A,{children:"First"}),(0,jsx_runtime.jsx)(Tab.A,{children:"Second"}),(0,jsx_runtime.jsx)(Tab.A,{children:"Third"}),(0,jsx_runtime.jsx)(Tab.A,{disabled:!0,children:"Disabled"})]})]}),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Medium",(0,jsx_runtime.jsxs)(TabList.A,{size:"md",children:[(0,jsx_runtime.jsx)(Tab.A,{children:"First"}),(0,jsx_runtime.jsx)(Tab.A,{children:"Second"}),(0,jsx_runtime.jsx)(Tab.A,{children:"Third"}),(0,jsx_runtime.jsx)(Tab.A,{disabled:!0,children:"Disabled"})]})]}),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Large",(0,jsx_runtime.jsxs)(TabList.A,{size:"lg",children:[(0,jsx_runtime.jsx)(Tab.A,{children:"First"}),(0,jsx_runtime.jsx)(Tab.A,{children:"Second"}),(0,jsx_runtime.jsx)(Tab.A,{children:"Third"}),(0,jsx_runtime.jsx)(Tab.A,{disabled:!0,children:"Disabled"})]})]})]})},name:"Sizes"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: tabListTemplate.bind({}),\n  name: "Overview"\n}',...Overview.parameters?.docs?.source}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => <TabList>\n      <Tab>First</Tab>\n      <Tab>Second</Tab>\n      <Tab>Third</Tab>\n      <Tab disabled>Disabled</Tab>\n    </TabList>,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},Stretched.parameters={...Stretched.parameters,docs:{...Stretched.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: "100%"\n  }}>\n      <TabList tabType="stretched">\n        <Tab>First</Tab>\n        <Tab>Second</Tab>\n        <Tab>Third</Tab>\n        <Tab disabled>Disabled</Tab>\n      </TabList>\n    </div>,\n  name: "Stretched"\n}',...Stretched.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => <div className={styles.tabsSizesContainer}>\n      <>\n        Small\n        <TabList size="sm">\n          <Tab>First</Tab>\n          <Tab>Second</Tab>\n          <Tab>Third</Tab>\n          <Tab disabled>Disabled</Tab>\n        </TabList>\n      </>\n      <>\n        Medium\n        <TabList size="md">\n          <Tab>First</Tab>\n          <Tab>Second</Tab>\n          <Tab>Third</Tab>\n          <Tab disabled>Disabled</Tab>\n        </TabList>\n      </>\n      <>\n        Large\n        <TabList size="lg">\n          <Tab>First</Tab>\n          <Tab>Second</Tab>\n          <Tab>Third</Tab>\n          <Tab disabled>Disabled</Tab>\n        </TabList>\n      </>\n    </div>,\n  name: "Sizes"\n}',...Sizes.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Default","Stretched","Sizes"]},"./src/components/Tabs/TabList/__stories__/tab-list.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_monday_ui_react_core_monday_ui_react_core_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_tab_list_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Tabs/TabList/__stories__/tab-list.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3"},(0,_home_runner_work_monday_ui_react_core_monday_ui_react_core_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components),{PropsTable}=_components;return PropsTable||function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}("PropsTable",!0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{of:_tab_list_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"tablist",children:"TabList"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"TabList is a container of all the tabs headers inside the tabs component"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gG,{of:_tab_list_stories__WEBPACK_IMPORTED_MODULE_4__.Overview})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PropsTable,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"default---compact-tabs",children:"Default - compact tabs"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gG,{of:_tab_list_stories__WEBPACK_IMPORTED_MODULE_4__.Default})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"stretched",children:"Stretched"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The width of the list is responsive to the screen's width."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gG,{of:_tab_list_stories__WEBPACK_IMPORTED_MODULE_4__.Stretched})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"sizes",children:"Sizes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.gG,{of:_tab_list_stories__WEBPACK_IMPORTED_MODULE_4__.Sizes})})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_monday_ui_react_core_monday_ui_react_core_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/Tabs/TabList/__stories__/tab-list.stories.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".tab-list-stories-module_tabsSizesContainer{display:flex;flex-direction:column;width:100%}","",{version:3,sources:["webpack://./src/components/Tabs/TabList/__stories__/tab-list.stories.module.scss"],names:[],mappings:"AAAA,4CACE,YAAA,CACA,qBAAA,CACA,UAAA",sourcesContent:[".tabsSizesContainer {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={tabsSizesContainer:"tab-list-stories-module_tabsSizesContainer"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);