import { BreadcrumbComponent, BreadcrumbItemDirective, BreadcrumbItemsDirective } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';
function App() {
    function breadcrumbTemplate() {
        return (<span className="e-bicons e-arrow"></span>);
    }
    return (<BreadcrumbComponent maxItems={3} enableNavigation={false} overflowMode='Wrap' separatorTemplate={breadcrumbTemplate}>
            <BreadcrumbItemsDirective>
                <BreadcrumbItemDirective text="Home" url="../"></BreadcrumbItemDirective>
                <BreadcrumbItemDirective text="Breadcrumb" url="./breadcrumb"></BreadcrumbItemDirective>
                <BreadcrumbItemDirective text="Default" url="./breadcrumb/default-functionalities"></BreadcrumbItemDirective>
                <BreadcrumbItemDirective text="Icons" url="./breadcrumb/icons"></BreadcrumbItemDirective>
                <BreadcrumbItemDirective text="Navigation" url="./breadcrumb/navigation"></BreadcrumbItemDirective>
                <BreadcrumbItemDirective text="Overflow" url="./breadcrumb/overflow"></BreadcrumbItemDirective>
            </BreadcrumbItemsDirective>
        </BreadcrumbComponent>);
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
