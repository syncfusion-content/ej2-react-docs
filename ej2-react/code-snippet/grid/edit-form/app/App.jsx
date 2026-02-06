import { NumericTextBoxComponent, TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, ForeignKey, GridComponent, RowSelectEventArgs } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const editOptions = { allowEditing: true };
  const [selectedProduct, setSelectedProduct] = useState(new Order());

  const dropdown= [
    { shipCountry: 'Germany' },
    { shipCountry: 'Brazil' },
    { shipCountry: 'France' },
    { shipCountry: 'Belgium' },
    { shipCountry: 'Switzerland' },
    { shipCountry: 'Venezuela' },
    { shipCountry: 'USA' },
    { shipCountry: 'Mexico' },
    { shipCountry: 'Italy' },
    { shipCountry: 'Sweden' },
    { shipCountry: 'Finland' },
    { shipCountry: 'Spain' },
    { shipCountry: 'Canada' },
    { shipCountry: 'Portugal' },
    { shipCountry: 'Denmark' },
    { shipCountry: 'Austria' },
    { shipCountry: 'UK' },
    { shipCountry: 'Ireland' },
    { shipCountry: 'Norway' },
    { shipCountry: 'Argentina' },
  ];
  const dropdownFields = { text: 'shipCountry', value: 'shipCountry' };
  const handleInputChange = (field, value) => {
    setSelectedProduct((prevProduct) => ({ ...prevProduct, [field]: value }));
  };
  const save = () => {
    const index = grid.getSelectedRowIndexes()[0];
    grid.updateRow(index, selectedProduct);
  }

  const rowSelected = (args) => {
    setSelectedProduct(args.data);
  }

  return (<div className='row'>
    <div className="col-xs-6 col-md-3">
      <div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label >OrderID</label>
            <input disabled className="form-control" defaultValue={selectedProduct.OrderID || '' } type="number" onChange={(e) => handleInputChange('OrderID', e.target.value)}/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label >CustomerID</label>
            <TextBoxComponent value={selectedProduct.CustomerID || ''} change={(e) => handleInputChange('CustomerID', e.value)}></TextBoxComponent>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label >Frieght</label>
            <NumericTextBoxComponent value={selectedProduct.Freight || '' } change={(e) => handleInputChange('Freight', e.value)}></NumericTextBoxComponent>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label >ShipCountry</label>
            <DropDownListComponent value={selectedProduct.ShipCountry || '' } dataSource={dropdown} fields={dropdownFields} change={(e) => handleInputChange('ShipCountry', e.value)}></DropDownListComponent>
          </div>
        </div>
      </div>
      <ButtonComponent id='btn' onClick={save}>Save</ButtonComponent>
    </div>
    <div className="col-xs-6 col-md-9">
      <GridComponent id='Grid' ref={g => grid = g} dataSource={data} editSettings={editOptions}
        height={315} rowSelected={rowSelected}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
          <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' />
          <ColumnDirective field='ShipCountry' headerText='Order Date' width='150' />
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar, ForeignKey]} />
      </GridComponent></div ></div>)
};
export default App;