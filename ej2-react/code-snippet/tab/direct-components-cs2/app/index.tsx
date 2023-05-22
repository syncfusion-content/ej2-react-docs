import { useRef, useState } from "react";
import * as ReactDOM from "react-dom";
import { enableRipple } from "@syncfusion/ej2-base";
import {
  TabComponent,
  TabItemDirective,
  TabItemsDirective,
  ContextMenuComponent
} from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import {
  DatePickerComponent,
  CalendarComponent
} from "@syncfusion/ej2-react-calendars";
enableRipple(true);
const App = () => {
  const conTextMenuRef = useRef<ContextMenuComponent>(null);
  const [menuItems] = useState([{ text: "Cut" }, { text: "Copy" }, { text: "Paste" }]);
  const btnClick = () => {
    conTextMenuRef.current.open(80, 20);
  }
  let headertext;
  const conTextTemplate = () => {
    return (
      <div>
        <ContextMenuComponent
          id="contextmenu"
          ref={conTextMenuRef}
          items={menuItems}
        />
        <ButtonComponent onClick={btnClick}>Click me</ButtonComponent>
      </div>
    );
  }
  const datePickerTemplate = () => {
    return <DatePickerComponent />;
  }
  const calenderTemplate = () => {
    return <CalendarComponent />;
  }
  headertext = [{ text: "ContextMenuComponent" }, { text: "DatePickerComponent" }, { text: "CalendarComponent" }];
  return (
    <div id="container">
      <TabComponent heightAdjustMode="Auto" id="tabelement">
        <TabItemsDirective>
          <TabItemDirective
            header={headertext[0]}
            content={conTextTemplate}
          />
          <TabItemDirective
            header={headertext[1]}
            content={datePickerTemplate}
          />
          <TabItemDirective
            header={headertext[2]}
            content={calenderTemplate}
          />
        </TabItemsDirective>
      </TabComponent>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);