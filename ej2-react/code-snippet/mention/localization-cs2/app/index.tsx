


import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { L10n, setCulture} from '@syncfusion/ej2-base';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

function App () {
  let mentionTarget: string = '#mentionElement';
  let customerData: DataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
    });
  let fields: Object =  { text: 'ContactName', value: 'CustomerID' };
  let query: Query = new Query().select(['ContactName', 'CustomerID']).take(0);
  function componentWillMount() {
    L10n.load({
      'fr-BE': {
        'dropdowns': {
          'noRecordsTemplate': "Aucun enregistrement trouvé"
        }
      }
    });
  }

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
        <MentionComponent target={mentionTarget} dataSource={customerData} locale="fr-BE" fields={fields} query={query} ></MentionComponent>
      </div>
  );
}

ReactDOM.render(<App />, document.getElementById('sample'));



