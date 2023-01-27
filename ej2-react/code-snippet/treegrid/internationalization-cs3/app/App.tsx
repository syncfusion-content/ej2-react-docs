

import { L10n } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, Page, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Filter, FilterSettingsModel, Inject, PageSettingsModel, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';

L10n.load({
    'ar-AE': {
        'pager': {
            'currentPageInfo': '{0} من {1} صفحة',
            'firstPageTooltip': 'انتقل إلى الصفحة الأولى',
            'lastPageTooltip': 'انتقل إلى الصفحة الأخيرة',
            'nextPageTooltip': 'انتقل إلى الصفحة التالية',
            'nextPagerTooltip': 'الذهاب إلى بيجر المقبل',
            'previousPageTooltip': 'انتقل إلى الصفحة السابقة',
            'previousPagerTooltip': 'الذهاب إلى بيجر السابقة',
            'totalItemsInfo': '({0} العناصر)'
        },
        'treegrid': {
            "ChooseDate": "اختر تاريخا",
            "ClearButton": "واضح",
            "Contains": "يحتوي على",
            "EmptyRecord": "لا سجلات لعرضها",
            "EndsWith": "ينتهي مع",
            "EnterValue": "أدخل القيمة",
            "Equal": "مساو",
            "FilterButton": "منقي",
            "FilterMenu": "منقي",
            "GreaterThan": "أكثر من",
            "GreaterThanOrEqual": "أكبر من أو يساوي",
            "LessThan": "أقل من",
            "LessThanOrEqual": "اصغر من او يساوي",
            "NotEqual": "غير متساوي",
            "Print": "طباعة",
            "StartsWith": "ابدا ب",
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
    allowPaging={true} pageSettings={pageSettings} locale='ar-AE' allowFiltering={true}
    filterSettings={FilterOptions} toolbar={toolbarOptions} enableRtl= {true} height='220'>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='160'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Filter]}/>
    </TreeGridComponent>
};
export default App;


