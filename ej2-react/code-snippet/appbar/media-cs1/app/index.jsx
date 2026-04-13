import { AppBarComponent } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from "react";
import * as ReactDOM from "react-dom";
const App = () => {
    return (<div className='control-container'>
      <AppBarComponent colorMode="Primary">
        <ButtonComponent cssClass="e-inherit" iconCss="e-icons e-menu"></ButtonComponent>
        <ButtonComponent cssClass="e-inherit">Home</ButtonComponent>
        <ButtonComponent cssClass="e-inherit">About</ButtonComponent>
        <ButtonComponent cssClass="e-inherit">Products</ButtonComponent>
        <ButtonComponent cssClass="e-inherit">Contacts</ButtonComponent>
        <div className="e-appbar-spacer"></div>
        <div className="e-appbar-separator"></div>
        <ButtonComponent cssClass="e-inherit">Login</ButtonComponent>
      </AppBarComponent>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);
