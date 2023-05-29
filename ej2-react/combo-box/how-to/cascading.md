---
layout: post
title: Cascading in React Combo box component | Syncfusion
description: Learn here all about Cascading in Syncfusion React Combo box component of Syncfusion Essential JS 2 and more.
control: Cascading 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Cascading in React Combo box component

The cascading ComboBox is a series of ComboBox, where the value of one ComboBox depends upon  another's value. This can be configured by using the [`change`](https://ej2.syncfusion.com/react/documentation/api/combo-box/#change) event of the parent ComboBox. Within that change event handler, data has to be loaded to the child ComboBox based on the selected value of the parent ComboBox.

The following example, shows the cascade behavior of country, state, and city ComboBox. Here, the [`dataBind`](https://ej2.syncfusion.com/react/documentation/api/combo-box/#databind) method is used to reflect the property changes immediately to the ComboBox.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/basic-cs30/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/basic-cs30/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/basic-cs30" %}