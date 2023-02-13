

import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    const diacriticsData: string[] = [
    'Aeróbics',
    'Aeróbics en Agua',
    'Aerografía',
    'Aeromodelaje',
    'Águilas',
    'Ajedrez',
    'Ala Delta',
    'Álbumes de Música',
    'Alusivos',
    'Análisis de Escritura a Mano'];

    return (
            <AutoCompleteComponent id="diacritics" ignoreAccent={true} dataSource={diacriticsData} placeholder="e.g: aero" />
    );
}
ReactDOM.render(<App />, document.getElementById('sample'));


