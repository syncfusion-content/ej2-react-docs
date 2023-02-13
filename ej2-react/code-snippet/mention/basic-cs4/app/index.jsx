import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";
function App() {
    // Defines the target in which the Mention component is rendered.
    let mentionTarget = '#mentionElement';
    // Defines the array of data.
    let userData = ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph'];
    // Defines the character in which the mention component is initialized when pressing.
    let mentionCharacter = "#";
    return (<div id='mention_default'>
        <table>
            <tr>
                <td>
                  <label id="comment">Comments</label>
                  <div id="mentionElement" placeholder='Type # and tag user'></div>
                </td>
            </tr>
        </table>
        <MentionComponent target={mentionTarget} dataSource={userData} showMentionChar={true} mentionChar={mentionCharacter}></MentionComponent>
      </div>);
}
ReactDOM.render(<App />, document.getElementById('sample'));
