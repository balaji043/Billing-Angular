export class InputDropDownConfig {

    placeHolder: string;
    displayVariableName: string;
    msName: string;
    apiName: string;
    constructor(
        placeHolder: string,
        displayVariableName: string,
        msName: string,
        apiName: string,
    ) {
        this.placeHolder = placeHolder;
        this.displayVariableName = displayVariableName;
        this.msName = msName;
        this.apiName = apiName;
    }

}
