import * as React from 'react';
import * as ReactDOM from "react-dom";
import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import { Query, DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
function App() {
    let mentionTarget = '#mentionElement';
    let dataSource = new DataManager({
        url: 'https://services.syncfusion.com/react/production/api/Employees',
        adaptor: new WebApiAdaptor(),
        crossDomain: true
    });
    let query = new Query().select(['FirstName', 'EmployeeID']).take(7).requiresCount();
    let fields = { text: 'FirstName', value: 'EmployeeID' };
    return (<div id='mention_default'>
        <table>
          <tr>
            <td>
              <label id="comment">Comments</label>
              <div id="mentionElement" placeholder='Type @ and tag user'></div>
            </td>
          </tr>
        </table>
        <MentionComponent dataSource={dataSource} target={mentionTarget} fields={fields} query={query} popupWidth={'250px'}></MentionComponent>
      </div>);
}
ReactDOM.render(<App />, document.getElementById('sample'));
