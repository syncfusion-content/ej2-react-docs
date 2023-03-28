import * as React from 'react';
import * as ReactDOM from "react-dom";
import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
function App() {
    let mentionTarget = '#mentionElement';
    let dataSource = new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
        adaptor: new ODataV4Adaptor,
        crossDomain: true
    });
    let query = new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(10);
    let fields = { text: "FirstName", value: "EmployeeID" };
    function spinnerTemplate() {
        return (<React.Fragment>
       <div className="spinner_loader"></div>
      </React.Fragment>);
    }
    return (<div id='mention_default'>
        <table>
          <tr>
            <td>
              <label id="comment">Comments</label>
              <div id="mentionElement" placeholder='Type @ and tag user'></div>
            </td>
          </tr>
        </table>
        <MentionComponent dataSource={dataSource} target={mentionTarget} fields={fields} query={query} sortOrder={'Ascending'} spinnerTemplate={spinnerTemplate} popupWidth={'250px'}></MentionComponent>
      </div>);
}
ReactDOM.render(<App />, document.getElementById('sample'));
