webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-8\">\r\n      <app-header></app-header>\r\n      <hr>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_sweetalert_service__ = __webpack_require__("../../../../angular-sweetalert-service/js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_authentication_authentication_component__ = __webpack_require__("../../../../../src/app/components/authentication/authentication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_message_input_message_input_component__ = __webpack_require__("../../../../../src/app/components/message-input/message-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_message_message_component__ = __webpack_require__("../../../../../src/app/components/message/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_messages_list_messages_list_component__ = __webpack_require__("../../../../../src/app/components/messages-list/messages-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_messages_messages_component__ = __webpack_require__("../../../../../src/app/components/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_signin_signin_component__ = __webpack_require__("../../../../../src/app/components/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_login_guard__ = __webpack_require__("../../../../../src/app/guards/login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__routes_app_routing__ = __webpack_require__("../../../../../src/app/routes/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_data_bridge_service__ = __webpack_require__("../../../../../src/app/services/data-bridge.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_error_service__ = __webpack_require__("../../../../../src/app/services/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_local_storage_service__ = __webpack_require__("../../../../../src/app/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_messages_messages_component__["a" /* MessagesComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_message_message_component__["a" /* MessageComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_messages_list_messages_list_component__["a" /* MessagesListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_message_input_message_input_component__["a" /* MessageInputComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_authentication_authentication_component__["a" /* AuthenticationComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_signin_signin_component__["a" /* SigninComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_17__routes_app_routing__["a" /* AppRouting */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_21__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_23__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_22__services_local_storage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_16__guards_login_guard__["a" /* LoginGuard */],
            __WEBPACK_IMPORTED_MODULE_19__services_data_bridge_service__["a" /* DataBridgeService */],
            __WEBPACK_IMPORTED_MODULE_4_angular_sweetalert_service__["a" /* SweetAlertService */],
            __WEBPACK_IMPORTED_MODULE_20__services_error_service__["a" /* ErrorService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/authentication/authentication.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#logoutNavLink{\r\n    cursor: pointer;\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/authentication/authentication.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"container\">\r\n  <nav>\r\n    <ul class=\"nav nav-tabs\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['signup']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">Signup</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"!authService.isSignedIn()\">\r\n        <a class=\"nav-link\" [routerLink]=\"['signin']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">Signin</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"authService.isSignedIn()\">\r\n        <a class=\"nav-link btn-danger\" (click)=\"onLogoutClick()\" id=\"logoutNavLink\">Logout</a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</header>\r\n<br>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/authentication/authentication.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationComponent = (function () {
    function AuthenticationComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthenticationComponent.prototype.ngOnInit = function () {
    };
    AuthenticationComponent.prototype.onLogoutClick = function () {
        var _this = this;
        console.log('Signing out...');
        setTimeout(function () {
            console.log('Signed out');
            _this.authService.signOut();
            _this.router.navigate(['/auth/signin']);
        }, 500);
    };
    return AuthenticationComponent;
}());
AuthenticationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-authentication',
        template: __webpack_require__("../../../../../src/app/components/authentication/authentication.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/authentication/authentication.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AuthenticationComponent);

var _a, _b;
//# sourceMappingURL=authentication.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span.currentUser{\r\n    font-style: italic;\r\n    font-size: 20px;\r\n    position: relative;\r\n    bottom: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav>\r\n    <ul class=\"nav nav-pills\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/messages']\" [routerLinkActive]=\"['active']\">Messages</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/auth']\" [routerLinkActive]=\"['active']\">Authentication</a>\r\n      </li>\r\n    </ul>\r\n    <span *ngIf=\"currentUser\" class=\"currentUser float-right animated fadeIn\">\r\n      Welcome, {{currentUser}}\r\n    </span>\r\n  </nav>\r\n</header>"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_local_storage_service__ = __webpack_require__("../../../../../src/app/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(localStorageService) {
        this.localStorageService = localStorageService;
        this.currentUser = null;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCurrentUser();
        this.localStorageService.localStorageIsClear.subscribe(function (data) {
            _this.getCurrentUser();
        });
    };
    HeaderComponent.prototype.getCurrentUser = function () {
        var user = this.localStorageService.fetchValueFromKey('user') ? JSON.parse(this.localStorageService.fetchValueFromKey('user')) : null;
        this.currentUser = user ? user.firstName : null;
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_local_storage_service__["a" /* LocalStorageService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/message-input/message-input.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid.ng-touched{\r\n    border-color: red;\r\n    border-radius: 7px;\r\n    box-shadow: 0 0 1px red;\r\n    transition: box-shadow ease-in 0.5s;\r\n}\r\n\r\ninput:focus{\r\n    box-shadow: 0 0 1px skyblue;\r\n    -webkit-transform: box-shadow ease-in 0.5s;\r\n            transform: box-shadow ease-in 0.5s;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/message-input/message-input.component.html":
/***/ (function(module, exports) {

module.exports = "<form ngNativeValidate (ngSubmit)=\"onAddMessageSubmit(f)\" #f=\"ngForm\">\r\n  <div class=\"form-group\">\r\n      <label for=\"content\"><strong>Content</strong></label>\r\n      <input type=\"text\" \r\n             class=\"form-control\" \r\n             id=\"content\"\r\n             [ngModel]=\"message?.content\"\r\n             name=\"content\"\r\n             required>\r\n  </div>\r\n  <button class=\"btn btn-outline-primary\" \r\n          type=\"submit\" \r\n          style=\"cursor:pointer\">\r\n      Save\r\n  </button>\r\n  <button class=\"btn btn-outline-danger\" \r\n          type=\"button\" \r\n          style=\"cursor:pointer\"\r\n          (click)=\"onClearClick(f)\">\r\n      Clear\r\n  </button>\r\n</form>\r\n  "

/***/ }),

/***/ "../../../../../src/app/components/message-input/message-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_bridge_service__ = __webpack_require__("../../../../../src/app/services/data-bridge.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_local_storage_service__ = __webpack_require__("../../../../../src/app/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_sweetalert_service_js__ = __webpack_require__("../../../../angular-sweetalert-service/js/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessageInputComponent = (function () {
    function MessageInputComponent(messageService, localStorageService, dataBridgeService, alertService) {
        this.messageService = messageService;
        this.localStorageService = localStorageService;
        this.dataBridgeService = dataBridgeService;
        this.alertService = alertService;
        this.onAddClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MessageInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.messageIsEdit.subscribe(function (data) {
            _this.message = data;
            document.getElementById('content').focus();
        });
    };
    MessageInputComponent.prototype.onAddMessageSubmit = function (form) {
        var _this = this;
        var newMessageContent = form.value;
        var messageEditContent = form.value.content;
        if (this.message) {
            //Edit
            this.message.content = messageEditContent;
            this.messageService.updateMessage(this.message)
                .subscribe(function (data) {
                console.log('Data coming back from updating message...:', data);
            });
            this.message = null;
        }
        else {
            //Create
            this.messageService.addMessages(newMessageContent)
                .subscribe(function (data) {
                console.log('Data coming back from adding a message...:', data);
                if (data.success) {
                    console.log(data.msg);
                    console.log('Message: ', data.message);
                    _this.dataBridgeService.addMessage();
                }
                else {
                    console.log(data.msg);
                }
            }, function (err) {
                console.log('Error: ', err);
            });
        }
        form.resetForm();
    };
    MessageInputComponent.prototype.onClearClick = function (form) {
        this.message = null;
        form.resetForm();
    };
    return MessageInputComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], MessageInputComponent.prototype, "onAddClick", void 0);
MessageInputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-message-input',
        template: __webpack_require__("../../../../../src/app/components/message-input/message-input.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/message-input/message-input.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_local_storage_service__["a" /* LocalStorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_bridge_service__["a" /* DataBridgeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_bridge_service__["a" /* DataBridgeService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular_sweetalert_service_js__["a" /* SweetAlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_sweetalert_service_js__["a" /* SweetAlertService */]) === "function" && _e || Object])
], MessageInputComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=message-input.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/message/message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#authorDiv {\r\n    margin-top: 8px;\r\n    font-style: italic;\r\n}\r\n\r\n.card{\r\n    margin-bottom: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/message/message.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"card card-default\">\r\n  <div class=\"card-body\">\r\n      <div class=\"card-text\">\r\n          {{message.content}}\r\n      </div>\r\n  </div>\r\n  <footer class=\"card-footer\">\r\n      <div class=\"float-left\" id=\"authorDiv\">\r\n          by. {{message.user}}\r\n      </div>\r\n      <div class=\"float-right\" *ngIf=\"belongsToUser()\">\r\n          <button\r\n              type=\"button\"\r\n              class=\"btn btn-outline-info btn-sm\"\r\n              style=\"cursor:pointer;\"\r\n              (click)=\"onEditClick()\"\r\n          >\r\n              Edit\r\n          </button>\r\n          <button\r\n              type=\"button\"\r\n              class=\"btn btn-outline-danger btn-sm\"\r\n              style=\"cursor:pointer;\"\r\n              (click)=\"onDeleteClick(message)\"\r\n          >\r\n              Delete\r\n          </button>\r\n      </div>\r\n  </footer>\r\n</article>"

/***/ }),

/***/ "../../../../../src/app/components/message/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_message__ = __webpack_require__("../../../../../src/app/models/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_local_storage_service__ = __webpack_require__("../../../../../src/app/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessageComponent = (function () {
    function MessageComponent(messageService, localStorageService) {
        this.messageService = messageService;
        this.localStorageService = localStorageService;
        this.onDeleteClickEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    MessageComponent.prototype.onEditClick = function () {
        this.messageService.editMessage(this.message);
    };
    MessageComponent.prototype.onDeleteClick = function (message) {
        this.onDeleteClickEvent.emit(message);
    };
    MessageComponent.prototype.belongsToUser = function () {
        var user = this.localStorageService.fetchValueFromKey('user') ? JSON.parse(this.localStorageService.fetchValueFromKey('user')) : null;
        if (user) {
            return user._id == this.message.userId;
        }
    };
    return MessageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_message__["a" /* Message */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_message__["a" /* Message */]) === "function" && _a || Object)
], MessageComponent.prototype, "message", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], MessageComponent.prototype, "onDeleteClickEvent", void 0);
MessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-message',
        template: __webpack_require__("../../../../../src/app/components/message/message.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/message/message.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_local_storage_service__["a" /* LocalStorageService */]) === "function" && _d || Object])
], MessageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=message.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/messages-list/messages-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/messages-list/messages-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-message \r\n    [message]=\"message\" \r\n    *ngFor=\"let message of transformedMessages\" \r\n    (onDeleteClickEvent)=\"onDeleteClick($event)\"\r\n    >\r\n</app-message>"

/***/ }),

/***/ "../../../../../src/app/components/messages-list/messages-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_data_bridge_service__ = __webpack_require__("../../../../../src/app/services/data-bridge.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessagesListComponent = (function () {
    function MessagesListComponent(messageService, authService, dataBridgeService) {
        var _this = this;
        this.messageService = messageService;
        this.authService = authService;
        this.dataBridgeService = dataBridgeService;
        this.transformedMessages = [];
        this.dataBridgeService.eventListen().subscribe(function (data) {
            console.log("Data emitted from add message click...:", data);
            _this.transformedMessages.splice(0, _this.transformedMessages.length);
            _this.getMessages();
        });
    }
    MessagesListComponent.prototype.ngOnInit = function () {
        this.getMessages();
    };
    MessagesListComponent.prototype.getMessages = function () {
        var _this = this;
        this.messageService.getMessages()
            .subscribe(function (data) {
            console.log('Data coming back from getting messages...:', data);
            if (data.success) {
                console.log(data.msg);
                _this.messages = data.messages;
                _this.messages.forEach(function (message) {
                    _this.transformMessage = {
                        content: message.content,
                        user: message.user.firstName,
                        userId: message.user._id,
                        messageId: message._id
                    };
                    _this.transformedMessages.push(_this.transformMessage);
                });
            }
            else {
                console.log(data.msg);
            }
        });
    };
    MessagesListComponent.prototype.onDeleteClick = function (event) {
        this.transformedMessages.splice(this.transformedMessages.indexOf(event), 1);
        this.messageService.deleteMessage(event)
            .subscribe(function (data) {
            console.log('Data coming back from delete message...:', data);
        });
    };
    return MessagesListComponent;
}());
MessagesListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-messages-list',
        template: __webpack_require__("../../../../../src/app/components/messages-list/messages-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/messages-list/messages-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_data_bridge_service__["a" /* DataBridgeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_data_bridge_service__["a" /* DataBridgeService */]) === "function" && _c || Object])
], MessagesListComponent);

var _a, _b, _c;
//# sourceMappingURL=messages-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<app-message-input></app-message-input>\r\n<hr>\r\n<app-messages-list></app-messages-list>"

/***/ }),

