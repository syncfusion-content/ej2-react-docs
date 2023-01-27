{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { extend } from '@syncfusion/ej2-base';
import { ScheduleComponent, ViewDirective, Week, Resize, ExcelExport, DragAndDrop, Inject, ViewsDirective } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
/**
 *  Schedule header customization sample
 */
function App() {
    let scheduleObj;
    const data = extend([], scheduleData, null, true);
    function onActionBegin(args) {
        if (args.requestType === 'toolbarItemRendering') {
            let exportItem = {
                align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-excel-export',
                text: 'Excel Export', cssClass: 'e-excel-export', click: onExportClick
            };
            args.items.push(exportItem);
        }
    }
    function onExportClick() {
        let exportValues = { fileName: "SchedulerData" };
        scheduleObj.exportToExcel(exportValues);
    }
    return (<ScheduleComponent cssClass='excel-export' width='100%' height='550px' id='schedule' ref={t => scheduleObj = t} selectedDate={new Date(2019, 0, 10)} eventSettings={{ dataSource: data }} actionBegin={onActionBegin}>
      <ViewsDirective>
        <ViewDirective option='Week'/>
      </ViewsDirective>
      <Inject services={[Week, Resize, DragAndDrop, ExcelExport]}/>
    </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
{% endraw %}