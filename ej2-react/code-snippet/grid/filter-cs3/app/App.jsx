import { DropDownList, MultiSelect, ComboBox } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, parentsUntil } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids'
import { DataUtil, DataManager, Query, Predicate } from '@syncfusion/ej2-data';
import * as React from 'react';
import { data } from './datasource';
import { NumericTextBox } from '@syncfusion/ej2-react-inputs';
import { DatePicker} from '@syncfusion/ej2-react-calendars';

function App() {
  let grid;
  const pageSettings = { pageCount: 5 };
  const orderidrules = { required: true };
  const shipCityDistinctData = DataUtil.distinct(data, 'ShipCity', true);
  const shipCountryDistinctData = DataUtil.distinct(data, 'ShipCountry', true);
  let dropdown;
  let numElement;
  let dateElement;
  let comboElement;
  let multiSelectElement;
  const templateOptionsDropDown = {
    create: () => {
      dropdown = document.createElement('select');
      dropdown.id = 'CustomerID';
      const option = document.createElement('option');
      option.value = 'All';
      option.innerText = 'All';
      dropdown.appendChild(option);
      data.forEach((item) => {
        const option = document.createElement('option');
        option.value = item.CustomerID;
        option.innerText = item.CustomerID;
        dropdown.appendChild(option);
      });
      return dropdown;
    },
    write: () => {
      const dropdownlist = new DropDownList({
        change: (args) => {
          if (args.value !== 'All') {
            grid.filterByColumn(args.item.parentElement.id.replace('_options', ''), 'equal', args.value);
          } else {
            grid.removeFilteredColsByField(args.item.parentElement.id.replace('_options', ''));
          }
        }
      });
      dropdownlist.appendTo(dropdown);
    },
  }
  const templateOptionsNumericTextBox = {
    create: () => {
      numElement = document.createElement('input');
      return numElement;
    },
    write: () => {
      const numericTextBox = new NumericTextBox({
        format: '00.00',
        value: 10,
      });
      numericTextBox.appendTo(numElement);
    },
  }
  const templateOptionsDatePicker = {
    create: () => {
      dateElement = document.createElement('input');
      return dateElement;
    },
    write: (args) => {
      const datePickerObj = new DatePicker({
        value: new Date(args.column.field),
        change: handleFilterChange,
      });
      datePickerObj.appendTo(dateElement);
    },
  }

  const templateOptionsComboBox = {
    create: () => {
      comboElement = document.createElement('input');
      comboElement.id = 'ShipCity';
      return comboElement;
    },
    write: (args) => {
      const comboBox = new ComboBox({
        value: args.value,
        placeholder: 'Select a city',
        change: handleFilterChange,
        dataSource: shipCityDistinctData.map(
          (item) => item.ShipCity
        ),
      });
      comboBox.appendTo(comboElement);
    },
  }
  const templateOptionsMultiSelect = {
    create: () => {
      multiSelectElement = document.createElement('input');
      multiSelectElement.id = 'ShipCountry';
      return multiSelectElement;
    },
    write: (args) => {
      const multiselect = new MultiSelect({
        value: args.value,
        placeholder: 'Select a country',
        change: multiselectFunction,
        dataSource: shipCountryDistinctData.map(
          (item) => item.ShipCountry
        ),
      });
      multiselect.appendTo(multiSelectElement);
    },
  }
  const handleFilterChange = (args) => {
    let targetElement = parentsUntil(args.element, 'e-filtertext');
    let columnName = targetElement.id.replace('_filterBarcell', '');
    if (args.value) {
      grid.filterByColumn(columnName, 'equal', args.value);
    } else {
      grid.removeFilteredColsByField(columnName);
    }
  }
  const multiselectFunction = (args) => {
    const selectedValues = args.value;
    if (selectedValues.length === 0) {
      var OrginalData = new DataManager(data).executeLocal(new Query());
      grid.dataSource = OrginalData;
    } else {
      var predicate = [];
      for (let x = 0; x < selectedValues.length; x++) {
        predicate = predicate.length === 0 ? new Predicate('ShipCountry', 'equal', selectedValues[x]) : predicate.or('ShipCountry', 'equal', selectedValues[x]);
      }
      var filteredData = new DataManager(data).executeLocal(new Query().where(predicate));
      grid.dataSource = filteredData;
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