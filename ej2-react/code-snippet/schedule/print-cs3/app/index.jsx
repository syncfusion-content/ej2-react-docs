import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useRef } from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Print, Inject} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
const getCurrentUserInfo = () => ({ department: 'Sales', userRole: 'Manager' });
const getDepartmentColor = (dept) => {
  const colors = {
    Sales: '#4CAF50',
    Marketing: '#2196F3',
    Engineering: '#FF9800',
    HR: '#9C27B0',
  };
  return colors[dept] || '#607D8B';
};
const App = () => {
  const scheduleObj = useRef(null);
  const { department, userRole } = getCurrentUserInfo();

  const onActionBegin = (args) => {
    if (args.requestType === 'toolbarItemRendering') {
      let printItem = {
        align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-print',
        text: 'Print', cssClass: 'e-schedule-print', click: onPrintIconClick
      };
      args.items.push(printItem);
    }
  }

  const onPrintIconClick = () => {
    scheduleObj.current.print();
  }
  const onBeforePrint = (args) => {
    const headerElement = document.createElement('div');
    headerElement.innerHTML = `
      <h1>${department} Department Schedule</h1>
      <p>Printed by: ${userRole}</p>
      <p>Date: ${new Date().toLocaleString()}</p>
    `;
    headerElement.style.backgroundColor = getDepartmentColor(department);
    headerElement.style.color = 'white';
    headerElement.style.padding = '10px';
    args.printElement.insertBefore(headerElement, args.printElement.firstChild);

    const highPriorityEvents = args.printElement.querySelectorAll('.e-appointment.high-priority');
    highPriorityEvents.forEach(event => {
      (event).style.border = '2px solid red';
    });

    const events = scheduleObj.current?.getEvents() || [];
    const summaryElement = document.createElement('div');
    summaryElement.innerHTML = `
      <p>Total Events: ${events.length}</p>
      <p>High Priority Events: ${events.filter(e => e.priority === 'high').length}</p>
    `;
    args.printElement.appendChild(summaryElement);

    if (userRole === 'Manager') {
      const managerNote = document.createElement('div');
      managerNote.textContent = 'Confidential - For managerial use only';
      managerNote.style.color = 'red';
      args.printElement.appendChild(managerNote);
    }
  };

  return (
    <div>
      <ScheduleComponent ref={scheduleObj} width='100%' height='520px' views={['Day', 'Week', 'WorkWeek', 'Month']}  dataSource={scheduleData} selectedDate={new Date(2025, 1, 15)} eventSettings={eventSettings} actionBegin={onActionBegin} beforePrint={onBeforePrint}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Print]} />
      </ScheduleComponent></div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);