

import { enableRipple } from '@syncfusion/ej2-base';
import { FieldSettingsModel, MenuComponent,  } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {
    let dataSource: Array<{ [key: string]: any }> = [
        {
            continent: 'Asia',
            countries: [
                {
                    country: 'China',
                    languages: [
                        { language: 'Chinese' },
                        { language: 'Cantonese' }
                    ]
                },
                {
                    country: 'India',
                    languages: [
                        { language: 'English' },
                        { language: 'Hindi' },
                        { language: 'Tamil' }
                    ]
                },
                {
                    country: 'Japan',
                    languages: [
                        { language: 'Japanese' }
                    ]
                }
            ]
        },
        {
            continent: 'Africa',
            countries: [
                {
                    country: 'Nigeria',
                    languages: [
                        { language: 'English' },
                        { language: 'Hausa' }
                    ]
                },
                {
                    country: 'Egypt',
                    languages: [
                        { language: 'Arabic' }
                    ]
                },
                {
                    country: 'South Africa',
                    languages: [
                        { language: 'Tswana' },
                        { language: 'Swati' }
                    ]
                }
            ]
        },
        {
            continent: 'North America',
            countries: [
                {
                    country: 'Canada',
                    languages: [
                        { language: 'French' }
                    ]
                },
                {
                    country: 'Mexico',
                    languages: [
                        { language: 'Spanish' }
                    ]
                },
                {
                    country: 'USA',
                    languages: [
                        { language: 'English' }
                    ]
                }
            ]
        },
        {
            continent: 'South America',
            countries: [
                {
                    country: 'Brazil',
                    languages: [
                        { language: 'Portuguese' }
                    ]
                },
                {
                    country: 'Colombia',
                    languages: [
                        { language: 'Spanish' }
                    ]
                },
                {
                    country: 'Argentina',
                    languages: [
                        { language: 'Spanish' }
                    ]
                }
            ]
        },
        {
            continent: 'Oceania',
            countries: [
                {
                    country: 'Australia'
                },
                {
                    country: 'New Zealand'
                },
                {
                    country: 'Samoa'
                },
            ]
        }];

    // Menu fields definition
    let menuFields: FieldSettingsModel = {
        children: ['countries', 'languages'],
        text: ['continent', 'country', 'language']
    };

    return (
        <MenuComponent items={dataSource} fields={menuFields}/>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));


