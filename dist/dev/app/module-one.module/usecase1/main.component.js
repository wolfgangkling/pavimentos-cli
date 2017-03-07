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
var agreement_service_1 = require('./agreement.service');
var MainComponent = (function () {
    function MainComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    MainComponent.prototype.getAgreements = function () {
        var _this = this;
        this.service
            .getAgreements()
            .then(function (agreements) { return _this.agreements = agreements; });
    };
    MainComponent.prototype.ngOnInit = function () {
        this.getAgreements();
    };
    MainComponent.prototype.onSelect = function (agreement) {
        this.selected_agreement = agreement;
        this.router.navigate([
            '/dashboard/module-one-usecase1/detail',
            this.selected_agreement.id]);
    };
    MainComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'usecase-one-main-component',
            templateUrl: './main.component.html',
            providers: [agreement_service_1.AgreementApiService]
        }), 
        __metadata('design:paramtypes', [agreement_service_1.AgreementApiService, router_1.Router])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGUtb25lLm1vZHVsZS91c2VjYXNlMS9tYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUFrQyxpQkFBaUIsQ0FBQyxDQUFBO0FBR3BELGtDQUFrQyxxQkFFbEMsQ0FBQyxDQUZzRDtBQVN2RDtJQUlJLHVCQUNZLE9BQTRCLEVBQzVCLE1BQWM7UUFEZCxZQUFPLEdBQVAsT0FBTyxDQUFxQjtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3RCLENBQUM7SUFFTCxxQ0FBYSxHQUFiO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsT0FBTzthQUNYLGFBQWEsRUFBRTthQUNmLElBQUksQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxFQUE1QixDQUE0QixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxTQUFvQjtRQUN6QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ2pCLHVDQUF1QztZQUN2QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQzlCLENBQUM7SUFDTixDQUFDO0lBaENMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsNEJBQTRCO1lBQ3RDLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFDLENBQUMsdUNBQW1CLENBQUM7U0FDbEMsQ0FBQzs7cUJBQUE7SUE2QkYsb0JBQUM7QUFBRCxDQTNCQSxBQTJCQyxJQUFBO0FBM0JZLHFCQUFhLGdCQTJCekIsQ0FBQSIsImZpbGUiOiJhcHAvbW9kdWxlLW9uZS5tb2R1bGUvdXNlY2FzZTEvbWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gICAgICAgICAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBZ3JlZW1lbnQgfSBmcm9tICcuL2FncmVlbWVudC5tb2RlbCc7XG5pbXBvcnQge0FncmVlbWVudEFwaVNlcnZpY2V9IGZyb20gJy4vYWdyZWVtZW50LnNlcnZpY2UnIFxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAndXNlY2FzZS1vbmUtbWFpbi1jb21wb25lbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tYWluLmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6W0FncmVlbWVudEFwaVNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgYWdyZWVtZW50czogQWdyZWVtZW50W107XG4gICAgc2VsZWN0ZWRfYWdyZWVtZW50OiBBZ3JlZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBzZXJ2aWNlOiBBZ3JlZW1lbnRBcGlTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICl7ICB9XG5cbiAgICBnZXRBZ3JlZW1lbnRzKCl7XG4gICAgICAgIHRoaXMuc2VydmljZVxuICAgICAgICAuZ2V0QWdyZWVtZW50cygpXG4gICAgICAgIC50aGVuKGFncmVlbWVudHMgPT4gdGhpcy5hZ3JlZW1lbnRzID0gYWdyZWVtZW50cyk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5nZXRBZ3JlZW1lbnRzKCk7XG4gICAgfVxuXG4gICAgb25TZWxlY3QoYWdyZWVtZW50OiBBZ3JlZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZF9hZ3JlZW1lbnQgPSBhZ3JlZW1lbnQ7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcbiAgICAgICAgICAgICcvZGFzaGJvYXJkL21vZHVsZS1vbmUtdXNlY2FzZTEvZGV0YWlsJyxcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfYWdyZWVtZW50LmlkXVxuICAgICAgICApO1xuICAgIH1cblxufSJdfQ==
