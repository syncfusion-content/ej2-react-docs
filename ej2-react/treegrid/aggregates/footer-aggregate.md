---
layout: post
title: Footer aggregate | React Treegrid component | Syncfusion
description: Learn here all about footer aggregate in Syncfusion React Treegrid component, it's elements, and more.
control: Footer aggregate 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Footer aggregate in React Treegrid component

Footer aggregate value is calculated for all the rows, and it is displayed in the footer cells. Use the [`footerTemplate`](https://ej2.syncfusion.com/react/documentation/api/treegrid/aggregateColumnModel/#footertemplate) property to render the aggregate value in footer cells.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/aggregate-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/aggregate-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/aggregate-cs3" %}

> The aggregate values must be accessed inside the template using their corresponding [`type`](https://ej2.syncfusion.com/react/documentation/api/treegrid/aggregateColumnModel/#type) name.

## How to format aggregate value

You can format the aggregate value result by using the [`format`](https://ej2.syncfusion.com/react/documentation/api/treegrid/aggregateColumnModel/#format) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/aggregate-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/aggregate-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/aggregate-cs4" %}