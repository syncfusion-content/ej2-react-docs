import { IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { pivotData } from './datasource';
import { HyperLinkSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/hypderlinksettings';

function App() {

  let dataSourceSettings: DataSourceSettingsModel = {
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    enableSorting: true,
    drilledMembers: [{ name: 'Year', items: ['FY 2015'] }, { name: 'Country', items: ['France'] }],
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    filters: []
  }
  let hyperlinkSettings: HyperLinkSettings = {
    conditionalSettings: [{
        label: 'Germany',
        conditions: 'GreaterThan',
        value1: 500
    }],
    cssClass: 'e-custom-class'
  } as HyperLinkSettings;
  let pivotObj: PivotViewComponent;
  
  return (<PivotViewComponent height={350} ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' dataSourceSettings={dataSourceSettings} hyperlinkSettings={hyperlinkSettings}></PivotViewComponent>);
};

export default App;
