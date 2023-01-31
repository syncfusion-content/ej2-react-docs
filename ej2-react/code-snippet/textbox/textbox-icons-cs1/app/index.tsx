

import * as React from "react";
import * as ReactDOM from "react-dom";

export default class Default extends React.Component {

public render() {
   return (
    <div>

    <h4> TextBox with icons </h4>

    <div className="e-input-group ">
        <input className="e-input" type="text" onFocus = {this.onInputFocus} onBlur = {this.onInputBlur} placeholder="Enter Date"/>
        <span className="e-input-group-icon e-input-popup-date" onMouseDown = {this.onIconMouseDown} onMouseUp = {this.onIconMouseUp}/>
    </div>

    <div className="e-input-group e-float-icon-left">
        <span className="e-input-group-icon e-input-date" onMouseDown = {this.onIconMouseDown} onMouseUp = {this.onIconMouseUp}/>
        <div className="e-input-in-wrap">
            <input className="e-input" type="text" onFocus = {this.onInputFocus} onBlur = {this.onInputBlur} placeholder="Enter Date"/>
        </div>
    </div>

    <div className="e-input-group e-float-icon-left">
        <span className="e-input-group-icon e-input-date" onMouseDown = {this.onIconMouseDown} onMouseUp = {this.onIconMouseUp}/>
        <div className="e-input-in-wrap">
            <input className="e-input" type="text" onFocus = {this.onInputFocus} onBlur = {this.onInputBlur} placeholder="Enter Date"/>
            <span className="e-input-group-icon e-input-down"/>
        </div>
    </div>

    <h4> Floating label with icons </h4>

    <div className="e-float-input e-input-group">
        <input required = {true} type="text" onFocus = {this.onInputFocus} onBlur = {this.onInputBlur} />
        <span className="e-float-line"/>
        <label className="e-float-text"> Enter Date </label>
        <span className="e-input-group-icon e-input-popup-date" onMouseDown = {this.onIconMouseDown} onMouseUp = {this.onIconMouseUp}/>
    </div>

    <div className="e-float-input e-input-group e-float-icon-left">
        <span className="e-input-group-icon e-input-date" onMouseDown = {this.onIconMouseDown} onMouseUp = {this.onIconMouseUp}/>
        <div className="e-input-in-wrap">
            <input required = {true} type="text" onFocus = {this.onInputFocus} onBlur = {this.onInputBlur} />
            <span className="e-float-line"/>
            <label className="e-float-text"> Enter Date </label>
        </div>
    </div>

    <div className="e-float-input e-input-group e-float-icon-left">
        <span className="e-input-group-icon e-input-date" onMouseDown = {this.onIconMouseDown} onMouseUp = {this.onIconMouseUp}/>
        <div className="e-input-in-wrap">
            <input required = {true} type="text" onFocus = {this.onInputFocus} onBlur = {this.onInputBlur} />
            <span className="e-float-line"/>
            <label className="e-float-text"> Enter Date </label>
            <span className="e-input-group-icon e-input-down"/>
        </div>
    </div>
</div>
);
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

public onIconMouseDown(args: React.MouseEvent) {
    args.persist();
    setTimeout(
        () => {
            (args.target as HTMLElement).classList.add('e-input-btn-ripple');
        },
    300);
}

public onIconMouseUp(args: React.MouseEvent) {
    (args.target as HTMLElement).classList.remove('e-input-btn-ripple');
}
}

ReactDOM.render(<Default />, document.getElementById('input-container'));


