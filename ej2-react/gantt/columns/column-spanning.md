---
layout: post
title: Column spanning in React Gantt component | Syncfusion
description: Learn here all about Column spanning in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Column spanning 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column spanning in React Gantt component

The gantt has option to span the adjacent cells. You need to define the [`colSpan`](https://ej2.syncfusion.com/react/documentation/api/gantt/queryCellInfoEventArgs/#colspan) attribute to span cells in the [`QueryCellInfo`](https://ej2.syncfusion.com/react/documentation/api/gantt/queryCellInfoEventArgs) event. In the following demo, **Work 1** cells have been spanned.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/column-span-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/column-span-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/column-span-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/column-span-cs1" %}