---
layout: post
title: Dialog editing in React TreeGrid component | Syncfusion
description: Learn here all about Dialog editing in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Dialog editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Dialog editing in React TreeGrid

In dialog edit mode, starting an edit on the selected row displays the row data in a dialog. Modify the values and save the changes to the data source. Enable dialog edit by setting [editSettings.mode](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettingsModel/#mode) to **Dialog**.

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

The edit dialog can be customized based on the action type (editing or adding). Handle the [actionComplete](https://ej2.syncfusion.com/react/documentation/api/treegrid/#actioncomplete) event and apply changes according to the `requestType` value (for example, **beginEdit** for editing a record or **add** for adding a new record).

The following example demonstrates customizing the edit dialog using the `actionComplete` event:

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

Wizard-like dialog editing in TreeGrid enables the creation of structured, step-by-step forms for streamlined data entry. This approach simplifies complex form workflows by dividing them into manageable sections, allowing for progressive completion of each part.

To implement wizard-style editing, configure the TreeGrid with the [editSettings.mode](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettings/#mode) property set to **Dialog**, and define a custom template using the `editSettings.template` property. This template can include multiple steps, each representing a distinct section of the form, and can be enhanced with unobtrusive validation to ensure data accuracy throughout the process.


The following example demonstrates wizard-like dialog editing with unobtrusive validation:

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

## Using Tab inside the dialog editing

The [Tab](../../tab/getting-started) component can be used inside the dialog edit UI via the dialog template feature. Enable the feature by setting [editSettings.mode](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettings/#mode) to **Dialog** and [editSettings.template](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettings/#template) to a react component.

The following example demonstrates using Tab inside the dialog template:

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