import * as React from 'react';
import { Group } from '@syncfusion/ej2-data';
import { IOrders } from './orders';
import { Row } from './rowTemplate';

interface GroupRowProps extends Group {}

export const GroupRow: React.FC<GroupRowProps> = (props) => {
  const getRows = (data: IOrders[]) => {
    return data.map((row: IOrders, index: number) => (
      <Row key={index} {...row} />
    ));
  };

  const caption =
    props.field +
    ' - ' +
    (props.items && (props.items[0] as any)[props.field as any]);

  return (
    <tbody>
      <Row key={caption} caption={caption} />
      {getRows(props.items as IOrders[])}
    </tbody>
  );
};