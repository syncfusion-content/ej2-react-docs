---
layout: post
title: Add minimize and maximize buttons in React Dialog | Syncfusion
description: Add minimize and maximize custom buttons to the React Dialog header using the headerTemplate property and handle the actions in click events.
control: Add minimize and maximize buttons 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Add minimize and maximize buttons in React Dialog component

The React Dialog allows end users to either minimize or maximize the React Dialog. You can add minimize and maximize custom buttons near the close icon in the React Dialog header using the [`header`](https://ej2.syncfusion.com/react/documentation/api/dialog#header) property. The actions for these buttons are handled in their click events.

## Approach

The following approach is used to implement minimize and maximize functionality:

1. **Define the header template** — Use the [`header`](https://ej2.syncfusion.com/react/documentation/api/dialog#header) property to render custom minimize and maximize icon buttons next to the React Dialog title.
2. **Wire the `created` event** — In the [`created`](https://ej2.syncfusion.com/react/documentation/api/dialog#created) handler, attach click listeners to the minimize and maximize buttons.
3. **Toggle maximize state** — On the maximize button click, toggle the `dialog-maximized` CSS class and call [`show(true)`](https://ej2.syncfusion.com/react/documentation/api/dialog#show) to enter full-screen mode, or `show(false)` to restore. Update the icon to the restore state.
4. **Toggle minimize state** — On the minimize button click, toggle the `dialog-minimized` CSS class, hide the content via the `hide-content` CSS class, and reposition the React Dialog to the bottom-center using the [`position`](https://ej2.syncfusion.com/react/documentation/api/dialog#position) property. Call [`dataBind()`](https://ej2.syncfusion.com/react/documentation/api/dialog#databind) to apply the position change.

## Implementation

> The `show(isFullScreen)` method overload accepts a boolean argument: `show(true)` opens the React Dialog in full-screen mode, and `show(false)` restores it to its normal state.
>
> The minimize logic updates the [`position`](https://ej2.syncfusion.com/react/documentation/api/dialog#position) property and calls [`dataBind()`](https://ej2.syncfusion.com/react/documentation/api/dialog#databind) to re-render the React Dialog at the new position. The previous position is stored and restored when the React Dialog is expanded again.

The following sample demonstrates the maximize/minimize state machine. The sample includes OK and No footer buttons to show a complete React Dialog; these are optional and can be removed if only minimize/maximize behavior is needed. The `animationSettings` property applies a `Zoom` effect when the React Dialog opens or closes.

> The sample relies on supporting CSS for the custom icon classes (`sf-icon-Maximize`, `sf-icon-Minimize`, `sf-icon-Restore`) and state classes (`dialog-maximized`, `dialog-minimized`, `hide-content`, `title`). These icon classes are not part of the default Syncfusion icon font; define them in your application's stylesheet (for example, using a custom icon font, SVG backgrounds, or Font Awesome). Ensure these classes are defined before the sample will render correctly.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dlg-min-max-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dlg-min-max-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dlg-min-max-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dlg-min-max-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dlg-min-max-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dlg-min-max-cs2" %}

## See Also

* [Template in React Dialog](../template)
* [Resize in React Dialog](../resize)
* [Show React Dialog with full-screen](./show-dialog-with-full-screen)
* [Customize the React Dialog appearance](./customize-the-dialog-appearance)