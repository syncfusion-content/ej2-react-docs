---
layout: post
title: Accessibility in React Diagram Component | Syncfusion®
description: Learn here all about Accessibility in Syncfusion® React Diagram Component of Syncfusion Essential® JS 2 and more.
control: Accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React Diagram Component

The Diagram component provides built-in compliance with the [WAI-ARIA](http://www.w3.org/WAI/PF/aria-practices/) specifications. WAI-ARIA accessibility support is achieved through attributes like `aria-label`, which provide information about elements in a document for assistive technologies such as screen readers.

The following table outlines accessibility compliance for the Diagram component:

| Accessibility Criteria                                                              | Compatibility                                                                        |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards)                 | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="intermediate"> |
| [Section 508 Support](../common/accessibility#accessibility-standards)              | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="intermediate"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support)              | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Right-To-Left Support](../common/accessibility#right-to-left-support)              | <img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> |
| [Color Contrast](../common/accessibility#color-contrast)                            | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Mobile Device Support](../common/accessibility#mobile-device-support)              | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support)  | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="intermediate"> |
| [Accessibility Checker Validation](../common/accessibility#ensuring-accessibility)  | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
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

## WAI-ARIA Attributes

The Diagram component follows [WAI-ARIA] patterns to meet accessibility requirements. The following ARIA attributes are used in the Diagram component:

| Attributes | Purpose |
| --- | --- |
| `aria-label` | Provides an accessible name for the Diagram Objects. |

## Aria-Label
The `aria-label` attribute provides text labels with default descriptions for the following elements in the Diagram component:

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>Element</b></td>
<td><b>Default description</b></td>
</tr>
<tr>
<td>ResizeNorthWest</td>
<td>Thumb to resize the selected object on the top-left corner.</td>
</tr>
<tr>
<td>ResizeNorthEast</td>
<td>Thumb to resize the selected object on the top-right side direction.</td>
</tr>
<tr>
<td>ResizeSouthWest</td>
<td>Thumb to resize the selected object on the bottom-left side direction.</td>
</tr>
<tr>
<td>ResizeSouthEast</td>
<td>Thumb to resize the selected object on the bottom-right side direction.</td>
</tr>
<tr>
<td>ResizeNorth</td>
<td>Thumb to resize the selected object on the top side direction.</td>
</tr>
<tr>
<td>ResizeSouth</td>
<td>Thumb to resize the selected object on the bottom side direction.</td>
</tr>
<tr>
<td>ResizeWest</td>
<td>Thumb to resize the selected object on the left side direction.</td>
</tr>
<tr>
<td>ResizeEast</td>
<td>Thumb to resize the selected object on the right side direction.</td>
</tr>
<tr>
<td>ConnectorSourceThumb</td>
<td>Thumb to move the source point of the connector.</td>
</tr>
<tr>
<td>ConnectorTargetThumb</td>
<td>Thumb to move the target point of the connector.</td>
</tr>
<tr>
<td>RotateThumb</td>
<td>Thumb to rotate the selected object.</td>
</tr>
</table>


### Screen Reader Support

The Diagram component supports screen readers, and its information is properly conveyed by screen readers based on ARIA attributes and content structure.

### Mobile Device Support

Syncfusion<sup style="font-size:70%">&reg;</sup> Diagram component is designed to be user-friendly and accessible on mobile devices, including for users with disabilities. The component is responsive, adapts to various screen sizes and orientations, and provides touch-friendly interactions.



### Keyboard Navigation Support

Syncfusion<sup style="font-size:70%">&reg;</sup> Diagram component supports keyboard navigation, allowing users who rely on assistive technologies to navigate and interact with the component effectively.

## Keyboard Interaction

The Diagram component follows [keyboard interaction](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html) guidelines, making it accessible for users who rely on keyboard navigation. The following keyboard shortcuts are supported. Use the tables below for quick reference:

**Selection and Clipboard Operations**

| Command | Action |
| --- | --- |
| Ctrl + A | Select All |
| Ctrl + X | Cut |
| Ctrl + C | Copy |
| Ctrl + V | Paste |

**Edit Operations**

| Command | Action |
| --- | --- |
| Ctrl + Z | Undo |
| Ctrl + Y | Redo |
| Delete | Delete |

**Navigation and Movement**

| Command | Action |
| --- | --- |
| <kbd>Up Arrow</kbd> | Move selected object up |
| <kbd>Down Arrow</kbd> | Move selected object down |
| <kbd>Left Arrow</kbd> | Move selected object left |
| <kbd>Right Arrow</kbd> | Move selected object right |

**Annotation Editing**

| Command | Action |
| --- | --- |
| <kbd>Enter</kbd> | Start Annotation Edit |
| <kbd>Escape</kbd> | End Annotation Edit |



## Ensuring Accessibility

The Diagram component's accessibility levels are validated through [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Diagram component is demonstrated in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/diagram.html) in a new window to evaluate the accessibility of the Diagram component with accessibility tools.

## See also

- [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React components](../common/accessibility)