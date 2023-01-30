import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { DatePickerComponent, CalendarComponent } from '@syncfusion/ej2-react-calendars';
function App() {
    const continents = [
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
    const field = { dataSource: continents, id: 'code', text: 'name', child: 'countries' };
    function contentTemplate1() {
        return (<ButtonComponent>Click me</ButtonComponent>);
    }
    function contentTemplate2() {
        return (<DatePickerComponent></DatePickerComponent>);
    }
    function contentTemplate3() {
        return (<CalendarComponent></CalendarComponent>);
    }
    function contentTemplate4() {
        return (<TreeViewComponent fields={field}></TreeViewComponent>);
    }
    return (<div id='container'>
      <AccordionComponent>
        <AccordionItemsDirective>
          <AccordionItemDirective header='Button' content={contentTemplate1}/>
          <AccordionItemDirective header='DatePicker' content={contentTemplate2}/>
          <AccordionItemDirective header='Calendar' content={contentTemplate3}/>
          <AccordionItemDirective header='Treeview' content={contentTemplate4}/>
        </AccordionItemsDirective>
      </AccordionComponent>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);
