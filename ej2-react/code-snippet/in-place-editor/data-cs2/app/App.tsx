import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';

function App(){
  let inplaceEditorObj: InPlaceEditorComponent;

 // define the JSON of data
 let gameList: object[] = [
    { Id: '1', Name: 'Maria Anders' },
    { Id: '2', Name: 'Ana Trujillo' },
    { Id: '3', Name: 'Antonio Moreno' },
    { Id: '4', Name: 'Thomas Hardy' },
    { Id: '5', Name: 'Chiristina Berglund' },
    { Id: '6', Name: 'Hanna Moos' }
 ];

  let model = { dataSource: gameList, fields: { text: 'Name' }, placeholder: 'Select a customer' };

    return (
    <div id='container'>
        <span className="content-title"> Select customer name: </span>
        <InPlaceEditorComponent ref={(text) => { inplaceEditorObj = text! }} id='dropdownelement' mode='Inline' type='DropDownList' value='Maria Anders' model={model} />
     </div>
    );
}
export default App;