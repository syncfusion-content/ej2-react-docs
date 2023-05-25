import * as ReactDOM from 'react-dom';
import { useRef } from 'react';
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
        let exportValues = {
            customData: [{
                Id: 1,
                Subject: 'Explosion of Betelgeuse Star',
                Location: 'Space Centre USA',
                StartTime: new Date(2019, 0, 6, 9, 30),
                EndTime: new Date(2019, 0, 6, 11, 0),
                CategoryColor: '#1aaa55'
            }, {
                Id: 2,
                Subject: 'Thule Air Crash Report',
                Location: 'Newyork City',
                StartTime: new Date(2019, 0, 7, 12, 0),
                EndTime: new Date(2019, 0, 7, 14, 0),
                CategoryColor: '#357cd2'
            }]
        };
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
