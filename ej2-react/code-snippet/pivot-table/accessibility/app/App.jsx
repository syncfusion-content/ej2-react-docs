import {
  FieldList, Inject, PivotViewComponent, CalculatedField, Toolbar, GroupingBar,
  ConditionalFormatting, NumberFormatting, PDFExport, ExcelExport, Grouping,
  FieldList, Inject, PivotViewComponent, CalculatedField, Toolbar,
  ConditionalFormatting, NumberFormatting, PDFExport, ExcelExport
} from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as data from './datasource.json';
import './App.css';

function App() {
  let pivotData = data.pivotData;
  var dataSourceSettings = {
    dataSource: pivotData,
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
  var pivotObj;
  var toolbarOptions = [
    'New', 'Save', 'SaveAs', 'Rename', 'Remove', 'Load', 'Grid', 'Chart', 'Export', 'SubTotal', 'GrandTotal',
    'ConditionalFormatting', 'NumberFormatting', 'FieldList'
  ];
  var groupingSettings = {
    showFieldsPanel: true
  };
  var chartSettings = {
    value: 'Amount', enableExport: true, chartSeries: {
      type: 'Column', animation: { enable: false }
    }, enableMultipleAxis: false
  };
  var editSettings = {
    allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Normal'
  };
  var gridSettings = {
    columnWidth: 140,
    contextMenuItems: [
      'Aggregate', 'CalculatedField', 'Drillthrough', 'Excel Export', 'Pdf Export', 'Csv Export',
      'Expand', 'Collapse', 'Sort Ascending', 'Sort Descending'
    ]
  }
  function saveReport(args) {
    var reports = [];
    var isSaved = false;
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
    var reportCollection = [];
    var reeportList = [];
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      reportCollection = JSON.parse(localStorage.pivotviewReports);
    }
    reportCollection.map(function (item) { reeportList.push(item.reportName); });
    args.reportName = reeportList;
  }
  function loadReport(args) {
    var reportCollection = [];
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
    var reportCollection= [];
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      reportCollection = JSON.parse(localStorage.pivotviewReports);
    }
    for (var i = 0; i < reportCollection.length; i++) {
      if (reportCollection[i].reportName === args.reportName) {
        reportCollection.splice(i, 1);
      }
    }
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      localStorage.pivotviewReports = JSON.stringify(reportCollection);
    }
  }
  function renameReport(args) {
    var reportCollection= [];
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      reportCollection = JSON.parse(localStorage.pivotviewReports);
    }
    if (args.isReportExists) {
      for (var i = 0; i < reportCollection.length; i++) {
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
      height={450} showFieldList={true} gridSettings={gridSettings} allowExcelExport={true}
      allowConditionalFormatting={true} allowNumberFormatting={true} allowPdfExport={true} showToolbar={true}
      allowCalculatedField={true} displayOption={{ view: 'Both' }} toolbar={toolbarOptions} newReport={newReport.bind(this)}
      renameReport={renameReport.bind(this)} removeReport={removeReport.bind(this)} loadReport={loadReport.bind(this)}
      fetchReport={fetchReport.bind(this)} saveReport={saveReport.bind(this)} toolbarRender={beforeToolbarRender.bind(this)}
      showGroupingBar={true} groupingBarSettings={groupingSettings} chartSettings={chartSettings} editSettings={editSettings}
      allowGrouping={true} allowDeferLayoutUpdate={true}>
      <Inject services={[
        FieldList, CalculatedField, Toolbar, PDFExport, ExcelExport, ConditionalFormatting, NumberFormatting, GroupingBar,
        Grouping
      ]} />
    </PivotViewComponent>
  );

  function pivotData1() {
    var pivotData = [
      {
        "_id": "5a940692c2d185d9fde50e5e",
        "index": 0,
        "guid": "810a1191-81bd-4c18-ac73-d16ad3fc80eb",
        "isActive": false,
        "balance": 2430.87,
        "advance": 7658,
        "quantity": 11,

        "age": 21,
        "eyeColor": "blue",
        "name": "Skinner Ward",
        "gender": "male",
        "company": "GROK",
        "email": "skinnerward@grok.com",
        "phone": "+1 (931) 600-3042",
        "date": "Wed Feb 16 2000 15:01:01 GMT+0530 (India Standard Time)",
        "product": "Flight",
        "state": "New Jercy",
        "pno": "FEDD2340"
      },
      {
        "_id": "5a940692c5752f1ed81bbb3d",
        "index": 1,
        "guid": "41c9986b-ccef-459e-a22d-5458bbdca9c7",
        "isActive": true,
        "balance": 3192.7,
        "advance": 6124,
        "quantity": 15,

        "age": 27,
        "eyeColor": "brown",
        "name": "Gwen Dixon",
        "gender": "female",
        "company": "ICOLOGY",
        "email": "gwendixon@icology.com",
        "phone": "+1 (951) 589-2187",
        "date": "Sun Feb 10 1991 20:28:59 GMT+0530 (India Standard Time)",
        "product": "Jet",
        "state": "Vetaikan",
        "pno": "ERTS4512"
      },
      {
        "_id": "5a9406924c0e7f4c98a82ca7",
        "index": 2,
        "guid": "50d2bf16-9092-4202-84f6-e892721fe5a5",
        "isActive": true,
        "balance": 1663.84,
        "advance": 7631,
        "quantity": 14,

        "age": 28,
        "eyeColor": "green",
        "name": "Deena Gillespie",
        "gender": "female",
        "company": "OVERPLEX",
        "email": "deenagillespie@overplex.com",
        "phone": "+1 (826) 588-3430",
        "date": "Thu Mar 18 1993 17:07:48 GMT+0530 (India Standard Time)",
        "product": "Car",
        "state": "New Jercy",
        "pno": "ERTS4512"
      },
      {
        "_id": "5a940692dd9db638eee09828",
        "index": 3,
        "guid": "b8bdc65e-4338-440f-a731-810186ce0b3a",
        "isActive": true,
        "balance": 1601.82,
        "advance": 6519,
        "quantity": 18,

        "age": 33,
        "eyeColor": "green",
        "name": "Susanne Peterson",
        "gender": "female",
        "company": "KROG",
        "email": "susannepeterson@krog.com",
        "phone": "+1 (868) 499-3292",
        "date": "Sat Feb 09 2002 04:28:45 GMT+0530 (India Standard Time)",
        "product": "Jet",
        "state": "Vetaikan",
        "pno": "CCOP1239"
      },
      {
        "_id": "5a9406926f9971a87eae51af",
        "index": 4,
        "guid": "3f4c79ec-a227-4210-940f-162ca0c293de",
        "isActive": false,
        "balance": 1855.77,
        "advance": 7333,
        "quantity": 20,

        "age": 33,
        "eyeColor": "green",
        "name": "Stokes Hicks",
        "gender": "male",
        "company": "SIGNITY",
        "email": "stokeshicks@signity.com",
        "phone": "+1 (927) 585-2980",
        "date": "Fri Mar 12 2004 11:08:06 GMT+0530 (India Standard Time)",
        "product": "Van",
        "state": "Tamilnadu",
        "pno": "MEWD9812"
      },
      {
        "_id": "5a940692bcbbcdde08fcf7ec",
        "index": 5,
        "guid": "1d0ee387-14d4-403e-9a0c-3a8514a64281",
        "isActive": true,
        "balance": 1372.23,
        "advance": 5668,
        "quantity": 16,

        "age": 39,
        "eyeColor": "green",
        "name": "Sandoval Nicholson",
        "gender": "male",
        "company": "IDEALIS",
        "email": "sandovalnicholson@idealis.com",
        "phone": "+1 (951) 438-3539",
        "date": "Sat Aug 30 1975 22:02:15 GMT+0530 (India Standard Time)",
        "product": "Bike",
        "state": "Tamilnadu",
        "pno": "CCOP1239"
      },
      {
        "_id": "5a940692ff31a6e1cdd10487",
        "index": 6,
        "guid": "58417d45-f279-4e21-ba61-16943d0f11c1",
        "isActive": false,
        "balance": 2008.28,
        "advance": 7107,
        "quantity": 14,

        "age": 20,
        "eyeColor": "brown",
        "name": "Blake Thornton",
        "gender": "male",
        "company": "IMMUNICS",
        "email": "blakethornton@immunics.com",
        "phone": "+1 (852) 462-3571",
        "date": "Mon Oct 03 2005 05:16:53 GMT+0530 (India Standard Time)",
        "product": "Jet",
        "state": "New Jercy",
        "pno": "CCOP1239"
      },
      {
        "_id": "5a9406928f2f2598c7ac7809",
        "index": 7,
        "guid": "d16299e3-e243-4e57-90fb-52446c4c0275",
        "isActive": false,
        "balance": 2052.58,
        "advance": 7431,
        "quantity": 20,

        "age": 22,
        "eyeColor": "blue",
        "name": "Dillard Sharpe",
        "gender": "male",
        "company": "INEAR",
        "email": "dillardsharpe@inear.com",
        "phone": "+1 (963) 473-2308",
        "date": "Thu May 25 1978 04:57:00 GMT+0530 (India Standard Time)",
        "product": "Jet",
        "state": "Rajkot",
        "pno": "ERTS4512"
      },
      {
        "_id": "5a940692195f82585af58362",
        "index": 8,
        "guid": "a8662b61-9d66-4b99-8a47-c0375ffff4ce",
        "isActive": true,
        "balance": 2784.64,
        "advance": 7948,
        "quantity": 18,

        "age": 22,
        "eyeColor": "blue",
        "name": "Davidson Brewer",
        "gender": "male",
        "company": "PROXSOFT",
        "email": "davidsonbrewer@proxsoft.com",
        "phone": "+1 (958) 592-3948",
        "date": "Wed Jul 14 1982 19:49:29 GMT+0530 (India Standard Time)",
        "product": "Van",
        "state": "Vetaikan",
        "pno": "FEDD2340"
      }
    ]
    return pivotData;
  }
};
export default App;

