webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reactive_reactive_component__ = __webpack_require__("./src/app/reactive/reactive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__template_template_component__ = __webpack_require__("./src/app/template/template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reactive_dynamic_reactive_dynamic_component__ = __webpack_require__("./src/app/reactive-dynamic/reactive-dynamic.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'reactive-editor', component: __WEBPACK_IMPORTED_MODULE_2__reactive_reactive_component__["a" /* ReactiveComponent */] },
    { path: 'reactive-dynamic-editor', component: __WEBPACK_IMPORTED_MODULE_4__reactive_dynamic_reactive_dynamic_component__["a" /* ReactiveDynamicComponent */] },
    { path: 'template-editor', component: __WEBPACK_IMPORTED_MODULE_3__template_template_component__["a" /* TemplateComponent */] },
    { path: '', redirectTo: '/reactive-editor', pathMatch: 'full' },
    { path: '**', redirectTo: '/reactive-editor', pathMatch: 'full' }
];
var AppRoutingRoutingModule = /** @class */ (function () {
    function AppRoutingRoutingModule() {
    }
    AppRoutingRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        })
    ], AppRoutingRoutingModule);
    return AppRoutingRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n    <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" menu-collapse>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"https://github.com/ghiscoding/angular-markdown-editor\">\n            <i class=\"fa fa-github\"></i>\n            <span>{{title}}</span>\n        </a>\n    </div>\n    <div class=\"navbar-collapse collapse\">\n        <ul class=\"nav navbar-nav\">\n            <li>\n                <span style=\"position: relative; top: 15px\">\n                    <iframe allowtransparency=\"true\" scrolling=\"no\" frameborder=\"0\" src=\"https://buttons.github.io/buttons.html#href=https%3A%2F%2Fgithub.com%2Fghiscoding%2Fangular-markdown-editor&amp;aria-label=Star%20ghiscoding%2Fangular-markdown-editor%20on%20GitHub&amp;data-icon=octicon-star&amp;data-text=Star&amp;data-show-count=true\"\n                    style=\"width: 90px; height: 20px; border: none;\"></iframe>\n                </span>\n              </li>\n            <li>\n                <a [routerLink]=\"['/reactive-editor']\">\n                    <i class=\"fa fa-lg fa-exchange\"></i> Reactive Form Demo\n                </a>\n            </li>\n            <li>\n                <a [routerLink]=\"['/reactive-dynamic-editor']\">\n                    <i class=\"fa fa-lg fa-exchange\"></i> Reactive Dynamic Form Demo\n                </a>\n            </li>\n            <li>\n                <a [routerLink]=\"['/template-editor']\">\n                    <i class=\"fa fa-lg fa-list-ul\"></i> Template Form Demo\n                </a>\n            </li>\n        </ul>\n    </div>\n</nav>\n\n<div id=\"demo-container\" class=\"container-fluid body-content\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".body-content {\n  margin-top: 50px; }\n\n.red {\n  color: red; }\n\n.faded {\n  opacity: 0.2; }\n\n.faded:hover {\n  opacity: 0.5; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular-Markdown-Editor';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_markdown__ = __webpack_require__("./node_modules/ngx-markdown/dist/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_markdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_angular_markdown_editor_angular_markdown_editor_module__ = __webpack_require__("./src/lib/angular-markdown-editor/angular-markdown-editor.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reactive_reactive_component__ = __webpack_require__("./src/app/reactive/reactive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__template_template_component__ = __webpack_require__("./src/app/template/template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reactive_dynamic_reactive_dynamic_component__ = __webpack_require__("./src/app/reactive-dynamic/reactive-dynamic.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import our custom module, library created using this article
