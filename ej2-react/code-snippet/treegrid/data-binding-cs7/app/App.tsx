


import { DataManager, Query, WebApiAdaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
function App() {
    const data = new DataManager({
        adaptor: new WebApiAdaptor,
        crossDomain: true,
        url: 'https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData'
    });

    const query = new Query().addParams('ej2treegrid', 'true');
        return <TreeGridComponent dataSource={data} hasChildMapping='isParent' treeColumnIndex={1} idMapping='TaskID' parentIdMapping='ParentItem' height='260' query={query}>
            <ColumnsDirective>
                <ColumnDirective field='TaskID' headerText='Task ID' width='90' textAlign='Right'/>
                <ColumnDirective field='TaskName' headerText='Task Name' width='180'/>
                <ColumnDirective field='StartDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date' />
                <ColumnDirective field='Duration' headerText='Duration' width='80' textAlign='Right' />
            </ColumnsDirective>
        </TreeGridComponent>
};
export default App;


