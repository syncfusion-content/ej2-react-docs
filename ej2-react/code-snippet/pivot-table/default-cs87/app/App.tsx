import { FieldList, IDataOptions, IDataSet, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';

function App() {

  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Products' }],
    dataSource: pivotData as IDataSet[],
    filters: [],
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  }
  let pivotObj: PivotViewComponent;

  return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true} enginePopulated={afterPopulate.bind(this)} ><Inject services={[FieldList]} /></PivotViewComponent>);

  function afterPopulate(): void {
     Object.keys(pivotObj.engineModule.fieldList).forEach((key, index) => {
        if (key === 'Quarter') {
          pivotObj.engineModule.fieldList[key].caption = 'Production Quarter Year';
        }
        else if (key === 'Year') {
          pivotObj.engineModule.fieldList[key].caption = 'Production Year';
        }
      });  
  }
};

export default App;
