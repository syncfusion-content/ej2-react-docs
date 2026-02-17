import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Reorder, Group, Sort, Filter  } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import React,{useState} from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const[message, setMessage] = useState('');
  let gridVersion='v.0';
  let version = [1, 2, 3];
  const clickHandler = (version) => {
    grid.ej2StatePersistenceVersion = version;
        var persistedGridSettings = (window.localStorage.getItem(`gridOrderDetails` + grid.ej2StatePersistenceVersion));
        if (persistedGridSettings) {
          grid.setProperties(JSON.parse(persistedGridSettings));
            setMessage(`Grid state restored to ` + version);
        } else {
            var gridData = grid.getPersistData();
            window.localStorage.setItem((`gridOrderDetails` + grid.ej2StatePersistenceVersion), gridData);
        }

  }
    return( <div>
      <p id='message'>{message}</p>
      <div>
      {version.map((v) => (
        <ButtonComponent key={v} onClick={() => clickHandler(`v.${v}`)}>Version{v}</ButtonComponent>
      ))}
      </div>
      
    <GridComponent id="Grid" dataSource={data} allowPaging={true} allowFiltering={true} allowSorting={true} allowReordering={true}
    allowGrouping={true} enablePersistence={true} ej2StatePersistenceVersion={gridVersion}  height={180}
    ref={g => grid = g}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='100'/>
            <ColumnDirective field='ShipCity' headerText='Ship City' width='100'/>
            <ColumnDirective field='ShipName' headerText='Ship Name' width='100'/>
        </ColumnsDirective>
        <Inject services={[Page, Reorder, Group, Sort, Filter]} />
    </GridComponent></div>)
};
export default App;