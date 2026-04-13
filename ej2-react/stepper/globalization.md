---
layout: post
title: Globalization in React Stepper component | Syncfusion
description:  Checkout and learn about Globalization with Syncfusion React Stepper component of Syncfusion Essential JS 2 and more.
control: Stepper
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in React Stepper component

## Localization

The Localization library allows you to localize the default text content of the Stepper. You can change the static text content used for the `optional` property to other cultures (Arabic, Deutsch, French, etc.) by defining the `locale` value and its translation object.

| Locale key | en-US (default) |
|-----|-----|
| optional | Optional |

In this example, the `French` culture is set to Stepper and the default text is updated with the content defined by the locale key.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stepper/localization/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stepper/localization/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/stepper/localization/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/localization" %}

## RTL

RTL provides an option to switch the text direction and layout of the Stepper component from right to left by setting the [enableRtl](https://ej2.syncfusion.com/react/documentation/api/stepper#enablertl) property to `true`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/stepper/rtl/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/stepper/rtl/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/stepper/rtl/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/stepper/rtl" %}
