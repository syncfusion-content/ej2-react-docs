import * as React from "react";
import * as ReactDOM from "react-dom";
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { loadCldr, L10n } from '@syncfusion/ej2-base';
// Here we have referred local json files for preview purpose
import * as numberingSystems from './numberingSystems.json';
import * as currencyData from './currencyData.json';
import * as numbers from './numbers.json';
import * as currencies from './currencies.json';
loadCldr(numberingSystems, currencyData, numbers, currencies);
L10n.load({
    'de': {
        'numerictextbox': { incrementTitle: 'Wert erhöhen', decrementTitle: 'Dekrementwert' }
    }
});
// initializes NumericTextBox component
// sets `German` culture using the culture value 'de'
// sets the 'EUR' currency format
ReactDOM.render(<NumericTextBoxComponent locale='de' currency='EUR' format='c2' value={100}>
</NumericTextBoxComponent>, document.getElementById('numericContainer'));
