---
layout: post
title: Refresh the field list in React Pivotview component | Syncfusion
description: Learn here all about Refresh the field list in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Refresh the field list 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Refresh the field list in React Pivot Table component

The React Pivot Table component allows dynamic data source updates, enabling you to refresh both the pivot table and field list with new data at runtime. This approach is especially useful in scenarios where data changes frequently or when switching between different datasets without reinitializing the entire component.

## Implementation

The following code example demonstrates how to refresh the Pivot Table and field list with new data using an external button click. The implementation involves clearing the existing field list cache by resetting the `fieldList` object and updating the data source with a new dataset. This approach ensures that the component recognizes structural changes in the data and rebuilds the field list accordingly.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs167/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs167/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs167" %}