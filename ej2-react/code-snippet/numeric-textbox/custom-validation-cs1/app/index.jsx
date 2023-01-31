{% raw %}
import { FormValidator } from '@syncfusion/ej2-inputs';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";
// initializes NumericTextBox component
export default class App extends React.Component {
    numericInstance;
    formObject;
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onCreate = this.onCreate.bind(this);
    }
    onChange() {
        this.formObject.validate("numeric");
    }
    onCreate() {
        // checks the value of NumericTextbox and returns the corresponding boolean value
        const customFn = (args) => {
            if (this.numericInstance.value >= 10 && this.numericInstance.value <= 100) {
                return true;
            }
            else {
                return false;
            }
        };
        const options = {
            rules: {
                'numeric': { required: [true, "Number is required"] },
            }
        };
        // defines FormValidator to validate the NumericTextBox
        this.formObject = new FormValidator('#form-element', options);
        this.formObject.addRules('numeric', { range: [customFn, "Please enter a number between 10 to 100"] });
        const proxy = this;
        document.getElementById('submit_btn').addEventListener('click', () => {
            proxy.formObject.validate('numeric');
            const ele = document.getElementById('numeric');
            // checks for incomplete value and alerts the formt submit
            if (ele.value !== "" && parseInt(ele.value, 10) >= 10 && parseInt(ele.value, 10) <= 100) {
                alert("Submitted");
            }
        });
    }
    render() {
        return (<div>
            <NumericTextBoxComponent id="numeric" name='numeric' placeholder="NumericTextbox" min={10} max={100} strictMode={false} ref={(numeric) => { this.numericInstance = numeric; }} change={this.onChange} created={this.onCreate} floatLabelType='Always'/>
            <label className='e-error' htmlFor={'numeric'}/>
            <button id="submit_btn" style={{ marginTop: '10px' }}>Submit</button>
          </div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('numericContainer'));
{% endraw %}