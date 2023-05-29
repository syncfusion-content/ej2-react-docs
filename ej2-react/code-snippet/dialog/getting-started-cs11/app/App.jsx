import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";
class App extends React.Component {
    render() {
        return (<div className="App" id='dialog-target'>
          <DialogComponent width='250px' target='#dialog-target' showCloseIcon={true} header='Dialog' closeOnEscape={false}>
          This is a dialog with header </DialogComponent>
      </div>);
    }
}
export default App;
