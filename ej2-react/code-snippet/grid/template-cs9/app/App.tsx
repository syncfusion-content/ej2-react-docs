import { Grid, ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

function App() {
  let grid: Grid | null;
  let fields: Object = { text: 'ShipCountry', value: 'ShipCountry' };
  const columnTemplate = ((props: any) => {
    return (
      <div>
        <DropDownListComponent
          id={props.OrderID}
          dataSource={data}
          value={props.ShipCountry}
          fields={fields}
          index={0}
        ></DropDownListComponent>
      </div>
    );
  });
  const headerTemplate = ((props: any) => {
    return (<div>
      <span className={"e-icons e-location"}></span> Ship Country
    </div>
    );
  });
  const addTemplateColumn = () => {
    let templateColumnValues: Object = {
      field: 'ShipCountry',
      headerText: 'Ship Country',
      width: 100,
      template: columnTemplate,
      headerTemplate: headerTemplate,
    };
    grid.columns.push(templateColumnValues);
    grid.refreshColumns();
  };
  return (
    <div>
      <ButtonComponent
        id="button"
        cssClass="e-outline"
        onClick={addTemplateColumn}
      >
        Add Column
      </ButtonComponent>
      <GridComponent ref={g => grid = g} dataSource={data} height={315} enableHover={false}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
          <ColumnDirective field='Freight' headerText='Freight' width='120' />
        </ColumnsDirective>
      </GridComponent></div>)
}
export default App;