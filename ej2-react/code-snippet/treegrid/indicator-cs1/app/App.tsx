
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, Inject, Page, TreeGridComponent, Sort, PageSettingsModel } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';

function App() {
    const pageSettings: PageSettingsModel = { pageCount: 3 };
    const data = new DataManager({
        adaptor: new WebApiAdaptor,
        crossDomain: true,
        url: 'https://services.syncfusion.com/react/production/api/SelfReferenceData'
    });
    return <TreeGridComponent dataSource={data} hasChildMapping='isParent' treeColumnIndex={1} idMapping='TaskID' parentIdMapping='ParentItem' height='400' loadingIndicator= {{ indicatorType: 'Shimmer' }} allowPaging={true} allowSorting={true} pageSettings={pageSettings}>
        <ColumnsDirective>
            <ColumnDirective field='TaskID' headerText='Task ID' width='120' textAlign='Right'/>
            <ColumnDirective field='TaskName' headerText='Task Name' width='240' textAlign='Left'/>
            <ColumnDirective field='StartDate' headerText='Start Date' width='140' format='yMd' textAlign='Right' type='date' />
            <ColumnDirective field='Duration' headerText='Duration' width='130' textAlign='Right' />
            <ColumnDirective field='Progress' headerText='Progress' width='130' />
        </ColumnsDirective>
        <Inject services={[Page, Sort]}/>
    </TreeGridComponent>
};
export default App;
