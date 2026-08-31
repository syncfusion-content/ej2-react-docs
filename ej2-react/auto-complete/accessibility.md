---
layout: post
title: Accessibility in React AutoComplete | Syncfusion
description: Build accessible apps with the Syncfusion React AutoComplete, which follows WAI-ARIA, WCAG 2.2, Section 508, and ADA standards with full keyboard support.
control: Accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React AutoComplete

The AutoComplete component has been designed with WAI-ARIA specifications in mind and applies the `WAI-ARIA` roles, states, and properties along with `keyboard support`. This component is characterized by complete keyboard interaction support and ARIA accessibility support that makes it easy for people who use assistive technologies (AT) or those who completely rely on keyboard navigation.

The AutoComplete component follows the accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the AutoComplete component is outlined below.

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
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Color Contrast](../common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Mobile Device Support](../common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Axe-core Accessibility Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

> WCAG 2.2 and Section 508 compliance are marked as Intermediate because a subset of advanced scenarios (such as custom template rendering and remote-data loading) may require additional ARIA wiring from the application side. For the specific criteria that are not fully met, see the [accessibility standards](../common/accessibility#accessibility-standards) section.


## WAI-ARIA attributes

The AutoComplete component follows the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/) patterns to meet accessibility requirements. The following ARIA attributes are used in the AutoComplete component:

| **Property** | **Functionalities** |
| --- | --- |
| aria-haspopup | Indicates whether the AutoComplete input element has a suggestion list or not. |
| aria-expanded | Indicates whether the suggestion list has expanded or not. |
| aria-controls | This attribute contains the ID of the suggestion list to link the input element with the popup list as a child element. |
| aria-selected | Indicates the selected option from the list. |
| aria-readonly | Indicates the readonly state of the AutoComplete element. |
| aria-disabled | Indicates whether the AutoComplete component is in a disabled state or not. |
| aria-activedescendant | This attribute holds the ID of the active list item to focus its descendant child element. |
| aria-owns | This attribute contains the ID of the suggestion list to indicate popup as a child element. |
| aria-autocomplete | This attribute value depends on the `suggest` and `autofill` props. When both are enabled, the value is `both` (a list of options shows and the currently selected suggestion also shows inline). When only `autofill` is enabled, the value is `inline`. When neither is enabled, the value is `none`. |
| aria-busy | Indicates that the AutoComplete component is currently fetching data from a remote source when its value is `true`. |

## Keyboard interaction

You can use the following key shortcuts to interact with the AutoComplete component using the keyboard.

| **Keyboard shortcuts** | **Actions** |
| --- | --- |
| <kbd>Arrow Down</kbd> | In popup hidden state, opens the suggestion list. In popup open state, moves focus to the first item when no item is selected, or moves focus to the item next to the currently selected item. |
| <kbd>Arrow Up</kbd> | In popup hidden state, opens the suggestion list. In popup open state, moves focus to the last item when no item is selected, or moves focus to the previous item. |
| <kbd>Page Down</kbd> | Scrolls down to the next page and moves focus to the first item when the popup list opens. |
| <kbd>Page Up</kbd> | Scrolls up to the previous page and moves focus to the last item of the previous page when the popup list opens. |
| <kbd>Enter</kbd> | Selects the focused item and sets it to the AutoComplete component. |
| <kbd>Tab</kbd> | Focuses on the next focusable element in the tab order when the popup is closed. Otherwise, closes the popup list and retains focus in the component if it is in an open state. |
| <kbd>Shift + Tab</kbd> | Focuses on the previous focusable element in the tab order when the popup is closed. Otherwise, closes the popup list and retains focus in the component if it is in an open state. |
| <kbd>Alt + Down</kbd> | Opens the popup list. |
| <kbd>Alt + Up</kbd> | In popup hidden state, opens the popup list. In popup open state, closes the popup list. |
| <kbd>Home</kbd> | Cursor moves to before the first character in input. |
| <kbd>End</kbd> | Cursor moves to after the last character in input. |
| <kbd>Esc</kbd> | Closes the popup list when it is in an open state and removes the selection. |
| <kbd>Character</kbd> | On typing characters in the input, filters the suggestion list based on the typed text and opens the popup list. |
| <kbd>Backspace</kbd> | Deletes the previous character in the input and re-filters the suggestion list accordingly. |

> In the below sample, focus the AutoComplete component using <kbd>Alt + T</kbd> keys.

`[Class Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs1" %}

`[Functional Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/autocomplete/basic-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/autocomplete/basic-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/autocomplete/basic-cs2" %}

## Ensuring accessibility

The AutoComplete component's accessibility levels are ensured through an [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the AutoComplete component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/auto-complete.html) in a new window to evaluate the accessibility of the AutoComplete component with accessibility tools.

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React components](../common/accessibility)