---
layout: post
title: Localization in React Color Picker | Syncfusion
description: Localize the React Color Picker's static text such as Apply, Cancel, and Switch Mode buttons to any culture using the L10n class.
control: Localization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---


# Localization in React Color Picker

## Localization

The `Localization` library allows you to localize the React Color Picker's default text. The React Color Picker includes static text for control buttons (apply/cancel) and the mode switcher; these can be localized by defining the [`locale`](https://ej2.syncfusion.com/react/documentation/api/color-picker#locale) value and providing a translation object.

The following lists locale keys and their default text values used by the React Color Picker.

Locale keywords | Text
-----|-----
Apply |Apply
Cancel |Cancel
ModeSwitcher |Switch Mode

### Loading translations

To load translation object in an application use `load` function of `L10n` class.

The below example demonstrates the React Color Picker in `Deutsch` culture.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/colorpicker/how-to-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/colorpicker/how-to-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/colorpicker/how-to-cs5" %}


## Right to Left - RTL

The React Color Picker supports RTL rendering. It improves the user experience and accessibility for right-to-left languages (Arabic, Farsi, Urdu, etc.). This can be enabled by setting the [`enableRtl`](https://ej2.syncfusion.com/react/documentation/api/color-picker#enablertl) property to `true`.

The following example illustrates how to enable right-to-left support in the React Color Picker component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/colorpicker/how-to-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/colorpicker/how-to-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/colorpicker/how-to-cs6" %}

## See Also

* [More information about localization](./../common/localization)