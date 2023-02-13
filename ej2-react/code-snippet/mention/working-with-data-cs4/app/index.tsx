

import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App () {
  let mentionTarget: string = '#mentionElement';
  let sportsData: { [key: string]: Object }[] = [
    { ID: 'game1', Game: 'Badminton' },
    { ID: 'game2', Game: 'Football' },
    { ID: 'game3', Game: 'Tennis' },
    { ID: 'game4', Game: 'Hockey' },
    { ID: 'game5', Game: 'Basketball' }
  ];
  let fields:Object = { text: 'Game', value: 'ID' }

    return (
      <div id='mention_default'>
        <table>
            <tr>
                <td>
                   <label id="comment">Comments</label>
                    <div id="mentionElement" placeholder='Type @ and tag sport'></div>
                </td>
            </tr>
        </table>
        <MentionComponent target={mentionTarget} dataSource={sportsData} fields={fields} ></MentionComponent>
      </div>
    );
}

ReactDOM.render(<App />, document.getElementById('sample'));



