---
layout: post
title: Localization in React Dialog | Syncfusion
description: Localize the React Dialog close button tooltip using the L10n library so the default English text adapts to any culture such as French.
control: Localization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Localization in React Dialog

The [Localization](https://ej2.syncfusion.com/react/documentation/common/globalization/localization) library enables localization of the Dialog's default text content. In the Dialog, only the close button's tooltip text is localized according to the selected culture. The close button tooltip is the only localizable text in the Dialog.

## Loading translations

To load a translation object in the application, use the `load` function of the `L10n` class. Follow these steps to localize the Dialog:

1. Import the `L10n` class from `@syncfusion/ej2-base`.
2. Call `L10n.load()` with a translation object mapping the locale code (for example, `fr-BE`) to the Dialog's `close` key.
3. Set the `locale` property on the `DialogComponent` to the desired culture code (for example, `locale='fr-BE'`).

Locale codes follow the `language-COUNTRY` format (for example, `fr-FR`, `fr-BE`, `de-DE`). For the full list of supported culture codes, see the [available culture/locale list](https://github.com/syncfusion/ej2/tree/master/src/common/src/cultures).

The following table lists the localizable key and its default text.

| Key | Default text (en-US) |
|------|------|
| close | Close |

In the following sample, the French (Belgium) culture (`fr-BE`) is set to the Dialog, and the close button's tooltip text is changed accordingly.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/getting-started-cs17/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/getting-started-cs17/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs17" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/getting-started-cs18/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/getting-started-cs18/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs18" %}

## See Also

* [Localization library overview](https://ej2.syncfusion.com/react/documentation/common/globalization/localization)
* [Globalization in React Dialog](https://ej2.syncfusion.com/react/documentation/common/globalization)
* [Dialog API Reference](https://ej2.syncfusion.com/react/documentation/api/dialog)