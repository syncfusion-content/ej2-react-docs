

import { enableRipple } from '@syncfusion/ej2-base';
import { BeforeOpenCloseMenuEventArgs } from '@syncfusion/ej2-navigations';
import { ContextMenuComponent, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {
  let cmenuInstance: ContextMenuComponent;
  let menuItems: MenuItemModel[] = [
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
    }];

  function beforeOpen(args: BeforeOpenCloseMenuEventArgs) {
      if ((args.event.target as HTMLElement).id === 'right') {
        cmenuInstance.hideItems(['Cut', 'Copy', 'Paste']);
        cmenuInstance.showItems(['Add', 'Edit', 'Delete']);
      } else if ((args.event.target as HTMLElement).id === 'left') {
        cmenuInstance.showItems(['Cut', 'Copy', 'Paste']);
        cmenuInstance.hideItems(['Add','Edit','Delete']);
      }
  }

  return (
          <div className="container">
            <div id="target">
                <div id='right' className='e-div'>Editor</div>
                <div id='left' className='e-div'>Clipboard</div>
            </div>
            <ContextMenuComponent id='contextmenu' target='#target' ref={cmenu => cmenuInstance = cmenu as ContextMenuComponent}
            items={menuItems} beforeOpen={beforeOpen}/>
          </div>
      );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));


