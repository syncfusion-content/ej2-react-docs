import { BreadcrumbComponent, BreadcrumbItemDirective, BreadcrumbItemsDirective } from '@syncfusion/ej2-react-navigations';
import { ChipListComponent, ChipsDirective, ChipDirective } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
function App() {
    function chipTemplate(data) {
        return (<ChipListComponent>
                <ChipsDirective>
                    <ChipDirective text={data.text}></ChipDirective>
                </ChipsDirective>
            </ChipListComponent>);
    }
    return (<BreadcrumbComponent cssClass="e-breadcrumb-chips" itemTemplate={chipTemplate}>
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
