---
layout: post
title: Adornments in ##Platform_Name## TextArea control | Syncfusion
description: Learn here all about Adornments in Syncfusion ##Platform_Name## TextArea control of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Adornments
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Adornments in ##Platform_Name## TextArea control

Adornments enable custom elements (icons, text labels, or action buttons) to be added before or after the TextArea using the `prependTemplate` and `appendTemplate` properties. Use `adornmentFlow` and `adornmentOrientation` to arrange adornments horizontally or vertically for flexible layouts.

## Common Use Cases

- **Visual Indicators**: Icons for context (e.g., edit, comment).
- **Formatting Tools**: Buttons for bold, italic, underline.
- **Content Actions**: Save, clear, or submit buttons.
- **Validation & Status**: Character count or error icons.
- **Flexible Layout**: Horizontal or vertical adornment flow.

## Adding Adornments with Orientation to TextArea

Use `prependTemplate` and `appendTemplate` to add custom HTML content before and after the TextArea.

- **`prependTemplate`**: Renders elements before the textarea.

- **`appendTemplate`**: Renders elements after the textarea.

You can control how adornments are positioned and arranged using the `adornmentFlow` and `adornmentOrientation` properties. Both properties accept only `Horizontal` or `Vertical` values defined in the `AdornmentsDirection` type.

- **`adornmentFlow`**: Defines where adornments appear around the TextArea.
  - **Horizontal**: Prepend on the left, append on the right.
  - **Vertical**: Prepend above, append below.

- **`adornmentOrientation`**: Defines how items inside each adornment are arranged.
  - **Horizontal**: Items displayed in a row.
  - **Vertical**: Items displayed in a column.

The following example demonstrates how to add adornments with orientation in the TextArea control.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/textarea/adornments-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/textarea/adornments-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

You can view the demo here: [TextArea Adornments demo](https://ej2.syncfusion.com/react/demos/#/tailwind3/textarea/adornments).

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/textarea/adornments-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/textarea/adornments-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

You can view the demo here: [TextArea Adornments demo](https://ej2.syncfusion.com/react/demos/#/tailwind3/textarea/adornments).