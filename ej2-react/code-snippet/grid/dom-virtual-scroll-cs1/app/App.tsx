import React, { useRef } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-grids';
import { DomVirtualization, Sort, Filter, Toolbar } from '@syncfusion/ej2-react-grids';
import { DataManager, UrlAdaptor, Query } from '@syncfusion/ej2-data';

interface AppProps {
}

export default function App(props: AppProps) {
  const dataManager: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
    adaptor: new UrlAdaptor()
  });

  const query: Query = new Query().addParams('dataCount', '100000');

  return (
    <div className='control-section'>
      <GridComponent
        dataSource={dataManager}
        query={query}
        allowSelection={true}
        allowFiltering={true}
        allowSorting={true}
        enableDomVirtualization={true}
        domVirtualizationSettings={{ rowBuffer: 10 }}
        pageSettings={{ pageSize: 50 }}
        filterSettings={{ type: 'CheckBox' }}
        toolbar={['Search']}
        height='400px'
        rowHeight={50}
        clipMode='EllipsisWithTooltip'
      >
        <ColumnsDirective>
          <ColumnDirective field='EmployeeID' headerText='Employee ID' width='130' isPrimaryKey={true}></ColumnDirective>
          <ColumnDirective field='Employees' headerText='Employee Name' width='150'></ColumnDirective>
          <ColumnDirective field='Designation' headerText='Designation' width='180'></ColumnDirective>
          <ColumnDirective field='Mail' headerText='Email' width='230'></ColumnDirective>
          <ColumnDirective field='Location' headerText='Location' width='150'></ColumnDirective>
          <ColumnDirective field='ReportingPerson' headerText='Reporting Person' width='150'></ColumnDirective>
        </ColumnsDirective>
        <Inject services={[DomVirtualization, Sort, Filter, Toolbar]} />
      </GridComponent>
    </div>
  );
}
