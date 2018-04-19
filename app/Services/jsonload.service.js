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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/Rx"); //get everything from Rx    
require("rxjs/add/operator/toPromise");
var JsonLoadService = /** @class */ (function () {
    function JsonLoadService(http) {
        this.http = http;
    }
    //    
    JsonLoadService.prototype.getVerseItems = function (jsonUrl) {
        return this.http.get(jsonUrl).map(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    //    
    JsonLoadService.prototype.getMessageItems = function (jsonUrl) {
        return this.http.get(jsonUrl).map(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    JsonLoadService.prototype.getMessageWithNotesItems = function (jsonUrl) {
        return this.http.get(jsonUrl).map(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    //    
    JsonLoadService.prototype.handleError = function (errorResponse) {
        console.log(errorResponse);
        return Rx_1.Observable.throw(errorResponse.json().error || "Server error");
    };
    JsonLoadService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], JsonLoadService);
    return JsonLoadService;
}());
exports.JsonLoadService = JsonLoadService;
//# sourceMappingURL=jsonload.service.js.map