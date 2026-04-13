

import { ActionEventArgs } from '@syncfusion/ej2-grids';
import { ColumnDirective, ColumnsDirective, Inject, Sort, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';

import { sortData } from './datasource';

function App() {
    const actionHandler = (args: ActionEventArgs) => {
        /** custom Action */
        alert(args.requestType + ' ' + args.type);
    }

    return <TreeGridComponent dataSource={sortData} treeColumnIndex={1} childMapping='subtasks'
    allowSorting={true} height='315' actionBegin={actionHandler}
        actionComplete={actionHandler}>
        <ColumnsDirective>
            <ColumnDirective field='Category' headerText='Category' width='140'/>
            <ColumnDirective field='orderName' headerText='Order Name' width='200'/>
            <ColumnDirective field='orderDate' headerText='Order Date' width='120' format='yMd' textAlign='Right' type='date' />
            <ColumnDirective field='units' headerText='Units' width='90' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Sort]}/>
    </TreeGridComponent>
};
export default App;


