import * as React from "react";
import * as ReactDOM from "react-dom";
export default class Default extends React.Component {
    render() {
        return (<div>
        <input className="e-input" type="text" placeholder="Enter Name" value="John" readOnly={true}/>

        <div className="e-float-input">
    <input type='text' required={true} readOnly={true} value="John" onFocus={this.onInputFocus} onBlur={this.onInputBlur}/>
    <span className="e-float-line"/>
    <label className="e-float-text e-label-top">Enter Name</label>
        </div>
        </div>);
    }
    onInputFocus(args) {
        if (!args.target.parentElement.classList.contains('e-input-in-wrap')) {
            args.target.parentElement.classList.add('e-input-focus');
        }
        else {
            args.target.parentElement.parentElement.classList.add('e-input-focus');
        }
    }
    onInputBlur(args) {
        if (!args.target.parentElement.classList.contains('e-input-in-wrap')) {
            args.target.parentElement.classList.remove('e-input-focus');
        }
        else {
            args.target.parentElement.parentElement.classList.remove('e-input-focus');
        }
    }
}
ReactDOM.render(<Default />, document.getElementById('input-container'));
