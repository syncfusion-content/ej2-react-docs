

import { DataManager, Query } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { ColumnDirective, ColumnsDirective, EditSettingsModel, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, IEditCell, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { cascadeData } from './datasource';

function App() {
  let countryElem: HTMLElement;
  let countryObj: DropDownList;
  let stateElem: HTMLElement;
  let stateObj: DropDownList;
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const countryParams: IEditCell = {
    create: () => {
      countryElem = document.createElement('input');
      return countryElem;
    },
    destroy: () => {
      countryObj.destroy();
    },
    read: () => {
      return countryObj.text;
    },
    write: () => {
      countryObj = new DropDownList({
        change: () => {
          stateObj.enabled = true;
          const tempQuery: Query = new Query().where('countryId', 'equal', countryObj.value);
          stateObj.query = tempQuery;
          stateObj.text = '';
          stateObj.dataBind();
        },
        dataSource: new DataManager(country),
        fields: { value: 'countryId', text: 'countryName' },
        floatLabelType: 'Never',
        placeholder: 'Select a country'
      });
      countryObj.appendTo(countryElem);
    }
  };
  const stateParams: object = {
    create: () => {
      stateElem = document.createElement('input');
      return stateElem;
    },
    destroy: () => {
      stateObj.destroy();
    },
    read: () => {
      return stateObj.text;
    },
    write: () => {
      stateObj = new DropDownList({
        dataSource: new DataManager(stateColl),
        enabled: false,
        fields: { value: 'stateId', text: 'stateName' },
        floatLabelType: 'Never',
        placeholder: 'Select a state'
      });
      stateObj.appendTo(stateElem);
    }
  };
  const country: object[] = [
    { countryName: 'United States', countryId: '1' },
    { countryName: 'Australia', countryId: '2' }
  ];
  const stateColl: object[] = [
    { stateName: 'New York', countryId: '1', stateId: '101' },
    { stateName: 'Virginia ', countryId: '1', stateId: '102' },
    { stateName: 'Washington', countryId: '1', stateId: '103' },
    { stateName: 'Queensland', countryId: '2', stateId: '104' },
    { stateName: 'Tasmania ', countryId: '2', stateId: '105' },
    { stateName: 'Victoria', countryId: '2', stateId: '106' }
  ];
  return <GridComponent dataSource={cascadeData} editSettings={editOptions}
    toolbar={toolbarOptions} height={273}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' edit={countryParams} textAlign="Right" />
      <ColumnDirective field='ShipState' headerText='Ship State' editType='dropdownedit' edit={stateParams} width='150' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>
};
export default App;


