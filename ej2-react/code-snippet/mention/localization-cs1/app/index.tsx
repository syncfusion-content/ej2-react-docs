


import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { L10n, setCulture} from '@syncfusion/ej2-base';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

export default class App extends React.Component<{}, {}> {
  private mentionTarget: string = '#mentionElement';
  private customerData: DataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
    });
  private fields: Object =  { text: 'ContactName', value: 'CustomerID' };
  private query: Query = new Query().select(['ContactName', 'CustomerID']).take(0);
  public componentWillMount() {
    L10n.load({
      'fr-BE': {
        'dropdowns': {
          'noRecordsTemplate': "Aucun enregistrement trouvé"
        }
      }
    });
  }

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
        <MentionComponent target={this.mentionTarget} dataSource={this.customerData} locale="fr-BE" fields={this.fields} query={this.query} ></MentionComponent>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('sample'));



