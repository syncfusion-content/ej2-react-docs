import * as React from 'react';
import { Aggregates } from '@syncfusion/ej2-data';

export const AggregateRow: React.FC<Aggregates> = ({ min }) => {
  return (
    <tr>
      <td />
      <td />
      <td>{`Min: ${min}`}</td>
    </tr>
  );
};


