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

The cascading DropDownList is a series of DropDownList, where the value of one DropDownList depends upon  another's value. This can be configured by using the [`change`](https://ej2.syncfusion.com/react/documentation/api/combo-box/#change) event of the parent DropDownList. Within that change event handler, data has to be loaded to the child DropDownList based on the selected value of the parent DropDownList.

The following example, shows the cascade behavior of country, state, and city DropDownList. Here, the `dataBind` method is used to reflect the property changes immediately to the DropDownList.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs31/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs31/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs31" %}
