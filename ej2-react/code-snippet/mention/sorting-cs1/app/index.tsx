

import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  private mentionTarget: string = '#mentionElement';
  private sportData: { [key: string]: Object }[] = [
    { ID : "game1" ,Game : "Badminton"},
    { ID : "game2" ,Game : "Football" },
    { ID : "game3" ,Game : "Tennis"},
    { ID : "game4" ,Game : "Hockey"},
    { ID : "game5" ,Game : "Basketball"},
    { ID : "game6" ,Game : "Cricket"}
  ];
  private fields: Object = {text:'Game'};

  public render() {
    return (
      <div id='mention_default'>
        <table>
          <tr>
            <td>
              <label id="comment">Comments</label>
              <div id="mentionElement" placeholder='Type @ and tag sport' ></div>
            </td>
          </tr>
        </table>
        <MentionComponent target={this.mentionTarget} dataSource={this.sportData} fields={this.fields} sortOrder={"Descending"} ></MentionComponent>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('sample'));



