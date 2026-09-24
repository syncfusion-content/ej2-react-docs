---
layout: post
title: How to configure cascading in React MultiSelect Dropdown | Syncfusion
description: Build a chain of dependent React MultiSelect Dropdowns where the child loads its data from the parent's change event handler, demonstrated with country, state, and city filtering.
control: Cascading 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to configure cascading in React MultiSelect Dropdown

The cascading React MultiSelect Dropdown is a series of React MultiSelect Dropdowns, where the value of one React MultiSelect Dropdown depends upon another's value. This can be configured by using the [`change`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#change) event of the parent MultiSelect Dropdown. Within that change event handler, data is loaded into the child MultiSelect Dropdown based on the selected value of the parent MultiSelect Dropdown. The `change` event argument exposes key properties such as `e.value` (the selected value) and `e.itemData` (the selected item's data object), which can be used to filter the child's data source. The child MultiSelect Dropdown's data source is typically updated through component state or a component ref (for example, by setting the `dataSource` property on the child instance).

The following example shows the cascading behavior of country, state, and city MultiSelect Dropdowns. Here, the [`dataBind`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#dataBind) method is used to reflect the property changes immediately to the React MultiSelect Dropdown; call `dataBind` after updating the child's data source so the new data renders without delay.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/basic-cs29/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/basic-cs29/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/basic-cs29" %}

Select a country to load the dependent states, then select a state to load the dependent cities.