"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/page",{

/***/ "(app-pages-browser)/./src/app/profile/favorite/index.tsx":
/*!********************************************!*\
  !*** ./src/app/profile/favorite/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FavoriteCard: function() { return /* binding */ FavoriteCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FiEdit_FiX_react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=FiEdit,FiX!=!react-icons/fi */ \"(app-pages-browser)/./node_modules/react-icons/fi/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ FavoriteCard auto */ \nvar _s = $RefreshSig$();\n\n\nfunction FavoriteCard() {\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showInput, setShowInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [gameName, setGameName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    function handleButton() {\n        setShowInput(!showInput);\n        if (input !== \"\") {\n            setGameName(input);\n        }\n        setInput(\"\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full bg-gray-900 p-4 h-44 text-white rounded-lg flex justify-between flex-col\",\n        children: [\n            showInput ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"w-full rounded-md h-8 text-black px-2\",\n                        type: \"text\",\n                        value: input,\n                        onChange: (event)=>setInput(event.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\estagio.startup23\\\\Documents\\\\estudos\\\\NextJS-do-zero-ao-avan-ado-na-pratica-2024\\\\dalygames\\\\src\\\\app\\\\profile\\\\favorite\\\\index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleButton,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiEdit_FiX_react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiX, {\n                            size: 24,\n                            color: \"#fff\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\estagio.startup23\\\\Documents\\\\estudos\\\\NextJS-do-zero-ao-avan-ado-na-pratica-2024\\\\dalygames\\\\src\\\\app\\\\profile\\\\favorite\\\\index.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\estagio.startup23\\\\Documents\\\\estudos\\\\NextJS-do-zero-ao-avan-ado-na-pratica-2024\\\\dalygames\\\\src\\\\app\\\\profile\\\\favorite\\\\index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\estagio.startup23\\\\Documents\\\\estudos\\\\NextJS-do-zero-ao-avan-ado-na-pratica-2024\\\\dalygames\\\\src\\\\app\\\\profile\\\\favorite\\\\index.tsx\",\n                lineNumber: 23,\n                columnNumber: 17\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"self-start hover:scale-110 duration-200 transition-all\",\n                onClick: handleButton,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiEdit_FiX_react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiEdit, {\n                    size: 24,\n                    color: \"#fff\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\estagio.startup23\\\\Documents\\\\estudos\\\\NextJS-do-zero-ao-avan-ado-na-pratica-2024\\\\dalygames\\\\src\\\\app\\\\profile\\\\favorite\\\\index.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\estagio.startup23\\\\Documents\\\\estudos\\\\NextJS-do-zero-ao-avan-ado-na-pratica-2024\\\\dalygames\\\\src\\\\app\\\\profile\\\\favorite\\\\index.tsx\",\n                lineNumber: 35,\n                columnNumber: 17\n            }, this),\n            gameName && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white\",\n                        children: \"Jogo favorito: \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\estagio.startup23\\\\Documents\\\\estudos\\\\NextJS-do-zero-ao-avan-ado-na-pratica-2024\\\\dalygames\\\\src\\\\app\\\\profile\\\\favorite\\\\index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-bold text-white\",\n                        children: gameName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\estagio.startup23\\\\Documents\\\\estudos\\\\NextJS-do-zero-ao-avan-ado-na-pratica-2024\\\\dalygames\\\\src\\\\app\\\\profile\\\\favorite\\\\index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\estagio.startup23\\\\Documents\\\\estudos\\\\NextJS-do-zero-ao-avan-ado-na-pratica-2024\\\\dalygames\\\\src\\\\app\\\\profile\\\\favorite\\\\index.tsx\",\n                lineNumber: 44,\n                columnNumber: 17\n            }, this),\n            !gameName && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"font-bold text-white\",\n                children: \"Adicionar jogo\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\estagio.startup23\\\\Documents\\\\estudos\\\\NextJS-do-zero-ao-avan-ado-na-pratica-2024\\\\dalygames\\\\src\\\\app\\\\profile\\\\favorite\\\\index.tsx\",\n                lineNumber: 51,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\estagio.startup23\\\\Documents\\\\estudos\\\\NextJS-do-zero-ao-avan-ado-na-pratica-2024\\\\dalygames\\\\src\\\\app\\\\profile\\\\favorite\\\\index.tsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n_s(FavoriteCard, \"5hB+9A+C+RrF72XBDsmNKqDYo2A=\");\n_c = FavoriteCard;\nvar _c;\n$RefreshReg$(_c, \"FavoriteCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9mYXZvcml0ZS9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNpQztBQUNZO0FBRXRDLFNBQVNHOztJQUNaLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBRXpDLFNBQVNVO1FBQ0xILGFBQWEsQ0FBQ0Q7UUFFZCxJQUFHRixVQUFVLElBQUk7WUFDYkssWUFBWUw7UUFDaEI7UUFFQUMsU0FBUztJQUNiO0lBRUEscUJBQ0ksOERBQUNNO1FBQUlDLFdBQVU7O1lBQ1ROLDBCQUNFLDhEQUFDSzs7a0NBQ0csOERBQUNQO3dCQUNHUSxXQUFVO3dCQUNWQyxNQUFLO3dCQUNMQyxPQUFPVjt3QkFDUFcsVUFBVSxDQUFDQyxRQUFVWCxTQUFTVyxNQUFNQyxNQUFNLENBQUNILEtBQUs7Ozs7OztrQ0FFcEQsOERBQUNJO3dCQUFPQyxTQUFTVDtrQ0FDYiw0RUFBQ1IsaUZBQUdBOzRCQUFDa0IsTUFBTTs0QkFBSUMsT0FBTTs7Ozs7Ozs7Ozs7Ozs7OztxQ0FJN0IsOERBQUNIO2dCQUNETixXQUFVO2dCQUNWTyxTQUFTVDswQkFFTCw0RUFBQ1Qsb0ZBQU1BO29CQUFDbUIsTUFBTTtvQkFBSUMsT0FBTTs7Ozs7Ozs7Ozs7WUFJOUJiLDBCQUNFLDhEQUFDRzs7a0NBQ0csOERBQUNXO3dCQUFLVixXQUFVO2tDQUFhOzs7Ozs7a0NBQzdCLDhEQUFDVzt3QkFBRVgsV0FBVTtrQ0FBd0JKOzs7Ozs7Ozs7Ozs7WUFJM0MsQ0FBQ0EsMEJBQ0MsOERBQUNlO2dCQUFFWCxXQUFVOzBCQUF1Qjs7Ozs7Ozs7Ozs7O0FBSXBEO0dBbERnQlQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9maWxlL2Zhdm9yaXRlL2luZGV4LnRzeD9hN2Y5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZpRWRpdCwgRmlYIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRmF2b3JpdGVDYXJkKCkge1xyXG4gICAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtzaG93SW5wdXQsIHNldFNob3dJbnB1dF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZ2FtZU5hbWUsIHNldEdhbWVOYW1lXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQnV0dG9uKCkge1xyXG4gICAgICAgIHNldFNob3dJbnB1dCghc2hvd0lucHV0KTtcclxuXHJcbiAgICAgICAgaWYoaW5wdXQgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgc2V0R2FtZU5hbWUoaW5wdXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0SW5wdXQoXCJcIilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JheS05MDAgcC00IGgtNDQgdGV4dC13aGl0ZSByb3VuZGVkLWxnIGZsZXgganVzdGlmeS1iZXR3ZWVuIGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIHsgc2hvd0lucHV0ID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbWQgaC04IHRleHQtYmxhY2sgcHgtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRJbnB1dChldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmlYIHNpemU9ezI0fSBjb2xvcj1cIiNmZmZcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGYtc3RhcnQgaG92ZXI6c2NhbGUtMTEwIGR1cmF0aW9uLTIwMCB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCdXR0b259XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpRWRpdCBzaXplPXsyNH0gY29sb3I9XCIjZmZmXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7IGdhbWVOYW1lICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkpvZ28gZmF2b3JpdG86IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC13aGl0ZVwiPntnYW1lTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHsgIWdhbWVOYW1lICYmIChcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+QWRpY2lvbmFyIGpvZ288L3A+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJGaUVkaXQiLCJGaVgiLCJGYXZvcml0ZUNhcmQiLCJpbnB1dCIsInNldElucHV0Iiwic2hvd0lucHV0Iiwic2V0U2hvd0lucHV0IiwiZ2FtZU5hbWUiLCJzZXRHYW1lTmFtZSIsImhhbmRsZUJ1dHRvbiIsImRpdiIsImNsYXNzTmFtZSIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwic2l6ZSIsImNvbG9yIiwic3BhbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/favorite/index.tsx\n"));

/***/ })

});