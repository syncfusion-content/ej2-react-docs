import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const loadData = () => {
    grid.showSpinner();
    setTimeout(() => {
      grid.dataSource = data;
      grid.hideSpinner();
    }, 1000);
  }

  const showhideSpinner = (args) => {
    if (args.currentTarget.id === 'showButton') {
      grid.showSpinner();
    } else {
      grid.hideSpinner();
    }
  }
  return <div>
    <ButtonComponent id='loadButton' cssClass='e-outline' onClick={loadData}>Load Data</ButtonComponent>
    <ButtonComponent id='showButton' cssClass='e-outline' style={{ marginLeft: "5px" }} onClick={showhideSpinner}>Show Spinner</ButtonComponent>
    <ButtonComponent id='hideButton' cssClass='e-outline' style={{ marginLeft: "5px" }} onClick={showhideSpinner}>Hide Spinner</ButtonComponent>
    <GridComponent ref={g => { grid = g }} height='280' allowPaging={true}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey={true} width='120' textAlign='Right'></ColumnDirective>
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='160'></ColumnDirective>
        <ColumnDirective field='ProductName' headerText='Product Name' width='130' textAlign='Right' />
        <ColumnDirective field='Quantity' headerText='Quantity' width='120' />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent>
  </div>
}
export default App; 