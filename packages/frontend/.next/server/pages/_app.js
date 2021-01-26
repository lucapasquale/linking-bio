module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
const config = {
  ACCESS_TOKEN_KEY: '__ACCESS_TOKEN__',
  REFRESH_TOKEN_KEY: '__REFRESH_TOKEN__',
  API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://linking-bio.rj.r.appspot.com',
  // API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3010',
  CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:3000'
};

/***/ }),

/***/ "./src/helpers/graphql/apollo-client.ts":
/*!**********************************************!*\
  !*** ./src/helpers/graphql/apollo-client.ts ***!
  \**********************************************/
/*! exports provided: useApollo, createApolloClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApollo", function() { return useApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApolloClient", function() { return createApolloClient; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~src/config */ "./src/config.ts");
/* harmony import */ var _auth_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-link */ "./src/helpers/graphql/auth-link.ts");
/* harmony import */ var _error_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-link */ "./src/helpers/graphql/error-link.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






let apolloClient;
function useApollo(initialState = {}) {
  const store = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => initializeApollo(initialState), [initialState]);
  return store;
}
function createApolloClient(_, __) {
  const link = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["from"])([_auth_link__WEBPACK_IMPORTED_MODULE_3__["AuthLink"], _error_link__WEBPACK_IMPORTED_MODULE_4__["ErrorLink"], new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["HttpLink"]({
    uri: `${_src_config__WEBPACK_IMPORTED_MODULE_2__["config"].API_URL}/graphql`
  })]);
  const cache = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]({
    addTypename: false,
    dataIdFromObject: obj => {
      switch (obj.__typename) {
        case 'Page':
          return obj.slug;

        default:
          return Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["defaultDataIdFromObject"])(obj);
      }
    }
  });
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
    cache,
    link
  });
}

function initializeApollo(initialState = {}) {
  var _apolloClient2;

  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient(); // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here


  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract(); // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data


    _apolloClient.cache.restore(_objectSpread(_objectSpread({}, existingCache), initialState));
  } // For SSG and SSR always create a new Apollo Client


  if (true) return _apolloClient; // Create the Apollo Client once in the client

  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

/***/ }),

/***/ "./src/helpers/graphql/auth-link.ts":
/*!******************************************!*\
  !*** ./src/helpers/graphql/auth-link.ts ***!
  \******************************************/
/*! exports provided: AuthLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLink", function() { return AuthLink; });
/* harmony import */ var _apollo_link_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/link-context */ "@apollo/link-context");
/* harmony import */ var _apollo_link_context__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_link_context__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~src/config */ "./src/config.ts");


const AuthLink = Object(_apollo_link_context__WEBPACK_IMPORTED_MODULE_0__["setContext"])(() => {
  const token = localStorage.getItem(_src_config__WEBPACK_IMPORTED_MODULE_1__["config"].ACCESS_TOKEN_KEY);

  if (!token) {
    return;
  }

  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
});

/***/ }),

/***/ "./src/helpers/graphql/error-link.ts":
/*!*******************************************!*\
  !*** ./src/helpers/graphql/error-link.ts ***!
  \*******************************************/
/*! exports provided: ErrorLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorLink", function() { return ErrorLink; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client/link/error */ "@apollo/client/link/error");
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~src/config */ "./src/config.ts");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apollo-client */ "./src/helpers/graphql/apollo-client.ts");




const ErrorLink = Object(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_1__["onError"])(({
  graphQLErrors,
  operation,
  forward
}) => {
  if (!graphQLErrors || !graphQLErrors.length) {
    return;
  }

  for (const gqlError of graphQLErrors) {
    if (!isUnauthorizedError(gqlError) || isRefreshTokenOperation(operation)) {
      return;
    }

    return Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["fromPromise"])(getNewTokens().catch(err => {
      localStorage.removeItem(_src_config__WEBPACK_IMPORTED_MODULE_2__["config"].ACCESS_TOKEN_KEY);
      localStorage.removeItem(_src_config__WEBPACK_IMPORTED_MODULE_2__["config"].REFRESH_TOKEN_KEY);
      throw err;
    })).flatMap(accessToken => {
      // modify the operation context with a new token
      operation.setContext({
        headers: {
          authorization: `Bearer ${accessToken}`
        }
      }); // retry the request, returning the new observable

      return forward(operation);
    });
  }

  return;
});

