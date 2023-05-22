import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DatePickerComponent, CalendarComponent } from '@syncfusion/ej2-react-calendars';

const App = () => {
  let headertext: any;
  const buttonTemplate = (): JSX.Element => {
    return (<ButtonComponent>Click me</ButtonComponent>);
  }
  const datePickerTemplate = (): JSX.Element => {
    return (<DatePickerComponent></DatePickerComponent>);
  }
  const calenderTemplate = (): JSX.Element => {
    return (<CalendarComponent ></CalendarComponent>);
  }
  headertext = [{ text: "ButtonComponent" }, { text: "DatePickerComponent" }, { text: "CalendarComponent" }];
  return (
    <div id='container'>
      <TabComponent heightAdjustMode='Auto' id='tabelement'>
        <TabItemsDirective>
          <TabItemDirective header={headertext[0]}
            content={buttonTemplate} />
          <TabItemDirective header={headertext[1]}
            content={datePickerTemplate} />
          <TabItemDirective header={headertext[2]}
            content={calenderTemplate} />
        </TabItemsDirective>
      </TabComponent>
    </div>
  );

}

const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);



