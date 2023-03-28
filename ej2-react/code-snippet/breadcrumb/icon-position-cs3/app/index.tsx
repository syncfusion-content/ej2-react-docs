


import { BreadcrumbComponent, BreadcrumbItemDirective, BreadcrumbItemsDirective } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';

function App() {

    return (
        <BreadcrumbComponent>
            <BreadcrumbItemsDirective>
                <BreadcrumbItemDirective iconCss="e-icons e-home"></BreadcrumbItemDirective>
                <BreadcrumbItemDirective iconCss="e-bicons e-folder"></BreadcrumbItemDirective>
                <BreadcrumbItemDirective iconCss="e-bicons e-file"></BreadcrumbItemDirective>
            </BreadcrumbItemsDirective>
        </BreadcrumbComponent>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));


