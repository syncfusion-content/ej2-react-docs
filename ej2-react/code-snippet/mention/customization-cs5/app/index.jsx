import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    mentionTarget = '#mentionElement';
    sportsData = [
        { ID: "game1", Game: "Badminton" },
        { ID: "game2", Game: "Football" },
        { ID: "game3", Game: "Tennis" },
        { ID: "game4", Game: "Hockey" },
        { ID: "game5", Game: "Basketball" },
        { ID: "game6", Game: "Cricket" }
    ];
    fields = { text: 'Game' };
    render() {
        return (<div id='mention_default'>
        <table>
          <tr>
            <td>
              <label id="comment">Comments</label>
              <div id="mentionElement" placeholder='Type @ and tag sport'></div>
            </td>
          </tr>
        </table>
        <MentionComponent target={this.mentionTarget} dataSource={this.sportsData} fields={this.fields} popupHeight={'200px'} popupWidth={'250px'}></MentionComponent>
      </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
