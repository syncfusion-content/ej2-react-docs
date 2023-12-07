---
layout: post
title: Accessibility in React Toast component | Syncfusion
description: Learn here all about Accessibility in Syncfusion React Toast component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React Toast component

The Toast component has been designed keeping in mind the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/) specifications, by applying the prompt WAI-ARIA roles, states, and properties along with the keyboard support. Thus, making it usable for people who use assistive WAI-ARIA Accessibility supports that is achieved through the attributes. It helps to provides information about the elements in a document for assistive technology. The component implements the keyboard navigation support by following the [WAI-ARIA practices](https://www.w3.org/WAI/ARIA/apg/practices/) and tested in major screen readers.

## ARIA attributes

<!-- markdownlint-disable MD033 -->

| Class | Description |
| -------- | -------- |
| role | <b>alert:</b> <br/>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Identifies the element as the container where alert content will be added or updated. |

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs2" %}