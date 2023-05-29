import { L10n } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, GridComponent, Group, Inject, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
L10n.load({
    'de-DE': {
        'grid': {
            'EmptyDataSourceError': 'DataSource darf bei der Erstauslastung nicht leer sein, da Spalten aus der dataSource im AutoGenerate Spaltenraster',
            'EmptyRecord': 'Keine Aufzeichnungen angezeigt',
            'GroupDropArea': 'Ziehen Sie einen Spaltenkopf hier, um die Gruppe ihre Spalte',
            'Item': 'Artikel',
            'Items': 'Artikel',
            'UnGroup': 'Klicken Sie hier, um die Gruppierung aufheben'
        },
        'pager': {
            'currentPageInfo': '{0} von {1} Seiten',
            'firstPageTooltip': 'Zur ersten Seite',
            'lastPageTooltip': 'Zur letzten Seite',
            'nextPageTooltip': 'Zur nächsten Seite',
            'nextPagerTooltip': 'Gehen Sie zu den nächsten Pager-Elementen',
            'previousPageTooltip': 'Zurück zur letzten Seit',
            'previousPagerTooltip': 'Gehen Sie zu vorherigen Pager-Elementen',
            'totalItemsInfo': '({0} Beiträge)'
        }
    }
});
function App() {
    const pageOptions = { pageSize: 6 };
    return <GridComponent dataSource={data} locale='de-DE' allowPaging={true} pageSettings={pageOptions} allowGrouping={true}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"/>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
      <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
      <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
    </ColumnsDirective>
    <Inject services={[Page, Group]}/>
  </GridComponent>;
}
;
export default App;
