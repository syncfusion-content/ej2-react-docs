

import * as React from "react";
import * as ReactDOM from "react-dom";

function Default() {
   return (
    <div className="e-input-group">
        <input className="e-input" name="input" type="text" onFocus = {onInputFocus} onBlur = {onInputBlur} placeholder="Enter Date"/>
        <span className="e-icons e-input-group-icon e-input-popup-date" onMouseDown = {onIconMouseDown} onMouseUp = {onIconMouseUp}/>
    </div>
);
}

function onInputFocus(args: React.FocusEvent) {
    ((args.target as HTMLElement).parentElement as HTMLElement).classList.add('e-input-focus');
}

function onInputBlur(args: React.FocusEvent) {
    ((args.target as HTMLElement).parentElement as HTMLElement).classList.remove('e-input-focus');
}

function onIconMouseDown(args: React.MouseEvent) {
    args.persist();
    setTimeout(
        () => {
            (args.target as HTMLElement).classList.add('e-input-btn-ripple');
        },
    300);
}

function onIconMouseUp(args: React.MouseEvent) {
    (args.target as HTMLElement).classList.remove('e-input-btn-ripple');
}

ReactDOM.render(<Default />, document.getElementById('input-container'));


