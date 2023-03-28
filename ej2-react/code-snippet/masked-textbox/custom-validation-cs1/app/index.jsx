{% raw %}
import { FormValidator } from '@syncfusion/ej2-inputs';
import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    maskInstance;
    componentDidMount() {
        // checks the length of mask value and returns corresponding boolean value
        const customFn = (args) => {
            const argsLength = args.element.ej2_instances[0].value.length;
            if (argsLength !== 0) {
                return argsLength >= 10;
            }
            else {
                return true;
            }
        };
        // if mask value length is 0, 0 is returned else the length is returned
        const custom = (args) => {
            const argsLength = args.element.ej2_instances[0].value.length;
            if (argsLength === 0) {
                return 0;
            }
            else {
                return argsLength;
            }
        };
        const options = {
            customPlacement: (inputElement, errorElement) => {
                // to place the error message in custom position
                // errorElement - error text which will be displayed.
                document.querySelector("#masktextbox").appendChild(errorElement);
            },
            rules: {
                // must specify the name attribute value in rules section with required validation
                'mask_value': { numberValue: [customFn, 'Enter valid mobile number'] }
            }
        };
        const formObject = new FormValidator('#form-element', options);
        // FormValidator rule is added for empty MaskedTextBox
        formObject.addRules('mask_value', { maxLength: [custom, 'Enter mobile number'] });
        document.getElementById('submit_btn').addEventListener('click', () => {
            formObject.validate('mask_value');
            // checks for incomplete value and alerts the formt submit
            if (this.maskInstance.value !== "" && this.maskInstance.value.indexOf(this.maskInstance.promptChar) === -1) {
                alert("Submitted");
            }
        });
    }
    render() {
        return (<div>
        <br /><MaskedTextBoxComponent id="mask" name="mask_value" ref={(mask) => { this.maskInstance = mask; }} placeholder="Mobile Number" mask="000-000-0000" floatLabelType='Always'/>
        <label className='e-error' htmlFor='mask_value'/>
        <button id="submit_btn" type='button' style={{ marginTop: '10px' }}>Submit</button>
      </div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('masktextbox'));
{% endraw %}