// https://medium.com/@ngl817/building-an-angular-4-component-library-with-the-angular-cli-and-ng-packagr-53b2ade0701e




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__reactive_reactive_component__["a" /* ReactiveComponent */],
                __WEBPACK_IMPORTED_MODULE_9__reactive_dynamic_reactive_dynamic_component__["a" /* ReactiveDynamicComponent */],
                __WEBPACK_IMPORTED_MODULE_8__template_template_component__["a" /* TemplateComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__app_routing_module__["a" /* AppRoutingRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_markdown__["MarkdownModule"].forRoot({
                    provide: __WEBPACK_IMPORTED_MODULE_4_ngx_markdown__["MarkedOptions"],
                    useFactory: function () {
                        return {
                            renderer: new __WEBPACK_IMPORTED_MODULE_4_ngx_markdown__["MarkedRenderer"](),
                            gfm: true,
                            tables: true,
                            breaks: false,
                            pedantic: false,
                            sanitize: false,
                            smartLists: true,
                            smartypants: false,
                        };
                    },
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__lib_angular_markdown_editor_angular_markdown_editor_module__["a" /* AngularMarkdownEditorModule */].forRoot({
                    // add any Global Options/Config you might want
                    // to avoid passing the same options over and over in each components of your App
                    iconlibrary: 'glyph'
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/reactive-dynamic/reactive-dynamic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n        <h2>Reactive Dynamic Form - Demo</h2>\n    </div>\n</div>\n<hr/>\n\n<form [formGroup]=\"dynamicForm\">\n    <div class=\"form-group\">\n        <label for=\"field1Id\">Field 1</label>\n        <input type=\"text\" id=\"field1Id\" formControlName=\"field1\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"field2Id\">Field 2</label>\n        <input type=\"text\" id=\"field2Id\" formControlName=\"field2\">\n    </div>\n    <div class=\"form-group\">\n        <button (click)=\"addNote()\">Add note (markdown based)</button>\n    </div>\n    <div formArrayName=\"notes\">\n        <div *ngFor=\"let item of notes.controls; let i = index;\">\n            <div class=\"container\" [formGroupName]=\"i\">\n                <angular-markdown-editor\n                    [textareaId]=\"i\"\n                    [options]=\"editorOptions\"\n                    rows=\"2\"\n                    formControlName=\"body\"\n                >\n                </angular-markdown-editor>\n            </div>\n        </div>\n    </div>\n</form>\n\n<hr/>\n\n<pre class=\"code\">\n{{this.dynamicForm.value| json}}\n</pre>\n"

/***/ }),

/***/ "./src/app/reactive-dynamic/reactive-dynamic.component.scss":
/***/ (function(module, exports) {

module.exports = ".action-buttons {\n  padding-top: 10px; }\n\n.bold {\n  font-weight: bold; }\n\ntextarea.md-input {\n  padding: 8px; }\n\n.outline {\n  border: 1px solid #c0c0c0;\n  border-radius: 4px; }\n\n.result-preview {\n  padding: 10px;\n  max-height: 350px;\n  overflow: auto; }\n"

/***/ }),

/***/ "./src/app/reactive-dynamic/reactive-dynamic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactiveDynamicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReactiveDynamicComponent = /** @class */ (function () {
    function ReactiveDynamicComponent(fb) {
        this.fb = fb;
    }
    Object.defineProperty(ReactiveDynamicComponent.prototype, "notes", {
        get: function () {
            return this.dynamicForm.get('notes');
        },
        enumerable: true,
        configurable: true
    });
    ReactiveDynamicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editorOptions = {
            autofocus: false,
            iconlibrary: 'fa',
            savable: false,
            hiddenButtons: ['cmdImage', 'cmdPreview', 'cmdTable', 'cmdQuote', 'cmdCode', 'cmdUrl', 'cmdHeading'],
            onFullscreenExit: function (e) { return _this.hidePreview(e); },
            onShow: function (e) { return _this.bsEditorInstance = e; }
        };
        this.buildForm();
        for (var i = 0; i < 3; i++) {
            this.addNote();
        }
    };
    ReactiveDynamicComponent.prototype.buildForm = function () {
        this.dynamicForm = this.fb.group({
            field1: [''],
            field2: [''],
            notes: this.fb.array([])
        });
    };
    ReactiveDynamicComponent.prototype.getMarkdownElem = function () {
        return this.fb.group({
            body: ['']
        });
    };
    ReactiveDynamicComponent.prototype.hidePreview = function (e) {
        if (this.bsEditorInstance && this.bsEditorInstance.hidePreview) {
            this.bsEditorInstance.hidePreview();
        }
    };
    ReactiveDynamicComponent.prototype.addNote = function () {
        this.notes.push(this.getMarkdownElem());
    };
    ReactiveDynamicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/reactive-dynamic/reactive-dynamic.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("./src/app/reactive-dynamic/reactive-dynamic.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], ReactiveDynamicComponent);
    return ReactiveDynamicComponent;
}());



