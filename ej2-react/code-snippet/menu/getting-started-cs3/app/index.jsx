import { enableRipple } from '@syncfusion/ej2-base';
import { DataManager, ODataAdaptor, Query } from '@syncfusion/ej2-data';
import { MenuComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';
const SERVICE_URI = 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/';
enableRipple(true);
class App extends React.Component {
    // Menu fields definition.
    menuFields = {
        children: ['Orders'],
        text: ['FirstName', 'ShipName']
    };
    constructor(props) {
        super(props);
        this.state = { menuItems: [] };
    }
    componentDidMount() {
        // Getting remote data using DataManager.
        const proxy = this;
        new DataManager({ url: SERVICE_URI, adaptor: new ODataAdaptor, crossDomain: true })
            .executeQuery(new Query().from('Employees').take(5).hierarchy(new Query()
            .foreignKey('EmployeeID')
            .from('Orders').take(13), this.select))
            .then((e) => {
            proxy.setState({ menuItems: e.result });
        });
    }
    select() {
        return [1, 2, 3, 4, 5];
    }
    render() {
        return (<div>
                {this.state.menuItems.length ?
                <MenuComponent items={this.state.menuItems} fields={this.menuFields}/> : ''}
            </div>);
    }
}
ReactDom.render(<App />, document.getElementById('element'));
