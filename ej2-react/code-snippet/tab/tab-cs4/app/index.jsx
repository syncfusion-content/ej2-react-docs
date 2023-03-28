import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DataManager, Query, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { TabComponent } from '@syncfusion/ej2-react-navigations';
const SERVICE_URI = 'https://services.odata.org/V4/Northwind/Northwind.svc/Employees';
function App() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let tabInstance;
    const tabCreated = () => {
        new DataManager({ url: SERVICE_URI, adaptor: new ODataV4Adaptor() })
            .executeQuery(new Query().range(1, 4)).then((e) => {
            let itemsData = [];
            let result = e.result;
            let mapping = { header: 'FirstName', content: 'Notes' };
            for (let i = 0; i < result.length; i++) {
                itemsData.push({ header: { text: result[i][mapping.header] }, content: result[i][mapping.content] });
            }
            tabInstance.items = itemsData;
            tabInstance.refresh();
        });
    };
    return (<TabComponent heightAdjustMode='Auto' ref={tab => tabInstance = tab} created={tabCreated}>
      </TabComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);
