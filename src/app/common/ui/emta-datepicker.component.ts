import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, Input, forwardRef } from '@angular/core';
import { TranslateService, LangChangeEvent } from 'ng2-translate';
import { IMyOptions, IMyDayLabels } from 'mydatepicker/index';
import { IMyMonthLabels } from 'mydatepicker/index';
import { IMyInputFocusBlur } from 'mydatepicker/index';

@Component({
  selector: 'emta-datepicker',
  templateUrl: './emta-datepicker.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmtaDatepickerComponent),
      multi: true
    }
  ]
})
export class EmtaDatepickerComponent implements ControlValueAccessor {
  @Input() public minDate: Date;
  @Input() public maxDate: Date;
  public placeholderText: String;
  public value: Date;
  public hasFocus: Boolean;
  public dateValueObject: Object; // = { date: { year: 2018, month: 10, day: 9 } };

  public myDatePickerOptions: IMyOptions = {
    todayBtnTxt: 'Täna',
    showTodayBtn: false,
    firstDayOfWeek: 'mo',
    height: '34px',
    width: '260px',
    dateFormat: 'dd.mm.yyyy',
    editableMonthAndYear: false,
    markWeekends: {marked: true, color: 'red'}
  };

  private localizedDayLabels: {et: IMyDayLabels, en: IMyDayLabels, ru: IMyDayLabels} = {
    et: {su: 'P', mo: 'E', tu: 'T', we: 'K', th: 'N', fr: 'R', sa: 'L'},
    en: {su: 'Su', mo: 'Mo', tu: 'Tu', we: 'We', th: 'Th', fr: 'Fr', sa: 'Sa'},
    ru: {su: 'Вс', mo: 'Пн', tu: 'Вт', we: 'Ср', th: 'Чт', fr: 'Пт', sa: 'Сб'}
  };

  private localizedPlaceholder: {et: String, en: String, ru: String} = {
    et: 'pp.kk.aaaa',
    en: 'dd.mm.yyyy',
    ru: 'дд.мм.гггг'
  };

  private localizedMonthLabels: {et: IMyMonthLabels, en: IMyMonthLabels, ru: IMyMonthLabels} = {
    et: {
      1: 'Jaanuar',
      2: 'Veebruar',
      3: 'Märts',
      4: 'Aprill',
      5: 'Mai',
      6: 'Juuni',
      7: 'Juuli',
      8: 'August',
      9: 'September',
      10: 'Oktoober',
      11: 'November',
      12: 'Detsember'
    },
    en: {
      1: 'January',
      2: 'February',
      3: 'March',
      4: 'April',
      5: 'May',
      6: 'June',
      7: 'July',
      8: 'August',
      9: 'September',
      10: 'Octoober',
      11: 'November',
      12: 'December'
    },
    ru: {
      1: 'Январь',
      2: 'Февраль',
      3: 'Март',
      4: 'Апрель',
      5: 'Май',
      6: 'Июнь',
      7: 'Июль',
      8: 'Август',
      9: 'Сентябрь',
      10: 'Октябрь',
      11: 'Ноябрь',
      12: 'Декабрь'
    }
  };

  constructor(public translate: TranslateService) {
    translate.onLangChange.subscribe((params: LangChangeEvent) => {
      let newOptions = Object.assign({}, this.myDatePickerOptions);
      newOptions.dayLabels = this.localizedDayLabels[params.lang];
      newOptions.monthLabels = this.localizedMonthLabels[params.lang];
      this.myDatePickerOptions = newOptions;
      this.placeholderText = this.localizedPlaceholder[params.lang];
    });
  }

  public onChange: (event: any) => any = (x) => x;

  public onCalendarToggle(event: number): void {
    console.log('onCalendarClosed(): Reason: ', event);
    this.hasFocus = event === 1;
  }

  public setFocus(hasFocus: Boolean) {
    this.hasFocus = hasFocus;
    console.log('Has focus: ' + hasFocus);
  }

  public onSelectionDone(event: any, pop: any) {
    this.onChange(event);
  }

  public dateText() {
    return this.value ? this.value.toLocaleString(
      this.translate.currentLang, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) : '';
  }

  /**
   * Write a new value to the element.
   */
  public writeValue(obj: any) {
    if (obj && obj instanceof Date) {
      this.value = obj;
    }
  }

  /**
   * Set the function to be called when the control receives a change event.
   */
  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  /**
   * Set the function to be called when the control receives a touch event.
   */
  public registerOnTouched(fn: any) {
    console.log('registerOnTouched');
  }

}
