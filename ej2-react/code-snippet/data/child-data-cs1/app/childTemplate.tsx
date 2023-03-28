import * as React from 'react';

interface IProducts { ProductID: number; UnitPrice: number; Quantity: number; }


export class ChildRow extends React.Component<{}, {}>{
    public render() {
        const item: IProducts = this.props as IProducts;     
        return (<tr>
            <td>{item.ProductID}</td>
            <td>{item.UnitPrice}</td>
            <td>{item.Quantity}</td>
           </tr>)
    }
}