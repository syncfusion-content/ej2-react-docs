import { BreadcrumbComponent, BreadcrumbItemDirective, BreadcrumbItemsDirective } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';
function App() {
    return (<div id="breadcrumb-control">
            <div><b>EnableNavigation - false</b></div><br />
            <BreadcrumbComponent enableNavigation={false}>
                <BreadcrumbItemsDirective>
                    <BreadcrumbItemDirective iconCss="e-icons e-home" url="https://ej2.syncfusion.com/home/react.html#platform"/>
                    <BreadcrumbItemDirective text="Components" url="https://ej2.syncfusion.com/react/demos/#/material/grid/overview/"/>
                    <BreadcrumbItemDirective text="Navigations" url="https://ej2.syncfusion.com/react/demos/#/material/menu/default"/>
                    <BreadcrumbItemDirective text="Breadcrumb" url="./breadcrumb/default"/>
                </BreadcrumbItemsDirective>
            </BreadcrumbComponent>
            <br />
            <br />
            <div><b>EnableNavigation - true</b></div><br />
            <BreadcrumbComponent enableNavigation={true}>
                <BreadcrumbItemsDirective>
                    <BreadcrumbItemDirective iconCss="e-icons e-home" url="https://ej2.syncfusion.com/home/react.html#platform"/>
                    <BreadcrumbItemDirective text="Components" url="https://ej2.syncfusion.com/react/demos/#/material/grid/overview/"/>
                    <BreadcrumbItemDirective text="Navigations" url="https://ej2.syncfusion.com/react/demos/#/material/menu/default"/>
                    <BreadcrumbItemDirective text="Breadcrumb" url="./breadcrumb/default"/>
                </BreadcrumbItemsDirective>
            </BreadcrumbComponent>
        </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
