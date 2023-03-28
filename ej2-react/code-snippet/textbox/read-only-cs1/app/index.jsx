import * as React from "react";
import * as ReactDOM from "react-dom";
export default class Default extends React.Component {
    valueBtn;
    removeBtn;
    inputElement;
    render() {
        return (<div className="wrap">
        <div className="row">
            <div className="e-float-input">
                <input className="e-input myField" onFocus={this.floatFocus} onBlur={this.floatBlur} ref={v => this.inputElement = v} type="text" id="myText" readOnly={true}/>
                <span className="e-float-line"/>
                <label className="e-float-text">Enter value</label>
            </div>
        </div>
        <div className="row">
            <button className="e-btn update_value" id="valuebtn" onClick={this.updateBtnClick} ref={btn => this.valueBtn = btn}>Set value</button>
            <button className="e-btn remove_value" id="removebtn" onClick={this.removeBtnClick} ref={removeBtn => this.removeBtn = removeBtn}>Remove value</button>
        </div>
    </div>);
    }
    updateBtnClick = () => {
        this.inputElement.value = '10';
        this.checkFloatingLabel('myText');
    };
    removeBtnClick = () => {
        this.inputElement.value = '';
        this.checkFloatingLabel('myText');
    };
    checkFloatingLabel(id) {
        const inputElement = document.getElementById(id);
        const labelElement = inputElement.parentElement.querySelector('.e-float-text');
        if (inputElement.value !== '') {
            labelElement.classList.remove('e-label-bottom');
            labelElement.classList.add('e-label-top');
        }
        else {
            labelElement.classList.remove('e-label-top');
            labelElement.classList.add('e-label-bottom');
        }
    }
    floatFocus(args) {
        args.target.parentElement.classList.add('e-input-focus');
    }
    floatBlur(args) {
        args.target.parentElement.classList.remove('e-input-focus');
    }
}
ReactDOM.render(<Default />, document.getElementById('input-container'));
