import { enableRipple } from '@syncfusion/ej2-base';
import { ContextMenuComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
function App() {
    let cmenuInstance;
    let menuItems = [
        {
            text: 'Cut'
        },
        {
            text: 'Copy'
        },
        {
            text: 'Paste'
        },
        {
            text: 'Add'
        },
        {
            text: 'Edit'
        },
        {
            text: 'Delete'
        }
    ];
    function beforeOpen(args) {
        if (args.event.target.id === 'right') {
            cmenuInstance.hideItems(['Cut', 'Copy', 'Paste']);
            cmenuInstance.showItems(['Add', 'Edit', 'Delete']);
        }
        else if (args.event.target.id === 'left') {
            cmenuInstance.showItems(['Cut', 'Copy', 'Paste']);
            cmenuInstance.hideItems(['Add', 'Edit', 'Delete']);
        }
    }
    return (<div className="container">
            <div id="target">
                <div id='right' className='e-div'>Editor</div>
                <div id='left' className='e-div'>Clipboard</div>
            </div>
            <ContextMenuComponent id='contextmenu' target='#target' ref={cmenu => cmenuInstance = cmenu} items={menuItems} beforeOpen={beforeOpen}/>
          </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
