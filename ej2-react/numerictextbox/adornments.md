---
layout: post
title: Adornments in React NumericTextBox component | Syncfusion
description: Learn here all about adornments in Syncfusion React NumericTextBox component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Adornments
documentation: ug
domainurl: ##DomainURL##
---

# Adornments in React NumericTextBox component

Enhance the NumericTextBox component with prepended or appended visual elements using `prependTemplate` and `appendTemplate` properties. Adornments include currency symbols, unit labels, or action icons that provide context and improve the user input experience without affecting numeric validation or behavior.

## Overview and Use Cases

Adornments serve multiple purposes in numeric input design:

- **Currency Symbols**: Display monetary indicators such as $, €, ¥ to clarify input type
- **Unit Labels**: Show measurement units (kg, cm, km, mph) to provide context
- **Action Icons**: Include interactive buttons for clear, reset, or custom operations
- **Visual Context**: Display status indicators or icons that describe the input purpose

## Adding Adornments to NumericTextBox

Use `prependTemplate` and `appendTemplate` to insert custom HTML elements before or after the NumericTextBox input field:

- **`prependTemplate`**: Renders content before (to the left of) the numeric input
- **`appendTemplate`**: Renders content after (to the right of) the numeric input

These templates do not affect numeric validation and support any inline HTML or icon.

The following example demonstrates how to add adornments in the NumericTextBox control.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/numeric-textbox/adornments-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/numeric-textbox/adornments-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

You can view the demo here: [NumericTextBox Adornments demo](https://ej2.syncfusion.com/react/demos/#/tailwind3/numerictextbox/adornments).

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/numeric-textbox/adornments-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/numeric-textbox/adornments-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

You can view the demo here: [NumericTextBox Adornments demo](https://ej2.syncfusion.com/react/demos/#/tailwind3/numerictextbox/adornments).
