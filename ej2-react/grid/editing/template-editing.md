---
layout: post
title: Template editing in React Grid component | Syncfusion
description: Learn here all about Template editing in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Template editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Template editing in React Grid component

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component supports template editing, providing a powerful and flexible way to customize the appearance and behavior of cells during editing. This feature allows you to use React templates to define the structure and content of the cells within the grid.

## Inline or dialog template editing 

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid provides support for inline and dialog template editing, allowing you to customize the editing using [Forms](https://legacy.reactjs.org/docs/forms.html). These forms can be utilized to add and update grid records.

To enable this feature, you need to set the [editSettings.mode](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings/#mode) property of the Grid to either **Normal** or **Dialog** and define the grid editors using the **editSettingsTemplate** template variable of **template**.

**Using Forms**

Forms is a approach to create and manipulate the form controls. You can use form to add and update grid records. To use forms for editing operation, you can take leverage of the template support of dialog or inline edit mode. Setting the [`editSettings.mode`](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings/#mode) as **Normal/Dialog** and **editSettingsTemplate** as template variable to define the grid editors.

In some cases, you want to add new field editors in the dialog which are not present in the column model. In that situation the dialog template will help us to customize the default edit dialog.

In the following sample, grid enabled with dialog template editing.

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
                    <DropDownListComponent id="ShipCountry" value={data.ShipCountry} dataSource={this.shipCountryDistinctData} fields={{ text: 'ShipCountry', value: 'ShipCountry' }} placeholder="Ship Country" popupHeight='300px' floatLabelType='Always'/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <div className="e-float-input e-control-wrapper">
                        <textarea id="ShipAddress" name="ShipAddress" value={data.ShipAddress} onChange={this.onChange}/>
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

> The Dialog/Inline template form editors should have **name** attribute.

## Using template context

You can enhance the customization of your grid's edit forms by utilizing template contexts, such as accessing row details inside template, rendering editors as components, getting values from editors, setting focus to editors, and disabling default form validation, and adding custom validation. These features are applicable in both **inline** and **dialog** editing modes.

The following template context topics are demonstrated through a practical example in the [Render tab component inside the dialog template](https://ej2.syncfusion.com/react/documentation/grid/editing/template-editing#render-tab-component-inside-the-dialog-template) topic.

### Access row details inside template using template context

When utilizing edit templates in the Grid , you can access crucial row information within an ngTemplate when utilizing edit templates. This enables dynamic binding of attributes, values, or elements based on the specific row being edited. This is particularly useful for conditionally rendering or modifying elements in the edit template based on the row's state.

The following properties will be available at the time of template execution:

| Property Name | Usage |
|---------------|-------|
| <kbd>isAdd</kbd> | A Boolean property that defines whether the current row is a new record or not. |

The following code example demonstrates the usage of the `isAdd` property in an edit template to disable the **OrderID** textbox when it's not a new record:

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

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid provides a powerful feature that allows you to dynamically render Syncfusion<sup style="font-size:70%">&reg;</sup> EJ2 controls as form editors during the editing process. This functionality is particularly useful when you want to provide feature-rich controls for data entry within the edit form.

To achieve this by utilizing the [actionComplete](https://ej2.syncfusion.com/react/documentation/api/grid/#actioncomplete) event of the Grid and specifying `requestType` as **beginEdit** or **add**.

The following code example illustrates rendering the `DropDownList` component in the `actionComplete` event.

```typescript

const actionComplete = (args: DialogEditEventArgs) => {
  if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
      let countryData: {}[] = DataUtil.distinct(data, 'ShipCountry', true) ;
      new DropDownList({value: args.rowData.ShipCountry, popupHeight: '200px', floatLabelType: 'Always',
          dataSource: countryData, fields: {text: 'ShipCountry', value: 'ShipCountry'}, placeholder: 'Ship Country'}, args.form.elements.namedItem('ShipCountry') as HTMLInputElement);
  }
}

```

### Get value from editor

The get value from editor feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid allows you to read, format, and update the current editor value before it is saved. This feature is particularly valuable when you need to perform specific actions on the data, such as formatting or validation, before it is committed to the underlying data source. 

To achieve this feature, you can utilize the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid/#actionbegin) event with the **requestType** set to **save**.

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

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid allows you to control the focus behavior of input elements in edit forms. By default, the first input element in the dialog receives focus when the dialog is opened. However, in scenarios where the first input element is disabled or hidden, you can specify which valid input element should receive focus. This can be achieved using the [actionComplete](https://ej2.syncfusion.com/react/documentation/api/grid/#actioncomplete) event of the Grid,  where the **requestType** is set to **beginEdit**.

In the following code example, the CustomerID column focused.

```typescript
    const actionComplete = (args: DialogEditEventArgs) => {
        // Set initail Focus
        if (args.requestType === 'beginEdit') {
            ((args.form as HTMLFormElement).elements.namedItem('CustomerID') as HTMLInputElement).focus();
        }
    }
```

## Disable default form validation

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid provides built-in support for [react form validation](https://react-bootstrap.netlify.app/docs/forms/validation/) to ensure data integrity and accuracy during editing. However, there might be scenarios where you want to disable the default form validation rules. This can be achieved using the [removeRules](https://helpej2.syncfusion.com/documentation/api/form-validator/#removerules) method within the [actionComplete](https://ej2.syncfusion.com/react/documentation/api/grid/#actioncomplete) event of the Grid.

To disable default form validation rules in the Grid, follow these steps:

```typescript

    const actionComplete = (args: DialogEditEventArgs) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Disable the Validation Rules
            (args.form as HTMLFormElement)['ej2_instances'][0].removeRules();
        }
    }

```

> You can use this method to disable validation rules: **args.form.ej2_instances[0].rules = {}**.

## Adding validation rules for custom editors

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid provides the ability to add validation rules for fields that are not present in the column model. This feature is particularly useful to prevent erroneous or inconsistent data from being submitted, ultimately enhancing the reliability of your application's data.

To accomplish this, you can utilize the [actionComplete](https://ej2.syncfusion.com/react/documentation/api/grid/#actioncomplete) event along with the [addRules](https://ej2.syncfusion.com/documentation/api/form-validator/#addrules) method.

Here's how you can use the `addRules` method to add validation rules for custom editors in the `actionComplete` event: 

```typescript

    const actionComplete = (args: DialogEditEventArgs) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Add Validation Rules
            (args.form as HTMLFormElement)['ej2_instances'][0].addRules('Freight', { max: 500 });
        }
    }

```

## Render tab component inside the dialog template

You can enhance the editing experience in the Grid by rendering a [Tab](../../../tab/index.html) component inside the dialog template. This feature is especially useful when you want to present multiple editing sections or categories in a tabbed layout, ensuring a more intuitive and easily navigable interface for data editing.

To enable this functionality, you need to set the [editSettings.mode](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings/#mode) property of the Grid to **Dialog**. This configures the Grid to use the dialog editing mode. Additionally, you can use the [editSettingsTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings/#template) property to define a template variable that contains the `Tab` component and its corresponding content.

The following example renders a tab component inside the edit dialog. The tab component has two tabs, and once you fill in the first tab and navigate to the second one, the validation for the first tab is performed before navigating to the second.

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