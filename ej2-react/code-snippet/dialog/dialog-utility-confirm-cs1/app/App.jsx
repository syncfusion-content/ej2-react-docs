import { DialogUtility } from '@syncfusion/ej2-popups';
import * as React from "react";
class App extends React.Component {
    buttonClick() {
        DialogUtility.confirm('This is a Confirmation Dialog!');
    }
    render() {
        return (<button className="e-control e-btn" onClick={this.buttonClick = this.buttonClick.bind(this)} id="targetButton" role="button">Open Confirm Dialog</button>);
    }
}
export default App;
