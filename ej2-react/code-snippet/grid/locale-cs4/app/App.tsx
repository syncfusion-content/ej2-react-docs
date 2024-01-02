import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import { L10n, loadCldr, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import * as React from 'react';
import frFRLocalization from './locale.json';
import cagregorian from './ca-gregorian.json';
import currencies from './currencies.json';
import numbers from './numbers.json';
import timeZoneNames from './timeZoneNames.json';
import numberingSystems from './numberingSystems.json'
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

L10n.load(frFRLocalization);

function App() {
  setCulture('fr-FR'); // Change the Grid culture
  setCurrencyCode('EUR');
  loadCldr(
    cagregorian,
    currencies,
    numbers,
    timeZoneNames,
    numberingSystems
  );
  const pageOptions: PageSettingsModel = { pageSize: 6 };
  const changeFrLocale = () => {
    setCulture('fr-FR'); // Change the Grid culture to French locale
    setCurrencyCode('EUR'); // Change the currency code based on French culture
  }
  const changeEnLocale = () => {
    setCulture('en-US'); // Change the Grid culture to English locale
    setCurrencyCode('USD'); // Change the currency code based on Americal English culture
  }
  return (<div>
    <ButtonComponent cssClass='e-outline' id='frButton' onClick={changeFrLocale}>Change FR Locale</ButtonComponent>
    <ButtonComponent cssClass='e-outline' id='enButton' style={{ marginLeft: "10px" }} onClick={changeEnLocale}>Change EN Locale</ButtonComponent>
    <GridComponent dataSource={data} allowPaging={true} pageSettings={pageOptions} >
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>)
};
export default App;