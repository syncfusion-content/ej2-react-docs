import {
  FieldList, Inject, PivotViewComponent, CalculatedField, Toolbar,
  ConditionalFormatting, NumberFormatting, PDFExport, ExcelExport
} from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import{ getInstance, select} from '@syncfusion/ej2-base';
import {DropDownList} from '@syncfusion/ej2-dropdowns';
import { pivotData } from './datasource';
import './App.css';

function App() {
  let isInitial = true;

  let dataSourceSettings = {
    dataSource: pivotData,
    columns: [{ name: 'Year' }, { name: 'Quarter' }],
    values: [{ name: 'Sold' }, { name: 'Amount' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
  }
  let pivotObj;
  let toolbarOptions = ['New', 'Save', 'SaveAs', 'Rename', 'Remove', 'Load',
    'Grid', 'Chart', 'Export', 'SubTotal', 'GrandTotal', 'ConditionalFormatting', 'NumberFormatting', 'FieldList'];
  function saveReport(args) {
    let reports = [];
    let isSaved = false;
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      reports = JSON.parse(localStorage.pivotviewReports);
    }
    if (args.report && args.reportName && args.reportName !== '' && args.reportName !== 'Sample Report') {
      reports.map(function (item) {
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
  function fetchReport(args) {
    let reportCollection = [];
    let reeportList = [];
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      reportCollection = JSON.parse(localStorage.pivotviewReports);
    }
    reportCollection.map(function (item) { reeportList.push(item.reportName); });
    args.reportName = reeportList;
  }
  function loadReport(args) {
    let reportCollection = [];
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      reportCollection = JSON.parse(localStorage.pivotviewReports);
    }
    reportCollection.map(function (item) {
      if (args.reportName === item.reportName) {
        args.report = item.report;
      }
    });
    if (args.report) {
      pivotObj.dataSourceSettings = JSON.parse(args.report).dataSourceSettings;
    }
  }
  function removeReport(args) {
    let reportCollection= [];
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      reportCollection = JSON.parse(localStorage.pivotviewReports);
    }
    for (let i = 0; i < reportCollection.length; i++) {
      if (reportCollection[i].reportName === args.reportName) {
        reportCollection.splice(i, 1);
      }
    }
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      localStorage.pivotviewReports = JSON.stringify(reportCollection);
    }
  }
  function renameReport(args) {
    let reportCollection= [];
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      reportCollection = JSON.parse(localStorage.pivotviewReports);
    }
    if (args.isReportExists) {
      for (let i = 0; i < reportCollection.length; i++) {
        if (reportCollection[i].reportName === args.rename) {
          reportCollection.splice(i, 1);
        }
      }
    }
    reportCollection.map(function (item) {
      if (args.reportName === item.reportName) {
        item.reportName = args.rename;
      }
    });
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      localStorage.pivotviewReports = JSON.stringify(reportCollection);
    }
  }
  function dataBound() {
    if (pivotObj && isInitial) {
      isInitial = false;
      pivotObj.toolbarModule.action = 'Load';
      /* replace the report name by yours */
      let reportList = getInstance(select('#' + pivotObj.element.id + '_reportlist', pivotObj.element), DropDownList);
      reportList.value = 'Default report';
      loadReport({ reportName: 'Default report' });
    }
  }
  function load(){
    // Save the desired report that needs to be loaded at initial rendering here.
    let dataSourceSettings = {
      dataSource: pivotData,
      columns: [{ name: 'Year' }],
      enableSorting: true,
      allowLabelFilter: true,
      values: [{ name: 'Sold', caption: 'Units Sold' }],
      allowValueFilter: true,
      formatSettings: [{ name: 'Sold', format: 'C0' }],
      rows: [{ name: 'Country' }],
    };
    let displayOption = { view: 'Both' };
    let gridSettings = {columnWidth: 100};
    let report = { dataSourceSettings: dataSourceSettings, displayOption: displayOption, gridSettings: gridSettings };
    let reports = [
      {
        report: JSON.stringify(report),
        reportName: 'Default report',
      },
    ];
  localStorage['pivotviewReports'] = JSON.stringify(reports);
  }
  function newReport() {
    pivotObj.setProperties({ dataSource: { columns: [], rows: [], values: [], filters: [] } }, false);
  }
  function beforeToolbarRender(args) {
    args.customToolbar.splice(6, 0, {
      type: 'Separator'
    });
    args.customToolbar.splice(9, 0, {
      type: 'Separator'
    });
  }

  return (<PivotViewComponent id='PivotView' ref={d => pivotObj = d} dataSourceSettings={dataSourceSettings} width={'100%'}
    height={350} showFieldList={true} gridSettings={{ columnWidth: 140 }} allowExcelExport={true}
    allowConditionalFormatting={true} allowNumberFormatting={true} allowPdfExport={true} showToolbar={true}
    allowCalculatedField={true} displayOption={{ view: 'Both' }} toolbar={toolbarOptions} newReport={newReport.bind(this)}
    renameReport={renameReport.bind(this)} removeReport={removeReport.bind(this)} loadReport={loadReport.bind(this)}
    fetchReport={fetchReport.bind(this)} saveReport={saveReport.bind(this)} toolbarRender={beforeToolbarRender.bind(this)} dataBound={dataBound.bind(this)}
    load={load.bind(this)}>
    <Inject services={[FieldList, CalculatedField, Toolbar, PDFExport, ExcelExport, ConditionalFormatting, NumberFormatting]} />
  </PivotViewComponent>);

};
export default App;

