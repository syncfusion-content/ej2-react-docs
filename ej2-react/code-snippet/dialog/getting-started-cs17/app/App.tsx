

import { L10n } from '@syncfusion/ej2-base';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from "react";

// Load French culture for Dialog close button tooltip text
L10n.load({
  'fr-BE': {
     'dialog': {
           'close': "Fermer"
       }
   }
});

class App extends React.Component<{}, {}> {
  public content = (): JSX.Element => {
      return (
        <div>
        Dialogue avec la culture française
        </div>
      )
  }
  public render() {
    return (
      <div className="App" id='dialog-target'>
    <DialogComponent
    width='250px' locale= 'fr-BE' content={this.content} header='Dialog' closeOnEscape={false}
    showCloseIcon={true} target='#dialog-target'/>
      </div>
  );
  }
}
export default App;



