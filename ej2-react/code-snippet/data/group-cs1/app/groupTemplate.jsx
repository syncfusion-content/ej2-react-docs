import React from 'react';
import { Row } from './rowTemplate';

export const GroupRow = (props) => {
  const getRows = (data) => {
    return data.map((row, index) => (
      <Row key={index} {...row} />
    ));
  };

  const caption =
    props.field +
    ' - ' +
    (props.items && props.items[0][props.field]);

  return (
    <tbody>
      <Row key={caption} caption={caption} />
      {getRows(props.items)}
    </tbody>
  );
};