import { L10n } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
L10n.load({
    'ar-AE': {
        'grid': {
            'EmptyDataSourceError': 'يجب أن يكون مصدر البيانات فارغة في التحميل الأولي منذ يتم إنشاء الأعمدة من مصدر البيانات في أوتوجينيراتد عمود الشبكة',
            'EmptyRecord': 'لا سجلات لعرضها'
        },
        'pager': {
            'currentPageInfo': '{0} من {1} صفحة',
            'firstPageTooltip': 'انتقل إلى الصفحة الأولى',
            'lastPageTooltip': 'انتقل إلى الصفحة الأخيرة',
            'nextPageTooltip': 'انتقل إلى الصفحة التالية',
            'nextPagerTooltip': 'انتقل إلى عناصر بيجر التالية',
            'previousPageTooltip': 'انتقل إلى الصفحة السابقة',
            'previousPagerTooltip': 'للذهاب إلى عناصر بيجر السابقة',
            'totalItemsInfo': '({0} العناصر)'
        }
    }
});
function App() {
    const pageOptions = { pageSize: 7 };
    return <GridComponent dataSource={data} enableRtl={true} locale='ar-AE' allowPaging={true} pageSettings={pageOptions}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"/>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
      <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
      <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
    </ColumnsDirective>
    <Inject services={[Page]}/>
  </GridComponent>;
}
;
export default App;
