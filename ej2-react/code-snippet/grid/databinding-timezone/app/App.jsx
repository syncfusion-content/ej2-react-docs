import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { CheckBoxComponent } from "@syncfusion/ej2-react-buttons";
import { DataUtil } from "@syncfusion/ej2-data";

function App() {
  let grid;
  let selectedTimezone = -12;
  let timezoneCheckboxRef;
  const hostUrl = "https://services.syncfusion.com/react/production/";
  const data = new DataManager({ url: hostUrl + 'api/Orders', adaptor: new WebApiAdaptor });
  const field = { text: 'text', value: 'value' };
  const timeZones = [
    { value: -12, text: "-12:00 UTC" },
    { value: -11, text: "-11:00 UTC" },
    { value: -10, text: "-10:00 UTC" },
    { value: -9, text: "-09:00 UTC" },
    { value: -8, text: "-08:00 UTC" },
    { value: -7, text: "-07:00 UTC" },
    { value: -6, text: "-06:00 UTC" },
    { value: -5, text: "-05:00 UTC" },
    { value: -4, text: "-04:00 UTC" },
    { value: -3, text: "-03:00 UTC" },
    { value: -2, text: "-02:00 UTC" },
    { value: -1, text: "-01:00 UTC" },
    { value: 0, text: "+00:00 UTC" },
    { value: 1, text: "+01:00 UTC" },
    { value: 2, text: "+02:00 UTC" },
    { value: 3, text: "+03:00 UTC" },
    { value: 4, text: "+04:00 UTC" },
    { value: 5, text: "+05:00 UTC" },
    { value: 5.5, text: "+05:30 UTC" },
    { value: 6, text: "+06:00 UTC" },
    { value: 7, text: "+07:00 UTC" },
    { value: 8, text: "+08:00 UTC" },
    { value: 9, text: "+09:00 UTC" },
    { value: 10, text: "+10:00 UTC" },
    { value: 11, text: "+11:00 UTC" },
    { value: 12, text: "+12:00 UTC" },
    { value: 13, text: "+13:00 UTC" },
    { value: 14, text: "+14:00 UTC" },
  ];

  const onTimezoneChange = (event) => {
    selectedTimezone=(Number(event.itemData.value));
    grid.freezeRefresh();
  };
  
  const onCheckboxChange = (event) => {
    grid.freezeRefresh();
  };

  const load= (event) => {
    DataUtil.serverTimezoneOffset = timezoneCheckboxRef.checked ? 0 : selectedTimezone;
  }
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <label style={{ marginRight: "10px" }}>Select Timezone:</label>
        <DropDownListComponent
          id="timezone"
          width="150px"
          dataSource={timeZones}
          value={selectedTimezone}
          change={onTimezoneChange}
          fields={field}
          index={0}
          ref = {dropdown=> timezoneDropdownRef = dropdown}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <CheckBoxComponent
          ref ={checkbox=>timezoneCheckboxRef=checkbox}
          label="Prevent Timezone Conversion"
          change={onCheckboxChange}
        />
      </div>
      <GridComponent ref={g => grid = g} dataSource={data} load={load} height={315}>
        <ColumnsDirective>
          <ColumnDirective field="OrderID" headerText="Order ID" textAlign="Right" width={120} />
          <ColumnDirective field="CustomerID" headerText="Customer ID" width={140} />
          <ColumnDirective field="Freight" headerText="Freight" textAlign="Right" format="C" width={120} />
          <ColumnDirective field="OrderDate" headerText="Order Date" textAlign="Right" width={140} />
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
};
export default App;