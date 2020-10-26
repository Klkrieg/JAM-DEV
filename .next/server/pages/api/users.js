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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/users/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/users.js":
/*!*************************!*\
  !*** ./models/users.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  email: {\n    type: String,\n    trim: true,\n    required: true\n  },\n  password: {\n    type: String,\n    required: true\n  },\n  firstName: {\n    type: String,\n    trim: true,\n    required: true\n  },\n  lastName: {\n    type: String,\n    trim: true,\n    required: false\n  },\n  zipcode: {\n    type: String,\n    trim: true,\n    required: false\n  },\n  birthday: {\n    type: Date,\n    required: false\n  },\n  phoneNumber: {\n    type: String,\n    required: false\n  },\n  profileType: {\n    type: String,\n    required: false\n  }\n});\nconst Users = mongoose__WEBPACK_IMPORTED_MODULE_0__[\"models\"].Users || Object(mongoose__WEBPACK_IMPORTED_MODULE_0__[\"model\"])(\"Users\", userSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvdXNlcnMuanM/M2Y5MCJdLCJuYW1lcyI6WyJ1c2VyU2NoZW1hIiwiU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwidHJpbSIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInppcGNvZGUiLCJiaXJ0aGRheSIsIkRhdGUiLCJwaG9uZU51bWJlciIsInByb2ZpbGVUeXBlIiwiVXNlcnMiLCJtb2RlbHMiLCJtb2RlbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxVQUFVLEdBQUcsSUFBSUMsK0NBQUosQ0FBVztBQUM3QkMsT0FBSyxFQUFFO0FBQ05DLFFBQUksRUFBRUMsTUFEQTtBQUVOQyxRQUFJLEVBQUUsSUFGQTtBQUdOQyxZQUFRLEVBQUU7QUFISixHQURzQjtBQU03QkMsVUFBUSxFQUFFO0FBQ1RKLFFBQUksRUFBRUMsTUFERztBQUVURSxZQUFRLEVBQUU7QUFGRCxHQU5tQjtBQVU3QkUsV0FBUyxFQUFFO0FBQ1ZMLFFBQUksRUFBRUMsTUFESTtBQUVWQyxRQUFJLEVBQUUsSUFGSTtBQUdWQyxZQUFRLEVBQUU7QUFIQSxHQVZrQjtBQWU3QkcsVUFBUSxFQUFFO0FBQ1ROLFFBQUksRUFBRUMsTUFERztBQUVUQyxRQUFJLEVBQUUsSUFGRztBQUdUQyxZQUFRLEVBQUU7QUFIRCxHQWZtQjtBQW9CN0JJLFNBQU8sRUFBRTtBQUNSUCxRQUFJLEVBQUVDLE1BREU7QUFFUkMsUUFBSSxFQUFFLElBRkU7QUFHUkMsWUFBUSxFQUFFO0FBSEYsR0FwQm9CO0FBeUI3QkssVUFBUSxFQUFFO0FBQ1RSLFFBQUksRUFBRVMsSUFERztBQUVUTixZQUFRLEVBQUU7QUFGRCxHQXpCbUI7QUE2QjdCTyxhQUFXLEVBQUU7QUFDWlYsUUFBSSxFQUFFQyxNQURNO0FBRVpFLFlBQVEsRUFBRTtBQUZFLEdBN0JnQjtBQWlDN0JRLGFBQVcsRUFBRTtBQUNaWCxRQUFJLEVBQUVDLE1BRE07QUFFWkUsWUFBUSxFQUFFO0FBRkU7QUFqQ2dCLENBQVgsQ0FBbkI7QUF1Q0EsTUFBTVMsS0FBSyxHQUFHQywrQ0FBTSxDQUFDRCxLQUFQLElBQWdCRSxzREFBSyxDQUFDLE9BQUQsRUFBVWpCLFVBQVYsQ0FBbkM7QUFFZWUsb0VBQWYiLCJmaWxlIjoiLi9tb2RlbHMvdXNlcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWEsIG1vZGVsLCBtb2RlbHMgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuXHRlbWFpbDoge1xuXHRcdHR5cGU6IFN0cmluZyxcblx0XHR0cmltOiB0cnVlLFxuXHRcdHJlcXVpcmVkOiB0cnVlLFxuXHR9LFxuXHRwYXNzd29yZDoge1xuXHRcdHR5cGU6IFN0cmluZyxcblx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0fSxcblx0Zmlyc3ROYW1lOiB7XG5cdFx0dHlwZTogU3RyaW5nLFxuXHRcdHRyaW06IHRydWUsXG5cdFx0cmVxdWlyZWQ6IHRydWUsXG5cdH0sXG5cdGxhc3ROYW1lOiB7XG5cdFx0dHlwZTogU3RyaW5nLFxuXHRcdHRyaW06IHRydWUsXG5cdFx0cmVxdWlyZWQ6IGZhbHNlLFxuXHR9LFxuXHR6aXBjb2RlOiB7XG5cdFx0dHlwZTogU3RyaW5nLFxuXHRcdHRyaW06IHRydWUsXG5cdFx0cmVxdWlyZWQ6IGZhbHNlLFxuXHR9LFxuXHRiaXJ0aGRheToge1xuXHRcdHR5cGU6IERhdGUsXG5cdFx0cmVxdWlyZWQ6IGZhbHNlLFxuXHR9LFxuXHRwaG9uZU51bWJlcjoge1xuXHRcdHR5cGU6IFN0cmluZyxcblx0XHRyZXF1aXJlZDogZmFsc2UsXG5cdH0sXG5cdHByb2ZpbGVUeXBlOiB7XG5cdFx0dHlwZTogU3RyaW5nLFxuXHRcdHJlcXVpcmVkOiBmYWxzZSxcblx0fSxcbn0pO1xuXG5jb25zdCBVc2VycyA9IG1vZGVscy5Vc2VycyB8fCBtb2RlbChcIlVzZXJzXCIsIHVzZXJTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VycztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/users.js\n");

/***/ }),

