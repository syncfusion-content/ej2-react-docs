---
layout: post
title: Supported Syncfusion A2UI Components for React | Syncfusion
description: Reference list of every Syncfusion EJ2 React adapter shipped in @syncfusion/ej2-react-a2ui, grouped by category with A2UI catalog ids and short descriptions.
control: Supported Components
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Supported Syncfusion A2UI Components

The [Syncfusion A2UI for React package](https://www.npmjs.com/package/@syncfusion/ej2-react-a2ui) ships a catalog of **50+ Syncfusion EJ2 React adapters** when the A2UI layout primitives from `basicCatalog` are included. Every adapter implements the A2UI v0.9 component contract, so an agent can stream any of them as part of a `createSurface` or `updateComponents` message and have it rendered by `<SyncfusionA2UIProvider/>` with no extra wiring. Support for the rest of the Syncfusion EJ2 React library will be available in upcoming releases.

This page is the reference. Use it when you need to know the exact adapter id to put inside an A2UI component payload, or when you want to see the full shape of the catalog at a glance. The tutorial lives on [Getting Started](./getting-started); end-to-end Composer authoring lives on [A2UI Composer Walkthrough](./a2ui-composer/walkthrough).

## Data Grid & Trees

| Component | Description |
| --- | --- |
| `SyncfusionDataGrid` | Paged, sortable, filterable, editable, virtualised data grid. |
| `SyncfusionTreeGrid` | Hierarchical grid with parent/child mapping. |

## Charts & Visualization

| Component | Description |
| --- | --- |
| `SyncfusionChart` | 30+ chart types — line, bar, area, spline, stacking, radar, polar, bubble, range, hilo, waterfall, histogram. |
| `Syncfusion3DChart` | 3D column / bar variants. |
| `SyncfusionHeatMap` | Heat map for density, matrix, or risk visualization. |
| `SyncfusionDiagram` | Node-link diagramming — org charts, flowcharts, network maps, BPMN, and related shapes. |
| `SyncfusionMaps` | Geographic / choropleth map with markers, bubbles, legends, and geographic data layers. |

## Scheduling & Planning

| Component | Description |
| --- | --- |
| `SyncfusionScheduler` | Day, week, work-week, month, and agenda views with appointments, resources, and recurrence. |
| `SyncfusionGanttChart` | Gantt view with tasks, dependencies, baselines, and resource scheduling. |

## Navigation

| Component | Description |
| --- | --- |
| `SyncfusionAppBar` | Top application bar with title, leading icon, and overflow menu. |
| `SyncfusionTabs` | Horizontal / vertical tab strip with closable and lazy-loaded panes. |
| `SyncfusionStepper` | Linear / non-linear progress indicator for multi-step flows. |
| `SyncfusionToolbar` | Toolbar of buttons, toggles, and inputs grouped by purpose. |
| `SyncfusionBreadcrumb` | Hierarchical breadcrumb of links for the current location. |
| `SyncfusionMenu` | Vertical / horizontal menu with sub-menus, icons, and shortcuts. |
| `SyncfusionPager` | Numeric / previous-next pager for list or grid pagination. |

## Text Inputs

| Component | Description |
| --- | --- |
| `SyncfusionTextBox` | Single-line text input with validation, icons, and floating label. |
| `SyncfusionTextArea` | Multi-line text input with resizing and character counter. |
| `SyncfusionNumericTextBox` | Numeric input with min, max, step, and format options. |
| `SyncfusionMaskedTextBox` | Masked input for fixed-format strings — phone, zip, serial, etc. |
| `SyncfusionColorPicker` | Color selection with palette, RGB / HSL / HEX modes, and opacity. |
| `SyncfusionSlider` | Single-thumb or range slider with tick marks and tooltip. |
| `SyncfusionOTPInput` | One-time-passcode input with separate boxes per digit. |

## Date & Time

| Component | Description |
| --- | --- |
| `SyncfusionCalendar` | Month, year, and decade view for picking a single date. |
| `SyncfusionDatePicker` | Text input + popup calendar for selecting a single date. |
| `SyncfusionDateRangePicker` | Two linked date inputs for selecting a start and end date. |
| `SyncfusionDateTimePicker` | Date picker with editable time spinner. |
| `SyncfusionTimePicker` | Time-only picker with hour, minute, second, and format options. |

## Buttons & Action Triggers

| Component | Description |
| --- | --- |
| `SyncfusionButton` | Standard click button with icon, primary / secondary styling, and toggle mode. |
| `SyncfusionDropDownButton` | Button whose click opens a menu of actions. |
| `SyncfusionSplitButton` | Primary action plus an attached dropdown of secondary actions. |
| `SyncfusionProgressButton` | Button that shows a spinner / progress fill while an async action runs. |
| `SyncfusionSpeedDial` | Floating action button that expands into a stack of related actions. |

## Feedback & Overlay

| Component | Description |
| --- | --- |
| `SyncfusionMessage` | Inline informational, warning, error, or success banner. |
| `SyncfusionToast` | Auto-dismissing notification toast with severity and actions. |
| `SyncfusionSpinner` | Indeterminate or determinate progress spinner overlay. |
| `SyncfusionSkeleton` | Placeholder shimmer for content that is still loading. |
| `SyncfusionBadge` | Numeric or text badge overlaid on a target element. |

## Editors

| Component | Description |
| --- | --- |
| `SyncfusionRichTextEditor` | WYSIWYG rich-text editor with toolbar, formatting, and paste-from-Word. |
| `SyncfusionBlockEditor` | Block-based content editor for structured rich content. |
| `SyncfusionInPlaceEditor` | Click-to-edit inline editor with built-in input modes. |

## Document Authoring & Review

| Component | Description |
| --- | --- |
| `SyncfusionDocumentEditorContainer` | Full-featured Word-compatible document editor with ribbon, comments, track changes, and layout. |
| `SyncfusionPdfViewer` | PDF viewer with paging, search, zoom, and form filling. |

## Dropdowns & Pickers

| Component | Description |
| --- | --- |
| `SyncfusionDropDownList` | Single-select dropdown with search, grouping, and templating. |
| `SyncfusionComboBox` | Editable, searchable, single-select combobox with autocomplete. |
| `SyncfusionMultiSelect` | Multi-value selection with chips, tagging, and search. |

## File & Barcode

| Component | Description |
| --- | --- |
| `SyncfusionQRCode` | QR code generator with size, error-correction, and color options. |
| `SyncfusionDataMatrix` | Data Matrix (ECC200) 2D barcode generator. |
| `SyncfusionBarcodeGenerator` | 1D barcode generator — Code128, Code39, EAN, UPC, etc. |

## Selection, Layout & Other Components

The following components do not fit into the preceding categories. They are grouped together to keep the page from breaking "every component has its own H2".

| Component | Description |
| --- | --- |
| `SyncfusionRadioButton` | Mutually exclusive single-choice control with optional label. |
| `SyncfusionSwitch` | On / off toggle for boolean settings. |
| `SyncfusionCheckBox` | Tri-state boolean control for binary on / off choices. |
| `SyncfusionChipList` | Tag / pill list for selections, filters, or removable tokens. |
| `SyncfusionListView` | Vertical list of items with template, grouping, and selection. |
| `SyncfusionCard` | Container with header, body, and footer blocks for grouped content. |
| `SyncfusionRating` | Star / symbol rating input with precision and read-only mode. |
| `SyncfusionSpreadsheet` | Excel-like grid with formulas, cell formatting, sheets, named ranges, and selection. |
| `SyncfusionAvatar` | Initials / image / icon avatar with shape and size variants. |

## See also

- [Overview](./overview)
- [Getting Started](./getting-started)
- [AI Integration](./ai-integration)
- [A2UI v0.9 protocol](https://a2ui.org/specification/v0.9-a2ui/)

