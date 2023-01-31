

import { setValue } from '@syncfusion/ej2-base';
import { AggregateColumnDirective, ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { AggregateColumnsDirective, AggregateDirective, AggregatesDirective, Grid } from '@syncfusion/ej2-react-grids';
import { Aggregate, Edit, EditEventArgs, Group, Page, PageSettingsModel, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const pageSettings: PageSettingsModel = { pageSize: 7 };
  const toolbarOptions: ToolbarItems[] = ['Delete', 'Update', 'Cancel'];
  const editOption = { allowEditing: true, allowDeleting: true, mode: 'Normal' };
  const groupOptions = { columns: ['ShipCountry'] };
  let selectedRecord: object = {};
  const actionBegin = (args: EditEventArgs) => {
   if(args.requestType === 'beginEdit'){
         selectedRecord ={};
         selectedRecord = args.rowData as object;
      };
  }
  const changeFn = (args: any) => {
    setValue('Freight', args.value, selectedRecord);
    if (grid) {
      grid.aggregateModule.refresh(selectedRecord);
    }
  }
  let numericParams = {params:{change: changeFn}}
  const footerSum = (props: any): any => {
    return(<span>Sum: {props.Sum}</span>)
  }
  const groupFooterSum = (props: any): any => {
    return(<span>Sum: {props.Sum}</span>)
  }
  const footerAvg = (props: any): any => {
    return(<span>Sum: {props.Sum}</span>)
  }
    return (<GridComponent dataSource={data} ref={g => grid = g} allowPaging={true} pageSettings={pageSettings}
              allowGrouping={true} groupSettings={groupOptions} actionBegin={actionBegin}
              toolbar= {toolbarOptions} editSettings={editOption} height={268}>
              <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='120' textAlign='Right'/>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
                <ColumnDirective field='Freight'  headerText='Freight' format='C2' edit={numericParams} editType= 'numericedit' textAlign='Right' width='150'/>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
              </ColumnsDirective>
              <AggregatesDirective>
                <AggregateDirective>
                  <AggregateColumnsDirective>
                    <AggregateColumnDirective field='Freight' type='Sum' format='C2'
                    footerTemplate={footerSum}/>
                  </AggregateColumnsDirective>
                </AggregateDirective>
                <AggregateDirective>
                  <AggregateColumnsDirective>
                    <AggregateColumnDirective field='Freight' type='Sum' format='C2'
                    groupFooterTemplate={groupFooterSum}/>
                  </AggregateColumnsDirective>
                </AggregateDirective>
                <AggregateDirective>
                  <AggregateColumnsDirective>
                    <AggregateColumnDirective field='Freight' type='Sum' format='C2'
                    groupCaptionTemplate={footerAvg}/>
                  </AggregateColumnsDirective>
                </AggregateDirective>
              </AggregatesDirective>
            <Inject services={[Page, Aggregate, Edit, Group]}/>
        </GridComponent>)
}
export default App;


