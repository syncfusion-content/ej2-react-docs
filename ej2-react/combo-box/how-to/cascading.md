---
layout: post
title: How to configure cascading in React ComboBox | Syncfusion
description: Build a chain of dependent Syncfusion React ComboBoxes where the child loads data from the parent's change event, shown with country, state, and city filtering.
control: Cascading
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to configure cascading in React ComboBox

Cascading React ComboBox creates a series of dependent dropdowns, where the value of one React ComboBox depends on another's selection. Configure this using the [`change`](https://ej2.syncfusion.com/react/documentation/api/combo-box#change) event of the parent React ComboBox. In the change event handler, load data into the child React ComboBox based on the parent's selected value.

The following example demonstrates cascading behavior with country, state, and city React ComboBox components. The [`dataBind`](https://ej2.syncfusion.com/react/documentation/api/combo-box#databind) method is used to immediately reflect property changes in the React ComboBox.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/basic-cs30/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/basic-cs30/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/basic-cs30" %}