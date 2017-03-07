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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var AgreementApiService = (function () {
    function AgreementApiService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.AgreementUrl = 'http://192.168.86.5:8000/agreement';
    }
    AgreementApiService.prototype.getAgreements = function () {
        return this.http.get(this.AgreementUrl + "/")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AgreementApiService.prototype.getAgreement = function (id) {
        var url = this.AgreementUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AgreementApiService.prototype.delete = function (id) {
        var url = this.AgreementUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    AgreementApiService.prototype.create = function (agreement) {
        return this.http
            .post(this.AgreementUrl + "/", JSON.stringify({
            name: agreement.name,
            kind: agreement.kind,
            start_date: agreement.start_date,
            end_date: agreement.end_date,
            state: agreement.state,
            contact_name: agreement.contact_name,
            contact_phone: agreement.contact_phone,
            contact_email: agreement.contact_email,
            details: agreement.details,
        }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    AgreementApiService.prototype.update = function (agreement) {
        var url = this.AgreementUrl + "/" + agreement.id + "/";
        return this.http
            .put(url, JSON.stringify(agreement), { headers: this.headers })
            .toPromise()
            .then(function () { return agreement; })
            .catch(this.handleError);
    };
    AgreementApiService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    AgreementApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AgreementApiService);
    return AgreementApiService;
}());
exports.AgreementApiService = AgreementApiService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGUtb25lLm1vZHVsZS91c2VjYXNlMS9hZ3JlZW1lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBQzlDLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUU5QyxRQUFPLDZCQUE2QixDQUFDLENBQUE7QUFLckM7SUFNRSw2QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFKdEIsWUFBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUU1RCxpQkFBWSxHQUFHLG9DQUFvQyxDQUFDO0lBRTFCLENBQUM7SUFHbkMsMkNBQWEsR0FBYjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsWUFBWSxNQUFHLENBQUM7YUFDakMsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBaUIsRUFBOUIsQ0FBOEIsQ0FBQzthQUNoRCxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFHRCwwQ0FBWSxHQUFaLFVBQWEsRUFBVTtRQUNyQixJQUFNLEdBQUcsR0FBTSxJQUFJLENBQUMsWUFBWSxTQUFJLEVBQUksQ0FBQztRQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO2FBQ3RCLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQWUsRUFBNUIsQ0FBNEIsQ0FBQzthQUM5QyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxvQ0FBTSxHQUFOLFVBQU8sRUFBVTtRQUNmLElBQU0sR0FBRyxHQUFNLElBQUksQ0FBQyxZQUFZLFNBQUksRUFBSSxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDO2FBQ2xELFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQzthQUNoQixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxvQ0FBTSxHQUFOLFVBQU8sU0FBb0I7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ2IsSUFBSSxDQUNFLElBQUksQ0FBQyxZQUFZLE1BQUcsRUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FDVjtZQUNJLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsVUFBVSxFQUFFLFNBQVMsQ0FBQyxVQUFVO1lBQ2hDLFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUTtZQUM1QixLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUs7WUFDdEIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxZQUFZO1lBQ3BDLGFBQWEsRUFBRSxTQUFTLENBQUMsYUFBYTtZQUN0QyxhQUFhLEVBQUUsU0FBUyxDQUFDLGFBQWE7WUFDdEMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxPQUFPO1NBQzdCLENBQ0osRUFDRCxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLENBQ3hCO2FBQ0YsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxvQ0FBTSxHQUFOLFVBQU8sU0FBb0I7UUFDekIsSUFBTSxHQUFHLEdBQU0sSUFBSSxDQUFDLFlBQVksU0FBSSxTQUFTLENBQUMsRUFBRSxNQUFHLENBQUM7UUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQzthQUM1RCxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsY0FBTSxPQUFBLFNBQVMsRUFBVCxDQUFTLENBQUM7YUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU8seUNBQVcsR0FBbkIsVUFBb0IsS0FBVTtRQUM1QixPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQXRFSDtRQUFDLGlCQUFVLEVBQUU7OzJCQUFBO0lBdUViLDBCQUFDO0FBQUQsQ0F0RUEsQUFzRUMsSUFBQTtBQXRFWSwyQkFBbUIsc0JBc0UvQixDQUFBIiwiZmlsZSI6ImFwcC9tb2R1bGUtb25lLm1vZHVsZS91c2VjYXNlMS9hZ3JlZW1lbnQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuXG5pbXBvcnQgeyBBZ3JlZW1lbnQgfSBmcm9tICcuL2FncmVlbWVudC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZ3JlZW1lbnRBcGlTZXJ2aWNlIHtcblxuICBwcml2YXRlIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xuICAvL3ByaXZhdGUgQWdyZWVtZW50VXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hZ3JlZW1lbnQnO1xuICBwcml2YXRlIEFncmVlbWVudFVybCA9ICdodHRwOi8vMTkyLjE2OC44Ni41OjgwMDAvYWdyZWVtZW50JztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG4gIC8vKi9cbiAgZ2V0QWdyZWVtZW50cygpOiBQcm9taXNlPEFncmVlbWVudFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5BZ3JlZW1lbnRVcmx9L2ApXG4gICAgICAgICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSBhcyBBZ3JlZW1lbnRbXSlcbiAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG5cbiAgZ2V0QWdyZWVtZW50KGlkOiBudW1iZXIpOiBQcm9taXNlPEFncmVlbWVudD4ge1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuQWdyZWVtZW50VXJsfS8ke2lkfWA7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKVxuICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkgYXMgQWdyZWVtZW50KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgZGVsZXRlKGlkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLkFncmVlbWVudFVybH0vJHtpZH1gO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCwge2hlYWRlcnM6IHRoaXMuaGVhZGVyc30pXG4gICAgICAudG9Qcm9taXNlKClcbiAgICAgIC50aGVuKCgpID0+IG51bGwpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cbiAgLy8qL1xuICBjcmVhdGUoYWdyZWVtZW50OiBBZ3JlZW1lbnQpOiBQcm9taXNlPEFncmVlbWVudD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0KFxuICAgICAgICAgIGAke3RoaXMuQWdyZWVtZW50VXJsfS9gLFxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBhZ3JlZW1lbnQubmFtZSxcbiAgICAgICAgICAgICAgICAgIGtpbmQ6IGFncmVlbWVudC5raW5kLFxuICAgICAgICAgICAgICAgICAgc3RhcnRfZGF0ZTogYWdyZWVtZW50LnN0YXJ0X2RhdGUsXG4gICAgICAgICAgICAgICAgICBlbmRfZGF0ZTogYWdyZWVtZW50LmVuZF9kYXRlLFxuICAgICAgICAgICAgICAgICAgc3RhdGU6IGFncmVlbWVudC5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgIGNvbnRhY3RfbmFtZTogYWdyZWVtZW50LmNvbnRhY3RfbmFtZSxcbiAgICAgICAgICAgICAgICAgIGNvbnRhY3RfcGhvbmU6IGFncmVlbWVudC5jb250YWN0X3Bob25lLFxuICAgICAgICAgICAgICAgICAgY29udGFjdF9lbWFpbDogYWdyZWVtZW50LmNvbnRhY3RfZW1haWwsXG4gICAgICAgICAgICAgICAgICBkZXRhaWxzOiBhZ3JlZW1lbnQuZGV0YWlscyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICksXG4gICAgICAgICAge2hlYWRlcnM6IHRoaXMuaGVhZGVyc31cbiAgICAgICAgKVxuICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuICAvLyovXG4gIHVwZGF0ZShhZ3JlZW1lbnQ6IEFncmVlbWVudCk6IFByb21pc2U8QWdyZWVtZW50PiB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5BZ3JlZW1lbnRVcmx9LyR7YWdyZWVtZW50LmlkfS9gO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wdXQodXJsLCBKU09OLnN0cmluZ2lmeShhZ3JlZW1lbnQpLCB7aGVhZGVyczogdGhpcy5oZWFkZXJzfSlcbiAgICAgIC50b1Byb21pc2UoKVxuICAgICAgLnRoZW4oKCkgPT4gYWdyZWVtZW50KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG4gIC8vKi9cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCcsIGVycm9yKTsgLy8gZm9yIGRlbW8gcHVycG9zZXMgb25seVxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgfVxufSJdfQ==
