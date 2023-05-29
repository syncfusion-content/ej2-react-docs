import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
export default class App extends React.Component {
    mentionTarget = '#mentionElement';
    searchData = new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
        adaptor: new ODataV4Adaptor,
        crossDomain: true
    });
    query = new Query().select(['ContactName', 'CustomerID']).take(7);
    fields = { text: 'ContactName', value: 'CustomerID' };
    filterType = 'EndsWith';
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
          <MentionComponent target={this.mentionTarget} dataSource={this.searchData} query={this.query} fields={this.fields} filterType={this.filterType}></MentionComponent>
        </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
