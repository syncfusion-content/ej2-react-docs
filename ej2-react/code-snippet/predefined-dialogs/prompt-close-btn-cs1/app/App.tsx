


import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogUtility } from '@syncfusion/ej2-react-popups';
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
        '<p>Enter your name:</p> <input type="text" name="Required" class="e-input" placeholder="Type here.." />',
      width: '300px',
      showCloseIcon : true,
      closeOnEscape : true
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



