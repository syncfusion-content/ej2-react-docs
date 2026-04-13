{% raw %}


import { enableRipple } from '@syncfusion/ej2-base';
import { FieldSettingsModel, ItemDirective, ItemsDirective, MenuComponent, ToolbarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {
    let tbObj: ToolbarComponent;

    // Menu items definition
    let data: Array<{[key: string]: any }> = [
        {
            header: 'Events',
            subItems: [
                { text: 'Conferences' },
                { text: 'Music' },
                { text: 'Workshops' }
            ]
        },
        {
            header: 'Movies',
            subItems: [
                { text: 'Now Showing' },
                { text: 'Coming Soon' }
            ]
        },
        {
            header: 'Directory',
            subItems: [
                { text: 'Media Gallery' },
                { text: 'Newsletters' }
            ]
        },
        {
            header: 'Queries',
            subItems: [
                { text: 'Our Policy' },
                { text: 'Site Map'},
                { text: '24x7 Support'}
            ]
        },
        { header: 'Services' }
    ];

    let menuFields: FieldSettingsModel = {
        children: ['subItems', 'options'],
        text: ['header', 'text', 'value']
    };

    let animation: any = { effect: 'None' };

    function menuTemplate(): JSX.Element {
        return (
            <MenuComponent id="menu" items={data} fields={menuFields} animationSettings={animation} />
        );
    }

    function onCreated(): void {
        tbObj.refreshOverflow();
    }

    return (
        <div className="toolbar-menu-control">
            <ToolbarComponent id="toolbar" created={onCreated} ref={(scope) => { tbObj = scope as ToolbarComponent; }} >
                <ItemsDirective>
                    <ItemDirective template={menuTemplate} />
                    <ItemDirective prefixIcon='em-icons e-shopping-cart' align='Right' />
                </ItemsDirective>
            </ToolbarComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));


{% endraw %}