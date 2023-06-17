/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addProject.js":
/*!***************************!*\
  !*** ./src/addProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   activeProject: () => (/* binding */ activeProject),\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   projects: () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayProject */ \"./src/displayProject.js\");\n\n\nconst projectList = document.getElementById(\"project_list\");\nconst projectName = document.getElementById(\"new_project_name\");\n\n\nlet projects = {};\nlet activeProject = \"\";\n\nfunction addProject() {\n    const newProjectName = projectName.value;\n    if (newProjectName === \"\") return;\n    const strProjectName = newProjectName.charAt(0).toUpperCase() + newProjectName.slice(1).toLowerCase();\n    const li = document.createElement(\"li\");\n    li.textContent = strProjectName;\n    projectList.appendChild(li);\n    projectName.value = \"\";\n    projects[strProjectName] = [];\n    activeProject = strProjectName;\n    (0,_displayProject__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(activeProject);\n}\n\n\n\n//# sourceURL=webpack://todo/./src/addProject.js?");

/***/ }),

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject */ \"./src/addProject.js\");\n\n\n\n\n\n\nclass Task {\n    constructor (title, description, dueDate, priority, checked) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this,checked = checked;\n    }\n}\n\nfunction createNewTask () {\n    const title = document.getElementById(\"title\").value;\n    const description = document.getElementById(\"description\").value;\n    const date = document.getElementById(\"due_date\");\n    const dueDate = new Date(date);\n    const priorityGroup = document.getElementsByName(\"priority\");\n    const priority = Array.from(priorityGroup).find(radio => radio.checked).value;\n\n    const newTask = new Task(title, description, dueDate, priority, false);\n    // projects[activeProject].push(newTask);\n    console.log(newTask)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNewTask);\n\n//# sourceURL=webpack://todo/./src/createTask.js?");

/***/ }),

/***/ "./src/displayProject.js":
/*!*******************************!*\
  !*** ./src/displayProject.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst projectHead = document.getElementById(\"project_head_para\");\nconst projectTaskList = document.getElementById(\"project_task_list\");\n\n\nfunction displayProject (projectName) {\n    projectHead.innerText = `// ${projectName}`;\n    const task = document.createElement(\"li\");\n    task.innerHTML = `<div class=\"li_title\">\n                            <input type=\"checkbox\">\n                            <p>Visit the laundry shop</p>\n                        </div>\n                        <div class=\"li_btn\">\n                            <div class=\"due_date\">25/07/2023</div>\n                            <button><img src=\"./images/edit.png\" alt=\"edit\"></button>\n                            <button><img src=\"./images/bin.png\" alt=\"delete\"></button>\n                            <button><img src=\"./images/info.png\" alt=\"\"></button>\n                        </div>`;\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayProject);\n\n//# sourceURL=webpack://todo/./src/displayProject.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject */ \"./src/addProject.js\");\n/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayProject */ \"./src/displayProject.js\");\n/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTask */ \"./src/createTask.js\");\n\n\n\n\n\nconst addProjectBtn = document.getElementById(\"add_project_btn\");\nconst projectList = document.getElementById(\"project_list\");\nconst addTaskForm = document.getElementById(\"add_task_form\");\n\n\naddTaskForm.addEventListener('submit', e => {\n    e.preventDefault();\n    (0,_createTask__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n})\n\n\naddProjectBtn.addEventListener('click', e => {\n    e.preventDefault();\n    (0,_addProject__WEBPACK_IMPORTED_MODULE_0__.addProject)();\n})\n\nprojectList.addEventListener('click', e => {\n    if (e.target.tagName !== \"LI\") return;\n    const projectName = e.target.innerText;\n    (0,_displayProject__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projectName);\n    console.log(_addProject__WEBPACK_IMPORTED_MODULE_0__.projects)\n    console.log(Object.keys(_addProject__WEBPACK_IMPORTED_MODULE_0__.projects).length)\n})\n\n\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;