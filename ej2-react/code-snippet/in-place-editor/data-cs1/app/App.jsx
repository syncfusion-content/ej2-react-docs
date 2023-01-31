{% raw %}
import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
class App extends React.Component {
    inplaceEditorObj;
    // define the JSON of data
    gameList = [
        { Id: '1', Name: 'Maria Anders' },
        { Id: '2', Name: 'Ana Trujillo' },
        { Id: '3', Name: 'Antonio Moreno' },
        { Id: '4', Name: 'Thomas Hardy' },
        { Id: '5', Name: 'Chiristina Berglund' },
        { Id: '6', Name: 'Hanna Moos' }
    ];
    model = { dataSource: this.gameList, fields: { text: 'Name' }, placeholder: 'Select a customer' };
    render() {
        return (<div id='container'>
        <span className="content-title"> Select customer name: </span>
        <InPlaceEditorComponent ref={(text) => { this.inplaceEditorObj = text; }} id='dropdownelement' mode='Inline' type='DropDownList' value='Maria Anders' model={this.model}/>
     </div>);
    }
}
export default App;
{% endraw %}