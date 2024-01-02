

import { enableRipple } from '@syncfusion/ej2-base';
import { DataManager, ODataAdaptor, Query, ReturnOption } from '@syncfusion/ej2-data';
import { FieldSettingsModel, MenuComponent } from '@syncfusion/ej2-react-navigations';
import { useState, useEffect } from "react";
import * as React from 'react';
import * as ReactDom from 'react-dom';

const SERVICE_URI: string = 'https://services.odata.org/V4/Northwind/Northwind.svc/';

enableRipple(true);

function App() {
    let menuObj: MenuComponent;
    const [state, setState] = useState({
        menuItems: []
    });
    // Menu fields definition.
    let menuFields: FieldSettingsModel = {
        children: ['Orders'],
        text: ['FirstName', 'ShipName']
    };

    useEffect(() => {
        new DataManager({ url: SERVICE_URI, adaptor: new ODataAdaptor, crossDomain: true })
            .executeQuery(
                new Query().from('Employees').take(5).hierarchy(
                    new Query()
                        .foreignKey('EmployeeID')
                        .from('Orders').take(13),
                        select
            ))
            .then((e: ReturnOption) => {
                setState({ menuItems: e.result as Array<{ [key: string]: any }>} );
        });
    }, []);

    function select(): number [] {
        return [1,2,3,4,5];
    }

    return (
        <div>
            {
                state.menuItems.length  ?
                <MenuComponent ref={scope => menuObj = scope} items={state.menuItems} fields={menuFields}/> : ''
            }
        </div>
    );
}

ReactDom.render(<App />,document.getElementById('element'));


