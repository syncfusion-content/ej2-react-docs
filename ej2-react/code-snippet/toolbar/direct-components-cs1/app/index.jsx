import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ToolbarComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
function App() {
    function contentTemplate1() {
        return (<ButtonComponent>Click me</ButtonComponent>);
    }
    function contentTemplate2() {
        return (<DatePickerComponent></DatePickerComponent>);
    }
    return (<div id='container'>
      <ToolbarComponent id="toolbar">
        <ItemsDirective>
          <ItemDirective template={contentTemplate1}/>
          <ItemDirective template={contentTemplate2}/>
          <ItemDirective text="Cut"/>
          <ItemDirective text="Copy"/>
          <ItemDirective text="Paste"/>
          <ItemDirective type="Separator"/>
          <ItemDirective text="Bold"/>
          <ItemDirective text="Italic"/>
          <ItemDirective text="Underline"/>
        </ItemsDirective>
      </ToolbarComponent>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);
