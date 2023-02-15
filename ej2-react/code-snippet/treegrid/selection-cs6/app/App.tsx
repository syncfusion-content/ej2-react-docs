

import { ColumnDirective, ColumnsDirective, Inject, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Page, SelectionSettingsModel, TreeGrid } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';

import { sampleData } from './datasource';

function App() {
    let treegrid: TreeGridComponent | null;
    const settings: SelectionSettingsModel = { type: 'Multiple' };

    const dataBound = () => {
        if (treegrid) {
          const rowIndexes : number[]=[];
          (treegrid.dataSource as object[]).forEach((dat: any,index) => {
              if (dat.taskID === 3 || dat.taskID === 5) {
                rowIndexes.push(index);
              }
          });
          treegrid.selectRows(rowIndexes);
        }
      }

    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks'
    selectionSettings={settings} height={270} dataBound={dataBound} ref={g => treegrid = g}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='150'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date' />
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Page]}/>
    </TreeGridComponent>
};
export default App;


