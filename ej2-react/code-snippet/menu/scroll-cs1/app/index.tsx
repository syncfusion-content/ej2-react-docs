

import { closest, enableRipple } from '@syncfusion/ej2-base';
import { BeforeOpenCloseMenuEventArgs, MenuComponent, MenuItemModel } from '@syncfusion/ej2-react-navigations';
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
                        { text: 'Electric Cookers' },
                        { text: 'Coffee Makers' },
                        { text: 'Blenders' },
                        { text: 'Microwave Ovens' }
                    ],
                    text: 'Kitchen'
                },
                {
                    items: [
                        { text: 'Our Exclusive TVs' },
                        { text: 'Smart TVs' },
                        { text: 'Big Screen TVs' }
                    ],
                    text: 'Television'
                },
                {
                    text: 'Washing Machine'
                },
                {
                    text: 'Refrigerators'
                },
                {
                    items: [
                        { text: 'Inverter ACs' },
                        { text: 'Split ACs' },
                        { text: 'Window ACs' },
                    ],
                    text: 'Air Conditioners'
                },
                {
                    text: 'Water Purifiers'
                },
                {
                    text: 'Air Purifiers'
                },
                {
                    text: 'Chimneys'
                },
                {
                    text: 'Inverters'
                },
                {
                    text: 'Healthy Living'
                },
                {
                    text: 'Vacuum Cleaners'
                },
                {
                    text: 'Room Heaters'
                },
                {
                    text: 'New Launches'
                }
            ],
            text: 'Appliances'
        },
        {
            items: [
                {
                    items: [
                        { text: 'Headphones' },
                        { text: 'Memory Cards' },
                        { text: 'Power Banks' },
                        { text: 'Mobile Cases' },
                        { text: 'Screen Protectors' }
                    ],
                     text: 'Mobile'
                },
                {
                    text: 'Laptops'
                },
                {
                    items: [
                        { text: 'Pendrives' },
                        { text: 'External Hard Disks' },
                        { text: 'Monitors' },
                        { text: 'Keyboards' }
                    ],
                    text: 'Desktop PC'
                },
                {
                    items: [
                        { text: 'Lens' },
                        { text: 'Tripods' }
                    ],
                    text: 'Camera'
                }
            ],
            text: 'Accessories'
        },
        {
            items: [
                {
                    text: 'Men'
                },
                {
                    text: 'Women'
                }
            ],
             text: 'Fashion'
        },
        {
            items: [
                {
                    text: 'Furniture'
                },
                {
                    text: 'Decor'
                },
                {
                    text: 'Smart Home Automation'
                },
                {
                    text: 'Dining & Serving'
                }
            ],
            text: 'Home & Living'
        },
        {
            items: [
                {
                    text: 'Televisions'
                },
                {
                    text: 'Home Theatres'
                },
                {
                    text: 'Gaming Laptops'
                }
            ],
             text: 'Entertainment'
        },
        {
            text: 'Contact Us'
        },
        {
            text: 'Help'
        }
    ];

    function onBeforeOpen(args: BeforeOpenCloseMenuEventArgs) {
        // Restricting sub menu wrapper height
        if (args.parentItem.text === 'Appliances') {
            (closest(args.element, '.e-menu-wrapper') as HTMLElement).style.height = '230px';
        }
    }

    return (
        <MenuComponent items={menuItems} cssClass='e-scrollable-menu' enableScrolling={true} beforeOpen={onBeforeOpen}/>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));


