


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { L10n } from '@syncfusion/ej2-base';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Page, Group } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';

L10n.load({
    'de-DE': {
        'grid': {
            'EmptyRecord': 'Keine Aufzeichnungen angezeigt',
            'GroupDropArea': 'Ziehen Sie einen Spaltenkopf hier, um die Gruppe ihre Spalte',
            'UnGroup': 'Klicken Sie hier, um die Gruppierung aufheben',
            'EmptyDataSourceError': 'DataSource darf bei der Erstauslastung nicht leer sein, da Spalten aus der dataSource im AutoGenerate Spaltenraster',
            'Item': 'Artikel',
            'Items': 'Artikel'
        },
        'pager':{
            'currentPageInfo': '{0} von {1} Seiten',
            'totalItemsInfo': '({0} Beiträge)',
            'firstPageTooltip': 'Zur ersten Seite',
            'lastPageTooltip': 'Zur letzten Seite',
            'nextPageTooltip': 'Zur nächsten Seite',
            'previousPageTooltip': 'Zurück zur letzten Seit',
            'nextPagerTooltip': 'Zum nächsten Pager',
            'previousPagerTooltip': 'Zum vorherigen Pager'
        }
    }
});

function App() {

const pageOptions : Object = { pageSize: 6 };
    return (<GridComponent  dataSource={data} locale='de-DE' allowPaging={true} pageSettings={pageOptions} allowGrouping={true}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"></ColumnDirective>
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'></ColumnDirective>
            <ColumnDirective field='ShipCity' headerText='Ship City' width='150'></ColumnDirective>
            <ColumnDirective field='ShipName' headerText='Ship Name' width='150'></ColumnDirective>
        </ColumnsDirective>
        <Inject services={[Page, Group]}/>
    </GridComponent>)
};
export default App;
ReactDOM.render(<App />, document.getElementById('grid'));



