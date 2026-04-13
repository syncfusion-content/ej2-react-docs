

import { enableRipple } from '@syncfusion/ej2-base';
import { FieldSettingsModel, MenuComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);

function App() {
    let menuObj: MenuComponent;

    // Menu data source
    let data: Array<{ [key: string]: any }> = [
        {
            continent: 'Asia',
            countries: [
                { country: 'China' },
                { country: 'India' },
                { country: 'Japan' }
            ]
        },
        {
            continent: 'North America',
            countries: [
                { country: 'Canada' },
                { country: 'Mexico' },
                { country: 'USA' }
            ]
        },
        {
            continent: 'South America',
            countries: [
                { country: 'Brazil' },
                { country: 'Colombia' },
                { country: 'Argentina' }
            ]
        },
        {
            continent: 'Oceania',
            countries: [
                { country: 'Australia' },
                { country: 'New Zealand' },
                { country: 'Samoa' },
            ]
        },
        { continent: 'Antarctica' }
    ];

    // Menu fields definition
    let menuFields: FieldSettingsModel = {
        children: ['countries'],
        text: ['continent', 'country'],
    };

    function created(): void {
        let insertItem: Array<{ [key: string]: any }> = [
            {
                continent: 'Europe',
                countries: [
                    { country: 'Finland' },
                    { country: 'Austria' }
                ]
            }
        ];
        // Add items before to 'Oceania'
        menuObj.insertBefore(insertItem, 'Oceania', false);

        insertItem = [
            {
                continent: 'Africa',
                countries: [
                    { country: 'Nigeria' }
                ]
            }
        ];

        // Add items after to 'Asia'
        menuObj.insertAfter(insertItem, 'Asia', false);

        // Remove items
        menuObj.removeItems(['South America', 'Mexico'], false);
    }

    return (
        <MenuComponent ref={scope => menuObj = scope} items={data} fields={menuFields} created={created}/>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));


