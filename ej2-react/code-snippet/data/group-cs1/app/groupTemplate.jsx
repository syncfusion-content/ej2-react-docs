import * as React from 'react';
import { Row } from './rowTemplate';

export class GroupRow extends React.Component {
    getRows(data) {
        return data.map((row, index) => (
            <Row key={index} {...row} />
        ));
    }

    render() {
        const item = this.props;
        const ag = { caption: item.field + ' - ' + (item.items && item.items[0][item.field]) };
        return (
            <tbody>
                <Row key={ag.caption} {...ag} />
                {this.getRows(item.items)}
            </tbody>
        );
    }
}
