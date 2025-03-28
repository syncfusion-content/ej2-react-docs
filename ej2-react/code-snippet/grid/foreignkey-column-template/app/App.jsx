import { ColumnDirective, ColumnsDirective, GridComponent, ForeignKey, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const navToAccount = (id, event) => {
    event.preventDefault();
    window.history.pushState(
      '',
      'changed',
      `../Account/AccountDetail.cshtml?custid=0&accountId=${id}`
    );
  };
  
  const foreignkeyTemplate = (props) => {
    if (!props.foreignKeyData) return null;
    return (
      <a
        href="javascript:void(0)"
        onClick={(event) => navToAccount(props.OrderID, event)}>
        {props.foreignKeyData.ContactName}
      </a>
    );
  };
    
  return (
    <div>
      <GridComponent dataSource={data} height={315}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='OrderID' width='100' />
          <ColumnDirective field="CustomerID" headerText="Customer Name" width="150" foreignKeyValue="ContactName" foreignKeyField="CustomerID" dataSource={customerData} template={foreignkeyTemplate}></ColumnDirective>
          <ColumnDirective field='Freight' headerText='Freight' format='C' textAlign="Right" width='120' />
          <ColumnDirective field="ShipName" headerText="Ship Name" width={120} />
          <ColumnDirective field="ShipCountry" headerText="Ship Country" width={120} />
        </ColumnsDirective>
        <Inject services={[ForeignKey]} />
      </GridComponent>
    </div>
  )
}
export default App;