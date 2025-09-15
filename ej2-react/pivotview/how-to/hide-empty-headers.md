---
layout: post
title: Hide empty headers in React Pivotview component | Syncfusion
description: Learn here all about Hide empty headers in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Hide empty headers 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Hide empty headers in the React Pivot Table component

When the raw data for a particular field is not defined, it will be shown as 'Undefined' in the pivot table headers. You can hide those headers by setting the [`showHeaderWhenEmpty`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#showheaderwhenempty) property to **false** in the pivot table.

For example, when the raw data contains **"United Kingdom"** for the 'Country' field but the **"State"** field is undefined, the header displays as **"United Kingdom >> Undefined"**. Here, you can hide those 'Undefined' headers using the [`showHeaderWhenEmpty`](https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettingsModel/#showheaderwhenempty) property.

> By default, this property is set to **true**.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs165/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs165/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs165/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs165/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs165" %}