/***/ }),

/***/ "./src/app/reactive/reactive.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n        <h2>Reactive Form - Demo</h2>\n    </div>\n    <div class=\"col-md-6 action-buttons\">\n        <button class=\"btn btn-info btn-sm\" (click)=\"showFullScreen(true)\">\n            Full Screen Preview\n        </button>\n    </div>\n</div>\n<hr />\n\n<form [formGroup]=\"templateForm\" novalidate>\n    <div class=\"editor\">\n        <label>Editor</label>\n        <angular-markdown-editor textareaId=\"editor1\" [options]=\"editorOptions\" rows=\"12\" formControlName=\"body\">\n        </angular-markdown-editor>\n    </div>\n</form>\n\n<hr />\n<h3 class=\"text-success bold\">Preview</h3>\n<div class=\"result-preview outline\">\n    <markdown [data]=\"markdownText\"></markdown>\n</div>\n"

/***/ }),

/***/ "./src/app/reactive/reactive.component.scss":
/***/ (function(module, exports) {

module.exports = ".action-buttons {\n  padding-top: 10px; }\n\n.bold {\n  font-weight: bold; }\n\ntextarea.md-input {\n  padding: 8px; }\n\n.outline {\n  border: 1px solid #c0c0c0;\n  border-radius: 4px; }\n\n.result-preview {\n  padding: 10px;\n  max-height: 350px;\n  overflow: auto; }\n"

/***/ }),

/***/ "./src/app/reactive/reactive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_markdown__ = __webpack_require__("./node_modules/ngx-markdown/dist/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_markdown__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReactiveComponent = /** @class */ (function () {
    function ReactiveComponent(fb, markdownService) {
        this.fb = fb;
        this.markdownService = markdownService;
        this.showEditor = true;
    }
    ReactiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editorOptions = {
            autofocus: false,
            iconlibrary: 'fa',
            savable: false,
            hiddenButtons: ['cmdImage', 'cmdTable', 'cmdQuote', 'cmdCode', 'cmdUrl'],
            onFullscreenExit: function (e) { return _this.hidePreview(e); },
            onShow: function (e) { return _this.bsEditorInstance = e; },
            parser: function (val) { return _this.parse(val); }
        };
        // put the text completely on the left to avoid extra white spaces
        this.markdownText =
            "### Markdown example\n---\nThis is an **example** where we bind a variable to the `markdown` component that is also bind to the editor.\n#### example.component.ts\n```javascript\nfunction hello() {\n  alert('Hello World');\n}\n```\n#### example.component.html\n```html\n<textarea [(ngModel)]=\"markdown\"></textarea>\n<markdown [data]=\"markdown\"></markdown>\n```";
        this.buildForm(this.markdownText);
        this.onFormChanges();
    };
    ReactiveComponent.prototype.buildForm = function (markdownText) {
        this.templateForm = this.fb.group({
            body: [markdownText],
            isPreview: [true]
        });
    };
    /** highlight all code found, needs to be wrapped in timer to work properly */
    ReactiveComponent.prototype.highlight = function () {
        var _this = this;
        setTimeout(function () {
            _this.markdownService.highlight();
        });
    };
    ReactiveComponent.prototype.hidePreview = function (e) {
        if (this.bsEditorInstance && this.bsEditorInstance.hidePreview) {
            this.bsEditorInstance.hidePreview();
        }
    };
    ReactiveComponent.prototype.showFullScreen = function (isFullScreen) {
        if (this.bsEditorInstance && this.bsEditorInstance.setFullscreen) {
            this.bsEditorInstance.showPreview();
            this.bsEditorInstance.setFullscreen(isFullScreen);
        }
    };
    ReactiveComponent.prototype.parse = function (inputValue) {
        var markedOutput = this.markdownService.compile(inputValue.trim());
        this.highlight();
        return markedOutput;
    };
    ReactiveComponent.prototype.onFormChanges = function () {
        var _this = this;
        this.templateForm.valueChanges.subscribe(function (formData) {
            if (formData) {
                _this.markdownText = formData.body;
            }
        });
    };
    ReactiveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/reactive/reactive.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("./src/app/reactive/reactive.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_markdown__["MarkdownService"]])
    ], ReactiveComponent);
    return ReactiveComponent;
}());



