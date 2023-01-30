import * as React from "react";
import * as ReactDOM from "react-dom";
function Default() {
    return (<div>
    <h4> Normal Size </h4>

    <div className="e-input-group">
      <input className="e-input" type="text" placeholder="Enter Name" onFocus={onInputFocus} onBlur={onInputBlur}/>
    </div>

    <div className="e-float-input">
      <input type='text' required={true} onFocus={onInputFocus} onBlur={onInputBlur}/>
      <span className="e-float-line"/>
      <label className="e-float-text">Enter Name</label>
    </div>

    <div className="e-input-group">
      <input className="e-input" type="text" placeholder="Enter Date" onFocus={onInputFocus} onBlur={onInputBlur}/>
      <span className="e-input-group-icon e-input-popup-date" onMouseDown={onIconMouseDown} onMouseUp={onIconMouseUp}/>
    </div>

    <h4> Small Size </h4>

    <div className="e-input-group e-small">
      <input className="e-input" type="text" placeholder="Enter Name" onFocus={onInputFocus} onBlur={onInputBlur}/>
    </div>

    <div className="e-float-input e-small">
      <input type='text' required={true} onFocus={onInputFocus} onBlur={onInputBlur}/>
      <span className="e-float-line"/>
      <label className="e-float-text">Enter Name</label>
    </div>

    <div className="e-input-group e-small">
      <input className="e-input" type="text" placeholder="Enter Date" onFocus={onInputFocus} onBlur={onInputBlur}/>
      <span className="e-input-group-icon e-input-popup-date" onMouseDown={onIconMouseDown} onMouseUp={onIconMouseUp}/>
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
    function onIconMouseDown(args) {
        args.persist();
        setTimeout(() => {
            args.target.classList.add('e-input-btn-ripple');
        }, 300);
    }
    function onIconMouseUp(args) {
        args.target.classList.remove('e-input-btn-ripple');
    }
}
ReactDOM.render(<Default />, document.getElementById('input-container'));
