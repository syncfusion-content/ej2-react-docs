


// import the ripple effect
import { enableRipple } from '@syncfusion/ej2-base';
// import the form validator related functions
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';
// import the timepicker
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";

// enable ripple effect
enableRipple(true);

export default class App extends React.Component<{}, {}> {

    public componentDidMount(): void {
        const options: FormValidatorModel = {
            customPlacement: (inputElement: HTMLElement, errorElement: HTMLElement) => {
                const parentElement: HTMLElement = inputElement.parentElement as HTMLElement;
                (parentElement.parentElement as HTMLElement).appendChild(errorElement);
            },
            rules: {
                // must specify the name attribute value in rules section with required validation
                'timepicker': { required: true }
            }
        };
        const formObject: FormValidator = new FormValidator('#form-element', options);
        formObject.addRules('timepicker', {required: true});
    }

    public render() {
        return (
            <form id='form-element'>
                <TimePickerComponent id="timepicker" placeholder="Select a Time" />
            </form>)
    }
};
ReactDOM.render(<App />, document.getElementById('timer'));



