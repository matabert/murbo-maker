/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'matabert-manual-entry',
  templateUrl: './manual-entry.component.html',
  styleUrls: ['./manual-entry.component.css']
})
export class ManualEntryComponent implements OnInit {

  @Output() scoreSubmit: EventEmitter<number[]> = new EventEmitter<number[]>();

  _entryFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { 
    this._entryFormGroup = this.fb.group({
      strEntry: new FormControl(),
      dexEntry: new FormControl(),
      conEntry: new FormControl(),
      intEntry: new FormControl(),
      wisEntry: new FormControl(),
      chaEntry: new FormControl()
    });
  }

  ngOnInit(): void { 
    //this.scoreSubmit.emit(this._entryFormGroup);
  }

  get entryFormGroup() {
    return this._entryFormGroup;
  }

  submit() {
    const values = this.parseEntries();
    console.log(values);
    this.scoreSubmit.emit(values);
  }

  parseEntries(): number[] {
    const values = [];
    values.push(this._entryFormGroup.get('strEntry')?.value);
    values.push(this._entryFormGroup.get('dexEntry')?.value);
    values.push(this._entryFormGroup.get('conEntry')?.value);
    values.push(this._entryFormGroup.get('intEntry')?.value);
    values.push(this._entryFormGroup.get('wisEntry')?.value);
    values.push(this._entryFormGroup.get('chaEntry')?.value);
    return values;
  }

}
