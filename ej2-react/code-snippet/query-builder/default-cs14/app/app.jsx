import { L10n } from '@syncfusion/ej2-base';
import { QueryBuilderComponent } from '@syncfusion/ej2-react-querybuilder';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// @ts-ignore
import { hardwareData } from '../datasource.ts';
L10n.load({
    'ar-AE': {
        'querybuilder': {
            'AddCondition': 'اضافة الشرط',
            'AddGroup': 'إضافة مجموعة',
            'Between': 'ما بين',
            'Contains': 'يحتوي على',
            'DeleteGroup': 'حذف المجموعة',
            'DeleteRule': 'أزل هذا الشرط',
            'Edit': 'تصحيح',
            'EndsWith': 'ينتهي مع',
            'Equal': 'مساو',
            'GreaterThan': 'أكثر من',
            'GreaterThanOrEqual': 'أكبر من أو يساوي',
            'In': 'في',
            'LessThan': 'أقل من',
            'LessThanOrEqual': 'اصغر من او يساوي',
            'NotBetween': 'ليس بينهما',
            'NotEqual': 'ليس متساوي',
            'NotIn': 'ليس في',
            'Remove': 'إزالة',
            'SelectField': 'اختر مجال',
            'SelectOperator': 'حدد المشغل',
            'StartsWith': 'ابدا ب',
            'ValidationMessage': 'هذه الخانة مطلوبه'
        }
    }
});
function App() {
    let columnData = [
        { field: 'TaskID', label: 'Task ID', type: 'number' },
        { field: 'Name', label: 'Name', type: 'string' },
        { field: 'Category', label: 'Category', type: 'string' },
        { field: 'SerialNo', label: 'Serial No', type: 'string' },
        { field: 'InvoiceNo', label: 'Invoice No', type: 'string' },
        { field: 'Status', label: 'Status', type: 'string' }
    ];
    let importRules = {
        'condition': 'or',
        'rules': [{
                'field': 'Category',
                'label': 'Category',
                'operator': 'equal',
                'type': 'string',
                'value': 'Laptop'
            }]
    };
    return (<QueryBuilderComponent width='100%' locale='ar-AE' enableRtl={true} dataSource={hardwareData} columns={columnData} rule={importRules}/>);
}
export default App;
ReactDom.render(<App />, document.getElementById('querybuilder'));
