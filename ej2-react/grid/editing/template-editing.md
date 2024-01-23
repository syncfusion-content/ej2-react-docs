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

## Inline or Dialog template forms

[Forms](https://legacy.reactjs.org/docs/forms.html) is a approach to create and manipulate the form controls. You can use form to add and update grid records. To use forms for editing operation, you can take leverage of the template support of dialog or inline edit mode. Setting the [`editSettings.mode`](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings/#mode) as **Normal/Dialog** and **editSettingsTemplate** as template variable to define the grid editors.

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
{% include code-snippet/grid/editing-cs28/app/template.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="template.tsx" %}
{% include code-snippet/grid/editing-cs28/app/template.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs28" %}

> The Dialog/Inline template form editors should have **name** attribute.

## Template context

While using the edit template, you can access the row information inside the NgTemplate and you can bind the attributes or values or elements based on this row information.

The following properties will be available at the time of template execution.

| Property Name | Usage |
|---------------|-------|
| <kbd>isAdd</kbd> | A Boolean property; it defines whether the current row should be a new record or not. |

In the following code example, the **OrderID** textbox has been disabled by using the **isAdd** property.

```ts
// The disabled attributes will be added based on the isAdd property.
<input id="OrderID" name="OrderID" type="text" disabled={!data.isAdd} value={props.OrderID} onChange={onChange} />

```

The following code example illustrates rendering the **OrderID** textbox, when a new record is added.

```ts
<div className="form-group col-md-6">
  {data.isAdd && (
    <div className="e-float-input e-control-wrapper">
      <input id="OrderID" name="OrderID" type="text" disabled={!data.isAdd} value={props.OrderID} onChange={onChange} />
      <span className="e-float-line"></span>
      <label className="e-float-text e-label-top" htmlFor="OrderID">Order ID</label>
    </div>
  )}
</div>
```

## Set focus to editor

By default, the first input element in the dialog will be focused while opening the dialog. If the first input element is in disabled or hidden state then you need to focused the valid input element in the [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/grid/#actioncomplete) event based on **requestType** as **beginEdit**.

```typescript

    const actionComplete = (args: DialogEditEventArgs) => {
        // Set initial Focus
        if (args.requestType === 'beginEdit') {
            (args.form.elements.namedItem('CustomerID')as HTMLInputElement).focus();
        }
    }

```

## Disable form validation

If you need to disable the default validation rules in  the [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/grid/#actioncomplete) event.

```typescript

    const actionComplete = (args: DialogEditEventArgs) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Disable the Validation Rules
            args.form.ej2_instances[0].rules = {};
        }
    }

```

## Adding validation rules for custom editors

If you have interested to use our default form validation, the validation rules for the fields which are not present in the column model need to be add in  the [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/grid/#actioncomplete) event.

```typescript

    const actionComplete = (args: DialogEditEventArgs) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Add Validation Rules
            args.form.ej2_instances[0].addRules('Freight', {max: 500});
        }
    }

```

## Render tab component inside the dialog template

You can use [Tab](../../../tab/index.html) component inside dialog edit UI using dialog template feature. The dialog template feature can be enabled by defining  [editSettings.mode](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings/#mode) as `Dialog` and [editSettingsTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings/#template) as template variable to define the editors.

To include tab components in the Dialog, please ensure the following steps:

**Step 1**: To render the Tab component, use the [editSettingsTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/editSettings/#template) of the Grid. Inside the content template of the tab items define the input elements.

```ts
<TabComponent id='defaultTab' ref={t => this.tab = t} selecting={this.selecting}>
    <TabItemsDirective>
        <TabItemDirective header= { { 'text': 'Details' } } content={this.tabOne} />
        <TabItemDirective header= { { 'text': 'Verify' } } content={this.tabTwo}/>
    </TabItemsDirective>
</TabComponent>
```

```ts
<div id='tab1'>
  <div className="form-row">
    <div>
      <div className="e-float-input e-control-wrapper">
        <input id="OrderID" name="OrderID" type="text" disabled={!data.isAdd} value={data.OrderID} onChange={this.onChange} />
        <span className="e-float-line"/>
        <label className="e-float-text e-label-top"> Order ID</label>
      </div>
    </div>
  </div>
  <div className="form-row">
    <div>
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
</div>
```

```ts
div id='tab2'>
  <div className="form-row">
    <div>
      <DropDownListComponent id="ShipCountry" value={data.ShipCountry} dataSource={this.shipCountryDistinctData} fields={{ text: 'ShipCountry', value: 'ShipCountry' }} placeholder="Ship Country" popupHeight='300px' floatLabelType='Always'/>
    </div>
  </div>
  <div className="form-row">
    <div>
      <CheckBoxComponent name="Verified" id="Verified" label="Verified" checked={data.Verified}/>
    </div>
  </div>
  <div id='footer'>   
    <button id="submitBtn" className="e-info e-btn" type="button" style={{float: "right"}} onClick={this.submit}>SUBMIT</button>
  </div>
</div>
```

The following example, we have rendered tab control inside the edit dialog. The tab control has two tabs and once you fill the first tab and navigate to second one. The validation for first tab was done before navigate to second.

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
{% include code-snippet/grid/tabediting-cs1/app/tabOne.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="tabOne.tsx" %}
{% include code-snippet/grid/tabediting-cs1/app/tabOne.tsx %}
{% endhighlight %}
{% highlight js tabtitle="tabTwo.jsx" %}
{% include code-snippet/grid/tabediting-cs1/app/tabTwo.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="tabTwo.tsx" %}
{% include code-snippet/grid/tabediting-cs1/app/tabTwo.tsx %}
{% endhighlight %}
{% highlight js tabtitle="wizardTab.jsx" %}
{% include code-snippet/grid/tabediting-cs1/app/wizardTab.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="wizardTab.tsx" %}
{% include code-snippet/grid/tabediting-cs1/app/wizardTab.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/tabediting-cs1" %}