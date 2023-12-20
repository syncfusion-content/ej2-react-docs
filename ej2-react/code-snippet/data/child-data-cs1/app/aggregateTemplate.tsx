import { Aggregates } from '@syncfusion/ej2-data';
import * as React from 'react';

export class AggregateRow extends React.Component<{ key: string }, {}> {
  public render() {
    const item: Aggregates = this.props as Aggregates;
    return (
      <tr>
        <td />
        <td />
        <td>{`Min: ${item.min}`}</td>
      </tr>
    );
  }
}


