import { ColumnDirective, ColumnsDirective, ForeignKey, Grid, GridComponent, Inject, ColumnModel } from '@syncfusion/ej2-react-grids';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import React, { useState } from 'react';
import { data, employeeData } from './datasource';
import { ButtonComponent, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

function App() {
  const dropDownData: string[] = ['Order Details', 'Order Information'];
  const orderColumns: any = [{
    field: 'OrderDate',
    headerText: 'Order Date',
    format: 'yMd',
    width: 130,
    textAlign: 'Right',
    minWidth: 10,
  },
  {
    field: 'Freight',
    headerText: 'Freight ($)',
    width: 120,
    format: 'C1',
    textAlign: 'Right',
    minWidth: 10,
  }];
  const shipColumns: any = [
    {
      field: 'ShipCity',
      headerText: 'Ship City',
      format: 'yMd',
      textAlign: 'Right',
      width: 150,
      minWidth: 10,
    },
    {
      field: 'ShipCountry',
      headerText: 'Ship Country',
      width: 150,
      minWidth: 10,
    }
  ]
  const orderIDTemplate = () => {
    return (<div>
      <a href="#">OrderID</a>
    </div>);
  }
  const orderDetail = () => {
    return (<div>
      <DropDownListComponent dataSource={dropDownData} index={0} width="130" />
    </div>);
  }
  const shipDetail = () => {
    return (<div>
      <span>Ship Details</span>
      <span>(<i className="fa fa-truck"></i>)</span>
    </div>);
  }
  return <GridComponent dataSource={data} height={315}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' headerTemplate={orderIDTemplate} textAlign="Center" />
      <ColumnDirective headerText='Order Details' columns={orderColumns} headerTemplate={orderDetail} width='150' />
      <ColumnDirective headerText='Ship Details' width='150' columns={shipColumns} headerTemplate={shipDetail} />
    </ColumnsDirective>
  </GridComponent>

};
export default App;