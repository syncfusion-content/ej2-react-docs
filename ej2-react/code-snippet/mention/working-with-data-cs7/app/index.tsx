


import * as React from 'react';
import * as ReactDOM from "react-dom";
import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

export default class App extends React.Component<{}, {}> {

  private mentionTarget: string = '#mentionElement';
  private dataSource: DataManager = new DataManager({
          url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
          adaptor: new ODataV4Adaptor,
          crossDomain: true
      });
  private query:Query = new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6);
  private fields:Object =  { text: 'ContactName', value: 'CustomerID' };

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
        <MentionComponent dataSource={this.dataSource} target={this.mentionTarget} fields={this.fields} query={this.query} popupWidth={'250px'}></MentionComponent>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('sample'));



