

import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  private mentionTarget: string = '#mentionElement';
  private userData: string[] = ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph'];

  public render() {
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
        <MentionComponent target={this.mentionTarget} dataSource={this.userData} ></MentionComponent>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('sample'));



