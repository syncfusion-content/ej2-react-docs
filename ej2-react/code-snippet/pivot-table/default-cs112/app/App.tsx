import { FieldList, IDataSet, Inject, PivotViewComponent, GroupingBar, CalculatedField } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { L10n } from '@syncfusion/ej2-base';
import * as React from 'react';
import { pivotData } from './datasource';

L10n.load({
  'ar-AE': {
      'pivotview': {
          'grandTotal': 'المجموع الكلى',
          'total': 'المجموع',
          'value': 'القيمة',
          'noValue': 'لا قيمة لها',
          'row': 'صف',
          'column': 'العمود',
          'collapse': 'الانهيار',
          'expand': 'توسيع'
      },
      'pivotfieldlist': {
          'fieldList': 'قائمة الحقول',
          'dropRowPrompt': 'تراجع الخلاف هنا',
          'dropColPrompt': 'انخفاض العمود هنا',
          'dropValPrompt': 'انخفاض قيمة هنا',
          'dropFilterPrompt': 'انخفاض هنا عامل التصفية',
          'addPrompt': 'اضافة حقل هنا',
          'adaptiveFieldHeader': 'اختر الحقل',
          'centerHeader': 'اسحب المجالات بين المناطق الموضحة ادناه:',
          'add': 'اضافة',
          'drag': 'اسحب',
          'filters': 'عوامل التصفية',
          'rows': 'الصفوف',
          'columns': 'الاعمدة',
          'values': 'قيم',
          'search': 'البحث',
          'close': 'قريب',
          'cancel': 'الغاء',
          'delete': 'احذف',
          'alert': 'حالة تاهب قصوى',
          'warning': 'تحذير',
          'ok': 'موافق',
          'allFields': 'جميع الحقول',
          'noMatches': 'لا مباريات'
      }
  }
});
function App() {
  let dataSourceSettings: DataSourceSettingsModel = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    expandAll: false,
    filters: [],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  }
  let pivotObj: PivotViewComponent;
  
  return (<PivotViewComponent  ref={ (d: PivotViewComponent) => pivotObj = d } id='PivotView' height={350} enableRtl={true} locale='ar-AE' dataSourceSettings={dataSourceSettings} showFieldList={true} showGroupingBar={true} allowCalculatedField={true}><Inject services={[FieldList, GroupingBar, CalculatedField]} /></PivotViewComponent>);
};

export default App;
