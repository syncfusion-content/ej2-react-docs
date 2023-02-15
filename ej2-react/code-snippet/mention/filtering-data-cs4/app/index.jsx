import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
function App() {
    let mentionTarget = '#mentionElement';
    let searchData = new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
        adaptor: new ODataV4Adaptor,
        crossDomain: true
    });
    let query = new Query().select(['ContactName', 'CustomerID']).take(7);
    let fields = { text: 'ContactName', value: 'CustomerID' };
    let filterType = 'EndsWith';
    return (<div id='mention_default'>
          <table>
              <tr>
                  <td>
                     <label id="comment">Comments</label>
                      <div id="mentionElement" placeholder='Type @ and tag user'></div>
                  </td>
              </tr>
          </table>
          <MentionComponent target={mentionTarget} dataSource={searchData} query={query} fields={fields} filterType={filterType}></MentionComponent>
        </div>);
}
ReactDOM.render(<App />, document.getElementById('sample'));
