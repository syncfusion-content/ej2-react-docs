import * as React from 'react';
export class AggregateRow extends React.Component {
    render() {
        const item = this.props;
        return (<tr>
                 <td />
                 <td />
                 <td>Min: {item.min}</td>
                </tr>);
    }
}
