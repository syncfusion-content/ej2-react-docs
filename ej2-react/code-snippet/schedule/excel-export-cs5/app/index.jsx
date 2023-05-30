import * as ReactDOM from 'react-dom';
import React, { useRef } from 'react';
import { ScheduleComponent, ViewDirective, Week, Resize, ExcelExport, DragAndDrop, Inject, ViewsDirective } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
/**
 *  Schedule header customization sample
 */
const App = () => {
    const scheduleObj = useRef(null);
    const eventSettings = { dataSource: scheduleData };

    const onActionBegin = (args) => {
        if (args.requestType === 'toolbarItemRendering') {
            let exportItem = {
                align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-excel-export',
                text: 'Excel Export', cssClass: 'e-excel-export', click: onExportClick
            };
            args.items.push(exportItem);
        }
    }
    const onExportClick = () => {
        let customFields = [
            { name: 'Subject', text: 'Summary' },
            { name: 'StartTime', text: 'First Date' },
            { name: 'EndTime', text: 'Last Date' },
            { name: 'Location', text: 'Place' },
            { name: 'OwnerId', text: 'Owners' }
        ];
        let exportValues = { fieldsInfo: customFields };
        scheduleObj.current.exportToExcel(exportValues);
    }
    return (<ScheduleComponent cssClass='excel-export' width='100%' height='550px' id='schedule' ref={scheduleObj} selectedDate={new Date(2019, 0, 10)} eventSettings={eventSettings} actionBegin={onActionBegin}>
        <ViewsDirective>
            <ViewDirective option='Week' />
        </ViewsDirective>
        <Inject services={[Week, Resize, DragAndDrop, ExcelExport]} />
    </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
