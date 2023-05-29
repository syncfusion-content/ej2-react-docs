import * as React from "react";
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.onKeyup = this.onKeyup.bind(this);
    }
    onKeyup(e) {
        const str = e.target.value.match(/^[0-9]+$/);
        if (!((str && str.length > 0)) && e.target.value.length) {
            e.target.parentNode.classList.add('e-error');
        }
        else {
            e.target.parentNode.classList.remove('e-error');
        }
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
    render() {
        return (<div className="wrap">
            <label> Normal Input </label>
                <div className="e-input-group">
                    <input className="e-input" id="numericOnly" type="text" placeholder="Enter numeric values" onKeyUp={this.onKeyup} onFocus={this.onInputFocus} onBlur={this.onInputBlur}/>
                </div>
                <label> Floating Input </label>
                <div className="e-float-input e-input-group">
                    <input type="text" onKeyUp={this.onKeyup} required={true} onFocus={this.onInputFocus} onBlur={this.onInputBlur}/>
                    <span className="e-float-line"/>
                    <label className="e-float-text">Enter numeric values</label>
                </div>
            </div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('input-container'));
