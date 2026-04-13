import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Month, Inject, ViewsDirective,
  ViewDirective
} from "@syncfusion/ej2-react-schedule";
import { Internationalization } from '@syncfusion/ej2-base';

const App = () => {
  const instance = new Internationalization();
  const getDateHeaderText = (props): JSX.Element => {
    return (<div>{instance.formatDate(props.date, { skeleton: "Ed" })}</div>);
  }
  return (<ScheduleComponent height='550px' cellHeaderTemplate={getDateHeaderText}>
    <ViewsDirective>
      <ViewDirective option='Month' />
    </ViewsDirective>
    <Inject services={[Month]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


