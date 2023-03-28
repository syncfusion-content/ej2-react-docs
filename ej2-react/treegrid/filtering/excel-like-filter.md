---
layout: post
title: Excel like filter in React Treegrid component | Syncfusion
description: Learn here all about Excel like filter in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Excel like filter 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Excel like filter in React Treegrid component

You can enable Excel like filter by defining [`filterSettings.type`](https://ej2.syncfusion.com/react/documentation/api/treegrid/filterSettingsModel/#type) as *Excel*. The excel menu contains an option such as Sorting, Clear filter, Sub menu for advanced filtering..

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/filtering-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/filtering-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs1" %}

## Change default filter operator

You can change the default excel-filter operator by changing the column operator as `contains` from `startsWith` in the [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#actionBegin) event

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/filtering-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/filtering-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs2" %}