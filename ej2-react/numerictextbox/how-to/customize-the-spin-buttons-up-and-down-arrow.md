---
layout: post
title: Customize the spin buttons up and down arrow in React Numerictextbox component | Syncfusion
description: Learn here all about Customize the spin buttons up and down arrow in Syncfusion React Numerictextbox component of Syncfusion Essential JS 2 and more.
control: Customize the spin buttons up and down arrow 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize the spin buttons up and down arrow in React NumericTextBox component

Replace the default increment and decrement icons with custom icons to match your application's design. The spin button icons are controlled by the `e-spin-up` and `e-spin-down` CSS classes, which you can override with custom styling.

## Customizing the spin button icons

Override the default icons of the `e-spin-up` and `e-spin-down` classes using the following CSS code snippets. Replace the content values with your desired Unicode icon codes:

```css
  .e-numeric .e-input-group-icon.e-spin-up:before {
    content: "\e823";
    color: rgba(0, 0, 0, 0.54);
  }
  .e-numeric .e-input-group-icon.e-spin-down:before {
    content: "\e934";
    color: rgba(0, 0, 0, 0.54);
  }
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/numeric-textbox/custom-icons-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/numeric-textbox/custom-icons-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/numeric-textbox/custom-icons-cs1" %}