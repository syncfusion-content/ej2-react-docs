---
layout: post
title: Checkbox in React MultiSelect Dropdown | Syncfusion
description: Enable checkbox-based multi-selection in the React MultiSelect Dropdown with the CheckBox mode, plus Select All, a maximum selection limit, and selection reordering that reflects the order of user picks.
control: Checkbox 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Checkbox in React MultiSelect Dropdown

The React MultiSelect includes built-in checkbox support to select multiple values. To enable this feature, set the [`mode`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#mode) property to `CheckBox`.

When using checkbox mode, inject the `CheckBoxSelection` module into the React MultiSelect. This injection is required specifically when the `mode` property is set to `CheckBox`; it is not required for the default mode.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/checkbox-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/checkbox-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/checkbox-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/checkbox-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/checkbox-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/checkbox-cs2" %}

## Select All

The React MultiSelect component includes a `Select All` option in the header to select all list items at once.

By default, the [`showSelectAll`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#showselectall) property is set to **false**. When set to **true**, the Select All option is displayed in the popup header. Customize the Select All label text using the [`selectAllText`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#selectalltext) property.

Similarly, you can customize the unselect-all label using the [`unSelectAllText`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#unSelectAllText) property.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/checkbox-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/checkbox-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/checkbox-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/checkbox-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/checkbox-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/checkbox-cs4" %}

## Selection Limit

Restrict the number of items that can be selected by setting the [`maximumSelectionLength`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#maximumselectionlength) property. Once the specified limit is reached, the remaining unselected items are disabled and no further items can be selected until an already selected item is removed.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/checkbox-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/checkbox-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/checkbox-cs5" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/checkbox-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/checkbox-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/checkbox-cs6" %}

## Selection Order

Set the [`enableSelectionOrder`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#enableselectionorder) property to **true** to automatically reorder selected items within the popup list, displaying them in the order they were selected. When set to **false** (the default), selected items remain in the order defined by the data source.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/checkbox-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/checkbox-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/checkbox-cs7" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/checkbox-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/checkbox-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/checkbox-cs8" %}

## See Also


* [How to bind the data](./data-binding)
* [How to filter the bound data](./filtering)
* [How to add custom value to the React MultiSelect](./custom-value)
* [How to render grouping with checkbox](./grouping#grouping-with-checkbox)

## Troubleshooting

If checkboxes do not render in the popup, verify that the `CheckBoxSelection` module is injected into the React MultiSelect component via the `Inject` directive and that the `mode` property is set to `CheckBox`. For initial setup and prerequisites, see the [getting started](./getting-started) topic.