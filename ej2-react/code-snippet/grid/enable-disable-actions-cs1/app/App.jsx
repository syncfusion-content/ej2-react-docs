import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
  const editOptions = { allowAdding: true, allowEditing: true, allowDeleting: true };
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  let grid;
  const btnClick = () => {
    if (grid && grid.element.classList.contains('disablegrid')) {
      grid.element.classList.remove('disablegrid');
      document.getElementById("GridParent").classList.remove('wrapper');
    }
    else if (grid) {
      grid.element.classList.add('disablegrid');
      document.getElementById("GridParent").classList.add('wrapper');
    }
  };
  return (
    <div>
      <ButtonComponent isPrimary={true} isToggle={true} onClick={btnClick}>Enable/Disable Grid</ButtonComponent>
      <div id="GridParent">
        <GridComponent dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} height={265} ref={(scope) => { grid = scope; }}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}/>
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'/>
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
          </ColumnsDirective>
          <Inject services={[Edit, Toolbar]}/>
        </GridComponent>
      </div>
    </div>
  );
};
export default App;
