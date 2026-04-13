import { DialogUtility } from '@syncfusion/ej2-popups';
import * as React from "react";
class App extends React.Component {
    buttonClick() {
        DialogUtility.confirm({
            animationSettings: { effect: 'Zoom' },
            cancelButton: { text: 'Cancel', click: this.cancelClick.bind(this) },
            closeOnEscape: true,
            content: "This is a Confirmation Dialog!",
            okButton: { text: 'OK', click: this.okClick.bind(this) },
            showCloseIcon: true,
            title: ' Confirmation Dialog',
        });
    }
    okClick() {
        alert('you clicked OK button');
    }
    cancelClick() {
        alert('you clicked Cancel button');
    }
    render() {
        return (<button className="e-control e-btn" onClick={this.buttonClick = this.buttonClick.bind(this)} id="targetButton" role="button">Open Confirm Dialog</button>);
    }
}
export default App;
