import { GroupingBar, FieldList, Inject, IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { pivotData } from './datasource';

function App() {

  let dataSourceSettings: DataSourceSettingsModel = {
    dataSource: pivotData as IDataSet,
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount', type: 'Sum' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    filters: [],
  }
  let pivotObj: PivotViewComponent;
  let pivotAggregateTypes: any = ['DistinctCount', 'Avg', 'Product'];
    return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true} showGroupingBar={true} aggregateTypes={pivotAggregateTypes}><Inject services={[GroupingBar, FieldList]}/></PivotViewComponent>);
};

export default App;
