---
layout: post
title: Responsive columns in React Gantt component | Syncfusion
description: Learn here all about Responsive columns in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Responsive columns 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Responsive columns in React Gantt component

You can toggle the column visibility based on media queries, which are defined in the [`hideAtMedia`](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#hideatmedia). The [`hideAtMedia`](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#hideatmedia) accepts valid [Media Queries]( http://cssmediaqueries.com/what-are-css-media-queries.html ).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/column-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/column-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/column-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/column-cs1" %}

## Change tree/expander column

The tree/expander column is a column in the Gantt component, that has icons to expand or collapse the parent records. You can define the tree column index in the Gantt component by using the [`treeColumnIndex`](https://ej2.syncfusion.com/react/documentation/api/gantt/#treecolumnindex) property and the default value of this property is `0`. The following code example shows how to use this property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/treecolumnindex-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/treecolumnindex-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/treecolumnindex-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/treecolumnindex-cs1" %}

## Show or Hide columns dynamically

You can show or hide gantt columns dynamically using external buttons by invoking the [`showColumn`](https://ej2.syncfusion.com/react/documentation/api/gantt/#showcolumn) or [`hideColumn`](https://ej2.syncfusion.com/react/documentation/api/gantt/#hidecolumn) method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/show-hide-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/show-hide-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/show-hide-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/show-hide-cs1" %}