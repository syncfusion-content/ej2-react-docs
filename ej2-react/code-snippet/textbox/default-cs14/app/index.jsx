import * as React from "react";
import * as ReactDOM from "react-dom";
function Default() {
    return (<div>
        <div className="e-input-group e-warning">
        <input className="e-input" type="text" placeholder="Input with warning" onFocus={onInputFocus} onBlur={onInputBlur}/>
        </div>

        <div className="e-input-group e-error">
        <input className="e-input" type="text" placeholder="Input with error" onFocus={onInputFocus} onBlur={onInputBlur}/>
        </div>

        <div className="e-input-group e-success">
        <input className="e-input" type="text" placeholder="Input with success" onFocus={onInputFocus} onBlur={onInputBlur}/>
        </div>
    </div>);
    function onInputFocus(args) {
        if (!args.target.parentElement.classList.contains('e-input-in-wrap')) {
            args.target.parentElement.classList.add('e-input-focus');
        }
        else {
            args.target.parentElement.parentElement.classList.add('e-input-focus');
        }
    }
    function onInputBlur(args) {
        if (!args.target.parentElement.classList.contains('e-input-in-wrap')) {
            args.target.parentElement.classList.remove('e-input-focus');
        }
        else {
            args.target.parentElement.parentElement.classList.remove('e-input-focus');
        }
    }
}
ReactDOM.render(<Default />, document.getElementById('input-container'));
