// import the ripple effect
import { enableRipple } from '@syncfusion/ej2-base';
// import the form validator related functions
import { FormValidator } from '@syncfusion/ej2-inputs';
// import the timepicker
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";
// enable ripple effect
enableRipple(true);
export default class App extends React.Component {
    componentDidMount() {
        const options = {
            customPlacement: (inputElement, errorElement) => {
                const parentElement = inputElement.parentElement;
                parentElement.parentElement.appendChild(errorElement);
            },
            rules: {
                // must specify the name attribute value in rules section with required validation
                'timepicker': { required: true }
            }
        };
        const formObject = new FormValidator('#form-element', options);
        formObject.addRules('timepicker', { required: true });
    }
    render() {
        return (<form id='form-element'>
                <TimePickerComponent id="timepicker" placeholder="Select a Time"/>
            </form>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('timer'));
