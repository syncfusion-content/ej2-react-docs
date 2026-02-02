---
layout: post
title: npm Packages for Syncfusion React Components | Syncfusion
description: Learn about the npm packages available for Syncfusion React components, including package structure and installation commands.
control: Npm package 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# npm Packages for Syncfusion<sup style="font-size:70%">&reg;</sup> React UI Components

Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components are available as individual [npm packages](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-react). The npm packages are organized based on component functionality and usage.

## Anatomy of npm Packages

Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components are distributed as npm packages. The following table explains the purpose of each file available in the package:

|    Files                                                                  |    Purpose                                                                                                                                                                                                                                                                                   |
|---------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    `dist/es6`                                                               |    Contains ES6 formatted JavaScript files for the package.                                                                                                   |
|    `dist/<packagename>.umd.min.js`<br>`dist/<packagename>.umd.js`              |        For applications using AMD or CommonJS module loaders. These files can be used with RequireJS or other compatible module loaders.                                                                                                                                                                                             |
|    `src/`                                                                   |    Contains script files in AMD format. These AMD files can be connected as a package in SystemJS or RequireJS.                                                                                                                                                                                                         |
|    `styles/<theme name>.css`<br>`styles/<theme name>.scss`                     |    Contains the CSS and SCSS files for the package.                                                                                                                                                                                                                             |

## Available npm Packages

### Syncfusion<sup style="font-size:70%">&reg;</sup> React Base

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Base is a common package for JavaScript - EJ2 React components, containing base libraries, methods, and class definitions.

