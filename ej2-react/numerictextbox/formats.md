---
layout: post
title: Formats in React Numerictextbox component | Syncfusion
description: Learn here all about Formats in Syncfusion React Numerictextbox component of Syncfusion Essential JS 2 and more.
control: Formats 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Formats in React NumericTextBox component

Format the display of numeric values in the NumericTextBox using the [`format`](https://ej2.syncfusion.com/react/documentation/api/numerictextbox#format) property. When the component loses focus, the value appears in the specified format. The NumericTextBox supports both [standard numeric format strings](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#manipulating-numbers) (for common scenarios like currency and percentages) and [custom numeric format strings](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#custom-number-formatting-and-parsing) (for specialized formatting needs).

## Standard formats

From the [standard numeric formats](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#manipulating-numbers), you can use the numeric related format specifiers such as `n`,`p` and `c` in the NumericTextBox component. By using these format specifiers, you can achieve the percentage and currency textbox behavior also.

The below example demonstrates percentage and currency formats.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/numeric-textbox/standard-format-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/numeric-textbox/standard-format-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/numeric-textbox/standard-format-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/numeric-textbox/standard-format-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/numeric-textbox/standard-format-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/numeric-textbox/standard-format-cs2" %}

## Custom formats

From the [custom numeric format string](https://ej2.syncfusion.com/react/documentation/common/globalization/internationalization#custom-number-formatting-and-parsing), you can provide any custom format by combining one or more custom specifiers.

The below examples demonstrate format the value by using currency format string `#` and `0`.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/numeric-textbox/custom-format-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/numeric-textbox/custom-format-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/numeric-textbox/custom-format-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/numeric-textbox/custom-format-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/numeric-textbox/custom-format-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/numeric-textbox/custom-format-cs2" %}