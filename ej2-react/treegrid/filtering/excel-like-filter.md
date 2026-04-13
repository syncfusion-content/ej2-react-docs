---
layout: post
title: Excel like filter in React TreeGrid component | Syncfusion
description: Learn here all about Excel like filter in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Excel like filter 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Excel like filter in React TreeGrid

Enable the Excel like filter by setting [filterSettings.type](https://ej2.syncfusion.com/react/documentation/api/treegrid/filterSettingsModel/#type) to `Excel`. The Excel filter menu adapts to the column type and provides options such as sorting, clear filter, and an advanced filtering submenu.

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

Change the default Excel filter operator during actions. For example, switch string columns from `startsWith` to `contains` in the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/treegrid/#actionbegin) event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/filtering-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/filtering-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/filtering-cs2" %}