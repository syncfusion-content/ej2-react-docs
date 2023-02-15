


import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App (){
  let mentionTarget: string = '#mentionElement';
  let userData:{ [key: string]: Object }[] = [
    { Country : "Australia", Code : "AU" },
    { Country : "Bermuda" , Code : "BM" },
    { Country : "Canada" , Code :  "CA" },
    { Country : "Cameroon" , Code : "CM" },
    { Country : "Denmark" , Code : "DK" }
  ];
  let fields: Object = {text:'Country'};

  return (
      <div id='mention_default'>
        <table>
            <tr>
              <td>
                <label id="comment">Comments</label>
                <div id="mentionElement" placeholder='Type @ and tag country' ></div>
              </td>
            </tr>
        </table>
        <MentionComponent target={mentionTarget} dataSource={userData} fields={fields} showMentionChar= {true} suffixText={'&nbsp;'}></MentionComponent>
      </div>
  );

}

ReactDOM.render(<App />, document.getElementById('sample'));



