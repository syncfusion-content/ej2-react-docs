import {
  FieldList, IDataSet, Inject, PivotViewComponent
} from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import * as React from 'react';
import { pivotData } from './datasource';

function App() {

  let dataSourceSettings: DataSourceSettingsModel = {
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    enableSorting: true,
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    filters: []
  };

  let gridSettings: GridSettings = {
    columnRender: function (args: any) {
      // Specific column(s) can be hidden by checking their level name and setting its visible property accordingly.
      for (let i = 1; i < args.columns.length; i++) {
        if (args.stackedColumns[i].customAttributes &&
          args.stackedColumns[i].customAttributes.cell.valueSort.levelName === 'FY 2016.Units Sold') {
          args.stackedColumns[i].visible = false;
        }
      }
    }
  } as GridSettings;

  let pivotObj: PivotViewComponent;

  return (<PivotViewComponent id='PivotView' ref={ (d: PivotViewComponent) => pivotObj = d } dataSourceSettings={dataSourceSettings}
    gridSettings={gridSettings} width={'100%'} height={350}>
    <Inject services={[FieldList]} />
  </PivotViewComponent>);

};
export default App;
