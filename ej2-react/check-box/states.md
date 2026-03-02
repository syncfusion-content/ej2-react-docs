---
layout: post
title: States in React Check box component | Syncfusion
description: Learn here all about States in Syncfusion React Check box component of Syncfusion Essential JS 2 and more.
control: States 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# States in React Check box component

The CheckBox component supports three visual states:
* Checked
* Unchecked
* Indeterminate

## Checked and unchecked

Use the CheckBox [`checked`](https://ej2.syncfusion.com/react/documentation/api/check-box#checked) property to manage the checked and unchecked states. When checked, a checkmark appears in the checkbox frame.

## Indeterminate

Set the CheckBox to an indeterminate state using the [`indeterminate`](https://ej2.syncfusion.com/react/documentation/api/check-box#indeterminate) property. The indeterminate state visually represents a partially selected condition and is commonly used for parent checkboxes in hierarchical lists. This state cannot be set through user interaction and is only achievable through the property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/check-box/label-and-size-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/check-box/label-and-size-cs3/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/check-box/label-and-size-cs3" %}