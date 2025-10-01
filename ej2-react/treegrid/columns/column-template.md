---
layout: post
title: Column template in React TreeGrid component | Syncfusion
description: Learn here all about Column template in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Column template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column template in React TreeGrid component

The column [template](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#template) option renders custom content in place of a field value within a column.

Watch the following video to learn how to use templates for columns (including conditional templates) and headers in the TreeGrid.
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

> The [queryCellInfo](https://ej2.syncfusion.com/react/documentation/api/treegrid/#querycellinfo) event is not supported for template columns. Instead, define logic within the column template function as described in the documentation (https://ej2.syncfusion.com/react/documentation/treegrid/columns/column-template#using-condition-template).

## Using condition template

Template elements can be rendered based on conditions.

In the following example, a checkbox is rendered according to the value of the **Approved** field.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs9/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs9/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs9" %}