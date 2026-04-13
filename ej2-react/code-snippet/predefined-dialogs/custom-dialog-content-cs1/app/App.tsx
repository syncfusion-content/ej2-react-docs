


import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogUtility } from '@syncfusion/ej2-react-popups';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";

class App extends React.Component<{}, {}> {
constructor(props: {}) {
        super(props);
        this.state = { };
    }
public buttonClick() {
    DialogUtility.confirm({
      title: 'Join Chat Group',
      content:
        '<p>Enter your name:</p><input class="e-input" placeholder="Type here.." />',
      width: '300px',
    });
}
public render() {
  return (
  <div className="App" id='dialog-target'>
        <ButtonComponent id="promptBtn" isPrimary onClick={this.buttonClick.bind(this)}>Prompt</ButtonComponent>
  </div>);
   }
}
export default App;



