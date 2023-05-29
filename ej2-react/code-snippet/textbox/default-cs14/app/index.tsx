

import * as React from "react";
import * as ReactDOM from "react-dom";

function Default() {
   return (
    <div>
        <div className="e-input-group e-warning">
        <input className="e-input" type="text" placeholder="Input with warning" onFocus = {onInputFocus} onBlur = {onInputBlur} />
        </div>

        <div className="e-input-group e-error">
        <input className="e-input" type="text" placeholder="Input with error" onFocus = {onInputFocus} onBlur = {onInputBlur} />
        </div>

        <div className="e-input-group e-success">
        <input className="e-input" type="text" placeholder="Input with success" onFocus = {onInputFocus} onBlur = {onInputBlur}/>
        </div>
    </div>
);

function onInputFocus(args: React.FocusEvent) {
    if (!((args.target as HTMLElement).parentElement as HTMLElement).classList.contains('e-input-in-wrap')) {
        ((args.target as HTMLElement).parentElement as HTMLElement).classList.add('e-input-focus');
    } else {
        (((args.target as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement).classList.add('e-input-focus')
    }
}

function onInputBlur(args: React.FocusEvent) {
    if (!((args.target as HTMLElement).parentElement as HTMLElement).classList.contains('e-input-in-wrap')) {
        ((args.target as HTMLElement).parentElement as HTMLElement).classList.remove('e-input-focus');
    } else {
        (((args.target as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement).classList.remove('e-input-focus');
    }
}
}

ReactDOM.render(<Default />, document.getElementById('input-container'));


