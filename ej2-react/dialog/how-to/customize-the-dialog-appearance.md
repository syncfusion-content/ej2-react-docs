---
layout: post
title: How to customize appearance in React Dialog | Syncfusion
description: Customize the React Dialog appearance with custom HTML or string content via the content property, such as an error or success window.
control: Customize the dialog appearance 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to customize appearance in React Dialog

You can customize the React Dialog appearance by providing a React Dialog template as a string or HTML element to the [`content`](https://ej2.syncfusion.com/react/documentation/api/dialog#content) property, or by placing child JSX elements directly inside the `<DialogComponent>`. In the following sample, the React Dialog is customized to appear as an error window using child JSX.

## Implementation

The sample below configures an `animationSettings` `Zoom` effect for the open/close transition and sets `closeOnEscape` to `true` so the React Dialog can be dismissed with the Esc key. The error-window layout uses custom CSS classes (`dialog-content`, `msg-wrapper`, `close-icon`, `error-msg`, `error-detail`) and Bootstrap-style grid classes (`col-lg-2`, `col-lg-10`). Ensure the supporting CSS and (optionally) the Bootstrap grid stylesheet are loaded in your application for the sample to render correctly.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dlg-appearance-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dlg-appearance-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dlg-appearance-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dlg-appearance-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dlg-appearance-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dlg-appearance-cs2" %}

## See Also

* [Template in React Dialog](../template)
* [Style in React Dialog](../style)
* [Dialog API Reference](https://ej2.syncfusion.com/react/documentation/api/dialog)