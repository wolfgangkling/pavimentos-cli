"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var usecase2_routing_module_1 = require("./usecase2.routing.module");
var main_component_1 = require("./main.component");
var Usecase2Module = (function () {
    function Usecase2Module() {
    }
    return Usecase2Module;
}());
Usecase2Module = __decorate([
    core_1.NgModule({
        imports: [usecase2_routing_module_1.Usecase2RoutingModule, common_1.CommonModule],
        declarations: [main_component_1.MainComponent]
    })
], Usecase2Module);
exports.Usecase2Module = Usecase2Module;
//# sourceMappingURL=usecase2.module.js.map