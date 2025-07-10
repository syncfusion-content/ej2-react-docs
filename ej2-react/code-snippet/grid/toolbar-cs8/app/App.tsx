import React, { useRef } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, Edit, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { AutoCompleteComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import { data } from './datasource';

function App() {
  const gridRef = useRef<GridComponent | null>(null);
  const autoCompleteRef = useRef<AutoCompleteComponent | null>(null);
  const dropDownData: string[] = [
    'Reims',
    'Münster',
    'Rio de Janeiro',
    'Lyon',
    'Charleroi',
    'Bern',
    'Genève',
    'San Cristóbal',
    'Graz',
    'México D.F.',
    'Albuquerque',
    'Köln'
  ];
  const editOptions: EditSettingsModel = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: 'Normal'
  };
  
  const onChange = (event: ChangeEventArgs): void => {
    const selectedCity = event.value as string;
    if (gridRef.current) {
      // perform search action for ShipCity column.
      gridRef.current.search(selectedCity);
    }
  };
  const toolbarOptions: (ToolbarItems | object)[] = [
    'Add',
    'Edit',
    'Delete',
    {
      template: () => (
        <AutoCompleteComponent id="shipCityValue" ref={autoCompleteRef} dataSource={dropDownData} placeholder="Search ShipCity" change={onChange}/>
      ),
      tooltipText: 'Custom component autocomplete',
      align: 'Left'
    }
  ];

  return (
    <div>
      <GridComponent ref={gridRef} dataSource={data} height={270} toolbar={toolbarOptions} editSettings={editOptions}>
        <ColumnsDirective>
          <ColumnDirective field="OrderID" headerText="Order ID" textAlign="Right" width="90" isPrimaryKey={true}/>
          <ColumnDirective field="CustomerID" headerText="Customer ID" width="100" />
          <ColumnDirective field="ShipCity" headerText="Ship City" width="100" />
          <ColumnDirective field="ShipName" headerText="Ship Name" width="120" />
        </ColumnsDirective>
        <Inject services={[Toolbar, Edit]} />
      </GridComponent>
    </div>
  );
}

export default App;
