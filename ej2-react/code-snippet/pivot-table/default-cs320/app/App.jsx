import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import './App.css';

function App() {

  let dataSourceSettings = {
    dataSource: pivotData,
    expandAll: false,
    enableSorting: true,
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    columns: [
      { name: 'Year', caption: 'Production Year' },
      { name: 'Quarter' },
    ],
    values: [
      { name: 'Sold', caption: 'Units Sold' },
      { name: 'Amount', caption: 'Sold Amount' },
    ],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    filters: []
  }

  let pivotObj;

  function btnClick() {
    pivotObj.grid.print();
  }

  return (<div>
    <div className='col-lg-3 property-section'>
      <ButtonComponent cssClass='e-primary' isPrimary={true} onClick={btnClick.bind(this)}>Print</ButtonComponent>
    </div>
    <div className="col-md-9">
      <PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings}></PivotViewComponent>
    </div>
  </div>);

};
export default App;
