---
layout: post
title: Dialog editing in React Treegrid component | Syncfusion
description: Learn here all about Dialog editing in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Dialog editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Dialog editing in React Treegrid component

In Dialog edit mode, when you start editing the currently selected row, data will be shown on a dialog. You can change the cell values and save edited data to the data source. To enable Dialog edit, set the [`editSettings.mode`](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettingsModel/#mode) as **Dialog**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/editing-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/editing-cs5/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/editing-cs5" %}

## Customize edit dialog

The edit dialog in the TreeGrid allows you to customize its appearance and behavior based on the type of action being performed, such as editing or adding a record.

To customize the edit dialog, you need to handle the [actionComplete](https://ej2.syncfusion.com/react/documentation/api/treegrid/#actioncomplete) event of the TreeGrid and perform the necessary modifications based on the **requestType** parameter. The **requestType** parameter identifies the type of action being performed, such as **beginEdit** for editing a record or **add** for adding a new record.

The following example that demonstrates how to customize the edit dialog using the `actionComplete` event:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/customizedialog-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/customizedialog-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/customizedialog-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/customizedialog-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/customizedialog-cs1" %} 

## Use wizard like dialog editing

Wizard-like dialog editing is a powerful feature in the TreeGrid that enables the creation of intuitive step-by-step forms. This feature provides a structured approach to form completion or data entry by breaking down the process into manageable steps.This feature is particularly useful when you have complex forms that need to be broken down into smaller sections to guide you through the data entry process.

To achieve wizard-like dialog editing in the TreeGrid, you can use the dialog template feature. This feature allows you to define your own custom editing template using the [editSettings.mode](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettings/#mode) property set to **Dialog** and the [editSetting.template](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettings/#template) property to specify the template variable that defines the editors for each step of the wizard.

The following example demonstrate the wizard like editing in the TreeGrid with the unobtrusive validation.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/wizardediting-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/wizardediting-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/wizardediting-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/wizardediting-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/wizardediting-cs1" %}

## Using tab inside the dialog editing

You can use [tab](../../tab/getting-started) component inside dialog edit UI using dialog template feature. The dialog template feature can be enabled by defining [editSettings.mode](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettings/#mode) as **Dialog** and [editSetting.template](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettings/#template) as a react component.

The following example demonstrate the usage of tab control inside the dialog template.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/tabediting-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/tabediting-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/tabediting-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/tabediting-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/tabediting-cs1" %}