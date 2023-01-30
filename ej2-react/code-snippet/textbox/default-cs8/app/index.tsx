

import { Input } from  '@syncfusion/ej2-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";

export default class Default extends React.Component {
    public input1: any;
    public input2: any;
    public render() {
        return (
            <div className="inner-container">
                <input id="input-01" type="text" ref = { e1 => this.input1 = e1!} />
                <input id="input-02" type="text" ref = { e2 => this.input2 = e2!} />
            </div>
        )
    }

    public componentDidMount() {

        Input.createInput({
            element: this.input1,
            properties:{
                placeholder:'Enter Name'
            }
        });

        Input.createInput({
            buttons: ['e-input-group-icon e-input-down'],
            element: this.input2,
            properties:{
                placeholder:'Enter Value'
            }
        });
    }
}
ReactDOM.render(<Default />, document.getElementById('input-container'));



