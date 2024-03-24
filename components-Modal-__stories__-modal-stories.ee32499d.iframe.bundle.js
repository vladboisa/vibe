"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[2067],{"./src/components/Modal/__stories__/modal.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AlertModal:()=>AlertModal,ModalWithEditableTitle:()=>ModalWithEditableTitle,ModalWithIcon:()=>ModalWithIcon,Overview:()=>Overview,WidthVariantsCustom:()=>WidthVariantsCustom,WidthVariantsFull:()=>WidthVariantsFull,WidthVariantsNormal:()=>WidthVariantsNormal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_storybook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),_ModalContent_ModalContent__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Modal/ModalContent/ModalContent.tsx"),_ModalFooter_ModalFooter__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/Modal/ModalFooter/ModalFooter.tsx"),_ModalHeader_ModalHeader__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Modal/ModalHeader/ModalHeader.tsx"),_Modal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Modal/Modal.tsx"),_modal_stories_helpers_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Modal/__stories__/modal.stories.helpers.js"),_components_EditableHeading_EditableHeading__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/EditableHeading/EditableHeading.tsx"),_ModalFooter_ModalFooterButtons_ModalFooterButtons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Modal/ModalFooter/ModalFooterButtons/ModalFooterButtons.tsx"),_Icon_Icons__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/Icon/Icons/components/Upgrade.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["onClose"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var metaSettings=(0,_storybook__WEBPACK_IMPORTED_MODULE_2__.B)({component:_Modal__WEBPACK_IMPORTED_MODULE_3__.A,enumPropNamesArray:["width"],actionPropsArray:["onClose"]}),modalTemplate=function modalTemplate(_ref){_ref.onClose;var modalProps=_objectWithoutProperties(_ref,_excluded),_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),show=_useState2[0],setShow=_useState2[1],openModalButtonRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),closeModal=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){return setShow(!1)}),[]),openModalButton=(0,_modal_stories_helpers_js__WEBPACK_IMPORTED_MODULE_4__.T1)({title:modalProps.title,setShow,openModalButtonRef});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[openModalButton,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_3__.A,_objectSpread(_objectSpread({id:"story-book-modal",title:"Modal title",description:"Subtitle description text goes here",contentSpacing:!0,triggerElement:openModalButtonRef.current,show,onClose:closeModal},modalProps),{},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ModalContent_ModalContent__WEBPACK_IMPORTED_MODULE_5__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"Modal content goes here"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ModalFooter_ModalFooterButtons_ModalFooterButtons__WEBPACK_IMPORTED_MODULE_6__.A,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onPrimaryButtonClick:closeModal,onSecondaryButtonClick:closeModal})]}))]})};modalTemplate.displayName="modalTemplate";const __WEBPACK_DEFAULT_EXPORT__={title:"Feedback/Modal",component:_Modal__WEBPACK_IMPORTED_MODULE_3__.A,subcomponents:{ModalHeader:_ModalHeader_ModalHeader__WEBPACK_IMPORTED_MODULE_7__.A,ModalContent:_ModalContent_ModalContent__WEBPACK_IMPORTED_MODULE_5__.A,ModalFooter:_ModalFooter_ModalFooter__WEBPACK_IMPORTED_MODULE_8__.A},argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:modalTemplate.bind({}),name:"Overview"},WidthVariantsNormal={render:function render(){var _useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),show=_useState4[0],setShow=_useState4[1],openModalButtonRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),closeModal=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){setShow(!1)}),[]),openModalButton=(0,_modal_stories_helpers_js__WEBPACK_IMPORTED_MODULE_4__.T1)({title:"Default",setShow,openModalButtonRef});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[openModalButton,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_3__.A,{id:"story-book-modal",title:"Modal title",triggerElement:openModalButtonRef.current,show,onClose:closeModal,width:_Modal__WEBPACK_IMPORTED_MODULE_3__.A.width.DEFAULT,contentSpacing:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ModalContent_ModalContent__WEBPACK_IMPORTED_MODULE_5__.A,{children:"Modal content goes here"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ModalFooter_ModalFooterButtons_ModalFooterButtons__WEBPACK_IMPORTED_MODULE_6__.A,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onPrimaryButtonClick:closeModal,onSecondaryButtonClick:closeModal})]})]})},name:"Width variants - Normal"},WidthVariantsFull={render:function render(){var _useState6=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),show=_useState6[0],setShow=_useState6[1],openModalButtonRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),closeModal=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){setShow(!1)}),[]),openModalButton=(0,_modal_stories_helpers_js__WEBPACK_IMPORTED_MODULE_4__.T1)({title:"Full size",setShow,openModalButtonRef});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[openModalButton,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_3__.A,{id:"story-book-modal",title:"Modal title",triggerElement:openModalButtonRef.current,show,onClose:closeModal,width:_Modal__WEBPACK_IMPORTED_MODULE_3__.A.width.FULL_WIDTH,contentSpacing:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ModalContent_ModalContent__WEBPACK_IMPORTED_MODULE_5__.A,{children:"Modal content goes here"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ModalFooter_ModalFooterButtons_ModalFooterButtons__WEBPACK_IMPORTED_MODULE_6__.A,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onPrimaryButtonClick:closeModal,onSecondaryButtonClick:closeModal})]})]})},name:"Width variants - Full"},WidthVariantsCustom={render:function render(){var _useState8=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),show=_useState8[0],setShow=_useState8[1],openModalButtonRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),closeModal=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){setShow(!1)}),[]),openModalButton=(0,_modal_stories_helpers_js__WEBPACK_IMPORTED_MODULE_4__.T1)({title:"Custom size (i.e. 720px)",setShow,openModalButtonRef});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[openModalButton,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_3__.A,{id:"story-book-modal",title:"Modal title",triggerElement:openModalButtonRef.current,show,onClose:closeModal,width:"720px",contentSpacing:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ModalContent_ModalContent__WEBPACK_IMPORTED_MODULE_5__.A,{children:"Modal content goes here"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ModalFooter_ModalFooterButtons_ModalFooterButtons__WEBPACK_IMPORTED_MODULE_6__.A,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onPrimaryButtonClick:closeModal,onSecondaryButtonClick:closeModal})]})]})},name:"Width variants - custom"},ModalWithIcon={render:function render(){var _useState10=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),show=_useState10[0],setShow=_useState10[1],openModalButtonRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),closeModal=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){setShow(!1)}),[]),openModalButton=(0,_modal_stories_helpers_js__WEBPACK_IMPORTED_MODULE_4__.T1)({title:"Header with icon",setShow,openModalButtonRef});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[openModalButton,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_3__.A,{id:"story-book-modal",title:"Modal header with an Icon",triggerElement:openModalButtonRef.current,show,onClose:closeModal,closeButtonAriaLabel:"close",width:_Modal__WEBPACK_IMPORTED_MODULE_3__.A.width.DEFAULT,contentSpacing:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ModalHeader_ModalHeader__WEBPACK_IMPORTED_MODULE_7__.A,{title:"Modal Heading",icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_9__.A,iconSize:32}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ModalContent_ModalContent__WEBPACK_IMPORTED_MODULE_5__.A,{children:"Modal content goes here"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ModalFooter_ModalFooterButtons_ModalFooterButtons__WEBPACK_IMPORTED_MODULE_6__.A,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onPrimaryButtonClick:closeModal,onSecondaryButtonClick:closeModal})]})]})},name:"Modal with icon"},AlertModal={render:function render(){var _useState12=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),show=_useState12[0],setShow=_useState12[1],openModalButtonRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),closeModal=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){setShow(!1)}),[]),openModalButton=(0,_modal_stories_helpers_js__WEBPACK_IMPORTED_MODULE_4__.T1)({title:"Alert dialog",setShow,openModalButtonRef});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[openModalButton,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_3__.A,{alertDialog:!0,id:"story-book-modal",title:"Alert modal",triggerElement:openModalButtonRef.current,show,onClose:closeModal,contentSpacing:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ModalContent_ModalContent__WEBPACK_IMPORTED_MODULE_5__.A,{children:"Modal content goes here"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ModalFooter_ModalFooterButtons_ModalFooterButtons__WEBPACK_IMPORTED_MODULE_6__.A,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onPrimaryButtonClick:closeModal,onSecondaryButtonClick:closeModal})]})]})},name:"Alert Modal"},ModalWithEditableTitle={render:function render(){var _useState14=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),show=_useState14[0],setShow=_useState14[1],openModalButtonRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),closeModal=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){setShow(!1)}),[]),openModalButton=(0,_modal_stories_helpers_js__WEBPACK_IMPORTED_MODULE_4__.T1)({title:"Open modal",setShow,openModalButtonRef});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[openModalButton,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_3__.A,{id:"story-book-modal",triggerElement:openModalButtonRef.current,show,onClose:closeModal,closeButtonAriaLabel:"close",width:_Modal__WEBPACK_IMPORTED_MODULE_3__.A.width.DEFAULT,contentSpacing:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ModalHeader_ModalHeader__WEBPACK_IMPORTED_MODULE_7__.A,{description:"Description text goes here",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_EditableHeading_EditableHeading__WEBPACK_IMPORTED_MODULE_10__.A,{type:_components_EditableHeading_EditableHeading__WEBPACK_IMPORTED_MODULE_10__.A.types.H2,value:"Modal title"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ModalContent_ModalContent__WEBPACK_IMPORTED_MODULE_5__.A,{children:"Modal content goes here"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ModalFooter_ModalFooterButtons_ModalFooterButtons__WEBPACK_IMPORTED_MODULE_6__.A,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onPrimaryButtonClick:closeModal,onSecondaryButtonClick:closeModal})]})]})},name:"Modal with editable title"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: modalTemplate.bind({}),\n  name: "Overview"\n}',...Overview.parameters?.docs?.source}}},WidthVariantsNormal.parameters={...WidthVariantsNormal.parameters,docs:{...WidthVariantsNormal.parameters?.docs,source:{originalSource:'{\n  // Boilerplate for creating a modal, not relevant for this example\n  render:\n  // Internal helper, not part of the API\n  // internal helper, not part of the API\n  // Modal with default width variant\n  // Width prop effects on the modal width\n  () => {\n    const [show, setShow] = useState(false);\n    const openModalButtonRef = useRef(null);\n    const closeModal = useCallback(() => {\n      setShow(false);\n    }, []);\n    const openModalButton = useHelperOpenModalButton({\n      title: "Default",\n      setShow,\n      openModalButtonRef\n    });\n    return <>\n          {openModalButton}\n          <Modal id="story-book-modal" title="Modal title" triggerElement={openModalButtonRef.current} show={show} onClose={closeModal} width={Modal.width.DEFAULT} contentSpacing>\n            <ModalContent>Modal content goes here</ModalContent>\n            <ModalFooterButtons primaryButtonText="Confirm" secondaryButtonText="Cancel" onPrimaryButtonClick={closeModal} onSecondaryButtonClick={closeModal} />\n          </Modal>\n        </>;\n  },\n  name: "Width variants - Normal"\n}',...WidthVariantsNormal.parameters?.docs?.source}}},WidthVariantsFull.parameters={...WidthVariantsFull.parameters,docs:{...WidthVariantsFull.parameters?.docs,source:{originalSource:'{\n  // Boilerplate for creating a modal, not relevant for this example\n  render:\n  // Internal helper, not part of the API\n  // Modal with full width variant\n  // Width prop effects on the modal width\n  () => {\n    const [show, setShow] = useState(false);\n    const openModalButtonRef = useRef(null);\n    const closeModal = useCallback(() => {\n      setShow(false);\n    }, []);\n    const openModalButton = useHelperOpenModalButton({\n      title: "Full size",\n      setShow,\n      openModalButtonRef\n    });\n    return <>\n          {openModalButton}\n          <Modal id="story-book-modal" title="Modal title" triggerElement={openModalButtonRef.current} show={show} onClose={closeModal} width={Modal.width.FULL_WIDTH} contentSpacing>\n            <ModalContent>Modal content goes here</ModalContent>\n            <ModalFooterButtons primaryButtonText="Confirm" secondaryButtonText="Cancel" onPrimaryButtonClick={closeModal} onSecondaryButtonClick={closeModal} />\n          </Modal>\n        </>;\n  },\n  name: "Width variants - Full"\n}',...WidthVariantsFull.parameters?.docs?.source}}},WidthVariantsCustom.parameters={...WidthVariantsCustom.parameters,docs:{...WidthVariantsCustom.parameters?.docs,source:{originalSource:'{\n  // Boilerplate for creating a modal, not relevant for this example\n  render:\n  // Internal helper, not part of the API\n  // Modal with full width variant\n  // Width prop effects on the modal width\n  () => {\n    const [show, setShow] = useState(false);\n    const openModalButtonRef = useRef(null);\n    const closeModal = useCallback(() => {\n      setShow(false);\n    }, []);\n    const openModalButton = useHelperOpenModalButton({\n      title: "Custom size (i.e. 720px)",\n      setShow,\n      openModalButtonRef\n    });\n    return <>\n          {openModalButton}\n          <Modal id="story-book-modal" title="Modal title" triggerElement={openModalButtonRef.current} show={show} onClose={closeModal} width={"720px"} contentSpacing>\n            <ModalContent>Modal content goes here</ModalContent>\n            <ModalFooterButtons primaryButtonText="Confirm" secondaryButtonText="Cancel" onPrimaryButtonClick={closeModal} onSecondaryButtonClick={closeModal} />\n          </Modal>\n        </>;\n  },\n  name: "Width variants - custom"\n}',...WidthVariantsCustom.parameters?.docs?.source}}},ModalWithIcon.parameters={...ModalWithIcon.parameters,docs:{...ModalWithIcon.parameters?.docs,source:{originalSource:'{\n  // Boilerplate for creating a modal, not relevant for add icon to the header\n  render:\n  // Internal helper, not part of the API\n  // Modal header with an icon example\n  /** Please implement your custom Modal header and set it as child for adding an Icon to your modal **/\n  () => {\n    const [show, setShow] = useState(false);\n    const openModalButtonRef = useRef(null);\n    const closeModal = useCallback(() => {\n      setShow(false);\n    }, []);\n    const openModalButton = useHelperOpenModalButton({\n      title: "Header with icon",\n      setShow,\n      openModalButtonRef\n    });\n    return <div>\n          {openModalButton}\n          <Modal id={"story-book-modal"} title="Modal header with an Icon" triggerElement={openModalButtonRef.current} show={show} onClose={closeModal} closeButtonAriaLabel={"close"} width={Modal.width.DEFAULT} contentSpacing>\n            {}\n            <ModalHeader title={"Modal Heading"} icon={Upgrade} iconSize={32} />\n            <ModalContent>Modal content goes here</ModalContent>\n            <ModalFooterButtons primaryButtonText="Confirm" secondaryButtonText="Cancel" onPrimaryButtonClick={closeModal} onSecondaryButtonClick={closeModal} />\n          </Modal>\n        </div>;\n  },\n  name: "Modal with icon"\n}',...ModalWithIcon.parameters?.docs?.source}}},AlertModal.parameters={...AlertModal.parameters,docs:{...AlertModal.parameters?.docs,source:{originalSource:'{\n  // Boilerplate for creating a modal, not relevant for add icon to the header\n  render:\n  // Internal helper, not part of the API\n  // Modal header with an icon example\n  // this makes your modal as alert dialog\n  () => {\n    const [show, setShow] = useState(false);\n    const openModalButtonRef = useRef(null);\n    const closeModal = useCallback(() => {\n      setShow(false);\n    }, []);\n    const openModalButton = useHelperOpenModalButton({\n      title: "Alert dialog",\n      setShow,\n      openModalButtonRef\n    });\n    return <div>\n          {openModalButton}\n          <Modal alertDialog id="story-book-modal" title="Alert modal" triggerElement={openModalButtonRef.current} show={show} onClose={closeModal} contentSpacing>\n            <ModalContent>Modal content goes here</ModalContent>\n            <ModalFooterButtons primaryButtonText="Confirm" secondaryButtonText="Cancel" onPrimaryButtonClick={closeModal} onSecondaryButtonClick={closeModal} />\n          </Modal>\n        </div>;\n  },\n  name: "Alert Modal"\n}',...AlertModal.parameters?.docs?.source}}},ModalWithEditableTitle.parameters={...ModalWithEditableTitle.parameters,docs:{...ModalWithEditableTitle.parameters?.docs,source:{originalSource:'{\n  // Boilerplate for creating a modal, not relevant for add icon to the header\n  render:\n  // Internal helper, not part of the API\n  // Modal header with an icon example\n  /** Please follow the design guidelines when implementing custom title **/\n  () => {\n    const [show, setShow] = useState(false);\n    const openModalButtonRef = useRef(null);\n    const closeModal = useCallback(() => {\n      setShow(false);\n    }, []);\n    const openModalButton = useHelperOpenModalButton({\n      title: "Open modal",\n      setShow,\n      openModalButtonRef\n    });\n    return <div>\n          {openModalButton}\n          <Modal id={"story-book-modal"} triggerElement={openModalButtonRef.current} show={show} onClose={closeModal} closeButtonAriaLabel={"close"} width={Modal.width.DEFAULT} contentSpacing>\n            {}\n            <ModalHeader description={"Description text goes here"}>\n              <EditableHeading type={EditableHeading.types.H2} value={"Modal title"} />\n            </ModalHeader>\n            <ModalContent>Modal content goes here</ModalContent>\n            <ModalFooterButtons primaryButtonText="Confirm" secondaryButtonText="Cancel" onPrimaryButtonClick={closeModal} onSecondaryButtonClick={closeModal} />\n          </Modal>\n        </div>;\n  },\n  name: "Modal with editable title"\n}',...ModalWithEditableTitle.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","WidthVariantsNormal","WidthVariantsFull","WidthVariantsCustom","ModalWithIcon","AlertModal","ModalWithEditableTitle"]},"./src/components/Modal/__stories__/modal.stories.helpers.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ty:()=>DialogAsModalBadExample,XG:()=>ModalExampleWrapper,Ge:()=>TipAlertDialog,tC:()=>TipDevDropdownInsideModal,w8:()=>TipDialog,T1:()=>useHelperOpenModalButton});var react=__webpack_require__("../../node_modules/react/index.js"),Button=__webpack_require__("./src/components/Button/Button.tsx"),Modal=__webpack_require__("./src/components/Modal/Modal.tsx"),DialogContentContainer=__webpack_require__("./src/components/DialogContentContainer/DialogContentContainer.tsx"),LegacyHeading=__webpack_require__("./src/components/LegacyHeading/LegacyHeading.tsx"),Dialog=__webpack_require__("./src/components/Dialog/Dialog.tsx"),Flex=__webpack_require__("./src/components/Flex/Flex.tsx"),SplitButtonConstants=__webpack_require__("./src/components/SplitButton/SplitButtonConstants.ts"),ModalFooterButtons=__webpack_require__("./src/components/Modal/ModalFooter/ModalFooterButtons/ModalFooterButtons.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Modal_stories_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/Modal/__stories__/Modal.stories.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Modal_stories_module.A,options);const _stories_Modal_stories_module=Modal_stories_module.A&&Modal_stories_module.A.locals?Modal_stories_module.A.locals:void 0;var classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),tip=__webpack_require__("../storybook-blocks/dist/components/tip/tip.js"),storybook_link=__webpack_require__("../storybook-blocks/dist/components/storybook-link/storybook-link.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["bestPractice","modalTitle","buttonTitle","children","hideFooter","show","openModalTestId"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var useHelperOpenModalButton=function useHelperOpenModalButton(_ref){var _ref$title=_ref.title,title=void 0===_ref$title?"Open modal":_ref$title,setShow=_ref.setShow,openModalButtonRef=_ref.openModalButtonRef,_ref$color=_ref.color,color=void 0===_ref$color?void 0:_ref$color,_ref$testId=_ref.testId,testId=void 0===_ref$testId?void 0:_ref$testId;return(0,jsx_runtime.jsx)(Button.A,{onClick:function onClick(){return setShow(!0)},ref:openModalButtonRef,color,"data-testid":testId,children:title})};useHelperOpenModalButton.displayName="useHelperOpenModalButton";var ModalExampleWrapper=function ModalExampleWrapper(_ref2){var bestPractice=_ref2.bestPractice,modalTitle=_ref2.modalTitle,buttonTitle=_ref2.buttonTitle,children=_ref2.children,hideFooter=_ref2.hideFooter,_ref2$show=_ref2.show,defaultShow=void 0!==_ref2$show&&_ref2$show,openModalTestId=_ref2.openModalTestId,otherModalProps=_objectWithoutProperties(_ref2,_excluded),_useState2=_slicedToArray((0,react.useState)(defaultShow),2),show=_useState2[0],setShow=_useState2[1],openModalButtonRef=(0,react.useRef)(null),closeModal=(0,react.useCallback)((function(){setShow(!1)}),[]),openModalColor=bestPractice?Button.A.colors.POSITIVE:Button.A.colors.NEGATIVE,openModalButton=useHelperOpenModalButton({testId:openModalTestId,title:buttonTitle||modalTitle,setShow,openModalButtonRef,color:openModalColor}),footer=hideFooter?null:(0,jsx_runtime.jsx)(ModalFooterButtons.A,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onPrimaryButtonClick:closeModal,onSecondaryButtonClick:closeModal});return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[openModalButton,(0,jsx_runtime.jsxs)(Modal.A,_objectSpread(_objectSpread({id:"story-book-modal",title:modalTitle,triggerElement:openModalButtonRef.current,show,onClose:closeModal,closeButtonAriaLabel:"close",width:Modal.A.width.DEFAULT},otherModalProps),{},{contentSpacing:!0,children:[children,footer]}))]})},DialogAsModalBadExample=function DialogAsModalBadExample(){var _useState4=_slicedToArray((0,react.useState)(!1),2),show=_useState4[0],setShow=_useState4[1],closeDialog=(0,react.useCallback)((function(){setShow(!1)}),[]),onShow=(0,react.useCallback)((function(){setShow(!0)}),[]),dialogContent=(0,jsx_runtime.jsx)(DialogContentContainer.A,{style:{width:"500px",margin:"auto"},children:(0,jsx_runtime.jsxs)(Flex.A,{className:classnames_default()(_stories_Modal_stories_module.modalDialogBadExample,_stories_Modal_stories_module.content),direction:Flex.A.directions.COLUMN,justify:Flex.A.justify.START,align:Flex.A.align.START,children:[(0,jsx_runtime.jsx)(LegacyHeading.A,{className:classnames_default()(_stories_Modal_stories_module.modalDialogBadExample,_stories_Modal_stories_module.heading),type:LegacyHeading.A.types.h2,value:"Dialog title"}),"Dialog content",(0,jsx_runtime.jsx)(ModalFooterButtons.A,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",className:classnames_default()(_stories_Modal_stories_module.modalDialogBadExample,_stories_Modal_stories_module.footer),onPrimaryButtonClick:closeDialog,onSecondaryButtonClick:closeDialog})]})});return(0,jsx_runtime.jsx)(Dialog.A,{open:show,onClickOutside:closeDialog,wrapperClassName:classnames_default()(_stories_Modal_stories_module.modalDialogBadExample,_stories_Modal_stories_module.wrapper),content:dialogContent,showTrigger:SplitButtonConstants.S3,children:(0,jsx_runtime.jsx)(Button.A,{onClick:onShow,color:Button.A.colors.NEGATIVE,children:"Click here"})})};DialogAsModalBadExample.displayName="DialogAsModalBadExample";var TipAlertDialog=function TipAlertDialog(){return(0,jsx_runtime.jsxs)(tip.A,{children:["Set ",(0,jsx_runtime.jsx)("code",{children:"alertDialog"})," to ",(0,jsx_runtime.jsx)("code",{children:"true"})," in order to allow closing the modal only by the close buttons and not by ESC or by clicking outside."]})};TipAlertDialog.displayName="TipAlertDialog";var TipDialog=function TipDialog(){return(0,jsx_runtime.jsxs)(tip.A,{children:["For creating a popover positioned next to other components, like customized menus, check out our"," ",(0,jsx_runtime.jsx)(storybook_link.A,{page:"Components/Dialog/Dialog",size:storybook_link.A.sizes.SMALL,children:"Dialog"})," ","component."]})};TipDialog.displayName="TipDialog";var TipDevDropdownInsideModal=function TipDevDropdownInsideModal(){return(0,jsx_runtime.jsxs)(tip.A,{title:"Dev tip",children:["If you wish to implement a dropdown inside a Modal container and need help displaying the dropdown's popovers\n    correctly, read more about our dropdown in popovers technical pattern ",(0,jsx_runtime.jsx)(storybook_link.A,{page:"Technical patterns/Dropdowns inside pop overs",story:"Modal with damaged dropdown",size:storybook_link.A.sizes.SMALL,children:"here."})]})};TipDevDropdownInsideModal.displayName="TipDevDropdownInsideModal",useHelperOpenModalButton.__docgenInfo={description:"",methods:[],displayName:"useHelperOpenModalButton",props:{title:{defaultValue:{value:'"Open modal"',computed:!1},required:!1},color:{defaultValue:{value:"undefined",computed:!0},required:!1},testId:{defaultValue:{value:"undefined",computed:!0},required:!1}}},ModalExampleWrapper.__docgenInfo={description:"",methods:[],displayName:"ModalExampleWrapper",props:{show:{defaultValue:{value:"false",computed:!1},required:!1}}},DialogAsModalBadExample.__docgenInfo={description:"",methods:[],displayName:"DialogAsModalBadExample"},TipAlertDialog.__docgenInfo={description:"",methods:[],displayName:"TipAlertDialog"},TipDialog.__docgenInfo={description:"",methods:[],displayName:"TipDialog"},TipDevDropdownInsideModal.__docgenInfo={description:"",methods:[],displayName:"TipDevDropdownInsideModal"}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/Modal/__stories__/Modal.stories.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Modal-stories-module_modalDialogBadExample.Modal-stories-module_wrapper{position:sticky !important;transform:none !important;bottom:50% !important}.Modal-stories-module_modalDialogBadExample.Modal-stories-module_content{margin-bottom:var(--sb-spacing-large);margin-inline:var(--sb-spacing-large)}.Modal-stories-module_modalDialogBadExample.Modal-stories-module_heading{padding:0}.Modal-stories-module_modalDialogBadExample.Modal-stories-module_footer{width:100%}","",{version:3,sources:["webpack://./src/components/Modal/__stories__/Modal.stories.module.scss"],names:[],mappings:"AACE,yEACE,0BAAA,CACA,yBAAA,CACA,qBAAA,CAGF,yEACE,qCAAA,CACA,qCAAA,CAGF,yEACE,SAAA,CAGF,wEACE,UAAA",sourcesContent:[".modalDialogBadExample {\n  &.wrapper {\n    position: sticky !important;\n    transform: none !important;\n    bottom: 50% !important;\n  }\n\n  &.content {\n    margin-bottom: var(--sb-spacing-large);\n    margin-inline: var(--sb-spacing-large);\n  }\n\n  &.heading {\n    padding: 0;\n  }\n\n  &.footer {\n    width: 100%;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={modalDialogBadExample:"Modal-stories-module_modalDialogBadExample",wrapper:"Modal-stories-module_wrapper",content:"Modal-stories-module_content",heading:"Modal-stories-module_heading",footer:"Modal-stories-module_footer"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);