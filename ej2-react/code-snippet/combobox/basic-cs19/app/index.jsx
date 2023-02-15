import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
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
        return (<ComboBoxComponent id="diacritics" ignoreAccent={true} allowFiltering={true} dataSource={this.diacriticsData} placeholder="e.g: aero"/>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
