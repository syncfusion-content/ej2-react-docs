

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { IDataOptions, IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';

function App() {

  let dataSourceSettings: IDataOptions = {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        drilledMembers: [{ name: 'Country', items: ['France', 'Germany'] }],
        columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'In_Stock', caption: 'In Stock' },
        { name: 'Sold', caption: 'Units Sold' }],
        filters: [{ name: 'Product_Categories', caption: 'Product Categories' }]
  }
  let pivotObj: PivotViewComponent;
  let report: string;

  return (<div><div className="col-md-9"> <PivotViewComponent  ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings}></PivotViewComponent></div><div className='col-lg-3 property-section'><div><ButtonComponent cssClass='e-primary' onClick={save.bind(this)}>Save</ButtonComponent></div><br/><div><ButtonComponent cssClass='e-primary' onClick={load.bind(this)}>Load</ButtonComponent></div></div>
    </div>);
  function save(): void {
    report = pivotObj.getPersistData();
  }
  function load(): void {
    pivotObj.loadPersistData(report);
  }
};

export default App;
ReactDOM.render(<App />, document.getElementById('sample'));


