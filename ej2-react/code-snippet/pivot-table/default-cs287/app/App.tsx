import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { pivotData } from './datasource';

function App() {

  let dataSourceSettings: DataSourceSettingsModel = {
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

  return (<div><div className="col-md-9"> <PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings}></PivotViewComponent></div><div className='col-lg-3 property-section'><div><ButtonComponent cssClass='e-primary' onClick={save.bind(this)}>Save</ButtonComponent></div><br/><div><ButtonComponent cssClass='e-primary' onClick={load.bind(this)}>Load</ButtonComponent></div></div>
    </div>);
  function save(): void {
    report = pivotObj.getPersistData();
  }
  function load(): void {
    pivotObj.loadPersistData(report);
  }
};

export default App;



