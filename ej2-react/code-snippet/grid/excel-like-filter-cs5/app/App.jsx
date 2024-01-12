import { ColumnDirective, ColumnsDirective, Page } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { categoryData } from './datasource';
function App() {
  const FilterOptions = {
    type: 'Excel'
  };

  const categoryIcons = {
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
  const columnFilterSettings = {
    type: 'CheckBox',
    itemTemplate: customFilter
  }
  const pageOptions = { pageSize: 6 };
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