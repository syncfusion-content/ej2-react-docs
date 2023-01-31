import { enableRipple } from '@syncfusion/ej2-base';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { SplitButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
// To render SplitButton.
function App() {
    let dialogRef;
    let items = [
        {
            text: 'Help'
        },
        {
            text: 'About'
        },
        {
            text: 'Update...'
        }
    ];
    let alertDlgButtons = [{
            buttonModel: {
                content: 'Ok',
                isPrimary: true
            },
            'click': () => {
                hide();
            }
        },
        {
            buttonModel: {
                content: 'Cancel',
                isPrimary: true
            },
            'click': () => {
                hide();
            }
        }];
    function hide() {
        dialogRef.hide();
    }
    function select(args) {
        if (args.item.text === 'Update...') {
            dialogRef.show();
        }
    }
    return (<div>
       <DialogComponent ref={dialog => dialogRef = dialog} width='250px' id='dialog' content='Are you sure want to update?' header='Software Update' buttons={alertDlgButtons} visible={false}/>
       <SplitButtonComponent items={items} select={select}>Help</SplitButtonComponent>
      </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));
