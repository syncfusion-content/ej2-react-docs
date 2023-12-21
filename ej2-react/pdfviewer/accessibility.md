---
layout: post
title: Accessibility in React Pdfviewer component | Syncfusion
description: Learn here all about Accessibility in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Syncfusion React PDF Viewer components

Accessibility in PDF Viewer component refers to the practice of designing and building user interface elements in a way that makes them accessible to users with disabilities. This can include a variety of things, such as making sure that text is high-contrast and easy to read, providing alternative text for images, and designing controls and interactions that can be used with a keyboard or assistive technology.

# Accessibility Criteria Description

## WCAG 2.2 Support

[WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) - The Web Content Accessibility Guidelines (WCAG) provide guidelines developed by the World Wide Web Consortium (W3C) to ensure web content is accessible to people with disabilities. `WCAG` establishes a framework of accessibility principles and their associated success criteria. The level of accessibility conformance achieved by a web application is determined by the extent to which it meets these success criteria, categorized into three levels: A, AA, and AAA.

| **Criterion Type** | **Description** |
|---|---|
| Applicable & Supports    | The success criterion is applicable to the component, but our component meets the requirement.|
| Applicable & Unsupported  | The success criterion is applicable to the component, but our component fails to meet the requirement.|
| Not Applicable           | The success criterion is not suitable for the component.  |
| Fully supported          | All applicable success criteria are supported.             |
| Partially supported      | Any of the applicable success criteria is not supported.  |
| Not supported            | None of the applicable success criteria are supported.    |

## Section 508 Support

[Section 508](https://www.section508.gov/) - It is a set of guidelines for making electronic and information technology (EIT) accessible to people with disabilities. These standards apply to federal agencies in the United States, and they are based on the Web Content Accessibility Guidelines (WCAG).

- WCAG stands for the Web Content Accessibility Guidelines, which are a set of standards authored by the Web Accessibility Initiative (WAI) under the W3C.
- There are currently three versions of WCAG (1.0, 2.0, 2.1, 2.2) and three conformance levels (A, AA, AAA).
- Section 508 compliance requires conformance with WCAG 2.0 AA.
- Reference: [Section 508 Compliance Requirements](https://krisrivenburgh.medium.com/section-508-compliance-website-accessibility-requirements-caf63703cdb8)

The compatibility is denoted as follows

| **Criterion Type** | **Description** |
|---|---|
|Fully supported|If a component's WCAG 2.0 conformance level is AA or AAA.|
|Partially supported|  If a component's WCAG 2.0 conformance level is A. |
|Not supported| If a component's WCAG 2.0 conformance does not meet level A.|


## Screen Reader Support

A screen reader allows people who are blind or visually impaired to use a computer by reading aloud the text that is displayed on the screen. Syncfusion React PDF Viewer components followed the [WAI-ARIA](https://www.w3.org/WAI/ARIA/) standards to work properly in the screen readers such as [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) for Windows and [Embedded VoiceOver](https://support.apple.com/en-in/guide/voiceover/vo2706/mac) for MAC.

## Right-To-Left Support

Right-to-Left (RTL) support allows applications to effectively communicate with users who use languages that are written from right to left, such as Arabic, Hebrew, etc. Syncfusion React PDF Viewer components support the Right-to-Left feature. Refer to the [Right-to-Left documentation](https://ej2.syncfusion.com/react/documentation/common/right-to-left) to learn more about this support.

The compatibility is denoted as follows

| **Criterion Type** | **Description** |
|---|---|
|Fully supported| When a component is rendered properly in RTL.|
|Partially supported| When some features of a component are not rendered properly in RTL.|
|Not supported| When a component is not rendered properly in RTL.|

## Color Contrast

Syncfusion React PDF Viewer components come equipped with [predefined themes](https://ej2.syncfusion.com/react/documentation/appearance/theme) that guarantee the presence of satisfactory color contrast, benefiting individuals with visual impairments.

The compatibility is denoted as follows

| **Criterion Type** | **Description** |
|---|---|
|Fully supported| When no color contrast error is reported on the Accessibility Insights extension for Chrome on the Material 3 theme.|
|Partially supported|When a few color contrast errors are reported. |
|Not supported|When a color contrast error occurs on the entire component.|

## Mobile Device Support

Syncfusion React PDF Viewer components are more user-friendly and accessible to individuals using mobile devices, including those with disabilities. These are designed to be responsive, adaptable to various screen sizes and orientations, and touch-friendly.

The compatibility is denoted as follows

| **Criterion Type** | **Description** |
|---|---|
|Fully supported|When a component is working properly on mobile devices. |
|Partially supported|When some of the features are not working properly on mobile devices. |
|Not supported|When a component is not working properly on mobile devices. |

- Form designer not supported in mobile.

## Keyboard navigation support

Syncfusion React PDF Viewer components support keyboard navigation, allowing users who rely on alternate methods to effortlessly navigate and interact with the component.

The compatibility is denoted as follows

| **Criterion Type** | **Description** |
|---|---|
|Partially supported|When a component is working properly using keyboard interaction. |
|Not supported|When a component is not working properly using keyboard interaction.|

## Accessibility Checker Validation

Ensuring the accessibility of Syncfusion React PDF Viewer components is crucial for making the product inclusive and user-friendly for individuals with disabilities. This process involves various types of accessibility testing.

This testing is conducted on Jenkins CI.

| **Criterion Type** | **Description** |
|---|---|
|Fully supported|When the percentage of accessibility is above 90%. |
|Partially supported|When the percentage is greater than 85% (94%+). |
|Not supported|When the percentage is less than 85%.|

## Axe-core Accessibility Validation

This testing is conducted on Jenkins CI. 

| **Criterion Type** | **Description** |
|---|---|
|Fully supported|When no violation is reported.|
|Partially supported|When any of the violations are ignored. |
|Not supported|When a violation is not resolved. |

## See also

* [Keyboard accessibility](./keyboard-accessibility)