/***/ "../../../../../src/app/components/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessagesComponent = (function () {
    function MessagesComponent() {
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    return MessagesComponent;
}());
MessagesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-messages',
        template: __webpack_require__("../../../../../src/app/components/messages/messages.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/messages/messages.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MessagesComponent);

//# sourceMappingURL=messages.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Sign In</h3>\r\n<br>\r\n<form [formGroup]=\"signInForm\" (ngSubmit)=\"onSignInSubmit(signInForm.value)\" ngNativeValidate>\r\n  <div class=\"form-group\">\r\n      <label for=\"email\">Mail</label>\r\n      <div class=\"input-group\">\r\n          <input type=\"email\" \r\n                  id=\"email\" \r\n                  class=\"form-control\"\r\n                  formControlName=\"email\">\r\n          <span class=\"input-group-addon\" *ngIf=\"signInForm.controls['email'].valid\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></span>\r\n      </div>\r\n      <div class=\"alert alert-danger animated flipInX\" *ngIf=\"!signInForm.controls['email'].valid && signInForm.controls['email'].touched\">\r\n          <span *ngIf=\"signInForm.controls['email'].errors['required']\">This field is required</span>\r\n          <span *ngIf=\"signInForm.controls['email'].errors['pattern']\">Must enter a valid email</span>\r\n      </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n      <label for=\"password\">Password</label>\r\n          <input type=\"password\" \r\n                  id=\"password\" \r\n                  class=\"form-control\"\r\n                  formControlName=\"password\">\r\n      <div class=\"alert alert-danger animated flipInX\" *ngIf=\"!signInForm.controls['password'].valid && signInForm.controls['password'].dirty\">\r\n          <span *ngIf=\"signInForm.controls['password'].errors['required']\">This field is required</span>\r\n          <span *ngIf=\"signInForm.controls['password'].errors['minlength']\">Must be at least 6 characters</span>\r\n      </div>\r\n  </div>\r\n  <button class=\"btn btn-success btn-block\" type=\"submit\" [disabled]=\"!signInForm.valid\" id=\"submitBtn\">Signin</button>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_sweetalert_service_js__ = __webpack_require__("../../../../angular-sweetalert-service/js/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigninComponent = (function () {
    function SigninComponent(fB, authService, router, alertService) {
        this.fB = fB;
        this.authService = authService;
        this.router = router;
        this.alertService = alertService;
        this.emailRegex = "[^ @]*@[^ @]*";
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.signInForm = this.fB.group({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern(this.emailRegex)
            ])),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(6)
            ]))
        });
    };
    SigninComponent.prototype.onSignInSubmit = function (value) {
        var _this = this;
        var credentials = {
            email: value.email,
            password: value.password
        };
        this.authService.signIn(credentials)
            .subscribe(function (data) {
            console.log('Data coming back from sign-in...', data);
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['/messages']);
            }
            else {
                console.log('Error signing in');
                _this.alertService.alert({
                    title: 'Error',
                    text: data.message,
                    type: 'warning'
                });
            }
        });
    };
    return SigninComponent;
}());
SigninComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signin',
        template: __webpack_require__("../../../../../src/app/components/signin/signin.component.html"),
        styles: ["\n        span.input-group-addon{\n            color: #37b278;\n        }\n\n        #submitBtn:disabled{\n            cursor: not-allowed;\n        }\n                \n        #submitBtn{\n            cursor: pointer;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular_sweetalert_service_js__["a" /* SweetAlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_sweetalert_service_js__["a" /* SweetAlertService */]) === "function" && _d || Object])
], SigninComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/signup/password-validation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordValidation; });
var PasswordValidation = (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value;
        if (AC.get('verifyPassword').touched || AC.get('verifyPassword').dirty) {
            var verifyPassword = AC.get('verifyPassword').value;
            if (password != verifyPassword) {
                AC.get('verifyPassword').setErrors({ MatchPassword: true });
            }
            else {
                return null;
            }
        }
    };
    return PasswordValidation;
}());

