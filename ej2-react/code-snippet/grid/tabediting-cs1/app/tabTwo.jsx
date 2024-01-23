import { DataUtil } from '@syncfusion/ej2-data';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data as orderData } from './datasource';
export class TabTwoComponent extends React.Component {
    shipCountryDistinctData = DataUtil.distinct(orderData, 'ShipCountry', true);
    grid;
    constructor(props) {
        super(props);
        this.state = Object.assign({}, props[0]);
        this.grid = props[2];
    }
    onChange(args) {
        this.setState({ [args.target.name]: args.target.value });
    }
    submit() {
        let valid = true;
        [].slice.call(document.getElementById('tab1').querySelectorAll('[name]'))
            .forEach((element) => {
            element.form.ej2_instances[0].validate(element.name);
            if (element.getAttribute('aria-invalid') === 'true') {
                valid = false;
            }
        });
        if (!valid) {
            return;
        }
        if (this.grid) {
            this.grid.endEdit();
        }
    }
    render() {
        this.submit = this.submit.bind(this);
        const data = this.state;
        return (<div id='tab2'>
        <div className="form-row">
            <div className="form-group">
                <DropDownListComponent id="ShipCountry" value={data.ShipCountry} dataSource={this.shipCountryDistinctData} fields={{ text: 'ShipCountry', value: 'ShipCountry' }} placeholder="Ship Country" popupHeight='300px' floatLabelType='Always'/>
            </div>
        </div>
        <div className="form-row">
            <div className="form-group">
                <CheckBoxComponent name="Verified" id="Verified" label="Verified" checked={data.Verified}/>
            </div>
        </div>
        <div id='footer'>   
            <button id="submitBtn" className="e-info e-btn" type="button" style={{ float: "right" }} onClick={this.submit}>SUBMIT</button>
        </div>
    </div>);
    }
}
