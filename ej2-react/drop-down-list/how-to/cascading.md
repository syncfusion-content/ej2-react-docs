---
layout: post
title: Cascading in React Drop down list component | Syncfusion
description: Learn here all about Cascading in Syncfusion React Drop down list component of Syncfusion Essential JS 2 and more.
control: Cascading 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Cascading in React Drop down list component

A cascading DropDownList is a series of interdependent DropDownLists where the value of one DropDownList depends on the selection in another. Configure this behavior using the [`change`](https://ej2.syncfusion.com/react/documentation/api/combo-box/#change) event of the parent DropDownList. In the change event handler, load data into the child DropDownList based on the parent's selected value.

The following example demonstrates cascading behavior using country, state, and city DropDownLists. The `dataBind` method reflects property changes immediately to the DropDownList.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs31/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs31/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs31" %}
