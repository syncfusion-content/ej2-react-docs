

import * as React from "react";
import * as ReactDOM from "react-dom";

export default class Default extends React.Component {

public render() {
   return (
<div>
<input className="e-input" type="text" placeholder="Enter Name" value="John" readOnly= {true}/>

<div className="e-float-input">
    <input type='text' required = {true} readOnly = {true} value="John"   onFocus = {this.onInputFocus} onBlur = {this.onInputBlur}/>
    <span className="e-float-line"/>
    <label className="e-float-text e-label-top">Enter Name</label>
</div>
</div>
);
}


public onInputFocus(args: React.FocusEvent) {
    if (!((args.target as HTMLElement).parentElement as HTMLElement).classList.contains('e-input-in-wrap')) {
         ((args.target as HTMLElement).parentElement as HTMLElement).classList.add('e-input-focus');
    } else {
         (((args.target as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement).classList.add('e-input-focus')
    }
}

public onInputBlur(args: React.FocusEvent) {
    if (!((args.target as HTMLElement).parentElement as HTMLElement).classList.contains('e-input-in-wrap')) {
    ((args.target as HTMLElement).parentElement as HTMLElement).classList.remove('e-input-focus');
    } else {
        (((args.target as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement).classList.remove('e-input-focus');
    }
}
}
ReactDOM.render(<Default />, document.getElementById('input-container'));



