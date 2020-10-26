module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/resource-data/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/resource.js":
/*!****************************!*\
  !*** ./models/resource.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst resourceSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  number: String,\n  organization: String,\n  type: String,\n  status: String,\n  residence: String,\n  city: String,\n  state: String,\n  birthdate: String,\n  race: String,\n  dependents: String,\n  acceptable_use_of_funds: String,\n  industry_role: String,\n  years_in_industry: String,\n  genre: String,\n  proof_of_work: String,\n  membership: String,\n  proof_of_loss: String,\n  primary_income: String,\n  gross_annual_income: String,\n  income_from_music: String,\n  required_documents: String,\n  covid_side_effects: String,\n  healthcare_related: String,\n  proof_of_emergency: String,\n  crisis_type: String,\n  other_requirements: String,\n  notes: String,\n  other_notes: String,\n  url: String\n});\nconst Resource = mongoose__WEBPACK_IMPORTED_MODULE_0__[\"models\"].Resource || Object(mongoose__WEBPACK_IMPORTED_MODULE_0__[\"model\"])(\"Resource\", resourceSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Resource);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvcmVzb3VyY2UuanM/Y2IwMCJdLCJuYW1lcyI6WyJyZXNvdXJjZVNjaGVtYSIsIlNjaGVtYSIsIm51bWJlciIsIlN0cmluZyIsIm9yZ2FuaXphdGlvbiIsInR5cGUiLCJzdGF0dXMiLCJyZXNpZGVuY2UiLCJjaXR5Iiwic3RhdGUiLCJiaXJ0aGRhdGUiLCJyYWNlIiwiZGVwZW5kZW50cyIsImFjY2VwdGFibGVfdXNlX29mX2Z1bmRzIiwiaW5kdXN0cnlfcm9sZSIsInllYXJzX2luX2luZHVzdHJ5IiwiZ2VucmUiLCJwcm9vZl9vZl93b3JrIiwibWVtYmVyc2hpcCIsInByb29mX29mX2xvc3MiLCJwcmltYXJ5X2luY29tZSIsImdyb3NzX2FubnVhbF9pbmNvbWUiLCJpbmNvbWVfZnJvbV9tdXNpYyIsInJlcXVpcmVkX2RvY3VtZW50cyIsImNvdmlkX3NpZGVfZWZmZWN0cyIsImhlYWx0aGNhcmVfcmVsYXRlZCIsInByb29mX29mX2VtZXJnZW5jeSIsImNyaXNpc190eXBlIiwib3RoZXJfcmVxdWlyZW1lbnRzIiwibm90ZXMiLCJvdGhlcl9ub3RlcyIsInVybCIsIlJlc291cmNlIiwibW9kZWxzIiwibW9kZWwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsY0FBYyxHQUFHLElBQUlDLCtDQUFKLENBQVc7QUFDakNDLFFBQU0sRUFBRUMsTUFEeUI7QUFFakNDLGNBQVksRUFBRUQsTUFGbUI7QUFHakNFLE1BQUksRUFBRUYsTUFIMkI7QUFJakNHLFFBQU0sRUFBRUgsTUFKeUI7QUFLakNJLFdBQVMsRUFBRUosTUFMc0I7QUFNakNLLE1BQUksRUFBRUwsTUFOMkI7QUFPakNNLE9BQUssRUFBRU4sTUFQMEI7QUFRakNPLFdBQVMsRUFBRVAsTUFSc0I7QUFTakNRLE1BQUksRUFBRVIsTUFUMkI7QUFVakNTLFlBQVUsRUFBRVQsTUFWcUI7QUFXakNVLHlCQUF1QixFQUFFVixNQVhRO0FBWWpDVyxlQUFhLEVBQUVYLE1BWmtCO0FBYWpDWSxtQkFBaUIsRUFBRVosTUFiYztBQWNqQ2EsT0FBSyxFQUFFYixNQWQwQjtBQWVqQ2MsZUFBYSxFQUFFZCxNQWZrQjtBQWdCakNlLFlBQVUsRUFBRWYsTUFoQnFCO0FBaUJqQ2dCLGVBQWEsRUFBRWhCLE1BakJrQjtBQWtCakNpQixnQkFBYyxFQUFFakIsTUFsQmlCO0FBbUJqQ2tCLHFCQUFtQixFQUFFbEIsTUFuQlk7QUFvQmpDbUIsbUJBQWlCLEVBQUVuQixNQXBCYztBQXFCakNvQixvQkFBa0IsRUFBRXBCLE1BckJhO0FBc0JqQ3FCLG9CQUFrQixFQUFFckIsTUF0QmE7QUF1QmpDc0Isb0JBQWtCLEVBQUV0QixNQXZCYTtBQXdCakN1QixvQkFBa0IsRUFBRXZCLE1BeEJhO0FBeUJqQ3dCLGFBQVcsRUFBRXhCLE1BekJvQjtBQTBCakN5QixvQkFBa0IsRUFBRXpCLE1BMUJhO0FBMkJqQzBCLE9BQUssRUFBRTFCLE1BM0IwQjtBQTRCakMyQixhQUFXLEVBQUUzQixNQTVCb0I7QUE2QmpDNEIsS0FBRyxFQUFFNUI7QUE3QjRCLENBQVgsQ0FBdkI7QUErQkEsTUFBTTZCLFFBQVEsR0FBR0MsK0NBQU0sQ0FBQ0QsUUFBUCxJQUFtQkUsc0RBQUssQ0FBQyxVQUFELEVBQWFsQyxjQUFiLENBQXpDO0FBRWVnQyx1RUFBZiIsImZpbGUiOiIuL21vZGVscy9yZXNvdXJjZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSwgbW9kZWwsIG1vZGVscyB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCByZXNvdXJjZVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuXHRudW1iZXI6IFN0cmluZyxcblx0b3JnYW5pemF0aW9uOiBTdHJpbmcsXG5cdHR5cGU6IFN0cmluZyxcblx0c3RhdHVzOiBTdHJpbmcsXG5cdHJlc2lkZW5jZTogU3RyaW5nLFxuXHRjaXR5OiBTdHJpbmcsXG5cdHN0YXRlOiBTdHJpbmcsXG5cdGJpcnRoZGF0ZTogU3RyaW5nLFxuXHRyYWNlOiBTdHJpbmcsXG5cdGRlcGVuZGVudHM6IFN0cmluZyxcblx0YWNjZXB0YWJsZV91c2Vfb2ZfZnVuZHM6IFN0cmluZyxcblx0aW5kdXN0cnlfcm9sZTogU3RyaW5nLFxuXHR5ZWFyc19pbl9pbmR1c3RyeTogU3RyaW5nLFxuXHRnZW5yZTogU3RyaW5nLFxuXHRwcm9vZl9vZl93b3JrOiBTdHJpbmcsXG5cdG1lbWJlcnNoaXA6IFN0cmluZyxcblx0cHJvb2Zfb2ZfbG9zczogU3RyaW5nLFxuXHRwcmltYXJ5X2luY29tZTogU3RyaW5nLFxuXHRncm9zc19hbm51YWxfaW5jb21lOiBTdHJpbmcsXG5cdGluY29tZV9mcm9tX211c2ljOiBTdHJpbmcsXG5cdHJlcXVpcmVkX2RvY3VtZW50czogU3RyaW5nLFxuXHRjb3ZpZF9zaWRlX2VmZmVjdHM6IFN0cmluZyxcblx0aGVhbHRoY2FyZV9yZWxhdGVkOiBTdHJpbmcsXG5cdHByb29mX29mX2VtZXJnZW5jeTogU3RyaW5nLFxuXHRjcmlzaXNfdHlwZTogU3RyaW5nLFxuXHRvdGhlcl9yZXF1aXJlbWVudHM6IFN0cmluZyxcblx0bm90ZXM6IFN0cmluZyxcblx0b3RoZXJfbm90ZXM6IFN0cmluZyxcblx0dXJsOiBTdHJpbmcsXG59KTtcbmNvbnN0IFJlc291cmNlID0gbW9kZWxzLlJlc291cmNlIHx8IG1vZGVsKFwiUmVzb3VyY2VcIiwgcmVzb3VyY2VTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBSZXNvdXJjZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/resource.js\n");

/***/ }),

