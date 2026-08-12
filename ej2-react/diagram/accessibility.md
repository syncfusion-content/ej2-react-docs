---
layout: post
title: Accessibility in React Diagram | Syncfusion®
description: Review the WAI-ARIA and Section 508 compliance matrix for the React Diagram, including screen reader, color contrast, and keyboard navigation support.
control: Accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React Diagram

The Diagram component provides built-in compliance with the [WAI-ARIA](http://www.w3.org/WAI/PF/aria-practices) specifications. WAI-ARIA accessibility support is achieved through attributes like `aria-label`, which provide information about elements in a document for assistive technologies such as screen readers.

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

The Diagram component follows [WAI-ARIA](http://www.w3.org/WAI/PF/aria-practices) patterns to meet accessibility requirements. The following ARIA attributes are used in the Diagram component:

| Attributes | Purpose |
| --- | --- |
| `aria-label` | Provides an accessible name for the Diagram Objects. |

The Diagram component provides WAI-ARIA support by default. No additional configuration is required for assistive technologies to receive the accessible names provided by the component’s aria-label attributes.

## aria-label
The `aria-label` attribute provides text labels with default descriptions for the following elements in the Diagram component:

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>Element</b></td>
<td><b>Default description</b></td>
</tr>
<tr>
<td>ResizeNorthWest</td>
<td>Thumb to resize the selected object in the top-left direction.</td>
</tr>
<tr>
<td>ResizeNorthEast</td>
<td>Thumb to resize the selected object in the top-right direction.</td>
</tr>
<tr>
<td>ResizeSouthWest</td>
<td>Thumb to resize the selected object in the bottom-left direction.</td>
</tr>
<tr>
<td>ResizeSouthEast</td>
<td>Thumb to resize the selected object in the bottom-right direction.</td>
</tr>
<tr>
<td>ResizeNorth</td>
<td>Thumb to resize the selected object in the top direction.</td>
</tr>
<tr>
<td>ResizeSouth</td>
<td>Thumb to resize the selected object in the bottom direction.</td>
</tr>
<tr>
<td>ResizeWest</td>
<td>Thumb to resize the selected object in the left direction.</td>
</tr>
<tr>
<td>ResizeEast</td>
<td>Thumb to resize the selected object in the right direction.</td>
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


## Screen Reader Support

The Diagram component supports screen readers, and its information is properly conveyed by screen readers based on ARIA attributes and content structure.

## Mobile Device Support

Syncfusion<sup style="font-size:70%">&reg;</sup> Diagram component is designed to be user-friendly and accessible on mobile devices, including for users with disabilities. The component is responsive, adapts to various screen sizes and orientations, and provides touch-friendly interactions.



## Keyboard Navigation Support

Syncfusion<sup style="font-size:70%">&reg;</sup> Diagram component supports keyboard navigation, allowing users who rely on assistive technologies to navigate and interact with the component effectively.

## Keyboard Interaction

The Diagram component follows [keyboard interaction](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html) guidelines, making it accessible for users who rely on keyboard navigation. Keyboard shortcuts are enabled by default in the Diagram component and require no additional configuration. The following keyboard shortcuts are supported:

**Selection and Clipboard Operations**

| **Command** | **Action** |
| --- | --- |
| <kbd>Ctrl + A</kbd> | Select All |
| <kbd>Ctrl + X</kbd> | Cut |
| <kbd>Ctrl + C</kbd> | Copy |
| <kbd>Ctrl + V</kbd> | Paste |

**Edit Operations**

| **Command** | **Action** |
| --- | --- |
| <kbd>Ctrl + Z</kbd> | Undo |
| <kbd>Ctrl + Y</kbd> | Redo |
| <kbd>Delete</kbd> | Delete |

**Navigation and Movement**

| **Command** | **Action** |
| --- | --- |
| <kbd>Up Arrow</kbd> | Move selected object up |
| <kbd>Down Arrow</kbd> | Move selected object down |
| <kbd>Left Arrow</kbd> | Move selected object left |
| <kbd>Right Arrow</kbd> | Move selected object right |

**Annotation Editing**

| **Command** | **Action** |
| --- | --- |
| <kbd>Enter</kbd> | Start Annotation Edit |
| <kbd>Escape</kbd> | End Annotation Edit |



## Ensuring Accessibility

The Diagram component's accessibility levels are validated through [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) software tools during automated testing.

The accessibility compliance of the Diagram component is demonstrated in the following sample. Open the [sample](https://ej2.syncfusion.com/accessibility/diagram.html) in a new window to evaluate the accessibility of the Diagram component with accessibility tools.

## See also

- [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React components](../common/accessibility)