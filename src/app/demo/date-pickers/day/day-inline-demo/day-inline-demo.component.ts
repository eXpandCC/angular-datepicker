import {Component, OnInit} from '@angular/core';
import {DateComponent} from '../../../common/date-component.component';
import {UntypedFormControl} from '@angular/forms';
import {IDatePickerConfig} from '../../../../../../projects/ng2-date-picker/src/public-api';
import {DEF_CONF} from '../../../common/conts/consts';

@Component({
    selector: 'dp-day-inline-demo',
    templateUrl: './day-inline-demo.component.html',
    styleUrls: ['./day-inline-demo.component.less'],
    standalone: false
})
export class DayInlineDemoComponent extends DateComponent implements OnInit {
  control: UntypedFormControl;
  config: IDatePickerConfig = {
    ...DEF_CONF,
    format: 'DD-MM-YYYY'
  };

  ngOnInit(): void {
    this.control = this.buildForm();
  }
}
