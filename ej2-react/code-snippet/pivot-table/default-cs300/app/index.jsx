{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PivotViewComponent, Inject, Toolbar, FieldList } from '@syncfusion/ej2-react-pivotview';
import { pivotData } from './datasource';
function App() {
    let dataSourceSettings = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData,
        filters: [],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    };
    let pivotObj;
    let toolbarOptions = ["Save", "Export", "FieldList"];
    function saveReport(args) {
        let reports = [];
        let isSaved = false;
        if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            reports = JSON.parse(localStorage.pivotviewReports);
        }
        if (args.report && args.reportName && args.reportName !== '') {
            reports.map(function (item) {
                if (args.reportName === item.reportName) {
                    item.report = args.report;
                    isSaved = true;
                }
            });
            if (!isSaved) {
                reports.push(args);
            }
            localStorage.pivotviewReports = JSON.stringify(reports);
        }
    }
    function beforeToolbarRender(args) {
        args.customToolbar.splice(2, 0, {
            prefixIcon: 'e-rename-report e-icons', tooltipText: 'Custom Button',
            click: customButton.bind(this),
        });
        args.customToolbar.splice(3, 0, {
            prefixIcon: 'e-tool-expand e-icons', tooltipText: 'Expand/Collapse',
            click: toolbarClicked.bind(this),
        });
        args.customToolbar[0].align = "Left";
        args.customToolbar[1].align = "Center";
        args.customToolbar[2].align = "Right";
    }
    function customButton(args) {
        // Here you can customize the click event for custom button
    }
    function toolbarClicked(args) {
        pivotObj.dataSourceSettings.expandAll = !pivotObj.dataSourceSettings.expandAll;
    }
    return (<PivotViewComponent id='PivotView' ref={d => pivotObj = d} dataSourceSettings={dataSourceSettings} width={'100%'} height={350} gridSettings={{ columnWidth: 140 }} showToolbar={true} displayOption={{ view: 'Both' }} showFieldList={true} toolbar={toolbarOptions} toolbarRender={beforeToolbarRender.bind(this)}><Inject services={[Toolbar, FieldList]} saveReport={saveReport.bind(this)}/></PivotViewComponent>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
{% endraw %}