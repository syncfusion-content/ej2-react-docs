---
layout: post
title: Template editing in React TreeGrid component | Syncfusion
description: Learn here all about Template editing in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Template editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Template editing in React TreeGrid component

## Dialog template

Dialog template editing customizes the default dialog editing behavior. Using the dialog template, custom editors can be rendered by setting [editSettings.mode](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettingsModel/#mode) to **Dialog** and [template](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettingsModel/#template) to a SCRIPT element ID or an HTML string that defines the template.

Some scenarios require adding field editors that are not present in the column model. In such cases, the dialog template provides full control to extend the default edit dialog.

The following video provides a quick overview:
{% youtube "https://www.youtube.com/watch?v=dOi4iNIf5M8" %}

The following sample enables dialog template editing in the TreeGrid.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/dialogtemplate-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/dialogtemplate-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="ordermodel.jsx" %}
{% include code-snippet/treegrid/dialogtemplate-cs1/app/orderModel.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="ordermodel.tsx" %}
{% include code-snippet/treegrid/dialogtemplate-cs1/app/orderModel.tsx %}
{% endhighlight %}
{% highlight js tabtitle="template.jsx" %}
{% include code-snippet/treegrid/dialogtemplate-cs1/app/template.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="template.tsx" %}
{% include code-snippet/treegrid/dialogtemplate-cs1/app/template.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/dialogtemplate-cs1" %}

> Template form editors must include a **name** attribute.

### Template context

The template is a React component class. Row information is available via props, enabling binding of attributes and values based on the current row context.

The following property is available during template execution.

| Property Name | Usage |
|---------------|-------|
| <kbd>isAdd</kbd> | A Boolean value that indicates whether the current row is a new record. |

In the following code example, the *OrderID* textbox is disabled based on the **isAdd** property.

```
// The disabled attributes will be added based on the isAdd property.
<input id="taskID" name="taskID" type="text" disabled={!data.isAdd} value={data.taskID} onChange={this.onChange} />

```

The following code example illustrates rendering the *taskID* textbox when a new record is added.

### Get value from editor

Read, format, and update the current editor value in the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/treegrid/#actionbegin) event when **requestType** is **save**.

In the following code example, the *progress* value is formatted and updated.

```ts
    const actionBegin = (args: DialogEditEventArgs) => {
        if (args.requestType === 'save') {
            // cast string to integer value.
            const val: string = ((args.form as HTMLFormElement)
                .querySelector("#progress") as HTMLInputElement).value;
            setValue('data.progress', parseFloat(val), args);
        }
    }

```

### Set focus to editor

By default, the first input element in the dialog receives focus when the dialog opens. If the first input is disabled or hidden, move focus to a valid input in the [actionComplete](https://ej2.syncfusion.com/react/documentation/api/treegrid/#actioncomplete) event when **requestType** is *beginEdit*.

```ts

    const actionComplete = (args: DialogEditEventArgs) => {
       if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            const form: HTMLFormElement = args.form as HTMLFormElement;
            if (args.requestType === 'beginEdit') {
                (form.elements.namedItem('taskName') as HTMLInputElement).focus();
            }
       }
    }

```

### Adding validation rules for custom editors

When additional fields not defined in the column model are used, add validation rules for them in the [actionComplete](https://ej2.syncfusion.com/react/documentation/api/treegrid/#actioncomplete) event.

```ts

    const actionComplete = (args: DialogEditEventArgs) => {
       if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
           // Add Validation Rules
            const form: HTMLFormElement = args.form as HTMLFormElement;
            form.ej2_instances[0].addRules('progress', {max: 100});
       }
    }


```