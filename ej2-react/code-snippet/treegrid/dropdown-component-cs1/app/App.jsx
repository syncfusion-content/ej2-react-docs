import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { projectData } from './datasource';
import { getValue } from '@syncfusion/ej2-base';
import { DataUtil } from '@syncfusion/ej2-data';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnsDirective, ColumnDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
/* tslint:disable */
function App() {
    let drop;
    const dropdown = (args) => {
        drop = DataUtil.distinct(projectData, 'Priority');
        if (args.column.field === "Priority") {
            const val = getValue(args.column.field, args.data);
            ReactDOM.render(<DropDownListComponent id="dropdown" value={val} dataSource={drop} change={onChange}/>, args.cell);
        }
    };
    const onChange = (args) => {
        /** Event will trigger when you have change the value in dropdown column */
        alert(args.value);
    };
    return (<div>
      <TreeGridComponent dataSource={projectData} treeColumnIndex={1} idMapping='TaskID' parentIdMapping='parentID' queryCellInfo={dropdown} height={315}>
        <ColumnsDirective>
          <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right'></ColumnDirective>
          <ColumnDirective field='TaskName' headerText='Task Name' width='100'></ColumnDirective>
          <ColumnDirective field='StartDate' headerText='Start Date' width='90' format='yMd' textAlign='Right'/>
          <ColumnDirective field='EndDate' headerText='End Date' width='90' format='yMd' textAlign='Right'/>
          <ColumnDirective field='Duration' headerText='Duration' width='90' textAlign='Right'/>
          <ColumnDirective field='Priority' headerText='Priority' width='90' textAlign='Right'/>
        </ColumnsDirective>
      </TreeGridComponent>
      </div>);
}
;
export default App;
