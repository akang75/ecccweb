"use strict";
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
var PhotoGalleryComponent = /** @class */ (function () {
    function PhotoGalleryComponent() {
    }
    PhotoGalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.index = 0;
        this.images = [{ url: "img1.png", visible: true },
            { url: "img2.jpg", visible: false },
            { url: "img3.jpg", visible: false },
            { url: "img4.png", visible: false },
            { url: "img5.png", visible: false }];
        this.indicators = new Array(this.images.length).fill("unselected.jpg");
        this.indicators[0] = "selected.jpg";
        this.timer = global.setInterval(function () { _this.next(); }, 2000);
    };
    PhotoGalleryComponent.prototype.prev = function () {
        this.index = this.index - 1;
        if (this.index < 0) {
            this.index = this.images.length - 1;
        }
    };
    PhotoGalleryComponent.prototype.next = function () {
        this.indicators[this.index] = "unselected.jpg";
        this.index = this.index + 1;
        if (this.index >= this.images.length) {
            this.index = 0;
        }
        this.indicators[this.index] = "selected.jpg";
    };
    PhotoGalleryComponent = __decorate([
        core_1.Component({
            selector: 'imagegallery',
            template: "<div class=\"slider\">\n\t                <div class=\"slide\" >\n                        <img src=\"images/homepage/{{images[index].url}}\"/>\n                    </div>\n                    <div class=\"indicator\">\n                        <ul>\n                            <li *ngFor=\"let indicator of indicators\">\n                                <img src=\"images/homepage/{{indicator}}\"/>\n                            </li>\n                        </ul>\n                    </div>\n                   \n                </div>",
            styleUrls: ['app/Components/HomePage/photogallery.css']
        }),
        __metadata("design:paramtypes", [])
    ], PhotoGalleryComponent);
    return PhotoGalleryComponent;
}());
exports.PhotoGalleryComponent = PhotoGalleryComponent;
var GallaryImage = /** @class */ (function () {
    function GallaryImage() {
    }
    return GallaryImage;
}());
//# sourceMappingURL=photogallery.component.js.map