/***/ }),

/***/ "./src/app/template/template.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n        <h2>Template Form [(ngModel)] - Demo</h2>\n    </div>\n    <div class=\"col-md-6 action-buttons\">\n        <button class=\"btn btn-info btn-sm\" (click)=\"showFullScreen(true)\">\n            Full Screen Preview\n        </button>\n    </div>\n</div>\n<hr />\n\n<form novalidate>\n    <div class=\"editor\">\n        <label>Editor (with French locale)</label>\n        <angular-markdown-editor textareaId=\"editor1\" [locale]=\"locale\" [options]=\"editorOptions\"\n            rows=\"12\" name=\"markdownText\" [(ngModel)]=\"markdownText\" (onFullscreenExit)=\"hidePreview()\">\n        </angular-markdown-editor>\n    </div>\n</form>\n\n<hr />\n<h3 class=\"text-success bold\">Preview</h3>\n<div class=\"result-preview outline\">\n    <markdown [data]=\"markdownText\"></markdown>\n</div>\n"

/***/ }),

/***/ "./src/app/template/template.component.scss":
/***/ (function(module, exports) {

module.exports = ".action-buttons {\n  padding-top: 10px; }\n\n.bold {\n  font-weight: bold; }\n\ntextarea.md-input {\n  padding: 8px; }\n\n.outline {\n  border: 1px solid #c0c0c0;\n  border-radius: 4px; }\n\n.result-preview {\n  padding: 10px;\n  max-height: 350px;\n  overflow: auto; }\n"

/***/ }),

