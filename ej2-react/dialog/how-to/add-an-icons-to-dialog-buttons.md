---
layout: post
title: How to add icons to buttons in React Dialog | Syncfusion
description: Add icons to React Dialog footer buttons by configuring the buttons property or the footerTemplate with icon definitions for visual cues.
control: Add icons to dialog buttons 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to add icons to buttons in React Dialog

You can add icons to the dialog buttons using the [buttons](https://ej2.syncfusion.com/react/documentation/api/dialog#buttons) property or the [footerTemplate](https://ej2.syncfusion.com/react/documentation/api/dialog#footertemplate) property. Use the `buttons` property when you want built-in Button components with their standard behavior; use the `footerTemplate` property when you need full custom markup in the footer. For detailed information about dialog buttons, refer to the [Template in React Dialog](../template#footer) topic.

The `buttons` property accepts an array of objects whose `buttonModel` field follows the Syncfusion `ButtonModel` interface (for example, `content`, `iconCss`, `isPrimary`, and `cssClass`). See the [ButtonModel API reference](https://ej2.syncfusion.com/react/documentation/api/button#buttonmodel) for the full list of properties.

## Using the buttons property

In the following sample, the dialog footer buttons are customized with icons using the `buttons` property.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dlg-buttons-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dlg-buttons-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dlg-buttons-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dlg-buttons-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dlg-buttons-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dlg-buttons-cs2" %}

## Using the footerTemplate property

In the following sample, the dialog footer buttons are customized with icons using the `footerTemplate` property.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dlg-footer-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dlg-footer-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dlg-footer-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dlg-footer-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dlg-footer-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dlg-footer-cs2" %}

## See Also

* [Template in React Dialog](../template)
* [Style in React Dialog](../style)
* [Dialog buttons API reference](https://ej2.syncfusion.com/react/documentation/api/dialog#buttons)
* [Dialog footerTemplate API reference](https://ej2.syncfusion.com/react/documentation/api/dialog#footertemplate)
