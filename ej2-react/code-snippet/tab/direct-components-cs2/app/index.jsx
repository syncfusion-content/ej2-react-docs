import * as React from "react";
import * as ReactDOM from "react-dom";
import { enableRipple } from "@syncfusion/ej2-base";
import { TabComponent, TabItemDirective, TabItemsDirective, ContextMenuComponent } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { DatePickerComponent, CalendarComponent } from "@syncfusion/ej2-react-calendars";
enableRipple(true);
function App() {
    let cMenu;
    const [menuItems] = React.useState([{ text: "Cut" }, { text: "Copy" }, { text: "Paste" }]);
    function btnClick() {
        cMenu.open(80, 20);
    }
    let headertext;
    function contentTemplate() {
        return (<div>
        <ContextMenuComponent id="contextmenu" ref={scope => (cMenu = scope)} items={menuItems}/>
        <ButtonComponent onClick={btnClick}>Click me</ButtonComponent>
      </div>);
    }
    function contentTemplate1() {
        return <DatePickerComponent />;
    }
    function contentTemplate2() {
        return <CalendarComponent />;
    }
    headertext = [{ text: "Tab1" }, { text: "Tab2" }, { text: "Tab3" }];
    return (<div id="container">
      <TabComponent heightAdjustMode="Auto" id="tabelement">
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