//# sourceMappingURL=password-validation.js.map

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Sign Up</h3>\r\n<br>\r\n<form [formGroup]=\"signUpForm\" (ngSubmit)=\"onSignUpSubmit(signUpForm.value)\" ngNativeValidate>\r\n  <div class=\"form-group\">\r\n      <label for=\"firstName\">First Name</label>\r\n      <div class=\"input-group\">\r\n          <input type=\"text\" \r\n                  id=\"firstName\" \r\n                  class=\"form-control\"\r\n                  formControlName=\"firstName\">\r\n          <span class=\"input-group-addon\" *ngIf=\"signUpForm.controls['firstName'].valid\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></span>\r\n      </div>\r\n      \r\n      <div class=\"alert alert-danger animated flipInX\" *ngIf=\"!signUpForm.controls['firstName'].valid && signUpForm.controls['firstName'].touched\">\r\n          <span *ngIf=\"signUpForm.controls['firstName'].errors['required']\">This field is required</span>\r\n      </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n      <label for=\"lastName\">Last Name</label>\r\n      <div class=\"input-group\">\r\n          <input type=\"text\" \r\n                  id=\"lastName\" \r\n                  class=\"form-control\"\r\n                  formControlName=\"lastName\">\r\n          <span class=\"input-group-addon\" *ngIf=\"signUpForm.controls['lastName'].valid\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></span>\r\n      </div>\r\n      <div class=\"alert alert-danger animated flipInX\" *ngIf=\"!signUpForm.controls['lastName'].valid && signUpForm.controls['lastName'].touched\">\r\n          <span *ngIf=\"signUpForm.controls['lastName'].errors['required']\">This field is required</span>\r\n      </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n      <label for=\"email\">Mail Address</label>\r\n      <div class=\"input-group\">\r\n          <input type=\"email\" \r\n                  id=\"email\" \r\n                  class=\"form-control\"\r\n                  formControlName=\"email\">\r\n          <span class=\"input-group-addon\" *ngIf=\"signUpForm.controls['email'].valid\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></span>\r\n      </div>\r\n      <div class=\"alert alert-danger animated flipInX\" *ngIf=\"!signUpForm.controls['email'].valid && signUpForm.controls['email'].touched\">\r\n          <span *ngIf=\"signUpForm.controls['email'].errors['required']\">This field is required</span>\r\n          <span *ngIf=\"signUpForm.controls['email'].errors['pattern']\">Must enter a valid email</span>\r\n      </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n      <label for=\"password\">Password</label>\r\n      <div class=\"input-group\">\r\n          <input type=\"password\" \r\n                  id=\"password\" \r\n                  class=\"form-control\"\r\n                  formControlName=\"password\">\r\n          <span class=\"input-group-addon\" *ngIf=\"signUpForm.controls['password'].valid\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></span>\r\n      </div>\r\n      <div class=\"alert alert-danger animated flipInX\" *ngIf=\"!signUpForm.controls['password'].valid && signUpForm.controls['password'].dirty\">\r\n          <span *ngIf=\"signUpForm.controls['password'].errors['required']\">This field is required</span>\r\n          <span *ngIf=\"signUpForm.controls['password'].errors['minlength']\">Must be at least 6 characters</span>\r\n      </div>\r\n  </div>\r\n  <div class=\"form-group\" *ngIf=\"signUpForm.controls['password'].valid\">\r\n      <label for=\"verifyPassword\">Confirm Password</label>\r\n      <div class=\"input-group\">\r\n          <input type=\"password\" \r\n                  id=\"confirmPassword\" \r\n                  class=\"form-control\"\r\n                  formControlName=\"verifyPassword\">\r\n          <span class=\"input-group-addon\" *ngIf=\"signUpForm.controls['verifyPassword'].valid\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></span>\r\n      </div>\r\n      <div class=\"alert alert-danger animated flipInX\" *ngIf=\"!signUpForm.controls['verifyPassword'].valid && signUpForm.controls['verifyPassword'].dirty\">\r\n          <span *ngIf=\"signUpForm.controls['verifyPassword'].pristine || signUpForm.controls['verifyPassword'].errors?.MatchPassword\">Password does not match</span>\r\n      </div>\r\n  </div>\r\n  <button class=\"btn btn-success btn-block\" type=\"submit\" [disabled]=\"!signUpForm.valid\" id=\"submitBtn\">Submit</button>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__password_validation__ = __webpack_require__("../../../../../src/app/components/signup/password-validation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_sweetalert_service_js__ = __webpack_require__("../../../../angular-sweetalert-service/js/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = (function () {
    function SignupComponent(fB, authService, alertService) {
        this.fB = fB;
        this.authService = authService;
        this.alertService = alertService;
        this.emailRegex = "[^ @]*@[^ @]*";
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signUpForm = this.fB.group({
            firstName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required),
            lastName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern(this.emailRegex)
            ])),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(6)
            ])),
            verifyPassword: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required)
        }, { validator: __WEBPACK_IMPORTED_MODULE_3__password_validation__["a" /* PasswordValidation */].MatchPassword });
    };
    SignupComponent.prototype.onSignUpSubmit = function (value) {
        var _this = this;
        this.newUser = {
            email: value.email,
            password: value.password,
            firstName: value.firstName,
            lastName: value.lastName
        };
        this.authService.addUser(this.newUser)
            .subscribe(function (data) {
            if (data.success) {
                console.log('New user added', data.user);
                _this.signUpForm.reset();
            }
            else {
                console.log('Error adding new user', data.err);
                _this.alertService.alert({
                    title: data.err.name,
                    text: data.err.errors.email.message + " is already existed",
                    type: 'warning'
                });
            }
        }, function (err) {
            console.log('Error', err);
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/components/signup/signup.component.html"),
        styles: ["\n        span.input-group-addon{\n            color: #37b278;\n        }\n\n        #submitBtn:disabled{\n            cursor: not-allowed;\n        }\n                \n        #submitBtn{\n            cursor: pointer;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular_sweetalert_service_js__["a" /* SweetAlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_sweetalert_service_js__["a" /* SweetAlertService */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isSignedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/auth/signin']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/login.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginGuard = (function () {
    function LoginGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function () {
        if (this.authService.isSignedIn()) {
            this.router.navigate(['/messages']);
            return false;
        }
        else {
            return true;
        }
    };
    return LoginGuard;
}());
LoginGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginGuard);

var _a, _b;
//# sourceMappingURL=login.guard.js.map

/***/ }),

