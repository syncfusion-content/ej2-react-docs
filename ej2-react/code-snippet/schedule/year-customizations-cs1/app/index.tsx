import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, ViewsDirective, ViewDirective, Resize, DragAndDrop, ResourcesDirective, ResourceDirective, Inject, Year as YearView, TimelineYear
} from '@syncfusion/ej2-react-schedule';
import { resourceData } from './datasource';

const App = () => {
  const eventSettings = { dataSource: resourceData };
  const group = { resources: ['Categories'] };


  const categoriesData: Object[] = [
    { text: 'Nancy', id: 1, color: '#ffaa00' },
    { text: 'Steven', id: 2, color: '#f8a398' },
    { text: 'Robert', id: 3, color: '#7499e1' },
    { text: 'Smith', id: 4, color: '#5978ee' },
    { text: 'Micheal', id: 5, color: '#df5286' }
  ];
  const getMonthHeaderText = (props): JSX.Element => {
    return (<div>{props.date.toLocaleString('en-us', { month: 'long' }) + ' ' + props.date.getFullYear()}</div>);
  }
  const resourceHeaderTemplate = (props): JSX.Element => {
    return (
      <div className="template-wrap">
        <div className="resource-details">
          <div className="resource-name">{props.resourceData.text}</div>
        </div>
      </div>
    );
  }
  return (<ScheduleComponent
    width="100%"
    height="495px"
    selectedDate={new Date(2021, 7, 15)}
    eventSettings={eventSettings}
    firstMonthOfYear={6}
    monthsCount={6}
    group={group}
    resourceHeaderTemplate={resourceHeaderTemplate}
    monthHeaderTemplate={getMonthHeaderText}
  >
    <ResourcesDirective>
      <ResourceDirective
        field="TaskId"
        title="Category"
        name="Categories"
        allowMultiple={true}
        dataSource={categoriesData}
        textField="text"
        idField="id"
        colorField="color"
      />
    </ResourcesDirective>
    <ViewsDirective>
      <ViewDirective option="Year" />
      <ViewDirective
        option="TimelineYear"
        displayName="Horizontal TimelineYear"
        isSelected={true}
      />
      <ViewDirective
        option="TimelineYear"
        displayName="Vertical TimelineYear"
        orientation="Vertical"
      />
    </ViewsDirective>
    <Inject
      services={[YearView, TimelineYear, Resize, DragAndDrop]}
    />
  </ScheduleComponent>)

};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);



