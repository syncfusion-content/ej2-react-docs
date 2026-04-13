


import * as React from 'react';
import { projectData } from './datasource';
import { ColumnsDirective, ColumnDirective, TreeGridComponent, Inject, Sort } from '@syncfusion/ej2-react-treegrid';
import { SortEventArgs } from '@syncfusion/ej2-react-grids';

/* tslint:disable */

function App() {
    const [action, setAction] = React.useState('');
  const sortComparer = (reference: any, comparer: any) => {
    const sortAsc = action === "Ascending" ? true : false;
    if (sortAsc && reference === null) {
        return -1;
    } else if (sortAsc && comparer === null) {
        return 1;
    } else if (!sortAsc && reference === null) {
        return -1;
    } else if (!sortAsc && comparer === null) {
        return 1;
    } else {
        return reference - comparer;
    }
};
const actionBegin = (args: any): void => {
    if (args.requestType === "sorting") {
      setAction(args.direction);
    }
}

return (
    <TreeGridComponent dataSource={projectData} treeColumnIndex={1} idMapping= 'TaskID' parentIdMapping='parentID'
    allowSorting={true} actionBegin={actionBegin}>
    <ColumnsDirective>
        <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right' isPrimaryKey={true}></ColumnDirective>
        <ColumnDirective field='TaskName' headerText='Task Name' width='70'></ColumnDirective>
        <ColumnDirective field='StartDate' headerText='Start Date' width='70' sortComparer={sortComparer} format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
        <ColumnDirective field='EndDate' headerText='End Date' width='70' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
        <ColumnDirective field='Duration' headerText='Duration' width='90' textAlign='Right' />
        <ColumnDirective field='Priority' headerText='Priority' width='90' textAlign='Right' />
    </ColumnsDirective>
    <Inject services={[Sort]} />
    </TreeGridComponent>
);
};
export default App;



