---
layout: post
title: How to in React Pivotview component | Syncfusion
description: Learn here all about How to in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: How to 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to in React Pivotview component

## Member Editor

### Load limited data in Member Editor

In the filter dialog, user can set the limit to display field values while loading the large data. Based on this limit, the initial loading will complete quickly without any performance constraint. And user can use search option to refining the field values from exceeded limit. You can refine the data further by using search option and a message with the remaining data count will be displayed in member editor. The data limit can be set in the property `maxNodeLimitInEditor`.

By default, the property holds the value `1000`.

> The property is available in both Pivot Grid and Field List components.

In the below example, the data in the member editor limits to 100. So, the member editor of the field `ProductID` shows only its first 100 members from its 1000 members.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-grid/default-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-grid/default-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs1" %}
