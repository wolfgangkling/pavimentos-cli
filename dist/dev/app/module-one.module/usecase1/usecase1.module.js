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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var main_component_1 = require('./main.component');
var detail_component_1 = require('./detail.component');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var ng2_bootstrap_2 = require('ng2-bootstrap');
var Usecase1Module = (function () {
    function Usecase1Module() {
    }
    Usecase1Module = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule,
                ng2_bootstrap_1.AlertModule,
                ng2_bootstrap_2.DatepickerModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
            ],
            declarations: [main_component_1.MainComponent, detail_component_1.AgreementDetailComponent],
            exports: [main_component_1.MainComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], Usecase1Module);
    return Usecase1Module;
}());
exports.Usecase1Module = Usecase1Module;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGUtb25lLm1vZHVsZS91c2VjYXNlMS91c2VjYXNlMS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUUvQywrQkFBOEIsa0JBQWtCLENBQUMsQ0FBQTtBQUNqRCxpQ0FBeUMsb0JBQW9CLENBQUMsQ0FBQTtBQUU5RCxzQkFBbUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUNwRSxxQkFBOEIsZUFBZSxDQUFDLENBQUE7QUFHOUMsOEJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLDhCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQWdCaEQ7SUFBQTtJQUVBLENBQUM7SUFoQkQ7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wscUJBQVk7Z0JBQ1osMkJBQVc7Z0JBQ1gsZ0NBQWdCO2dCQUNoQixxQkFBWTtnQkFDWixtQkFBVztnQkFDWCwyQkFBbUI7Z0JBQ25CLGlCQUFVO2FBQ2I7WUFDRCxZQUFZLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLDJDQUF3QixDQUFDO1lBQ3ZELE9BQU8sRUFBRSxDQUFDLDhCQUFhLENBQUM7U0FDM0IsQ0FBQzs7c0JBQUE7SUFJRixxQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksc0JBQWMsaUJBRTFCLENBQUEiLCJmaWxlIjoiYXBwL21vZHVsZS1vbmUubW9kdWxlL3VzZWNhc2UxL3VzZWNhc2UxLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTWFpbkNvbXBvbmVudCB9IGZyb20gJy4vbWFpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWdyZWVtZW50RGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9kZXRhaWwuY29tcG9uZW50JztcblxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSAgICBmcm9tICdAYW5ndWxhci9odHRwJztcblxuLy9uZzItYm9vdHN0cmFwXG5pbXBvcnQgeyBBbGVydE1vZHVsZSB9IGZyb20gJ25nMi1ib290c3RyYXAnO1xuaW1wb3J0IHsgRGF0ZXBpY2tlck1vZHVsZX0gZnJvbSAnbmcyLWJvb3RzdHJhcCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBSb3V0ZXJNb2R1bGUsXG4gICAgICAgIEFsZXJ0TW9kdWxlLFxuICAgICAgICBEYXRlcGlja2VyTW9kdWxlLFxuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBIdHRwTW9kdWxlLFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbTWFpbkNvbXBvbmVudCwgQWdyZWVtZW50RGV0YWlsQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbTWFpbkNvbXBvbmVudF0sXG59KVxuXG5leHBvcnQgY2xhc3MgVXNlY2FzZTFNb2R1bGUge1xuXG59XG4iXX0=
