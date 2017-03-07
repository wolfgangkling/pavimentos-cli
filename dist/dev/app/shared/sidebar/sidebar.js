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
var SidebarComponent = (function () {
    function SidebarComponent() {
        this.isActive = false;
        this.showMenu = '';
    }
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sidebar-cmp',
            templateUrl: 'sidebar.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2lkZWJhci9zaWRlYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFRMUM7SUFBQTtRQUNDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFXLEVBQUUsQ0FBQztJQVd2QixDQUFDO0lBVkEsc0NBQVcsR0FBWDtRQUNDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFDRCx5Q0FBYyxHQUFkLFVBQWUsT0FBWTtRQUMxQixFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDckIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDekIsQ0FBQztJQUNGLENBQUM7SUFsQkY7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSxjQUFjO1NBQzNCLENBQUM7O3dCQUFBO0lBZUYsdUJBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQWJZLHdCQUFnQixtQkFhNUIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NpZGViYXIvc2lkZWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdzaWRlYmFyLWNtcCcsXG5cdHRlbXBsYXRlVXJsOiAnc2lkZWJhci5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIFNpZGViYXJDb21wb25lbnQge1xuXHRpc0FjdGl2ZSA9IGZhbHNlO1xuXHRzaG93TWVudTogc3RyaW5nID0gJyc7XG5cdGV2ZW50Q2FsbGVkKCkge1xuXHRcdHRoaXMuaXNBY3RpdmUgPSAhdGhpcy5pc0FjdGl2ZTtcblx0fVxuXHRhZGRFeHBhbmRDbGFzcyhlbGVtZW50OiBhbnkpIHtcblx0XHRpZiAoZWxlbWVudCA9PT0gdGhpcy5zaG93TWVudSkge1xuXHRcdFx0dGhpcy5zaG93TWVudSA9ICcwJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zaG93TWVudSA9IGVsZW1lbnQ7XG5cdFx0fVxuXHR9XG59XG4iXX0=
