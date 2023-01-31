

import * as React from "react";
import * as ReactDOM from "react-dom";

export default class Default extends React.Component {

public valueBtn: HTMLButtonElement;
public removeBtn: HTMLButtonElement;
public inputElement: HTMLInputElement;

public render() {
   return (
    <div className="wrap">
        <div className="row">
            <div className="e-float-input">
                <input className="e-input myField" onFocus= {this.floatFocus} onBlur= {this.floatBlur} ref = { v => this.inputElement = v!} type="text" id="myText" readOnly={true}  />
                <span className="e-float-line" />
                <label className="e-float-text">Enter value</label>
            </div>
        </div>
        <div className="row">
            <button className="e-btn update_value" id="valuebtn" onClick = { this.updateBtnClick} ref = { btn => this.valueBtn = btn! }>Set value</button>
            <button className="e-btn remove_value" id="removebtn" onClick = { this.removeBtnClick} ref = { removeBtn => this.removeBtn = removeBtn!}>Remove value</button>
        </div>
    </div>
);
}

public updateBtnClick = (): void => {
    this.inputElement.value = '10';
    this.checkFloatingLabel('myText')
}

public removeBtnClick = (): void => {
    this.inputElement.value = '';
    this.checkFloatingLabel('myText')
}

public checkFloatingLabel(id: any): void {
    const inputElement: HTMLInputElement =  document.getElementById(id) as HTMLInputElement;
    const labelElement: HTMLInputElement = (inputElement as any).parentElement.querySelector('.e-float-text') as HTMLInputElement;
    if (inputElement.value !== '') {
        labelElement.classList.remove('e-label-bottom');
        labelElement.classList.add('e-label-top');
    } else {
    labelElement.classList.remove('e-label-top');
    labelElement.classList.add('e-label-bottom');
    }
}

public floatFocus(args: any): void {
    args.target.parentElement.classList.add('e-input-focus');
}

public floatBlur(args: any): void {
    args.target.parentElement.classList.remove('e-input-focus');
}
}

ReactDOM.render(<Default />, document.getElementById('input-container'));



