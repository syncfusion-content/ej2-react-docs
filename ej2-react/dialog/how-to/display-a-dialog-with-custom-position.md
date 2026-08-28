---
layout: post
title: How to display with custom position in React Dialog | Syncfusion
description: Set a custom React Dialog position by providing X and Y pixel offsets to the position property, relative to the target container.
control: Display a dialog with custom position 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to display with custom position in React Dialog

By default, the dialog is displayed in the center of the target container. The dialog position can be customized using the [`position`](https://ej2.syncfusion.com/react/documentation/api/dialog#position) property by providing X and Y coordinate values (in pixels). The dialog is positioned inside the target container based on the specified X and Y values.

The `position` property accepts an object with `X` and `Y` fields. Each field can be a number (pixels) or a named string:

| Field | Accepted values |
| --- | --- |
| X | A pixel number, or `'left'`, `'right'`, `'center'`. |
| Y | A pixel number, or `'top'`, `'bottom'`, `'center'`. |

## Implementation

In the following sample, two dialogs are rendered with `visible={true}`, which causes them to display immediately on page load without needing a button to open them. The target container (`#dialog-target`) must have an explicit height set (via CSS) so both dialogs are visible within it.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dlg-position-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dlg-position-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dlg-position-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dlg-position-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dlg-position-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dlg-position-cs2" %}

## See Also

* [Position the dialog on the center of the page on scrolling](./position-the-dialog-on-center-of-the-page-on-scrolling)
* [Center the dialog based on current scroll position](./center-the-dialog-based-on-current-scroll-position)
* [Dialog API Reference](https://ej2.syncfusion.com/react/documentation/api/dialog)