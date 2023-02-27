
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, TimelineMonth, Inject, Resize, DragAndDrop, ResourcesDirective, ResourceDirective } from '@syncfusion/ej2-react-schedule';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Internationalization, extend } from '@syncfusion/ej2-base';
import { webinarData } from './datasource';
function App() {
    let scheduleObj;
    const data = extend([], webinarData, null, true);
    const instance = new Internationalization();
    const resourceData = [
        { text: 'Will Smith', id: 1, color: '#ea7a57', workDays: [1, 2, 4, 5], startHour: '08:00', endHour: '15:00' },
        { text: 'Alice', id: 2, color: 'rgb(53, 124, 210)', workDays: [1, 3, 5], startHour: '08:00', endHour: '17:00' },
        { text: 'Robson', id: 3, color: '#7fa900', startHour: '08:00', endHour: '16:00' }
    ];
    function getTimeString(value) {
        return instance.formatDate(value, { skeleton: 'hm' });
    }
    function eventTemplate(props) {
        return (<div className="app-template-wrap" style={{ background: props.SecondaryColor }}>
      <div className="subject" style={{ background: props.PrimaryColor }}>{props.Subject}</div>
      <div className="time" style={{ background: props.PrimaryColor }}>
        Time: {getTimeString(props.StartTime)} - {getTimeString(props.EndTime)}</div>
      <div className="image"><img src={"https://ej2.syncfusion.com/demos/src/schedule/images/" + props.ImageName + ".svg"} alt={props.ImageName}/></div>
      <div className="event-description">{props.Description}</div>
      <div className="footer" style={{ background: props.PrimaryColor }}></div></div>);
    }
    function getDoctorImage(value) {
        return getDoctorName(value).replace(' ', '-').toLowerCase();
    }
    function getDoctorName(value) {
        return ((value.resourceData) ?
            value.resourceData[value.resource.textField] :
            value.resourceName);
    }
    function getDoctorLevel(value) {
        let resourceName = getDoctorName(value);
        return (resourceName === 'Will Smith') ? 'Cardiologist' : (resourceName === 'Alice') ? 'Neurologist' : 'Orthopedic Surgeon';
    }
    function getDateHeaderText(value) {
        return instance.formatDate(value, { skeleton: 'Ed' });
    }
    function getWeather(value) {
        switch (value.getDay()) {
            case 0:
                return '<img class="weather-image"  src= "https://ej2.syncfusion.com/demos/src/schedule/images/weather-clear.svg" /><div class="weather-text">25°C</div>';
            case 1:
                return '<img class="weather-image" src="https://ej2.syncfusion.com/demos/src/schedule/images/weather-clouds.svg"/><div class="weather-text">18°C</div>';
            case 2:
                return '<img class="weather-image" src="https://ej2.syncfusion.com/demos/src/schedule/images/weather-rain.svg"/><div class="weather-text">10°C</div>';
            case 3:
                return '<img class="weather-image" src="https://ej2.syncfusion.com/demos/src/schedule/images/weather-clouds.svg"/><div class="weather-text">16°C</div>';
            case 4:
                return '<img class="weather-image" src="https://ej2.syncfusion.com/demos/src/schedule/images/weather-rain.svg"/><div class="weather-text">8°C</div>';
            case 5:
                return '<img class="weather-image" src="https://ej2.syncfusion.com/demos/src/schedule/images/weather-clear.svg"/><div class="weather-text">27°C</div>';
            case 6:
                return '<img class="weather-image" src="https://ej2.syncfusion.com/demos/src/schedule/images/weather-clouds.svg"/><div class="weather-text">17°C</div>';
            default:
                return null;
        }
    }
    function dateHeaderTemplate(props) {
        return (<div><div>{getDateHeaderText(props.date)}</div><div className="date-text" dangerouslySetInnerHTML={{ __html: getWeather(props.date) }}></div></div>);
    }
    function resourceHeaderTemplate(props) {
        return (<div className="res-template-wrap"><div className={"resource-image " + getDoctorImage(props)}></div>
      <div className="resource-detail"><div className="resource-name">{getDoctorName(props)}</div>
        <div className="resource-designation">{getDoctorLevel(props)}</div></div></div>);
    }
    function getMonthCellText(date) {
        if (date.getMonth() === 1 && date.getDate() === 23) {
            return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/birthday.svg" />';
        }
        else if (date.getMonth() === 1 && date.getDate() === 9) {
            return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/get-together.svg" />';
        }
        else if (date.getMonth() === 1 && date.getDate() === 13) {
            return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/birthday.svg" />';
        }
        else if (date.getMonth() === 1 && date.getDate() === 22) {
            return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/thanksgiving-day.svg" />';
        }
        else if (date.getMonth() === 1 && date.getDate() === 14) {
            return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/birthday.svg" />';
        }
        return '';
    }
    function getWorkCellText(date) {
        let weekEnds = [0, 6];
        if (weekEnds.indexOf(date.getDay()) >= 0) {
            return "<span class='caption'>Weekend</span>";
        }
        return '';
    }
    function cellTemplate(props) {
        if (props.type === "workCells") {
            return (<div className="cell-template-wrap" dangerouslySetInnerHTML={{ __html: getWorkCellText(props.date) }}></div>);
        }
        if (props.type === "monthCells") {
            return (<div className="cell-template-wrap" dangerouslySetInnerHTML={{ __html: getMonthCellText(props.date) }}></div>);
        }
        return (<div></div>);
    }
    function refreshCellTemplate() {
        scheduleObj.refreshTemplates("cellTemplate");
    }
    function refreshDateHeaderTemplate() {
        scheduleObj.refreshTemplates("dateHeaderTemplate");
    }
    function refreshEventTemplate() {
        scheduleObj.refreshTemplates("eventTemplate");
    }
    function refreshResHeaderTemplate() {
        scheduleObj.refreshTemplates("resourceHeaderTemplate");
    }
    function refreshAllTemplate() {
        scheduleObj.refreshTemplates();
    }
    return (<div className='schedule-control-section'>
      <div className='control-section'>
        <div className='control-wrapper'>
          <div style={{ "display": 'flex' }}>
            <div style={{ paddingRight: '10px' }}>
              <ButtonComponent cssClass='e-info' onClick={refreshCellTemplate}>Refresh cellTemplate</ButtonComponent>
            </div>
            <div style={{ paddingRight: '10px' }}>
              <ButtonComponent cssClass='e-info' onClick={refreshDateHeaderTemplate}>Refresh dateHeaderTemplate</ButtonComponent>
            </div>
            <div style={{ paddingRight: '10px' }}>
              <ButtonComponent cssClass='e-info' onClick={refreshEventTemplate}>Refresh eventTemplate</ButtonComponent>
            </div>
            <div style={{ paddingRight: '10px' }}>
              <ButtonComponent cssClass='e-info' onClick={refreshResHeaderTemplate}>Refresh resourceHeaderTemplate</ButtonComponent>
            </div>
            <div style={{ paddingRight: '10px' }}>
              <ButtonComponent cssClass='e-info' onClick={refreshAllTemplate}>Refresh All Templates</ButtonComponent>
            </div>
          </div>
          <ScheduleComponent width='100%' height='650px' cssClass='schedule-date-header-template' ref={t => scheduleObj = t} selectedDate={new Date(2021, 1, 15)} readonly={true} eventSettings={{ dataSource: data }} dateHeaderTemplate={dateHeaderTemplate} resourceHeaderTemplate={resourceHeaderTemplate} cellTemplate={cellTemplate} group={{ resources: ['Doctors'] }}>
            <ResourcesDirective>
              <ResourceDirective field='DoctorId' title='Doctor Name' name='Doctors' dataSource={resourceData} textField='text' idField='id' groupIDField='groupId' colorField='color' workDaysField='workDays' startHourField='startHour' endHourField='endHour'>
              </ResourceDirective>
            </ResourcesDirective>
            <ViewsDirective>
              <ViewDirective option='Week' eventTemplate={eventTemplate}/>
              <ViewDirective option='Month'/>
              <ViewDirective option='TimelineMonth'/>
            </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month, TimelineMonth, Resize, DragAndDrop]}/>
          </ScheduleComponent>
        </div>
      </div>
    </div>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
