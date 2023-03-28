

import { ColumnDirective, ColumnsDirective, Inject, Sort, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';

import { sortData } from './datasource';

function App() {

    /** Custom comparer function */
    const sortComparer = (reference: string, comparer:  string) => {
        if (reference < comparer) {
            return -1;
        }
        if (reference > comparer) {
            return 1;
        }
        return 0;
    };

    return <TreeGridComponent dataSource={sortData} treeColumnIndex={1} childMapping='subtasks' allowSorting={true} height='315'>
        <ColumnsDirective>
            <ColumnDirective field='Category' headerText='Category' width='140'/>
            <ColumnDirective field='orderName' headerText='Order Name' sortComparer={sortComparer} width='200'/>
            <ColumnDirective field='orderDate' headerText='Order Date' width='120' format='yMd' textAlign='Right' type='date'/>
            <ColumnDirective field='units' headerText='Units' width='90' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Sort]}/>
    </TreeGridComponent>
};
export default App;


