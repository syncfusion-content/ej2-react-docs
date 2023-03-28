import * as React from "react";
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    textboxInstance;
    constructor(props) {
        super(props);
        this.onFocusOut = this.onFocusOut.bind(this);
        this.onFocusIn = this.onFocusIn.bind(this);
        this.onInputEvt = this.onInputEvt.bind(this);
    }
    onFocusOut(args) {
        /* Update the label position based on Input value */
        this.updateLabelState(args.target.value, args.target.parentElement.querySelector('.e-float-text'));
    }
    onFocusIn(args) {
        const label = args.target.parentElement.querySelector('.e-float-text');
        label.classList.add('e-label-bottom');
        label.classList.remove('e-label-top');
    }
    onInputEvt(args) {
        /* Update the label position based on Input value */
        this.updateLabelState(args.target.value, args.target.parentElement.querySelector('.e-float-text'));
    }
    /* Update the label position based on Input value */
    updateLabelState(value, label) {
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
    render() {
        return (<div className="inner-container">
                <h4> Floating label without required attribute </h4>
                <div className="e-float-input">
                  <input id='inpt1' type="text" onInput={this.onInputEvt} onFocus={this.onFocusIn} onBlur={this.onFocusOut} ref={e => this.textboxInstance = e}/>
                  <span className="e-float-line"/>
                  <label className="e-float-text">First Name</label>
                </div>
            </div>);
    }
    componentDidMount() {
        /* Update the label position based on initial input value */
        this.updateLabelState(this.textboxInstance.value, this.textboxInstance.parentElement.querySelector('.e-float-text'));
    }
}
;
ReactDOM.render(<App />, document.getElementById('input-container'));
