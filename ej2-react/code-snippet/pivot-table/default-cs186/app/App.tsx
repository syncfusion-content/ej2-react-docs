
import * as React from 'react';
import {
    PivotViewComponent, IDataOptions, Inject, FieldList, CalculatedField,
    Toolbar, PDFExport, ExcelExport, ConditionalFormatting, SaveReportArgs,
    FetchReportArgs, LoadReportArgs, RemoveReportArgs, RenameReportArgs, NumberFormatting
} from '@syncfusion/ej2-react-pivotview';
import { pivotData } from './datasource';
import './App.css';

function App() {
  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    filters: [],
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  };
  let pivotObj: PivotViewComponent;
   let toolbarOptions: any = ['New', 'Save', 'SaveAs', 'Rename', 'Remove', 'Load',
        'Grid', 'Chart', 'Export', 'SubTotal', 'GrandTotal', 'ConditionalFormatting', 'NumberFormatting', 'FieldList'];


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
    function fetchReport(args: FetchReportArgs): void {
        let reportCollection: string[] = [];
        let reeportList: string[] = [];
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            reportCollection = JSON.parse(localStorage.pivotviewReports);
        }
        reportCollection.map(function (item: any): void { reeportList.push(item.reportName); });
        args.reportName = reeportList;
    }
    function loadReport(args: LoadReportArgs): void {
        let reportCollection: string[] = [];
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            reportCollection = JSON.parse(localStorage.pivotviewReports);
        }
        reportCollection.map(function (item: any): void {
            if (args.reportName === item.reportName) {
                args.report = item.report;
            }
        });
        if (args.report) {
            pivotObj.dataSource = JSON.parse(args.report).dataSource;
        }
    }
    function removeReport(args: RemoveReportArgs): void {
        let reportCollection: any[] = [];
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            reportCollection = JSON.parse(localStorage.pivotviewReports);
        }
        for (let i: number = 0; i < reportCollection.length; i++) {
            if (reportCollection[i].reportName === args.reportName) {
                reportCollection.splice(i, 1);
            }
        }
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            localStorage.pivotviewReports = JSON.stringify(reportCollection);
        }
    }
    function renameReport(args: RenameReportArgs): void {
        let reportCollection: string[] = [];
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            reportCollection = JSON.parse(localStorage.pivotviewReports);
        }
        reportCollection.map(function (item: any): any { if (args.reportName === item.reportName) { item.reportName = args.rename; } });
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            localStorage.pivotviewReports = JSON.stringify(reportCollection);
        }
    }
    function newReport(): void {
        pivotObj.setProperties({ dataSource: { columns: [], rows: [], values: [], filters: [] } }, false);
    }

    return (<PivotViewComponent id='PivotView' ref={ (d: PivotViewComponent) => pivotObj = d } dataSourceSettings={dataSourceSettings} width={'100%'} height={350} showFieldList={true} gridSettings={{ columnWidth: 140 }} allowExcelExport={true} allowConditionalFormatting={true} allowNumberFormatting={true} allowPdfExport={true} showToolbar={true} allowCalculatedField={true} displayOption={{ view: 'Both' }} toolbar={toolbarOptions} newReport={newReport.bind(this)} renameReport={renameReport.bind(this)} removeReport={removeReport.bind(this)} loadReport={loadReport.bind(this)} fetchReport={fetchReport.bind(this)} saveReport={saveReport.bind(this)}><Inject services={[FieldList, CalculatedField, Toolbar, PDFExport, ExcelExport, ConditionalFormatting, NumberFormatting]} /></PivotViewComponent>);
};
export default App;
