import { DataManager, Query } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { cascadeData } from './datasource';
function App() {
    const editOptions = { allowAdding: true, allowDeleting: true, allowEditing: true };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const country = [
        { countryName: 'United States', countryId: '1' },
        { countryName: 'Australia', countryId: '2' },
        { countryName: 'India', countryId: '3' }
    ];
    const countryParams = {
        params: {
            actionComplete: () => false,
            allowFiltering: true,
            dataSource: new DataManager(country),
            fields: { text: "countryName", value: "countryName" },
            query: new Query()
        }
    };
    return <GridComponent dataSource={cascadeData} editSettings={editOptions} toolbar={toolbarOptions} height={273}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign='Right' isPrimaryKey={true}/>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'/>
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' edit={countryParams} textAlign='Right'/>
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]}/>
  </GridComponent>;
}
;
export default App;
