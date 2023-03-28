


import * as React from 'react';
import * as ReactDOM from "react-dom";
import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';

function App (){

  let mentionTarget: string = '#mentionElement';
  let dataSource :[] = [];
  let noRecordsTemplate: string = "<span class='norecord'> NO DATA AVAILABLE</span>";
  return (
        <div id='mention_default'>
          <table>
            <tr>
              <td>
                <label id="comment">Comments</label>
                <div id="mentionElement" placeholder='Type @ and tag user' ></div>
              </td>
            </tr>
          </table>
          <MentionComponent dataSource={dataSource} target={mentionTarget} noRecordsTemplate={noRecordsTemplate} ></MentionComponent>
        </div>
  );
}

ReactDOM.render(<App />, document.getElementById('sample'));