/***/ "./pages/api/resource-data/index.js":
/*!******************************************!*\
  !*** ./pages/api/resource-data/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/resource */ \"./models/resource.js\");\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/dbConnect */ \"./utils/dbConnect.js\");\n\n\nObject(_utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    method,\n    body\n  } = req;\n\n  switch (method) {\n    case \"GET\":\n      try {\n        const resource = await _models_resource__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(body);\n        res.status(200).json({\n          success: true,\n          data: resource\n        });\n      } catch {\n        res.status(400).json({\n          success: false\n        });\n      }\n\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcmVzb3VyY2UtZGF0YS9pbmRleC5qcz9mYTFhIl0sIm5hbWVzIjpbImRiQ29ubmVjdCIsInJlcSIsInJlcyIsIm1ldGhvZCIsImJvZHkiLCJyZXNvdXJjZSIsIlJlc291cmNlIiwiZmluZCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZGF0YSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBQSxnRUFBUztBQUVNLHNFQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDbEMsUUFBTTtBQUFFQyxVQUFGO0FBQVVDO0FBQVYsTUFBbUJILEdBQXpCOztBQUNBLFVBQVFFLE1BQVI7QUFDQyxTQUFLLEtBQUw7QUFDQyxVQUFJO0FBQ0gsY0FBTUUsUUFBUSxHQUFHLE1BQU1DLHdEQUFRLENBQUNDLElBQVQsQ0FBY0gsSUFBZCxDQUF2QjtBQUNBRixXQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxpQkFBTyxFQUFFLElBQVg7QUFBaUJDLGNBQUksRUFBRU47QUFBdkIsU0FBckI7QUFDQSxPQUhELENBR0UsTUFBTTtBQUNQSCxXQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxpQkFBTyxFQUFFO0FBQVgsU0FBckI7QUFDQTs7QUFQSDtBQVNBLENBWEQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvcmVzb3VyY2UtZGF0YS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXNvdXJjZSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3Jlc291cmNlXCI7XG5pbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi8uLi91dGlscy9kYkNvbm5lY3RcIjtcblxuZGJDb25uZWN0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuXHRjb25zdCB7IG1ldGhvZCwgYm9keSB9ID0gcmVxO1xuXHRzd2l0Y2ggKG1ldGhvZCkge1xuXHRcdGNhc2UgXCJHRVRcIjpcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHJlc291cmNlID0gYXdhaXQgUmVzb3VyY2UuZmluZChib2R5KTtcblx0XHRcdFx0cmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXNvdXJjZSB9KTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRyZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xuXHRcdFx0fVxuXHR9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/resource-data/index.js\n");

