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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var usecase1_routing_module_1 = require('./usecase1.routing.module');
var main_component_1 = require('./main.component');
var Usecase1Module = (function () {
    function Usecase1Module() {
    }
    Usecase1Module = __decorate([
        core_1.NgModule({
            imports: [usecase1_routing_module_1.Usecase1RoutingModule, common_1.CommonModule],
            declarations: [main_component_1.MainComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], Usecase1Module);
    return Usecase1Module;
}());
exports.Usecase1Module = Usecase1Module;
//# sourceMappingURL=usecase1.module.js.map