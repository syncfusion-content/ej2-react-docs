

import * as React from "react";
import * as ReactDOM from "react-dom";

export default class Default extends React.Component {

public render() {
   return (
    <div>
        <div className="e-float-input e-input-group e-success">
            <input type='text' required = {true} onFocus = {this.onInputFocus} onBlur = {this.onInputBlur}/>
            <span className="e-float-line"/>
            <label className="e-float-text">Success</label>
        </div>

        <div className="e-float-input e-input-group e-warning">
            <input type='text' required = {true} onFocus = {this.onInputFocus} onBlur = {this.onInputBlur}/>
            <span className="e-float-line"/>
            <label className="e-float-text">Warning</label>
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



