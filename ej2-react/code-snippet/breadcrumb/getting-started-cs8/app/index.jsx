import { BreadcrumbComponent, BreadcrumbItemDirective, BreadcrumbItemsDirective } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';
function App() {
    return (<BreadcrumbComponent enableNavigation={false}>
            <BreadcrumbItemsDirective>
                <BreadcrumbItemDirective text="Home" url="https://ej2.syncfusion.com/documentation/breadcrumb/introduction"/>
                <BreadcrumbItemDirective text="Getting" url="https://ej2.syncfusion.com/documentation/breadcrumb/getting-started"/>
                <BreadcrumbItemDirective text="Icons" url="https://ej2.syncfusion.com/documentation/breadcrumb/icons"/>
                <BreadcrumbItemDirective text="Navigations" url="https://ej2.syncfusion.com/documentation/breadcrumb/navigation"/>
                <BreadcrumbItemDirective text="Overflow" url="https://ej2.syncfusion.com/documentation/breadcrumb/overflow"/>
            </BreadcrumbItemsDirective>
        </BreadcrumbComponent>);
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
