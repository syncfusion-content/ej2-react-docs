import * as React from 'react';
export class TabOneComponent extends React.Component {
    tab;
    constructor(props) {
        super(props);
        this.state = Object.assign({}, props[0]);
        this.tab = props[1];
    }
    onChange(args) {
        this.setState({ [args.target.name]: args.target.value });
    }
    next() {
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
        if (this.tab) {
            this.tab.select(1);
        }
    }
    render() {
        this.onChange = this.onChange.bind(this);
        this.next = this.next.bind(this);
        const data = this.state;
        return (<div id='tab1'>
        <div className="form-row">
            <div className="form-group col-md-6">
                <div className="e-float-input e-control-wrapper">
                    <input id="OrderID" name="OrderID" type="text" disabled={!data.isAdd} value={data.OrderID} onChange={this.onChange}/>
                    <span className="e-float-line"/>
                    <label className="e-float-text e-label-top"> Order ID</label>
                </div>
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-6">
                <div className="e-float-input e-control-wrapper">
                    <input value={data.CustomerID} id="CustomerName" name="CustomerID" type="text" onChange={this.onChange}/>
                    <span className="e-float-line"/>
                    <label className="e-float-text e-label-top">Customer Name</label>
                </div>
            </div>
        </div>
        <div id='footer'> 
            <button id="nextBtn" className='e-info e-btn' type="button" style={{ float: "right" }} onClick={this.next}>Next</button>
        </div>
    </div>);
    }
}
