"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[slug]",{

/***/ "./templates/nocodb/index.ts":
/*!***********************************!*\
  !*** ./templates/nocodb/index.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generate\": function() { return /* binding */ generate; }\n/* harmony export */ });\n/* harmony import */ var _templates_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~templates-utils */ \"./utils/index.ts\");\n\nfunction generate(input) {\n    var services = [];\n    var passwordPostgres = (0,_templates_utils__WEBPACK_IMPORTED_MODULE_0__.randomPassword)();\n    var passwordRedis = (0,_templates_utils__WEBPACK_IMPORTED_MODULE_0__.randomPassword)();\n    var jwtSecret = (0,_templates_utils__WEBPACK_IMPORTED_MODULE_0__.randomString)(32);\n    services.push({\n        type: \"postgres\",\n        data: {\n            projectName: input.projectName,\n            serviceName: input.databaseServiceName,\n            image: \"postgres:15\",\n            password: passwordPostgres\n        }\n    });\n    services.push({\n        type: \"redis\",\n        data: {\n            projectName: input.projectName,\n            serviceName: input.redisServiceName,\n            password: passwordRedis\n        }\n    });\n    services.push({\n        type: \"app\",\n        data: {\n            projectName: input.projectName,\n            serviceName: input.appServiceName,\n            source: {\n                type: \"image\",\n                image: input.appServiceImage\n            },\n            proxy: {\n                port: 8080,\n                secure: false\n            },\n            env: [\n                \"NC_DB=postgres://postgres:\".concat(passwordPostgres, \"@\").concat(input.projectName, \"_\").concat(input.databaseServiceName, \":5432/\").concat(input.projectName),\n                \"NC_REDIS_URL=redis://default:\".concat(passwordRedis, \"@\").concat(input.projectName, \"_\").concat(input.redisServiceName, \":6379\"),\n                \"NC_AUTH_JWT_SECRET=\".concat(jwtSecret),\n                \"NC_PUBLIC_URL=https://\".concat(input.domain), \n            ].join(\"\\n\"),\n            mounts: [\n                {\n                    type: \"volume\",\n                    name: \"nc_data\",\n                    mountPath: \"/usr/app/data\"\n                }, \n            ]\n        }\n    });\n    return {\n        services: services\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90ZW1wbGF0ZXMvbm9jb2RiL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtGO0FBRzNFLFNBQVNFLFFBQVEsQ0FBQ0MsS0FBWSxFQUFVO0lBQzdDLElBQU1DLFFBQVEsR0FBYSxFQUFFO0lBQzdCLElBQU1DLGdCQUFnQixHQUFHSixnRUFBYyxFQUFFO0lBQ3pDLElBQU1LLGFBQWEsR0FBR0wsZ0VBQWMsRUFBRTtJQUN0QyxJQUFNTSxTQUFTLEdBQUdQLDhEQUFZLENBQUMsRUFBRSxDQUFDO0lBRWxDSSxRQUFRLENBQUNJLElBQUksQ0FBQztRQUNaQyxJQUFJLEVBQUUsVUFBVTtRQUNoQkMsSUFBSSxFQUFFO1lBQ0pDLFdBQVcsRUFBRVIsS0FBSyxDQUFDUSxXQUFXO1lBQzlCQyxXQUFXLEVBQUVULEtBQUssQ0FBQ1UsbUJBQW1CO1lBQ3RDQyxLQUFLLEVBQUUsYUFBYTtZQUNwQkMsUUFBUSxFQUFFVixnQkFBZ0I7U0FDM0I7S0FDRixDQUFDLENBQUM7SUFFSEQsUUFBUSxDQUFDSSxJQUFJLENBQUM7UUFDWkMsSUFBSSxFQUFFLE9BQU87UUFDYkMsSUFBSSxFQUFFO1lBQ0pDLFdBQVcsRUFBRVIsS0FBSyxDQUFDUSxXQUFXO1lBQzlCQyxXQUFXLEVBQUVULEtBQUssQ0FBQ2EsZ0JBQWdCO1lBQ25DRCxRQUFRLEVBQUVULGFBQWE7U0FDeEI7S0FDRixDQUFDLENBQUM7SUFFSEYsUUFBUSxDQUFDSSxJQUFJLENBQUM7UUFDWkMsSUFBSSxFQUFFLEtBQUs7UUFDWEMsSUFBSSxFQUFFO1lBQ0pDLFdBQVcsRUFBRVIsS0FBSyxDQUFDUSxXQUFXO1lBQzlCQyxXQUFXLEVBQUVULEtBQUssQ0FBQ2MsY0FBYztZQUNqQ0MsTUFBTSxFQUFFO2dCQUNOVCxJQUFJLEVBQUUsT0FBTztnQkFDYkssS0FBSyxFQUFFWCxLQUFLLENBQUNnQixlQUFlO2FBQzdCO1lBQ0RDLEtBQUssRUFBRTtnQkFBRUMsSUFBSSxFQUFFLElBQUk7Z0JBQUVDLE1BQU0sRUFBRSxLQUFLO2FBQUU7WUFDcENDLEdBQUcsRUFBRTtnQkFDRiw0QkFBMEIsQ0FBc0JwQixNQUFpQixDQUFyQ0UsZ0JBQWdCLEVBQUMsR0FBQyxDQUFvQixDQUFHRixNQUF5QixDQUE5Q0EsS0FBSyxDQUFDUSxXQUFXLEVBQUMsR0FBQyxDQUE0QixDQUFRUixNQUFpQixDQUFuREEsS0FBSyxDQUFDVSxtQkFBbUIsRUFBQyxRQUFNLENBQW9CLFFBQWxCVixLQUFLLENBQUNRLFdBQVcsQ0FBRTtnQkFDMUgsK0JBQTZCLENBQW1CUixNQUFpQixDQUFsQ0csYUFBYSxFQUFDLEdBQUMsQ0FBb0IsQ0FBR0gsTUFBc0IsQ0FBM0NBLEtBQUssQ0FBQ1EsV0FBVyxFQUFDLEdBQUMsQ0FBeUIsT0FBSyxDQUE1QlIsS0FBSyxDQUFDYSxnQkFBZ0IsRUFBQyxPQUFLLENBQUM7Z0JBQ2xHLHFCQUFtQixDQUFZLE9BQVZULFNBQVMsQ0FBRTtnQkFDaEMsd0JBQXNCLENBQWUsT0FBYkosS0FBSyxDQUFDcUIsTUFBTSxDQUFFO2FBQ3hDLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDWkMsTUFBTSxFQUFFO2dCQUNOO29CQUNFakIsSUFBSSxFQUFFLFFBQVE7b0JBQ2RrQixJQUFJLEVBQUUsU0FBUztvQkFDZkMsU0FBUyxFQUFFLGVBQWU7aUJBQzNCO2FBQ0Y7U0FDRjtLQUNGLENBQUMsQ0FBQztJQUVILE9BQU87UUFBRXhCLFFBQVEsRUFBUkEsUUFBUTtLQUFFLENBQUM7Q0FDckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdGVtcGxhdGVzL25vY29kYi9pbmRleC50cz9kZWM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE91dHB1dCwgcmFuZG9tU3RyaW5nLCByYW5kb21QYXNzd29yZCwgU2VydmljZXMgfSBmcm9tIFwifnRlbXBsYXRlcy11dGlsc1wiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi9tZXRhXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZShpbnB1dDogSW5wdXQpOiBPdXRwdXQge1xuICBjb25zdCBzZXJ2aWNlczogU2VydmljZXMgPSBbXTtcbiAgY29uc3QgcGFzc3dvcmRQb3N0Z3JlcyA9IHJhbmRvbVBhc3N3b3JkKCk7XG4gIGNvbnN0IHBhc3N3b3JkUmVkaXMgPSByYW5kb21QYXNzd29yZCgpO1xuICBjb25zdCBqd3RTZWNyZXQgPSByYW5kb21TdHJpbmcoMzIpO1xuXG4gIHNlcnZpY2VzLnB1c2goe1xuICAgIHR5cGU6IFwicG9zdGdyZXNcIixcbiAgICBkYXRhOiB7XG4gICAgICBwcm9qZWN0TmFtZTogaW5wdXQucHJvamVjdE5hbWUsXG4gICAgICBzZXJ2aWNlTmFtZTogaW5wdXQuZGF0YWJhc2VTZXJ2aWNlTmFtZSxcbiAgICAgIGltYWdlOiBcInBvc3RncmVzOjE1XCIsXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmRQb3N0Z3JlcyxcbiAgICB9LFxuICB9KTtcblxuICBzZXJ2aWNlcy5wdXNoKHtcbiAgICB0eXBlOiBcInJlZGlzXCIsXG4gICAgZGF0YToge1xuICAgICAgcHJvamVjdE5hbWU6IGlucHV0LnByb2plY3ROYW1lLFxuICAgICAgc2VydmljZU5hbWU6IGlucHV0LnJlZGlzU2VydmljZU5hbWUsXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmRSZWRpcyxcbiAgICB9LFxuICB9KTtcblxuICBzZXJ2aWNlcy5wdXNoKHtcbiAgICB0eXBlOiBcImFwcFwiLFxuICAgIGRhdGE6IHtcbiAgICAgIHByb2plY3ROYW1lOiBpbnB1dC5wcm9qZWN0TmFtZSxcbiAgICAgIHNlcnZpY2VOYW1lOiBpbnB1dC5hcHBTZXJ2aWNlTmFtZSxcbiAgICAgIHNvdXJjZToge1xuICAgICAgICB0eXBlOiBcImltYWdlXCIsXG4gICAgICAgIGltYWdlOiBpbnB1dC5hcHBTZXJ2aWNlSW1hZ2UsXG4gICAgICB9LFxuICAgICAgcHJveHk6IHsgcG9ydDogODA4MCwgc2VjdXJlOiBmYWxzZSB9LFxuICAgICAgZW52OiBbXG4gICAgICAgIGBOQ19EQj1wb3N0Z3JlczovL3Bvc3RncmVzOiR7cGFzc3dvcmRQb3N0Z3Jlc31AJHtpbnB1dC5wcm9qZWN0TmFtZX1fJHtpbnB1dC5kYXRhYmFzZVNlcnZpY2VOYW1lfTo1NDMyLyR7aW5wdXQucHJvamVjdE5hbWV9YCxcbiAgICAgICAgYE5DX1JFRElTX1VSTD1yZWRpczovL2RlZmF1bHQ6JHtwYXNzd29yZFJlZGlzfUAke2lucHV0LnByb2plY3ROYW1lfV8ke2lucHV0LnJlZGlzU2VydmljZU5hbWV9OjYzNzlgLFxuICAgICAgICBgTkNfQVVUSF9KV1RfU0VDUkVUPSR7and0U2VjcmV0fWAsXG4gICAgICAgIGBOQ19QVUJMSUNfVVJMPWh0dHBzOi8vJHtpbnB1dC5kb21haW59YCxcbiAgICAgIF0uam9pbihcIlxcblwiKSxcbiAgICAgIG1vdW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogXCJ2b2x1bWVcIixcbiAgICAgICAgICBuYW1lOiBcIm5jX2RhdGFcIixcbiAgICAgICAgICBtb3VudFBhdGg6IFwiL3Vzci9hcHAvZGF0YVwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4geyBzZXJ2aWNlcyB9O1xufVxuIl0sIm5hbWVzIjpbInJhbmRvbVN0cmluZyIsInJhbmRvbVBhc3N3b3JkIiwiZ2VuZXJhdGUiLCJpbnB1dCIsInNlcnZpY2VzIiwicGFzc3dvcmRQb3N0Z3JlcyIsInBhc3N3b3JkUmVkaXMiLCJqd3RTZWNyZXQiLCJwdXNoIiwidHlwZSIsImRhdGEiLCJwcm9qZWN0TmFtZSIsInNlcnZpY2VOYW1lIiwiZGF0YWJhc2VTZXJ2aWNlTmFtZSIsImltYWdlIiwicGFzc3dvcmQiLCJyZWRpc1NlcnZpY2VOYW1lIiwiYXBwU2VydmljZU5hbWUiLCJzb3VyY2UiLCJhcHBTZXJ2aWNlSW1hZ2UiLCJwcm94eSIsInBvcnQiLCJzZWN1cmUiLCJlbnYiLCJkb21haW4iLCJqb2luIiwibW91bnRzIiwibmFtZSIsIm1vdW50UGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./templates/nocodb/index.ts\n");

/***/ })

});