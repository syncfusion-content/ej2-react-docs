import { BreadcrumbComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';
function App() {
    function beforeItemRenderHandler(args) {
        if (args.item.text === 'bind-to-location') {
            args.item.text = 'location';
        }
    }
    return (<BreadcrumbComponent enableActiveItemNavigation={true} url="https://ej2.syncfusion.com/demos/breadcrumb/bind-to-location" beforeItemRender={beforeItemRenderHandler}>
        </BreadcrumbComponent>);
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
