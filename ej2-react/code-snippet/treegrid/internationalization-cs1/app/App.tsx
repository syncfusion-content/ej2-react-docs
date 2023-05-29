

import { L10n } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, Page, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Filter, FilterSettingsModel, Inject, PageSettingsModel, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';

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

    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks'
        allowPaging={true} pageSettings={pageSettings} locale='de-DE' allowFiltering={true}
        filterSettings={FilterOptions} toolbar={toolbarOptions} height='220'>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Filter]}/>
    </TreeGridComponent>
};
export default App;


