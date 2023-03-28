import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { DataUtil } from '@syncfusion/ej2-data';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const fields = { text: 'CustomerID', value: 'CustomerID' };
    const filterOptions = {
        type: 'Excel'
    };
    const dropdata = DataUtil.distinct(data, 'CustomerID');
    const filterTemplate = (props) => {
        const val = isNullOrUndefined(props.CustomerID) ? '' : props.CustomerID;
        return (<DropDownListComponent id='CustomerID' value={val} popupHeight='250px' fields={fields} dataSource={dropdata}/>);
    };
    return <GridComponent ref={g => grid = g} dataSource={data} filterSettings={filterOptions} allowFiltering={true}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign="Right"/>
      <ColumnDirective field='EmployeeID' headerText='EmployeeID' width='140' textAlign="Right"/>
      <ColumnDirective field='CustomerID' filterTemplate={filterTemplate} width='140'/>
      <ColumnDirective field='ShipName' width='170' textAlign="Right"/>
    </ColumnsDirective>
    <Inject services={[Filter]}/>
  </GridComponent>;
}
;
export default App;
