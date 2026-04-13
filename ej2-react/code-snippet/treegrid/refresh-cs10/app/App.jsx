import * as React from 'react';
import { getValue } from '@syncfusion/ej2-base';
import { projectData } from './datasource';
import { ColumnsDirective, ColumnDirective, TreeGridComponent, Inject } from '@syncfusion/ej2-react-treegrid';
import { Page } from '@syncfusion/ej2-react-treegrid';
/* tslint:disable */
function App() {
    let selIndex = [];
    let treegrid;
    const settings = { type: 'Multiple' };
    const rowDataBound = (args) => {
        if (getValue('Duration', args.data) > 4) {
            selIndex.push(parseInt(args.row
                .getAttribute('aria-rowindex'), 0));
        }
    };
    const dataBound = () => {
        if (treegrid && selIndex.length) {
            treegrid.selectRows(selIndex);
            selIndex = [];
        }
    };
    return (<TreeGridComponent dataSource={projectData} treeColumnIndex={1} idMapping='TaskID' parentIdMapping='parentID' height={280} allowPaging={true} ref={g => treegrid = g} rowDataBound={rowDataBound} dataBound={dataBound} selectionSettings={settings}>
        <ColumnsDirective>
          <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right' isPrimaryKey={true}></ColumnDirective>
          <ColumnDirective field='TaskName' headerText='Task Name' width='100'></ColumnDirective>
          <ColumnDirective field='StartDate' headerText='Start Date' width='100' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='EndDate' headerText='End Date' width='100' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='Duration' headerText='Duration' width='90' textAlign='Right'/>
          <ColumnDirective field='Priority' headerText='Priority' width='90' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Page]}/>
      </TreeGridComponent>);
}
;
export default App;
