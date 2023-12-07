import { ColumnDirective, ColumnsDirective, GridComponent, SearchSettingsModel } from '@syncfusion/ej2-react-grids';
import { Inject, Search, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns'

function App() {
  const [searchOptions, setSearchOptions] = useState<SearchSettingsModel>({ operator: 'contains' });
  const toolbarOptions: ToolbarItems[] = ['Search'];
  const ddlData: { [key: string]: Object; }[] = [
    { text: 'startswith', value: 'startswith' },
    { text: 'endswith', value: 'endswith' },
    { text: 'wildcard', value: 'wildcard' },
    { text: 'like', value: 'like' },
    { text: 'equal', value: 'equal' },
    { text: 'notequal', value: 'notequal' },
  ];

  const valueChange = (args: ChangeEventArgs) => {
    const searchOperator: SearchSettingsModel = { operator: args.value };
    setSearchOptions(searchOperator);
  }
  return (<div>
    <label style={{ padding: "10px 10px 26px 0" }}>Change the search operators:</label>
    <DropDownListComponent id="value" index={0} width={100} dataSource={ddlData} change={valueChange}></DropDownListComponent>
    <GridComponent dataSource={data} toolbar={toolbarOptions} searchSettings={searchOptions}
      height={272}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' width='100' />
        <ColumnDirective field='EmployeeID' width='100' textAlign="Right" />
        <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right" />
        <ColumnDirective field='ShipCountry' width='100' />
      </ColumnsDirective>
      <Inject services={[Search, Toolbar]} />
    </GridComponent></div>)
};
export default App;