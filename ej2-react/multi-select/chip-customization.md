---
layout: post
title: Chip Customization in React MultiSelect Dropdown | Syncfusion
description: Style individual selected-value chips in the React MultiSelect Dropdown by handling the tagging event and applying custom CSS classes through the setClass method.
control: Chip customization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Chip Customization in React MultiSelect Dropdown

The MultiSelect provides chip customization through the [`tagging`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#events-tagging) event. Within this event, you can apply custom CSS classes to chip elements by calling the [`setClass`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#taggingeventargs-setclass) method exposed on the `TaggingEventArgs` event argument.

### Event arguments

The `tagging` event passes a `TaggingEventArgs` object with the following useful members:

| Property / Method | Type | Description |
|------|------|-------------|
| `itemData` | `Object` | The data object of the list item being tagged. |
| `item` | `Element` | The list item element being tagged. |
| `isInteracted` | `boolean` | Indicates whether the tag was added through user interaction. |
| `cancel` | `boolean` | When set to `true`, cancels the tagging of the current item. |
| `setClass(classNames: string): void` | method | Applies the specified CSS class name(s) to the chip element. Return value: `void`. |

### Apply a CSS class

Follow these steps to apply a custom CSS class to each chip:

1. **Define the data source.** Bind an `array` of objects to the `dataSource` property and map the display and value columns via the `fields` property.
2. **Wire the `tagging` event.** In the handler, read the selected item's text from `e.itemData` and pass the desired class name to `e.setClass()`.
3. **Define the corresponding styles.** Add CSS rules for the class names you pass to `setClass` so the chips are visually styled (for example, a background color per item).
4. **Render the component.** Set the `tagging` event on the MultiSelect so the handler is invoked for every chip.

The following inline example shows the `tagging` handler that applies the color name as a CSS class to each chip:

```jsx
onTagging = (e) => {
    // set the current selected item text as class to chip element.
    e.setClass(e.itemData[this.fields.text].toLowerCase());
};
```

> The class names passed to `setClass` (for example, `chocolate`, `darkorange`) must be defined in your application's CSS so the chips take on the intended visual style. The complete sample below includes the matching CSS rules.

The following sample demonstrates chip customization with the MultiSelect component. Both the class-based and functional component patterns are shown; either approach is valid, so choose the one that matches your project style.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/chip-customization-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight tsx tabtitle="index.tsx" %}
{% include code-snippet/multiselect/chip-customization-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/chip-customization-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/chip-customization-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight tsx tabtitle="index.tsx" %}
{% include code-snippet/multiselect/chip-customization-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/chip-customization-cs2" %}