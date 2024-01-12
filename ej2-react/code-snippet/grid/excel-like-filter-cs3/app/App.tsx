
import { ColumnDirective, ColumnsDirective, Page, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import { Filter, FilterSettingsModel, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { categoryData } from './datasource';
function App() {
  const FilterOptions: FilterSettingsModel = {
    type: 'Excel'
  };
  const customFilter = (props) => {
    return props.Delivered ? 'Delivered' : 'Not delivered';
  }
  const columnFilterSettings: Object = {
    type: 'CheckBox',
    itemTemplate: customFilter
  }
  const pageOptions: PageSettingsModel = { pageSize: 6 };
  return <GridComponent dataSource={categoryData} filterSettings={FilterOptions} allowFiltering={true} height={273} allowPaging={true} pageSettings={pageOptions} >
    <ColumnsDirective>
      <ColumnDirective field='CategoryName' headerText='CategoryName' width='100' textAlign="Right" />
      <ColumnDirective field='Delivered' headerText='Delivered' width='100' displayAsCheckBox={true} filter={columnFilterSettings} />
      <ColumnDirective field='ProductID' headerText='ProductID' width='100' />
    </ColumnsDirective>
    <Inject services={[Filter, Page]} />
  </GridComponent>
};
export default App;
