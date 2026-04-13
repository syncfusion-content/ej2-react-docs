import { DialogUtility } from '@syncfusion/ej2-popups';
import * as React from "react";
class App extends React.Component {
    buttonClick() {
        DialogUtility.alert('This is an Alert Dialog!');
    }
    render() {
        return (<button className="e-control e-btn" onClick={this.buttonClick} id="targetButton" role="button">Open Alert Dialog</button>);
    }
}
export default App;
