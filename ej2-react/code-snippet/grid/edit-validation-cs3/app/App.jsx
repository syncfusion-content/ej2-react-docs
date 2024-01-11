import { ColumnDirective, ColumnsDirective, getObject, GridComponent, Page } from '@syncfusion/ej2-react-grids';
import { Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules = { required: true, number: true };
  const customerIDRules = { required: true };
  const freightRules = { required: true };
  const countryRules = { required: true };
  const editparams = { params: { popupHeight: '200px' } };
  const pageSettings = { pageCount: 5 };
  const onActionComplete = (args) => {
    if (args.requestType === "beginEdit" || args.requestType === "add") {
      const valueError = getObject('valErrorPlacement', grid.editModule).bind(grid.editModule);
      grid.editModule.formObj.customPlacement = (input, error) => {
        valueError(input, error);
        const element = document.getElementById(input.name + '_Error');
        const tooltipWidth = element.offsetWidth;
        let inputElement = null;
        if (document.querySelector('#' + grid.element.id + input.name)) {
          inputElement = document.querySelector('#' + grid.element.id + input.name);
        } else if (document.querySelector('#' + input.name)) {
          inputElement = document.querySelector('#' + input.name);
        }
        const inputPosition = inputElement.getBoundingClientRect();
        const leftPosition = (inputPosition.left - tooltipWidth - 16).toString() + 'px'; //for right side
        const topPosition = (inputPosition.top).toString() + 'px';
        element.style.left = leftPosition;
        element.style.top = topPosition;
        element.style.position = 'fixed';
      }
    }
  }
  return (<div>
    <GridComponent id='Grid' ref={g => grid = g} dataSource={data} editSettings={editOptions}
      toolbar={toolbarOptions} height={315} actionComplete={onActionComplete} allowPaging={true} pageSettings={pageSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' validationRules={orderIDRules} width='100' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' validationRules={customerIDRules} />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" editType='numericedit' textAlign="Right" validationRules={freightRules} />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width='150' validationRules={countryRules} edit={editparams} />
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar, Page]} />
    </GridComponent></div>)
};
export default App;