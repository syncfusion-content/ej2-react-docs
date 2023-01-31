


import { BreadcrumbComponent, BreadcrumbItemDirective, BreadcrumbItemsDirective } from '@syncfusion/ej2-react-navigations';
import { BreadcrumbBeforeItemRenderEventArgs } from '@syncfusion/ej2-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';

function App() {
    function beforeItemRenderHandler(args: BreadcrumbBeforeItemRenderEventArgs): void {
        if (args.element) {
          args.element.classList.add('e-icon-right');
        }
    }
    return (<div id="breadcrumb-control">
        <div class='header'><b>IconPosition- left</b></div><br />
        <BreadcrumbComponent>
            <BreadcrumbItemsDirective>
                <BreadcrumbItemDirective text="Program Files" iconCss="e-bicons e-folder"></BreadcrumbItemDirective>
                <BreadcrumbItemDirective text="Services" iconCss="e-bicons e-folder"></BreadcrumbItemDirective>
                <BreadcrumbItemDirective text="Config.json" iconCss="e-bicons e-file"></BreadcrumbItemDirective>
            </BreadcrumbItemsDirective>
        </BreadcrumbComponent>
        <br />
        <br/>
        <div class='header'><b>IconPosition- Right</b></div><br />
        <BreadcrumbComponent beforeItemRender={beforeItemRenderHandler}>
            <BreadcrumbItemsDirective>
                <BreadcrumbItemDirective text="Program Files" iconCss="e-bicons e-folder"></BreadcrumbItemDirective>
                <BreadcrumbItemDirective text="Services" iconCss="e-bicons e-folder"></BreadcrumbItemDirective>
                <BreadcrumbItemDirective text="Config.json" iconCss="e-bicons e-file"></BreadcrumbItemDirective>
            </BreadcrumbItemsDirective>
        </BreadcrumbComponent></div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));


