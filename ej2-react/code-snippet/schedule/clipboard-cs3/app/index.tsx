import { useRef } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, ViewsDirective, ViewDirective, CellClickEventArgs,
  Day, Week, WorkWeek, Month, Agenda, Inject, BeforePasteEventArgs
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { GridComponent, ColumnsDirective, ColumnDirective, RowDD, Edit } from "@syncfusion/ej2-react-grids";

const App = () => {
  interface ScheduleData {
    Id: string;
    Subject: string;
    StartTime: string;
    EndTime: string;
    Location: string;
    Description: string
}
  const scheduleObj = useRef<ScheduleComponent>(null);
  let gridObj = useRef<GridComponent>(null);
  const eventSettings = { dataSource: scheduleData };
  const gridData: Object[] = [
    {
        OrderID: 10248, CustomerID: 'VINET', Role: 'Admin', EmployeeID: 5,
        ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
        ShipRegion: 'CJ', Mask: '1111', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0,
        OrderDate: new Date('2024-01-01')
    },
    {
        OrderID: 10249, CustomerID: 'TOMSP', Role: 'Employee', EmployeeID: 6,
        ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
        ShipRegion: 'CJ', Mask: '2222', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1,
        OrderDate: new Date('2024-01-02')
    },
    {
        OrderID: 10250, CustomerID: 'HANAR', Role: 'Admin', EmployeeID: 4,
        ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
        ShipRegion: 'RJ', Mask: '3333', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 65.83, Verified: !0,
        OrderDate: new Date('2024-01-03')
    },
    {
        OrderID: 10251, CustomerID: 'VICTE', Role: 'Manager', EmployeeID: 3,
        ShipName: 'Victuailles en stock', ShipCity: 'Lyon', ShipAddress: '2, rue du Commerce',
        ShipRegion: 'CJ', Mask: '4444', ShipPostalCode: '69004', ShipCountry: 'France', Freight: 41.34, Verified: !0,
        OrderDate: new Date('2024-01-04')
    },
    {
        OrderID: 10252, CustomerID: 'SUPRD', Role: 'Manager', EmployeeID: 2,
        ShipName: 'Suprêmes délices', ShipCity: 'Charleroi', ShipAddress: 'Boulevard Tirou, 255',
        ShipRegion: 'CJ', Mask: '5555', ShipPostalCode: 'B-6000', ShipCountry: 'Belgium', Freight: 51.3, Verified: !0,
        OrderDate: new Date('2024-01-05')
    },
    {
        OrderID: 10253, CustomerID: 'HANAR', Role: 'Admin', EmployeeID: 7,
        ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
        ShipRegion: 'RJ', Mask: '6666', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 58.17, Verified: !0,
        OrderDate: new Date('2024-01-06')
    },
    {
        OrderID: 10254, CustomerID: 'CHOPS', Role: 'Employee', EmployeeID: 5,
        ShipName: 'Chop-suey Chinese', ShipCity: 'Bern', ShipAddress: 'Hauptstr. 31',
        ShipRegion: 'CJ', Mask: '7777', ShipPostalCode: '3012', ShipCountry: 'Switzerland', Freight: 22.98, Verified: !1,
        OrderDate: new Date('2024-01-07')
    }
  ];
  const onBeforePasting = (args: BeforePasteEventArgs) => {
    const dataArray: string[] = (args.data as string).split('\t');
    const result: ScheduleData = {
        Id: dataArray[0],
        Subject: dataArray[1],
        StartTime: new Date(dataArray[4]).toISOString(),
        EndTime: new Date(new Date(dataArray[4]).getTime() + 60 * 60 * 1000).toISOString(),
        Location: dataArray[2],
        Description: dataArray[3]
    };
    args.data = [result];
  }
  return (
    <div className='schedule-control-section'>
      <div className='control-section'>
        <div className='control-wrapper'>
          <ScheduleComponent height='550px' ref={scheduleObj} selectedDate={new Date(2024, 1, 15)} eventSettings={eventSettings}
            allowClipboard={true} showQuickInfo={false} beforePaste={ onBeforePasting }>
            <ViewsDirective>
              <ViewDirective option='Day' />
              <ViewDirective option='Week' />
              <ViewDirective option='WorkWeek' />
              <ViewDirective option='Month' />
              <ViewDirective option='Agenda' />
            </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
          </ScheduleComponent>
          <div className="grid-content">
              <GridComponent dataSource={gridData} cssClass="drag-grid" width="550px" height="400px" allowSelection={true} 
                 ref={gridObj}  >
              <ColumnsDirective>
                <ColumnDirective field="OrderID" headerText="Order ID" textAlign="Right" width={90} />
                <ColumnDirective field="CustomerID" headerText="Customer ID" width={100} />
                <ColumnDirective field="ShipCity" headerText="Ship City" width={100} />
                <ColumnDirective field="ShipName" headerText="Ship Name" width={130} />
                <ColumnDirective field="OrderDate" headerText="Order Date" type="date" format="yMd" width={100} />
              </ColumnsDirective>
                <Inject services={[RowDD, Edit]} />
              </GridComponent>
            </div>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);