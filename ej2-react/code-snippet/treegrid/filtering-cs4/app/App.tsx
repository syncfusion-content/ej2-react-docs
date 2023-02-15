

import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, Filter } from '@syncfusion/ej2-react-treegrid';
import { Inject, TreeGrid, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';

function App() {
    let treegrid: TreeGridComponent | null;

    const onChange = (args: any): any => {
        if (treegrid) {
            if (args.value === 'All') {
            treegrid.clearFiltering();
            } else {
            treegrid.filterByColumn('duration', 'equal', parseInt(args.value, 0));
            }
        }
      }
    const templateOptions = (props:any): any => {
    const dataSource: string[] = ['All', '1', '3', '4', '5', '6', '8', '9'];
    return (<DropDownListComponent id={props.column.field} popupHeight='250px' dataSource={dataSource} change={onChange} /> );
    }

    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='275' allowFiltering={true} ref={g => treegrid = g}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='75' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date' />
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right' filterTemplate={templateOptions} />
        </ColumnsDirective>
        <Inject services={[Filter]}/>
    </TreeGridComponent>
};
export default App;


