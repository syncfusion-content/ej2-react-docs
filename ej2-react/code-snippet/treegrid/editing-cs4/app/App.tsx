

import { closest } from '@syncfusion/ej2-base';
import { Column, CommandModel, Row } from '@syncfusion/ej2-grids';
import { ColumnDirective, ColumnsDirective, Inject, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { CommandColumn, Edit, EditSettingsModel, TreeGrid } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';

function App() {
    const editOptions: EditSettingsModel = { allowEditing: true, allowDeleting: true };
    const commands: CommandModel[] = [
      {
        buttonOption: {
          content: 'Details', cssClass: 'e-flat'
        }
      }
    ];
    let treegrid: TreeGridComponent | null;
  
    const onClick = (args: Event): void => {
      if (treegrid) {
        const rowObj: Row<Column> =
          treegrid.getRowObjectFromUID(closest(args.target as Element, '.e-row')
          .getAttribute('data-uid') as string);
        const rowData: object = rowObj.data as object;
        alert(JSON.stringify(rowData));
      }
    }

    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='270'
        editSettings={editOptions} ref={g => treegrid = g}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right' isPrimaryKey={true}/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right' />
            <ColumnDirective headerText='Commands' width='120' commands= {commands}/>
        </ColumnsDirective>
        <Inject services={[Edit,CommandColumn]}/>
    </TreeGridComponent>
};
export default App;


