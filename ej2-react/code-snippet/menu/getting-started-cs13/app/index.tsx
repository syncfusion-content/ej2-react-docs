

import { enableRipple } from '@syncfusion/ej2-base';
import { MenuComponent, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);

function App() {
    // Menu items definition
    let menuItems: MenuItemModel[] = [
        {
            items: [
                {
                    items: [
                        {
                            items: [
                                { text: 'Trimmers' },
                                { text: 'Shavers' }
                            ],
                            text: 'Personal Care'
                        },
                        {
                            items: [
                                { text: 'Shirts' },
                                { text: 'Jackets' },
                                { text: 'Track Suits' }
                            ],
                            text: 'Clothing'
                        },
                        { text: 'Footwear' }
                    ],
                    text: 'Men Fashion'
                },
                {
                    items: [
                        {
                            items: [
                                { text: 'Kurtas' },
                                { text: 'Salwars' },
                                { text: 'Sarees' }
                            ],
                            text: 'Clothing'
                        },
                        {
                            items: [
                                { text: 'Nosepins' },
                                { text: 'Anklets' }
                            ],
                            text: 'Jewellery'
                        }
                    ],
                    text: 'Women Fashion'
                }
            ],
            text: 'Fashion'
        },
        {
            items: [
                {
                    items: [
                        { text: 'Fully Automatic' },
                        { text: 'Semi Automatic' }
                    ],
                    text: 'Washing Machine'
                },
                {
                    items: [
                        { text: 'Inverter ACs' },
                        { text: 'Split ACs' }
                    ],
                    text: 'Air Conditioners'
                }
            ],
            text: 'Home & Living'
        },
        { text: 'Accessories' },
        { text: 'Sports' },
        { text: 'Gaming' }
    ];

    return (
        <MenuComponent items={menuItems} />
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));


