
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Month, Inject } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
function App() {
    const data = extend([], scheduleData, null, true);
    const eventSettings = { dataSource: data };

    function getWeather(value) {
        switch (value.getDay()) {
            case 0:
                return '<div class="weather-text">25°C</div>';
            case 1:
                return '<div class="weather-text">18°C</div>';
            case 2:
                return '<div class="weather-text">10°C</div>';
            case 3:
                return '<div class="weather-text">16°C</div>';
            case 4:
                return '<div class="weather-text">8°C</div>';
            case 5:
                return '<div class="weather-text">27°C</div>';
            case 6:
                return '<div class="weather-text">17°C</div>';
            default:
                return null;
        }
    }
    function onRenderCell(args) {
        if (args.elementType === 'monthCells') {
            let ele = document.createElement('div');
            ele.innerHTML = getWeather(args.date);
            (args.element).appendChild(ele.firstChild);
        }
    }
    return (<ScheduleComponent width='100%' height='550px' cssClass='schedule-date-header-template' renderCell={onRenderCell} selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}>
        <ViewsDirective>
            <ViewDirective option='Month' />
        </ViewsDirective>
        <Inject services={[Month]} />
    </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
