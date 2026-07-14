import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { DomVirtualization, Sort, Filter, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { massiveData } from './datasource';

function App() {
  const toolbarOptions = ['Search'];
  
  return (
    <GridComponent 
      dataSource={massiveData}
      enableDomVirtualization={true}
      height={500}
      allowFiltering={true}
      allowSorting={true}
      toolbar={toolbarOptions}
      domVirtualizationSettings={{
        rowBuffer: 5
      }}
    >
      <Inject services={[DomVirtualization, Sort, Filter, Toolbar]} />
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' isPrimaryKey={true} />
        <ColumnDirective field='CustomerName' headerText='Customer Name' width='150' />
        <ColumnDirective field='TotalAmount' headerText='Total Amount' width='150' format='C2' textAlign='Right' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='Status' headerText='Status' width='120' />
      </ColumnsDirective>
    </GridComponent>
  );
}

export default App;
