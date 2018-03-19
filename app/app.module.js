"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var app_Logincomponent_1 = require("./app.Logincomponent");
var app_Welcomecomponent_1 = require("./app.Welcomecomponent");
var app_DefaultComponent_1 = require("./app.DefaultComponent");
var languagenav_component_1 = require("./Components/languagenav.component");
var topnav_component_1 = require("./Components/topnav.component");
var language_service_1 = require("./Services/language.service");
var appRoutes = [
    { path: 'Login', component: app_Logincomponent_1.LoginComponent },
    { path: 'Welcome', component: app_Welcomecomponent_1.WelcomeComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes)],
            declarations: [app_component_1.AppComponent, app_Logincomponent_1.LoginComponent, app_Welcomecomponent_1.WelcomeComponent, app_DefaultComponent_1.DefaultComponent, languagenav_component_1.LanguageNavComponent, topnav_component_1.TopNavComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [language_service_1.LanguageService],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map