import * as React from "react";
import { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DataManager, Query, ODataV4Adaptor, ReturnOption } from '@syncfusion/ej2-data';
import { TabComponent } from '@syncfusion/ej2-react-navigations';

const SERVICE_URI: string = 'https://services.odata.org/V4/Northwind/Northwind.svc/Employees';

const App = () => {
  const tabInstance = useRef<TabComponent>(null);

  useEffect(() => {
    const fetchTabItems = async () => {
      const e: ReturnOption = await new DataManager({ url: SERVICE_URI, adaptor: new ODataV4Adaptor() }).executeQuery(new Query().range(1, 4));
      const result: any = e.result;
      const mapping = { header: 'FirstName', content: 'Notes' };
      const itemsData: Object[] = result.map((item: any) => ({
        header: { text: item[mapping.header] },
        content: item[mapping.content],
      }));
      tabInstance.current!.items = itemsData;
      tabInstance.current!.refresh();
    };
    if (tabInstance.current) {
      fetchTabItems();
    }
  }, [tabInstance]);

  return (
    <TabComponent heightAdjustMode='Auto' ref={tabInstance}>
    </TabComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);