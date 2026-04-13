import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
function App() {
    // define the array of data
    let continents = [
        {
            code: 'AF', name: 'Africa', countries: [
                { code: 'NGA', name: 'Nigeria' },
                { code: 'EGY', name: 'Egypt' },
                { code: 'ZAF', name: 'South Africa' }
            ]
        },
        {
            code: 'AS', name: 'Asia', expanded: true, countries: [
                { code: 'CHN', name: 'China' },
                { code: 'IND', name: 'India', selected: true },
                { code: 'JPN', name: 'Japan' }
            ]
        },
        {
            code: 'EU', name: 'Europe', countries: [
                { code: 'DNK', name: 'Denmark' },
                { code: 'FIN', name: 'Finland' },
                { code: 'AUT', name: 'Austria' }
            ]
        },
        {
            code: 'NA', name: 'North America', countries: [
                { code: 'USA', name: 'United States of America' },
                { code: 'CUB', name: 'Cuba' },
                { code: 'MEX', name: 'Mexico' }
            ]
        },
        {
            code: 'SA', name: 'South America', countries: [
                { code: 'BRA', name: 'Brazil' },
                { code: 'COL', name: 'Colombia' },
                { code: 'ARG', name: 'Argentina' }
            ]
        },
        {
            code: 'OC', name: 'Oceania', countries: [
                { code: 'AUS', name: 'Australia' },
                { code: 'NZL', name: 'New Zealand' },
                { code: 'WSM', name: 'Samoa' }
            ]
        },
        {
            code: 'AN', name: 'Antarctica', countries: [
                { code: 'BVT', name: 'Bouvet Island' },
                { code: 'ATF', name: 'French Southern Lands' }
            ]
        },
    ];
    let field = { dataSource: continents, id: 'code', text: 'name', child: 'countries' };
    return (
    // specifies the tag for render the TreeView component
    <TreeViewComponent fields={field}/>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
