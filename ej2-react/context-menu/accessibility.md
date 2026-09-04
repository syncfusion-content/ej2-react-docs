---
layout: post
title: Accessibility in React Context Menu | Syncfusion
description: WAI-ARIA menubar pattern, `role`, `aria-haspopup`, and `aria-expanded` attributes plus full keyboard navigation support for the React Context Menu.
control: Context Menu
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React Context Menu

The React Context Menu component follows accessibility guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) standards, and [WCAG roles](https://www.w3.org/TR/wai-aria/#roles) that are commonly used to evaluate accessibility.

The accessibility compliance for the React Context Menu component is outlined below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) Support| <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508](https://www.section508.gov/) Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Screen Reader Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Right-To-Left Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Color Contrast | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Mobile Device Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| Keyboard Navigation Support | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Accessibility Checker](https://www.npmjs.com/package/accessibility-checker) Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Axe-core](https://www.npmjs.com/package/axe-core) Accessibility Validation | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |

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

The React Context Menu component implements the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) menubar pattern. The following ARIA attributes are rendered by the Context Menu component:

| Attributes | Purpose |
| --- | --- |
| `role` | Indicates the React Context Menu component popup as `menu`, popup items as `menuitem`, and divider items as `separator`. |
| `aria-haspopup` | Indicates the availability and type of interactive popup element. Rendered as `menu` on items that open a submenu (legacy user agents may report `true`). |
| `aria-expanded` | Indicates whether the subtree can be expanded or collapsed, as well as whether its current state is expanded or collapsed. |
| `aria-label` | Indicates the menu item text. |
| `aria-disabled` | Indicates whether a menu item is disabled and not interactive. |
| `aria-checked` | Indicates the checked state of a checkable/selected menu item. |

## Keyboard interaction

The React Context Menu component follows the [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/#keyboardinteraction) guidelines, making it accessible for people who use assistive technologies and those who rely completely on keyboard navigation. The following keyboard shortcuts are supported by the React Context Menu component:

| **Press** | **To do this** |
| --- | --- |
| <kbd>Esc</kbd> | Closes the opened submenu. |
| <kbd>Enter</kbd> | Selects the focused item. |
| <kbd>Up</kbd> | Navigates up or to the previous menu item. |
| <kbd>Down</kbd> | Navigates down or to the next menu item. |
| <kbd>Left</kbd> | Closes the current submenu and navigates to the parent menu. |
| <kbd>Right</kbd> | Opens the submenu of the focused item. |


## Screen reader support

The React Context Menu component renders the ARIA roles and attributes listed above so that screen readers (such as NVDA, JAWS, and VoiceOver) announce menu structure, item labels, disabled state, and checked state. To localize the announced text, set the appropriate locale strings through the `locale` property.

## Right-to-left support

The React Context Menu component supports right-to-left (RTL) rendering for languages such as Arabic and Hebrew. Enable RTL by setting the `enableRtl` property to `true`.

```tsx
import { enableRtl, L10n } from '@syncfusion/ej2-base';
import { ContextMenuComponent } from '@syncfusion/ej2-react-navigations';

// Enable RTL globally for all Syncfusion components.
enableRtl(true);

function App() {
    const menuItems = [
        { text: 'Cut' },
        { text: 'Copy' },
        { text: 'Paste' }
    ];
    return <ContextMenuComponent target="#target" items={menuItems} enableRtl={true} />;
}
```

## Accessibility validation demo

The React Context Menu component's accessibility levels are validated through the [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) tools during automated testing.

The accessibility compliance of the React Context Menu component is shown in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/context-menu.html) in a new window to evaluate the accessibility of the React Context Menu component with accessibility tools.

{% previewsample "https://ej2.syncfusion.com/accessibility/context-menu.html" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React components](../common/accessibility)