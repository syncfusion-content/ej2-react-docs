


import * as React from 'react';
import { projectData } from './datasource';
import { getValue } from '@syncfusion/ej2-base';
import { Tooltip } from '@syncfusion/ej2-popups';
import { ColumnsDirective, ColumnDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { QueryCellInfoEventArgs, Column } from '@syncfusion/ej2-react-grids';

/* tslint:disable */

function App() {

  const tooltip = (args: QueryCellInfoEventArgs) => {
    const tooltip: Tooltip = new Tooltip({
      content: getValue((args.column as Column).field, args.data as object).toString()
    });
    tooltip.appendTo(args.cell as HTMLElement);
  }
    return (
      <TreeGridComponent dataSource={projectData} treeColumnIndex={1} idMapping= 'TaskID' parentIdMapping='parentID' queryCellInfo={tooltip} height={320}>
        <ColumnsDirective>
          <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right'></ColumnDirective>
          <ColumnDirective field='TaskName' headerText='Task Name' width='100'></ColumnDirective>
          <ColumnDirective field='StartDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' />
          <ColumnDirective field='Duration' headerText='Duration' width='90' textAlign='Right' />
        </ColumnsDirective>
      </TreeGridComponent>
    );
};
export default App;



