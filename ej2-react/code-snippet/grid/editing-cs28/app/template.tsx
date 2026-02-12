import { DataUtil } from '@syncfusion/ej2-data';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import { data as orderData } from './datasource';
import { IOrderModel } from './orderModel';

export class DialogFormTemplate extends React.Component<{}, {}> {
    private shipCountryDistinctData: any = DataUtil.distinct(orderData, 'ShipCountry', true );
    private orderIDRef: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();
    private customerIDRef: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();
    constructor(props: object) {
        super(props);
        this.state = Object.assign({}, props);
    }

    public onChange(args: any) {
        this.setState({[(args.target as HTMLInputElement).name]: args.target.value});
    }

    /** Set initial Focus */
    // Focus the input after the component mounts (DOM is ready)
    public componentDidMount() {
        const { isAdd } = this.state as { isAdd: boolean };
        if (isAdd) {
            this.orderIDRef.current?.focus();
        } else {
            this.customerIDRef.current?.focus();
        }
    }

    public render(): any {
        this.onChange = this.onChange.bind(this);
        const data: IOrderModel = this.state;
        return (<div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <div className="e-float-input e-control-wrapper">
                        <input ref={this.orderIDRef} id="OrderID" name="OrderID" type="text" disabled={!data.isAdd} value={data.OrderID} onChange={this.onChange} />
                        <span className="e-float-line"/>
                        <label className="e-float-text e-label-top"> Order ID</label>
                    </div>
                </div>
                <div className="form-group col-md-6">
                    <div className="e-float-input e-control-wrapper" >
                        <input ref={this.customerIDRef} value={data.CustomerID} id="CustomerID" name="CustomerID" type="text" onChange={this.onChange} />
                        <span className="e-float-line"/>
                        <label className="e-float-text e-label-top">Customer Name</label>
                    </div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <NumericTextBoxComponent id="Freight" format='C2' value={data.Freight} placeholder="Freight" floatLabelType='Always'/>
                </div>
                <div className="form-group col-md-6">
                    <DropDownListComponent id="ShipCountry" value={data.ShipCountry} dataSource={this.shipCountryDistinctData}
                        fields={{text: 'ShipCountry', value: 'ShipCountry' }} placeholder="Ship Country"
                        popupHeight='300px' floatLabelType='Always'/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <div className="e-float-input e-control-wrapper">
                        <textarea id="ShipAddress" name="ShipAddress" value={data.ShipAddress} onChange={this.onChange} />
                        <span className="e-float-line"/>
                        <label className="e-float-text e-label-top">Ship Address</label>
                    </div>
                </div>
            </div>
        </div>);
    }
}