

import * as React from "react";
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <div className="wrap">
            <label> Normal Input </label>
            <div className="e-input-group">
                <input className="e-input" onFocus= {this.floatFocus} onBlur= {this.floatBlur} type="text" placeholder="First Name"/>
            </div>
            <label> Floating Input </label>
            <div className="e-float-input">
                <input type="text" required={true} />
                <span className="e-float-line"/>
                <label className="e-float-text">Last Name</label>
            </div>
        </div>
        );
    }
    private floatFocus(args: React.FocusEvent): void {
        ((args.target as HTMLElement).parentElement as HTMLElement).classList.add('e-input-focus');
    }
    private floatBlur(args: React.FocusEvent): void {
        ((args.target as HTMLElement).parentElement as HTMLElement).classList.remove('e-input-focus');
    }
}
ReactDOM.render(<App />, document.getElementById('input-container'));



