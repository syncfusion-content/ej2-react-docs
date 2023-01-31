import * as React from 'react';
import { projectData } from './datasource';
import { getValue } from '@syncfusion/ej2-base';
import { Tooltip } from '@syncfusion/ej2-popups';
import { ColumnsDirective, ColumnDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
/* tslint:disable */
function App() {
    const tooltip = (args) => {
        const tooltip = new Tooltip({
            content: getValue(args.column.field, args.data).toString()
        });
        tooltip.appendTo(args.cell);
    };
    return (<TreeGridComponent dataSource={projectData} treeColumnIndex={1} idMapping='TaskID' parentIdMapping='parentID' queryCellInfo={tooltip} height={320}>
        <ColumnsDirective>
          <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right'></ColumnDirective>
          <ColumnDirective field='TaskName' headerText='Task Name' width='100'></ColumnDirective>
          <ColumnDirective field='StartDate' headerText='Start Date' width='90' format='yMd' textAlign='Right'/>
          <ColumnDirective field='Duration' headerText='Duration' width='90' textAlign='Right'/>
        </ColumnsDirective>
      </TreeGridComponent>);
}
;
export default App;
