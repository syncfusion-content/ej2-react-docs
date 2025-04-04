import { CalculatedField, FieldList, IDataSet, Inject, PivotViewComponent, PivotActionCompleteEventArgs } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { pivotData } from './datasource';

function App() {

  let dataSourceSettings: DataSourceSettingsModel = {
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
    filters: [],
    calculatedFieldSettings: [{ name: 'Total', formula: '"Sum(Amount)"+"Sum(Sold)"' }]
  }
  let pivotObj: PivotViewComponent;
  function actionComplete(args: PivotActionCompleteEventArgs): void {
    if (args.actionName == 'Calculated field applied') {
        // Triggers when the calculated field is applied.
    }
  }

  return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings} actionComplete={actionComplete.bind(this)} allowCalculatedField={true} showFieldList={true} ><Inject services={[CalculatedField, FieldList]} /></PivotViewComponent>);
};

export default App;
