import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ComboBoxModelData, ComboBoxModel } from './angular-drop-down.model';

@Component({
  selector: 'angular-drop-down',
  templateUrl: './angular-drop-down.component.html',
  styleUrls: ['./angular-drop-down.component.css']
})
export class AngularDropDownComponent implements OnChanges {
  @Input() isKeyValuePairData: boolean = false;
  @Output() onSelectionChaged = new EventEmitter<ComboBoxModelData>()
  @Input() dropDownNameAlignLeft: boolean = false;
  @Input() dropDownNameAlignTop: boolean = true;
  @Input() dropDownName: String="";
  @Input() commonComboBoxModel: ComboBoxModel = new ComboBoxModel();
  @Input() selectedValue: string = 'Select';
  @Input() disableDropDown = true;

  commonComboBoxModelData: ComboBoxModelData[] = [];
  
  constructor() { }

  selectedValueChange(dropDownSelectedKey: string, dropDownSelectedValue: string) {
    if (dropDownSelectedKey !== '') {
  
      this.selectedValue = dropDownSelectedValue;
      let data = new ComboBoxModelData();
      data.key=dropDownSelectedKey;
      data.value = dropDownSelectedValue;
      this.onSelectionChaged.emit(data)
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (null != this.commonComboBoxModel && undefined != this.commonComboBoxModel) {
    if (null != this.commonComboBoxModel.ComboBoxModelData) {
      this.commonComboBoxModelData = this.commonComboBoxModel.ComboBoxModelData;
    }
    if(this.commonComboBoxModel.dropDownName != "" && this.commonComboBoxModel.dropDownName != undefined){
      this.dropDownName = this.commonComboBoxModel.dropDownName;
    }
  }
    if(this.commonComboBoxModel.dropDownName != "" && this.commonComboBoxModel.dropDownName != undefined){
      this.dropDownName = this.commonComboBoxModel.dropDownName;
    } 
  }
  
}
