

import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';

function App() {

  let dataSourceSettings = {
    dataSource: pivotData,
    expandAll: false,
    enableSorting: true,
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    filters: []
  }

  let gridSettings = {
    queryCellInfo: function (args) {
      var colIndex = Number(args.cell.getAttribute('data-colindex'));
      var cells = args.data[colIndex] ? args.data[colIndex] : {};
      // Here by using 'actualText' option, a custom class can be added to the specific row header and its value to apply custom style.
      if (cells.actualText === 'Germany') {
        args.cell.classList.add('e-custom');
      } else if (cells.actualText === 'Amount' &&
        cells.columnHeaders === 'FY 2016' && cells.rowHeaders === 'Germany') {
        args.cell.classList.add('e-custom');
      }
    },
    headerCellInfo: function (args) {
      var customAttributes = args.cell.column.customAttributes;
      // Here custom class can be added to the specific column header by using unique level name, to apply custom style.
      if (args.node.classList.contains('e-columnsheader') && customAttributes &&
        customAttributes.cell.valueSort.levelName === 'FY 2016.Sold Amount') {
        args.node.classList.add('e-custom');
      }
    }
  };

  let pivotObj;

  return (<PivotViewComponent id='PivotView' ref={d => pivotObj = d} dataSourceSettings={dataSourceSettings}
    gridSettings={gridSettings} width={'100%'} height={350}>
  </PivotViewComponent>);

};
export default App;
ReactDOM.render(<App />, document.getElementById('root'));