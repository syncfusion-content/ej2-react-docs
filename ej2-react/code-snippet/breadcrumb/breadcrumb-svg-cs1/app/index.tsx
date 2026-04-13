


import { BreadcrumbComponent, BreadcrumbItemDirective, BreadcrumbItemsDirective } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';

function App() {

    return (
        <BreadcrumbComponent enableNavigation={false}>
            <BreadcrumbItemsDirective>
                <BreadcrumbItemDirective iconCss="e-svg-home" url="https://ej2.syncfusion.com/home/react.html#platform" />
                <BreadcrumbItemDirective text="Components" url="https://ej2.syncfusion.com/react/demos/#/tailwind3/grid/overview/" />
                <BreadcrumbItemDirective text="Navigations" url="https://ej2.syncfusion.com/react/demos/#/tailwind3/menu/default" />
                <BreadcrumbItemDirective text="Breadcrumb" url="./breadcrumb/default" />
            </BreadcrumbItemsDirective>
        </BreadcrumbComponent>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));