/***/ }),

/***/ "./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n //import resourceSchema from \"../models/resource\";\n//import userSchema from \"../models/users\";\n\nconst connection = {};\n\nconst dbConnect = async () => {\n  if (connection.isConnected) {\n    return;\n  }\n\n  try {\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.MONGODB_URI, {\n      useNewUrlParser: true,\n      useUnifiedTopology: true\n    }); //const Resource = mongoose.model(\"Resource\", resourceSchema);\n    //const Users = mongoose.model(\"Users\", userSchema);\n\n    connection.isConnected = db.connections[0].readyState; // connection.models = {\n    // \tResource,\n    // \tUsers,\n    // };\n\n    console.log(connection.models.Resource);\n  } catch {\n    return \"Did not connect to Mongo\";\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dbConnect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9kYkNvbm5lY3QuanM/NDZlMiJdLCJuYW1lcyI6WyJjb25uZWN0aW9uIiwiZGJDb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJkYiIsIm1vbmdvb3NlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJtb2RlbHMiLCJSZXNvdXJjZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0NBQ0E7QUFDQTs7QUFDQSxNQUFNQSxVQUFVLEdBQUcsRUFBbkI7O0FBQ0EsTUFBTUMsU0FBUyxHQUFHLFlBQVk7QUFDN0IsTUFBSUQsVUFBVSxDQUFDRSxXQUFmLEVBQTRCO0FBQzNCO0FBQ0E7O0FBQ0QsTUFBSTtBQUNILFVBQU1DLEVBQUUsR0FBRyxNQUFNQywrQ0FBUSxDQUFDQyxPQUFULENBQWlCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FBN0IsRUFBMEM7QUFDMURDLHFCQUFlLEVBQUUsSUFEeUM7QUFFMURDLHdCQUFrQixFQUFFO0FBRnNDLEtBQTFDLENBQWpCLENBREcsQ0FLSDtBQUNBOztBQUNBVixjQUFVLENBQUNFLFdBQVgsR0FBeUJDLEVBQUUsQ0FBQ1EsV0FBSCxDQUFlLENBQWYsRUFBa0JDLFVBQTNDLENBUEcsQ0FRSDtBQUNBO0FBQ0E7QUFDQTs7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlkLFVBQVUsQ0FBQ2UsTUFBWCxDQUFrQkMsUUFBOUI7QUFDQSxHQWJELENBYUUsTUFBTTtBQUNQLFdBQU8sMEJBQVA7QUFDQTtBQUNELENBcEJEOztBQXNCZWYsd0VBQWYiLCJmaWxlIjoiLi91dGlscy9kYkNvbm5lY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG4vL2ltcG9ydCByZXNvdXJjZVNjaGVtYSBmcm9tIFwiLi4vbW9kZWxzL3Jlc291cmNlXCI7XG4vL2ltcG9ydCB1c2VyU2NoZW1hIGZyb20gXCIuLi9tb2RlbHMvdXNlcnNcIjtcbmNvbnN0IGNvbm5lY3Rpb24gPSB7fTtcbmNvbnN0IGRiQ29ubmVjdCA9IGFzeW5jICgpID0+IHtcblx0aWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0dHJ5IHtcblx0XHRjb25zdCBkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkksIHtcblx0XHRcdHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcblx0XHRcdHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcblx0XHR9KTtcblx0XHQvL2NvbnN0IFJlc291cmNlID0gbW9uZ29vc2UubW9kZWwoXCJSZXNvdXJjZVwiLCByZXNvdXJjZVNjaGVtYSk7XG5cdFx0Ly9jb25zdCBVc2VycyA9IG1vbmdvb3NlLm1vZGVsKFwiVXNlcnNcIiwgdXNlclNjaGVtYSk7XG5cdFx0Y29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XG5cdFx0Ly8gY29ubmVjdGlvbi5tb2RlbHMgPSB7XG5cdFx0Ly8gXHRSZXNvdXJjZSxcblx0XHQvLyBcdFVzZXJzLFxuXHRcdC8vIH07XG5cdFx0Y29uc29sZS5sb2coY29ubmVjdGlvbi5tb2RlbHMuUmVzb3VyY2UpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gXCJEaWQgbm90IGNvbm5lY3QgdG8gTW9uZ29cIjtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/dbConnect.js\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ })

/******/ });