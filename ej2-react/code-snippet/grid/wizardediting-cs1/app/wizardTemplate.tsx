import { DataUtil } from '@syncfusion/ej2-data';
import { GridComponent } from '@syncfusion/ej2-grids';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import { data } from './datasource';
import { IOrderModel } from './orderModel';

export class DialogFormTemplate extends React.Component<{}, {}> {
    public currentTab: number = 0;
    private shipCountryDistinctData = DataUtil.distinct(data, 'ShipCountry', true);
    private shipCityDistinctData = DataUtil.distinct(data, 'ShipCity', true);
    private grid: GridComponent | null;
    private orderIDRef: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();
    private customerIdRef: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();
    constructor(props) {
        super(props);
        this.state = Object.assign({}, props[0]);
        Object.assign(this.state, { currentTab: 1 })
        this.grid = props[1];
    }

    public onChange(args: React.ChangeEvent) {
        this.setState({ [(args.target as HTMLInputElement).name]: (args.target as HTMLInputElement).value });
    }

    public next() {
        if (this.validate()) {
            this.currentTab++;
            this.nextpre(this.currentTab);
        }
    };
    public validate() {
        let valid = true;
        [].slice
            .call(
                (document.getElementById('tab' + this.currentTab) as HTMLElement).querySelectorAll('[name]')
            )
            .forEach((element: HTMLFormElement) => {
                element.form.ej2_instances[0].validate(element.name);
                if (element.getAttribute('aria-invalid') === 'true') {
                    valid = false;
                }
            });
        if (!valid) {
            return false;
        }
        return true;
    }
    public previous() {
        if (this.validate()) {
            this.currentTab--;
            this.nextpre(this.currentTab);
        }
    };
    public save() {
        if (this.validate()) {
            (this.grid as GridComponent).endEdit();
        }
    };
    public nextpre(current:number) {
        let tabs = [].slice.call(document.getElementsByClassName('tab'));
        tabs.forEach((element) => (element.style.display = 'none'));
        tabs[current].style.display = '';
        if (current === 2) {
            (document.getElementById('prevBtn') as HTMLElement).style.display = '';
            (document.getElementById('nextBtn') as HTMLElement).style.display = 'none';
        } else if (!current) {
            (document.getElementById('prevBtn') as HTMLElement).style.display = 'none';
            (document.getElementById('nextBtn') as HTMLElement).style.display = '';
        } else {
            (document.getElementById('prevBtn') as HTMLElement).style.display = '';
            (document.getElementById('nextBtn') as HTMLElement).style.display = '';
        }
    }

    public componentDidMount() {
        const { isAdd } = this.state as { isAdd: boolean };
        // Set initial Focus
        if (isAdd) {
            this.orderIDRef.current?.focus();
        } else {
            this.customerIdRef.current?.focus();
        }
    }
    public render() {
        this.onChange = this.onChange.bind(this);
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.save = this.save.bind(this);
        const data: IOrderModel = this.state;
        return (<div>
            <div id='tab0' className='tab'>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <div className="e-float-input e-control-wrapper">
                            <input ref={this.orderIDRef} id="OrderID" name="OrderID" type="text" disabled={!data.isAdd} value={data.OrderID} onChange={this.onChange} />
                            <span className="e-float-line" />
                            <label className="e-float-text e-label-top"> Order ID</label>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <div className="e-float-input e-control-wrapper" >
                            <input ref={this.customerIdRef} value={data.CustomerID} id="CustomerName" name="CustomerID" type="text" onChange={this.onChange} />
                            <span className="e-float-line" />
                            <label className="e-float-text e-label-top">Customer Name</label>
                        </div>
                    </div>
                </div>
            </div>
            <div id='tab1' style={{ display: "none" }} className='tab'>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <NumericTextBoxComponent id="Freight" format='C2' value={data.Freight} placeholder="Freight" floatLabelType='Always' />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <DropDownListComponent id="ShipCity" value={data.ShipCity} dataSource={this.shipCityDistinctData}
                            fields={{ text: 'ShipCity', value: 'ShipCity' }} placeholder="Ship City"
                            popupHeight='300px' floatLabelType='Always' />
                    </div>
                </div>
            </div>
            <div id='tab2' style={{ display: "none" }} className='tab'>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <DropDownListComponent id="ShipCountry" value={data.ShipCountry} dataSource={this.shipCountryDistinctData}
                            fields={{ text: 'ShipCountry', value: 'ShipCountry' }} placeholder="Ship Country"
                            popupHeight='300px' floatLabelType='Always' />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <CheckBoxComponent id='Verified' name="Verified" label="Verified" checked={data.Verified}></CheckBoxComponent>
                    </div>
                </div>
            </div>
            <div id='footer'>
                <div id='footer'>
                    <div style={{ float: "left" }}>
                        <button id="prevBtn" className='e-info e-btn' type="button" onClick={this.previous} style={{ display: "none", float: "left" }}>Previous</button>
                    </div>
                    <div style={{ float: "right" }}>
                        <button id="saveBtn" style={{ marginRight: "10px", marginLeft:"10px" }} className="e-info e-btn" type="button" onClick={this.save}>Save</button>
                        <button id="nextBtn" className='e-info e-btn' type="button" onClick={this.next}>Next</button>
                    </div>
                </div>
            </div>
        </div>);
    }
}