import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { sampleData } from './datasource';

function App() {
  let treeGrid: TreeGridComponent | null;

  const onChange = (args: ChangeEventArgs) => {
    (treeGrid as TreeGridComponent).enableStickyHeader = (args.checked as boolean);
  };

  return (
    <div>
      <div style={{ padding: '10px 0px 20px 0px' }}>
        <label style={{ padding: '30px 20px 0 0' }}>Enable/Disable Sticky Header </label>
        <SwitchComponent checked={true} change={onChange}></SwitchComponent>
      </div>
      <div style={{ height: '350px' }}>
        <TreeGridComponent ref={g => treeGrid = g} dataSource={sampleData} enableStickyHeader={true} treeColumnIndex={1} childMapping='SubTasks'>
          <ColumnsDirective>
            <ColumnDirective field='TaskID' headerText='Task ID' width='90' textAlign='Right' />
            <ColumnDirective field='TaskName' headerText='Task Name' width='180' />
            <ColumnDirective field='StartDate' headerText='Start Date' width='120' format='yMd' textAlign='Right' type='date' />
            <ColumnDirective field='Duration' headerText='Duration' width='110' textAlign='Right' />
          </ColumnsDirective>
        </TreeGridComponent>
      </div>
    </div>
  );
}

export default App;