/***/ "./src/app/template/template.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_markdown__ = __webpack_require__("./node_modules/ngx-markdown/dist/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_markdown__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TemplateComponent = /** @class */ (function () {
    function TemplateComponent(fb, markdownService) {
        this.fb = fb;
        this.markdownService = markdownService;
        this.showEditor = true;
        this.locale = {
            language: 'fr',
            dictionary: {
                'Bold': 'Gras',
                'Italic': 'Italique',
                'Heading': 'Titre',
                'URL/Link': 'Insérer un lien HTTP',
                'Image': 'Insérer une image',
                'List': 'Liste à puces',
                'Ordered List': 'Liste ordonnée',
                'Unordered List': 'Liste non-ordonnée',
                'Code': 'Code',
                'Quote': 'Citation',
                'Preview': 'Prévisualiser',
                'Strikethrough': 'Caractères barrés',
                'Table': 'Table',
                'strong text': 'texte important',
                'emphasized text': 'texte souligné',
                'heading text': 'texte d\'entête',
                'enter link description here': 'entrez la description du lien ici',
                'Insert Hyperlink': 'Insérez le lien hypertexte',
                'enter image description here': 'entrez la description de l\'image ici',
                'Insert Image Hyperlink': 'Insérez le lien hypertexte de l\'image',
                'enter image title here': 'entrez le titre de l\'image ici',
                'list text here': 'texte à puce ici'
            }
        };
    }
    TemplateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editorOptions = {
            autofocus: false,
            iconlibrary: 'fa',
            savable: false,
            onShow: function (e) { return _this.bsEditorInstance = e; },
            parser: function (val) { return _this.parse(val); }
        };
        // put the text completely on the left to avoid extra white spaces
        this.markdownText =
            "### Markdown example\n---\nThis is an **example** where we bind a variable to the `markdown` component that is also bind to a textarea.\n#### example.component.ts\n```javascript\nfunction hello() {\n  alert('Hello World');\n}\n```\n#### example.component.css\n```css\n.bold {\n  font-weight: bold;\n}\n```";
        this.buildForm(this.markdownText);
    };
    TemplateComponent.prototype.buildForm = function (markdownText) {
        this.templateForm = this.fb.group({
            body: [markdownText],
            isPreview: [true]
        });
    };
    /** highlight all code found, needs to be wrapped in timer to work properly */
    TemplateComponent.prototype.highlight = function () {
        var _this = this;
        setTimeout(function () {
            _this.markdownService.highlight();
        });
    };
    TemplateComponent.prototype.hidePreview = function () {
        if (this.bsEditorInstance && this.bsEditorInstance.hidePreview) {
            this.bsEditorInstance.hidePreview();
        }
    };
    TemplateComponent.prototype.showFullScreen = function (isFullScreen) {
        if (this.bsEditorInstance && this.bsEditorInstance.setFullscreen) {
            this.bsEditorInstance.showPreview();
            this.bsEditorInstance.setFullscreen(isFullScreen);
        }
    };
    TemplateComponent.prototype.parse = function (inputValue) {
        var markedOutput = this.markdownService.compile(inputValue.trim());
        this.highlight();
        return markedOutput;
    };
    TemplateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/template/template.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("./src/app/template/template.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_markdown__["MarkdownService"]])
    ], TemplateComponent);
    return TemplateComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/lib/angular-markdown-editor/angular-markdown-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MARKDOWN_EDITOR_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularMarkdownEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_editor_options__ = __webpack_require__("./src/lib/angular-markdown-editor/global-editor-options.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MARKDOWN_EDITOR_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return AngularMarkdownEditorComponent; }),
    multi: true
};
var AngularMarkdownEditorComponent = /** @class */ (function () {
    function AngularMarkdownEditorComponent(forRootConfig) {
        this.forRootConfig = forRootConfig;
        /** Number of rows for the textarea */
        this.rows = 10;
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    Object.defineProperty(AngularMarkdownEditorComponent.prototype, "locale", {
        /** Locale set that has a language and dictionary that can be added as an alternative language. Can be 1 or more dictionaries */
        set: function (locale) {
            this.addLocaleSet(locale);
        },
        enumerable: true,
        configurable: true
    });
    AngularMarkdownEditorComponent.prototype.ngAfterViewInit = function () {
        this.initialization();
    };
    AngularMarkdownEditorComponent.prototype.addLocaleSet = function (editorLocale) {
        if (!editorLocale) {
            return;
        }
        if (Array.isArray(editorLocale)) {
            editorLocale.forEach(function (locale) { return $.fn.markdown.messages[locale.language] = locale.dictionary; });
        }
        else {
            $.fn.markdown.messages[editorLocale.language] = editorLocale.dictionary;
        }
    };
    AngularMarkdownEditorComponent.prototype.initialization = function () {
        var _this = this;
        // get all default options to get the entire list of onEvent so that we can attach Dispatch Custom Event to them
        // we also merge these with the options, and pass these merged options to the hookToEditorEvents() method to cover all onEvent callbacks
        var markdownDefaultOptions = $.fn.markdown.defaults;
        // re-hook new events that were optionally defined in the options
        // merge the options, the order matters (last options on the right have higher priorities)
        var options = __assign({}, markdownDefaultOptions, __WEBPACK_IMPORTED_MODULE_2__global_editor_options__["a" /* GlobalEditorOptions */], this.forRootConfig, this.options);
        // hook all events to respective callbacks
        // 1- could be coming from a Dispatched Event in the View:: (onX)="do()"
        // 2- or from editor option callback in the Component:: const options = { onX: () => do() }
        this.hookToEditorEvents(options);
        // hook to the onChange event to update our model
        // however we don't want to override the previous callback, so we will run that one to if exists
        var previousOnChange = options.onChange;
        options.onChange = function (e) {
            _this.onModelChange(e && e.getContent && e.getContent());
            if (typeof previousOnChange === 'function') {
                previousOnChange(e);
            }
        };
        // finally create the editor
        $("#" + this.textareaId).markdown(options);
    };
    /**
     * Hook any of the editor event(s) to Dispatch Custom Event so that we can use them in Angular with (onX)="doSomething($event.detail.eventData)"
     * @param editor options
     */
    AngularMarkdownEditorComponent.prototype.hookToEditorEvents = function (options) {
        var _this = this;
        var _loop_1 = function (prop) {
            if (options.hasOwnProperty(prop) && prop.startsWith('on')) {
                var previousEvent_1 = options[prop];
                // on Callback triggered
                options[prop] = function (e) {
                    // Dispatch a Custom Event, so that the (onX)="do()" from the View works
                    _this.dispatchCustomEvent(prop, { eventData: e });
                    // if an event was passed through the options (instead of dispatch), and is not empty function, then we need to run it as well
                    // basically we don't want the Dispatch Custom Event (onX)="do()" to override the ones passed directly in the editor option callbacks
                    if (typeof previousEvent_1 === 'function') {
                        previousEvent_1(e);
                    }
                };
            }
        };
        for (var prop in options) {
            _loop_1(prop);
        }
    };
    /**
     * Write value to the native element
     * @param value string
     */
    AngularMarkdownEditorComponent.prototype.writeValue = function (value) {
        this.value = value;
        // preset values in the DOM element
        if (this.value) {
            this.elm.nativeElement.value = this.value;
        }
    };
    AngularMarkdownEditorComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    AngularMarkdownEditorComponent.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    /** Dispatch of Custom Event, which by default will bubble & is cancelable */
    AngularMarkdownEditorComponent.prototype.dispatchCustomEvent = function (eventName, data, isBubbling, isCancelable) {
        if (isBubbling === void 0) { isBubbling = true; }
        if (isCancelable === void 0) { isCancelable = true; }
        var eventInit = { bubbles: isBubbling, cancelable: isCancelable };
        if (data) {
            eventInit.detail = data;
        }
        return this.elm.nativeElement.dispatchEvent(new CustomEvent(eventName, eventInit));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('markdownEditorElm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AngularMarkdownEditorComponent.prototype, "elm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AngularMarkdownEditorComponent.prototype, "locale", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AngularMarkdownEditorComponent.prototype, "textareaId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AngularMarkdownEditorComponent.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AngularMarkdownEditorComponent.prototype, "rows", void 0);
    AngularMarkdownEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: 'angulaMarkdownEditor',
            selector: 'angular-markdown-editor',
            template: '<textarea #markdownEditorElm id="{{textareaId}}" name="{{textareaId}}" data-provide="markdown" rows="{{rows}}"></textarea>',
            providers: [MARKDOWN_EDITOR_VALUE_ACCESSOR]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('config')),
        __metadata("design:paramtypes", [Object])
    ], AngularMarkdownEditorComponent);
    return AngularMarkdownEditorComponent;
}());



