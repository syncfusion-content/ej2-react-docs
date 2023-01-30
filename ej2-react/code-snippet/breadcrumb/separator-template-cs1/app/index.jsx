import { BreadcrumbComponent, BreadcrumbItemDirective, BreadcrumbItemsDirective } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';
function App() {
    function arrowSeparatorTemplate() {
        return (<span className="e-icons e-arrow"></span>);
    }
    return (<BreadcrumbComponent separatorTemplate={arrowSeparatorTemplate}>
            <BreadcrumbItemsDirective>
                <BreadcrumbItemDirective text="Cart"></BreadcrumbItemDirective>
                <BreadcrumbItemDirective text="Billing"></BreadcrumbItemDirective>
                <BreadcrumbItemDirective text="Shipping"></BreadcrumbItemDirective>
                <BreadcrumbItemDirective text="Payment"></BreadcrumbItemDirective>
            </BreadcrumbItemsDirective>
        </BreadcrumbComponent>);
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
