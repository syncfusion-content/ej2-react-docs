import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";
function App() {
    let mentionTarget = '#mentionElement';
    // define the data with category
    let statusData = [
      { "Status": "Open", "State": false },
      { "Status": "Waiting for Customer", "State": false },
      { "Status": "On Hold", "State": true },
      { "Status": "Follow-up", "State": false },
      { "Status": "Closed", "State": true },
      { "Status": "Solved", "State": false },
      { "Status": "Feature Request", "State": false }
  ];
  // map the groupBy field with Category column
  const fields = { value: 'Status', disabled: 'State' };
    return (<div id='mention_default'>
        <table>
          <tr>
            <td>
              <label id="comment">Comments</label>
              <div id="mentionElement" placeholder='Type @ and tag sport'></div>
            </td>
          </tr>
        </table>
        <MentionComponent target={mentionTarget} dataSource={statusData} fields={fields}></MentionComponent>
      </div>);
}
ReactDOM.render(<App />, document.getElementById('sample'));