/***/ "./pages/api/users/index.js":
/*!**********************************!*\
  !*** ./pages/api/users/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_users_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/users.js */ \"./models/users.js\");\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/dbConnect */ \"./utils/dbConnect.js\");\n\n\n\nObject(_utils_dbConnect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    method\n  } = req;\n\n  switch (method) {\n    case \"GET\":\n      try {\n        const users = await _models_users_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n        res.status(200).json({\n          success: true,\n          data: users\n        });\n      } catch {\n        res.status(400).json({\n          success: false\n        });\n      }\n\n      break;\n\n    case \"POST\":\n      // Users.create(req.body, (err, user) => {\n      // \tif (err) {\n      // \t\treturn res.status(400).json(err);\n      // \t} else {\n      // \t\treturn res.status(200).json({ success: true, user });\n      // \t}\n      // });\n      _models_users_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n        email: req.body.email\n      }, \"email\", async (err, user) => {\n        try {\n          if (user) {\n            console.log(\"A user with that email already exists.\");\n            res.status(409).send();\n          } else if (!user) {\n            const salt = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default.a.genSalt();\n            const hashedPass = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default.a.hash(req.body.password, salt);\n            req.body.password = hashedPass;\n            _models_users_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(req.body, (err, user) => {\n              if (err) {\n                return res.status(400).json(err);\n              } else {\n                return res.status(200).json({\n                  success: true,\n                  user\n                });\n              }\n            });\n          }\n        } catch {\n          res.send(err);\n        }\n      });\n      break;\n\n    default:\n      res.status(400).json({\n        succes: false\n      });\n  }\n}); // router.post(\"/api/users\", (req, res) => {\n// \tUsers.findOne({ email: req.body.email }, \"email\", async (err, user) => {\n// \t\ttry {\n// \t\t\tif (user) {\n// \t\t\t\tconsole.log(\"A user with that email already exists.\");\n// \t\t\t\tres.status(409).send();\n// \t\t\t} else if (!user) {\n// \t\t\t\tconst salt = await bcrypt.genSalt();\n// \t\t\t\tconst hashedPass = await bcrypt.hash(req.body.password, salt);\n// \t\t\t\treq.body.password = hashedPass;\n// \t\t\t\tUsers.create(body)\n// \t\t\t\t\t.then((dbUsers) => {\n// \t\t\t\t\t\tres.json(dbUsers);\n// \t\t\t\t\t})\n// \t\t\t\t\t.catch((err) => {\n// \t\t\t\t\t\tconsole.log(err);\n// \t\t\t\t\t\tres.status(400).json(err);\n// \t\t\t\t\t});\n// \t\t\t}\n// \t\t} catch {\n// \t\t\tres.send(err);\n// \t\t}\n// \t});\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXguanM/YzVmYyJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1c2VycyIsIlVzZXJzIiwiZmluZCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZGF0YSIsImVtYWlsIiwiYm9keSIsImVyciIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwic2VuZCIsInNhbHQiLCJiY3J5cHQiLCJnZW5TYWx0IiwiaGFzaGVkUGFzcyIsImhhc2giLCJwYXNzd29yZCIsImNyZWF0ZSIsInN1Y2NlcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBQSxnRUFBUztBQUVNLHNFQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDbEMsUUFBTTtBQUFFQztBQUFGLE1BQWFGLEdBQW5COztBQUNBLFVBQVFFLE1BQVI7QUFDQyxTQUFLLEtBQUw7QUFDQyxVQUFJO0FBQ0gsY0FBTUMsS0FBSyxHQUFHLE1BQU1DLHdEQUFLLENBQUNDLElBQU4sQ0FBVyxFQUFYLENBQXBCO0FBQ0FKLFdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGlCQUFPLEVBQUUsSUFBWDtBQUFpQkMsY0FBSSxFQUFFTjtBQUF2QixTQUFyQjtBQUNBLE9BSEQsQ0FHRSxNQUFNO0FBQ1BGLFdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUNDLGlCQUFPLEVBQUU7QUFBVixTQUFyQjtBQUNBOztBQUNEOztBQUNELFNBQUssTUFBTDtBQUNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FKLDhEQUFLLENBQUNDLElBQU4sQ0FBVztBQUFFSyxhQUFLLEVBQUVWLEdBQUcsQ0FBQ1csSUFBSixDQUFTRDtBQUFsQixPQUFYLEVBQXNDLE9BQXRDLEVBQStDLE9BQU9FLEdBQVAsRUFBWUMsSUFBWixLQUFxQjtBQUNuRSxZQUFJO0FBQ0gsY0FBSUEsSUFBSixFQUFVO0FBQ1RDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSx3Q0FBWjtBQUNBZCxlQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCVSxJQUFoQjtBQUNBLFdBSEQsTUFHTyxJQUFJLENBQUNILElBQUwsRUFBVztBQUNqQixrQkFBTUksSUFBSSxHQUFHLE1BQU1DLDZDQUFNLENBQUNDLE9BQVAsRUFBbkI7QUFDQSxrQkFBTUMsVUFBVSxHQUFHLE1BQU1GLDZDQUFNLENBQUNHLElBQVAsQ0FBWXJCLEdBQUcsQ0FBQ1csSUFBSixDQUFTVyxRQUFyQixFQUErQkwsSUFBL0IsQ0FBekI7QUFDQWpCLGVBQUcsQ0FBQ1csSUFBSixDQUFTVyxRQUFULEdBQW9CRixVQUFwQjtBQUNBaEIsb0VBQUssQ0FBQ21CLE1BQU4sQ0FBYXZCLEdBQUcsQ0FBQ1csSUFBakIsRUFBdUIsQ0FBQ0MsR0FBRCxFQUFNQyxJQUFOLEtBQWU7QUFDckMsa0JBQUlELEdBQUosRUFBUztBQUNSLHVCQUFPWCxHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkssR0FBckIsQ0FBUDtBQUNBLGVBRkQsTUFFTztBQUNOLHVCQUFPWCxHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyx5QkFBTyxFQUFFLElBQVg7QUFBaUJLO0FBQWpCLGlCQUFyQixDQUFQO0FBQ0E7QUFDRCxhQU5EO0FBT0E7QUFDRCxTQWhCRCxDQWdCRSxNQUFNO0FBQ1BaLGFBQUcsQ0FBQ2UsSUFBSixDQUFTSixHQUFUO0FBQ0E7QUFDRCxPQXBCRDtBQXFCQTs7QUFDRDtBQUNDWCxTQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFaUIsY0FBTSxFQUFFO0FBQVYsT0FBckI7QUF4Q0Y7QUEwQ0EsQ0E1Q0QsRSxDQThDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRcIjtcbmltcG9ydCBVc2VycyBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3VzZXJzLmpzXCI7XG5pbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi8uLi91dGlscy9kYkNvbm5lY3RcIjtcblxuZGJDb25uZWN0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuXHRjb25zdCB7IG1ldGhvZCB9ID0gcmVxO1xuXHRzd2l0Y2ggKG1ldGhvZCkge1xuXHRcdGNhc2UgXCJHRVRcIjpcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHVzZXJzID0gYXdhaXQgVXNlcnMuZmluZCh7fSk7XG5cdFx0XHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogdXNlcnMgfSk7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0cmVzLnN0YXR1cyg0MDApLmpzb24oe3N1Y2Nlc3M6IGZhbHNlfSk7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwiUE9TVFwiOlxuXHRcdFx0Ly8gVXNlcnMuY3JlYXRlKHJlcS5ib2R5LCAoZXJyLCB1c2VyKSA9PiB7XG5cdFx0XHQvLyBcdGlmIChlcnIpIHtcblx0XHRcdC8vIFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oZXJyKTtcblx0XHRcdC8vIFx0fSBlbHNlIHtcblx0XHRcdC8vIFx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCB1c2VyIH0pO1xuXHRcdFx0Ly8gXHR9XG5cdFx0XHQvLyB9KTtcblx0XHRcdFVzZXJzLmZpbmQoeyBlbWFpbDogcmVxLmJvZHkuZW1haWwgfSwgXCJlbWFpbFwiLCBhc3luYyAoZXJyLCB1c2VyKSA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aWYgKHVzZXIpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiQSB1c2VyIHdpdGggdGhhdCBlbWFpbCBhbHJlYWR5IGV4aXN0cy5cIik7XG5cdFx0XHRcdFx0XHRyZXMuc3RhdHVzKDQwOSkuc2VuZCgpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoIXVzZXIpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHNhbHQgPSBhd2FpdCBiY3J5cHQuZ2VuU2FsdCgpO1xuXHRcdFx0XHRcdFx0Y29uc3QgaGFzaGVkUGFzcyA9IGF3YWl0IGJjcnlwdC5oYXNoKHJlcS5ib2R5LnBhc3N3b3JkLCBzYWx0KTtcblx0XHRcdFx0XHRcdHJlcS5ib2R5LnBhc3N3b3JkID0gaGFzaGVkUGFzcztcblx0XHRcdFx0XHRcdFVzZXJzLmNyZWF0ZShyZXEuYm9keSwgKGVyciwgdXNlcikgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKGVycik7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgdXNlciB9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRyZXMuc2VuZChlcnIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2NlczogZmFsc2UgfSk7XG5cdH1cbn07XG5cbi8vIHJvdXRlci5wb3N0KFwiL2FwaS91c2Vyc1wiLCAocmVxLCByZXMpID0+IHtcbi8vIFx0VXNlcnMuZmluZE9uZSh7IGVtYWlsOiByZXEuYm9keS5lbWFpbCB9LCBcImVtYWlsXCIsIGFzeW5jIChlcnIsIHVzZXIpID0+IHtcbi8vIFx0XHR0cnkge1xuLy8gXHRcdFx0aWYgKHVzZXIpIHtcbi8vIFx0XHRcdFx0Y29uc29sZS5sb2coXCJBIHVzZXIgd2l0aCB0aGF0IGVtYWlsIGFscmVhZHkgZXhpc3RzLlwiKTtcbi8vIFx0XHRcdFx0cmVzLnN0YXR1cyg0MDkpLnNlbmQoKTtcbi8vIFx0XHRcdH0gZWxzZSBpZiAoIXVzZXIpIHtcbi8vIFx0XHRcdFx0Y29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0KCk7XG4vLyBcdFx0XHRcdGNvbnN0IGhhc2hlZFBhc3MgPSBhd2FpdCBiY3J5cHQuaGFzaChyZXEuYm9keS5wYXNzd29yZCwgc2FsdCk7XG4vLyBcdFx0XHRcdHJlcS5ib2R5LnBhc3N3b3JkID0gaGFzaGVkUGFzcztcbi8vIFx0XHRcdFx0VXNlcnMuY3JlYXRlKGJvZHkpXG4vLyBcdFx0XHRcdFx0LnRoZW4oKGRiVXNlcnMpID0+IHtcbi8vIFx0XHRcdFx0XHRcdHJlcy5qc29uKGRiVXNlcnMpO1xuLy8gXHRcdFx0XHRcdH0pXG4vLyBcdFx0XHRcdFx0LmNhdGNoKChlcnIpID0+IHtcbi8vIFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycik7XG4vLyBcdFx0XHRcdFx0XHRyZXMuc3RhdHVzKDQwMCkuanNvbihlcnIpO1xuLy8gXHRcdFx0XHRcdH0pO1xuLy8gXHRcdFx0fVxuLy8gXHRcdH0gY2F0Y2gge1xuLy8gXHRcdFx0cmVzLnNlbmQoZXJyKTtcbi8vIFx0XHR9XG4vLyBcdH0pO1xuLy8gfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/users/index.js\n");

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

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRcIj9jZjljIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImJjcnlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///bcrypt\n");

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