import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
function App() {
    // Defines the target in which the Mention component is rendered.
    let mentionTarget = '#mentionElement';
    // Defines the array of data.
    let userData = [
        { Name: "Selma Rose", EmailId: "selma@gmail.com" },
        { Name: "Maria", EmailId: "maria@gmail.com" },
        { Name: "Russo kay", EmailId: "russo@gmail.com" },
        { Name: "Robert", EmailId: "robert@gmail.com" },
        { Name: "Garth", EmailId: "garth@gmail.com" }
    ];
    let fields = { text: 'Name' };
    return (<div id='mention_default'>
        <table>
          <tr>
            <td>
              <label id="comment">Comments</label>
              <div id="mentionElement" placeholder='Type @ and tag user'></div>
            </td>
          </tr>
        </table>
      <MentionComponent target={mentionTarget} dataSource={userData} fields={fields} requireLeadingSpace={false}></MentionComponent>
      </div>);
}
ReactDOM.render(<App />, document.getElementById('sample'));
