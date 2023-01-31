import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    let textboxInstance;
    function onFocusOut(args) {
        /* Update the label position based on Input value */
        updateLabelState(args.target.value, args.target.parentElement.querySelector('.e-float-text'));
    }
    function onFocusIn(args) {
        const label = args.target.parentElement.querySelector('.e-float-text');
        label.classList.add('e-label-bottom');
        label.classList.remove('e-label-top');
    }
    function onInputEvt(args) {
        /* Update the label position based on Input value */
        updateLabelState(args.target.value, args.target.parentElement.querySelector('.e-float-text'));
    }
    /* Update the label position based on Input value */
    function updateLabelState(value, label) {
        /* e-label-top - Float the label above of the Input */
        /* e-label-bottom - Move the label to the Input */
        if (value) {
            label.classList.add('e-label-top');
            label.classList.remove('e-label-bottom');
        }
        else {
            label.classList.add('e-label-bottom');
            label.classList.remove('e-label-top');
        }
    }
    return (<div className="inner-container">
                <h4> Floating label without required attribute </h4>
                <div className="e-float-input">
                  <input id='inpt1' type="text" onInput={onInputEvt} onFocus={onFocusIn} onBlur={onFocusOut} ref={e => e.textboxInstance = e}/>
                  <span className="e-float-line"/>
                  <label className="e-float-text">First Name</label>
                </div>
            </div>);
    React.useEffect(() => {
        /* Update the label position based on initial input value */
        updateLabelState(textboxInstance.value, textboxInstance.parentElement.querySelector('.e-float-text'));
        [];
    });
}
;
ReactDOM.render(<App />, document.getElementById('input-container'));
