import { enableRipple } from '@syncfusion/ej2-base';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { MenuComponent } from '@syncfusion/ej2-react-navigations';
import { useState, useEffect } from "react";
import * as React from 'react';
import * as ReactDom from 'react-dom';

const SERVICE_URI = 'https://services.odata.org/v4/Northwind/Northwind.svc/';

enableRipple(true);
function App() {
    const [menuItems, setState] = useState([]);
    // Menu fields definition.
    let menuFields = {
        children: ['Orders'],
        text: ['FirstName', 'ShipName']
    };

    useEffect(() => {
        new DataManager({ url: SERVICE_URI, adaptor: new ODataV4Adaptor(), crossDomain: true })
            .executeQuery(
                new Query().from('Employees').take(5).hierarchy(
                    new Query()
                        .foreignKey('EmployeeID')
                        .from('Orders').take(13),
                        select
            ))
            .then((e) => {
                setState(e.result);
        });
    }, []);

    function select() {
        return [1,2,3,4,5];
    }

    return (
        <div>
            {
                menuItems.length  ?
                <MenuComponent items={menuItems} fields={menuFields}/> : ''
            }
        </div>
    );
}
ReactDom.render(<App />, document.getElementById('element'));
