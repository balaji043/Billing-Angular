export class InputDropDownConfig {

    placeHolder: string;
    displayVariableName: string;
    valueToEmit: string;
    urlLink: string;

    constructor(
        placeHolder: string,
        displayVariableName: string,
        valueToEmit: string,
        urlLink: string
    ) {
        this.placeHolder = placeHolder;
        this.displayVariableName = displayVariableName;
        this.urlLink = urlLink;
        this.valueToEmit = valueToEmit;
    }



}
