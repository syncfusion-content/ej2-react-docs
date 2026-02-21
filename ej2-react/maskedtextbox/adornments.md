---
layout: post
title: Adornments in ##Platform_Name## MaskedTextBox control | Syncfusion
description: Learn here all about Adornments in Syncfusion ##Platform_Name## MaskedTextBox control of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Adornments
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Adornments in ##Platform_Name## MaskedTextBox control

Adornments in the MaskedTextBox allow you to add custom elements before or after the masked input using the `prependTemplate` and `appendTemplate` properties. These elements can include prefixes, suffixes, labels, or action icons to provide context, guide input, and enable quick actions while preserving mask validation and float label behavior.

## Common Use Cases

- **Entry Guidance**: Add icons/text to hint the expected input (e.g., user icon for username/login).
- **Quick Actions**: Include buttons to submit, clear, or copy the masked value.
- **Context Labels**: Add static prefixes/suffixes like country code, domain, or unit suffix.
- **Visual Feedback**: Show status indicators without interfering with the mask.

## Adding Adornments to MaskedTextBox

Use `prependTemplate` and `appendTemplate` to inject HTML content before and after the masked input. These templates do not alter mask behavior and support any inline HTML or icon.

- **prependTemplate**: Renders elements before the input.
- **appendTemplate**: Renders elements after the input.

The following example demonstrates how to add adornments to the MaskedTextBox.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/masked-textbox/adornments-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/masked-textbox/adornments-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

You can view the demo here: [MaskedTextBox Adornments demo](https://ej2.syncfusion.com/react/demos/#/tailwind3/maskedtextbox/adornments).

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/masked-textbox/adornments-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/masked-textbox/adornments-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

You can view the demo here: [MaskedTextBox Adornments demo](https://ej2.syncfusion.com/react/demos/#/tailwind3/maskedtextbox/adornments).