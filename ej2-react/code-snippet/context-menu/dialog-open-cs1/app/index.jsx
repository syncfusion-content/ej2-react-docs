import { ContextMenuComponent } from '@syncfusion/ej2-react-navigations';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from 'react';
import * as ReactDom from 'react-dom';
function App() {
    let dialogInstance;
    let position = { X: 100, Y: 100 };
    let visible = false;
    let buttons = [{
            buttonModel: {
                content: 'Submit',
                cssClass: 'e-flat',
                isPrimary: true
            },
            'click': () => {
                hide();
            }
        }];
    let menuItems = [
        {
            text: 'Back'
        },
        {
            text: 'Forward'
        },
        {
            text: 'Reload'
        },
        {
            separator: true
        },
        {
            text: 'Save As...'
        },
        {
            text: 'Print'
        },
        {
            text: 'Cast'
        }
    ];
    function hide() {
        dialogInstance.hide();
    }
    function select(args) {
        if (args.item.text === 'Save As...') {
            dialogInstance.show();
        }
    }
    return (<div className="container">
            <div id='target'>Right click / Touch hold to open the ContextMenu</div>
            <DialogComponent width='200px' height='110px' content='This file can be saved as PDF' buttons={buttons} visible={visible} position={position} ref={dialog => dialogInstance = dialog}/>
            <ContextMenuComponent id='contextmenu' target='#target' items={menuItems} select={select}/>
        </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
