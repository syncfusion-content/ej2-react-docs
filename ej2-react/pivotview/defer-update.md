---
layout: post
title: Defer update in React Pivotview component | Syncfusion
description: Learn here all about Defer update in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Defer update 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Defer update in React Pivotview component

Defer layout update support allows to update the pivot table component only on demand. On enabling this feature, end user can drag-and-drop fields between row, column, value and filter axes, apply sorting and filtering inside the Field List, resulting in change of pivot report alone but not the pivot table values. Once all operations are performed and on clicking the "Apply" button in the Field List, pivot table will start to update with the last modified report. This also helps in bringing better performance in pivot table component rendering.

The field list can be displayed in two different formats to interact with pivot table. They are:

* **In-built Field List (Popup)**: To display the field list icon in pivot table UI to invoke the built-in dialog.
* **Stand-alone Field List (Fixed)**: To display the field list in a static position within a web page.

## In-built Field List (Popup)

To enable deferred updates in the pivot table, set the property [`allowDeferLayoutUpdate`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#allowdeferlayoutupdate) as **true** in [`PivotView`](https://ej2.syncfusion.com/react/documentation/api/pivotview/). To make a note, the defer update option can be controlled only via Field List during runtime.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs41/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs41/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs41" %}

## Stand-alone Field List (Fixed)

The field list can be rendered in a static position, anywhere in web page layout, like a separate component. To do so, you need to set [`renderMode`](https://ej2.syncfusion.com/react/documentation/api/pivotfieldlist/pivotFieldListModel/#rendermode) property to **Fixed** in PivotFieldList.

To enable deferred updates in the static fieldlist, set the property [`allowDeferLayoutUpdate`](https://ej2.syncfusion.com/react/documentation/api/pivotfieldlist/pivotFieldListModel/#allowdeferlayoutupdate) in [`PivotFieldlist`](https://ej2.syncfusion.com/react/documentation/api/pivotfieldlist) as **true**. To make a note, the defer update option can be controlled only via Field List during runtime.

> To make field list interact with pivot table, you need to use the **UpdateView** and **Update** methods for data source update in both field list and pivot table simultaneously.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs42/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs42/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs42" %}