import { AppBarComponent } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from "react";
import * as ReactDOM from "react-dom";
const App = () => {
    return (<div className='control-container'>
      <AppBarComponent colorMode="Primary">
        <ButtonComponent cssClass="e-inherit" iconCss="e-icons e-cut"></ButtonComponent>
        <ButtonComponent cssClass="e-inherit" iconCss="e-icons e-copy"></ButtonComponent>
        <ButtonComponent cssClass="e-inherit" iconCss="e-icons e-paste"></ButtonComponent>
        <div className="e-appbar-separator"></div>
        <ButtonComponent cssClass="e-inherit" iconCss="e-icons e-bold"></ButtonComponent>
        <ButtonComponent cssClass="e-inherit" iconCss="e-icons e-underline"></ButtonComponent>
        <ButtonComponent cssClass="e-inherit" iconCss="e-icons e-italic"></ButtonComponent>
        <div className="e-appbar-separator"></div>
        <ButtonComponent cssClass="e-inherit" iconCss="e-icons e-align-left"></ButtonComponent>
        <ButtonComponent cssClass="e-inherit" iconCss="e-icons e-align-right"></ButtonComponent>
        <ButtonComponent cssClass="e-inherit" iconCss="e-icons e-align-center"></ButtonComponent>
        <ButtonComponent cssClass="e-inherit" iconCss="e-icons e-justify"></ButtonComponent>
      </AppBarComponent>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);
