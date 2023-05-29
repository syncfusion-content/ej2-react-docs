

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { IDataOptions, IDataSet, PivotViewComponent, FieldList, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {

  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year' }],
    dataSource: [
  { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
  { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
  { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
  { 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
  { 'Sold': 27, 'Amount': 46008, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' }] as IDataSet[],
    expandAll: false,
    filters: [],
    rows: [{ name: 'Country' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }]
  };
  let pivotObj: PivotViewComponent;
  
  return (<div><div className="col-md-9"> <PivotViewComponent  ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true}><Inject services={[FieldList]} /></PivotViewComponent></div><div className='col-lg-3 property-section'><ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Refresh</ButtonComponent></div></div>);

  function btnClick(): void {
    pivotObj.engineModule.fieldList = {};
    pivotObj.dataSourceSettings.dataSource = [
            { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Year': 'FY 2015' },
            { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Year': 'FY 2015' },
            { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Year': 'FY 2015' },
            { 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Year': 'FY 2015' },
            { 'Sold': 27, 'Amount': 46008, 'Country': 'France', 'Year': 'FY 2016' }];
  }
};

export default App;
ReactDOM.render(<App />, document.getElementById('sample'));



