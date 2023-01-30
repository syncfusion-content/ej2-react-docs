

import * as React from "react";
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
    public textboxInstance: any;
    constructor(props: any) {
        super(props);
        this.onFocusOut = this.onFocusOut.bind(this);
        this.onFocusIn = this.onFocusIn.bind(this);
        this.onInputEvt = this.onInputEvt.bind(this);
    }

    public onFocusOut(args: React.FocusEvent) {
        /* Update the label position based on Input value */
        this.updateLabelState((args.target as HTMLInputElement).value, ((args.target as HTMLElement).parentElement as HTMLElement).querySelector('.e-float-text') as HTMLElement);
    }

    public onFocusIn(args: React.FocusEvent) {
        const label = ((args.target as HTMLElement).parentElement as HTMLElement).querySelector('.e-float-text') as HTMLElement;
        label.classList.add('e-label-bottom');
        label.classList.remove('e-label-top');
    }
    public onInputEvt(args: React.FormEvent) {
    /* Update the label position based on Input value */
      this.updateLabelState((args.target as HTMLInputElement).value, ((args.target as HTMLElement).parentElement as HTMLElement).querySelector('.e-float-text') as HTMLElement);
    }

    /* Update the label position based on Input value */
    public updateLabelState(value: string ,label: HTMLElement) {

    /* e-label-top - Float the label above of the Input */
    /* e-label-bottom - Move the label to the Input */

        if (value) {
            label.classList.add('e-label-top');
            label.classList.remove('e-label-bottom');
        } else {
            label.classList.add('e-label-bottom');
            label.classList.remove('e-label-top');
        }
    }

    public render() {
        return (
            <div className="inner-container">
                <h4> Floating label without required attribute </h4>
                <div className="e-float-input">
                  <input id='inpt1' type="text" onInput= {this.onInputEvt}  onFocus={this.onFocusIn} onBlur={ this.onFocusOut } ref = {e => this.textboxInstance = e!} />
                  <span className="e-float-line"/>
                  <label className="e-float-text">First Name</label>
                </div>
            </div>
        )
    }

    public componentDidMount() {
        /* Update the label position based on initial input value */
        this.updateLabelState(this.textboxInstance.value, this.textboxInstance.parentElement.querySelector('.e-float-text'));
    }
};
ReactDOM.render(<App />, document.getElementById('input-container'));


