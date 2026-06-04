---
layout: post
title: React Grid - Template editing | Syncfusion
description: React Grid inline editing enables direct row edits, auto updates, conditional control, CRUD actions, confirmations, and flexible add/delete.
control: Template editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Template Editing in React Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component supports template editing, providing a powerful and flexible way to customize the appearance and behavior of cells during editing. React templates enable defining the structure and content of cells within the grid.

> For grid basic editing setup and configuration, refer to the [Edit Feature Setup](./edit#set-up-editing).

## Inline or Dialog template editing

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides support for inline and dialog template editing, enabling customization of editing using [Forms](https://legacy.reactjs.org/docs/forms.html). Forms enable adding and updating grid records through template support in both dialog and inline edit modes.

To enable this feature, set the [editSettings.mode](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#mode) property to either `Normal` or `Dialog` and define grid editors using the `editSettings.template` template variable.

**Using Forms**

Forms provide an approach to create and manipulate form controls for adding and updating grid records through template support. Setting the [editSettings.mode](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#mode) to `Normal` or `Dialog` and `editSettings.template` as the template variable enables grid editor definition.

When new field editors need to be added to the dialog but are not present in the column model, the dialog template enables customization of the default edit dialog.

The following example demonstrates a grid enabled with dialog template editing.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs28/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs28/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs28/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs28/app/datasource.tsx %}
{% endhighlight %}
{% highlight js tabtitle="orderModel.jsx" %}
{% include code-snippet/grid/editing-cs28/app/orderModel.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="orderModel.tsx" %}
{% include code-snippet/grid/editing-cs28/app/orderModel.tsx %}
{% endhighlight %}
{% highlight js tabtitle="template.jsx" %}
{% raw %}
import { DataUtil } from '@syncfusion/ej2-data';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import { data as orderData } from './datasource';
export class DialogFormTemplate extends React.Component {
    shipCountryDistinctData = DataUtil.distinct(orderData, 'ShipCountry', true);
    constructor(props) {
        super(props);
        this.state = Object.assign({}, props);
    }
    onChange(args) {
        this.setState({ [args.target.name]: args.target.value });
    }
    render() {
        this.onChange = this.onChange.bind(this);
        const data = this.state;
        return (<div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <div className="e-float-input e-control-wrapper">
                        <input id="OrderID" name="OrderID" type="text" disabled={!data.isAdd} value={data.OrderID} onChange={this.onChange}/>
                        <span className="e-float-line"/>
                        <label className="e-float-text e-label-top"> Order ID</label>
                    </div>
                </div>
                <div className="form-group col-md-6">
                    <div className="e-float-input e-control-wrapper">
                        <input value={data.CustomerID} id="CustomerID" name="CustomerID" type="text" onChange={this.onChange}/>
                        <span className="e-float-line" />
                        <label className="e-float-text e-label-top">Customer Name</label>
                    </div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <NumericTextBoxComponent id="Freight" format='C2' value={data.Freight} placeholder="Freight" floatLabelType='Always'/>
                </div>
                <div className="form-group col-md-6">
                    <DropDownListComponent id="ShipCountry" value={data.ShipCountry} dataSource={this.shipCountryDistinctData} fields={{ text: 'ShipCountry', value: 'ShipCountry' }} placeholder="Ship Country" popupHeight='300px' floatLabelType='Always'/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <div className="e-float-input e-control-wrapper">
                        <textarea id="ShipAddress" name="ShipAddress" value={data.ShipAddress} onChange={this.onChange}></textarea>
                        <span className="e-float-line"/>
                        <label className="e-float-text e-label-top">Ship Address</label>
                    </div>
                </div>
            </div>
        </div>);
    }
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="template.tsx" %}
{% raw %}
import { DataUtil } from '@syncfusion/ej2-data';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import { data as orderData } from './datasource';
import { IOrderModel } from './orderModel';

export class DialogFormTemplate extends React.Component<{}, {}> {
    private shipCountryDistinctData: any = DataUtil.distinct(orderData, 'ShipCountry', true );
    constructor(props: object) {
        super(props);
        this.state = Object.assign({}, props);
    }

    public onChange(args: any) {
        this.setState({[(args.target as HTMLInputElement).name]: args.target.value});
    }

    public render(): any {
        this.onChange = this.onChange.bind(this);
        const data: IOrderModel = this.state;
        return (<div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <div className="e-float-input e-control-wrapper">
                        <input id="OrderID" name="OrderID" type="text" disabled={!data.isAdd} value={data.OrderID} onChange={this.onChange} />
                        <span className="e-float-line"/>
                        <label className="e-float-text e-label-top"> Order ID</label>
                    </div>
                </div>
                <div className="form-group col-md-6">
                    <div className="e-float-input e-control-wrapper" >
                        <input value={data.CustomerID} id="CustomerID" name="CustomerID" type="text" onChange={this.onChange} />
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
{% endraw %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/editing-cs28" %}

> The `Dialog` and `Inline` template form editors must have **name** attribute.

## Using template context

Template contexts enhance customization of grid edit forms by enabling access to row details, rendering editors as components, retrieving values from editors, setting focus to specific editors, disabling default form validation, and adding custom validation rules. These features apply to both inline and dialog editing modes.

The following template context topics are demonstrated through a practical example in the [Render tab component inside the dialog template](#render-tab-component-inside-the-dialog-template) section.

### Access row details inside template using template context

Edit templates in the grid provide access to crucial row information, enabling dynamic binding of attributes, values, or elements based on the specific row being edited. This approach is particularly useful for conditionally rendering or modifying elements in the edit template based on the row's state.

The following properties are available at the time of template execution:

| Property Name | Usage |
|---|---|
| `isAdd` | Boolean property indicating whether the current row is a new record |

The following code example demonstrates the usage of the `isAdd` property in an edit template to disable the "Order ID" textbox when editing an existing record.

```ts
<div className="form-group col-md-6">
  {data.isAdd && (
    <div className="e-float-input e-control-wrapper">
      <input id="OrderID" name="OrderID" type="text" disabled={!data.isAdd} value={props.OrderID} onChange={onChange} />
      <span className="e-float-line"></span>
      <label className="e-float-text e-label-top">Order ID</label>
    </div>
  )}
</div>
```

### Render editors as components

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides a powerful feature enabling dynamic rendering of Syncfusion<sup style="font-size:70%">&reg;</sup> EJ2 controls as form editors during the editing process. This functionality delivers feature-rich controls for data entry within the edit form.

To achieve this, utilize the [actionComplete](https://ej2.syncfusion.com/react/documentation/api/grid#actioncomplete) event of the grid and specify `requestType` as `beginEdit` or `add`.

The following code example illustrates rendering the `DropDownList` component in the `actionComplete` event.

```typescript

const actionComplete = (args: DialogEditEventArgs) => {
  if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
      let countryData: {}[] = DataUtil.distinct(data, 'ShipCountry', true);
      new DropDownList({value: args.rowData.ShipCountry, popupHeight: '200px', floatLabelType: 'Always',
          dataSource: countryData, fields: {text: 'ShipCountry', value: 'ShipCountry'}, placeholder: 'Ship Country'}, args.form.elements.namedItem('ShipCountry') as HTMLInputElement);
  }
}

```

### Get value from editor

The get value from editor feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid enables reading, formatting, and updating the current editor value before saving. This feature provides significant value when specific actions must be performed on data, such as formatting or validation, before committing to the underlying data source.

To implement this feature, utilize the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid#actionbegin) event with the `requestType` set to `save`.

In the following code example, the freight value has been formatted and updated.

```typescript
const actionBegin = (args: SaveEventArgs) => {
    if (args.requestType === 'save') {
        // cast string to integer value.
        (args.data as ColumnDataType).Freight = parseFloat(((args as any).form.querySelector('#Freight').ej2_instances[0] as HTMLInputElement).value);
    }
}
```

### Set focus to particular column editor

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid enables control of focus behavior for input elements in edit forms. By default, the first input element in the dialog receives focus when the dialog is opened. However, when the first input element is disabled or hidden, a different valid input element can receive focus. This can be achieved using the [actionComplete](https://ej2.syncfusion.com/react/documentation/api/grid#actioncomplete) event of the grid, where the `requestType` is set to `beginEdit`.

In the following code example, the Customer ID column receives focus.

```typescript
const actionComplete = (args: DialogEditEventArgs) => {
    // Set initial focus
    if (args.requestType === 'beginEdit') {
        ((args.form as HTMLFormElement).elements.namedItem('CustomerID') as HTMLInputElement).focus();
    }
}
```

## Disable default form validation

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides built-in support for [react form validation](https://react-bootstrap.netlify.app/docs/forms/validation) to ensure data integrity and accuracy during editing. Scenarios may arise where disabling the default form validation rules is necessary. This can be achieved using the [removeRules](https://helpej2.syncfusion.com/documentation/api/form-validator#removerules) method within the [actionComplete](https://ej2.syncfusion.com/react/documentation/api/grid#actioncomplete) event of the grid.

To disable default form validation rules in the grid, use the following approach:

```typescript
const actionComplete = (args: DialogEditEventArgs) => {
    if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
        // Disable the Validation Rules
        (args.form as HTMLFormElement)['ej2_instances'][0].removeRules();
    }
}
```

> An alternative method to disable validation rules: `args.form.ej2_instances[0].rules = {}`.

## Add validation rules for custom editors

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides the ability to add validation rules for fields not present in the column model. This feature prevents erroneous or inconsistent data from being submitted, enhancing the reliability of application data.

To add validation rules, utilize the [actionComplete](https://ej2.syncfusion.com/react/documentation/api/grid#actioncomplete) event along with the [addRules](https://ej2.syncfusion.com/documentation/api/form-validator#addrules) method.

The following approach uses the `addRules` method to add validation rules for custom editors in the `actionComplete` event:

```typescript
const actionComplete = (args: DialogEditEventArgs) => {
    if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
        // Add Validation Rules
        (args.form as HTMLFormElement)['ej2_instances'][0].addRules('Freight', { max: 500 });
    }
}
```

## Render tab component inside the dialog template

Rendering a [Tab](../../../tab/index.html) component inside the dialog template enhances the grid editing experience. This feature is especially useful for presenting multiple editing sections or categories in a tabbed layout, ensuring a more intuitive and easily navigable interface for data editing.

To enable this functionality, set the [editSettings.mode](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#mode) property of the grid to `Dialog`. Additionally, use the [editSettings.template](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings#template) property to define a template variable containing the `Tab` component and its corresponding content.

The following example renders a tab component inside the edit dialog. The tab component has two tabs. Once fields in the first tab are filled and navigation to the second tab occurs, validation for the first tab is performed before proceeding.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/tabediting-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/tabediting-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/tabediting-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/tabediting-cs1/app/datasource.tsx %}
{% endhighlight %}
{% highlight js tabtitle="tabOne.jsx" %}
{% raw %}
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
            <div className="form-group">
                <div className="e-float-input e-control-wrapper">
                    <input id="OrderID" name="OrderID" type="text" disabled={!data.isAdd} value={data.OrderID} onChange={this.onChange}/>
                    <span className="e-float-line"/>
                    <label className="e-float-text e-label-top"> Order ID</label>
                </div>
            </div>
        </div>
        <div className="form-row">
            <div className="form-group">
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

{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="tabOne.tsx" %}
{% raw %}

import { TabComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import { IOrderModel } from './orderModel';

export class TabOneComponent extends React.Component<{}, {}> {
    public tab: TabComponent | null;
    constructor(props: any) {
        super(props);
        this.state = Object.assign({}, props[0]);
        this.tab = props[1];
    }

    public onChange(args: React.ChangeEvent) {
        this.setState({[(args.target as HTMLInputElement).name]: (args.target as HTMLInputElement).value});
    }

    public next() {
        let valid: boolean = true;
        [].slice.call((document.getElementById('tab1') as HTMLElement).querySelectorAll('[name]'))
            .forEach((element: any) => {
                element.form.ej2_instances[0].validate(element.name);
                if (element.getAttribute('aria-invalid') === 'true'){
                    valid = false;
                }
        });
        if (!valid) {
        return
        }
        if (this.tab) {
            this.tab.select(1);
        }
    }

    public render(): any {
        this.onChange = this.onChange.bind(this);
        this.next = this.next.bind(this);
        const data: IOrderModel = this.state;
        return (<div id='tab1'>
        <div className="form-row">
            <div className="form-group">
                <div className="e-float-input e-control-wrapper">
                    <input id="OrderID" name="OrderID" type="text" disabled={!data.isAdd} value={data.OrderID} onChange={this.onChange} />
                    <span className="e-float-line"/>
                    <label className="e-float-text e-label-top"> Order ID</label>
                </div>
            </div>
        </div>
        <div className="form-row">
            <div className="form-group">
                <div className="e-float-input e-control-wrapper" >
                    <input value={data.CustomerID} id="CustomerName" name="CustomerID" type="text" onChange={this.onChange} />
                    <span className="e-float-line"/>
                    <label className="e-float-text e-label-top">Customer Name</label>
                </div>
            </div>
        </div>
        <div id='footer'> 
            <button id="nextBtn" className='e-info e-btn' type="button" style={{float: "right"}} onClick={this.next}>Next</button>
        </div>
    </div>);
    }
}
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="tabTwo.jsx" %}
{% raw %}
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
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="tabTwo.tsx" %}
{% raw %}
import { DataUtil } from '@syncfusion/ej2-data';
import { Grid } from '@syncfusion/ej2-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data as orderData } from './datasource';
import { IOrderModel } from './orderModel';

export class TabTwoComponent extends React.Component<{}, {}> {
    private shipCountryDistinctData: any = DataUtil.distinct(orderData, 'ShipCountry', true );
    private grid: Grid | null;
    constructor(props: any) {
        super(props);
        this.state = Object.assign({}, props[0]);
        this.grid = props[2];
    }

    public onChange(args: React.ChangeEvent) {
        this.setState({[(args.target as HTMLInputElement).name]: (args.target as HTMLInputElement).value});
    }

    public submit() {
        let valid: boolean = true;
        [].slice.call((document.getElementById('tab1') as HTMLElement).querySelectorAll('[name]'))
            .forEach((element: any) => {
            element.form.ej2_instances[0].validate(element.name);
            if (element.getAttribute('aria-invalid') === 'true'){
                valid = false;
            }
        });
        if (!valid) {
        return
        }
        if (this.grid) {
            this.grid.endEdit();
        }
    }

    public render(): any {
        this.submit = this.submit.bind(this);
        const data: IOrderModel = this.state;
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
            <button id="submitBtn" className="e-info e-btn" type="button" style={{float: "right"}} onClick={this.submit}>SUBMIT</button>
        </div>
    </div>);
    }
}
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="wizardTab.jsx" %}
{% raw %}
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import { TabOneComponent } from './tabOne';
import { TabTwoComponent } from './tabTwo';
export class DialogFormTemplate extends React.Component {
    grid;
    tab;
    constructor(props) {
        super(props);
        this.state = Object.assign({}, props[0]);
        this.grid = props[1];
    }
    tabOne() {
        const tab = [this.state, this.tab, this.grid];
        return (<TabOneComponent {...tab}/>);
    }
    tabTwo() {
        const tab = [this.state, this.tab, this.grid];
        return (<TabTwoComponent {...tab}/>);
    }
    next() {
        let valid = true;
        [].slice.call(document.getElementById('tab1')
            .querySelectorAll('[name]')).forEach((element) => {
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
    selecting(e) {
        {
            if (e.isSwiped) {
                e.cancel = true;
            }
            if (e.selectingIndex === 1) {
                e.cancel = !this.next();
            }
        }
    }
    render() {
        this.tabOne = this.tabOne.bind(this);
        this.tabTwo = this.tabTwo.bind(this);
        this.selecting = this.selecting.bind(this);
        return (<div>
             <TabComponent id='defaultTab' ref={t => this.tab = t} selecting={this.selecting}>
                <TabItemsDirective>
                    <TabItemDirective header={{ 'text': 'Details' }} content={this.tabOne}/>
                    <TabItemDirective header={{ 'text': 'Verify' }} content={this.tabTwo}/>
                </TabItemsDirective>
            </TabComponent>
        </div>);
    }
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="wizardTab.tsx" %}
{% include code-snippet/grid/tabediting-cs1/app/wizardTab.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/tabediting-cs1" %}
