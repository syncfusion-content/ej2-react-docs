import {
  FieldList, IDataOptions, Inject, PivotViewComponent, CalculatedField, Toolbar, RemoveReportArgs, ToolbarArgs,
  ConditionalFormatting, IDataSet, RenameReportArgs, SaveReportArgs, FetchReportArgs,
  LoadReportArgs, NumberFormatting, PDFExport, ExcelExport, GroupingBar, GroupingBarSettings,
  CellEditSettings, Grouping
} from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartSettings';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import './App.css';

function App() {
  let dataSourceSettings: IDataOptions = {
    dataSource: pivotData as IDataSet[],
    expandAll: true,
    enableSorting: true,
    allowLabelFilter: true,
    allowValueFilter: true,
    sortSettings: [{ name: 'company', order: 'Descending' }],
    formatSettings: [{ name: 'balance', format: 'C' }, { name: 'date', format: 'dd/MM/yyyy-hh:mm', type: 'date' }],
    drilledMembers: [{ name: 'product', items: ['Bike', 'Car'] }, { name: 'gender', items: ['male'] }],
    filterSettings: [
      { name: 'date', type: 'Date', condition: 'Between', value1: new Date('02/16/2000'), value2: new Date('02/16/2002') },
      { name: 'age', type: 'Number', condition: 'Between', value1: '25', value2: '35' },
      { name: 'eyeColor', type: 'Exclude', items: ['blue'] }
    ],
    rows: [{ name: 'state' }, { name: 'eyeColor' }],
    columns: [{ name: 'gender', caption: 'Population' }, { name: 'isActive' }],
    values: [{ name: 'balance' }, { name: 'quantity' }],
    filters: [],
    conditionalFormatSettings: [
      {
        measure: 'balance',
        value1: 100000,
        conditions: 'LessThan',
        style: {
          backgroundColor: '#80cbc4',
          color: 'black',
          fontFamily: 'Tahoma',
          fontSize: '12px'
        }
      },
      {
        value1: 10,
        value2: 20,
        measure: 'quantity',
        conditions: 'Between',
        style: {
          backgroundColor: '#f48fb1',
          color: 'black',
          fontFamily: 'Tahoma',
          fontSize: '12px'
        }
      }
    ]
  }
  let pivotObj: PivotViewComponent;
  let toolbarOptions: any = ['New', 'Save', 'SaveAs', 'Rename', 'Remove', 'Load',
    'Grid', 'Chart', 'Export', 'SubTotal', 'GrandTotal', 'ConditionalFormatting', 'NumberFormatting', 'FieldList'];
  let groupingSettings: GroupingBarSettings = {
    showFieldsPanel: true
  } as GroupingBarSettings;
  let chartSettings: ChartSettings = {
    value: 'Amount', enableExport: true, chartSeries: {
      type: 'Column', animation: { enable: false }
    }, enableMultipleAxis: false,
  } as ChartSettings;
  let editSettings: CellEditSettings = {
    allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal'
  } as CellEditSettings
  let gridSettings: GridSettings = {
    columnWidth: 140,
    contextMenuItems: [
      'Aggregate', 'CalculatedField', 'Drillthrough', 'Excel Export', 'Pdf Export', 'Csv Export', 'Expand', 'Collapse', 'Sort Ascending', 'Sort Descending'
    ]
  } as GridSettings;
  function saveReport(args: any): void {
    let reports: SaveReportArgs[] = [];
    let isSaved: boolean = false;
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      reports = JSON.parse(localStorage.pivotviewReports);
    }
    if (args.report && args.reportName && args.reportName !== '' && args.reportName !== 'Sample Report') {
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
      pivotObj.dataSourceSettings = JSON.parse(args.report).dataSourceSettings;
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
    let reportCollection: any[] = [];
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      reportCollection = JSON.parse(localStorage.pivotviewReports);
    }
    if (args.isReportExists) {
      for (let i: number = 0; i < reportCollection.length; i++) {
        if (reportCollection[i].reportName === args.rename) {
          reportCollection.splice(i, 1);
        }
      }
    }
    reportCollection.map(function (item: any): any {
      if (args.reportName === item.reportName) {
        item.reportName = args.rename;
      }
    });
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      localStorage.pivotviewReports = JSON.stringify(reportCollection);
    }
  }
  function newReport(): void {
    pivotObj.setProperties({ dataSource: { columns: [], rows: [], values: [], filters: [] } }, false);
  }
  function beforeToolbarRender(args: any): void {
    args.customToolbar.splice(6, 0, {
      type: 'Separator'
    });
    args.customToolbar.splice(9, 0, {
      type: 'Separator'
    });
  }

  return (<PivotViewComponent id='PivotView' ref={ (d: PivotViewComponent) => pivotObj = d } dataSourceSettings={dataSourceSettings} width={'100%'}
    height={350} showFieldList={true} gridSettings={gridSettings} allowExcelExport={true}
    allowConditionalFormatting={true} allowNumberFormatting={true} allowPdfExport={true} showToolbar={true}
    allowCalculatedField={true} displayOption={{ view: 'Both' }} toolbar={toolbarOptions} newReport={newReport.bind(this)}
    renameReport={renameReport.bind(this)} removeReport={removeReport.bind(this)} loadReport={loadReport.bind(this)}
    fetchReport={fetchReport.bind(this)} saveReport={saveReport.bind(this)} toolbarRender={beforeToolbarRender.bind(this)}
    showGroupingBar={true} groupingBarSettings={groupingSettings} chartSettings={chartSettings} allowGrouping={true}
    allowDeferLayoutUpdate={true} editSettings={editSettings}><Inject services={[
      FieldList, CalculatedField, Toolbar, PDFExport, ExcelExport, ConditionalFormatting, NumberFormatting, GroupingBar, Grouping
    ]} /></PivotViewComponent>
  );

};
export default App;
