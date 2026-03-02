---
layout: post
title: Label and size in React Radio button component | Syncfusion
description: Learn here all about Label and size in Syncfusion React Radio button component of Syncfusion Essential JS 2 and more.
control: Label and size 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Label and size in React Radio button component

This section explains the different sizes and label configurations available in the RadioButton component.

## Label

Use the [`label`](https://ej2.syncfusion.com/react/documentation/api/radio-button#label) property to add a caption for the RadioButton without manually creating a separate HTML label element. Control label positioning relative to the RadioButton using the [`labelPosition`](https://ej2.syncfusion.com/react/documentation/api/radio-button#labelposition) property, allowing the label to appear before or after the RadioButton indicator.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/radio-button/label-and-size-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/radio-button/label-and-size-cs2/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/radio-button/label-and-size-cs2" %}

## Size

The RadioButton component supports two size variants: default (standard size) and small (compact size). Apply the `e-small` CSS class through the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/radio-button#cssclass) property to create a smaller, more compact RadioButton suitable for dense layouts or space-constrained interfaces.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/radio-button/label-and-size-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/radio-button/label-and-size-cs3/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/radio-button/label-and-size-cs3" %}

## See Also

* [How to customize the RadioButton appearance](./how-to/customize-radiobutton-appearance)
