import { IDataSet, PivotViewComponent, Inject, DisplayOption, PivotChart } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import * as React from 'react';
import { pivotData } from './datasource';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartSettings';

function App() {

    let displayOption: DisplayOption = {
        view: 'Chart'
    } as DisplayOption;

    let chartSettings: ChartSettings = {
        columnHeader: "Germany-Road Bikes", columnDelimiter: "-",
        chartSeries: { type: 'Doughnut' }
    } as ChartSettings;

    let dataSourceSettings: DataSourceSettingsModel = {
        columns: [{ name: 'Country' }, { name: 'Products' }],
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        drilledMembers: [{ name: 'Country', items: ['Germany'] }],
        filters: [],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    }

    let pivotObj: PivotViewComponent;
        return (<PivotViewComponent height={350} ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' chartSettings={chartSettings} displayOption={displayOption} dataSourceSettings={dataSourceSettings} ><Inject services={[PivotChart]} /></PivotViewComponent>);
};

export default App;
