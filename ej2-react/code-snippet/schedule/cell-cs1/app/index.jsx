import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, TimelineViews, Month, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
function App() {
    function getMonthCellContent(date) {
        if (date.getMonth() === 10 && date.getDate() === 23) {
            return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/birthday.svg" />';
        }
        else if (date.getMonth() === 11 && date.getDate() === 9) {
            return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/get-together.svg" />';
        }
        else if (date.getMonth() === 11 && date.getDate() === 13) {
            return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/birthday.svg" />';
        }
        else if (date.getMonth() === 11 && date.getDate() === 22) {
            return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/thanksgiving-day.svg" />';
        }
        else if (date.getMonth() === 11 && date.getDate() === 24) {
            return '<img src="https://ej2.syncfusion.com/demos/src/schedule/images/christmas-eve.svg" />';
        }
        else if (date.getMonth() === 11 && date.getDate() === 25) {
            return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/christmas.svg" />';
        }
        else if (date.getMonth() === 0 && date.getDate() === 1) {
            return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/newyear.svg" />';
        }
        else if (date.getMonth() === 0 && date.getDate() === 14) {
            return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/birthday.svg" />';
        }
        return '';
    }
    function getWorkCellText(date) {
        let weekEnds = [0, 6];
        if (weekEnds.indexOf(date.getDay()) >= 0) {
            return "<img src='https://ej2.syncfusion.com/demos/src/schedule/images/newyear.svg' />";
        }
        return '';
    }
    ;
    function cellTemplate(props) {
        if (props.type === "workCells") {
            return (<div className="templatewrap" dangerouslySetInnerHTML={{ __html: getWorkCellText(props.date) }}></div>);
        }
        if (props.type === "monthCells") {
            return (<div className="templatewrap" dangerouslySetInnerHTML={{ __html: getMonthCellContent(props.date) }}></div>);
        }
        return (<div></div>);
    }
    return <ScheduleComponent width='100%' height='550px' selectedDate={new Date(2017, 11, 15)} cellTemplate={cellTemplate}>
    <ViewsDirective>
      <ViewDirective option='Day'/>
      <ViewDirective option='Week'/>
      <ViewDirective option='TimelineWeek'/>
      <ViewDirective option='Month'/>
    </ViewsDirective>
    <Inject services={[Day, Week, TimelineViews, Month]}/>
  </ScheduleComponent>;
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);