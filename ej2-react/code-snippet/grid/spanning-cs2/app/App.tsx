

import { Column, ColumnDirective, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import { QueryCellInfoEventArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { IColumnSpanDataType } from './colspanDataType';
import { columnSpanData } from './datasource';

function App() {
  let grid: Grid | null;
  const queryCellInfoEvent = (args: QueryCellInfoEventArgs) => {
    const col: Column = args.column as Column;
    const data: IColumnSpanDataType = args.data as IColumnSpanDataType;
    switch (data.EmployeeID) {
      case 10001:
        if (col.field === '9:00' || col.field === '2:30' || col.field === '4:30') {
          args.colSpan = 2;
        } else if (col.field === '11:00') {
          args.colSpan = 3;
        } else if (col.field === 'EmployeeName') {
          args.rowSpan = 2;
        } else if (col.field === '1:00') {
          args.colSpan = 3;
          args.rowSpan = (grid && grid.currentViewData.length) || 0;
        }
        break;
      case 10002:
        if (col.field === '9:30' || col.field === '2:30' ||
          col.field === '4:30') {
          args.colSpan = 3;
        } else if (col.field === '11:00') {
          args.colSpan = 4;
        }
        break;
      case 10003:
        if (col.field === '9:00' || col.field === '11:30') {
          args.colSpan = 3;
        } else if (col.field === '10:30' || col.field === '3:30' ||
          col.field === '4:30' || col.field === '2:30') {
          args.colSpan = 2;
        }
        break;
      case 10004:
        if (col.field === '9:00') {
          args.colSpan = 3;
        } else if (col.field === '11:00') {
          args.colSpan = 4;
        } else if (col.field === '4:00' || col.field === '2:30') {
          args.colSpan = 2;
        }
        break;
      case 10005:
        if (col.field === '9:00') {
          args.colSpan = 4;
        } else if (col.field === '11:30') {
          args.colSpan = 3;
        } else if (col.field === '3:30' || col.field === '4:30' || col.field === '2:30') {
          args.colSpan = 2;
        }
        break;
      case 10006:
        if (col.field === '9:00' || col.field === '4:30' ||
          col.field === '2:30' || col.field === '3:30') {
          args.colSpan = 2;
        } else if (col.field === '10:00' || col.field === '11:30') {
          args.colSpan = 3;
        }
        break;
      case 10007:
        if (col.field === '9:00' || col.field === '3:00' || col.field === '10:30') {
          args.colSpan = 2;
        } else if (col.field === '11:30' || col.field === '4:00') {
          args.colSpan = 3;
        }
        break;
      case 10008:
        if (col.field === '9:00' || col.field === '10:30' || col.field === '2:30') {
          args.colSpan = 3;
        } else if (col.field === '4:00') {
          args.colSpan = 2;
        }
        break;
      case 10009:
        if (col.field === '9:00' || col.field === '11:30') {
          args.colSpan = 3;
        } else if (col.field === '4:30' || col.field === '2:30') {
          args.colSpan = 2;
        }
        break;
      case 100010:
        if (col.field === '9:00' || col.field === '2:30' ||
          col.field === '4:00' || col.field === '11:30') {
          args.colSpan = 3;
        } else if (col.field === '10:30') {
          args.colSpan = 2;
        }
        break;
    }
  };

  return (
    <div className='control-pane'>
      <div className='control-section'>
        <GridComponent dataSource={columnSpanData} ref={g => grid = g} queryCellInfo={queryCellInfoEvent} allowTextWrap={true} height='315' width='auto' gridLines='Both' >
          <ColumnsDirective>
            <ColumnDirective field='EmployeeID' headerText='Employee ID' width='150' textAlign='Right' />
            <ColumnDirective field='EmployeeName' headerText='Employee Name' width='200' />
            <ColumnDirective field='9:00' headerText='9:00 AM' width='120' />
            <ColumnDirective field='9:30' headerText='9:30 AM' width='120' />
            <ColumnDirective field='10:00' headerText='10:00 AM' width='120' />
            <ColumnDirective field='10:30' headerText='10:30 AM' width='120' />
            <ColumnDirective field='11:00' headerText='11:00 AM' width='120' />
            <ColumnDirective field='11:30' headerText='11:30 AM' width='120' />
            <ColumnDirective field='12:00' headerText='12:00 PM' width='120' />
            <ColumnDirective field='12:30' headerText='12:30 PM' width='120' />
            <ColumnDirective field='1:00' headerText='1:00 PM' textAlign='Center' width='120' />
            <ColumnDirective field='1:30' headerText='1:30 PM' width='120' />
            <ColumnDirective field='2:00' headerText='2:00 PM' width='120' />
            <ColumnDirective field='2:30' headerText='2:30 PM' width='120' />
            <ColumnDirective field='3:00' headerText='3:00 PM' width='120' />
            <ColumnDirective field='3:30' headerText='3:30 PM' width='120' />
            <ColumnDirective field='4:00' headerText='4:00 PM' width='120' />
            <ColumnDirective field='4:30' headerText='4:30 PM' width='120' />
            <ColumnDirective field='5:00' headerText='5:00 PM' width='120' />
          </ColumnsDirective>
        </GridComponent>
      </div>
    </div>)
};
export default App;


