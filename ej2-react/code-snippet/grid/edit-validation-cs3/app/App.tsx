import { ColumnDirective, ColumnsDirective, EditEventArgs, getObject, GridComponent, PageSettingsModel, Page } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules: object = { required: true, number: true };
  const customerIDRules: object = { required: true };
  const freightRules: object = { required: true };
  const countryRules: object = { required: true };
  const editparams: object = { params: { popupHeight: '200px' } };
  const pageSettings: PageSettingsModel = { pageCount: 5 };
  const onActionComplete = (args: EditEventArgs) => {
    if (args.requestType == "beginEdit" || args.requestType == "add") { 
      var valueError = getObject('valErrorPlacement', (grid as GridComponent).editModule).bind((grid as GridComponent).editModule);  
      (grid as GridComponent).editModule.formObj.customPlacement = (input, error) => { 
        valueError(input, error);
        debugger;
        var element = document.getElementById(input.name + '_Error');
        var tooltipWidth = (element as HTMLElement).offsetWidth;
        var  inputElement:Element|null = null;
        if (document.querySelector('#' + (grid as GridComponent).element.id + input.name)) {
          inputElement = document.querySelector('#' +(grid as GridComponent).element.id + input.name);
        } else if (document.querySelector('#' + input.name)) {
          inputElement = document.querySelector('#' + input.name);
        }
        var inputPosition = ( inputElement as Element).getBoundingClientRect();
        var leftPosition =  (inputPosition.left - tooltipWidth - 16).toString() + 'px'; //for right side
        var topPosition = (inputPosition.top).toString() + 'px';
        (element as HTMLElement).style.left = leftPosition; 
        (element as HTMLElement).style.top =  topPosition;
        (element as HTMLElement).style.position = 'fixed';
      } 
    } 
  }
  return (<div>
    <GridComponent id='Grid' ref={g => grid = g} dataSource={data} editSettings={editOptions} 
      toolbar={toolbarOptions} height={260} actionComplete={onActionComplete} allowPaging={true} pageSettings={pageSettings}>
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