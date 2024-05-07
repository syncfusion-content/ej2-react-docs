import { AppBarComponent } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from "react";
import * as ReactDOM from "react-dom";
const App = () => {
    return (<div className='control-container'>
      <AppBarComponent colorMode="Primary" mode="Dense">
        <ButtonComponent cssClass="e-inherit" iconCss="e-icons e-menu"></ButtonComponent>
        <span className="dense">Dense AppBar</span>
        <div className="e-appbar-spacer"></div>
        <ButtonComponent cssClass="e-inherit">FREE TRIAL</ButtonComponent>
      </AppBarComponent>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);
