---
layout: post
title: Cascading in React Multi select component | Syncfusion
description: Learn here all about Cascading in Syncfusion React Multi select component of Syncfusion Essential JS 2 and more.
control: Cascading 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Cascading in React Multi select component

The cascading MultiSelect is a series of MultiSelect, where the value of one MultiSelect depends upon  another's value. This can be configured by using the [`change`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#change) event of the parent MultiSelect. Within that change event handler, data has to be loaded to the child MultiSelect based on the selected value of the parent MultiSelect.

The following example, shows the cascade behavior of country, state, and city MultiSelect. Here, the `dataBind` method is used to reflect the property changes immediately to the MultiSelect.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/basic-cs29/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/basic-cs29/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/basic-cs29" %}