/***/ }),

/***/ "./src/lib/angular-markdown-editor/angular-markdown-editor.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularMarkdownEditorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_markdown_editor_component__ = __webpack_require__("./src/lib/angular-markdown-editor/angular-markdown-editor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AngularMarkdownEditorModule = /** @class */ (function () {
    function AngularMarkdownEditorModule() {
    }
    AngularMarkdownEditorModule_1 = AngularMarkdownEditorModule;
    AngularMarkdownEditorModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: AngularMarkdownEditorModule_1,
            providers: [
                { provide: 'config', useValue: config }
            ]
        };
    };
    AngularMarkdownEditorModule = AngularMarkdownEditorModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__angular_markdown_editor_component__["a" /* AngularMarkdownEditorComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_markdown_editor_component__["a" /* AngularMarkdownEditorComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__angular_markdown_editor_component__["a" /* AngularMarkdownEditorComponent */]]
        })
    ], AngularMarkdownEditorModule);
    return AngularMarkdownEditorModule;
    var AngularMarkdownEditorModule_1;
}());



/***/ }),

/***/ "./src/lib/angular-markdown-editor/global-editor-options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalEditorOptions; });
var GlobalEditorOptions = {
    autofocus: false,
    disabledButtons: [],
    dropZoneOptions: null,
    enableDropDataUri: false,
    footer: '',
    height: 'inherit',
    hiddenButtons: ['cmdImage', 'cmdPreview', 'cmdTable', 'cmdQuote', 'cmdCode', 'cmdUrl'],
    hideable: false,
    iconlibrary: 'glyph',
    initialstate: 'editor',
    language: 'fr',
    additionalButtons: [
        [{
                name: 'groupFont',
                data: [{
                        name: 'cmdStrikethrough',
                        toggle: false,
                        title: 'Strikethrough',
                        icon: {
                            fa: 'fa fa-strikethrough',
                            glyph: 'glyphicon glyphicon-minus'
                        },
                        callback: function (e) {
                            // Give/remove ~~ surround the selection
                            var chunk;
                            var cursor;
                            var selected = e.getSelection();
                            var content = e.getContent();
                            if (selected.length === 0) {
                                // Give extra word
                                chunk = e.__localize('strikethrough');
                            }
                            else {
                                chunk = selected.text;
                            }
                            // transform selection and set the cursor into chunked text
                            if (content.substr(selected.start - 2, 2) === '~~' &&
                                content.substr(selected.end, 2) === '~~') {
                                e.setSelection(selected.start - 2, selected.end + 2);
                                e.replaceSelection(chunk);
                                cursor = selected.start - 2;
                            }
                            else {
                                e.replaceSelection('~~' + chunk + '~~');
                                cursor = selected.start + 2;
                            }
                            // Set the cursor
                            e.setSelection(cursor, cursor + chunk.length);
                        }
                    }]
            },
            {
                name: 'groupMisc',
                data: [{
                        name: 'cmdTable',
                        toggle: false,
                        title: 'Table',
                        icon: {
                            fa: 'fa fa-table',
                            glyph: 'glyphicon glyphicon-th'
                        },
                        callback: function (e) {
                            // Replace selection with some drinks
                            var chunk;
                            var cursor;
                            var selected = e.getSelection();
                            chunk = '\n| Tables        | Are           | Cool  | \n'
                                + '| ------------- |:-------------:| -----:| \n'
                                + '| col 3 is      | right-aligned | $1600 | \n'
                                + '| col 2 is      | centered      |   $12 | \n'
                                + '| zebra stripes | are neat      |    $1 |';
                            // transform selection and set the cursor into chunked text
                            e.replaceSelection(chunk);
                            cursor = selected.start;
                            // Set the cursor
                            e.setSelection(cursor, cursor + chunk.length);
                        }
                    }]
            }]
    ]
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map