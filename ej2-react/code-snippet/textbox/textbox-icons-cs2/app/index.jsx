import * as React from "react";
import * as ReactDOM from "react-dom";
function Default() {
    return (<div>
        <h4> TextBox with icons </h4>

            <div className="e-input-group ">
                <input className="e-input" type="text" onFocus={onInputFocus} onBlur={onInputBlur} placeholder="Enter Date"/>
                <span className="e-input-group-icon e-input-popup-date" onMouseDown={onIconMouseDown} onMouseUp={onIconMouseUp}/>
            </div>

            <div className="e-input-group e-float-icon-left">
                <span className="e-input-group-icon e-input-date" onMouseDown={onIconMouseDown} onMouseUp={onIconMouseUp}/>
                <div className="e-input-in-wrap">
                    <input className="e-input" type="text" onFocus={onInputFocus} onBlur={onInputBlur} placeholder="Enter Date"/>
                </div>
            </div>

            <div className="e-input-group e-float-icon-left">
                <span className="e-input-group-icon e-input-date" onMouseDown={onIconMouseDown} onMouseUp={onIconMouseUp}/>
                <div className="e-input-in-wrap">
                    <input className="e-input" type="text" onFocus={onInputFocus} onBlur={onInputBlur} placeholder="Enter Date"/>
                    <span className="e-input-group-icon e-input-down"/>
                </div>
            </div>

            <h4> Floating label with icons </h4>

            <div className="e-float-input e-input-group">
                <input required={true} type="text" onFocus={onInputFocus} onBlur={onInputBlur}/>
                <span className="e-float-line"/>
                <label className="e-float-text"> Enter Date </label>
                <span className="e-input-group-icon e-input-popup-date" onMouseDown={onIconMouseDown} onMouseUp={onIconMouseUp}/>
            </div>

            <div className="e-float-input e-input-group e-float-icon-left">
                <span className="e-input-group-icon e-input-date" onMouseDown={onIconMouseDown} onMouseUp={onIconMouseUp}/>
                <div className="e-input-in-wrap">
                    <input required={true} type="text" onFocus={onInputFocus} onBlur={onInputBlur}/>
                    <span className="e-float-line"/>
                    <label className="e-float-text"> Enter Date </label>
                </div>
            </div>

            <div className="e-float-input e-input-group e-float-icon-left">
                <span className="e-input-group-icon e-input-date" onMouseDown={onIconMouseDown} onMouseUp={onIconMouseUp}/>
                <div className="e-input-in-wrap">
                    <input required={true} type="text" onFocus={onInputFocus} onBlur={onInputBlur}/>
                    <span className="e-float-line"/>
                    <label className="e-float-text"> Enter Date </label>
                    <span className="e-input-group-icon e-input-down"/>
                </div>
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
