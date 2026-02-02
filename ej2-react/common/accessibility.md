---
layout: post
title: Accessibility Support for React Components | Syncfusion
description: Learn about accessibility standards, WCAG 2.2 compliance, Section 508, WAI-ARIA, keyboard navigation, and screen reader support in Syncfusion React components.
control: common
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React Components

## Accessibility Overview

Accessibility ensures user interface components are usable by people with disabilities. This includes high-contrast themes, readable text, alternative text for images, and controls that support keyboard navigation and assistive technologies such as screen readers.

## Accessibility Standards

A component is considered accessible when it conforms to established standards that ensure usability for people with disabilities. Syncfusion<sup style="font-size:70%">&reg;</sup> React components adhere to the following key standards:

### ADA (Americans with Disabilities Act)

[ADA](https://www.ada.gov/) is a comprehensive civil rights law prohibiting discrimination based on disability. It ensures equal access and opportunities in digital experiences for people with disabilities.

### WCAG 2.2 (Web Content Accessibility Guidelines)

[WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/) provides internationally recognized guidelines from the World Wide Web Consortium (W3C) to make web content accessible. It defines principles and success criteria organized under four core principles: Perceivable, Operable, Understandable, and Robust.

### Section 508

[Section 508](https://www.section508.gov/) establishes U.S. federal requirements for electronic and information technology accessibility. These standards, aligned with WCAG, apply to federal agencies and ensure accessible digital content for people with disabilities.

### WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications)

[WAI-ARIA](https://www.w3.org/WAI/ARIA/) supplies technical specifications to improve accessibility of dynamic content and rich internet applications. It defines roles, states, and properties that enhance compatibility with assistive technologies.

### Keyboard Navigation

[Keyboard navigation](https://www.w3.org/TR/WCAG22/#keyboard-accessible) enables users to interact with interfaces using only a keyboard. This capability is essential for people who cannot use a mouse or other pointing devices.

Syncfusion<sup style="font-size:70%">&reg;</sup> React components comply with these standards to deliver an inclusive user experience.

## Accessibility Compliance

Syncfusion<sup style="font-size:70%">&reg;</sup> React components implement recognized accessibility standards and specifications to provide an intuitive experience for users with disabilities.

### Compliance Methodologies

Syncfusion<sup style="font-size:70%">&reg;</sup> applies the following approaches to validate and maintain accessibility:

#### WAI-ARIA Pattern Implementation

Components follow [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/) to implement appropriate ARIA roles, states, and properties, ensuring consistent behavior with assistive technologies.

#### Manual and Automated Testing

- **Manual Testing**: Components are tested with screen readers including [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) (Windows) and [VoiceOver](https://support.apple.com/en-in/guide/voiceover/vo2706/mac) (macOS) to confirm accurate announcements and interaction flows.
- **Automated Testing**: Tools such as [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) detect and help resolve violations.

#### ARIA Attribute Management

Each component receives a suitable `role` attribute and dynamically updates ARIA attributes in accordance with WCAG 2.2 requirements, accurately reflecting state changes to assistive technologies.

## Accessibility Features

Syncfusion<sup style="font-size:70%">&reg;</sup> React components incorporate the following accessibility features:

### Screen Reader Support

Components conform to [WAI-ARIA](https://www.w3.org/WAI/ARIA/) standards and are compatible with major screen readers, including:
- [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) (Windows)
- [VoiceOver](https://support.apple.com/en-in/guide/voiceover/vo2706/mac) (macOS)
- JAWS
- NVDA

### Right-to-Left Support

Right-to-Left (RTL) layout support enables effective communication in languages such as Arabic, Hebrew, and Persian. For details, see the [Right-to-Left documentation](https://ej2.syncfusion.com/react/documentation/common/right-to-left).

### Color Contrast

Predefined themes satisfy WCAG 2.2 Level AA contrast ratios (4.5:1 for normal text and 3:1 for large text). Custom themes should be validated to maintain these ratios.

### Mobile Device Support

Components are fully responsive, adapt to different screen sizes and orientations, and provide touch-friendly interactions, improving accessibility on mobile devices.

### Keyboard Navigation Support

Comprehensive keyboard support allows navigation and interaction without a mouse. Standard patterns include:
- **Tab** / **Shift + Tab**: Move focus forward/backward
- **Enter** / **Space**: Activate buttons and interactive elements
- **Arrow Keys**: Navigate within lists, grids, menus, and similar controls
- **Escape**: Close dialogs, popups, and overlays
- **Home** / **End**: Jump to first/last item in lists and grids

## Ensuring Accessibility

Syncfusion<sup style="font-size:70%">&reg;</sup> maintains accessibility through rigorous testing and ongoing refinement.

### Automated Testing

Tools such as [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) continuously scan components for compliance issues and suggest fixes.

### Manual Testing

Manual evaluation with screen readers (Narrator, VoiceOver) verifies correct labeling, state announcements, and interaction behavior for assistive technology users.

### Continuous Improvement

Accessibility is enhanced through:
- Regular internal audits
- User-reported issues and feedback
- Alignment with evolving standards
- Advances in assistive technology

## Voluntary Product Accessibility Template (VPAT)

The [Voluntary Product Accessibility Template (VPAT)](https://www.itic.org/policy/accessibility/vpat) documents conformance to accessibility standards such as Section 508, WCAG 2.2, and EN 301 549.

Download the latest **Syncfusion<sup style="font-size:70%">&reg;</sup> VPAT**: [VPAT Document](https://ej2.syncfusion.com/accessibility/Syncfusion-VPAT2.5.docx)

This report details how Syncfusion<sup style="font-size:70%">&reg;</sup> products meet accessibility requirements.

## Accessibility Support for Specific Components

Syncfusion<sup style="font-size:70%">&reg;</sup> React components comply with **Section 508**, **WCAG 2.2**, **WAI-ARIA**, and **keyboard navigation** standards. The table below links to component-specific accessibility documentation.

<style>
#table
{
width: 100%;
line-height: 2 !important;
}

#table th {
    border-bottom:1px solid #dedede !important;
    font-weight: bold;
}

#table tr
{
border:1px solid #dedede !important;
}

#table td
{
border:0 !important;
vertical-align: top;
}
</style>

<table id="table">
    <thead>
        <tr>
            <th>Component</th>
            <th>Section 508</th>
            <th>WCAG 2.2</th>
            <th>Keyboard Navigation</th>
            <th>Accessibility Documentation</th>
        </tr>
    </thead>
<tbody>
    <tr>
        <td>DataGrid</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/grid/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Pivot Table</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/pivotview/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Tree Grid</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/treegrid/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Spreadsheet</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/spreadsheet/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>In-place Editor</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/inplace-editor/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>PDF Viewer</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/pdfviewer/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>RichTextEditor</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/rich-text-editor/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Word Processor</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/document-editor/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Image Editor</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/image-editor/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Dialog</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/dialog/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>ListView</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/listview/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Tooltip</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/tooltip/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Splitter</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/splitter/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Dashboard Layout</td>
        <td>Yes</td>
        <td>AA</td>
        <td>NA</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/dashboard-layout/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Accumulation Chart</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/accumulation-chart/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Charts</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/chart/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Stock Chart</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/stock-chart/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Circular Gauge</td>
        <td>Yes</td>
        <td>AA</td>
        <td>NA</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/circular-gauge/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Diagram</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/diagram/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>HeatMap Chart</td>
        <td>Yes</td>
        <td>AA</td>
        <td>NA</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/heatmap-chart/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Linear Gauge</td>
        <td>Yes</td>
        <td>AA</td>
        <td>NA</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/linear-gauge/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Maps</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/maps/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Range Selector</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/range-navigator/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Smith Chart</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/smithchart/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Sparkline Charts</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/sparkline/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>TreeMap</td>
        <td>Yes</td>
        <td>AA</td>
        <td>NA</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/treemap/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Bullet Chart</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/bullet-chart/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Kanban</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/kanban/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Button</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/button/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Button Group</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/button-group/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Dropdown Menu</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/drop-down-button/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Progress Button</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/progress-button/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Split Button</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/split-button/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Chips</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/chips/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>FAB</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/floating-action-button/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Speed Dial</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/speed-dial/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Calendar</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/calendar/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>DatePicker</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/datepicker/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>DateRangePicker</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/daterangepicker/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>DateTime Picker</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/datetimepicker/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>TimePicker</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/timepicker/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Gantt Chart</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/gantt/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>TextBox</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/textbox/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Input Mask</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/maskedtextbox/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Masked TextBox</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/maskedtextbox/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Numeric TextBox</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/numerictextbox/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Radio Button</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/radio-button/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>CheckBox</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/check-box/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Color Picker</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/color-picker/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>File Upload</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/uploader/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Range Slider</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/range-slider/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Toggle Switch Button</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/switch/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Signature</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/signature/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Rating</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/rating/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Query Builder</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/query-builder/accessibility">Documentation</a></td>
    </tr> 
    <tr>
        <td>Accordion</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/accordion/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>AppBar</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/appbar/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Breadcrumb</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/breadcrumb/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Carousel</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/carousel/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Context Menu</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/context-menu/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Menu Bar</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/menu/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Sidebar</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/sidebar/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Tabs</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/tab/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Toolbar</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/toolbar/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Ribbon</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/ribbon/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>TreeView</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/treeview/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>File Manager</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/file-manager/accessibility">Documentation</a></td>
    </tr> 
    <tr>
        <td>Stepper</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/stepper/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Message</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/message/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Toast</td>
        <td>Yes</td>
        <td>AA</td>
        <td>NA</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/toast/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Progress Bar</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/progress-bar/accessibility">Documentation</a></td>
    </tr>
    <tr>
        <td>Skeleton</td>
        <td>Yes</td>
        <td>AA</td>
        <td>Yes</td>
        <td><a target="_self" href="https://ej2.syncfusion.com/react/documentation/skeleton/accessibility">Documentation</a></td>
    </tr>
</tbody>
</table>

> **Note**: Components marked with "NA" for keyboard navigation are primarily visual components that do not require direct keyboard interaction. These components still maintain accessibility through proper ARIA attributes and semantic HTML structure.

## See Also

- [Right-to-Left Support](./right-to-left)
- [Globalization and Localization](./globalization/overview)
- [Theming](../appearance/theme)
- [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [WCAG 2.2 Guidelines](https://www.w3.org/TR/WCAG22/)