function isUnauthorizedError(error) {
  return error && error.message === 'Unauthorized';
}

function isRefreshTokenOperation(operation) {
  return operation && operation.operationName === 'RefreshToken';
}

const REFRESH_TOKEN_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation RefreshToken($token: String!) {
    refreshToken(token: $token) {
      accessToken
      refreshToken
    }
  }
`;

async function getNewTokens() {
  const existingRefreshToken = localStorage.getItem(_src_config__WEBPACK_IMPORTED_MODULE_2__["config"].REFRESH_TOKEN_KEY);

  if (!existingRefreshToken) {
    return;
  }

  const client = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["createApolloClient"])();
  const {
    data
  } = await client.mutate({
    mutation: REFRESH_TOKEN_MUTATION,
    variables: {
      token: existingRefreshToken
    },
    errorPolicy: 'none'
  });

  if (!data) {
    return;
  }

  const {
    accessToken,
    refreshToken
  } = data.refreshToken;
  localStorage.setItem(_src_config__WEBPACK_IMPORTED_MODULE_2__["config"].ACCESS_TOKEN_KEY, accessToken);
  localStorage.setItem(_src_config__WEBPACK_IMPORTED_MODULE_2__["config"].REFRESH_TOKEN_KEY, refreshToken);
  return accessToken;
}

/***/ }),

/***/ "./src/helpers/theme/index.ts":
/*!************************************!*\
  !*** ./src/helpers/theme/index.ts ***!
  \************************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);

const theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: {
    type: 'dark',
    primary: {
      main: '#253341'
    },
    secondary: {
      main: '#3AAFA9'
    },
    background: {
      default: '#17252A'
    }
  },
  typography: {
    fontFamily: 'Montserrat',
    h1: {
      fontSize: '64px',
      fontWeight: 900
    },
    subtitle1: {
      fontWeight: 'bold'
    }
  }
});

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/theme */ "./src/helpers/theme/index.ts");
/* harmony import */ var _helpers_graphql_apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/graphql/apollo-client */ "./src/helpers/graphql/apollo-client.ts");


var _jsxFileName = "/home/luca/code/lucapasquale/linking-bio/packages/frontend/src/pages/_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function App({
  pageProps,
  Component
}) {
  const apolloClient = Object(_helpers_graphql_apollo_client__WEBPACK_IMPORTED_MODULE_8__["useApollo"])(pageProps.initialApolloState);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "initial-scale=1, maximum-scale=5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["ThemeProvider"], {
      theme: _helpers_theme__WEBPACK_IMPORTED_MODULE_7__["theme"],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CssBaseline"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["ApolloProvider"], {
        client: apolloClient,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/link/error":
/*!********************************************!*\
  !*** external "@apollo/client/link/error" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client/link/error");

/***/ }),

/***/ "@apollo/link-context":
/*!***************************************!*\
  !*** external "@apollo/link-context" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/link-context");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9ncmFwaHFsL2Fwb2xsby1jbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvZ3JhcGhxbC9hdXRoLWxpbmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvZ3JhcGhxbC9lcnJvci1saW5rLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL3RoZW1lL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50L2xpbmsvZXJyb3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2xpbmstY29udGV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJjb25maWciLCJBQ0NFU1NfVE9LRU5fS0VZIiwiUkVGUkVTSF9UT0tFTl9LRVkiLCJBUElfVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJDTElFTlRfVVJMIiwiYXBvbGxvQ2xpZW50IiwidXNlQXBvbGxvIiwiaW5pdGlhbFN0YXRlIiwic3RvcmUiLCJ1c2VNZW1vIiwiaW5pdGlhbGl6ZUFwb2xsbyIsImNyZWF0ZUFwb2xsb0NsaWVudCIsIl8iLCJfXyIsImxpbmsiLCJmcm9tIiwiQXV0aExpbmsiLCJFcnJvckxpbmsiLCJIdHRwTGluayIsInVyaSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImFkZFR5cGVuYW1lIiwiZGF0YUlkRnJvbU9iamVjdCIsIm9iaiIsIl9fdHlwZW5hbWUiLCJzbHVnIiwiZGVmYXVsdERhdGFJZEZyb21PYmplY3QiLCJBcG9sbG9DbGllbnQiLCJfYXBvbGxvQ2xpZW50IiwiZXhpc3RpbmdDYWNoZSIsImV4dHJhY3QiLCJyZXN0b3JlIiwic2V0Q29udGV4dCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwib25FcnJvciIsImdyYXBoUUxFcnJvcnMiLCJvcGVyYXRpb24iLCJmb3J3YXJkIiwibGVuZ3RoIiwiZ3FsRXJyb3IiLCJpc1VuYXV0aG9yaXplZEVycm9yIiwiaXNSZWZyZXNoVG9rZW5PcGVyYXRpb24iLCJmcm9tUHJvbWlzZSIsImdldE5ld1Rva2VucyIsImNhdGNoIiwiZXJyIiwicmVtb3ZlSXRlbSIsImZsYXRNYXAiLCJhY2Nlc3NUb2tlbiIsImF1dGhvcml6YXRpb24iLCJlcnJvciIsIm1lc3NhZ2UiLCJvcGVyYXRpb25OYW1lIiwiUkVGUkVTSF9UT0tFTl9NVVRBVElPTiIsImdxbCIsImV4aXN0aW5nUmVmcmVzaFRva2VuIiwiY2xpZW50IiwiZGF0YSIsIm11dGF0ZSIsIm11dGF0aW9uIiwidmFyaWFibGVzIiwiZXJyb3JQb2xpY3kiLCJyZWZyZXNoVG9rZW4iLCJzZXRJdGVtIiwidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInBhbGV0dGUiLCJ0eXBlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdCIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5IiwiaDEiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJzdWJ0aXRsZTEiLCJBcHAiLCJwYWdlUHJvcHMiLCJDb21wb25lbnQiLCJpbml0aWFsQXBvbGxvU3RhdGUiXSwibWFwcGluZ3Mi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QSxZQURGLGVBS0UscUVBQUMsc0VBQUQ7QUFBZSxXQUFLLEVBQUVsQixvREFBdEI7QUFBQSw4QkFDRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFHRSxxRUFBQyw2REFBRDtBQUFnQixjQUFNLEVBQUVoRSxZQUF4QjtBQUFBLCtCQUNFLHFFQUFDLFNBQUQsb0JBQWVnRixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQSxrQkFERjtBQWVELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkQsMkM7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIEFDQ0VTU19UT0tFTl9LRVk6ICdfX0FDQ0VTU19UT0tFTl9fJyxcbiAgUkVGUkVTSF9UT0tFTl9LRVk6ICdfX1JFRlJFU0hfVE9LRU5fXycsXG5cbiAgQVBJX1VSTDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCAnaHR0cHM6Ly9saW5raW5nLWJpby5yai5yLmFwcHNwb3QuY29tJyxcbiAgLy8gQVBJX1VSTDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDozMDEwJyxcblxuICBDTElFTlRfVVJMOiBwcm9jZXNzLmVudi5DTElFTlRfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxufVxuIiwiaW1wb3J0IHtcbiAgQXBvbGxvQ2xpZW50LFxuICBJbk1lbW9yeUNhY2hlLFxuICBkZWZhdWx0RGF0YUlkRnJvbU9iamVjdCxcbiAgZnJvbSxcbiAgSHR0cExpbmssXG4gIE5vcm1hbGl6ZWRDYWNoZU9iamVjdCxcbn0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICduZXh0J1xuXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICd+c3JjL2NvbmZpZydcblxuaW1wb3J0IHsgQXV0aExpbmsgfSBmcm9tICcuL2F1dGgtbGluaydcbmltcG9ydCB7IEVycm9yTGluayB9IGZyb20gJy4vZXJyb3ItbGluaydcblxubGV0IGFwb2xsb0NsaWVudDogQXBvbGxvQ2xpZW50PE5vcm1hbGl6ZWRDYWNoZU9iamVjdD5cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwb2xsbyhpbml0aWFsU3RhdGUgPSB7fSkge1xuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZUFwb2xsbyhpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSlcbiAgcmV0dXJuIHN0b3JlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBcG9sbG9DbGllbnQoXz86IGFueSwgX18/OiBOZXh0UGFnZUNvbnRleHQpIHtcbiAgY29uc3QgbGluayA9IGZyb20oW1xuICAgIEF1dGhMaW5rIGFzIGFueSxcbiAgICBFcnJvckxpbmssXG4gICAgbmV3IEh0dHBMaW5rKHsgdXJpOiBgJHtjb25maWcuQVBJX1VSTH0vZ3JhcGhxbGAgfSksXG4gIF0pXG5cbiAgY29uc3QgY2FjaGUgPSBuZXcgSW5NZW1vcnlDYWNoZSh7XG4gICAgYWRkVHlwZW5hbWU6IGZhbHNlLFxuICAgIGRhdGFJZEZyb21PYmplY3Q6IChvYmo6IGFueSkgPT4ge1xuICAgICAgc3dpdGNoIChvYmouX190eXBlbmFtZSkge1xuICAgICAgICBjYXNlICdQYWdlJzpcbiAgICAgICAgICByZXR1cm4gb2JqLnNsdWdcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdERhdGFJZEZyb21PYmplY3Qob2JqKVxuICAgICAgfVxuICAgIH0sXG4gIH0pXG5cbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoeyBjYWNoZSwgbGluayB9KVxufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZSA9IHt9KSB7XG4gIGNvbnN0IF9hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQgPz8gY3JlYXRlQXBvbGxvQ2xpZW50KClcblxuICAvLyBJZiB5b3VyIHBhZ2UgaGFzIE5leHQuanMgZGF0YSBmZXRjaGluZyBtZXRob2RzIHRoYXQgdXNlIEFwb2xsbyBDbGllbnQsIHRoZSBpbml0aWFsIHN0YXRlXG4gIC8vIGdldHMgaHlkcmF0ZWQgaGVyZVxuICBpZiAoaW5pdGlhbFN0YXRlKSB7XG4gICAgLy8gR2V0IGV4aXN0aW5nIGNhY2hlLCBsb2FkZWQgZHVyaW5nIGNsaWVudCBzaWRlIGRhdGEgZmV0Y2hpbmdcbiAgICBjb25zdCBleGlzdGluZ0NhY2hlID0gX2Fwb2xsb0NsaWVudC5leHRyYWN0KClcbiAgICAvLyBSZXN0b3JlIHRoZSBjYWNoZSB1c2luZyB0aGUgZGF0YSBwYXNzZWQgZnJvbSBnZXRTdGF0aWNQcm9wcy9nZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAvLyBjb21iaW5lZCB3aXRoIHRoZSBleGlzdGluZyBjYWNoZWQgZGF0YVxuICAgIF9hcG9sbG9DbGllbnQuY2FjaGUucmVzdG9yZSh7IC4uLmV4aXN0aW5nQ2FjaGUsIC4uLmluaXRpYWxTdGF0ZSB9KVxuICB9XG4gIC8vIEZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IEFwb2xsbyBDbGllbnRcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX2Fwb2xsb0NsaWVudFxuICAvLyBDcmVhdGUgdGhlIEFwb2xsbyBDbGllbnQgb25jZSBpbiB0aGUgY2xpZW50XG4gIGlmICghYXBvbGxvQ2xpZW50KSBhcG9sbG9DbGllbnQgPSBfYXBvbGxvQ2xpZW50XG5cbiAgcmV0dXJuIF9hcG9sbG9DbGllbnRcbn1cbiIsImltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tICdAYXBvbGxvL2xpbmstY29udGV4dCdcblxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnfnNyYy9jb25maWcnXG5cbmV4cG9ydCBjb25zdCBBdXRoTGluayA9IHNldENvbnRleHQoKCkgPT4ge1xuICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGNvbmZpZy5BQ0NFU1NfVE9LRU5fS0VZKVxuICBpZiAoIXRva2VuKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAgfSxcbiAgfVxufSlcbiIsImltcG9ydCB7IEdyYXBoUUxFcnJvciB9IGZyb20gJ2dyYXBocWwnXG5pbXBvcnQgeyBmcm9tUHJvbWlzZSwgZ3FsLCBPcGVyYXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbmltcG9ydCB7IG9uRXJyb3IgfSBmcm9tICdAYXBvbGxvL2NsaWVudC9saW5rL2Vycm9yJ1xuXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICd+c3JjL2NvbmZpZydcbmltcG9ydCB7IGNyZWF0ZUFwb2xsb0NsaWVudCB9IGZyb20gJy4vYXBvbGxvLWNsaWVudCdcblxuZXhwb3J0IGNvbnN0IEVycm9yTGluayA9IG9uRXJyb3IoKHsgZ3JhcGhRTEVycm9ycywgb3BlcmF0aW9uLCBmb3J3YXJkIH0pID0+IHtcbiAgaWYgKCFncmFwaFFMRXJyb3JzIHx8ICFncmFwaFFMRXJyb3JzLmxlbmd0aCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgZm9yIChjb25zdCBncWxFcnJvciBvZiBncmFwaFFMRXJyb3JzKSB7XG4gICAgaWYgKCFpc1VuYXV0aG9yaXplZEVycm9yKGdxbEVycm9yKSB8fCBpc1JlZnJlc2hUb2tlbk9wZXJhdGlvbihvcGVyYXRpb24pKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICByZXR1cm4gZnJvbVByb21pc2UoXG4gICAgICBnZXROZXdUb2tlbnMoKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGNvbmZpZy5BQ0NFU1NfVE9LRU5fS0VZKVxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShjb25maWcuUkVGUkVTSF9UT0tFTl9LRVkpXG5cbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KVxuICAgICkuZmxhdE1hcCgoYWNjZXNzVG9rZW4pID0+IHtcbiAgICAgIC8vIG1vZGlmeSB0aGUgb3BlcmF0aW9uIGNvbnRleHQgd2l0aCBhIG5ldyB0b2tlblxuICAgICAgb3BlcmF0aW9uLnNldENvbnRleHQoe1xuICAgICAgICBoZWFkZXJzOiB7IGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gIH0sXG4gICAgICB9KVxuXG4gICAgICAvLyByZXRyeSB0aGUgcmVxdWVzdCwgcmV0dXJuaW5nIHRoZSBuZXcgb2JzZXJ2YWJsZVxuICAgICAgcmV0dXJuIGZvcndhcmQob3BlcmF0aW9uKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm5cbn0pXG5cbmZ1bmN0aW9uIGlzVW5hdXRob3JpemVkRXJyb3IoZXJyb3I6IEdyYXBoUUxFcnJvcikge1xuICByZXR1cm4gZXJyb3IgJiYgZXJyb3IubWVzc2FnZSA9PT0gJ1VuYXV0aG9yaXplZCdcbn1cblxuZnVuY3Rpb24gaXNSZWZyZXNoVG9rZW5PcGVyYXRpb24ob3BlcmF0aW9uOiBPcGVyYXRpb24pIHtcbiAgcmV0dXJuIG9wZXJhdGlvbiAmJiBvcGVyYXRpb24ub3BlcmF0aW9uTmFtZSA9PT0gJ1JlZnJlc2hUb2tlbidcbn1cblxuY29uc3QgUkVGUkVTSF9UT0tFTl9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gUmVmcmVzaFRva2VuKCR0b2tlbjogU3RyaW5nISkge1xuICAgIHJlZnJlc2hUb2tlbih0b2tlbjogJHRva2VuKSB7XG4gICAgICBhY2Nlc3NUb2tlblxuICAgICAgcmVmcmVzaFRva2VuXG4gICAgfVxuICB9XG5gXG5cbmFzeW5jIGZ1bmN0aW9uIGdldE5ld1Rva2VucygpIHtcbiAgY29uc3QgZXhpc3RpbmdSZWZyZXNoVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjb25maWcuUkVGUkVTSF9UT0tFTl9LRVkpXG4gIGlmICghZXhpc3RpbmdSZWZyZXNoVG9rZW4pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGNsaWVudCA9IGNyZWF0ZUFwb2xsb0NsaWVudCgpXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XG4gICAgbXV0YXRpb246IFJFRlJFU0hfVE9LRU5fTVVUQVRJT04sXG4gICAgdmFyaWFibGVzOiB7IHRva2VuOiBleGlzdGluZ1JlZnJlc2hUb2tlbiB9LFxuICAgIGVycm9yUG9saWN5OiAnbm9uZScsXG4gIH0pXG5cbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCB7IGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4gfSA9IGRhdGEucmVmcmVzaFRva2VuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGNvbmZpZy5BQ0NFU1NfVE9LRU5fS0VZLCBhY2Nlc3NUb2tlbilcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY29uZmlnLlJFRlJFU0hfVE9LRU5fS0VZLCByZWZyZXNoVG9rZW4pXG5cbiAgcmV0dXJuIGFjY2Vzc1Rva2VuXG59XG4iLCJpbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuXG5leHBvcnQgY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICB0eXBlOiAnZGFyaycsXG4gICAgcHJpbWFyeTogeyBtYWluOiAnIzI1MzM0MScgfSxcbiAgICBzZWNvbmRhcnk6IHsgbWFpbjogJyMzQUFGQTknIH0sXG4gICAgYmFja2dyb3VuZDogeyBkZWZhdWx0OiAnIzE3MjUyQScgfSxcbiAgfSxcbiAgdHlwb2dyYXBoeToge1xuICAgIGZvbnRGYW1pbHk6ICdNb250c2VycmF0JyxcbiAgICBoMTogeyBmb250U2l6ZTogJzY0cHgnLCBmb250V2VpZ2h0OiA5MDAgfSxcbiAgICBzdWJ0aXRsZTE6IHsgZm9udFdlaWdodDogJ2JvbGQnIH0sXG4gIH0sXG59KVxuIiwiaW1wb3J0ICcuLi9zdHlsZXMuY3NzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5pbXBvcnQgeyBDc3NCYXNlbGluZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcblxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi9oZWxwZXJzL3RoZW1lJ1xuaW1wb3J0IHsgdXNlQXBvbGxvIH0gZnJvbSAnLi4vaGVscGVycy9ncmFwaHFsL2Fwb2xsby1jbGllbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IHBhZ2VQcm9wcywgQ29tcG9uZW50IH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IHVzZUFwb2xsbyhwYWdlUHJvcHMuaW5pdGlhbEFwb2xsb1N0YXRlKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLCBtYXhpbXVtLXNjYWxlPTVcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cblxuICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG9DbGllbnR9PlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8Lz5cbiAgKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnQvbGluay9lcnJvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2xpbmstY29udGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9