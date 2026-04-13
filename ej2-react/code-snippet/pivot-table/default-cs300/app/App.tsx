
import * as React from 'react';
import {
    PivotViewComponent, Inject, Toolbar, ToolbarArgs, SaveReportArgs, FieldList
} from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { pivotData } from './datasource';
function App() {
  let dataSourceSettings: DataSourceSettingsModel = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    filters: [],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  };
  let pivotObj: PivotViewComponent;
  let toolbarOptions: any = [ "Save", "Export", "FieldList"];

    function saveReport(args: any): void {
        let reports: SaveReportArgs[] = [];
        let isSaved: boolean = false;
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            reports = JSON.parse(localStorage.pivotviewReports);
        }
        if (args.report && args.reportName && args.reportName !== '') {
            reports.map(function (item: any): any {
                if (args.reportName === item.reportName) {
                    item.report = args.report; isSaved = true;
                }
            });
            if (!isSaved) {
                reports.push(args);
            }
            localStorage.pivotviewReports = JSON.stringify(reports);
        }
    }
    function beforeToolbarRender(args: ToolbarArgs): void {
        args.customToolbar.splice(2, 0, {
            prefixIcon: 'e-rename-report e-icons', tooltipText: 'Custom Button',
            click: customButton.bind(this),
        });
        args.customToolbar.splice(3, 0, {
            prefixIcon: 'e-tool-expand e-icons', tooltipText: 'Expand/Collapse',
            click: toolbarClicked.bind(this),
        });
            args.customToolbar[0].align = "Left";
            args.customToolbar[1].align = "Center";
            args.customToolbar[2].align = "Right";
    }
    function customButton(args: any): void {
      // Here you can customize the click event for custom button
    }
    function toolbarClicked(args: any): void {
        pivotObj.dataSourceSettings.expandAll = !pivotObj.dataSourceSettings.expandAll;
    }

    return (<PivotViewComponent id='PivotView' ref={ (d: PivotViewComponent) => pivotObj = d } dataSourceSettings={dataSourceSettings} width={'100%'} height={350} gridSettings={{ columnWidth: 140 }} showToolbar={true} displayOption={{ view: 'Both' }} showFieldList={true} toolbar={toolbarOptions} toolbarRender={beforeToolbarRender.bind(this)}><Inject services={[Toolbar, FieldList]} saveReport={saveReport.bind(this)} /></PivotViewComponent>);
};
export default App;
