// import L10n class for load function
import { L10n } from '@syncfusion/ej2-base';
// import DataManager related classes
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    // bind remotedata to showcase actionFailureTemplate in offline.
    customerData = new DataManager({
        adaptor: new ODataV4Adaptor,
        crossDomain: true,
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers'
    });
    // maps the appropriate column to fields property
    fields = { text: 'ContactName', value: 'CustomerID' };
    // take 0 item to showcase noRecordsTemplate property.
    query = new Query().select(['ContactName', 'CustomerID']).take(0);
    // set locale culture to MultiSelect
    componentWillMount() {
        L10n.load({
            'fr-BE': {
                'multi-select': {
                    'actionFailureTemplate': "Modèle d'échec d'action",
                    'noRecordsTemplate': "Aucun enregistrement trouvé"
                }
            }
        });
    }
    render() {
        return (
        // specifies the tag for render the MultiSelect component
        <MultiSelectComponent id="mtselement" fields={this.fields} locale="fr-BE" query={this.query} dataSource={this.customerData} placeholder="Sélectionnez un client"/>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
