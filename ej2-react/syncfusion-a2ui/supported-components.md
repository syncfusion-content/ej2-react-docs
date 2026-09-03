---
layout: post
title: Supported Syncfusion A2UI Components for React | Syncfusion
description: Reference list of all 58 Syncfusion EJ2 React adapters shipped in @syncfusion/ej2-react-a2ui, grouped by category with A2UI catalog ids and short descriptions.
control: Supported Components
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Supported Syncfusion A2UI Components

The [`@syncfusion/ej2-react-a2ui`](https://www.npmjs.com/package/@syncfusion/ej2-react-a2ui) package ships a catalog of **50+ Syncfusion EJ2 React adapters** — **58 components in total** when the A2UI layout primitives from `basicCatalog` are included. Every adapter implements the A2UI v0.9 component contract, so an agent can stream any of them as part of a `createSurface` or `updateComponents` message and have it rendered by `<SyncfusionA2UIProvider/>` with no extra wiring.

The table below groups the components by category and lists the **A2UI catalog id** (the string used inside an A2UI `component` payload) and a short description of what each one does. Use the id column when you are writing A2UI JSON by hand; use the description column to decide which component to ask the agent for.

## Data Grid & Trees

| Component | Description |
| --- | --- |
| `SyncfusionDataGrid` | Paged, sortable, filterable, editable, virtualised data grid. |
| `SyncfusionTreeGrid` | Hierarchical grid with parent/child mapping. |

## Charts & Visualisation

| Component | Description |
| --- | --- |
| `SyncfusionChart` | 30+ chart types (line, bar, area, spline, stacking, radar, polar, bubble, range, hilo, waterfall, histogram, …). |
| `Syncfusion3DChart` | 3D column / bar variants. |
| `SyncfusionHeatMap` | Heat map for density / matrix / risk visualization. |
| `SyncfusionDiagram` | Node-link diagramming for org charts, flowcharts, network maps, BPMN, and similar shapes. |
| `SyncfusionMaps` | Geographic / choropleth map with markers, bubbles, legends, and geographic data layers. |

## Scheduling & Planning

| Component | Description |
| --- | --- |
| `SyncfusionScheduler` | Day / week / work-week / month / agenda views with appointments, resources, and recurrence. |
| `SyncfusionGanttChart` | Gantt view with tasks, dependencies, baselines, and resource scheduling. |

## Spreadsheet

| Component | Description |
| --- | --- |
| `SyncfusionSpreadsheet` | Excel-like grid with formulas, cell formatting, sheets, named ranges, and selection. |

## Buttons & Action Triggers

| Component | Description |
| --- | --- |
| `SyncfusionButton` | Standard click button with icon, primary / secondary styling, and toggle mode. |
| `SyncfusionDropDownButton` | Button whose click opens a menu of actions. |
| `SyncfusionSplitButton` | Primary action plus an attached dropdown of secondary actions. |
| `SyncfusionProgressButton` | Button that shows a spinner / progress fill while an async action runs. |
| `SyncfusionSpeedDial` | Floating action button that expands into a stack of related actions. |

## Chips

| Component | Description |
| --- | --- |
| `SyncfusionChipList` | Tag / pill list for selections, filters, or removable tokens. |

## Selection Controls

| Component | Description |
| --- | --- |
| `SyncfusionRadioButton` | Mutually exclusive single-choice control with optional label. |
| `SyncfusionCheckBox` | Tri-state boolean control for binary on / off choices. |
| `SyncfusionSwitch` | On / off toggle for boolean settings. |

## Lists

| Component | Description |
| --- | --- |
| `SyncfusionListView` | Vertical list of items with template, grouping, and selection. |

## Cards

| Component | Description |
| --- | --- |
| `SyncfusionCard` | Container with header, body, and footer blocks for grouped content. |

## Rating

| Component | Description |
| --- | --- |
| `SyncfusionRating` | Star / symbol rating input with precision and read-only mode. |

## Text Inputs

| Component | Description |
| --- | --- |
| `SyncfusionTextBox` | Single-line text input with validation, icons, and floating label. |
| `SyncfusionTextArea` | Multi-line text input with resizing and character counter. |
| `SyncfusionNumericTextBox` | Numeric input with min, max, step, and format options. |
| `SyncfusionMaskedTextBox` | Masked input for fixed-format strings (phone, zip, serial, …). |
| `SyncfusionColorPicker` | Color selection with palette, RGB / HSL / HEX modes, and opacity. |
| `SyncfusionSlider` | Single-thumb or range slider with tick marks and tooltip. |
| `SyncfusionOTPInput` | One-time-passcode input with separate boxes per digit. |

## Dropdowns & Pickers

| Component | Description |
| --- | --- |
| `SyncfusionDropDownList` | Single-select dropdown with search, grouping, and templating. |
| `SyncfusionComboBox` | Editable, searchable, single-select combobox with autocomplete. |
| `SyncfusionMultiSelect` | Multi-value selection with chips, tagging, and search. |

## Date & Time

| Component | Description |
| --- | --- |
| `SyncfusionCalendar` | Month / year / decade view for picking a single date. |
| `SyncfusionDatePicker` | Text input + popup calendar for selecting a single date. |
| `SyncfusionDateRangePicker` | Two linked date inputs for selecting a start and end date. |
| `SyncfusionDateTimePicker` | Date picker with editable time spinner. |
| `SyncfusionTimePicker` | Time-only picker with hour, minute, second, and format options. |

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

## Feedback & Overlay

| Component | Description |
| --- | --- |
| `SyncfusionMessage` | Inline informational / warning / error / success banner. |
| `SyncfusionToast` | Auto-dismissing notification toast with severity and actions. |
| `SyncfusionSpinner` | Indeterminate or determinate progress spinner overlay. |
| `SyncfusionSkeleton` | Placeholder shimmer for content that is still loading. |
| `SyncfusionBadge` | Numeric or text badge overlaid on a target element. |

## Document Authoring & Review

| Component | Description |
| --- | --- |
| `SyncfusionDocumentEditorContainer` | Full-featured Word-compatible document editor with ribbon, comments, track changes, and layout. |
| `SyncfusionPdfViewer` | PDF viewer with paging, search, zoom, and form filling. |

## Editors

| Component | Description |
| --- | --- |
| `SyncfusionRichTextEditor` | WYSIWYG rich-text editor with toolbar, formatting, and paste-from-Word. |
| `SyncfusionBlockEditor` | Block-based content editor for structured rich content. |
| `SyncfusionInPlaceEditor` | Click-to-edit inline editor with built-in input modes. |

## File & Barcode

| Component | Description |
| --- | --- |
| `SyncfusionQRCode` | QR code generator with size, error-correction, and color options. |
| `SyncfusionDataMatrix` | Data Matrix (ECC200) 2D barcode generator. |
| `SyncfusionBarcodeGenerator` | 1D barcode generator (Code128, Code39, EAN, UPC, …). |

## Utilities

| Component | Description |
| --- | --- |
| `SyncfusionAvatar` | Initials / image / icon avatar with shape and size variants. |

## See also

* [Overview](./overview)
* [Getting Started](./getting-started)
* [AI Integration](./ai-integration)
* [Composer Usage](./composer-usage)
