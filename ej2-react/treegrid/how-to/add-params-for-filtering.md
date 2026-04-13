---
layout: post
title: Add params for filtering in React TreeGrid | Syncfusion
description: Learn here all about Add params for filtering in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Add params for filtering 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Add params for filtering in React TreeGrid

Customize the default settings of the components used in the Menu filter by configuring the `params` of the column’s `filter` property.  

In the following example, TaskID and Duration are numeric columns. When the filter dialog opens, a NumericTextBox displays with a spin button to adjust the filter value. Using the `params` option, the spin button is hidden in the NumericTextBox for the TaskID column.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/refresh-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/refresh-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/refresh-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/refresh-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/refresh-cs1" %}

> Refer to the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for highlights. Explore the [React TreeGrid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.