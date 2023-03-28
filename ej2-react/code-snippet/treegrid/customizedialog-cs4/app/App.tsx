


import * as React from 'react';
import { stackedData } from './datasource';
import { ColumnsDirective, ColumnDirective, TreeGridComponent, Inject } from '@syncfusion/ej2-react-treegrid';
import { Edit, Toolbar, ToolbarItems, EditSettingsModel, Page, TreeGrid } from '@syncfusion/ej2-react-treegrid';
import { IEditCell } from '@syncfusion/ej2-react-grids';

/* tslint:disable */

function App() {

  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete'];
  let treegrid: TreeGrid | null;

  const numericParams: IEditCell = {
    params: {
      decimals: 0,
      format: "N",
      validateDecimalOnType: true
    }
  };

    return (
      <TreeGridComponent dataSource={stackedData} treeColumnIndex={1} childMapping='subtasks'
       editSettings={editOptions} toolbar={toolbarOptions} height={265}
       ref={g => treegrid = g}>
        <ColumnsDirective>
          <ColumnDirective field='orderID' headerText='Order ID' width='70' textAlign='Right' isPrimaryKey={true}></ColumnDirective>
          <ColumnDirective field='orderName' headerText='Order Name' width='100'></ColumnDirective>
          <ColumnDirective field='orderDate' headerText='Order Date' width='100' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='price' headerText='price' edit= {numericParams} editType= 'numericedit' width='90' format='c2' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar, Page]} />
      </TreeGridComponent>
    );
};
export default App;


