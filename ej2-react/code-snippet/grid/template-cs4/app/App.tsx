import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { categoryData } from './datasource';

function App() {
  const conditionTemplate = ((props: any) => {
    return (
      <div>
        {props.Discontinued ? (<input type="checkbox" defaultChecked />) : (<input type="checkbox" />)}
      </div>
    )
  })
  return (
    <div>
      <GridComponent dataSource={categoryData} height={315} enableHover={false}>
        <ColumnsDirective>
          <ColumnDirective field='ProductID' headerText='ProductID' width='100' />
          <ColumnDirective field='ProductName' headerText='ProductName' width='120' />
          <ColumnDirective field='UnitPrice' headerText='Unit Price' format='C' width='120' />
          <ColumnDirective field='Discontinued' headerText='Discontinued' width='120' template={conditionTemplate} />
        </ColumnsDirective>
      </GridComponent></div>)
}
export default App;