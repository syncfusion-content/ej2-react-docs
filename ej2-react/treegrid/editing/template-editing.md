---
layout: post
title: Template editing in React Treegrid component | Syncfusion
description: Learn here all about Template editing in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Template editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Template editing in React Treegrid component

## Dialog template

The dialog template editing provides an option to customize the default behavior of dialog editing. Using the dialog template, you can render your own editors by defining the [`editSettings.mode`](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettingsModel/#mode) as **Dialog** and [`template`](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettingsModel/#template) as SCRIPT element ID or HTML string which holds the template.

In some cases, you need to add the new field editors in the dialog which are not present in the column model. In that situation, the dialog template will help you to customize the default edit dialog.

For quick details with dialog template, you can check on this video:
{% youtube "https://www.youtube.com/watch?v=dOi4iNIf5M8" %}

In the following sample, treegrid enabled with dialog template editing.

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

> The template form editors should have **name** attribute.

### Template context

The template should be a React Component class. You can access the row information inside the Component class using *props*, you can bind the attribute or value based on this row information.

The following properties will be available at the time of template execution.

| Property Name | Usage |
|---------------|-------|
| <kbd>isAdd</kbd> | A Boolean property; it defines whether the current row should be a new record or not. |

In the following code example, the *OrderID* textbox has been disabled by using the **isAdd** property.

```
// The disabled attributes will be added based on the isAdd property.
<input id="taskID" name="taskID" type="text" disabled={!data.isAdd} value={data.taskID} onChange={this.onChange} />

```

The following code example illustrates rendering the *taskID* textbox, when a new record is added.

### Get value from editor

You can read, format, and update the current editor value in the [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#actionbegin) event at the time of setting **requestType** to **save**.

In the following code example, the *progress* value has been formatted and updated.

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

By default, the first input element in the dialog will be focused while opening the dialog. If the first input element is in disabled or hidden state, focus the valid input element in the [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#actioncomplete) event based on **requestType** as *beginEdit*.

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

If you have used additional fields that are not present in the column model, then add the validation rules to them in the [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#actioncomplete) event.

```ts

    const actionComplete = (args: DialogEditEventArgs) => {
       if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
           // Add Validation Rules
            const form: HTMLFormElement = args.form as HTMLFormElement;
            form.ej2_instances[0].addRules('progress', {max: 100});
       }
    }


```