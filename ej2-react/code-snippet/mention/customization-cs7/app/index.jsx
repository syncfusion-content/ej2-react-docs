import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
export default class App extends React.Component {
    // Defines the target in which the Mention component is rendered.
    mentionTarget = '#mentionElement';
    // Defines the array of data.
    userData = [
        { Name: "Selma Rose", EmailId: "selma@gmail.com" },
        { Name: "Maria", EmailId: "maria@gmail.com" },
        { Name: "Russo kay", EmailId: "russo@gmail.com" },
        { Name: "Robert", EmailId: "robert@gmail.com" },
        { Name: "Garth", EmailId: "garth@gmail.com" }
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
      <MentionComponent target={this.mentionTarget} dataSource={this.userData} fields={this.fields} requireLeadingSpace={false}></MentionComponent>
      </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
