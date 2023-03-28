


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
export default class App extends React.Component<{}, {}> {
  private mentionTarget: string = '#mentionElement';
  private userData: { [key: string]: Object }[] = [
        { Name : "Andrew Fuller", ID : "1" },
        { Name : "Anne Dodsworth" , ID : "2" },
        { Name : "Janet Leverling" , ID : "3" },
        { Name : "Laura Callahan" , ID : "4" },
        { Name : "Margaret Peacock" , ID : "5" }
    ];
    private fields: Object = { text: 'Name'}
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
            <MentionComponent target={this.mentionTarget} dataSource={this.userData} fields={this.fields }></MentionComponent>
        </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));



