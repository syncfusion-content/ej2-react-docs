import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    // Defines the target in which the Mention component is rendered.
    mentionTarget = '#mentionElement';
    // Defines the array of data.
    emailData = [
        { Name: "Selma Rose", EmailId: "selma@gmail.com" },
        { Name: "Maria", EmailId: "maria@gmail.com" },
        { Name: "Russo Kay", EmailId: "russo@gmail.com" },
        { Name: "Robert", EmailId: "robert@gmail.com" },
        { Name: "Camden Kate", EmailId: "camden@gmail.com" },
        { Name: "Garth", EmailId: "garth@gmail.com" },
        { Name: "Andrew James", EmailId: "james@gmail.com" },
        { Name: "Olivia", EmailId: "olivia@gmail.com" },
        { Name: "Sophia", EmailId: "sophia@gmail.com" },
        { Name: "Margaret", EmailId: "margaret@gmail.com" },
        { Name: "Ursula Ann", EmailId: "ursula@gmail.com" },
        { Name: "Laura Grace", EmailId: "laura@gmail.com" },
        { Name: "Albert", EmailId: "albert@gmail.com" },
        { Name: "William", EmailId: "william@gmail.com" }
    ];
    fields = { text: 'Name' };
    render() {
        return (<div id='mention_default'>
        <table>
            <tr>
                <td>
                   <label id="comment">Comments</label>
                    <div id="mentionElement" placeholder='Type @ and tag user'></div>
                </td>
            </tr>
        </table>
        <MentionComponent target={this.mentionTarget} dataSource={this.emailData} fields={this.fields} suggestionCount={8}></MentionComponent>
      </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
