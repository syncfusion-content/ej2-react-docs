import { FieldList, Inject, PivotViewComponent, IDataSet, PivotActionBeginEventArgs, Toolbar, PDFExport } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { pivotData } from './datasource';

function App() {

  let dataSourceSettings: DataSourceSettingsModel = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    filters: [],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  }
  let pivotObj: PivotViewComponent;
  let toolbarOptions: any = ['Grid', 'Chart', 'Export', 'FieldList'];
  function actionBegin(args: PivotActionBeginEventArgs): void {
    if (args.actionName === 'PDF export') {
      args.cancel = true;
      pivotObj.pdfExport({}, false, undefined, false, true);
    }
  }

  return (<PivotViewComponent ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} showToolbar={true}
    dataSourceSettings={dataSourceSettings} showFieldList={true} allowPdfExport={true} enableVirtualization={true}
    displayOption={{ view: 'Both' }} toolbar={toolbarOptions} actionBegin={actionBegin.bind(this)}>
    <Inject services={[FieldList, Toolbar, PDFExport]} />
  </PivotViewComponent>);

};
export default App;

