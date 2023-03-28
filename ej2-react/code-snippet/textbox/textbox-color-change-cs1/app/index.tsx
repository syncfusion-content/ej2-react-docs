

import * as React from "react";
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
        constructor(props: any) {
            super(props);
            this.onKeyup = this.onKeyup.bind(this);
        }
    public onKeyup(e: React.KeyboardEvent) {
      const str = (e.target as HTMLInputElement).value.match(/^[0-9]+$/);
      if (!((str && str.length > 0)) && (e.target as HTMLInputElement).value.length) {
        ((e.target as HTMLInputElement).parentNode as HTMLElement).classList.add('e-error');
      } else {
        ((e.target as HTMLInputElement).parentNode as HTMLElement).classList.remove('e-error');
      }
    }

    public onInputFocus(args: React.FocusEvent) {
        if (!((args.target as HTMLElement).parentElement as HTMLElement).classList.contains('e-input-in-wrap')) {
            ((args.target as HTMLElement).parentElement as HTMLElement).classList.add('e-input-focus');
        } else {
            (((args.target as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement).classList.add('e-input-focus')
        }
    }

    public onInputBlur(args: React.FocusEvent) {
        if (!((args.target as HTMLElement).parentElement as HTMLElement).classList.contains('e-input-in-wrap')) {
            ((args.target as HTMLElement).parentElement as HTMLElement).classList.remove('e-input-focus');
        } else {
            (((args.target as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement).classList.remove('e-input-focus');
        }
    }

        public render() {
        return (
            <div className="wrap">
            <label> Normal Input </label>
                <div className="e-input-group">
                    <input className="e-input" id="numericOnly" type="text" placeholder="Enter numeric values" onKeyUp={this.onKeyup} onFocus = {this.onInputFocus} onBlur = {this.onInputBlur}/>
                </div>
                <label> Floating Input </label>
                <div className="e-float-input e-input-group">
                    <input type="text" onKeyUp={this.onKeyup} required = {true} onFocus = {this.onInputFocus} onBlur = {this.onInputBlur}/>
                    <span className="e-float-line"/>
                    <label className="e-float-text">Enter numeric values</label>
                </div>
            </div>
        )
    }
};
ReactDOM.render(<App />, document.getElementById('input-container'));



