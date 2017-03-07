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
var TopNavComponent = (function () {
    function TopNavComponent() {
    }
    TopNavComponent.prototype.changeTheme = function (color) {
        var link = $('<link>');
        link
            .appendTo('head')
            .attr({ type: 'text/css', rel: 'stylesheet' })
            .attr('href', 'themes/app-' + color + '.css');
    };
    TopNavComponent.prototype.rtl = function () {
        var body = $('body');
        body.toggleClass('rtl');
    };
    TopNavComponent.prototype.sidebarToggler = function () {
        var sidebar = $('#sidebar');
        var mainContainer = $('.main-container');
        sidebar.toggleClass('sidebar-left-zero');
        mainContainer.toggleClass('main-container-ml-zero');
    };
    TopNavComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'top-nav',
            templateUrl: 'topnav.html',
        }), 
        __metadata('design:paramtypes', [])
    ], TopNavComponent);
    return TopNavComponent;
}());
exports.TopNavComponent = TopNavComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdG9wbmF2L3RvcG5hdi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBUTFDO0lBQUE7SUFvQkEsQ0FBQztJQW5CQSxxQ0FBVyxHQUFYLFVBQVksS0FBYTtRQUN4QixJQUFJLElBQUksR0FBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUIsSUFBSTthQUNGLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDaEIsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFHLFVBQVUsRUFBRSxHQUFHLEVBQUcsWUFBWSxFQUFDLENBQUM7YUFDN0MsSUFBSSxDQUFDLE1BQU0sRUFBRSxhQUFhLEdBQUMsS0FBSyxHQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCw2QkFBRyxHQUFIO1FBQ0MsSUFBSSxJQUFJLEdBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELHdDQUFjLEdBQWQ7UUFDQyxJQUFJLE9BQU8sR0FBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakMsSUFBSSxhQUFhLEdBQVEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3pDLGFBQWEsQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBekJGO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsYUFBYTtTQUM3QixDQUFDOzt1QkFBQTtJQXNCRixzQkFBQztBQUFELENBcEJBLEFBb0JDLElBQUE7QUFwQlksdUJBQWUsa0JBb0IzQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvdG9wbmF2L3RvcG5hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAndG9wLW5hdicsXG4gICAgdGVtcGxhdGVVcmw6ICd0b3BuYXYuaHRtbCcsXG59KVxuXG5leHBvcnQgY2xhc3MgVG9wTmF2Q29tcG9uZW50IHtcblx0Y2hhbmdlVGhlbWUoY29sb3I6IHN0cmluZyk6IHZvaWQge1xuXHRcdHZhciBsaW5rOiBhbnkgPSAkKCc8bGluaz4nKTtcblx0XHRsaW5rXG5cdFx0XHQuYXBwZW5kVG8oJ2hlYWQnKVxuXHRcdFx0LmF0dHIoe3R5cGUgOiAndGV4dC9jc3MnLCByZWwgOiAnc3R5bGVzaGVldCd9KVxuXHRcdFx0LmF0dHIoJ2hyZWYnLCAndGhlbWVzL2FwcC0nK2NvbG9yKycuY3NzJyk7XG5cdH1cblxuXHRydGwoKTogdm9pZCB7XG5cdFx0dmFyIGJvZHk6IGFueSA9ICQoJ2JvZHknKTtcblx0XHRib2R5LnRvZ2dsZUNsYXNzKCdydGwnKTtcblx0fVxuXG5cdHNpZGViYXJUb2dnbGVyKCk6IHZvaWQgIHtcblx0XHR2YXIgc2lkZWJhcjogYW55ID0gJCgnI3NpZGViYXInKTtcblx0XHR2YXIgbWFpbkNvbnRhaW5lcjogYW55ID0gJCgnLm1haW4tY29udGFpbmVyJyk7XG5cdFx0c2lkZWJhci50b2dnbGVDbGFzcygnc2lkZWJhci1sZWZ0LXplcm8nKTtcblx0XHRtYWluQ29udGFpbmVyLnRvZ2dsZUNsYXNzKCdtYWluLWNvbnRhaW5lci1tbC16ZXJvJyk7XG5cdH1cbn1cbiJdfQ==