/***/ "../../../../../src/app/models/message.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message(content, user, messageId, userId) {
        this.content = content;
        this.user = user;
        this.messageId = messageId;
        this.userId = userId;
    }
    return Message;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ "../../../../../src/app/routes/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_authentication_authentication_component__ = __webpack_require__("../../../../../src/app/components/authentication/authentication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_messages_messages_component__ = __webpack_require__("../../../../../src/app/components/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_routing__ = __webpack_require__("../../../../../src/app/routes/auth.routing.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });





var APP_ROUTES = [
    { path: '', redirectTo: 'messages', pathMatch: 'full' },
    { path: 'messages', component: __WEBPACK_IMPORTED_MODULE_2__components_messages_messages_component__["a" /* MessagesComponent */] },
    { path: 'auth', component: __WEBPACK_IMPORTED_MODULE_1__components_authentication_authentication_component__["a" /* AuthenticationComponent */], children: __WEBPACK_IMPORTED_MODULE_4__auth_routing__["a" /* AUTH_ROUTES */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/routes/auth.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_signin_signin_component__ = __webpack_require__("../../../../../src/app/components/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_login_guard__ = __webpack_require__("../../../../../src/app/guards/login.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_ROUTES; });



var AUTH_ROUTES = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_1__components_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_0__components_signin_signin_component__["a" /* SigninComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_login_guard__["a" /* LoginGuard */]] }
];
//# sourceMappingURL=auth.routing.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__local_storage_service__ = __webpack_require__("../../../../../src/app/services/local-storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(httpService, localStorageService) {
        this.httpService = httpService;
        this.localStorageService = localStorageService;
    }
    AuthService.prototype.addUser = function (user) {
        var body = { user: user };
        return this.httpService.post('/users/addUser', body, { 'Content-Type': 'application/json' });
    };
    AuthService.prototype.getUserById = function (id) {
        return this.httpService.get('/users/getUserById/' + id, {});
    };
    AuthService.prototype.signIn = function (credentials) {
        var body = { credentials: credentials };
        return this.httpService.post('/users/signin', body, { 'Content-Type': 'application/json' });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        this.localStorageService.saveValueWithKey('token', token);
        this.localStorageService.saveValueWithKey('user', JSON.stringify(user));
    };
    AuthService.prototype.loadToken = function () {
        return this.localStorageService.fetchValueFromKey('token');
    };
    AuthService.prototype.loadCurrentUser = function () {
        return JSON.parse(this.localStorageService.fetchValueFromKey('user'));
    };
    AuthService.prototype.isSignedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["tokenNotExpired"])('token');
    };
    AuthService.prototype.signOut = function () {
        this.localStorageService.clearAll();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__local_storage_service__["a" /* LocalStorageService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data-bridge.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataBridgeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataBridgeService = (function () {
    function DataBridgeService() {
        this.eventListener = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Subject"]();
    }
    DataBridgeService.prototype.eventListen = function () {
        return this.eventListener.asObservable();
    };
    DataBridgeService.prototype.addMessage = function () {
        this.eventListener.next();
    };
    return DataBridgeService;
}());
DataBridgeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DataBridgeService);

//# sourceMappingURL=data-bridge.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/error.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_sweetalert_service_js__ = __webpack_require__("../../../../angular-sweetalert-service/js/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorService = (function () {
    function ErrorService(alertService) {
        this.alertService = alertService;
    }
    ErrorService.prototype.handleError = function (error) {
        console.log('error', error);
        this.alertService.alert({
            title: 'Error',
            text: error.status + ": " + error._body,
            type: 'warning'
        });
    };
    return ErrorService;
}());
ErrorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular_sweetalert_service_js__["a" /* SweetAlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_sweetalert_service_js__["a" /* SweetAlertService */]) === "function" && _a || Object])
], ErrorService);

