


import * as React from 'react';
import * as ReactDOM from "react-dom";
import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

function App() {
  let mentionTarget: string = '#mentionElement';

  let searchData: DataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
  });
  let dataFields: Object  = { text: 'ContactName', value: 'CustomerID' };
  let query: Query = new Query().select(['ContactName', 'CustomerID']).take(7);
  let minLength = 3;

  return (
      <div id='mention_default'>
        <table>
            <tr>
                <td>
                   <label id="comment">Comments</label>
                    <div id="mentionElement" placeholder='Type @ and tag user'></div>
                </td>
            </tr>
        </table>
      <MentionComponent dataSource={searchData} target={mentionTarget} fields={dataFields} query={query} minLength={minLength}></MentionComponent>
    </div>
  );
  
}

ReactDOM.render(<App />, document.getElementById('sample'));



