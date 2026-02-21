---
layout: post
title: Accessibility in React Combo box component | Syncfusion
description: Learn here all about Accessibility in Syncfusion React Combo box component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React Combo box component

The ComboBox component is built according to `WAI-ARIA` specifications, incorporating WAI-ARIA roles, states, properties, and comprehensive keyboard support. The component provides complete keyboard navigation and ARIA accessibility, enabling users of assistive technologies and keyboard-only users to interact effectively.

The ComboBox component adheres to established accessibility standards and guidelines, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/), and [WAI-ARIA roles](https://www.w3.org/TR/wai-aria/#roles).

The accessibility compliance for the ComboBox component is outlined below.

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

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

## WAI-ARIA attributes

The ComboBox component followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/) patterns to meet the accessibility. The following ARIA attributes are used in the ComboBox component:

| **Properties** | **Functionalities** |
| --- | --- |
| <kbd>aria-haspopup</kbd> | Indicates whether the ComboBox input element has a popup list or not. |
| aria-expanded | Indicates whether the popup list has expanded or not. |
| aria-selected | Indicates the selected option. |
| aria-readonly | Indicates the readonly state of the ComboBox element. |
| aria-disabled | Indicates whether the ComboBox component is in a disabled state or not. |
| aria-activedescendent | This attribute holds the ID of the active list item  to focus its descendant child element. |
| aria-owns | This attribute contains the ID of the popup list to indicate popup as a child element. |
| aria-autocomplete | This attribute contains the ‘both’ to a list of options shows and the currently selected suggestion also shows inline. |

## Keyboard interaction

You can use the following key shortcuts to access the ComboBox without interruptions.

| **Keyboard shortcuts** | **Actions** |
| --- | --- |
| <kbd>Arrow Down</kbd> | Selects the first item in the ComboBox when no item selected. Otherwise, selects the item next to the currently selected item. |
| <kbd>Arrow Up</kbd> | Selects the item previous to the currently selected one. |
| <kbd>Page Down</kbd> | Scrolls down to the next page and selects the first item when popup list opens. |
| <kbd>Page Up</kbd> | Scrolls up to the previous page and selects the first item when popup list opens. |
| <kbd>Enter</kbd> | Selects the focused item and popup list closes when it is in open state. |
| <kbd>Tab</kbd> | Focuses on the next TabIndex element on the page when the popup is closed. Otherwise, closes the popup list and remains the focus of the component. |
| <kbd>Shift + tab </kbd> | Focuses on the previous TabIndex element on the page when the popup is closed. Otherwise, closes the popup list and remains the focus of the component. |
| <kbd>Alt + Down</kbd> | Open the popup list |
| <kbd>Alt + Up</kbd> | Close the popup list|
| <kbd>Esc(Escape)</kbd> | Closes the popup list when it is in an open state and the currently selected item remains the same. |
| <kbd>Home</kbd> | Cursor moves to before of first character in input |
| <kbd>End</kbd> | Cursor moves to next of last character in input  |

> In the below sample, <kbd>alt+t</kbd> keys are used to focus the ComboBox component.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/basic-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/basic-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/basic-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/combobox/basic-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/combobox/basic-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/combobox/basic-cs2" %}

## Ensuring accessibility

The ComboBox component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the ComboBox component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/combo-box.html) in a new window to evaluate the accessibility of the ComboBox component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/combo-box.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React components](../common/accessibility)