var _a;
//# sourceMappingURL=error.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_service__ = __webpack_require__("../../../../../src/app/services/error.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = HttpService_1 = (function () {
    function HttpService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
    }
    HttpService.prototype.get = function (endpoint, headersObject) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](headersObject);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.get(HttpService_1.url + endpoint, options)
            .map(function (res) {
            return res.json();
        })
            .catch(function (err) {
            _this.errorService.handleError(err);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(err);
        });
    };
    HttpService.prototype.post = function (endpoint, body, headersObject) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](headersObject);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        console.log('Posting to...:', HttpService_1.url + endpoint);
        return this.http.post(HttpService_1.url + endpoint, body, options)
            .map(function (res) {
            return res.json();
        })
            .catch(function (err) {
            _this.errorService.handleError(err);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(err);
        });
    };
    HttpService.prototype.put = function (endpoint, body, headersObject) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](headersObject);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        console.log('Updating to...', HttpService_1.url + endpoint);
        return this.http.put(HttpService_1.url + endpoint, body, options)
            .map(function (res) {
            return res.json();
        })
            .catch(function (err) {
            _this.errorService.handleError(err);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(err);
        });
    };
    HttpService.prototype.delete = function (endpoint, headersObject) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](headersObject);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        console.log('Deleting to...', HttpService_1.url + endpoint);
        return this.http.delete(HttpService_1.url + endpoint, options)
            .map(function (res) {
            return res.json();
        })
            .catch(function (err) {
            _this.errorService.handleError(err);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(err);
        });
    };
    HttpService.prototype.patch = function (endpoint, body, headersObject) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](headersObject);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        console.log('Patching to...', HttpService_1.url + endpoint);
        return this.http.patch(HttpService_1.url + endpoint, body, options)
            .map(function (res) {
            return res.json();
        })
            .catch(function (err) {
            _this.errorService.handleError(err);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(err);
        });
    };
    return HttpService;
}());
HttpService.host = 'localhost';
HttpService.port = '3000';
HttpService.domain = 'mean-auth-messages.herokuapp.com';
//public static url = 'http://'+ HttpService.host + ':' + HttpService.port;
HttpService.url = 'https://' + HttpService_1.domain;
HttpService = HttpService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__error_service__["a" /* ErrorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__error_service__["a" /* ErrorService */]) === "function" && _b || Object])
], HttpService);

