


import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  // Defines the target in which the Mention component is rendered.
  private mentionTarget: string = '#mentionElement';

  // Defines the array of data.
  private userData: string[] = ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph'];

  public render() {
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

        <MentionComponent target={this.mentionTarget} dataSource={this.userData}></MentionComponent>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('sample'));


