import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { IDataOptions, IDataSet, PivotViewComponent, Inject, DisplayOption, PivotChart, PDFExport } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartSettings';

function App() {

  let displayOption: DisplayOption = {
    view: 'Chart'
  } as DisplayOption;

  let chartSettings: ChartSettings = {
    chartSeries: { type: 'Column' }
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

  function exportClick(): void {
    pivotObj.chartExport('PNG', 'result');
  }
    return (<div><div><ButtonComponent cssClass='e-primary' onClick={exportClick.bind(this)}>Export</ButtonComponent></div><div><PivotViewComponent height={350} ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' chartSettings={chartSettings} displayOption={displayOption} dataSourceSettings={dataSourceSettings} allowPdfExport={true} ><Inject services={[PivotChart,PDFExport]}/></PivotViewComponent></div></div>);
};

export default App;
