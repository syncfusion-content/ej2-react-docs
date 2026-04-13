
import { IDataSet, PivotViewComponent, Inject, DisplayOption, PivotChart } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { pivotData } from './datasource';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartSettings';

function App() {

    let displayOption: DisplayOption = {
        view: 'Chart'
    } as DisplayOption;

    let chartSettings: ChartSettings = {
        chartSeries: { type: 'Pie' }
    } as ChartSettings;

    let dataSourceSettings: DataSourceSettingsModel = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData as IDataSet[],
        expandAll: false,
        filters: [],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    }

    let fields: object = { text: 'text', value: 'value' };

    let chartTypes = [
        { 'value': 'Pie', 'text': 'Pie' },
        { 'value': 'Doughnut', 'text': 'Doughnut' },
        { 'value': 'Funnel', 'text': 'Funnel' },
        { 'value': 'Pyramid', 'text': 'Pyramid' },
    ];
    let pivotObj: PivotViewComponent;
    function ddlOnChange(args) {
        pivotObj.chartSettings.chartSeries.type = args.value;
    }

    return (<div><div className="container" style={{ height: '500px' }}><div id="dropdown-control" style={{marginBottom: '5px'}}><table style={{width: '350px', marginLeft: '50px'}}><tbody><tr  style={{ height: '50px' }} ><td><div><b>Accumulation Chart:</b></div></td><td><div><DropDownListComponent  floatLabelType={'Auto'} fields={fields} change={ddlOnChange.bind(this)} id="charttypes" index={0} enabled={true} dataSource={chartTypes}/></div></td></tr></tbody></table></div><div><PivotViewComponent height={350} ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' chartSettings={chartSettings} displayOption={displayOption} dataSourceSettings={dataSourceSettings} ><Inject services={[PivotChart]}/></PivotViewComponent></div></div></div>);
};

export default App;



