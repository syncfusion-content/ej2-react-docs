import { AppBarComponent, MenuComponent } from "@syncfusion/ej2-react-navigations";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from "react";
import * as ReactDOM from "react-dom";
const App = () => {
    const companyMenuItems = [
        {
            text: 'Company',
            items: [
                { text: 'About Us' },
                { text: 'Customers' },
                { text: 'Blog' },
                { text: 'Careers' }
            ]
        }
    ];
    const productMenuItems = [
        {
            text: 'Products',
            items: [
                { text: 'Developer' },
                { text: 'Analytics' },
                { text: 'Reporting' },
                { text: 'Help Desk' }
            ]
        }
    ];
    const aboutMenuItems = [
        {
            text: 'About Us'
        }
    ];
    const carrerMenuItems = [
        {
            text: 'Carrers'
        }
    ];
    return (<div className='control-container'>
      <AppBarComponent colorMode="Primary">
        <ButtonComponent cssClass="e-inherit" iconCss="e-icons e-menu"></ButtonComponent>
        <MenuComponent cssClass="e-inherit" items={companyMenuItems}></MenuComponent>
        <MenuComponent cssClass="e-inherit" items={productMenuItems}></MenuComponent>
        <MenuComponent cssClass="e-inherit" items={aboutMenuItems}></MenuComponent>
        <MenuComponent cssClass="e-inherit" items={carrerMenuItems}></MenuComponent>
        <div className="e-appbar-spacer"></div>
        <ButtonComponent cssClass="e-inherit">Login</ButtonComponent>
      </AppBarComponent>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);
