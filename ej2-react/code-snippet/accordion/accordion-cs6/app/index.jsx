import * as React from "react";
import * as ReactDOM from "react-dom";
import { DataManager, Query, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { AccordionComponent } from '@syncfusion/ej2-react-navigations';
const SERVICE_URI = 'https://services.odata.org/V4/Northwind/Northwind.svc/Employees';
function ReactApp() {
    let acrdnInstance;
    const accordCreated = () => {
        new DataManager({ url: SERVICE_URI, adaptor: new ODataV4Adaptor() })
            .executeQuery(new Query().range(1, 4)).then((e) => {
            let itemsData = [];
            let result = e.result;
            let mapping = { header: 'FirstName', content: 'Notes' };
            for (let i = 0; i < result.length; i++) {
                itemsData.push({ header: result[i][mapping.header], content: result[i][mapping.content] });
            }
            acrdnInstance.items = itemsData;
            acrdnInstance.refresh();
        });
    };
    return (<AccordionComponent ref={acrdn => acrdnInstance = acrdn} created={accordCreated}>
    </AccordionComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);
