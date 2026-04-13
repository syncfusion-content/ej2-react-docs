


import { BreadcrumbComponent, BreadcrumbItemDirective, BreadcrumbItemsDirective } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';

function App() {

    return (
        <BreadcrumbComponent enableNavigation={false} url="https://ej2.syncfusion.com/demos/breadcrumb/bind-to-location"></BreadcrumbComponent>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));


