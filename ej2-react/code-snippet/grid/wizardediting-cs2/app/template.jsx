import { data as orderData } from './datasource';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { DataUtil } from '@syncfusion/ej2-data';
export class DialogFormTemplate extends React.Component {
    shipCountryDistinctData = DataUtil.distinct(orderData, 'ShipCountry', true);
    constructor(props) {
        super(props);
        this.state = Object.assign({}, props[0]);
        this.grid = props[1];
        this.state.currentTab = 1;
    }
    onChange(args) {
        this.setState({ [args.target.name]: args.target.value });
    }
    next(args) {
        let valid = true;
        [].slice.call(document.getElementById('tab' + this.state.currentTab).querySelectorAll('[name]')).forEach(element => {
            element.form.ej2_instances[0].validate(element.name);
            if (element.getAttribute('aria-invalid') === 'true') {
                valid = false;
            }
        });
        if (!valid) {
            return;
        }
        if (args.target.innerHTML !== 'SUBMIT') {
            this.setState({ currentTab: 2 });
        }
        else {
            this.grid.endEdit();
        }
    }
    previous() {
        let valid = true;
        [].slice.call(document.getElementById('tab' + this.state.currentTab).querySelectorAll('[name]')).forEach(element => {
            element.form.ej2_instances[0].validate(element.name);
            if (element.getAttribute('aria-invalid') === 'true') {
                valid = false;
            }
        });
        if (!valid) {
            return;
        }
        this.setState({ currentTab: 1 });
    }
    render() {
        let data = this.state;
        return (<div>
            <div id='tab1' className={data.currentTab === 1 ? '' : 'e-hide'}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <div className="e-float-input e-control-wrapper">
                            <input id="OrderID" name="OrderID" type="text" disabled={!data.isAdd} value={data.OrderID} onChange={this.onChange.bind(this)}/>
                            <span className="e-float-line"></span>
                            <label className="e-float-text e-label-top"> Order ID</label>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <div className="e-float-input e-control-wrapper">
                            <input value={data.CustomerID} id="CustomerName" name="CustomerID" type="text" onChange={this.onChange.bind(this)}/>
                            <span className="e-float-line"></span>
                            <label className="e-float-text e-label-top">Customer Name</label>
                        </div>
                    </div>
                </div>
            </div>
            <div id='tab2' className={data.currentTab === 2 ? '' : 'e-hide'}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <NumericTextBoxComponent id="Freight" format='C2' value={data.Freight} placeholder="Freight" floatLabelType='Always'></NumericTextBoxComponent>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <DropDownListComponent id="ShipCountry" value={data.ShipCountry} dataSource={this.shipCountryDistinctData} fields={{ text: 'ShipCountry', value: 'ShipCountry' }} placeholder="Ship Country" popupHeight='300px' floatLabelType='Always'></DropDownListComponent>
                    </div>
                </div>
            </div>
            <div id='footer'>
                <button id="prevBtn" className={data.currentTab === 1 ? 'e-info e-btn e-hide' : 'e-info e-btn'} type="button" style={{ float: "left" }} onClick={this.previous.bind(this)}>Previous</button>
            
                <button id="nextBtn" className="e-info e-btn" type="button" style={{ float: "right" }} onClick={this.next.bind(this)}>{data.currentTab === 1 ? 'Next' : 'SUBMIT'}</button>
            </div>
        </div>);
    }
}
