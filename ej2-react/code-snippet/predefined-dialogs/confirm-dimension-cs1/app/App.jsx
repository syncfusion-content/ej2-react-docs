import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogUtility } from '@syncfusion/ej2-react-popups';
import * as React from "react";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    buttonClick() {
        DialogUtility.confirm({
            title: 'Delete Multiple Items',
            content: 'Are you sure you want to permanently delete these items?',
            width: '300px',
            height: '200px'
        });
    }
    render() {
        return (<div className="App" id='dialog-target'>
       <ButtonComponent id="confirmBtn" cssClass="e-success" onClick={this.buttonClick.bind(this)}>Confirm</ButtonComponent>
  </div>);
    }
}
export default App;
