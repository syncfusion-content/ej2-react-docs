---
layout: post
title: Changing the pivotview component minimum height in React | Syncfusion
description: Learn here all about Changing the pivotview component minimum height in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Changing the pivotview component minimum height 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Changing the pivotview component minimum height in React

The `minHeight` property allows you to set the minimum height for the React Pivot Table component. By default, the component maintains a minimum height of **300px**. This property ensures the component remains visible and functional even when the container height is smaller than the specified minimum value.

When the content exceeds the minimum height, the component automatically adjusts to accommodate the data. This property is particularly useful for responsive layouts where the component needs to maintain usability across different screen sizes.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs156/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs156/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs156/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs156/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs156" %}