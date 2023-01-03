---
layout: post
title: Template editing in React Grid component | Syncfusion
description: Learn here all about Template editing in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Template editing 
publishingplatform: React
documentation: ug
domainurl: ##DomainURL##
---

# Template editing in React Grid component

## Inline or dialog template editing

The Dialog/Inline template editing provides an option to customize the default behavior of dialog editing. Using the dialog template, you can render your own editors by defining the [`editSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#mode) as **Dialog/Normal** and [`editSetting.template`](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#template) as a React component.

In some cases, you need to add the new field editors in the dialog which are not present in the column model. In that situation, the dialog template will help you to customize the default edit dialog.

In the following sample, grid enabled with dialog template editing.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/editing-cs28/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/editing-cs28/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/editing-cs28" % }

> The Dialog/Inline template form editors should have **name** attribute.

## Template context

The template should be a React Component class. You can access the row information inside the Component class using **props**, you can bind the attribute or value based on this row information.

The following properties will be available at the time of template execution.

| Property Name | Usage |
|---------------|-------|
| <kbd>isAdd</kbd> | A Boolean property; it defines whether the current row should be a new record or not. |

In the following code example, the **OrderID** textbox has been disabled by using the **isAdd** property.

```
<!--The disabled attributes will be added based on the isAdd property.-->
<input id="OrderID" name="OrderID" type="text" disabled={!data.isAdd} value={data.OrderID} onChange={this.onChange} />

```

## Get value from editor

You can read, format, and update the current editor value in the [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event at the time of setting [`requestType`](https://ej2.syncfusion.com/angular/documentation/api/grid/saveEventArgs/#requesttype) to **save**.

In the following code example, the **Freight** value has been formatted and updated.

``` typescript
  const actionBegin = (args: DialogEditEventArgs) => {
    if (args.requestType === 'save' && args.form) {
      /** cast string to integer value */
      setValue('data.Freight',
        parseFloat((args.form.querySelector("#Freight") as HTMLInputElement).value), args);
    }
  }
```

## Set focus to editor

By default, the first input element in the dialog will be focused while opening the dialog.
If the first input element is in disabled or hidden state, focus the valid input element in the
[`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete)
event based on `requestType` as `beginEdit`.

```typescript

const actionComplete = (args: DialogEditEventArgs) => {
        // Set initail Focus
        if (args.requestType === 'beginEdit') {
            (args.form.elements.namedItem('CustomerID')as HTMLInputElement).focus();
        }
    }

```

## Adding validation rules for custom editors

If you have used additional fields that are not present in the column model, then add the validation rules to the [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event.

```typescript

  const actionComplete = (args: DialogEditEventArgs) => {
    if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
        /** Add Validation Rules */
        (args.form as HTMLFormElement).ej2_instances[0].addRules('Freight', {max: 500});
    }
  }

```

## Render tab component inside the dialog template

You can use [`tab`](../../../tab) component inside dialog edit UI using dialog template feature. The dialog template feature can be enabled by defining  [`editSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#mode) as `Dialog` and [`editSetting.template`](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#template) as a REACT Component.

The following example demonstrate the usage of tab control inside the dialog template.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/tabediting-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/tabediting-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/tabediting-cs1" % }