var HttpService_1, _a, _b;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/local-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalStorageService = (function () {
    function LocalStorageService() {
        this.localStorageIsClear = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    LocalStorageService.prototype.saveValueWithKey = function (key, value) {
        localStorage.setItem(key, value);
        this.localStorageIsClear.emit();
    };
    LocalStorageService.prototype.fetchValueFromKey = function (key) {
        return localStorage.getItem(key);
    };
    LocalStorageService.prototype.deleteValueWithKey = function (key) {
        localStorage.removeItem(key);
    };
    LocalStorageService.prototype.clearAll = function () {
        localStorage.clear();
        this.localStorageIsClear.emit();
    };
    return LocalStorageService;
}());
LocalStorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LocalStorageService);

//# sourceMappingURL=local-storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_storage_service__ = __webpack_require__("../../../../../src/app/services/local-storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageService = (function () {
    function MessageService(localStorageService, httpService) {
        this.localStorageService = localStorageService;
        this.httpService = httpService;
        this.messages = [];
        this.messageIsEdit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MessageService.prototype.addMessages = function (message) {
        var body = { message: message };
        var token = this.localStorageService.fetchValueFromKey('token') ? this.localStorageService.fetchValueFromKey('token') : '';
        return this.httpService.post('/messages/addMessage', body, { 'Authorization': token, 'Content-Type': 'application/json' });
    };
    MessageService.prototype.getMessages = function () {
        return this.httpService.get('/messages/messages', {});
    };
    MessageService.prototype.editMessage = function (message) {
        this.messageIsEdit.emit(message);
    };
    MessageService.prototype.updateMessage = function (message) {
        var body = { message: message };
        var token = this.localStorageService.fetchValueFromKey('token') ? this.localStorageService.fetchValueFromKey('token') : '';
        return this.httpService.patch('/messages/editMessage/' + message.messageId, body, { 'Authorization': token, 'Content-Type': 'application/json' });
    };
    MessageService.prototype.deleteMessage = function (message) {
        var token = this.localStorageService.fetchValueFromKey('token') ? this.localStorageService.fetchValueFromKey('token') : '';
        return this.httpService.delete('/messages/deleteMessage/' + message.messageId, { 'Authorization': token });
    };
    return MessageService;
}());
MessageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__local_storage_service__["a" /* LocalStorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _b || Object])
], MessageService);

var _a, _b;
//# sourceMappingURL=message.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map