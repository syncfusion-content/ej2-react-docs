import { ChangeEventArgs, DropDownList, MultiSelect, ComboBox } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, IFilterUI, parentsUntil } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject, Page, PageSettingsModel } from '@syncfusion/ej2-react-grids'
import { DataUtil, DataManager, Query, Predicate } from '@syncfusion/ej2-data';
import * as React from 'react';
import { data } from './datasource';
import { NumericTextBox } from '@syncfusion/ej2-react-inputs';
import { DatePicker} from '@syncfusion/ej2-react-calendars';

function App() {
  let grid: GridComponent | null;
  const pageSettings: PageSettingsModel = { pageCount: 5 };
  const orderidrules: object = { required: true };
  const shipCityDistinctData: Object[] = DataUtil.distinct(data, 'ShipCity', true);
  const shipCountryDistinctData: Object[] = DataUtil.distinct(data, 'ShipCountry', true);
  let dropdown: HTMLElement | null;
  let numElement: HTMLElement | null;
  let dateElement: HTMLElement | null;
  let comboElement: HTMLElement | null;
  let multiSelectElement: HTMLElement | null;
  const templateOptionsDropDown = {
    create: () => {
      dropdown = document.createElement('select');
      dropdown.id = 'CustomerID';
      const option: HTMLOptionElement = document.createElement('option');
      option.value = 'All';
      option.innerText = 'All';
      dropdown.appendChild(option);
      data.forEach((item: any) => {
        const option = document.createElement('option');
        option.value = item.CustomerID;
        option.innerText = item.CustomerID;
        (dropdown as HTMLElement).appendChild(option);
      });
      return dropdown;
    },
    write: () => {
      const dropdownlist = new DropDownList({
        change: (args: ChangeEventArgs) => {
          if (args.value !== 'All') {
            (grid as GridComponent).filterByColumn(args.item.parentElement.id.replace('_options', ''), 'equal', args.value);
          } else {
            (grid as GridComponent).removeFilteredColsByField(args.item.parentElement.id.replace('_options', ''));
          }
        }
      });
      dropdownlist.appendTo((dropdown as HTMLElement));
    },
  }
  const templateOptionsNumericTextBox: IFilterUI = {
    create: () => {
      numElement = document.createElement('input');
      return numElement;
    },
    write: () => {
      const numericTextBox = new NumericTextBox({
        format: '00.00',
        value: 10,
      });
      numericTextBox.appendTo(numElement as HTMLElement);
    },
  }
  const templateOptionsDatePicker: IFilterUI = {
    create: () => {
      dateElement = document.createElement('input');
      return dateElement;
    },
    write: (args: { column: { field: string | number | Date } }) => {
      const datePickerObj = new DatePicker({
        value: new Date(args.column.field),
        change: handleFilterChange,
      });
      datePickerObj.appendTo(dateElement as HTMLElement);
    },
  }

  const templateOptionsComboBox: IFilterUI = {
    create: () => {
      comboElement = document.createElement('input');
      comboElement.id = 'ShipCity';
      return comboElement;
    },
    write: (args: { value: number }) => {
      const comboBox = new ComboBox({
        value: args.value,
        placeholder: 'Select a city',
        change: handleFilterChange,
        dataSource: shipCityDistinctData.map(
          (item: any) => item.ShipCity
        ),
      });
      comboBox.appendTo(comboElement as HTMLElement);
    },
  }
  const templateOptionsMultiSelect: IFilterUI = {
    create: () => {
      multiSelectElement = document.createElement('input');
      multiSelectElement.id = 'ShipCountry';
      return multiSelectElement;
    },
    write: (args: { value: string }) => {
      const multiselect = new MultiSelect({
        value: args.value,
        placeholder: 'Select a country',
        change: multiselectFunction,
        dataSource: shipCountryDistinctData.map(
          (item: any) => item.ShipCountry
        ),
      });
      multiselect.appendTo(multiSelectElement as HTMLElement);
    },
  }
  const handleFilterChange = (args: { element: Element; value: string | Date }) => {
    let targetElement: HTMLElement = parentsUntil(args.element, 'e-filtertext');
    let columnName: string = targetElement.id.replace('_filterBarcell', '');
    if (args.value) {
      (grid as GridComponent).filterByColumn(columnName, 'equal', args.value);
    } else {
      (grid as GridComponent).removeFilteredColsByField(columnName);
    }
  }
  const multiselectFunction = (args: { value: string }) => {
    const selectedValues: string = args.value;
    if (selectedValues.length === 0) {
      var OrginalData = new DataManager(data).executeLocal(new Query());
      (grid as GridComponent).dataSource = OrginalData;
    } else {
      var predicate: string | Predicate = [];
      for (let x = 0; x < selectedValues.length; x++) {
        predicate = predicate.length === 0 ? new Predicate('ShipCountry', 'equal', selectedValues[x]) : predicate.or('ShipCountry', 'equal', selectedValues[x]);
      }
      var filteredData = new DataManager(data).executeLocal(new Query().where(predicate));
      (grid as GridComponent).dataSource = filteredData;
    }
  }

  return (<div>
    <GridComponent ref={g => grid = g} dataSource={data} allowFiltering={true} allowPaging={true} pageSettings={pageSettings} height={315} >
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} validationRules={orderidrules} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' filterBarTemplate={templateOptionsDropDown} />
        <ColumnDirective field='Freight' headerText='Freight' format='C' width='100' filterBarTemplate={templateOptionsNumericTextBox} />
        <ColumnDirective field='OrderDate' headerText='Order Date' width='100' format='yMd' textAlign="Right" filterBarTemplate={templateOptionsDatePicker} />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" filterBarTemplate={templateOptionsComboBox} />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' filterBarTemplate={templateOptionsMultiSelect} />
      </ColumnsDirective>
      <Inject services={[Filter, Page]} />
    </GridComponent></div>)
};

export default App;