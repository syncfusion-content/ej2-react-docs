---
layout: post
title: Accessibility in React Radio button component | Syncfusion
description: Learn here all about Accessibility in Syncfusion React Radio button component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React Radio button component

The web accessibility makes web content and web applications more accessible for people with disabilities. It especially helps in dynamic content change and development of advanced user interface controls with AJAX, HTML, JavaScript, and related technologies.
RadioButton provides built-in compliance with `WAI-ARIA` specifications. `WAI-ARIA` support is achieved through the attributes like `aria-checked` and `aria-disabled`. It helps the people with disabilities by providing information about the widget for assistive technology in the screen readers. RadioButton component contains the `radiobutton` role.

| Properties | Functionality |
| ------------ | ----------------------- |
| role | Indicates the type of input element. |
| aria-checked | Indicates whether the input is checked, unchecked, or represents mixture of checked and unchecked values. |
| aria-disabled | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable. |

## Keyboard interaction

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
<b>Keyboard shortcuts</b></td><td>
<b>Actions</b></td></tr>
<tr>
<td>
<kbd>Up/Left arrow</kbd></td><td>
Move and select the previous options.</td></tr>
<tr>
<td>
<kbd>Down/Right arrow</kbd></td><td>
Move and select the next options.</td></tr>
</table>

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/radio-button/accessibility-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/radio-button/accessibility-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/radio-button/accessibility-cs1" %}
