

import { L10n } from '@syncfusion/ej2-base';
import { ColumnsModel, QueryBuilderComponent, RuleModel } from '@syncfusion/ej2-react-querybuilder';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// @ts-ignore
import { hardwareData } from '../datasource.ts';

L10n.load({
    'de-DE': {
        'querybuilder': {
            "AddCondition": "Bedingung hinzufügen",
            "AddGroup": "Gruppe hinzufügen",
            "Between": "Zwischen",
            "Contains": "Enthält",
            "DeleteGroup": "Gruppe löschen",
            "DeleteRule": "Entfernen Sie diesen Zustand",
            "Edit": "BEARBEITEN",
            "EndsWith": "Endet mit",
            "DoesNotStartWith": "Beginnt nicht mit",
            "DoesNotEndWith": "Endet nicht mit",
            "DoesNotContain": "Beinhaltet nicht",
            "Equal": "Gleich",
            "GreaterThan": "Größer als",
            "GreaterThanOrEqual": "Größer als oder gleich",
            "In": "Im",
            "LessThan": "Weniger als",
            "LessThanOrEqual": "Weniger als oder gleich",
            "NotBetween": "Nicht zwischen",
            "NotEqual": "Nicht gleich",
            "NotIn": "Nicht in",
            "Remove": "LÖSCHEN",
            "SelectField": "Wählen Sie ein Feld aus",
            "SelectOperator": "Operator auswählen",
            "StartsWith": "Beginnt mit",
            "ValidationMessage": "Dieses Feld wird benötigt",
            "True": "Wahr",
            "False": "Falsch",
        }
    }
});

function App() {
    let columnData: ColumnsModel[] = [
        { field: 'TaskID', label: 'Task ID', type: 'number' },
        { field: 'Name', label: 'Name', type: 'string' },
        { field: 'Category', label: 'Category', type: 'string' },
        { field: 'SerialNo', label: 'Serial No', type: 'string' },
        { field: 'InvoiceNo', label: 'Invoice No', type: 'string' },
        { field: 'Status', label: 'Status', type: 'string' }
    ];
    let importRules: RuleModel = {
        'condition': 'or',
        'rules': [{
            'field': 'Category',
            'label': 'Category',
            'operator': 'equal',
            'type': 'string',
            'value': 'Laptop'
        }]
    };

    return (
        <QueryBuilderComponent width='100%' locale='de-DE' dataSource={hardwareData} columns={columnData} rule={importRules} />
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('querybuilder'));


