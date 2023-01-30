{% raw %}



import { BreadcrumbComponent, BreadcrumbItemDirective, BreadcrumbItemsDirective } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';

function App() {
    function specificItemTemplate(data: any): JSX.Element {
        return (
            <div>
                {data.text == "Breadcrumb" ? (
                    <span><span className="e-searchfor-text"><span style={{ marginRight: "5px" }}>Search for:</span>
                        <a className="e-breadcrumb-text" href={data.url} onClick={() => { return false }}>{data.text}</a></span></span>
                ) : (
                    <a className="e-breadcrumb-text" href={data.url} onClick={() => { return false }}>{data.text}</a>
                )}
            </div>
        );
    }

    return (
        <BreadcrumbComponent itemTemplate={specificItemTemplate} cssClass="e-specific-item-template"  enableNavigation={false}>
            <BreadcrumbItemsDirective>
                <BreadcrumbItemDirective text="Home" url="https://ej2.syncfusion.com/home/react.html#platform" />
                <BreadcrumbItemDirective text="Components" url="https://ej2.syncfusion.com/react/demos/#/material/grid/overview/" />
                <BreadcrumbItemDirective text="Navigations" url="https://ej2.syncfusion.com/react/demos/#/material/menu/default" />
                <BreadcrumbItemDirective text="Breadcrumb" url="./breadcrumb/default" />
            </BreadcrumbItemsDirective>
        </BreadcrumbComponent>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));


{% endraw %}