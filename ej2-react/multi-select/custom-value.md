---
layout: post
title: Custom Value in React MultiSelect Dropdown | Syncfusion
description: Let users add new options not present in the original React MultiSelect Dropdown dataset by enabling allowCustomValue and handling the customValueSelection event.
control: Custom value 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Custom Value in React MultiSelect Dropdown


The React MultiSelect enables users to add new custom options that are not present in the original data source when the [`allowCustomValue`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#allowcustomvalue) property is set to `true`. When a custom value is selected, the component triggers the [`customValueSelection`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#customvalueselection) event.

### Enable custom value support

To enable custom values, set the `allowCustomValue` property to `true` on the React MultiSelect component:

```jsx
<MultiSelectComponent allowCustomValue={true} />
```

### Handle the customValueSelection event

When a custom value is added, the component raises the `customValueSelection` event. The event arguments expose the following members:

| Property | Type | Description |
|------|------|-------------|
| `itemData` | `Object` | The data object of the new custom value being added. |
| `item` | `Element` | The custom value element being added. |
| `isNewValue` | `boolean` | Indicates whether the added value is a new custom value. |
| `cancel` | `boolean` | When set to `true`, cancels the addition of the custom value. |

The following inline example shows how to bind the `customValueSelection` event to handle the new value:

```jsx
onCustomValueSelection = (e) => {
    // Handle the added custom value here.
    console.log('New custom value added:', e.itemData);
};
```

```jsx
<MultiSelectComponent allowCustomValue={true} customValueSelection={this.onCustomValueSelection} />
```

> Binding the `customValueSelection` event is optional. The samples below demonstrate enabling `allowCustomValue` without an event handler.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/basic-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight tsx tabtitle="index.tsx" %}
{% include code-snippet/multiselect/basic-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/basic-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/basic-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight tsx tabtitle="index.tsx" %}
{% include code-snippet/multiselect/basic-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/basic-cs4" %}

## See Also

* [Filtering in the React MultiSelect](./filtering/)
* [Templates in the React MultiSelect](./templates/)
* [Value binding in the React MultiSelect](./value-binding/)