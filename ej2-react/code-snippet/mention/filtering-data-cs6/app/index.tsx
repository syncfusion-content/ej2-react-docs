


import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App (){

  let mentionTarget: string = '#mentionElement';
  let userData: {[key: string]: Object}[] = [
    { Name : "Andrew Fuller", ID : "1" },
    { Name : "Anne Dodsworth" , ID : "2" },
    { Name : "Janet Leverling" , ID : "3" },
    { Name : "Laura Callahan" , ID : "4" },
    { Name : "Margaret Peacock" , ID : "5" }
  ];
  let fields: Object = {text:'Name'};
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
        <MentionComponent target={mentionTarget} dataSource={userData} fields={fields} allowSpaces={true} ></MentionComponent>
      </div>
  );
}

ReactDOM.render(<App />, document.getElementById('sample'));



