import { FieldList, Inject, PivotViewComponent, GroupingBar, CalculatedField } from '@syncfusion/ej2-react-pivotview';
import { L10n, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import * as React from 'react';
import { pivotData } from './datasource';
setCulture('de');
setCurrencyCode('EUR');
L10n.load({
    'de-DE': {
        'pivotview': {
            'grandTotal': 'Gesamtsumme',
            'total': 'Insgesamt',
            'value': 'Wert',
            'noValue': 'Kein Wert',
            'row': 'Zeile',
            'column': 'Spalte',
            'collapse': 'Zusammenbruch',
            'expand': 'Erweitern'
        },
        "pivotfieldlist": {
            'fieldList': 'Feld Liste',
            'dropRowPrompt': 'Drop Reihe hier',
            'dropColPrompt': 'Drop column Hier',
            'dropValPrompt': 'Drop wert hier',
            'dropFilterPrompt': 'Drop Filter Hier',
            'addPrompt': 'Feld hinzufügen',
            'centerHeader': 'Ziehen Sie die Felder zwischen den Bereichen unten:',
            'add': 'Hinzufügen',
            'drag': 'Ziehen',
            'filters': 'Filter',
            'rows': 'Zeilen',
            'columns': 'Spalten',
            'values': 'Werte',
            'error': 'Fehler',
            'dropAction': 'Berechnetes Feld nicht in jeder anderen Region außer Wert Achse sein.',
            'search': 'Suche',
            'close': 'Schließen',
            'cancel': 'Abbrechen',
            'delete': 'Löschen',
            'alert': 'Warnung',
            'warning': 'Warnung',
            'ok': 'OK',
            'allFields': 'Alle Felder',
            'noMatches': 'Keine Treffer'
        }
    }
});
function App() {
    let dataSourceSettings = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData,
        expandAll: false,
        filters: [],
        formatSettings: [{ name: 'Amount', format: 'C2', useGrouping: false,
                minimumSignificantDigits: 1, maximumSignificantDigits: 3, currency: 'EUR' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    };
    let pivotObj;
    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} locale='de-DE' dataSourceSettings={dataSourceSettings} showFieldList={true} showGroupingBar={true} allowCalculatedField={true}><Inject services={[FieldList, GroupingBar, CalculatedField]}/></PivotViewComponent>);
};
export default App;

