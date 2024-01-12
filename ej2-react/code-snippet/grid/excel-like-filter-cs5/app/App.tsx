import { ColumnDirective, ColumnsDirective, Page, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import { Filter, FilterSettingsModel, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { categoryData } from './datasource';
function App() {
  const FilterOptions: FilterSettingsModel = {
    type: 'Excel'
  };

  const categoryIcons: { [key: string]: string } = {
    Beverages: 'fas fa-coffee',
    Condiments: 'fas	fa-leaf',
    Confections: 'fas fa-birthday-cake',
    DairyProducts: 'fas fa-ice-cream',
    Grains: 'fas fa-seedling',
    Meat: 'fas fa-drumstick-bite',
    Produce: 'fas fa-carrot',
    Seafood: 'fas fa-fish',
  };

  const customFilter = (props) => {
    return (<div><span className={categoryIcons[props.CategoryName]}></span>
      {props.CategoryName} </div>)
  }
  const columnFilterSettings: Object = {
    type: 'CheckBox',
    itemTemplate: customFilter
  }
  const pageOptions: PageSettingsModel = { pageSize: 6 };
  return <GridComponent dataSource={categoryData} filterSettings={FilterOptions} allowFiltering={true} height={273} allowPaging={true} pageSettings={pageOptions} >
    <ColumnsDirective>
      <ColumnDirective field='CategoryName' headerText='CategoryName' width='100' textAlign="Right" filter={columnFilterSettings} />
      <ColumnDirective field='Discontinued' headerText='Discontinued' width='100' displayAsCheckBox={true} />
      <ColumnDirective field='ProductID' headerText='ProductID' width='100' />
    </ColumnsDirective>
    <Inject services={[Filter, Page]} />
  </GridComponent>
};
export default App;