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

Cascading ComboBox creates a series of dependent dropdowns, where the value of one ComboBox depends on another's selection. Configure this using the [`change`](https://ej2.syncfusion.com/react/documentation/api/combo-box/#change) event of the parent ComboBox. In the change event handler, load data into the child ComboBox based on the parent's selected value.

The following example demonstrates cascading behavior with country, state, and city ComboBox components. The [`dataBind`](https://ej2.syncfusion.com/react/documentation/api/combo-box/#databind) method is used to immediately reflect property changes in the ComboBox.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/basic-cs30/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/basic-cs30/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/basic-cs30" %}