|Package Name  |Installation command|
|--------|--------|
| [ej2-react-base](https://www.npmjs.com/package/@syncfusion/ej2-react-base)    | npm install @syncfusion/ej2-react-base |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React BarcodeGenerator

The Syncfusion<sup style="font-size:70%">&reg;</sup> Barcode component enables rendering of one-dimensional and two-dimensional barcodes in web pages. Barcodes provide a simple and inexpensive method of encoding text information that can be easily read by electronic readers.

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-barcode-generator](https://www.npmjs.com/package/@syncfusion/ej2-react-barcode-generator)    | npm install @syncfusion/ej2-react-barcode-generator | BarcodeGenerator |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React Buttons

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Buttons package contains UI components such as Button, CheckBox, RadioButton, Switch, and Chip.

<!-- markdownlint-disable MD033 -->

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-buttons](https://www.npmjs.com/package/@syncfusion/ej2-react-buttons)    | npm install @syncfusion/ej2-react-buttons | &bull; Button<br> &bull; CheckBox<br> &bull; Chip<br> &bull; RadioButton<br> &bull; Switch<br> |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React Calendars

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Calendars package contains date and time components such as Calendar, DatePicker, DateRangePicker, DateTimePicker, and TimePicker. These components provide options to disable dates, restrict selection, and display custom events.

<!-- markdownlint-disable MD033 -->

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-calendars](https://www.npmjs.com/package/@syncfusion/ej2-react-calendars)    |npm install @syncfusion/ej2-react-calendars | &bull; Calendar<br> &bull; DatePicker<br> &bull; DateRangePicker<br> &bull; DateTimePicker<br> &bull; TimePicker<br> |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React Charts

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Chart component visualizes data with user interactivity and provides customization options to configure data visually. It can bind data from sources such as an array of JSON objects, OData web services, or [DataManager](https://ej2.syncfusion.com/react/documentation/data/?utm_source=npm&utm_campaign=chart). All chart elements are rendered using Scalable Vector Graphics (SVG).

<!-- markdownlint-disable MD033 -->

|Package Name  |Installation command|Components
|--------|--------|-------|
| [ej2-react-charts](https://www.npmjs.com/package/@syncfusion/ej2-react-charts)    | npm install @syncfusion/ej2-react-charts | &bull; Accumulation Chart<br> &bull; Bullet Chart<br> &bull; Chart<br> &bull; Range Navigator<br> &bull; Smith Chart<br> &bull; Sparkline<br> &bull; Stock Chart<br> |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React CircularGauge

The Syncfusion<sup style="font-size:70%">&reg;</sup> React CircularGauge component visualizes numeric values on a circular scale. All elements are rendered using Scalable Vector Graphics (SVG).

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-circulargauge](https://www.npmjs.com/package/@syncfusion/ej2-react-circulargauge)    | npm install @syncfusion/ej2-react-circulargauge | CircularGauge |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React Data

A data management package for performing data operations such as grouping and sorting in client applications. It acts as an abstraction for using local data sources like arrays of JavaScript objects and remote data sources like web services returning JSON, JSONP, OData, or XML. Note: `ej2-data` is framework-agnostic and can be used outside React projects.

|Package Name  |Installation command|
|--------|--------|
| [ej2-data](https://www.npmjs.com/package/@syncfusion/ej2-data)    | npm install @syncfusion/ej2-data |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React Diagrams

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Diagram component visually represents information. It creates diagrams like flow charts, organizational charts, mind maps, and BPMN diagrams either through code or a visual interface.

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-diagrams](https://www.npmjs.com/package/@syncfusion/ej2-react-diagrams)    | npm install @syncfusion/ej2-react-diagrams | Diagrams |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React DropDowns

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Dropdowns package contains a collection of Dropdown components such as DropDown List, ComboBox, AutoComplete, MultiSelect Dropdown, and ListBox. These components include features such as data binding, grouping, sorting, filtering, and templates.

<!-- markdownlint-disable MD033 -->

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-dropdowns](https://www.npmjs.com/package/@syncfusion/ej2-react-dropdowns)    | npm install @syncfusion/ej2-react-dropdowns | &bull; AutoComplete<br> &bull; ComboBox<br> &bull; DropDown List<br> &bull; DropDown Tree<br> &bull; ListBox<br> &bull; MultiSelect Dropdown<br> |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React FileManager

The Syncfusion<sup style="font-size:70%">&reg;</sup> File Manager is a graphical user interface component for managing the file system. It enables users to perform common file operations such as accessing, editing, uploading, downloading, and sorting files and folders. This component also provides easy navigation for browsing or selecting files and folders.

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-filemanager](https://www.npmjs.com/package/@syncfusion/ej2-react-filemanager)    | npm install @syncfusion/ej2-react-filemanager | FileManager |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React Gantt

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Gantt visualizes and edits project schedules and tracks project progress. It helps organize and schedule projects, and the project schedule can be updated through interactions like editing, dragging, and resizing.

|Package Name  |Installation command|Components |
|--------|--------|
| [ej2-react-gantt](https://www.npmjs.com/package/@syncfusion/ej2-react-gantt)    | npm install @syncfusion/ej2-react-gantt | Gantt |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid

The React Data Grid component displays and manipulates tabular data with configuration options to control data presentation and manipulation. It pulls data from sources such as arrays of JSON objects, OData web services, or [DataManager](https://ej2.syncfusion.com/react/documentation/data/?utm_source=npm&utm_medium=listing&utm_campaign=react-data-grid-npm), binding data fields to columns and displaying column headers to identify fields with support for grouped records.

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-grids](https://www.npmjs.com/package/@syncfusion/ej2-react-grids)    | npm install @syncfusion/ej2-react-grids | Grid |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React HeatMap

The Syncfusion<sup style="font-size:70%">&reg;</sup> React HeatMap visualizes two-dimensional data in which values are represented using gradient or fixed colors.

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-heatmap](https://www.npmjs.com/package/@syncfusion/ej2-react-heatmap)    | npm install @syncfusion/ej2-react-heatmap | HeatMap |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React InPlaceEditor

The Syncfusion<sup style="font-size:70%">&reg;</sup> React InPlace Editor component enables editing values dynamically within their context (in-place). Features include inline and pop-up modes, and customizable user interface (UI) and events.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-inplace-editor](https://www.npmjs.com/package/@syncfusion/ej2-react-inplace-editor)    | npm install @syncfusion/ej2-react-inplace-editor | InPlaceEditor |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React Inputs

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Input components include a collection of form components for obtaining different input values from users, such as text, numbers, patterns, colors, and file inputs.

<!-- markdownlint-disable MD033 -->

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-inputs](https://www.npmjs.com/package/@syncfusion/ej2-react-inputs)    |npm install @syncfusion/ej2-react-inputs | &bull; ColorPicker<br> &bull; MaskedTextBox<br> &bull; NumericTextBox<br> &bull; Slider<br> &bull; Signature<br> &bull; TextBox<br> &bull; Uploader<br> |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React Kanban

The Kanban Board component efficiently visualizes workflow at each stage along its path to completion. The control supports features to design task scheduling applications, including swimlanes, customizable cards, binding from local and remote data sources, column mapping, stacked headers, WIP validation, templating, responsiveness, filtering, and editing.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-kanban](https://www.npmjs.com/package/@syncfusion/ej2-react-kanban)    | npm install @syncfusion/ej2-react-kanban | Kanban |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React Layouts

The Syncfusion<sup style="font-size:70%">&reg;</sup> Layout package contains Cards, Avatars, Splitter, and Dashboard Layout components.

* The `Card` is a small container displaying defined content in a specific structure.

* `Avatars` are icons, initials, or figures representing a particular person, used in popular media formats like images, SVG, font icons, and letters.

* The `Splitter` is a container component used to construct different layouts using multiple and nested panes.

* The `Dashboard Layout` is a grid-structured layout component that helps create dashboards with panels. Panels hold UI components and allow resize, reorder, drag-and-drop, remove, and add options, enabling users to easily place components at desired positions within the grid layout.

<!-- markdownlint-disable MD033 -->

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-layouts](https://www.npmjs.com/package/@syncfusion/ej2-react-layouts)    |npm install @syncfusion/ej2-react-layouts | &bull; Avatar<br> &bull; Card<br> &bull; Dashboard Layout<br> &bull; Splitter<br> |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React LinearGauge

The Syncfusion<sup style="font-size:70%">&reg;</sup> Linear Gauge visualizes numeric values on a linear scale with features like multiple axes and different orientations. The gauge's appearance can be completely customized to simulate a thermometer, pressure gauge, ruler, etc.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-lineargauge](https://www.npmjs.com/package/@syncfusion/ej2-react-lineargauge)    | npm install @syncfusion/ej2-react-lineargauge | LinearGauge |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React Lists

The Syncfusion<sup style="font-size:70%">&reg;</sup> React ListView component allows selection of one or multiple items from a list-like interface and represents data in an interactive hierarchical structure across different layouts or views. Lists are used for displaying data, data navigation, and data entry.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-lists](https://www.npmjs.com/package/@syncfusion/ej2-react-lists)    | npm install @syncfusion/ej2-react-lists | ListView |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React Maps

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Maps visualizes geographical data and represents statistical data for specific geographical areas on Earth with user interactivity and various customization options.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-maps](https://www.npmjs.com/package/@syncfusion/ej2-react-maps)    | npm install @syncfusion/ej2-react-maps | Maps |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React Navigations

A package of React navigation components including Accordion, Breadcrumb, ContextMenu, MenuBar, Tabs, Toolbar, TreeView, and Sidebar.

<!-- markdownlint-disable MD033 -->

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-navigations](https://www.npmjs.com/package/@syncfusion/ej2-react-navigations)    |npm install @syncfusion/ej2-react-navigations | &bull; Accordion<br> &bull; Breadcrumb<br> &bull; ContextMenu<br> &bull; MenuBar<br> &bull; Tabs<br> &bull; Toolbar<br> &bull; TreeView<br> &bull; Sidebar<br> |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React Notifications

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Notification component notifies status or summary information to end-users.

<!-- markdownlint-disable MD033 -->

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-notifications](https://www.npmjs.com/package/@syncfusion/ej2-react-notifications)    |npm install @syncfusion/ej2-react-notifications | &bull; Badge<br> &bull; Spinner<br> &bull; Toast<br> |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React PdfViewer

The Syncfusion<sup style="font-size:70%">&reg;</sup> React PDF Viewer supports viewing and reviewing PDF files in web applications and printing them. The thumbnail, bookmark, hyperlink, and table of contents features provide easy navigation within and outside PDF files. Form-filling support provides a platform to fill and print AcroForms. PDF files can be reviewed with available annotation tools.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-pdfviewer](https://www.npmjs.com/package/@syncfusion/ej2-react-pdfviewer)    | npm install @syncfusion/ej2-react-pdfviewer | PdfViewer |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React PivotTable

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Pivot Table is a powerful control for organizing and summarizing business data and displaying results in a cross-table format. It includes major functionalities such as data binding, drilling up and down, Excel-like filtering and sorting, editing, Excel and PDF exporting, several built-in aggregations, pivot table field list, and calculated fields.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-pivotview](https://www.npmjs.com/package/@syncfusion/ej2-react-pivotview)    | npm install @syncfusion/ej2-react-pivotview | PivotTable |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React Popups

A package of Popup components including Dialog and Tooltip used to display information or get input from users in a popup.

<!-- markdownlint-disable MD033 -->

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-popups](https://www.npmjs.com/package/@syncfusion/ej2-react-popups)    |npm install @syncfusion/ej2-react-popups | &bull; Dialog<br> &bull; Tooltip<br> |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React ProgressBar

The Progress Bar visualizes the changing status of an extended operation such as a download, file transfer, or installation. All progress bar elements are rendered using scalable vector graphics (SVG) to ensure quality visual experience.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-progressbar](https://www.npmjs.com/package/@syncfusion/ej2-react-progressbar)    | npm install @syncfusion/ej2-react-progressbar | ProgressBar |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React QueryBuilder

The Syncfusion<sup style="font-size:70%">&reg;</sup> React QueryBuilder package contains the QueryBuilder component that allows users to create and edit filters. It supports data binding, templates, validation, and horizontal and vertical orientation.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-querybuilder](https://www.npmjs.com/package/@syncfusion/ej2-react-querybuilder)    | npm install @syncfusion/ej2-react-querybuilder | QueryBuilder |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React RichTextEditor

The RichTextEditor component is an HTML and markdown editor that provides the best user experience for creating, updating, and formatting content.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-richtexteditor](https://www.npmjs.com/package/@syncfusion/ej2-react-richtexteditor)    | npm install @syncfusion/ej2-react-richtexteditor | RichTextEditor |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React Schedule

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Scheduler component is an event calendar that facilitates users with common Outlook-calendar features, enabling them to plan and manage events/appointments and time efficiently.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-schedule](https://www.npmjs.com/package/@syncfusion/ej2-react-schedule)    | npm install @syncfusion/ej2-react-schedule | Schedule |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React SplitButtons

The Syncfusion<sup style="font-size:70%">&reg;</sup> React SplitButtons package contains UI components such as DropDownButton, SplitButton, ProgressButton, and ButtonGroup. DropDownButton and SplitButton display a list of items when clicked, and ButtonGroup can be used for easy navigation.

<!-- markdownlint-disable MD033 -->

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-splitbuttons](https://www.npmjs.com/package/@syncfusion/ej2-react-splitbuttons)    |npm install @syncfusion/ej2-react-splitbuttons | &bull; ButtonGroup<br> &bull; DropDownButton<br> &bull; ProgressButton<br> &bull; SplitButton<br> |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React Spreadsheet

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Spreadsheet is a user-interactive component for organizing and analyzing data in tabular format with configuration options for customization. It loads data by importing an Excel file or from a data source, such as RESTful JSON data services and local JavaScript object array binding. Populated data can be exported as Excel with xlsx, xls, and csv formats.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-spreadsheet](https://www.npmjs.com/package/@syncfusion/ej2-react-spreadsheet)    | npm install @syncfusion/ej2-react-spreadsheet | Spreadsheet |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React TreeGrid

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Tree Grid is a feature-rich control for visualizing self-referential and hierarchical data effectively in a tabular format. It pulls data from sources such as enumerable collections of records, RESTful services, OData services, WCF services, or DataManager. It also expands or collapses child data using the tree column.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-treegrid](https://www.npmjs.com/package/@syncfusion/ej2-react-treegrid)    | npm install @syncfusion/ej2-react-treegrid | TreeGrid |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React TreeMap

The Syncfusion<sup style="font-size:70%">&reg;</sup> React TreeMap is a feature-rich component for visualizing both hierarchical and flat data. The look and feel of treemaps can be customized using built-in features like color mapping, legends, and label templates.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-treemap](https://www.npmjs.com/package/@syncfusion/ej2-react-treemap)    | npm install @syncfusion/ej2-react-treemap | TreeMap |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React WordProcessor

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Word Processor (Document Editor) is a component with editing capabilities like Microsoft Word. It creates, edits, views, and prints Word documents. It provides all common Word processing features including editing text, formatting contents, resizing images and tables, finding and replacing text, bookmarks, tables of contents, printing, and importing and exporting Word documents.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-documenteditor](https://www.npmjs.com/package/@syncfusion/ej2-react-documenteditor)    | npm install @syncfusion/ej2-react-documenteditor | DocumentEditor |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React ImageEditor

The Syncfusion<sup style="font-size:70%">&reg;</sup> React ImageEditor provides image editing capabilities such as crop, resize, rotate, flip, and basic image adjustments with customizable toolbar and undo/redo support.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-image-editor](https://www.npmjs.com/package/@syncfusion/ej2-react-image-editor)    | npm install @syncfusion/ej2-react-image-editor | ImageEditor |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React Ribbon

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Ribbon component offers a Microsoft Office-like ribbon UI for grouping commands into tabs and contextual toolsets.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-ribbon](https://www.npmjs.com/package/@syncfusion/ej2-react-ribbon)    | npm install @syncfusion/ej2-react-ribbon | Ribbon |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React Multicolumn ComboBox

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Multicolumn ComboBox displays complex data in a dropdown with multiple columns and supports filtering, templating, and selection.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-multicolumn-combobox](https://www.npmjs.com/package/@syncfusion/ej2-react-multicolumn-combobox)    | npm install @syncfusion/ej2-react-multicolumn-combobox | MultiColumnComboBox |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React Interactive Chat

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Interactive Chat component enables building chat interfaces with message threads, typing indicators, attachments, and extensible message templates.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-interactive-chat](https://www.npmjs.com/package/@syncfusion/ej2-react-interactive-chat)    | npm install @syncfusion/ej2-react-interactive-chat | InteractiveChat |

### Syncfusion<sup style="font-size:70%">&reg;</sup> React BlockEditor

The Syncfusion<sup style="font-size:70%">&reg;</sup> React BlockEditor is a block-based editor for composing modular content with drag-and-drop block manipulation and extensible toolsets.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-blockeditor](https://www.npmjs.com/package/@syncfusion/ej2-react-blockeditor)    | npm install @syncfusion/ej2-react-blockeditor | BlockEditor |

## See Also

* [Installation with npm CLI](https://ej2.syncfusion.com/react/documentation/installation/installation/)
* [Browse all Syncfusion npm packages](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-react)
* [Download JavaScript - EJ2 Installer](https://ej2.syncfusion.com/react/documentation/installation/web-installer/download/)
* [Product Development Life Cycle](https://www.syncfusion.com/support/product-lifecycle/)
* [Update npm Packages](https://ej2.syncfusion.com/react/documentation/upgrade/update-npm-package/)