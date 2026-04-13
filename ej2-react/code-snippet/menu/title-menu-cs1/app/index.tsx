

import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { MenuComponent, MenuEventArgs, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);

function App() {
    let menuItems: MenuItemModel[] = [
        {
            id: 'settingIcon',
            iconCss: 'em-icons e-file',
            items: [
                { text: 'Open',
                  items: [
                      { text: 'Sub Option1' },
                      { text: 'Sub Option2' },
                  ]
                },
                { text: 'Save' },
                { separator: true },
                { text: 'Exit' }
            ]
        }
    ];

    function beforeItemRender(args: MenuEventArgs): void {
        if (args.item.id == 'settingIcon') {
        args.element.setAttribute('title', 'Settings');
      }
    }

    return (
        <MenuComponent items={menuItems}  beforeItemRender={beforeItemRender}/>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));


