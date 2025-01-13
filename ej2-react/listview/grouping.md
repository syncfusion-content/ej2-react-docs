---
layout: post
title: Grouping in React Listview component | Syncfusion
description: Learn here all about Grouping in Syncfusion React Listview component of Syncfusion Essential JS 2 and more.
control: Grouping 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in React Listview component

ListView supports wrapping nested elements into groups based on categories.

The category of each list item can be mapped using the [`groupBy`](https://ej2.syncfusion.com/react/documentation/api/list-view/fieldSettingsModel/#groupby) field in the data table, which also supports single-level navigation.

In the sample below, cars are grouped based on their categories using the `groupBy` field.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/grouping-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/grouping-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/listview/grouping-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/listview/grouping-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/grouping-cs1" %}

## Customization

The grouping header can be customized using the [`groupTemplate`](https://ej2.syncfusion.com/react/documentation/api/list-view/#grouptemplate) property for both inline and fixed group headers. The complete customization description and explanation, along with an example, are given in the following link.

[`Group Template`](https://ej2.syncfusion.com/react/documentation/listview/customizing-templates#group-template)