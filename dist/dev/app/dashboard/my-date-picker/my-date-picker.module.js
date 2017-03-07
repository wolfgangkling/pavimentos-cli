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
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var my_date_picker_component_1 = require("./my-date-picker.component");
var my_date_picker_focus_directive_1 = require("./directives/my-date-picker.focus.directive");
var my_date_picker_input_auto_fill_directive_1 = require("./directives/my-date-picker.input.auto.fill.directive");
var MyDatePickerModule = (function () {
    function MyDatePickerModule() {
    }
    MyDatePickerModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            declarations: [my_date_picker_component_1.MyDatePicker, my_date_picker_focus_directive_1.FocusDirective, my_date_picker_input_auto_fill_directive_1.InputAutoFillDirective],
            exports: [my_date_picker_component_1.MyDatePicker, my_date_picker_focus_directive_1.FocusDirective, my_date_picker_input_auto_fill_directive_1.InputAutoFillDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], MyDatePickerModule);
    return MyDatePickerModule;
}());
exports.MyDatePickerModule = MyDatePickerModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvbXktZGF0ZS1waWNrZXIvbXktZGF0ZS1waWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxzQkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3QyxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMseUNBQTZCLDRCQUE0QixDQUFDLENBQUE7QUFDMUQsK0NBQStCLDZDQUE2QyxDQUFDLENBQUE7QUFDN0UseURBQXVDLHVEQUF1RCxDQUFDLENBQUE7QUFPL0Y7SUFBQTtJQUNBLENBQUM7SUFORDtRQUFDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUsbUJBQVcsQ0FBQztZQUNwQyxZQUFZLEVBQUUsQ0FBQyx1Q0FBWSxFQUFFLCtDQUFjLEVBQUUsaUVBQXNCLENBQUM7WUFDcEUsT0FBTyxFQUFFLENBQUMsdUNBQVksRUFBRSwrQ0FBYyxFQUFFLGlFQUFzQixDQUFDO1NBQ2xFLENBQUM7OzBCQUFBO0lBRUYseUJBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLDBCQUFrQixxQkFDOUIsQ0FBQSIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL215LWRhdGUtcGlja2VyL215LWRhdGUtcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNeURhdGVQaWNrZXIgfSBmcm9tIFwiLi9teS1kYXRlLXBpY2tlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZvY3VzRGlyZWN0aXZlIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9teS1kYXRlLXBpY2tlci5mb2N1cy5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IElucHV0QXV0b0ZpbGxEaXJlY3RpdmUgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL215LWRhdGUtcGlja2VyLmlucHV0LmF1dG8uZmlsbC5kaXJlY3RpdmVcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbTXlEYXRlUGlja2VyLCBGb2N1c0RpcmVjdGl2ZSwgSW5wdXRBdXRvRmlsbERpcmVjdGl2ZV0sXG4gICAgZXhwb3J0czogW015RGF0ZVBpY2tlciwgRm9jdXNEaXJlY3RpdmUsIElucHV0QXV0b0ZpbGxEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIE15RGF0ZVBpY2tlck1vZHVsZSB7XG59XG4iXX0=
