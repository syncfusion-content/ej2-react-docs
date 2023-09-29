---
layout: post
title: Reordering on grouped columns in React Grid component | Syncfusion
description: Learn here all about Reordering on grouped columns in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Reordering on grouped columns 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Reordering on grouped columns in React Grid component

Grid provides an option to interchange the position of the Grouped Columns by dragging and dropping the grouped headercells in the droparea. So, any new column entering into the droparea can also be dropped in any position.

To enable this feature, you have to set the [groupSettings.allowReordering](https://ej2.syncfusion.com/react/documentation/api/grid/groupSettings/#allowReordering) property as **true**.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/group-reorder-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/group-reorder-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/group-reorder-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/group-reorder-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/group-reorder-cs1" %}