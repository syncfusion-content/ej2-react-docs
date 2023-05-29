


import * as React from 'react';
import { sampleData } from './datasource';
import { ColumnsDirective, ColumnDirective, TreeGridComponent, CommandColumn, Inject } from '@syncfusion/ej2-react-treegrid';
import { Page, ITreeData } from '@syncfusion/ej2-react-treegrid';
import { QueryCellInfoEventArgs, RowDataBoundEventArgs } from '@syncfusion/ej2-react-grids';

/* tslint:disable */

function App() {

  let treegrid: TreeGridComponent | null;
  const commands: any = [{ buttonOption: { content: ' Details', click: onclick } }];
  const queryCellInfo = (args: QueryCellInfoEventArgs): void => {
    if (!(args.data as ITreeData).hasChildRecords){
      if ((args.cell as HTMLElement).classList.contains("e-unboundcell")) {
        ((args.cell as HTMLElement).querySelector('.e-unboundcelldiv') as HTMLElement).style.display = "none"
      }
    }
  }

  const rowDataBound = (args: RowDataBoundEventArgs): void => {
    if (!(args.data as ITreeData).hasChildRecords) {
      (args.row as HTMLElement).style.backgroundColor = 'green';
    }
  }
    return (
      <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks'
      height={280} ref={g => treegrid = g} queryCellInfo={queryCellInfo}
      rowDataBound={rowDataBound}>
      <ColumnsDirective>
        <ColumnDirective field='taskID' headerText='Task ID' width='80' textAlign='Right'
          isPrimaryKey={true}></ColumnDirective>
        <ColumnDirective field='taskName' headerText='Task Name' width='200'></ColumnDirective>
        <ColumnDirective field='startDate' headerText='Start Date' width='140' textAlign='Right' format='yMd' type='date' />
        <ColumnDirective field='endDate' headerText='End Date' width='140' textAlign='Right' format='yMd' type='date' />
        <ColumnDirective field='duration' headerText='Duration' width='90' textAlign='Right' />
        <ColumnDirective field='progress' headerText='Progress' width='90' textAlign='Right'/>
        <ColumnDirective headerText='Custom Button' width='160' commands={commands}></ColumnDirective>
      </ColumnsDirective>
        <Inject services={[Page, CommandColumn]} />
      </TreeGridComponent>
    );
};
export default App;


