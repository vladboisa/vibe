"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[7731],{"./src/components/AlertBanner/__stories__/alertBanner.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AlertBannerAsAnAnnouncement:()=>AlertBannerAsAnAnnouncement,AlertBannerAsAnOpportunityToUpgrade:()=>AlertBannerAsAnOpportunityToUpgrade,AlertBannerWithButton:()=>AlertBannerWithButton,AlertBannerWithLink:()=>AlertBannerWithLink,OverflowText:()=>OverflowText,Overview:()=>Overview,Types:()=>Types,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AlertBanner_stories_alertBanner_stories});__webpack_require__("../../node_modules/react/index.js");var AlertBanner=__webpack_require__("./src/components/AlertBanner/AlertBanner.tsx"),AlertBannerText=__webpack_require__("./src/components/AlertBanner/AlertBannerText/AlertBannerText.tsx"),AlertBannerLink=__webpack_require__("./src/components/AlertBanner/AlertBannerLink/AlertBannerLink.tsx"),AlertBannerButton=__webpack_require__("./src/components/AlertBanner/AlertBannerButton/AlertBannerButton.tsx"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),alertBanner_stories=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/AlertBanner/__stories__/alertBanner.stories.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(alertBanner_stories.A,options);alertBanner_stories.A&&alertBanner_stories.A.locals&&alertBanner_stories.A.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var metaSettings=(0,createStoryMetaSettingsDecorator.B)({component:AlertBanner.A,enumPropNamesArray:["backgroundColor"]}),alertBannerTemplate=function alertBannerTemplate(args){return(0,jsx_runtime.jsxs)(AlertBanner.A,_objectSpread(_objectSpread({},args),{},{children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:args.bannerText}),(0,jsx_runtime.jsx)(AlertBannerLink.A,{text:args.linkText,href:"https://monday.com"})]}))};alertBannerTemplate.displayName="alertBannerTemplate";const AlertBanner_stories_alertBanner_stories={title:"Feedback/AlertBanner",component:AlertBanner.A,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:alertBannerTemplate.bind({}),name:"Overview",args:{bannerText:"Alert banner message",linkText:"this is a CTA",className:"monday-storybook-alert-banner_big-container"}},Types={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-alert-banner_column-wrapper monday-storybook-alert-banner_big-container",children:[(0,jsx_runtime.jsxs)(AlertBanner.A,{children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"Alert banner message"}),(0,jsx_runtime.jsx)(AlertBannerLink.A,{text:"this is a CTA",href:"https://monday.com"})]}),(0,jsx_runtime.jsxs)(AlertBanner.A,{backgroundColor:AlertBanner.A.backgroundColors.POSITIVE,children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"Alert banner message"}),(0,jsx_runtime.jsx)(AlertBannerLink.A,{text:"this is a CTA",href:"https://monday.com"})]}),(0,jsx_runtime.jsxs)(AlertBanner.A,{backgroundColor:AlertBanner.A.backgroundColors.NEGATIVE,children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"Alert banner message"}),(0,jsx_runtime.jsx)(AlertBannerLink.A,{text:"this is a CTA",href:"https://monday.com"})]}),(0,jsx_runtime.jsxs)(AlertBanner.A,{backgroundColor:AlertBanner.A.backgroundColors.WARNING,children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"Alert banner message"}),(0,jsx_runtime.jsx)(AlertBannerLink.A,{text:"this is a CTA",href:"https://monday.com"})]}),(0,jsx_runtime.jsxs)(AlertBanner.A,{backgroundColor:AlertBanner.A.backgroundColors.DARK,children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"Alert banner message"}),(0,jsx_runtime.jsx)(AlertBannerLink.A,{text:"this is a CTA",href:"https://monday.com"})]})]})},name:"Types"},AlertBannerWithButton={render:function render(){return(0,jsx_runtime.jsxs)(AlertBanner.A,{className:"monday-storybook-alert-banner_big-container",children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"Lorem ipsum dolor sit amet"}),(0,jsx_runtime.jsx)(AlertBannerButton.A,{children:"Lorem Ipsum"})]})},name:"Alert Banner with button"},AlertBannerWithLink={render:function render(){return(0,jsx_runtime.jsxs)(AlertBanner.A,{className:"monday-storybook-alert-banner_big-container",children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"Alert banner message"}),(0,jsx_runtime.jsx)(AlertBannerLink.A,{text:"this is a CTA",href:"https://monday.com"})]})},name:"Alert Banner with link"},AlertBannerAsAnAnnouncement={render:function render(){return(0,jsx_runtime.jsxs)(AlertBanner.A,{backgroundColor:AlertBanner.A.backgroundColors.DARK,className:"monday-storybook-alert-banner_big-container",children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"Join us at Elevate 2022"}),(0,jsx_runtime.jsx)(AlertBannerLink.A,{text:"RSVP now",href:"https://monday.com"})]})},name:"Alert banner as an announcement"},AlertBannerAsAnOpportunityToUpgrade={render:function render(){return(0,jsx_runtime.jsxs)(AlertBanner.A,{className:"monday-storybook-alert-banner_big-container",children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"7 days left on your monday CRM trial"}),(0,jsx_runtime.jsx)(AlertBannerLink.A,{text:"Upgrade now",href:"https://monday.com"})]})},name:"Alert banner as an opportunity to upgrade"},OverflowText={render:function render(){return(0,jsx_runtime.jsxs)(AlertBanner.A,{className:"monday-storybook-alert-banner_small-container",children:[(0,jsx_runtime.jsx)(AlertBannerText.A,{text:"This is a really long alert..."}),(0,jsx_runtime.jsx)(AlertBannerLink.A,{text:"Call to action",href:"https://monday.com"})]})},name:"Overflow text"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: alertBannerTemplate.bind({}),\n  name: "Overview",\n  args: {\n    bannerText: "Alert banner message",\n    linkText: "this is a CTA",\n    className: "monday-storybook-alert-banner_big-container"\n  }\n}',...Overview.parameters?.docs?.source}}},Types.parameters={...Types.parameters,docs:{...Types.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-alert-banner_column-wrapper monday-storybook-alert-banner_big-container">\n      <AlertBanner>\n        <AlertBannerText text="Alert banner message" />\n        <AlertBannerLink text="this is a CTA" href="https://monday.com" />\n      </AlertBanner>\n      <AlertBanner backgroundColor={AlertBanner.backgroundColors.POSITIVE}>\n        <AlertBannerText text="Alert banner message" />\n        <AlertBannerLink text="this is a CTA" href="https://monday.com" />\n      </AlertBanner>\n      <AlertBanner backgroundColor={AlertBanner.backgroundColors.NEGATIVE}>\n        <AlertBannerText text="Alert banner message" />\n        <AlertBannerLink text="this is a CTA" href="https://monday.com" />\n      </AlertBanner>\n      <AlertBanner backgroundColor={AlertBanner.backgroundColors.WARNING}>\n        <AlertBannerText text="Alert banner message" />\n        <AlertBannerLink text="this is a CTA" href="https://monday.com" />\n      </AlertBanner>\n      <AlertBanner backgroundColor={AlertBanner.backgroundColors.DARK}>\n        <AlertBannerText text="Alert banner message" />\n        <AlertBannerLink text="this is a CTA" href="https://monday.com" />\n      </AlertBanner>\n    </div>,\n  name: "Types"\n}',...Types.parameters?.docs?.source}}},AlertBannerWithButton.parameters={...AlertBannerWithButton.parameters,docs:{...AlertBannerWithButton.parameters?.docs,source:{originalSource:'{\n  render: () => <AlertBanner className="monday-storybook-alert-banner_big-container">\n      <AlertBannerText text="Lorem ipsum dolor sit amet" />\n      <AlertBannerButton>Lorem Ipsum</AlertBannerButton>\n    </AlertBanner>,\n  name: "Alert Banner with button"\n}',...AlertBannerWithButton.parameters?.docs?.source}}},AlertBannerWithLink.parameters={...AlertBannerWithLink.parameters,docs:{...AlertBannerWithLink.parameters?.docs,source:{originalSource:'{\n  render: () => <AlertBanner className="monday-storybook-alert-banner_big-container">\n      <AlertBannerText text="Alert banner message" />\n      <AlertBannerLink text="this is a CTA" href="https://monday.com" />\n    </AlertBanner>,\n  name: "Alert Banner with link"\n}',...AlertBannerWithLink.parameters?.docs?.source}}},AlertBannerAsAnAnnouncement.parameters={...AlertBannerAsAnAnnouncement.parameters,docs:{...AlertBannerAsAnAnnouncement.parameters?.docs,source:{originalSource:'{\n  render: () => <AlertBanner backgroundColor={AlertBanner.backgroundColors.DARK} className="monday-storybook-alert-banner_big-container">\n      <AlertBannerText text="Join us at Elevate 2022" />\n      <AlertBannerLink text="RSVP now" href="https://monday.com" />\n    </AlertBanner>,\n  name: "Alert banner as an announcement"\n}',...AlertBannerAsAnAnnouncement.parameters?.docs?.source}}},AlertBannerAsAnOpportunityToUpgrade.parameters={...AlertBannerAsAnOpportunityToUpgrade.parameters,docs:{...AlertBannerAsAnOpportunityToUpgrade.parameters?.docs,source:{originalSource:'{\n  render: () => <AlertBanner className="monday-storybook-alert-banner_big-container">\n      <AlertBannerText text="7 days left on your monday CRM trial" />\n      <AlertBannerLink text="Upgrade now" href="https://monday.com" />\n    </AlertBanner>,\n  name: "Alert banner as an opportunity to upgrade"\n}',...AlertBannerAsAnOpportunityToUpgrade.parameters?.docs?.source}}},OverflowText.parameters={...OverflowText.parameters,docs:{...OverflowText.parameters?.docs,source:{originalSource:'{\n  render: () => <AlertBanner className="monday-storybook-alert-banner_small-container">\n      <AlertBannerText text="This is a really long alert..." />\n      <AlertBannerLink text="Call to action" href="https://monday.com" />\n    </AlertBanner>,\n  name: "Overflow text"\n}',...OverflowText.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Types","AlertBannerWithButton","AlertBannerWithLink","AlertBannerAsAnAnnouncement","AlertBannerAsAnOpportunityToUpgrade","OverflowText"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/AlertBanner/__stories__/alertBanner.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monday-storybook-alert-banner_column-wrapper{display:flex;flex-direction:column;gap:16px}.monday-storybook-alert-banner_big-container{width:610px}.monday-storybook-alert-banner_small-container{width:320px}.monday-storybook-alert-banner_medium-container{width:392px}.monday-storybook-alert-banner_pink{background:var(--sb-color-sofia_pink)}","",{version:3,sources:["webpack://./src/components/AlertBanner/__stories__/alertBanner.stories.scss"],names:[],mappings:"AACE,8CACE,YAAA,CACA,qBAAA,CACA,QAAA,CAGF,6CACE,WAAA,CAGF,+CACE,WAAA,CAGF,gDACE,WAAA,CAGF,oCACE,qCAAA",sourcesContent:[".monday-storybook-alert-banner {\n  &_column-wrapper {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n  }\n\n  &_big-container {\n    width: 610px;\n  }\n\n  &_small-container {\n    width: 320px;\n  }\n\n  &_medium-container {\n    width: 392px;\n  }\n\n  &_pink {\n    background: var(--sb-color-sofia_pink);\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);