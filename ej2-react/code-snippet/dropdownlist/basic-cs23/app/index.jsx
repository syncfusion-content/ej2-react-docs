import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    diacriticsData = [
        'Aeróbics',
        'Aeróbics en Agua',
        'Aerografía',
        'Aeromodelaje',
        'Águilas',
        'Ajedrez',
        'Ala Delta',
        'Álbumes de Música',
        'Alusivos',
        'Análisis de Escritura a Mano'
    ];
    render() {
        return (<DropDownListComponent id="diacritics" ignoreAccent={true} dataSource={this.diacriticsData} allowFiltering={true} placeholder="Select a value" filterBarPlaceholder="e.g: aero"/>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
