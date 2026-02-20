---
layout: post
title: Adornments in React TextBox component | Syncfusion
description: Learn here all about adornments in Syncfusion React TextBox component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Adornments
documentation: ug
domainurl: ##DomainURL##
---

# Adornments in React TextBox component

Enhance the TextBox component with prepended or appended visual elements using `prependTemplate` and `appendTemplate` properties. Adornments include icons, text labels, or interactive buttons that provide visual context and improve the user input experience.

## Overview and Use Cases

Adornments serve multiple purposes in modern form design:

- **Visual Indicators**: Icons that clarify the expected input type (e.g., user icon for username, envelope icon for email)
- **Functional Enhancement**: Action buttons such as password visibility toggles or clear input buttons
- **Validation Feedback**: Icons indicating input validity or error states
- **Unit Display**: Currency symbols, measurement units, or domain extensions (e.g., "@domain.com" for email fields)
- **Accessibility Support**: Visual and interactive cues that enhance discoverability and usability for all users


## Adding Adornments to TextBox

Use the `prependTemplate` and `appendTemplate` properties to insert custom HTML elements before or after the TextBox input field:

- **`prependTemplate`**: Renders content before (to the left of) the TextBox input
- **`appendTemplate`**: Renders content after (to the right of) the TextBox input

The following example demonstrates how to add adornments in the TextBox control.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/textbox/adornments-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/textbox/adornments-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

You can view the demo here: [TextBox Adornments demo](https://ej2.syncfusion.com/react/demos/#/tailwind3/textboxes/adornments).

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/textbox/adornments-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/textbox/adornments-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

You can view the demo here: [TextBox Adornments demo](https://ej2.syncfusion.com/react/demos/#/tailwind3/textboxes/adornments).