export class ComboBoxModel {

    dropDownName: String;
    ComboBoxModelData: ComboBoxModelData[] = [];
    ComboBoxModelKeysData:any[] = []
    public setDropDownDetails(key: String,value: String): ComboBoxModelData[] {
        let jumpToComponentData = new ComboBoxModelData();
        jumpToComponentData.key = key;
        jumpToComponentData.value = value;
        return this.setDropDownDetailsObject(jumpToComponentData);
    }

    public setDowpDownDetailsArray(setJumpToComponentDetailsarr: ComboBoxModelData[]): ComboBoxModelData[] {
        this.ComboBoxModelData = setJumpToComponentDetailsarr;
        return this.ComboBoxModelData;
    }

    public setDropDownDetailsObject(ComboBoxModelobj: ComboBoxModelData): ComboBoxModelData[] {
        this.ComboBoxModelData.push(ComboBoxModelobj);
        return this.ComboBoxModelData;
    }
    clearDropDownList(){
        this.ComboBoxModelData = []
    }
}
export class ComboBoxModelData {
    constructor(){}
    key: String="";
    value: String="";
}

