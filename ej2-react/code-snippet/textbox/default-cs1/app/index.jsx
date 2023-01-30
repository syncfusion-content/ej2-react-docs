import * as React from "react";
import * as ReactDOM from "react-dom";
export default class Default extends React.Component {
    render() {
        return (<div className="e-input-group">
        <input className="e-input" name="input" type="text" onFocus={this.onInputFocus} onBlur={this.onInputBlur} placeholder="Enter Date"/>
        <span className="e-icons e-input-group-icon e-input-popup-date" onMouseDown={this.onIconMouseDown} onMouseUp={this.onIconMouseUp}/>
    </div>);
    }
    onInputFocus(args) {
        args.target.parentElement.classList.add('e-input-focus');
    }
    onInputBlur(args) {
        args.target.parentElement.classList.remove('e-input-focus');
    }
    onIconMouseDown(args) {
        args.persist();
        setTimeout(() => {
            args.target.classList.add('e-input-btn-ripple');
        }, 300);
    }
    onIconMouseUp(args) {
        args.target.classList.remove('e-input-btn-ripple');
    }
}
ReactDOM.render(<Default />, document.getElementById('input-container'));
