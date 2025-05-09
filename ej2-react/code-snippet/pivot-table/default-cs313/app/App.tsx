import {
  FieldList, IAxisSet, IDataSet, Inject, PivotViewComponent
} from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { Tooltip } from '@syncfusion/ej2-popups';
import * as React from 'react';
import { pivotData } from './datasource';

function App() {
  let headerTooltip: Tooltip;

  let dataSourceSettings: DataSourceSettingsModel = {
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    enableSorting: true,
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    filters: []
  }
  let pivotObj: PivotViewComponent;
  function dataBound(): void {
    if (!headerTooltip) {
      headerTooltip = new Tooltip({
        target: 'td.e-rowsheader,th.e-columnsheader', beforeRender: beforeRender
      });
      headerTooltip.appendTo(pivotObj.element);
    }
  }

  function beforeRender(args: any) {
    if (args.target.parentElement.querySelector('.e-rowsheader')) {
      // Here you can set custom content for row header(s) tooltip from its cell information.
      let index: number = Number(args.target.getAttributeNode('index').value);
      let colIndex: number = Number(args.target.getAttributeNode('data-colindex').value);
      let cell: IAxisSet = pivotObj.engineModule.pivotValues[index][colIndex];
      let valueText: any = cell.valueSort ? cell.valueSort : '';
      if (cell.formattedText !== 'Grand Total') {
        this.content =
          '<div>' +
          'FieldName: ' +
          valueText.axis +
          '</br>' +
          'Text: ' +
          cell.formattedText +
          '</div>';
      } else {
        this.content =
          '<div>' +
          'FieldName: ' +
          valueText.uniqueName +
          '</br>' +
          'Text: ' +
          cell.formattedText +
          '</div>';
      }
    } else {
      // Here you can set custom content for column header(s) tooltip from its cell information.
      if (args.target.querySelector('.e-cellvalue')) {
        this.content = args.target.querySelector('.e-cellvalue').innerText;
      } else if (args.target.querySelector('.e-headertext')) {
        this.content = args.target.querySelector('.e-headertext').innerText;
      } else if (args.target.querySelector('.e-stackedheadercelldiv')) {
        this.content = args.target.querySelector('.e-stackedheadercelldiv').innerText;
      } else {
        this.content = '';
      }
    }
  }
  return (<PivotViewComponent id='PivotView' ref={ (d: PivotViewComponent) => pivotObj = d } dataSourceSettings={dataSourceSettings} width={'100%'}
    height={350} dataBound={dataBound.bind(this)}>
    <Inject services={[FieldList]} />
  </PivotViewComponent>);

};
export default App;
