import * as React from 'react';
import * as ReactDOM from "react-dom";
import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
export default class App extends React.Component {
    mentionTarget = '#mentionElement';
    dataSource = new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
        adaptor: new ODataV4Adaptor,
        crossDomain: true
    });
    query = new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(10);
    fields = { text: "FirstName", value: "EmployeeID" };
    itemTemplate(data) {
        return (<span><span>{data.FirstName}</span><span className='city'>{data.City}</span></span>);
    }
    displayTemplate(data) {
        return (<React.Fragment>
        <span>{data.FirstName} - {data.City}</span>
      </React.Fragment>);
    }
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
        <MentionComponent dataSource={this.dataSource} target={this.mentionTarget} fields={this.fields} itemTemplate={this.itemTemplate} displayTemplate={this.displayTemplate} query={this.query} sortOrder={'Ascending'} popupWidth={'250px'}></MentionComponent>
      </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
