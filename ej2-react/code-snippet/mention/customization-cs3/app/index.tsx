


import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  private mentionTarget: string = '#mentionElement';
  private userData:{ [key: string]: Object }[] = [
    { Country : "Australia", Code : "AU" },
    { Country : "Bermuda" , Code : "BM" },
    { Country : "Canada" , Code :  "CA" },
    { Country : "Cameroon" , Code : "CM" },
    { Country : "Denmark" , Code : "DK" }
  ];
  private fields: Object = {text:'Country'};
  public render() {
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
        <MentionComponent target={this.mentionTarget} dataSource={this.userData} fields={this.fields} showMentionChar= {true} suffixText={'&nbsp;'}></MentionComponent>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('sample'));



