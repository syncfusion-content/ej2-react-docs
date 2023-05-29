import { Input } from '@syncfusion/ej2-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";
export default class Default extends React.Component {
    input1;
    input2;
    input3;
    input4;
    render() {
        return (<div className="inner-container">
                <h4> FloatLabelType as Auto </h4>
                <input id="input-01" type="text" ref={ele1 => this.input1 = ele1}/>
                <h4> FloatLabelType as Always </h4>
                <input id="input-02" type="text" ref={ele2 => this.input2 = ele2}/>
                <h4> FloatLabelType as Never </h4>
                <input id="input-03" type="text" ref={ele3 => this.input3 = ele3}/>
                <h4> Float label input with icons </h4>
                <input id="input-04" type="text" ref={ele4 => this.input4 = ele4}/>
            </div>);
    }
    componentDidMount() {
        Input.createInput({
            element: this.input1,
            floatLabelType: "Auto",
            properties: {
                placeholder: 'Enter Name'
            }
        });
        Input.createInput({
            element: this.input2,
            floatLabelType: "Always",
            properties: {
                placeholder: 'Enter Name'
            }
        });
        Input.createInput({
            element: this.input3,
            floatLabelType: "Never",
            properties: {
                placeholder: 'Enter Name'
            }
        });
        // Render Float Label TextBox with Icon
        Input.createInput({
            buttons: ['e-input-group-icon e-input-down'],
            element: this.input4,
            floatLabelType: "Auto",
            properties: {
                placeholder: 'Enter Value'
            }
        });
    }
}
ReactDOM.render(<Default />, document.getElementById('input-container'));
