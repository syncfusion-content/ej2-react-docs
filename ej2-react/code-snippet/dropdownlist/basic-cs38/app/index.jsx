// import L10n class for load function
import { L10n } from '@syncfusion/ej2-base';
// import DataManager related classes
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    customerData: DataManager = new DataManager({
        adaptor: new ODataV4Adaptor,
        crossDomain: true,
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers'
    });
    fields: object = { text: 'ContactName', value: 'CustomerID' };
    query: Query = new Query().select(['ContactName', 'CustomerID']).take(0);
    // set locale culture to DropDownList
    React.useEffect(() => {
        L10n.load({
            'fr-BE': {
                'dropdowns': {
                    'actionFailureTemplate': "Modèle d'échec d'action",
                    'noRecordsTemplate': "Aucun enregistrement trouvé"
                }
            }
        });
    }, []);
    return (
    // specifies the tag for render the DropDownList component
    <DropDownListComponent id="ddlelement" fields={fields} locale="fr-BE" query={query} dataSource={customerData} placeholder="Sélectionnez un client"/>);
}
ReactDOM.render(<App />, document.getElementById('sample'));
