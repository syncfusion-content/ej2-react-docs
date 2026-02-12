import { enableRipple } from '@syncfusion/ej2-base';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { DropDownButtonComponent, ItemModel, MenuEventArgs } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);

// To render DropDownButton.
function App() {
  let position: any = { X: 100, Y: 100 };
  let dialog: DialogComponent;
  let alertDlgButtons: any = [{
    buttonModel: {
      content: 'Submit',
      cssClass: 'e-flat',
      isPrimary: true
    },
    'click': () => {
      dialog.hide()
    }
  }];
  let items: ItemModel[] = [
    {
      text: 'Archive'
    },
    {
      text: 'Inbox'
    },
    {
      text: 'HR Portal'
    },
    {
      separator: true
    },
    {
      text: 'Other Folder...'
    },
    {
      text: 'Copy to Folder'
    }];
  // To open dialog on selecting `Other Folder...` item.
  function onSelect(args: MenuEventArgs) {
    if (args.item.text === 'Other Folder...') {
      dialog.show();
    }
  }

  return (
    <div>
      <DialogComponent ref={(scope) => { dialog = scope as DialogComponent; }} width='250px' id='dialog' content='Move Items To "Web Team"' header='Move Items' buttons={alertDlgButtons} position={position} visible={false} />
      <DropDownButtonComponent items={items} select={onSelect} iconCss='ddb-icons e-folder' cssClass='e-vertical' iconPosition='Top'>Move</DropDownButtonComponent>
    </div>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));