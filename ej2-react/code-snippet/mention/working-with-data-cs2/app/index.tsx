

import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App (){
  let mentionTarget: string = '#mentionElement';
  let userData: string[] = ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph'];

    return (
      <div id='mention_default'>
        <table>
            <tr>
                <td>
                   <label id="comment">Comments</label>
                    <div id="mentionElement" placeholder='Type @ and tag user'></div>
                </td>
            </tr>
        </table>
        <MentionComponent target={mentionTarget} dataSource={userData} ></MentionComponent>
      </div>
    );
}

ReactDOM.render(<App />, document.getElementById('sample'));



