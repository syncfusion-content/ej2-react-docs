import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    mentionTarget = '#mentionElement';
    countriesData = [
        { Country: { Name: 'Australia' }, Code: { ID: 'AU' } },
        { Country: { Name: 'Bermuda' }, Code: { ID: 'BM' } },
        { Country: { Name: 'Canada' }, Code: { ID: 'CA' } },
        { Country: { Name: 'Cameroon' }, Code: { ID: 'CM' } },
        { Country: { Name: 'Denmark' }, Code: { ID: 'DK' } },
        { Country: { Name: 'France' }, Code: { ID: 'FR' } },
    ];
    fields = { text: 'Country.Name', value: 'Code.ID' };
    render() {
        return (<div id='mention_default'>
        <table>
            <tr>
                <td>
                   <label id="comment">Comments</label>
                    <div id="mentionElement" placeholder='Type @ and tag country'></div>
                </td>
            </tr>
        </table>
        <MentionComponent target={this.mentionTarget} dataSource={this.countriesData} fields={this.fields}></MentionComponent>
      </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
