---
layout: post
title: Filter menu in React Gantt component | Syncfusion
description: Learn here all about Filter menu in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Filter menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Filter menu in React Gantt component

The Gantt component provides menu-filtering support for each column. You can enable the filter menu by setting the [`allowFiltering`](https://ej2.syncfusion.com/react/documentation/api/gantt/#allowfiltering) to `true`. The filter menu UI will be rendered based on its column type, which allows you to filter data. You can filter the records with different operators.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/filtering-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/filtering-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/filtering-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/filtering-cs2" %}

>The [`allowFiltering`](https://ej2.syncfusion.com/react/documentation/api/gantt/#allowfiltering) property should be set to `true` to enable the filter menu.
>Setting the [`columns.allowFiltering`](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#allowfiltering) property to `false` prevents rendering the filter menu for a particular column.