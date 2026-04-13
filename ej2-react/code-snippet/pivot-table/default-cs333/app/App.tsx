import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { IDataSet, PivotViewComponent, ExcelExport, Inject, FieldList, AggregateEventArgs, AggregateTypes, SummaryTypes } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { pivotData } from './datasource';
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
  'en-US': {
    pivotview: {
      CustomAggregateType1: 'Custom Aggregate Type 1',
      CustomAggregateType2: 'Custom Aggregate Type 2',
    },
    pivotfieldlist: {
      CustomAggregateType1: 'Custom Aggregate Type 1',
      CustomAggregateType2: 'Custom Aggregate Type 2',
    }
  }
});
const SummaryType: string[] = [
  'Sum',
  'Count',
  'DistinctCount',
  'Avg',
  'CustomAggregateType1',
  'CustomAggregateType2'
];

function App() {
  let pivotObj: PivotViewComponent;

  let dataSourceSettings: DataSourceSettingsModel = {
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    enableSorting: true,
    columns: [{ name: 'Year' }, { name: 'Quarter' }],
    values: [{ name: 'Sold', type: 'CustomAggregateType1' }, { name: 'Amount', type: 'CustomAggregateType2' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
  }

  function dataBound(): void {
    pivotObj.getAllSummaryType = function () {
      return SummaryType as AggregateTypes[];
    };
    pivotObj.pivotFieldListModule.aggregateTypes = SummaryType as AggregateTypes[];
    pivotObj.pivotFieldListModule.getAllSummaryType = function () {
      return SummaryType as AggregateTypes[];
    };
  }

  function aggregateCell(args: AggregateEventArgs): void {
    if (args.aggregateType === 'CustomAggregateType1' as SummaryTypes) {
      args.value = args.value as number * 100;
    }
    if (args.aggregateType === 'CustomAggregateType2' as SummaryTypes) {
      args.value = args.value as number / 100;
    }
  }

  function btnClick(): void {
    pivotObj.excelExport();
  }

  return (
    <div>
      <div className="col-md-9">
        <PivotViewComponent ref={(d: PivotViewComponent) => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings}
          allowExcelExport={true} showFieldList={true} dataBound={dataBound.bind(this)} aggregateCellInfo={aggregateCell.bind(this)}>
          <Inject services={[ExcelExport, FieldList]} />
        </PivotViewComponent>
      </div>
      <div className='col-lg-3 property-section'>
        <ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent>
      </div>
    </div>);

};

export default App;
