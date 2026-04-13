import { BreadcrumbComponent, BreadcrumbItemDirective, BreadcrumbItemsDirective } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';
function App() {
    function beforeItemRenderHandler(args) {
        if (args.element.children[0]) {
            args.element.children[0].target = "_blank";
        }
    }
    return (<BreadcrumbComponent enableActiveItemNavigation={true} beforeItemRender={beforeItemRenderHandler}>
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
