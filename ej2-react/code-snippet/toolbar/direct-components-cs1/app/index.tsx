import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ToolbarComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';


const App = () => {
  const buttonTemplate = (): JSX.Element => {
    return (<ButtonComponent>Click me</ButtonComponent>);
  }
  const datePickerTemplate = (): JSX.Element => {
    return (<DatePickerComponent></DatePickerComponent>);
  }
  return (
    <div id='container'>
      <ToolbarComponent id="toolbar">
        <ItemsDirective>
          <ItemDirective template={buttonTemplate} />
          <ItemDirective template={datePickerTemplate} />
          <ItemDirective text="Cut" />
          <ItemDirective text="Copy" />
          <ItemDirective text="Paste" />
          <ItemDirective type="Separator" />
          <ItemDirective text="Bold" />
          <ItemDirective text="Italic" />
          <ItemDirective text="Underline" />
        </ItemsDirective>
      </ToolbarComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);



