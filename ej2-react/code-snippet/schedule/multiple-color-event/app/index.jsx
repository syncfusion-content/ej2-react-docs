import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, TimelineViews, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';

const App = () => {
  const data = [
    {
      Id: 1,
      Subject: 'Environment Day',
      Description: 'A day that creates awareness to promote the healthy planet and reduce the air pollution crisis on nature earth.',
      StartTime: new Date(2024, 1, 15, 9, 0),
      EndTime: new Date(2024, 1, 15, 14, 0),
      SubCount: [
        { background: 'darkblue', height: '50%' },
        { background: 'lightblue', height: '50%' },
      ],
    },
    {
      Id: 2,
      Subject: 'Health Day',
      Description: 'A day that raises awareness on different health issues. It marks the anniversary of the foundation of WHO.',
      StartTime: new Date(2024, 1, 16, 9, 0),
      EndTime: new Date(2024, 1, 16, 14, 0),
      SubCount: [
        { background: 'yellow', height: '33.3%' },
        { background: 'yellowgreen', height: '33.3%' },
        { background: 'green', height: '33.3%' },
      ],
    },
    {
      Id: 3,
      Subject: 'Cancer Day',
      Description: 'A day that raises awareness on cancer and its preventive measures. Early detection saves life.',
      StartTime: new Date(2024, 1, 17, 9, 0),
      EndTime: new Date(2024, 1, 17, 14, 0),
      SubCount: [
        { background: 'pink', height: '50%' },
        { background: 'red', height: '50%' },
      ],
    },
  ];

  const eventTemplate = (props) => {
    return (
      <div className="template-wrap">
        {props.SubCount.map((item, index) => (
          <div key={index} style={{ background: item.background, height: item.height }}>
            <div className="subject">{props.Subject}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <ScheduleComponent cssClass='event-template' width='100%' height='550px' selectedDate={new Date(2024, 1, 15)} eventSettings={{ dataSource: data }}>
      <ViewsDirective>
        <ViewDirective option={'Week'} eventTemplate={eventTemplate} />
      </ViewsDirective>
      <Inject services={[Day, Week, TimelineViews, Resize, DragAndDrop]} />
    </ScheduleComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
