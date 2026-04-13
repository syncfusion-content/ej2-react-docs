---
layout: post
title: Localization in React Tab component | Syncfusion
description: Learn here all about Localization in Syncfusion React Tab component of Syncfusion Essential JS 2 and more.
control: Localization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Localization in React Tab component

Localization library allows to localize the default text content of the Tab to different cultures using the [`locale`](https://ej2.syncfusion.com/react/documentation/api/tab/#locale) property. In Tab, the close button's tooltip text alone will be localize based on culture.  The close button is shown on tab header when enabled [`showCloseButton`](https://ej2.syncfusion.com/react/documentation/api/tab/#showclosebutton) property.

| Locale key | en-US (default)  |
|------|------|
| closeButtonTitle |  Close |

## Loading translations

To load translation object in an application use `load` function of `L10n` class.

In the below sample, `French` culture is set to Tab and change the close button's tooltip text.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/locale-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/locale-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/locale-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/locale-cs1" %}