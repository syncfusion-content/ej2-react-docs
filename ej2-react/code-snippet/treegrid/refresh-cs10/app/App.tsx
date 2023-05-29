


import * as React from 'react';
import { getValue } from '@syncfusion/ej2-base';
import { projectData } from './datasource';
import { ColumnsDirective, ColumnDirective, TreeGridComponent, Inject } from '@syncfusion/ej2-react-treegrid';
import { Page, TreeGrid, SelectionSettingsModel } from '@syncfusion/ej2-react-treegrid';
import { RowDataBoundEventArgs } from '@syncfusion/ej2-react-grids';

/* tslint:disable */

function App() {

  let selIndex: number[] = [];
  let treegrid: TreeGrid | null;
  const settings: SelectionSettingsModel = { type: 'Multiple' };
  const rowDataBound = (args:RowDataBoundEventArgs):void => {
    if (getValue('Duration', args.data as object) > 4) {
      selIndex.push(parseInt((args.row as HTMLTableRowElement)
        .getAttribute('aria-rowindex') as string, 0));
    }
  }
  const dataBound = ():void => {
    if (treegrid && selIndex.length) {
        treegrid.selectRows(selIndex);
        selIndex = [];
    }
  }

    return (
      <TreeGridComponent dataSource={projectData} treeColumnIndex={1} idMapping= 'TaskID' parentIdMapping='parentID' height={280}
      allowPaging={true} ref={g => treegrid = g} rowDataBound={rowDataBound} dataBound={dataBound} selectionSettings={settings}>
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


