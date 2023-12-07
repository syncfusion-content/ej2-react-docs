import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';
import { NumericTextBoxComponent, ChangeEventArgs } from '@syncfusion/ej2-react-inputs';

function App() {
  let grid: GridComponent | null;
  const [pageSize, setPageSize] = useState<PageSettingsModel>()
  const calculatePageSize = ({ value }: ChangeEventArgs) => {
    const newValue: PageSettingsModel = { pageSize: (grid as GridComponent).calculatePageSizeByParentHeight((value as number).toString()) };
    setPageSize(newValue);
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}>Select page size:</label>
    <NumericTextBoxComponent placeholder='select container height' format='####.##' min={150} step={50} width={200} change={calculatePageSize}></NumericTextBoxComponent>
    <GridComponent dataSource={data} ref={g => grid = g} allowPaging={true} pageSettings={pageSize}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C" textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='Verified' headerText='Verified' width='150' displayAsCheckBox={true} />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>)
};
export default App;

