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
var core_1 = require("@angular/core");
var InputAutoFillDirective = (function () {
    function InputAutoFillDirective(el, rndr) {
        this.el = el;
        this.rndr = rndr;
    }
    InputAutoFillDirective.prototype.onKeyUp = function (evt) {
        if (!this.opts.enabled || evt.keyCode === 8 || evt.keyCode === 46) {
            return;
        }
        var val = this.getInputValue();
        var ews = this.endsWith(val, this.opts.separator);
        var parts = val.split(this.opts.separator);
        var idx = parts.length - 1;
        if (val.indexOf(this.opts.separator + this.opts.separator) !== -1) {
            return;
        }
        if (!ews && (val.length === this.getPartLength(0) || val.length === this.getPartLength(0) + this.getPartLength(1) + this.opts.separator.length)) {
            this.setInputValue(val + this.opts.separator);
        }
        else if (ews && parts[idx - 1].length < this.getPartLength(idx - 1) && this.isNumber(parts[idx - 1]) && (this.isDay(idx - 1) || this.isMonth(idx - 1))) {
            this.setInputValue(this.insertPos(val, val.length - 2, "0"));
        }
        else if (parts[idx].length < this.getPartLength(idx) && this.isNumber(parts[idx]) && (Number(parts[idx]) > 3 && this.isDay(idx) || Number(parts[idx]) > 1 && this.isMonth(idx))) {
            this.setInputValue(this.insertPos(val, val.length - 1, "0") + (idx < 2 ? this.opts.separator : ""));
        }
    };
    InputAutoFillDirective.prototype.endsWith = function (val, suffix) {
        return val.indexOf(suffix, val.length - suffix.length) !== -1;
    };
    InputAutoFillDirective.prototype.insertPos = function (str, idx, val) {
        return str.substr(0, idx) + val + str.substr(idx);
    };
    InputAutoFillDirective.prototype.getPartLength = function (idx) {
        return this.opts.formatParts[idx].length;
    };
    InputAutoFillDirective.prototype.isNumber = function (val) {
        return val.match(/[1-9]/) !== null;
    };
    InputAutoFillDirective.prototype.isDay = function (idx) {
        return this.opts.formatParts[idx].indexOf("d") !== -1;
    };
    InputAutoFillDirective.prototype.isMonth = function (idx) {
        return this.opts.formatParts[idx].indexOf("m") !== -1 && this.opts.formatParts[idx].length === 2;
    };
    InputAutoFillDirective.prototype.getInputValue = function () {
        return this.el.nativeElement.value;
    };
    InputAutoFillDirective.prototype.setInputValue = function (val) {
        this.rndr.setElementProperty(this.el.nativeElement, "value", val);
    };
    __decorate([
        core_1.Input("myinputautofill"), 
        __metadata('design:type', Object)
    ], InputAutoFillDirective.prototype, "opts", void 0);
    __decorate([
        core_1.HostListener("keyup", ["$event"]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [KeyboardEvent]), 
        __metadata('design:returntype', void 0)
    ], InputAutoFillDirective.prototype, "onKeyUp", null);
    InputAutoFillDirective = __decorate([
        core_1.Directive({
            selector: "[myinputautofill]"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], InputAutoFillDirective);
    return InputAutoFillDirective;
}());
exports.InputAutoFillDirective = InputAutoFillDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvbXktZGF0ZS1waWNrZXIvZGlyZWN0aXZlcy9teS1kYXRlLXBpY2tlci5pbnB1dC5hdXRvLmZpbGwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUUsZUFBZSxDQUFDLENBQUE7QUFPckY7SUFHSSxnQ0FBb0IsRUFBYyxFQUFVLElBQWM7UUFBdEMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7SUFBRyxDQUFDO0lBRTNCLHdDQUFPLEdBQVAsVUFBUSxHQUFrQjtRQUN6RCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxPQUFPLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxPQUFPLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoRSxNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsSUFBSSxHQUFHLEdBQVcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZDLElBQUksR0FBRyxHQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsSUFBSSxLQUFLLEdBQWtCLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxRCxJQUFJLEdBQUcsR0FBVyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUVuQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JKLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5SyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hHLENBQUM7SUFDTCxDQUFDO0lBRU8seUNBQVEsR0FBaEIsVUFBaUIsR0FBVyxFQUFFLE1BQWM7UUFDeEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTywwQ0FBUyxHQUFqQixVQUFrQixHQUFXLEVBQUUsR0FBVyxFQUFFLEdBQVc7UUFDbkQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFTyw4Q0FBYSxHQUFyQixVQUFzQixHQUFXO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDN0MsQ0FBQztJQUVPLHlDQUFRLEdBQWhCLFVBQWlCLEdBQVc7UUFDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDO0lBQ3ZDLENBQUM7SUFFTyxzQ0FBSyxHQUFiLFVBQWMsR0FBVztRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTyx3Q0FBTyxHQUFmLFVBQWdCLEdBQVc7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFFTyw4Q0FBYSxHQUFyQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDdkMsQ0FBQztJQUVPLDhDQUFhLEdBQXJCLFVBQXNCLEdBQVc7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQTNERDtRQUFDLFlBQUssQ0FBQyxpQkFBaUIsQ0FBQzs7d0RBQUE7SUFJekI7UUFBQyxtQkFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O3lEQUFBO0lBVHRDO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxtQkFBbUI7U0FDaEMsQ0FBQzs7OEJBQUE7SUErREYsNkJBQUM7QUFBRCxDQTdEQSxBQTZEQyxJQUFBO0FBN0RZLDhCQUFzQix5QkE2RGxDLENBQUEiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9teS1kYXRlLXBpY2tlci9kaXJlY3RpdmVzL215LWRhdGUtcGlja2VyLmlucHV0LmF1dG8uZmlsbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyLCBJbnB1dCwgSG9zdExpc3RlbmVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElNeUlucHV0QXV0b0ZpbGwgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9teS1pbnB1dC1hdXRvLWZpbGwuaW50ZXJmYWNlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltteWlucHV0YXV0b2ZpbGxdXCJcbn0pXG5cbmV4cG9ydCBjbGFzcyBJbnB1dEF1dG9GaWxsRGlyZWN0aXZlIHtcbiAgICBASW5wdXQoXCJteWlucHV0YXV0b2ZpbGxcIikgb3B0czogSU15SW5wdXRBdXRvRmlsbDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcm5kcjogUmVuZGVyZXIpIHt9XG5cbiAgICBASG9zdExpc3RlbmVyKFwia2V5dXBcIiwgW1wiJGV2ZW50XCJdKSBvbktleVVwKGV2dDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoIXRoaXMub3B0cy5lbmFibGVkIHx8IGV2dC5rZXlDb2RlID09PSA4IHx8IGV2dC5rZXlDb2RlID09PSA0Nikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbDogc3RyaW5nID0gdGhpcy5nZXRJbnB1dFZhbHVlKCk7XG4gICAgICAgIGxldCBld3M6IGJvb2xlYW4gPSB0aGlzLmVuZHNXaXRoKHZhbCwgdGhpcy5vcHRzLnNlcGFyYXRvcik7XG4gICAgICAgIGxldCBwYXJ0czogQXJyYXk8c3RyaW5nPiA9IHZhbC5zcGxpdCh0aGlzLm9wdHMuc2VwYXJhdG9yKTtcbiAgICAgICAgbGV0IGlkeDogbnVtYmVyID0gcGFydHMubGVuZ3RoIC0gMTtcblxuICAgICAgICBpZiAodmFsLmluZGV4T2YodGhpcy5vcHRzLnNlcGFyYXRvciArIHRoaXMub3B0cy5zZXBhcmF0b3IpICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFld3MgJiYgKHZhbC5sZW5ndGggPT09IHRoaXMuZ2V0UGFydExlbmd0aCgwKSB8fCB2YWwubGVuZ3RoID09PSB0aGlzLmdldFBhcnRMZW5ndGgoMCkgKyB0aGlzLmdldFBhcnRMZW5ndGgoMSkgKyB0aGlzLm9wdHMuc2VwYXJhdG9yLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSh2YWwgKyB0aGlzLm9wdHMuc2VwYXJhdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChld3MgJiYgcGFydHNbaWR4IC0gMV0ubGVuZ3RoIDwgdGhpcy5nZXRQYXJ0TGVuZ3RoKGlkeCAtIDEpICYmIHRoaXMuaXNOdW1iZXIocGFydHNbaWR4IC0gMV0pICYmICh0aGlzLmlzRGF5KGlkeCAtIDEpIHx8IHRoaXMuaXNNb250aChpZHggLSAxKSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSh0aGlzLmluc2VydFBvcyh2YWwsIHZhbC5sZW5ndGggLSAyLCBcIjBcIikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhcnRzW2lkeF0ubGVuZ3RoIDwgdGhpcy5nZXRQYXJ0TGVuZ3RoKGlkeCkgJiYgdGhpcy5pc051bWJlcihwYXJ0c1tpZHhdKSAmJiAoTnVtYmVyKHBhcnRzW2lkeF0pID4gMyAmJiB0aGlzLmlzRGF5KGlkeCkgfHwgTnVtYmVyKHBhcnRzW2lkeF0pID4gMSAmJiB0aGlzLmlzTW9udGgoaWR4KSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSh0aGlzLmluc2VydFBvcyh2YWwsIHZhbC5sZW5ndGggLSAxLCBcIjBcIikgKyAoaWR4IDwgMiA/IHRoaXMub3B0cy5zZXBhcmF0b3IgOiBcIlwiKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGVuZHNXaXRoKHZhbDogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdmFsLmluZGV4T2Yoc3VmZml4LCB2YWwubGVuZ3RoIC0gc3VmZml4Lmxlbmd0aCkgIT09IC0xO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5zZXJ0UG9zKHN0cjogc3RyaW5nLCBpZHg6IG51bWJlciwgdmFsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cigwLCBpZHgpICsgdmFsICsgc3RyLnN1YnN0cihpZHgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UGFydExlbmd0aChpZHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdHMuZm9ybWF0UGFydHNbaWR4XS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc051bWJlcih2YWw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdmFsLm1hdGNoKC9bMS05XS8pICE9PSBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNEYXkoaWR4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0cy5mb3JtYXRQYXJ0c1tpZHhdLmluZGV4T2YoXCJkXCIpICE9PSAtMTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzTW9udGgoaWR4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0cy5mb3JtYXRQYXJ0c1tpZHhdLmluZGV4T2YoXCJtXCIpICE9PSAtMSAmJiB0aGlzLm9wdHMuZm9ybWF0UGFydHNbaWR4XS5sZW5ndGggPT09IDI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRJbnB1dFZhbHVlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRJbnB1dFZhbHVlKHZhbDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm5kci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBcInZhbHVlXCIsIHZhbCk7XG4gICAgfVxufSJdfQ==
