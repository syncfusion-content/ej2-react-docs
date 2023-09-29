---
layout: post
title: Row height in React Grid component | Syncfusion
description: Learn here all about Row height in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Row height 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row height in React Grid component

You can customize the row height of grid rows through the [rowHeight](https://ej2.syncfusion.com/react/documentation/api/grid/#rowheight) property. The **rowHeight** property is used to change the row height of entire grid rows.

In the following example, the **rowHeight** is set as '60px'.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/rows-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/rows-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/rows-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/rows-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/rows-cs2" %}

## Customize row height for particular row

Grid row height for a particular row can be customized using the [rowDataBound](https://ej2.syncfusion.com/react/documentation/api/grid/#rowdatabound) event by setting the **rowHeight** in arguments for each row based on the requirement.

In the following example, the row height for the row with OrderID '10249' is set as '90px' using the **rowDataBound** event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/rows-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/rows-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/rows-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/rows-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/rows-cs3" %}

> * In virtual scrolling mode, it is not applicable to set the **rowHeight** using the **rowDataBound** event.