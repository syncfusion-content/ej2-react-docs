import * as React from 'react';
import {
    PivotViewComponent, Inject, Toolbar
} from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { pivotData } from './datasource';
function App() {
  let dataSourceSettings: DataSourceSettingsModel = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  };
  let pivotObj: PivotViewComponent;
   let toolbarOptions: any = '#template';

  
    return (<div><div><PivotViewComponent id='PivotView' ref={ (d: PivotViewComponent) => pivotObj = d } dataSourceSettings={dataSourceSettings} width={'100%'} height={350} showToolbar={true} toolbarTemplate={toolbarOptions} ><Inject services={[ Toolbar]} /></PivotViewComponent></div><div id='template'><div><ButtonComponent id='expandall'  cssClass="e-flat e-primary" onClick={expandAll.bind(this)}>EXPAND ALL</ButtonComponent><ButtonComponent id='collapseall'  cssClass="e-flat e-primary" onClick={collapseAll.bind(this)}>COLLAPSE ALL</ButtonComponent></div></div></div>);

    function expandAll() {
        pivotObj.dataSourceSettings.expandAll=true;
    }
    function collapseAll() {
        pivotObj.dataSourceSettings.expandAll=false;
    }
};
export default App;
