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
var router_1 = require('@angular/router');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var ng2_bootstrap_2 = require('ng2-bootstrap/ng2-bootstrap');
var home_module_1 = require('./home/home.module');
var chart_module_1 = require('./charts/chart.module');
var blankPage_module_1 = require('./blank-page/blankPage.module');
var table_module_1 = require('./tables/table.module');
var forms_module_1 = require('./forms/forms.module');
var grid_module_1 = require('./grid/grid.module');
var bsComponent_module_1 = require('./bs-component/bsComponent.module');
var bsElement_module_1 = require('./bs-element/bsElement.module');
var dashboard_component_1 = require('./dashboard.component');
var index_1 = require('../shared/index');
var index_2 = require('../shared/index');
var usecase1_module_1 = require('../module-one.module/usecase1/usecase1.module');
var usecase2_module_1 = require('../module-one.module/usecase2/usecase2.module');
var usecase1_module_2 = require('../module-two.module/usecase1/usecase1.module');
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                ng2_bootstrap_1.DropdownModule,
                ng2_bootstrap_2.ModalModule,
                home_module_1.HomeModule,
                chart_module_1.ChartModule,
                table_module_1.TableModule,
                forms_module_1.FormModule,
                grid_module_1.GridModule,
                bsComponent_module_1.BSComponentModule,
                bsElement_module_1.BSElementModule,
                blankPage_module_1.BlankPageModule,
                usecase1_module_1.Usecase1Module,
                usecase2_module_1.Usecase2Module,
                usecase1_module_2.Usecase1Module,
            ],
            declarations: [dashboard_component_1.DashboardComponent, index_1.TopNavComponent, index_2.SidebarComponent],
            exports: [dashboard_component_1.DashboardComponent, index_1.TopNavComponent, index_2.SidebarComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDhCQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzdELDhCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBRTFELDRCQUEyQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2hELDZCQUE0Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3BELGlDQUFnQywrQkFBK0IsQ0FBQyxDQUFBO0FBQ2hFLDZCQUE0Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3BELDZCQUEyQixzQkFBc0IsQ0FBQyxDQUFBO0FBQ2xELDRCQUEyQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2hELG1DQUFrQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3RFLGlDQUFnQywrQkFBK0IsQ0FBQyxDQUFBO0FBRWhFLG9DQUFtQyx1QkFBdUIsQ0FBQyxDQUFBO0FBRTNELHNCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHNCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBRWpELGdDQUFtRCwrQ0FBK0MsQ0FBQyxDQUFBO0FBQ25HLGdDQUFtRCwrQ0FBK0MsQ0FBQyxDQUFBO0FBQ25HLGdDQUFtRCwrQ0FBK0MsQ0FBQyxDQUFBO0FBeUJuRztJQUFBO0lBQStCLENBQUM7SUF0QmhDO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2dCQUNmLHFCQUFZO2dCQUNaLDhCQUFjO2dCQUNYLDJCQUFXO2dCQUNkLHdCQUFVO2dCQUNQLDBCQUFXO2dCQUNYLDBCQUFXO2dCQUNYLHlCQUFVO2dCQUNWLHdCQUFVO2dCQUNiLHNDQUFpQjtnQkFDZCxrQ0FBZTtnQkFDZixrQ0FBZTtnQkFDZixnQ0FBa0I7Z0JBQ2xCLGdDQUFrQjtnQkFDbEIsZ0NBQWtCO2FBQ3JCO1lBQ0QsWUFBWSxFQUFFLENBQUMsd0NBQWtCLEVBQUUsdUJBQWUsRUFBRSx3QkFBZ0IsQ0FBQztZQUNyRSxPQUFPLEVBQUUsQ0FBQyx3Q0FBa0IsRUFBRSx1QkFBZSxFQUFFLHdCQUFnQixDQUFDO1NBQ25FLENBQUM7O3VCQUFBO0lBRTZCLHNCQUFDO0FBQUQsQ0FBL0IsQUFBZ0MsSUFBQTtBQUFuQix1QkFBZSxrQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERyb3Bkb3duTW9kdWxlIH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcbmltcG9ydCB7IE1vZGFsTW9kdWxlIH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgSG9tZU1vZHVsZSB9IGZyb20gJy4vaG9tZS9ob21lLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGFydE1vZHVsZSB9IGZyb20gJy4vY2hhcnRzL2NoYXJ0Lm1vZHVsZSc7XG5pbXBvcnQgeyBCbGFua1BhZ2VNb2R1bGUgfSBmcm9tICcuL2JsYW5rLXBhZ2UvYmxhbmtQYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBUYWJsZU1vZHVsZSB9IGZyb20gJy4vdGFibGVzL3RhYmxlLm1vZHVsZSc7XG5pbXBvcnQgeyBGb3JtTW9kdWxlIH0gZnJvbSAnLi9mb3Jtcy9mb3Jtcy5tb2R1bGUnO1xuaW1wb3J0IHsgR3JpZE1vZHVsZSB9IGZyb20gJy4vZ3JpZC9ncmlkLm1vZHVsZSc7XG5pbXBvcnQgeyBCU0NvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4vYnMtY29tcG9uZW50L2JzQ29tcG9uZW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBCU0VsZW1lbnRNb2R1bGUgfSBmcm9tICcuL2JzLWVsZW1lbnQvYnNFbGVtZW50Lm1vZHVsZSc7XG5cbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4vZGFzaGJvYXJkLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7VG9wTmF2Q29tcG9uZW50fSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHtTaWRlYmFyQ29tcG9uZW50fSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xuXG5pbXBvcnQge1VzZWNhc2UxTW9kdWxlIGFzIE1vZDFVc2VjYXNlMU1vZHVsZX0gZnJvbSAnLi4vbW9kdWxlLW9uZS5tb2R1bGUvdXNlY2FzZTEvdXNlY2FzZTEubW9kdWxlJztcbmltcG9ydCB7VXNlY2FzZTJNb2R1bGUgYXMgTW9kMVVzZWNhc2UyTW9kdWxlfSBmcm9tICcuLi9tb2R1bGUtb25lLm1vZHVsZS91c2VjYXNlMi91c2VjYXNlMi5tb2R1bGUnO1xuaW1wb3J0IHtVc2VjYXNlMU1vZHVsZSBhcyBNb2QyVXNlY2FzZTFNb2R1bGV9IGZyb20gJy4uL21vZHVsZS10d28ubW9kdWxlL3VzZWNhc2UxL3VzZWNhc2UxLm1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICBcdFJvdXRlck1vZHVsZSxcbiAgICBcdERyb3Bkb3duTW9kdWxlLFxuICAgICAgICBNb2RhbE1vZHVsZSxcbiAgICBcdEhvbWVNb2R1bGUsXG4gICAgICAgIENoYXJ0TW9kdWxlLFxuICAgICAgICBUYWJsZU1vZHVsZSxcbiAgICAgICAgRm9ybU1vZHVsZSxcbiAgICAgICAgR3JpZE1vZHVsZSxcbiAgICBcdEJTQ29tcG9uZW50TW9kdWxlLFxuICAgICAgICBCU0VsZW1lbnRNb2R1bGUsXG4gICAgICAgIEJsYW5rUGFnZU1vZHVsZSxcbiAgICAgICAgTW9kMVVzZWNhc2UxTW9kdWxlLFxuICAgICAgICBNb2QxVXNlY2FzZTJNb2R1bGUsXG4gICAgICAgIE1vZDJVc2VjYXNlMU1vZHVsZSxcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW0Rhc2hib2FyZENvbXBvbmVudCwgVG9wTmF2Q29tcG9uZW50LCBTaWRlYmFyQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbRGFzaGJvYXJkQ29tcG9uZW50LCBUb3BOYXZDb21wb25lbnQsIFNpZGViYXJDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkTW9kdWxlIHsgfVxuIl19
