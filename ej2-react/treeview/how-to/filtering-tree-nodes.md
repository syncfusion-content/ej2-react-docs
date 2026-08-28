---
layout: post
title: How to filter tree nodes in React Tree View | Syncfusion
description: Search and filter the Syncfusion React TreeView nodes by typing a search term that matches the fields.text value.
control: Filtering tree nodes 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to filter tree nodes in React Tree View

You can filter the tree nodes based on their text by combining the TreeView's [`fields`](https://ej2.syncfusion.com/react/documentation/api/treeview#fields) configuration with the [`DataManager`](https://ej2.syncfusion.com/react/documentation/data/getting-started) plugin (typically by re-querying the data and replacing the bound data source whenever the search text changes).

The following code example demonstrates how to filter the tree nodes in a TreeView.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tree-view/filtering-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tree-view/filtering-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.html" %}
{% include code-snippet/tree-view/filtering-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="style.css" %}
{% include code-snippet/tree-view/filtering-cs1/style.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tree-view/filtering-cs1" %}