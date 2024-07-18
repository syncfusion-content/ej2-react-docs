import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar';

function App() {
  const progressbarTemplate = ((props) => {
    return (
      <div>
        <ProgressBarComponent id={props.OrderID} type='Linear' height='60'
          value={props.Freight} trackThickness={24} progressThickness='20'></ProgressBarComponent>
      </div>
    )
  })
  return (
    <div>
       <GridComponent dataSource={data} height={315} enableHover={false}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
          <ColumnDirective field='Freight' headerText='Freight' width='120' template={progressbarTemplate}/>
        </ColumnsDirective>
      </GridComponent></div>)
}
export default App;