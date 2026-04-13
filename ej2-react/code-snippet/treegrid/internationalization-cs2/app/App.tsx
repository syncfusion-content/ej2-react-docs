

import { L10n, loadCldr, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, Page, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Filter, FilterSettingsModel, Inject, PageSettingsModel, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import * as cagregorian from './ca-gregorian.json';
import * as currencies from './currencies.json';
import { formatData } from './datasource';
import * as numberingSystems from './numberingSystems.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';

loadCldr(currencies, cagregorian, numbers, timeZoneNames, numberingSystems);

setCulture('de');
setCurrencyCode('EUR');

L10n.load({
    'de-DE': {
        'pager': {
            'currentPageInfo': '{0} von {1} Seiten',
            'firstPageTooltip': 'Zur ersten Seite',
            'lastPageTooltip': 'Zur letzten Seite',
            'nextPageTooltip': 'Zur nächsten Seite',
            'nextPagerTooltip': 'Zum nächsten Pager',
            'previousPageTooltip': 'Zurück zur letzten Seit',
            'previousPagerTooltip': 'Zum vorherigen Pager',
            'totalItemsInfo': '({0} Beiträge)'
        },
        'treegrid': {
            "ClearButton": "klar",
            'Collapse All': 'Alles einklappen',
            "Contains": "Enthält",
            'EmptyRecord': 'Keine Aufzeichnungen angezeigt',
            "EndsWith": "Endet mit",
            "EnterValue": "Geben Sie den Wert ein",
            "Equal": "Gleich",
            "Excelexport": "Excel-Export",
            'Expand All': 'Alle erweitern',
            "FilterButton": "Filter",
            "FilterMenu": "Filter",
            "GreaterThan": "Größer als",
            "GreaterThanOrEqual": "Größer als oder gleich",
            "LessThan": "Weniger als",
            "LessThanOrEqual": "Weniger als oder gleich",
            "NotEqual": "Nicht gleich",
            "Pdfexport": "PDF-Export",
            "Print": "Drucken",
            "StartsWith": "Beginnt mit",
            "Wordexport": "Word-Export"
        }
    }
});

function App() {

    const FilterOptions: FilterSettingsModel = {
        type: 'Menu'
    };
    const pageSettings: PageSettingsModel = { pageSize: 7 };
    const toolbarOptions: ToolbarItems[] = ['Print'];

    const formatOption : object = {
        currency:'EUR',
        format:'C2',
        maximumSignificantDigits:3,
        minimumSignificantDigits:1,
        useGrouping: false
    };

    return <TreeGridComponent dataSource={formatData} treeColumnIndex={1} childMapping='subtasks' allowPaging={true} pageSettings={pageSettings} locale='de-DE' allowFiltering={true}
    filterSettings={FilterOptions} toolbar={toolbarOptions} height='220'>
        <ColumnsDirective>
            <ColumnDirective field='orderID' headerText='Order ID' width='90' textAlign='Right'/>
            <ColumnDirective field='orderName' headerText='Order Name' width='180'/>
            <ColumnDirective field='price' headerText='Price' width='80' format={formatOption} textAlign='Right' type='number' />
        </ColumnsDirective>
        <Inject services={[Page, Filter, Toolbar]}/>
    </TreeGridComponent>
};
export default App;


