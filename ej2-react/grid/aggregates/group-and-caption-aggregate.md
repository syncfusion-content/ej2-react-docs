---
layout: post
title: Group and caption aggregate in React Grid component | Syncfusion
description: Learn here all about Group and caption aggregate in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Group and caption aggregate 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Group and caption aggregate in React Grid component

Group and caption aggregate values are calculated from the current group items.
If [`groupFooterTemplate`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn/#groupfootertemplate) is provided, the aggregate values are displayed in the group footer cells; and if [`groupCaptionTemplate`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn/#groupcaptiontemplate)
 is provided, aggregate values are displayed in the group caption cells.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/aggregate-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/aggregate-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/aggregate-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/aggregate-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/aggregate-cs5" % }

> The aggregate values must be accessed inside the template using their corresponding [`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn/#type)
name.