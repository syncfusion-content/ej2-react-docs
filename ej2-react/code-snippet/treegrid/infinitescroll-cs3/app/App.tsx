

import { TreeGridComponent, ColumnsDirective, ColumnDirective, Inject, InfiniteScroll, InfiniteScrollSettingsModel, PageSettingsModel } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { dataSource, virtualData } from './datasource';

function App() {
  const pageSettings: PageSettingsModel = { pageSize: 50 };
  const infiniteOptions: InfiniteScrollSettingsModel = { enableCache: true };
    dataSource();
    return <TreeGridComponent dataSource={virtualData} childMapping = 'Crew' height={300} enableInfiniteScrolling={true} infiniteScrollSettings={ infiniteOptions } pageSettings={ pageSettings } treeColumnIndex={1}>
            <Inject services={[InfiniteScroll]} />
            <ColumnsDirective>
                <ColumnDirective field='TaskID' headerText='Player Jersey' width='120' textAlign='Right'></ColumnDirective>
                <ColumnDirective field='FIELD1' headerText='Player Name' width='120'></ColumnDirective>
                <ColumnDirective field='FIELD2' headerText='Year' width='100' textAlign='Right'></ColumnDirective>
                <ColumnDirective field='FIELD3' headerText='Stint' width='120' textAlign='Right'></ColumnDirective>
                <ColumnDirective field='FIELD4' headerText='TMID' width='120' textAlign='Right'></ColumnDirective>
            </ColumnsDirective>
          </TreeGridComponent>
};
export default App;


