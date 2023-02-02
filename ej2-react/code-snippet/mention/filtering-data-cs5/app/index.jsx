import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    mentionTarget = '#mentionElement';
    userData = [
        { Name: "Andrew Fuller", ID: "1" },
        { Name: "Anne Dodsworth", ID: "2" },
        { Name: "Janet Leverling", ID: "3" },
        { Name: "Laura Callahan", ID: "4" },
        { Name: "Margaret Peacock", ID: "5" }
    ];
    fields = { text: 'Name' };
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
        <MentionComponent target={this.mentionTarget} dataSource={this.userData} fields={this.fields} allowSpaces={true}></MentionComponent>
      </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
