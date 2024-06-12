export let timelineTemplateData = [
  {
    TaskID: 1,
    TaskName: 'Product Concept',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
    subtasks: [
      { TaskID: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'), Duration: 3, Progress: 30 },
      { TaskID: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'), Duration: 3 },
      { TaskID: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'), Duration: 3, Predecessor: "2", Progress: 30 },
    ]
  },
  { TaskID: 5, TaskName: 'Concept Approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: "3,4" },
  {
    TaskID: 6,
    TaskName: 'Market Research',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
    subtasks: [
      {
        TaskID: 7,
        TaskName: 'Demand Analysis',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
          { TaskID: 8, TaskName: 'Customer strength', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: "5", Progress: 30 },
          { TaskID: 9, TaskName: 'Market opportunity analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: "5" }
        ]
      },
      { TaskID: 10, TaskName: 'Competitor Analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: "7,8", Progress: 30 },
      { TaskID: 11, TaskName: 'Product strength analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: "9" },
      { TaskID: 12, TaskName: 'Research complete', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: "10" }
    ]
  },
  {
    TaskID: 13,
    TaskName: 'Product Design and Development',
    StartDate: new Date('04/04/2019'),
    EndDate: new Date('04/21/2019'),
    subtasks: [
      { TaskID: 14, TaskName: 'Functionality design', StartDate: new Date('04/04/2019'), Duration: 7, Progress: 30 },
      { TaskID: 15, TaskName: 'Quality design', StartDate: new Date('04/04/2019'), Duration: 5 },
      { TaskID: 16, TaskName: 'Define Reliability', StartDate: new Date('04/04/2019'), Duration: 5, Progress: 30 },
      { TaskID: 17, TaskName: 'Identifying raw materials ', StartDate: new Date('04/04/2019'), Duration: 4 },
      {
        TaskID: 18,
        TaskName: 'Define cost plan',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
          { TaskID: 19, TaskName: 'Manufacturing cost', StartDate: new Date('04/04/2019'), Duration: 1, Progress: 30 },
          { TaskID: 20, TaskName: 'Selling cost', StartDate: new Date('04/04/2019'), Duration: 1 }
        ]
      },
      {
        TaskID: 21,
        TaskName: 'Development of the final design',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
          { TaskID: 22, TaskName: 'Defining dimensions and package volume', StartDate: new Date('04/04/2019'), Duration: 2, Progress: 30 },
          { TaskID: 23, TaskName: 'Develop design to meet industry standards', StartDate: new Date('04/04/2019'), Duration: 3 },
          { TaskID: 24, TaskName: 'Include all the details', StartDate: new Date('04/04/2019'), Duration: 5 }
        ]
      },
      { TaskID: 25, TaskName: 'CAD Computer-aided design', StartDate: new Date('04/04/2019'), Duration: 10, Progress: 30 },
      { TaskID: 26, TaskName: 'CAM Computer-aided manufacturing', StartDate: new Date('04/04/2019'), Duration: 10 }
    ]
  },
  { TaskID: 27, TaskName: 'Prototype Testing', StartDate: new Date('04/04/2019'), Duration: 12, Progress: 30 },
  { TaskID: 28, TaskName: 'Include feedback', StartDate: new Date('04/04/2019'), Duration: 5 },
  { TaskID: 29, TaskName: 'Manufacturing', StartDate: new Date('04/04/2019'), Duration: 9, Progress: 30 },
  { TaskID: 30, TaskName: 'Assembling materials to finished goods', StartDate: new Date('04/04/2019'), Duration: 12 },
  {
    TaskID: 31,
    TaskName: 'Feedback and Testing',
    StartDate: new Date('04/04/2019'),
    EndDate: new Date('04/21/2019'),
    subtasks: [
      { TaskID: 32, TaskName: 'Internal testing and feedback', StartDate: new Date('04/04/2019'), Duration: 5, Progress: 30 },
      { TaskID: 33, TaskName: 'Customer testing and feedback', StartDate: new Date('04/04/2019'), Duration: 7, Progress: 30 }
    ]
  },
  {
    TaskID: 34,
    TaskName: 'Product Development',
    StartDate: new Date('04/04/2019'),
    EndDate: new Date('04/21/2019'),
    subtasks: [
      { TaskID: 35, TaskName: 'Important improvements', StartDate: new Date('04/04/2019'), Duration: 2, Progress: 30 },
      { TaskID: 36, TaskName: 'Address any unforeseen issues', StartDate: new Date('04/04/2019'), Duration: 2, Progress: 30 }
    ]
  },
  {
    TaskID: 37,
    TaskName: 'Final Product',
    StartDate: new Date('04/04/2019'),
    EndDate: new Date('04/21/2019'),
    subtasks: [
      { TaskID: 38, TaskName: 'Branding product', StartDate: new Date('04/04/2019'), Duration: 5 },
      { TaskID: 39, TaskName: 'Marketing and pre-sales', StartDate: new Date('04/04/2019'), Duration: 10, Progress: 30 }
    ]
  }
];

import * as React from 'react';
import { useRef } from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Selection, DayMarkers, ColumnsDirective, ColumnDirective, HolidaysDirective, HolidayDirective } from '@syncfusion/ej2-react-gantt';
import "./app.css"
function App() {
  let ganttInstance = null;
  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  };
  const bgColor = (value, date) => {
    if (value === "S") {
      return "#7BD3EA"
    }
    const parsedDate = new Date(date);
    for (let i = 0; i < ganttInstance.current.holidays.length; i++) {
      const holiday = ganttInstance.current.holidays[i];
      const fromDate = new Date(holiday.from);
      const toDate = new Date(holiday.to)
      if (parsedDate >= fromDate && parsedDate <= toDate) {
        return "#97E7E1";
      }
    }
    return "#E0FBE2"
  };
  const imagedate = () => {
    const getImage = Math.floor(Math.random() * 5) + 1;
    return "./image/" + getImage + ".svg";

  }
  const holidayValue = (value, date) => {

    const parsedDate = new Date(date);
    for (let i = 0; i < ganttInstance.current.holidays.length; i++) {
      const holiday = ganttInstance.current.holidays[i];
      const fromDate = new Date(holiday.from);
      const toDate = new Date(holiday.to)
      if (parsedDate >= fromDate && parsedDate <= toDate) {
        const options = { weekday: 'short' };
        return parsedDate.toLocaleDateString('en-US', options).toLocaleUpperCase();
      }
    }
    return value
  }
  const timelineTemplate = (props) => {
    if (props.tier == 'topTier') {
      return (<div
        className="e-header-cell-label e-gantt-top-cell-text"
        style={{
          width: '100%',
          backgroundColor: '#FBF9F1',
          fontWeight: 'bold',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        title={props.date}
      >
        <div>{props.value}</div>
        <div
          style={{
            width: '20px',
            height: '20px',
            lineHeight: 'normal',
            paddingLeft: '10px',
          }}
        >
          <img style={{ width: '100%', height: '100%' }} src={imagedate()} alt="Image" />
        </div>
      </div>)
    }
    if (props.tier == 'bottomTier') {
      return (<div
        className="e-header-cell-label e-gantt-top-cell-text"
        style={{
          width: '100%',
          backgroundColor: bgColor(props.value, props.date),
          textAlign: 'center',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          fontWeight: 'bold',
          justifyContent: 'center',
        }}
        title={props.date}
      >
        {holidayValue(props.value, props.date)}
      </div>)
    }


  }
  const splitterSettings = {
    columnIndex: 1
  };
  const timelineSettings = {
    topTier: {
      unit: 'Week',
      format: 'dd/MM/yyyy'
    },
    bottomTier: {
      unit: 'Day',
      count: 1
    },
    timelineUnitSize: 100
  };
  const labelSettings = {
    leftLabel: 'TaskName',
  };
  const projectStartDate = new Date('03/31/2024');
  const projectEndDate = new Date('04/23/2024');
  return <GanttComponent id='Timeline' ref={ganttInstance} dataSource={timelineTemplateData}
    splitterSettings={splitterSettings}
    taskFields={taskFields} height='550px'
    projectStartDate={projectStartDate} projectEndDate={projectEndDate} timelineSettings={timelineSettings}
    timelineTemplate={timelineTemplate} labelSettings={labelSettings} treeColumnIndex={1}>
    <ColumnsDirective>
      <ColumnDirective field='TaskID' visible={false}></ColumnDirective>
      <ColumnDirective field='TaskName' width={300} ></ColumnDirective>
      <ColumnDirective field='StartDate'></ColumnDirective>
      <ColumnDirective field='EndDate' ></ColumnDirective>
      <ColumnDirective field='Duration' ></ColumnDirective>
      <ColumnDirective field='Progress' ></ColumnDirective>
    </ColumnsDirective>
    <HolidaysDirective>
      <HolidayDirective from='04/04/2019' to='04/05/2019' label='Public Holiday'></HolidayDirective>
      <HolidayDirective from='04/12/2019' to='04/12/2019' label='Good Friday'></HolidayDirective>
    </HolidaysDirective>
    <Inject services={[Selection, DayMarkers]} />
  </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));