---
layout: post
title: Localization in React Tab | Syncfusion
description: Localize the default Syncfusion React Tab strings, including the close icon tooltip, by setting the locale property with a translated object.
control: Localization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Localization in React Tab

Localization library allows to localize the default text content of the React Tab to different cultures using the [`locale`](https://ej2.syncfusion.com/react/documentation/api/tab#locale) property. In React Tab, only the close button's tooltip text is localized based on culture.  The close button is shown on the React tab header when the [`showCloseButton`](https://ej2.syncfusion.com/react/documentation/api/tab#showclosebutton) property is enabled.

| Locale key | en-US (default)  |
|------|------|
| closeButtonTitle |  Close |

## Loading translations

To load translation object in an application use the `load` function of the `L10n` class.

In the below sample, `French` culture is set to React Tab and change the close button's tooltip text.

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