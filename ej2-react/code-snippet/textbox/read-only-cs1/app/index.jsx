import * as React from "react";
import * as ReactDOM from "react-dom";
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
export default class Default extends React.Component {
    textBoxObj = React.createRef();
    render() {
        return (<div className="wrap">
        <div className="row">
            <TextBoxComponent
                id='default'
                placeholder="Enter value"
                floatLabelType="Auto"
                ref={this.textBoxObj}
                readOnly="true"
            />
        </div>
        <div className="row">
            <button className="e-btn update_value" id="valuebtn" onClick={this.updateBtnClick} ref={btn => this.valueBtn = btn}>Set value</button>
            <button className="e-btn remove_value" id="removebtn" onClick={this.removeBtnClick} ref={removeBtn => this.removeBtn = removeBtn}>Remove value</button>
        </div>
    </div>);
    }
    updateBtnClick = () => {
        this.textBoxObj.current.value = '10';
    };
    removeBtnClick = () => {
        this.textBoxObj.current.value = '';
    };
}
ReactDOM.render(<Default />, document.getElementById('input-container'));
