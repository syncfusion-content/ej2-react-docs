import { ColumnDirective, ColumnsDirective, GridComponent} from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import React, {useState} from 'react';
import { data } from './datasource';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';

function App() {
    const dropDownData = ['Freight', 'Shipment', 'Cargo'];
    const [headerText, setHeaderText] = useState('Order Date');
    const customerIDTemplate = () => {
      return (<div>
        <span className="e-icon-userlogin e-icons employee"></span> Customer ID
      </div>);
    }
    const freightTemplate = () => {
      return (<div>
        <DropDownListComponent dataSource={dropDownData} index={0} width="140" />
      </div>);
    }
    const orderDateTemplate = () => {
        return (<div>
          <SwitchComponent change={onSwitchToggle} />
          <label style={{padding: "0px 0px 0px 20px"}}>{headerText}</label>
        </div>);
    }
    const onSwitchToggle = (args) =>{
        setHeaderText(args.checked ? 'Purchase Date' : 'Order Date');
    }
    return <GridComponent dataSource={data} height={315}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' headerTemplate={customerIDTemplate} width='150' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' headerTemplate={freightTemplate} />
        <ColumnDirective field='OrderDate' headerText='Order Date' width='135' headerTemplate={orderDateTemplate} format='yMd' textAlign='Right' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
      </ColumnsDirective>
    </GridComponent>
  
  };
  export default App;