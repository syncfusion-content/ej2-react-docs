import { enableRipple } from '@syncfusion/ej2-base';
import { DataManager, ODataAdaptor, Query } from '@syncfusion/ej2-data';
import { MenuComponent } from '@syncfusion/ej2-react-navigations';
import { useState, useEffect } from "react";
import * as React from 'react';
import * as ReactDom from 'react-dom';
const SERVICE_URI = 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/';
enableRipple(true);
function App() {
    let menuObj;
    const [state, setState] = useState({
        menuItems: []
    });
    // Menu fields definition.
    let menuFields = {
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
            .then((e) => {
                setState({ menuItems: e.result });
        });
    }, []);

    function select() {
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
ReactDom.render(<App />, document.getElementById('element'));
