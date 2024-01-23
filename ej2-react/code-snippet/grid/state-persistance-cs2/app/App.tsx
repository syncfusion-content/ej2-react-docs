import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Reorder, Group, Sort, Filter  } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import React,{useState} from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const[message, setMessage] = useState('');
  let gridVersion:string='v.0';
  let version: number[] = [1, 2, 3];
  const clickHandler = (version: string) => {
    (grid as GridComponent).ej2StatePersistenceVersion = version;
        var persistedGridSettings: string = (window.localStorage.getItem(`gridOrderDetails` + (grid as GridComponent).ej2StatePersistenceVersion)) as string;
        if (persistedGridSettings) {
          (grid as GridComponent).setProperties(JSON.parse(persistedGridSettings));
            setMessage(`Grid state restored to ` + version);
        } else {
            var gridData = (grid as GridComponent).getPersistData();
            window.localStorage.setItem((`gridOrderDetails` + (grid as GridComponent).ej2StatePersistenceVersion), gridData);
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
    allowGrouping={true} enablePersistence={true} ej2StatePersistenceVersion={gridVersion}  height={315}
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