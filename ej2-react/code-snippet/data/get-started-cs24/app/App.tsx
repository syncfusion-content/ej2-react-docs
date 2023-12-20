import { getValue } from '@syncfusion/ej2-base';
import { DataManager, ODataV4Adaptor, Query, ReturnOption } from '@syncfusion/ej2-data';
import * as React from 'react';
import { AggregateRow } from './aggregateTemplate';
import { IOrders } from './orders';
import { Row } from './rowTemplate';

const SERVICE_URI: string = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';

export default class App extends React.Component<{}, {}> {
  constructor(props: object) {
    super(props);
    this.state = { items: [], aggregates: [] };

  }
  componentDidMount() {
    new DataManager({ url: SERVICE_URI, adaptor: new ODataV4Adaptor() })
      .executeQuery(new Query().requiresCount().take(5).aggregate('min', 'EmployeeID'))
      .then((e: ReturnOption) => {
        console.log(e.aggregates)
        const agg: { min: object } = { min: (e.aggregates as AggregatesType)['EmployeeID - min'] };
        const ret: React.ReactElement = <AggregateRow key="aggregate" {...agg} />;
        const res = ((e.result as IOrders[])).map((row: IOrders,index: number) => (
          <Row key={row.OrderID} {...row} />
        ));
        this.setState({
          aggregates: [ret],
          items: res,
        });
      });
  }

  public render() {
    return (
      <table id="datatable" className="e-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer ID</th>
            <th>Employee ID</th>
          </tr>
        </thead>
        <tbody>{getValue('items', this.state)}</tbody>
        <tfoot>{getValue('aggregates', this.state)}</tfoot>
      </table>
    );
  }
}

interface AggregatesType
{
  [key: string]: object;
};