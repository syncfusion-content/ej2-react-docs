import { L10n } from '@syncfusion/ej2-base';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";
L10n.load({
    'de': {
        'numerictextbox': { incrementTitle: 'Wert erhöhen', decrementTitle: 'Dekrementwert' }
    }
});
// initializes NumericTextBox component
// sets `German` culture using the culture value 'de'
ReactDOM.render(<NumericTextBoxComponent locale='de' value={10}/>, document.getElementById('numericContainer'));
