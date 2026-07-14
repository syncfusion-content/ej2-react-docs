import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { DomVirtualization, Sort, Filter, Toolbar } from '@syncfusion/ej2-react-grids';
import { SliderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import { useRef, useState } from 'react';
import { largeProductData } from './datasource';
import './styles.css';

function App() {
  const gridRef = useRef(null);
  const [bufferValue, setBufferValue] = useState(5);
  const toolbarOptions = ['Search'];
  
  const handleBufferChange = (e) => {
    setBufferValue(e.value);
    if (gridRef.current) {
      gridRef.current.domVirtualizationSettings.rowBuffer = e.value;
    }
  };
  
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Row Buffer Size: {bufferValue}</label>
        <SliderComponent
          id='rowBuffer'
          min={1}
          max={20}
          value={bufferValue}
          type='MinRange'
          change={handleBufferChange}
          style={{ width: '300px' }}
        />
      </div>
      
      <GridComponent 
        ref={gridRef}
        dataSource={largeProductData}
        enableDomVirtualization={true}
        height={500}
        allowFiltering={true}
        allowSorting={true}
        toolbar={toolbarOptions}
        domVirtualizationSettings={{
          rowBuffer: bufferValue
        }}
      >
        <Inject services={[DomVirtualization, Sort, Filter, Toolbar]} />
        <ColumnsDirective>
          <ColumnDirective field='SKUID' headerText='SKU ID' width='130' isPrimaryKey={true} />
          <ColumnDirective field='ProductName' headerText='Product Name' width='200' />
          <ColumnDirective field='Category' headerText='Category' width='130' />
          <ColumnDirective field='AvailableStock' headerText='Available Stock' width='150' textAlign='Right' />
          <ColumnDirective field='UnitPrice' headerText='Unit Price' width='130' format='C2' textAlign='Right' />
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
}

export default App;
