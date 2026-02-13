import { GridComponent, ColumnDirective, ColumnsDirective, Inject, Page } from '@syncfusion/ej2-react-grids';
import { L10n } from '@syncfusion/ej2-base';
import * as React from 'react';
import frFRLocalization from './locale.json';
import { data } from './datasource';

L10n.load(frFRLocalization);

function App() {
  let gridInstance: GridComponent;
  return (<div>
    <GridComponent id='Grid1' ref={grid => gridInstance = grid} dataSource={data} allowPaging={true} locale={'fr-FR'} >
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent>
    <GridComponent id='Grid2' ref={grid => gridInstance = grid} dataSource={data} allowPaging={true} >
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>)
};
export default App;