---
layout: post
title: Column template in React Treegrid component | Syncfusion
description: Learn here all about Column template in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Column template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column template in React Treegrid component

The column [`template`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#template) has options to display custom element instead of a field value in the column.

You can check this video to learn about how to use templates for column(based on conditions) and headers in Tree Grid.
{% youtube "https://www.youtube.com/watch?v=o0rX1nkTINo" %}

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs8/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs8" %}

> The [`queryCellInfo`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#querycellinfo) event is not supported for template columns. Instead, use template function as described in the documentation (https://ej2.syncfusion.com/react/documentation/treegrid/columns/column-template#using-condition-template).

## Using condition template

You can render the template elements based on condition.

In the following code, checkbox is rendered based on *Approved* field value.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs9/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs9/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs9" %}