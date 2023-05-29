

import { IDataOptions, IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';

const SAMPLE_CSS = `
  .e-pivotview .e-cellselectionbackground,
  .e-pivotview .e-selectionbackground,
  .e-pivotview .e-grid .e-rowsheader. e-selectionbackground,
  .e-pivotview .e-grid .e-columnsheader.e-selectionbackground {
    background-color: greenYellow !important;
  }`;
  
function App() {
  let gridSettings: GridSettings = {
    allowSelection: true,
    selectionSettings: { cellSelectionMode: 'Box', type: 'Multiple', mode: 'Cell' }
  } as GridSettings;

  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    filters: [],
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  }
  let pivotObj: PivotViewComponent;
  
    return (
        <div>
            <style>{SAMPLE_CSS}</style>
            <PivotViewComponent  ref={d => pivotObj = d} id='PivotView' height={350} gridSettings={gridSettings} dataSourceSettings={dataSourceSettings} ></PivotViewComponent>
        </div>
    );
};

export default App;
ReactDOM.render(<App />, document.getElementById('sample'));



