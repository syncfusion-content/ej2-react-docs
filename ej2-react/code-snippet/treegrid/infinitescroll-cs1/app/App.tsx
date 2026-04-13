

import { TreeGridComponent, ColumnsDirective, ColumnDirective, Inject, InfiniteScroll } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { dataSource, virtualData } from './datasource';

function App() {
    dataSource();
    return <TreeGridComponent dataSource={virtualData} childMapping = 'Crew' enableInfiniteScrolling={true} treeColumnIndex={1} height='291'>
        <ColumnsDirective>
            <ColumnDirective field='TaskID' headerText='Player Jersey' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD1' headerText='Player Name' width='120'></ColumnDirective>
            <ColumnDirective field='FIELD2' headerText='Year' width='100' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD3' headerText='Stint' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD4' headerText='TMID' width='120' textAlign='Right'></ColumnDirective>
        </ColumnsDirective>
            <Inject services={[InfiniteScroll]} />
    </TreeGridComponent>
};
export default App;


