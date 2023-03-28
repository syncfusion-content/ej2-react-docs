


import * as React from 'react';
import { projectData } from './datasource';
import { ColumnsDirective, ColumnDirective, TreeGridComponent, Inject, Page } from '@syncfusion/ej2-react-treegrid';
import { RowSelectEventArgs } from '@syncfusion/ej2-react-grids';

/* tslint:disable */

function App() {

  const rowSelected = (args: RowSelectEventArgs):void => {
    alert("row index: "+(args.row as HTMLTableRowElement).getAttribute('aria-rowindex'));
    alert("column index: "+(args.target as HTMLElement).getAttribute('aria-colindex'));
  }

    return (
      <TreeGridComponent dataSource={projectData} treeColumnIndex={1} idMapping= 'TaskID' parentIdMapping='parentID' rowSelected={rowSelected} height={267}>
        <ColumnsDirective>
          <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right' isPrimaryKey={true}></ColumnDirective>
          <ColumnDirective field='TaskName' headerText='Task Name' width='100'></ColumnDirective>
          <ColumnDirective field='StartDate' headerText='Start Date' width='100' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='EndDate' headerText='End Date' width='100' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='Duration' headerText='Duration' width='90' textAlign='Right' />
          <ColumnDirective field='Priority' headerText='Priority' width='90' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Page]} />
      </TreeGridComponent>
    );
};
export default App;


