---
layout: post
title: React Grid - Dialog Editing | Syncfusion
description: React Grid dialog editing opens record editors in modal dialogs, supports templates, enforces validation, and manages single-record save workflows.
control: Dialog editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Dialog Editing in React Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid Component dialog editing provides a powerful, efficient way to edit row data through a dedicated modal dialog window that focuses attention on the editing form. Instead of editing cells directly in the grid, multiple field values can be entered and modified at once in a clean, organized form. The grid automatically saves all changes to the data source without navigating away from the current page—making data entry faster, more intuitive, and less error-prone, especially when dealing with complex records that span multiple columns.

To enable dialog editing in the grid component, set the [editSettings.mode](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#mode) property to `Dialog`. This property determines the editing mode for the grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs8/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs8" %}

> For basic grid editing setup and configuration, refer to the [Edit Feature Setup](./edit#set-up-editing).

## Customize edit dialog

The edit dialog is a modal window that isolates the editing form and prevents grid interaction until the dialog closes. Customize this dialog to match application needs by handling the [actionComplete](https://ej2.syncfusion.com/react/documentation/api/grid#actioncomplete) event.

**Customizable options**:
- Header text, close button visibility, and height
- Button text and localization strings
- Dialog behavior based on the editing action

Use the `requestType` parameter to identify which action triggered the event and apply appropriate customizations:

| Request Type | Description |
|--------------|-------------|
| `beginEdit` | Editing an existing record |
| `add` | Creating a new record |
| `save` | Updating a new or existing record |
| `delete` | Deleting an existing record |

> Refer to the grid [Default text](../global-local) list for localization options.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/customizedialog-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/customizedialog-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/customizedialog-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/customizedialog-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/customizedialog-cs1" %}

> The Grid add or edit dialog element has the max-height property, which is calculated based on the available window height. So, in the normal window (1920 x 1080), it is possible to set the dialog's height up to 658px.

## Show or hide columns in dialog editing

Column visibility can be dynamically controlled in dialog editing mode. The [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid#actionbegin) event enables showing or hiding specific columns based on whether an existing record is being edited or a new record is being added.

The `actionBegin` event is triggered whenever an action is initiated in the grid (editing, adding, or deleting a record). Within the event `requestType` parameter determines how to manage column visibility in the event handler:

| Request Type | Action | Column Visibility Control |
|---|---|---|
| `beginEdit` or `add` | Editing or creating a record | Modify visibility using the `visible` property |
| `save` | Saving the record | Reset columns to initial visibility state using `visible` property |

In the following example, the "Customer ID" column is rendered as a hidden column, and the "Ship Country" column is rendered as a visible column. In the edit mode, the "Customer ID" column will be changed to a visible state and the "Ship Country" column will be changed to a hidden state.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/customizedialog-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/customizedialog-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/customizedialog-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/customizedialog-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/customizedialog-cs2" %}

## Use wizard-like dialog editing

Wizard-like dialog editing divides complex forms into manageable step-by-step sections with efficient navigation. The [editSettings.template](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#template) property enables custom form templates with multiple steps:

1. Set [editSettings.mode](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#mode) to `Dialog`.
2. Define template sections for each form step.
3. Add navigation buttons (Previous, Next, Save) between steps.
4. Implement validation for each step.

The following example demonstrates the wizard-like editing in the grid with unobtrusive validation:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/wizardediting-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/wizardediting-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/wizardediting-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/wizardediting-cs1/app/datasource.tsx %}
{% endhighlight %}
{% highlight js tabtitle="orderModel.jsx" %}
{% include code-snippet/grid/wizardediting-cs1/app/orderModel.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="orderModel.tsx" %}
{% include code-snippet/grid/wizardediting-cs1/app/orderModel.tsx %}
{% endhighlight %}
{% highlight js tabtitle="wizardTemplate.jsx" %}
{% raw %}
import { DataUtil } from '@syncfusion/ej2-data';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import { data } from './datasource';

export class DialogFormTemplate extends React.Component {
    currentTab = 0;
    shipCountryDistinctData = DataUtil.distinct(data, 'ShipCountry', true);
    shipCityDistinctData = DataUtil.distinct(data, 'ShipCity', true);
    grid;
    constructor(props) {
        super(props);
        this.state = Object.assign({}, props[0]);
        Object.assign(this.state, { currentTab: 1 })
        this.grid = props[1];
    }

    onChange(args) {
        this.setState({ [args.target.name]: args.target.value });
    }

    next() {
        if (this.validate()) {
            this.currentTab++;
            this.nextpre(this.currentTab);
        }
    }

    validate() {
        let valid = true;
        [].slice
            .call(
                (document.getElementById('tab' + this.currentTab) as any).querySelectorAll('[name]')
            )
            .forEach((element) => {
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

    previous() {
        if (this.validate()) {
            this.currentTab--;
            this.nextpre(this.currentTab);
        }
    }

    save() {
        if (this.validate()) {
            this.grid.endEdit();
        }
    }

    nextpre(current) {
        let tabs = [].slice.call(document.getElementsByClassName('tab'));
        tabs.forEach((element) => (element.style.display = 'none'));
        tabs[current].style.display = '';
        if (current === 2) {
            document.getElementById('prevBtn').style.display = '';
            document.getElementById('nextBtn').style.display = 'none';
        }
        else if (!current) {
            document.getElementById('prevBtn').style.display = 'none';
            document.getElementById('nextBtn').style.display = '';
        } else {
            document.getElementById('prevBtn').style.display = '';
            document.getElementById('nextBtn').style.display = '';
        }
    }

    render() {
        this.onChange = this.onChange.bind(this);
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.save = this.save.bind(this);
        const data = this.state;
        return (<div>
            <div id='tab0' className='tab'>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <div className="e-float-input e-control-wrapper">
                            <input id="OrderID" name="OrderID" type="text" disabled={!data.isAdd} value={data.OrderID} onChange={this.onChange} />
                            <span className="e-float-line" />
                            <label className="e-float-text e-label-top"> Order ID</label>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <div className="e-float-input e-control-wrapper" >
                            <input value={data.CustomerID} id="CustomerName" name="CustomerID" type="text" onChange={this.onChange} />
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
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="wizardTemplate.tsx" %}
{% raw %}
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
                            <input id="OrderID" name="OrderID" type="text" disabled={!data.isAdd} value={data.OrderID} onChange={this.onChange} />
                            <span className="e-float-line" />
                            <label className="e-float-text e-label-top"> Order ID</label>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <div className="e-float-input e-control-wrapper" >
                            <input value={data.CustomerID} id="CustomerName" name="CustomerID" type="text" onChange={this.onChange} />
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
{% endraw %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/wizardediting-cs1" %}

## Customize add/edit dialog footer

The dialog footer can be customized to add custom buttons or modify button appearance with effortless integration. The default footer displays Save and Cancel buttons. The [actionComplete](https://ej2.syncfusion.com/react/documentation/api/grid#actioncomplete) event enables adding custom buttons, changing button text, or implementing custom button actions in the dialog footer.

In the following sample, using the `dialog` argument of the `actionComplete` event, the action for the custom button can be customized.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/customizedialog-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/customizedialog-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/customizedialog-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/customizedialog-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/customizedialog-cs3" %}
