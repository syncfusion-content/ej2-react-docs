---
layout: post
title: Filtering in React MultiColumn Combobox component | Syncfusion
description: Checkout and learn about Filtering with React MultiColumn Combobox component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: MultiColumn Combobox
documentation: ug
domainurl: ##DomainURL##
---

# Filtering in React MultiColumn ComboBox component

The MultiColumn ComboBox includes built-in filtering support, enabling users to filter items based on their input. Filter operations start automatically when typing characters in the component. Disable filtering by setting the [allowFiltering](https://j2.syncfusion.com/react/documentation/api/multicolumn-combobox#allowfiltering) property to `false`. By default, the value is `true`.

## Change the filter type

Change the filter type using the [filterType](https://j2.syncfusion.com/react/documentation/api/multicolumn-combobox#filtertype) property. The `filterType` supports [StartsWith](https://j2.syncfusion.com/react/documentation/api/multicolumn-combobox/filterType/), [EndsWith](https://j2.syncfusion.com/react/documentation/api/multicolumn-combobox/filterType/), and [Contains](https://j2.syncfusion.com/react/documentation/api/multicolumn-combobox/filterType/) options.

The following example demonstrates filtering with the `EndsWith` type:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multicolumn-combobox/filtering/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multicolumn-combobox/filtering/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/multicolumn-combobox/filtering" %}
