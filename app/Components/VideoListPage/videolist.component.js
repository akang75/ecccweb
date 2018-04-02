"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var webpartbase_1 = require("../../Shared/webpartbase");
var language_service_1 = require("../../Services/language.service");
var globalvarible_1 = require("../../Shared/globalvarible");
var router_1 = require("@angular/router");
var VideoListComponent = /** @class */ (function (_super) {
    __extends(VideoListComponent, _super);
    function VideoListComponent(languageService, activatedRoute) {
        var _this = _super.call(this, languageService) || this;
        _this.activatedRoute = activatedRoute;
        return _this;
    }
    VideoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSub = this.activatedRoute.queryParams.subscribe(function (params) {
            _this.source = params['source'];
        });
        this.LoadData();
    };
    VideoListComponent.prototype.LoadData = function () {
        this.language = globalvarible_1.Language[globalvarible_1.GlobalVariable.language];
    };
    VideoListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'videolist',
            template: 'Coming soon for {{source}} {{language}}',
        }),
        __metadata("design:paramtypes", [language_service_1.LanguageService, router_1.ActivatedRoute])
    ], VideoListComponent);
    return VideoListComponent;
}(webpartbase_1.WebPartBase));
exports.VideoListComponent = VideoListComponent;
//# sourceMappingURL=videolist.component.js.map