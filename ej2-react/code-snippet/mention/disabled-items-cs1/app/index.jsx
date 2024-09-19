import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    mentionTarget = '#mentionElement';
    // define the data with category
    statusData = [
      { "Status": "Open", "State": false },
      { "Status": "Waiting for Customer", "State": false },
      { "Status": "On Hold", "State": true },
      { "Status": "Follow-up", "State": false },
      { "Status": "Closed", "State": true },
      { "Status": "Solved", "State": false },
      { "Status": "Feature Request", "State": false }
    ];
  // map the groupBy field with Category column
    fields = { value: 'Status', disabled: 'State' };
    render() {
        return (<div id='mention_default'>
        <table>
          <tr>
            <td>
              <label id="comment">Comments</label>
              <div id="mentionElement" placeholder='Type @ and tag sport'></div>
            </td>
          </tr>
        </table>
        <MentionComponent target={this.mentionTarget} dataSource={this.statusData} fields={this.fields} ></MentionComponent>
      </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
