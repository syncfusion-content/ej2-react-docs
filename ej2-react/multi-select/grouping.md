---
layout: post
title: Grouping in React MultiSelect Dropdown | Syncfusion
description: Group React MultiSelect Dropdown items by category using the groupBy field, with inline and fixed group headers and an optional checkbox to select all items in a group at once.
control: Grouping 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in React MultiSelect Dropdown

The React MultiSelect supports wrapping nested elements into a group based on different categories. The category of each list item can be mapped through the [groupBy](https://ej2.syncfusion.com/react/documentation/api/multi-select/#fields) field in the data table. The group header is displayed both as inline and fixed headers. The fixed group header content is updated dynamically as you scroll through the popup list, displaying the category value for each group.

Map the `groupBy` field through the `fields` prop to define which property of the data source represents the group category:

```tsx
<MultiSelectComponent
  dataSource={vegetableData}
  fields={{ text: 'Vegetable', value: 'Id', groupBy: 'Category' }}
/>
```

In the following sample, vegetables are grouped according to their category using the `groupBy` field.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/basic-cs25/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/basic-cs25/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/basic-cs25" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/basic-cs26/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/basic-cs26/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/basic-cs26" %}

## Customize the group header

The grouping header can be customized using the [groupTemplate](https://ej2.syncfusion.com/react/documentation/api/multi-select/#grouptemplate) property. The custom template applies to both inline and fixed group display modes, providing flexible control over group header appearance and content. See the [Group Template](./templates#group-template) section for a usage example.

## Grouping with checkbox

The React MultiSelect now supports rendering checkboxes in group headers, allowing you to select all items within a group in a single action. Inject the `CheckBoxSelection` module in the React MultiSelect to use checkbox selection.

```tsx
import { CheckBoxSelection } from '@syncfusion/ej2-react-dropdowns';

MultiSelectComponent.Inject(CheckBoxSelection);
```

Then enable this feature by setting the [`enableGroupCheckBox`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#enablegroupcheckbox) property to **true** and configuring the **mode** property as **CheckBox**.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/basic-cs27/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/basic-cs27/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/basic-cs27" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/basic-cs28/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/basic-cs28/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/basic-cs28" %}

## See Also

* [Group Template support to React MultiSelect](./templates#group-template).