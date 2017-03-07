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
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var agreement_service_1 = require('./agreement.service');
var AgreementDetailComponent = (function () {
    function AgreementDetailComponent(_fb, service, route, location) {
        this._fb = _fb;
        this.service = service;
        this.route = route;
        this.location = location;
        this.kinds = [
            { code: 1, name: "Unica vez" },
            { code: 2, name: "Tracto sucecivo" },
        ];
    }
    AgreementDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myForm = this._fb.group({
            name: new forms_1.FormControl({ value: '', disabled: true }, forms_1.Validators.required),
            details: new forms_1.FormControl({ value: '', disabled: true }),
            kind: new forms_1.FormControl({ value: '', disabled: true }),
            start_date: new forms_1.FormControl({ value: '', disabled: true }),
            end_date: new forms_1.FormControl({ value: '', disabled: true }),
        });
        this.route.params
            .switchMap(function (params) { return _this.service.getAgreement(+params['id']); })
            .subscribe(function (agreement) {
            console.log(agreement);
        });
    };
    AgreementDetailComponent.prototype.save = function () {
        var _this = this;
        this.service.update(this.agreement)
            .then(function () { return _this.goBack(); });
    };
    AgreementDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    AgreementDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'agreement-detail',
            templateUrl: './detail.component.html',
            providers: [agreement_service_1.AgreementApiService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, agreement_service_1.AgreementApiService, router_1.ActivatedRoute, common_1.Location])
    ], AgreementDetailComponent);
    return AgreementDetailComponent;
}());
exports.AgreementDetailComponent = AgreementDetailComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGUtb25lLm1vZHVsZS91c2VjYXNlMS9kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxRQUFPLDZCQUE2QixDQUFDLENBQUE7QUFDckMscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHNCQUFnRSxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2pGLHVCQUF1QyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pELHVCQUF5QixpQkFBaUIsQ0FBQyxDQUFBO0FBRzNDLGtDQUFrQyxxQkFFbEMsQ0FBQyxDQUZzRDtBQVN2RDtJQVFJLGtDQUNZLEdBQWdCLEVBQ2hCLE9BQTRCLEVBQzVCLEtBQXFCLEVBQ3JCLFFBQWtCO1FBSGxCLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFDNUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQVY5QixVQUFLLEdBQUc7WUFDSixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtZQUM5QixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFO1NBQ3ZDLENBQUM7SUFRRSxDQUFDO0lBRUwsMkNBQVEsR0FBUjtRQUFBLGlCQWdCQztRQWRHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDekIsSUFBSSxFQUFFLElBQUksbUJBQVcsQ0FBRSxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3hFLE9BQU8sRUFBRSxJQUFJLG1CQUFXLENBQUUsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQztZQUN0RCxJQUFJLEVBQUUsSUFBSSxtQkFBVyxDQUFFLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUM7WUFDbkQsVUFBVSxFQUFFLElBQUksbUJBQVcsQ0FBRSxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDO1lBQ3pELFFBQVEsRUFBRSxJQUFJLG1CQUFXLENBQUUsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQztTQUMxRCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07YUFDZCxTQUFTLENBQUMsVUFBQyxNQUFjLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUF4QyxDQUF3QyxDQUFDO2FBQ3ZFLFNBQVMsQ0FBQyxVQUFBLFNBQVM7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUMxQixDQUFDLENBQUMsQ0FBQztJQUVULENBQUM7SUFFRCx1Q0FBSSxHQUFKO1FBQUEsaUJBR0M7UUFGRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ2xDLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sRUFBRSxFQUFiLENBQWEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCx5Q0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBL0NMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFDLENBQUMsdUNBQW1CLENBQUM7U0FDbEMsQ0FBQzs7Z0NBQUE7SUEyQ0YsK0JBQUM7QUFBRCxDQXpDQSxBQXlDQyxJQUFBO0FBekNZLGdDQUF3QiwyQkF5Q3BDLENBQUEiLCJmaWxlIjoiYXBwL21vZHVsZS1vbmUubW9kdWxlL3VzZWNhc2UxL2RldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQWdyZWVtZW50IH0gZnJvbSAnLi9hZ3JlZW1lbnQubW9kZWwnO1xuaW1wb3J0IHtBZ3JlZW1lbnRBcGlTZXJ2aWNlfSBmcm9tICcuL2FncmVlbWVudC5zZXJ2aWNlJyBcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2FncmVlbWVudC1kZXRhaWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHByb3ZpZGVyczpbQWdyZWVtZW50QXBpU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBZ3JlZW1lbnREZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGFncmVlbWVudDogQWdyZWVtZW50O1xuICAgIGtpbmRzID0gW1xuICAgICAgICB7IGNvZGU6IDEsIG5hbWU6IFwiVW5pY2EgdmV6XCIgfSxcbiAgICAgICAgeyBjb2RlOiAyLCBuYW1lOiBcIlRyYWN0byBzdWNlY2l2b1wiIH0sXG4gICAgXTtcbiAgICBteUZvcm06IEZvcm1Hcm91cDtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLFxuICAgICAgICBwcml2YXRlIHNlcnZpY2U6IEFncmVlbWVudEFwaVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvblxuICAgICkgeyB9XG4gICAgXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm15Rm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcbiAgICAgICAgICAgIG5hbWU6IG5ldyBGb3JtQ29udHJvbCAoe3ZhbHVlOiAnJywgZGlzYWJsZWQ6IHRydWV9LCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcbiAgICAgICAgICAgIGRldGFpbHM6IG5ldyBGb3JtQ29udHJvbCAoe3ZhbHVlOiAnJywgZGlzYWJsZWQ6IHRydWV9KSxcbiAgICAgICAgICAgIGtpbmQ6IG5ldyBGb3JtQ29udHJvbCAoe3ZhbHVlOiAnJywgZGlzYWJsZWQ6IHRydWV9KSxcbiAgICAgICAgICAgIHN0YXJ0X2RhdGU6IG5ldyBGb3JtQ29udHJvbCAoe3ZhbHVlOiAnJywgZGlzYWJsZWQ6IHRydWV9KSxcbiAgICAgICAgICAgIGVuZF9kYXRlOiBuZXcgRm9ybUNvbnRyb2wgKHt2YWx1ZTogJycsIGRpc2FibGVkOiB0cnVlfSksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zXG4gICAgICAgICAgLnN3aXRjaE1hcCgocGFyYW1zOiBQYXJhbXMpID0+IHRoaXMuc2VydmljZS5nZXRBZ3JlZW1lbnQoK3BhcmFtc1snaWQnXSkpXG4gICAgICAgICAgLnN1YnNjcmliZShhZ3JlZW1lbnQgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhZ3JlZW1lbnQpXG4gICAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgXG4gICAgc2F2ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnVwZGF0ZSh0aGlzLmFncmVlbWVudClcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5nb0JhY2soKSk7XG4gICAgfVxuICAgIFxuICAgIGdvQmFjaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XG4gICAgfVxufSJdfQ==
