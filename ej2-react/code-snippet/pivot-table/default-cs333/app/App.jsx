import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { PivotViewComponent, ExcelExport, Inject, FieldList } from '@syncfusion/ej2-react-pivotview';
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
const SummaryType = [
    'Sum',
    'Count',
    'DistinctCount',
    'Avg',
    'CustomAggregateType1',
    'CustomAggregateType2'
];

function App() {
    let pivotObj;

    let dataSourceSettings = {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        columns: [{ name: 'Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', type: 'CustomAggregateType1' }, { name: 'Amount', type: 'CustomAggregateType2' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
    };

    function dataBound() {
        pivotObj.getAllSummaryType = function () {
            return SummaryType;
        };
        pivotObj.pivotFieldListModule.aggregateTypes = SummaryType;
        pivotObj.pivotFieldListModule.getAllSummaryType = function () {
            return SummaryType;
        };
    }
    function aggregateCell(args) {
        if (args.aggregateType === 'CustomAggregateType1') {
            args.value = args.value * 100;
        }
        if (args.aggregateType === 'CustomAggregateType2') {
            args.value = args.value / 100;
        }
    }

    function btnClick() {
        pivotObj.excelExport();
    }

    return (
        <div>
            <div className="col-md-9">
                <PivotViewComponent ref={(d) => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings}
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
