

import { enableRipple } from '@syncfusion/ej2-base';
import { DataManager, ODataAdaptor, Query, ReturnOption } from '@syncfusion/ej2-data';
import { FieldSettingsModel, MenuComponent } from '@syncfusion/ej2-react-navigations';
import { useState, useEffect } from "react";
import * as React from 'react';
import * as ReactDom from 'react-dom';

const SERVICE_URI: string = 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/';

enableRipple(true);

class App extends React.Component<{}, {menuItems: Array<{ [key: string]: any }> }> {
    // Menu fields definition.
    public menuFields: FieldSettingsModel = {
        children: ['Orders'],
        text: ['FirstName', 'ShipName']
    };
    constructor(props: any) {
        super(props);
        this.state = { menuItems: [] };
    }
    public componentDidMount(): void {
        // Getting remote data using DataManager.
        const proxy = this;
        new DataManager({ url: SERVICE_URI, adaptor: new ODataAdaptor, crossDomain: true })
            .executeQuery(
                new Query().from('Employees').take(5).hierarchy(
                    new Query()
                        .foreignKey('EmployeeID')
                        .from('Orders').take(13),
                        this.select
            ))
            .then((e: ReturnOption) => {
                proxy.setState({menuItems: e.result as Array<{ [key: string]: any }>});
        });
    }
    public select(): number [] {
        return [1,2,3,4,5];
    }
    public render() {
        return (
            <div>
                {
                    this.state.menuItems.length  ?
                    <MenuComponent items={this.state.menuItems} fields={this.menuFields}/> : ''
                }
            </div>
        );
    }
}

ReactDom.render(<App />,document.getElementById('element'));


