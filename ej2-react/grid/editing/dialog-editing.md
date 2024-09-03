---
layout: post
title: Dialog editing in React Grid component | Syncfusion
description: Learn here all about Dialog editing in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Dialog editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Dialog editing in React Grid component

Dialog editing is a feature in the Grid component that allows you to edit the data of the currently selected row using a dialog window. With dialog editing, you can easily modify cell values and save the changes back to the data source.This feature is particularly beneficial in scenarios where you need to quickly modify data without navigating to a separate page or view, and it streamlines the process of editing multiple cells.

To enable dialog editing in grid component, you need to set the [editSettings.mode](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings/#mode) property to **Dialog**. This property determines the editing mode for the grid, and when set to **Dialog**, it enables the dialog editing feature.

Here's an example how to enable dialog editing in the react grid component:

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

## Customize edit dialog

The edit dialog in the Grid component allows you to customize its appearance and behavior based on the type of action being performed, such as editing or adding a record. You can modify properties like header text, showCloseIcon, and height to tailor the edit dialog to your specific requirements. Additionally, you can override default localization strings to provide custom text for buttons or other elements within the dialog.

To customize the edit dialog, you need to handle the [actionComplete](https://ej2.syncfusion.com/react/documentation/api/grid/#actioncomplete) event of the Grid component and perform the necessary modifications based on the **requestType** parameter. The **requestType** parameter identifies the type of action being performed, such as **beginEdit** for editing a record or **add** for adding a new record.

> You can refer the Grid [Default text](../global-local/) list for more localization.

The following example that demonstrates how to customize the edit dialog using the `actionComplete` event:

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

The show or hide columns in dialog editing feature in the grid allows you to dynamically control the visibility of columns while editing in the dialog edit mode. This feature is useful when you want to display specific columns based on the type of action being performed, such as editing an existing record or adding a new record. To achieve this, you can utilize the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid/#actionbegin) event of the Grid. 

The `actionBegin` event is triggered whenever an action is initiated in the grid, such as editing, adding, or deleting a record. Within the event handler, you can check the **requestType** parameter to determine the type of action being performed. If the **requestType** is `beginEdit` or `add`, you can modify the visibility of columns using the `visible` property. This property is used to determine whether a column should be displayed or hidden. Then, when the **requestType** is `save`, you can reset the column visibility to its initial state using the `column.visible` property.

In the following example, the **CustomerID** column is rendered as a hidden column, and the **ShipCountry** column is rendered as a visible column. In the edit mode, the **CustomerID** column will be changed to a visible state and the **ShipCountry** column will be changed to a hidden state.

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

## Use wizard like dialog editing

Wizard-like dialog editing is a powerful feature in the Grid component that enables the creation of intuitive step-by-step forms. This feature provides a structured approach to form completion or data entry by breaking down the process into manageable steps.This feature is particularly useful when you have complex forms that need to be broken down into smaller sections to guide you through the data entry process.

To achieve wizard-like dialog editing in the grid component, you can use the dialog template feature. This feature allows you to define your own custom editing template using the [`editSettings.mode`](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings/#mode) property set to  **Dialog** and the [editSettingsTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings/#template) property to specify the template variable that defines the editors for each step of the wizard.

The following example demonstrate the wizard like editing in the grid with the unobtrusive validation.

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

The Customize add/edit dialog footer feature in the grid allows you to modify the footer section of the dialog that appears when editing the currently selected row or adding a new row. By default, the dialog displays two buttons in the footer section: Save and Cancel, which allow you to save or discard the changes made in the dialog. This feature is particularly helpful when you want to add custom buttons to the dialog's footer, implement specific actions, or customize the appearance of the buttons, such as changing their color or size in the dialog's footer. This can be achieved using the [actionComplete](https://ej2.syncfusion.com/react/documentation/api/grid/#actioncomplete) event of the Grid component.

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