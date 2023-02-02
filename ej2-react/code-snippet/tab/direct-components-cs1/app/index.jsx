import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DatePickerComponent, CalendarComponent } from '@syncfusion/ej2-react-calendars';
function App() {
    let headertext;
    function contentTemplate() {
        return (<ButtonComponent>Click me</ButtonComponent>);
    }
    function contentTemplate1() {
        return (<DatePickerComponent></DatePickerComponent>);
    }
    function contentTemplate2() {
        return (<CalendarComponent></CalendarComponent>);
    }
    headertext = [{ text: "Tab1" }, { text: "Tab2" }, { text: "Tab3" }];
    return (<div id='container'>
      <TabComponent heightAdjustMode='Auto' id='tabelement'>
        <TabItemsDirective>
          <TabItemDirective header={headertext[0]} content={contentTemplate}/>
          <TabItemDirective header={headertext[1]} content={contentTemplate1}/>
          <TabItemDirective header={headertext[2]} content={contentTemplate2}/>
        </TabItemsDirective>
      </TabComponent>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);
