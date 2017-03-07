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
var normalSampleTpl = require('./sample-date-picker-normal.html');
var SampleDatePickerNormal = (function () {
    function SampleDatePickerNormal() {
        this.myDatePickerNormalOptions = {
            todayBtnTxt: 'Today',
            dateFormat: 'dd.mm.yyyy',
            firstDayOfWeek: 'mo',
            sunHighlight: true,
            markCurrentDay: true,
            height: '34px',
            width: '210px',
            selectionTxtFontSize: '18px',
            alignSelectorRight: false,
            openSelectorTopOfInput: false,
            indicateInvalidDate: true,
            editableMonthAndYear: true,
            minYear: 1900,
            maxYear: 2200,
            componentDisabled: false,
            inputValueRequired: false,
            showClearDateBtn: true,
            showSelectorArrow: true,
            showInputField: true,
            openSelectorOnInputClick: false,
            disableHeaderButtons: true,
            inputAutoFill: true,
            showWeekNumbers: false
        };
        this.selectedDateNormal = '';
        this.selectedTextNormal = '';
        this.border = 'none';
        this.placeholder = 'Select date';
        this.selector = 0;
    }
    SampleDatePickerNormal.prototype.clearDate = function () {
        this.selectedDateNormal = '';
    };
    SampleDatePickerNormal.prototype.onDisableComponent = function (checked) {
        var copy = this.getCopyOfOptions();
        copy.componentDisabled = checked;
        this.myDatePickerNormalOptions = copy;
    };
    SampleDatePickerNormal.prototype.onEditableDateField = function (checked) {
        var copy = this.getCopyOfOptions();
        copy.editableDateField = checked;
        copy.openSelectorOnInputClick = !checked;
        this.myDatePickerNormalOptions = copy;
    };
    SampleDatePickerNormal.prototype.onShowTodayButton = function (checked) {
        var copy = this.getCopyOfOptions();
        copy.showTodayBtn = checked;
        this.myDatePickerNormalOptions = copy;
    };
    SampleDatePickerNormal.prototype.onShowClearDateButton = function (checked) {
        var copy = this.getCopyOfOptions();
        copy.showClearDateBtn = checked;
        this.myDatePickerNormalOptions = copy;
    };
    SampleDatePickerNormal.prototype.onShowInputField = function (checked) {
        var copy = this.getCopyOfOptions();
        copy.showInputField = checked;
        this.myDatePickerNormalOptions = copy;
    };
    SampleDatePickerNormal.prototype.onAlignSelectorRight = function (checked) {
        var copy = this.getCopyOfOptions();
        copy.alignSelectorRight = checked;
        this.myDatePickerNormalOptions = copy;
    };
    SampleDatePickerNormal.prototype.onOpenSelectorTopOfInput = function (checked) {
        var copy = this.getCopyOfOptions();
        copy.openSelectorTopOfInput = checked;
        this.myDatePickerNormalOptions = copy;
    };
    SampleDatePickerNormal.prototype.onShowSelectorArrow = function (checked) {
        var copy = this.getCopyOfOptions();
        copy.showSelectorArrow = checked;
        this.myDatePickerNormalOptions = copy;
    };
    SampleDatePickerNormal.prototype.onDisableHeaderButtons = function (checked) {
        var copy = this.getCopyOfOptions();
        copy.disableHeaderButtons = checked;
        this.myDatePickerNormalOptions = copy;
    };
    SampleDatePickerNormal.prototype.onInputAutoFill = function (checked) {
        var copy = this.getCopyOfOptions();
        copy.inputAutoFill = checked;
        this.myDatePickerNormalOptions = copy;
    };
    SampleDatePickerNormal.prototype.onShowWeekNumbers = function (checked) {
        var copy = this.getCopyOfOptions();
        copy.showWeekNumbers = checked;
        this.myDatePickerNormalOptions = copy;
    };
    SampleDatePickerNormal.prototype.onToggleSelector = function (event) {
        event.stopPropagation();
        this.selector++;
    };
    SampleDatePickerNormal.prototype.ngOnInit = function () {
        console.log('onInit(): SampleDatePickerNormal');
    };
    SampleDatePickerNormal.prototype.onDateChanged = function (event) {
        console.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
        if (event.formatted !== '') {
            this.selectedTextNormal = 'Formatted: ' + event.formatted + ' - epoc timestamp: ' + event.epoc;
            this.border = '1px solid #CCC';
            this.selectedDateNormal = event.formatted;
        }
        else {
            this.selectedTextNormal = '';
            this.border = 'none';
        }
    };
    SampleDatePickerNormal.prototype.onInputFieldChanged = function (event) {
        console.log('onInputFieldChanged(): Value: ', event.value, ' - dateFormat: ', event.dateFormat, ' - valid: ', event.valid);
    };
    SampleDatePickerNormal.prototype.onCalendarViewChanged = function (event) {
        console.log('onCalendarViewChanged(): Year: ', event.year, ' - month: ', event.month, ' - first: ', event.first, ' - last: ', event.last);
    };
    SampleDatePickerNormal.prototype.onCalendarToggle = function (event) {
        console.log('onCalendarToggle(): Value: ', event);
    };
    SampleDatePickerNormal.prototype.getCopyOfOptions = function () {
        return JSON.parse(JSON.stringify(this.myDatePickerNormalOptions));
    };
    SampleDatePickerNormal = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sample-date-picker-normal',
            templateUrl: './sample-date-picker-normal.html',
        }), 
        __metadata('design:paramtypes', [])
    ], SampleDatePickerNormal);
    return SampleDatePickerNormal;
}());
exports.SampleDatePickerNormal = SampleDatePickerNormal;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGUtb25lLm1vZHVsZS91c2VjYXNlMS9zYW1wbGUtZGF0ZS1waWNrZXItbm9ybWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFJaEQsSUFBTSxlQUFlLEdBQVcsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFRNUU7SUFtQ0k7UUFqQ1EsOEJBQXlCLEdBQWU7WUFDNUMsV0FBVyxFQUFFLE9BQU87WUFDcEIsVUFBVSxFQUFFLFlBQVk7WUFDeEIsY0FBYyxFQUFFLElBQUk7WUFDcEIsWUFBWSxFQUFFLElBQUk7WUFDbEIsY0FBYyxFQUFFLElBQUk7WUFDcEIsTUFBTSxFQUFFLE1BQU07WUFDZCxLQUFLLEVBQUUsT0FBTztZQUNkLG9CQUFvQixFQUFFLE1BQU07WUFDNUIsa0JBQWtCLEVBQUUsS0FBSztZQUN6QixzQkFBc0IsRUFBRSxLQUFLO1lBQzdCLG1CQUFtQixFQUFFLElBQUk7WUFDekIsb0JBQW9CLEVBQUUsSUFBSTtZQUMxQixPQUFPLEVBQUUsSUFBSTtZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsaUJBQWlCLEVBQUUsS0FBSztZQUN4QixrQkFBa0IsRUFBRSxLQUFLO1lBQ3pCLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixjQUFjLEVBQUUsSUFBSTtZQUNwQix3QkFBd0IsRUFBRSxLQUFLO1lBQy9CLG9CQUFvQixFQUFFLElBQUk7WUFDMUIsYUFBYSxFQUFFLElBQUk7WUFDbkIsZUFBZSxFQUFFLEtBQUs7U0FDekIsQ0FBQztRQUNNLHVCQUFrQixHQUFVLEVBQUUsQ0FBQztRQUUvQix1QkFBa0IsR0FBVyxFQUFFLENBQUM7UUFDaEMsV0FBTSxHQUFXLE1BQU0sQ0FBQztRQUV4QixnQkFBVyxHQUFXLGFBQWEsQ0FBQztRQUNwQyxhQUFRLEdBQVcsQ0FBQyxDQUFDO0lBRWQsQ0FBQztJQUVoQiwwQ0FBUyxHQUFUO1FB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QUFDLGdDQUFnQyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9ILENBQUM7SUFFRCxzREFBcUIsR0FBckIsVUFBc0IsS0FBNkI7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUksQ0FBQztJQUVELGlEQUFnQixHQUFoQixVQUFpQixLQUFhO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELGlEQUFnQixHQUFoQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBeEpMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLFdBQVcsRUFBRSxrQ0FBa0M7U0FDbEQsQ0FBQzs7OEJBQUE7SUFxSkYsNkJBQUM7QUFBRCxDQW5KQSxBQW1KQyxJQUFBO0FBbkpZLDhCQUFzQix5QkFtSmxDLENBQUEiLCJmaWxlIjoiYXBwL21vZHVsZS1vbmUubW9kdWxlL3VzZWNhc2UxL3NhbXBsZS1kYXRlLXBpY2tlci1ub3JtYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SU15T3B0aW9ucywgSU15RGF0ZU1vZGVsLCBJTXlJbnB1dEZpZWxkQ2hhbmdlZCwgSU15Q2FsZW5kYXJWaWV3Q2hhbmdlZH0gZnJvbSAnLi4vLi4vZGFzaGJvYXJkL215LWRhdGUtcGlja2VyL2ludGVyZmFjZXMnO1xuXG5kZWNsYXJlIHZhciByZXF1aXJlOmFueTtcbmNvbnN0IG5vcm1hbFNhbXBsZVRwbDogc3RyaW5nID0gcmVxdWlyZSgnLi9zYW1wbGUtZGF0ZS1waWNrZXItbm9ybWFsLmh0bWwnKTtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3NhbXBsZS1kYXRlLXBpY2tlci1ub3JtYWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zYW1wbGUtZGF0ZS1waWNrZXItbm9ybWFsLmh0bWwnLFxufSlcblxuZXhwb3J0IGNsYXNzIFNhbXBsZURhdGVQaWNrZXJOb3JtYWwgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHJpdmF0ZSBteURhdGVQaWNrZXJOb3JtYWxPcHRpb25zOiBJTXlPcHRpb25zID0ge1xuICAgICAgICB0b2RheUJ0blR4dDogJ1RvZGF5JyxcbiAgICAgICAgZGF0ZUZvcm1hdDogJ2RkLm1tLnl5eXknLFxuICAgICAgICBmaXJzdERheU9mV2VlazogJ21vJyxcbiAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlLFxuICAgICAgICBtYXJrQ3VycmVudERheTogdHJ1ZSxcbiAgICAgICAgaGVpZ2h0OiAnMzRweCcsXG4gICAgICAgIHdpZHRoOiAnMjEwcHgnLFxuICAgICAgICBzZWxlY3Rpb25UeHRGb250U2l6ZTogJzE4cHgnLFxuICAgICAgICBhbGlnblNlbGVjdG9yUmlnaHQ6IGZhbHNlLFxuICAgICAgICBvcGVuU2VsZWN0b3JUb3BPZklucHV0OiBmYWxzZSxcbiAgICAgICAgaW5kaWNhdGVJbnZhbGlkRGF0ZTogdHJ1ZSxcbiAgICAgICAgZWRpdGFibGVNb250aEFuZFllYXI6IHRydWUsXG4gICAgICAgIG1pblllYXI6IDE5MDAsXG4gICAgICAgIG1heFllYXI6IDIyMDAsXG4gICAgICAgIGNvbXBvbmVudERpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgaW5wdXRWYWx1ZVJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgc2hvd0NsZWFyRGF0ZUJ0bjogdHJ1ZSxcbiAgICAgICAgc2hvd1NlbGVjdG9yQXJyb3c6IHRydWUsXG4gICAgICAgIHNob3dJbnB1dEZpZWxkOiB0cnVlLFxuICAgICAgICBvcGVuU2VsZWN0b3JPbklucHV0Q2xpY2s6IGZhbHNlLFxuICAgICAgICBkaXNhYmxlSGVhZGVyQnV0dG9uczogdHJ1ZSxcbiAgICAgICAgaW5wdXRBdXRvRmlsbDogdHJ1ZSxcbiAgICAgICAgc2hvd1dlZWtOdW1iZXJzOiBmYWxzZVxuICAgIH07XG4gICAgcHJpdmF0ZSBzZWxlY3RlZERhdGVOb3JtYWw6c3RyaW5nID0gJyc7XG5cbiAgICBwcml2YXRlIHNlbGVjdGVkVGV4dE5vcm1hbDogc3RyaW5nID0gJyc7XG4gICAgcHJpdmF0ZSBib3JkZXI6IHN0cmluZyA9ICdub25lJztcblxuICAgIHByaXZhdGUgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICdTZWxlY3QgZGF0ZSc7XG4gICAgcHJpdmF0ZSBzZWxlY3RvcjogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIGNsZWFyRGF0ZSgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGVOb3JtYWwgPSAnJztcbiAgICB9XG5cbiAgICBvbkRpc2FibGVDb21wb25lbnQoY2hlY2tlZDogYm9vbGVhbikge1xuICAgICAgICBsZXQgY29weSA9IHRoaXMuZ2V0Q29weU9mT3B0aW9ucygpO1xuICAgICAgICBjb3B5LmNvbXBvbmVudERpc2FibGVkID0gY2hlY2tlZDtcbiAgICAgICAgdGhpcy5teURhdGVQaWNrZXJOb3JtYWxPcHRpb25zID0gY29weTtcbiAgICB9XG5cbiAgICBvbkVkaXRhYmxlRGF0ZUZpZWxkKGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IGNvcHkgPSB0aGlzLmdldENvcHlPZk9wdGlvbnMoKTtcbiAgICAgICAgY29weS5lZGl0YWJsZURhdGVGaWVsZCA9IGNoZWNrZWQ7XG4gICAgICAgIGNvcHkub3BlblNlbGVjdG9yT25JbnB1dENsaWNrID0gIWNoZWNrZWQ7XG4gICAgICAgIHRoaXMubXlEYXRlUGlja2VyTm9ybWFsT3B0aW9ucyA9IGNvcHk7XG4gICAgfVxuXG4gICAgb25TaG93VG9kYXlCdXR0b24oY2hlY2tlZDogYm9vbGVhbikge1xuICAgICAgICBsZXQgY29weSA9IHRoaXMuZ2V0Q29weU9mT3B0aW9ucygpO1xuICAgICAgICBjb3B5LnNob3dUb2RheUJ0biA9IGNoZWNrZWQ7XG4gICAgICAgIHRoaXMubXlEYXRlUGlja2VyTm9ybWFsT3B0aW9ucyA9IGNvcHk7XG4gICAgfVxuXG4gICAgb25TaG93Q2xlYXJEYXRlQnV0dG9uKGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IGNvcHkgPSB0aGlzLmdldENvcHlPZk9wdGlvbnMoKTtcbiAgICAgICAgY29weS5zaG93Q2xlYXJEYXRlQnRuID0gY2hlY2tlZDtcbiAgICAgICAgdGhpcy5teURhdGVQaWNrZXJOb3JtYWxPcHRpb25zID0gY29weTtcbiAgICB9XG5cbiAgICBvblNob3dJbnB1dEZpZWxkKGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IGNvcHkgPSB0aGlzLmdldENvcHlPZk9wdGlvbnMoKTtcbiAgICAgICAgY29weS5zaG93SW5wdXRGaWVsZCA9IGNoZWNrZWQ7XG4gICAgICAgIHRoaXMubXlEYXRlUGlja2VyTm9ybWFsT3B0aW9ucyA9IGNvcHk7XG4gICAgfVxuXG4gICAgb25BbGlnblNlbGVjdG9yUmlnaHQoY2hlY2tlZDogYm9vbGVhbikge1xuICAgICAgICBsZXQgY29weSA9IHRoaXMuZ2V0Q29weU9mT3B0aW9ucygpO1xuICAgICAgICBjb3B5LmFsaWduU2VsZWN0b3JSaWdodCA9IGNoZWNrZWQ7XG4gICAgICAgIHRoaXMubXlEYXRlUGlja2VyTm9ybWFsT3B0aW9ucyA9IGNvcHk7XG4gICAgfVxuXG4gICAgb25PcGVuU2VsZWN0b3JUb3BPZklucHV0KGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IGNvcHkgPSB0aGlzLmdldENvcHlPZk9wdGlvbnMoKTtcbiAgICAgICAgY29weS5vcGVuU2VsZWN0b3JUb3BPZklucHV0ID0gY2hlY2tlZDtcbiAgICAgICAgdGhpcy5teURhdGVQaWNrZXJOb3JtYWxPcHRpb25zID0gY29weTtcbiAgICB9XG5cbiAgICBvblNob3dTZWxlY3RvckFycm93KGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IGNvcHkgPSB0aGlzLmdldENvcHlPZk9wdGlvbnMoKTtcbiAgICAgICAgY29weS5zaG93U2VsZWN0b3JBcnJvdyA9IGNoZWNrZWQ7XG4gICAgICAgIHRoaXMubXlEYXRlUGlja2VyTm9ybWFsT3B0aW9ucyA9IGNvcHk7XG4gICAgfVxuXG4gICAgb25EaXNhYmxlSGVhZGVyQnV0dG9ucyhjaGVja2VkOiBib29sZWFuKSB7XG4gICAgICAgIGxldCBjb3B5ID0gdGhpcy5nZXRDb3B5T2ZPcHRpb25zKCk7XG4gICAgICAgIGNvcHkuZGlzYWJsZUhlYWRlckJ1dHRvbnMgPSBjaGVja2VkO1xuICAgICAgICB0aGlzLm15RGF0ZVBpY2tlck5vcm1hbE9wdGlvbnMgPSBjb3B5O1xuICAgIH1cblxuICAgIG9uSW5wdXRBdXRvRmlsbChjaGVja2VkOiBib29sZWFuKSB7XG4gICAgICAgIGxldCBjb3B5ID0gdGhpcy5nZXRDb3B5T2ZPcHRpb25zKCk7XG4gICAgICAgIGNvcHkuaW5wdXRBdXRvRmlsbCA9IGNoZWNrZWQ7XG4gICAgICAgIHRoaXMubXlEYXRlUGlja2VyTm9ybWFsT3B0aW9ucyA9IGNvcHk7XG4gICAgfVxuXG4gICAgb25TaG93V2Vla051bWJlcnMoY2hlY2tlZDogYm9vbGVhbikge1xuICAgICAgICBsZXQgY29weSA9IHRoaXMuZ2V0Q29weU9mT3B0aW9ucygpO1xuICAgICAgICBjb3B5LnNob3dXZWVrTnVtYmVycyA9IGNoZWNrZWQ7XG4gICAgICAgIHRoaXMubXlEYXRlUGlja2VyTm9ybWFsT3B0aW9ucyA9IGNvcHk7XG4gICAgfVxuXG4gICAgb25Ub2dnbGVTZWxlY3RvcihldmVudDogYW55KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAvLyBJbmNyZWFzZSB2YWx1ZSBvZiBzZWxlY3RvciBieSBvbmUgaW4gb3JkZXIgdGhlIGNvbXBvbmVudCBkZXRlY3QgY2hhbmdlXG4gICAgICAgIHRoaXMuc2VsZWN0b3IrKztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uSW5pdCgpOiBTYW1wbGVEYXRlUGlja2VyTm9ybWFsJyk7XG4gICAgfVxuXG4gICAgb25EYXRlQ2hhbmdlZChldmVudDogSU15RGF0ZU1vZGVsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbkRhdGVDaGFuZ2VkKCk6ICcsIGV2ZW50LmRhdGUsICcgLSBqc2RhdGU6ICcsIG5ldyBEYXRlKGV2ZW50LmpzZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCksICcgLSBmb3JtYXR0ZWQ6ICcsIGV2ZW50LmZvcm1hdHRlZCwgJyAtIGVwb2MgdGltZXN0YW1wOiAnLCBldmVudC5lcG9jKTtcbiAgICAgICAgaWYoZXZlbnQuZm9ybWF0dGVkICE9PSAnJykge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRleHROb3JtYWwgPSAnRm9ybWF0dGVkOiAnICsgZXZlbnQuZm9ybWF0dGVkICsgJyAtIGVwb2MgdGltZXN0YW1wOiAnICsgZXZlbnQuZXBvYztcbiAgICAgICAgICAgIHRoaXMuYm9yZGVyID0gJzFweCBzb2xpZCAjQ0NDJztcblxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGVOb3JtYWwgPSBldmVudC5mb3JtYXR0ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGV4dE5vcm1hbCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5ib3JkZXIgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbklucHV0RmllbGRDaGFuZ2VkKGV2ZW50OiBJTXlJbnB1dEZpZWxkQ2hhbmdlZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25JbnB1dEZpZWxkQ2hhbmdlZCgpOiBWYWx1ZTogJywgZXZlbnQudmFsdWUsICcgLSBkYXRlRm9ybWF0OiAnLCBldmVudC5kYXRlRm9ybWF0LCAnIC0gdmFsaWQ6ICcsIGV2ZW50LnZhbGlkKTtcbiAgICB9XG5cbiAgICBvbkNhbGVuZGFyVmlld0NoYW5nZWQoZXZlbnQ6IElNeUNhbGVuZGFyVmlld0NoYW5nZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uQ2FsZW5kYXJWaWV3Q2hhbmdlZCgpOiBZZWFyOiAnLCBldmVudC55ZWFyLCAnIC0gbW9udGg6ICcsIGV2ZW50Lm1vbnRoLCAnIC0gZmlyc3Q6ICcsIGV2ZW50LmZpcnN0LCAnIC0gbGFzdDogJywgZXZlbnQubGFzdCk7XG4gICAgfVxuXG4gICAgb25DYWxlbmRhclRvZ2dsZShldmVudDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbkNhbGVuZGFyVG9nZ2xlKCk6IFZhbHVlOiAnLCBldmVudCk7XG4gICAgfVxuXG4gICAgZ2V0Q29weU9mT3B0aW9ucygpOiBJTXlPcHRpb25zIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5teURhdGVQaWNrZXJOb3JtYWxPcHRpb25zKSk7XG4gICAgfVxufSJdfQ==
