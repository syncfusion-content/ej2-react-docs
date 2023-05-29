---
layout: post
title: Row height in React Treegrid component | Syncfusion
description: Learn here all about Row height in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Row height 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row height in React Treegrid component

You can customize the row height of treegrid rows through the [`rowHeight`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowheight) property. The **rowHeight** property is used to change the row height of entire treegrid rows.

In the below example, the **rowHeight** is set as *60px*.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/rows-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/rows-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/rows-cs1" %}

## Customize row height for particular row

TreeGrid row height for particular row can be customized using the [`rowDataBound`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowdatabound) event by setting the **rowHeight** in arguments for each row based on the requirement.

In the below example, the row height for the row with Task ID as *3* is set as *90px* using the **rowDataBound** event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/rows-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/rows-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/rows-cs2" %}