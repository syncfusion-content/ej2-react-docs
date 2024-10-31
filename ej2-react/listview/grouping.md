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

ListView supports to wrap the nested element into a group based on category.

The category of each list item can be mapped with [`groupBy`](https://ej2.syncfusion.com/react/documentation/api/list-view/fieldSettingsModel/#groupby) field in the data table, which also supports single-level navigation.

In below sample, Cars are grouped based on its category using groupBy field.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/grouping-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/grouping-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/grouping-cs1" %}

## Customization

The grouping header can be customized by using [`groupTemplate`](https://ej2.syncfusion.com/react/documentation/api/list-view/#grouptemplate) property for both inline and fixed group header.