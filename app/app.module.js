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
var topnav_component_1 = require("./Components/topnav.component");
var language_service_1 = require("./Services/language.service");
var message_component_1 = require("./Components/MessagePage/message.component");
var http_1 = require("@angular/http");
var jsonload_service_1 = require("./Services/jsonload.service");
var home_component_1 = require("./Components/HomePage/home.component");
var meeting_component_1 = require("./Components/MeetingPage/meeting.component");
var navbar_component_1 = require("./Components/navbar.component");
var photogallery_component_1 = require("./Components/HomePage/photogallery.component");
var about_component_1 = require("./Components/AboutPage/about.component");
var gospel_component_1 = require("./Components/GospelPage/gospel.component");
var fellowship_component_1 = require("./Components/FellowshipPage/fellowship.component");
var archivedmessage_1 = require("./Components/MessagePage/archivedmessage");
var churchmessage_component_1 = require("./Components/ChurchMessagePage/churchmessage.component");
var classlist_component_1 = require("./Components/MessagePage/classlist.component");
var videolist_component_1 = require("./Components/VideoListPage/videolist.component");
var misctopic_component_1 = require("./Components/MessagePage/misctopic.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'Home', component: home_component_1.HomeComponent },
    { path: 'Meeting', component: meeting_component_1.MeetingComponent },
    { path: 'ChurchMessage', component: churchmessage_component_1.ChurchMessageComponent },
    { path: 'About', component: about_component_1.AboutComponent },
    { path: 'Message', component: message_component_1.MessageComponent },
    { path: 'Gospel', component: gospel_component_1.GospelComponent },
    { path: 'Fellowship', component: fellowship_component_1.FellowshipComponent },
    { path: 'ClassVideo', component: videolist_component_1.VideoListComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
            declarations: [app_component_1.AppComponent,
                home_component_1.HomeComponent,
                meeting_component_1.MeetingComponent,
                navbar_component_1.NavbarComponent,
                message_component_1.MessageComponent,
                topnav_component_1.TopNavComponent,
                photogallery_component_1.PhotoGalleryComponent,
                about_component_1.AboutComponent,
                gospel_component_1.GospelComponent,
                fellowship_component_1.FellowshipComponent,
                archivedmessage_1.ArchivedMessageComponent,
                churchmessage_component_1.ChurchMessageComponent,
                classlist_component_1.ClasslistComponent,
                videolist_component_1.VideoListComponent,
                misctopic_component_1.MisctopicComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [language_service_1.LanguageService, jsonload_service_1.JsonLoadService],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map