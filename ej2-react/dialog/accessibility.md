---
layout: post
title: Accessibility in React Dialog | Syncfusion
description: Build accessible React Dialogs compliant with WCAG 2.2, Section 508, and ADA, featuring WAI-ARIA support, keyboard navigation, and screen reader compatibility.
control: Accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React Dialog

The Dialog component follows the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/), and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the Dialog component is outlined below.

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Color Contrast](../common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Mobile Device Support](../common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Axe-core Accessibility Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

## WAI-ARIA attributes

The Dialog features complete ARIA accessibility support, enabling access for screen readers and other assistive technology devices. The component is designed based on the guidelines provided in [WAI-ARIA Accessibility Practices](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal).

The Dialog component uses the `Dialog` role and the following ARIA properties on its elements based on their state.

| **ARIA attribute** | **Description** |
| --- | --- |
| aria-describedby | It indicates the Dialog content description is notified to the user through assistive technologies. |
| aria-labelledby | The Dialog title is notified to the user through assistive technologies. |
| aria-modal | For modal dialog its value is true and non-modal dialog its value is false. |
| aria-grabbed | For a draggable Dialog, its value is true while dragging and false when the drag stops. Note: `aria-grabbed` is deprecated in the WAI-ARIA 1.1/1.2 spec; the Dialog still applies it for backward compatibility. |

## Keyboard interaction

The keyboard interaction of the Dialog component is designed based on [WAI-ARIA Practices](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal) described for Dialog. Users can use the following shortcut keys to interact with the Dialog.

| **Keyboard shortcut** | **Action** |
| --- | --- |
| <kbd>Esc</kbd> | Closes the Dialog. This functionality can be controlled by using [`closeOnEscape`](https://ej2.syncfusion.com/react/documentation/api/dialog#closeonescape). |
| <kbd>Enter</kbd> | When the Dialog button or any input (except text area) is in focus state, pressing the Enter key triggers the click event of the focused button (or the primary button). The Enter key does not trigger the click when the Dialog content contains a text area with initial focus; this is a documented behavior to allow newline input within the text area. |
| <kbd>Ctrl + Enter</kbd> | When the Dialog content contains a text area and it is in focus state, press Ctrl + Enter to call the click event function associated with the primary button. |
| <kbd>Tab</kbd> | Moves focus to the next focusable element within the Dialog. |
| <kbd>Shift + Tab</kbd> | Moves focus to the previous focusable element within the Dialog. When focus is on the first focusable element, pressing Shift + Tab moves focus to the last focusable element. |

> When the Dialog is modal, focus is trapped within the Dialog elements — Tab and Shift + Tab cycle through the focusable elements inside the Dialog without returning focus to the underlying page.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/getting-started-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/getting-started-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/getting-started-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/getting-started-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs2" %}

## Ensuring accessibility

The Dialog component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Dialog component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/dialog.html) in a new window to evaluate the accessibility of the Dialog component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/dialog.html" %}

## See Also

* [Show dialog with full-screen](./how-to/show-dialog-with-full-screen)
* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React components](../common/accessibility)
