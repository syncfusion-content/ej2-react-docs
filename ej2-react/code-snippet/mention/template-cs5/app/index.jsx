import * as React from 'react';
import * as ReactDOM from "react-dom";
import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
export default class App extends React.Component {
    mentionTarget = '#mentionElement';
    dataSource = [];
    noRecordsTemplate = "<span class='norecord'> NO DATA AVAILABLE</span>";
    render() {
        return (<div id='mention_default'>
        <table>
          <tr>
            <td>
              <label id="comment">Comments</label>
              <div id="mentionElement" placeholder='Type @ and tag user'></div>
            </td>
          </tr>
        </table>
        <MentionComponent dataSource={this.dataSource} target={this.mentionTarget} noRecordsTemplate={this.noRecordsTemplate}></MentionComponent>
      </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
