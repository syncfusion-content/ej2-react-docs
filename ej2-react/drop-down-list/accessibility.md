---
layout: post
title: Accessibility in React Dropdown List | Syncfusion
description: The React Dropdown List follows WAI-ARIA combobox patterns, supports full keyboard navigation, and meets WCAG 2.2, Section 508, and ADA accessibility standards.
control: Accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React Dropdown List

The DropDownList component is built according to WAI-ARIA specifications, incorporating the appropriate roles, states, properties, and comprehensive keyboard support. It provides complete keyboard navigation and ARIA accessibility, enabling users of assistive technologies and keyboard-only users to interact effectively.

The DropDownList component adheres to established accessibility standards and guidelines, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), and [WCAG 2.2](https://www.w3.org/TR/WCAG22/). See the [WAI-ARIA](https://www.w3.org/TR/wai-aria/#roles) roles section below for details on the specific pattern used.

The accessibility compliance for the DropDownList component is outlined below.

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

The DropDownList component follows the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only) patterns to meet the accessibility requirements. The following ARIA attributes are used in the DropDownList component:

| **Properties** | **Functionalities** |
| --- | --- |
| aria-haspopup | Indicates whether the DropDownList input element has the popup or not. |
| aria-expanded | Indicates whether the popup has expanded or not. |
| aria-selected | Indicates the selected option. |
| aria-readonly | Indicates the readonly state of the DropDownList element. |
| aria-disabled | Indicates whether the DropDownList component is in a disabled state or not. |
| aria-activedescendant | This attribute holds the ID of the active list item to focus that element's descendant child element. |
| aria-owns | This attribute contains the ID of the popup to indicate the popup as a child element. |

## Keyboard interaction

You can use the following key shortcuts to access the DropDownList without interruptions.

| **Keyboard shortcuts** | **Actions** |
| --- | --- |
| <kbd>Arrow Down</kbd> | Selects the first item in the DropDownList when no item is selected. Otherwise, selects the item next to the currently selected item. |
| <kbd>Arrow Up</kbd> | Selects the item previous to the currently selected one. |
| <kbd>Page Down</kbd> | Scrolls down to the next page and selects the first item of the new page when the popup opens. |
| <kbd>Page Up</kbd> | Scrolls up to the previous page and selects the first item of the new page when the popup opens. |
| <kbd>Enter</kbd> | Selects the focused item, and when it is in an open state the popup closes. Otherwise, toggles the popup. |
| <kbd>Tab</kbd> | Focuses on the next TabIndex element on the page when the popup is closed. Otherwise, closes the popup and moves focus to the next focusable element. |
| <kbd>Shift + Tab</kbd> | Focuses on the previous TabIndex element on the page when the popup is closed. Otherwise, closes the popup and moves focus to the previous focusable element. |
| <kbd>Alt + Down</kbd> | Opens the popup. |
| <kbd>Alt + Up</kbd> | Closes the popup. |
| <kbd>Escape</kbd> | Closes the popup when it is in an open state and the currently selected item remains the same. |
| <kbd>Home</kbd> | Selects the first item. |
| <kbd>End</kbd> | Selects the last item. |

> In the following sample, press <kbd>Alt + t</kbd> to focus the DropDownList component.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs5" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs6" %}

## Ensuring accessibility

The DropDownList component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the DropDownList component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/drop-down-list.html) in a new window to evaluate the accessibility of the DropDownList component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/drop-down-list.html" %}

## See Also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React components](../common/accessibility)
