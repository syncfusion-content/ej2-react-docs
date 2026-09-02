---
layout: post
title: Accessibility in React MultiSelect Dropdown | Syncfusion
description: Build accessible apps with the Syncfusion React MultiSelect, which follows WAI-ARIA, WCAG 2.2, Section 508, and ADA standards with full keyboard support.
control: Accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React MultiSelect Dropdown

The MultiSelect component is built according to the WAI-ARIA specifications, incorporating roles, states, properties, and comprehensive keyboard support. The component provides complete keyboard navigation and ARIA accessibility. This enables users of assistive technologies and keyboard-only users to interact with the component effectively.

The MultiSelect component adheres to established accessibility standards and guidelines, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) (conformance level AA), and [WAI-ARIA roles](https://www.w3.org/TR/wai-aria/#roles).

The accessibility compliance for the MultiSelect component is outlined below.

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

The MultiSelect component follows the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/) patterns to meet accessibility requirements. The following ARIA attributes, based on the [WAI-ARIA specification](https://www.w3.org/TR/wai-aria-1.2/), are used in the MultiSelect component:

| **ARIA Property** | **Functionalities** |
| --- | --- |
| [aria-haspopup](https://www.w3.org/TR/wai-aria-1.2/#aria-haspopup) | Indicates whether the MultiSelect input element has a popup list or not. |
| [aria-expanded](https://www.w3.org/TR/wai-aria-1.2/#aria-expanded) | Indicates whether the popup list has expanded or not. |
| [aria-selected](https://www.w3.org/TR/wai-aria-1.2/#aria-selected) | Indicates the selected option. |
| [aria-readonly](https://www.w3.org/TR/wai-aria-1.2/#aria-readonly) | Indicates the readonly state of the MultiSelect element. Applied only when the component is set to readonly. |
| [aria-disabled](https://www.w3.org/TR/wai-aria-1.2/#aria-disabled) | Indicates whether the MultiSelect component is in a disabled state or not. Applied only when the component is disabled. |
| [aria-activedescendant](https://www.w3.org/TR/wai-aria-1.2/#aria-activedescendant) | This attribute holds the ID of the active list item to focus its descendant child element. |
| [aria-owns](https://www.w3.org/TR/wai-aria-1.2/#aria-owns) | This attribute contains the ID of the popup list to indicate popup as a child element. |

## Keyboard interaction

You can use the following key shortcuts to access the MultiSelect without interruptions. The component must be focused before using these navigation keys.

| **Keyboard shortcuts** | **Actions** |
| --- | --- |
| <kbd>Arrow Down</kbd> | Set focus at the first item in the MultiSelect when no item selected. Otherwise, moves focus to the item after the currently selected item. |
| <kbd>Arrow Up</kbd> | Moves focus previous to the currently selected one. |
| <kbd>Page Down</kbd> | Scrolls down to the next page and set focus to the first item when popup list opens. |
| <kbd>Page Up</kbd> | Scrolls up to the previous page and set focus to the first item when popup list opens. |
| <kbd>Enter</kbd> | Selects the focused item, and popup list closes when it is in open state. |
| <kbd>Tab</kbd> | Focuses on the next TabIndex element on the page when the popup is closed. Otherwise, closes the popup list and remains the focus of the component. |
| <kbd>Shift + Tab</kbd> | Focuses on the previous TabIndex element on the page when the popup is closed. Otherwise, closes the popup list and remains the focus of the component. |
| <kbd>Alt + Down</kbd> | Opens the popup list. |
| <kbd>Alt + Up</kbd> | Closes the popup list. |
| <kbd>Esc</kbd> | Closes the popup list when it is in an open state and the currently selected item remains the same. |
| <kbd>Home</kbd> | Set focus to the first item. |
| <kbd>End</kbd> | Set focus to the last item. |

> Keyboard interaction may vary slightly depending on the MultiSelect `mode` (`Default`, `Box`, `CheckBox`). For mode-specific behavior, see the [CheckBox](./checkbox) and [custom value](./custom-value) topics.

> In the below sample, focus the MultiSelect component using <kbd>alt+t</kbd> keys.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/basic-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/basic-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/basic-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/basic-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/basic-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/basic-cs2" %}

## Ensuring accessibility

The MultiSelect component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the MultiSelect component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/multi-select.html) in a new window to evaluate the accessibility of the MultiSelect component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/multi-select.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React components](../common/accessibility)