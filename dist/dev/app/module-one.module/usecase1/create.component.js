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
var forms_1 = require('@angular/forms');
var agreement_service_1 = require('./agreement.service');
var MainComponent = (function () {
    function MainComponent(_fb, service) {
        this._fb = _fb;
        this.service = service;
        this.kinds = ['Basico', 'Medio', 'Avanzado'];
    }
    MainComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            details: ['', [forms_1.Validators.minLength(5), forms_1.Validators.maxLength(10)]],
            kind: ['', [forms_1.Validators.required]],
            start_date: ['', [forms_1.Validators.pattern('^(20[1-9][0-9])-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])$')]],
            end_date: ['', [forms_1.Validators.pattern('^(20[1-9][0-9])-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])$')]]
        });
    };
    MainComponent.prototype.save = function (model) {
        var response = this.service.create({
            name: this.myForm.value.name,
            kind: this.myForm.value.kind,
            start_date: this.myForm.value.start_date,
            end_date: this.myForm.value.end_date,
            details: this.myForm.value.details
        });
        console.log(response);
        this.myForm.reset();
    };
    MainComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'usecase-one-main-component',
            templateUrl: './main.component.html',
            providers: [forms_1.FormBuilder, agreement_service_1.AgreementApiService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, agreement_service_1.AgreementApiService])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGUtb25lLm1vZHVsZS91c2VjYXNlMS9jcmVhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFFbEQsc0JBQW9ELGdCQUFnQixDQUFDLENBQUE7QUFFckUsa0NBQWtDLHFCQUVsQyxDQUFDLENBRnNEO0FBU3ZEO0lBS0ksdUJBQ1ksR0FBZ0IsRUFDaEIsT0FBNEI7UUFENUIsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixZQUFPLEdBQVAsT0FBTyxDQUFxQjtRQUx4QyxVQUFLLEdBQUcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBTXBDLENBQUM7SUFFTCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUN6QixJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFELE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLGtCQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLE9BQU8sQ0FBQywrREFBK0QsQ0FBQyxDQUFDLENBQUM7WUFDdkcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxPQUFPLENBQUMsK0RBQStELENBQUMsQ0FBQyxDQUFDO1NBQ3hHLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw0QkFBSSxHQUFKLFVBQUssS0FBVTtRQUNYLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQy9CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJO1lBQzVCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJO1lBQzVCLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVO1lBQ3hDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRO1lBQ3BDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPO1NBQ3JDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBckNMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsNEJBQTRCO1lBQ3RDLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFDLENBQUMsbUJBQVcsRUFBRSx1Q0FBbUIsQ0FBQztTQUMvQyxDQUFDOztxQkFBQTtJQWlDRixvQkFBQztBQUFELENBL0JBLEFBK0JDLElBQUE7QUEvQlkscUJBQWEsZ0JBK0J6QixDQUFBIiwiZmlsZSI6ImFwcC9tb2R1bGUtb25lLm1vZHVsZS91c2VjYXNlMS9jcmVhdGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7QWdyZWVtZW50QXBpU2VydmljZX0gZnJvbSAnLi9hZ3JlZW1lbnQuc2VydmljZScgXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICd1c2VjYXNlLW9uZS1tYWluLWNvbXBvbmVudCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21haW4uY29tcG9uZW50Lmh0bWwnLFxuICAgIHByb3ZpZGVyczpbRm9ybUJ1aWxkZXIsIEFncmVlbWVudEFwaVNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBraW5kcyA9IFsnQmFzaWNvJywgJ01lZGlvJywgJ0F2YW56YWRvJ107XG4gICAgbXlGb3JtOiBGb3JtR3JvdXA7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLFxuICAgICAgICBwcml2YXRlIHNlcnZpY2U6IEFncmVlbWVudEFwaVNlcnZpY2UsXG4gICAgKXsgIH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xuICAgICAgICAgICAgbmFtZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNSldXSxcbiAgICAgICAgICAgIGRldGFpbHM6IFsnJywgW1ZhbGlkYXRvcnMubWluTGVuZ3RoKDUpLCBWYWxpZGF0b3JzLm1heExlbmd0aCgxMCldXSxcbiAgICAgICAgICAgIGtpbmQ6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgICAgIHN0YXJ0X2RhdGU6IFsnJywgW1ZhbGlkYXRvcnMucGF0dGVybignXigyMFsxLTldWzAtOV0pLSgwWzEtOV18MVswMTJdKS0oMFsxLTldfDFbMC05XXwyWzAtOV18M1swMV0pJCcpXV0sXG4gICAgICAgICAgICBlbmRfZGF0ZTogWycnLCBbVmFsaWRhdG9ycy5wYXR0ZXJuKCdeKDIwWzEtOV1bMC05XSktKDBbMS05XXwxWzAxMl0pLSgwWzEtOV18MVswLTldfDJbMC05XXwzWzAxXSkkJyldXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzYXZlKG1vZGVsOiBhbnkpe1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSB0aGlzLnNlcnZpY2UuY3JlYXRlKHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubXlGb3JtLnZhbHVlLm5hbWUsXG4gICAgICAgICAgICBraW5kOiB0aGlzLm15Rm9ybS52YWx1ZS5raW5kLFxuICAgICAgICAgICAgc3RhcnRfZGF0ZTogdGhpcy5teUZvcm0udmFsdWUuc3RhcnRfZGF0ZSxcbiAgICAgICAgICAgIGVuZF9kYXRlOiB0aGlzLm15Rm9ybS52YWx1ZS5lbmRfZGF0ZSxcbiAgICAgICAgICAgIGRldGFpbHM6IHRoaXMubXlGb3JtLnZhbHVlLmRldGFpbHNcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICB0aGlzLm15Rm9ybS5yZXNldCgpXG4gICAgfVxufSJdfQ==
