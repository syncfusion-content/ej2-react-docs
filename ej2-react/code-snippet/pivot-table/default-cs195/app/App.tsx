import * as React from 'react';
import { IDataSet, PivotViewComponent, Inject, VirtualScroll } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
function App() {
  let dataSourceSettings: DataSourceSettingsModel = {
            catalog: 'Adventure Works DW 2008 SE',
            cube: 'Adventure Works',
            providerType: 'SSAS',
            enableSorting: true,
            url: 'https://bi.syncfusion.com/olap/msmdpump.dll',
            localeIdentifier: 1033,
            rows: [
                { name: '[Customer].[Customer]', caption: 'Customer' },
            ],
            columns: [
                { name: '[Product].[Product Categories]', caption: 'Product Categories' },
                { name: '[Measures]', caption: 'Measures' },
            ],
            values: [
                { name: '[Measures].[Customer Count]', caption: 'Customer Count' },
                { name: '[Measures].[Internet Sales Amount]', caption: 'Internet Sales Amount' }
            ],
            formatSettings: [{ name: '[Measures].[Internet Sales Amount]', format: 'C0' }]
  };
  let pivotObj: PivotViewComponent;
    return <PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} enableVirtualization={true} dataSourceSettings={dataSourceSettings}><Inject services={[VirtualScroll]}/></PivotViewComponent>
};
export default App;
