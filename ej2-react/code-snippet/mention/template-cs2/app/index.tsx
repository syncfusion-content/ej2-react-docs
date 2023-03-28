

import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

function App (){

  let mentionTarget: string = '#mentionElement';
  let dataSource: DataManager = new DataManager({
      url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
      adaptor: new ODataV4Adaptor,
      crossDomain: true
  });
  let query:Query = new Query().from('Employees').select(['FirstName', 'City','EmployeeID']).take(10);
  let fields:Object  = { text: "FirstName", value: "EmployeeID" };
  function itemTemplate(data: any): JSX.Element {
    return (
    <span><span>{data.FirstName}</span><span className ='city'>{data.City}</span></span>
    );
  }

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
        <MentionComponent dataSource={dataSource} target={mentionTarget} fields={fields} itemTemplate={itemTemplate} query={query} sortOrder={'Ascending'} popupWidth={'250px'}></MentionComponent>
      </div>
    );
}

ReactDOM.render(<App />, document.getElementById('sample'));



