"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var main_component_1 = require("./main.component");
var routes = [
    {
        path: '', component: main_component_1.MainComponent,
    }
];
var Usecase1RoutingModule = (function () {
    function Usecase1RoutingModule() {
    }
    return Usecase1RoutingModule;
}());
Usecase1RoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], Usecase1RoutingModule);
exports.Usecase1RoutingModule = Usecase1RoutingModule;
//# sourceMappingURL=usecase1.routing.module.js.map