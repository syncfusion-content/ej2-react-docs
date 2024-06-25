

import { IDataOptions, IDataSet, PivotViewComponent, DisplayOption, Inject, PivotChart } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartSettings';

function App() {

  let displayOption: DisplayOption = {
    view: 'Chart'
  } as DisplayOption;

  let chartSettings: ChartSettings = {
    chartSeries: { type: 'Column' },
    multiLevelLabelRender(e) {
      e.alignment = 'Near';
      e.textStyle = { fontFamily: 'Bold', fontWeight: '400', size: '16px', color: 'red' };
      if (e.text === ' + United Kingdom') {
        e.text = 'Text Changed';
        e.textStyle = { fontFamily: 'Bold', fontWeight: '800', size: '16px', color: 'Blue' };
      }
    }
  } as ChartSettings;

  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    filters: [],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  }
  let pivotObj: PivotViewComponent;
    return (<PivotViewComponent height={350} ref={d => pivotObj = d} id='PivotView' chartSettings={chartSettings} displayOption={displayOption} dataSourceSettings={dataSourceSettings}><Inject services={[PivotChart]}/></PivotViewComponent>);
};

export default App;
ReactDOM.render(<App />, document.getElementById('root'));



