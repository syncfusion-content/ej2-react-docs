---
layout: post
title: Individual Components Script Dependency | Syncfusion
description: Learn here all about the Script Dependencies of Syncfusion React components in Essential JS 2 and more.
control: common
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Individual Components Script Dependency

It is important to specify the right script reference order as well as its dependencies when using Syncfusion React components in a project. Syncfusion React components each have their own set of dependencies, which may include other Syncfusion packages.

Refer to the table below to discover the correct script reference sequence and its dependencies for a certain Syncfusion React component.

<table>
<tr>
<th>Components</th>
<th>Scripts</th>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/accordion/getting-started">Accordion, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/appbar/getting-started">App Bar, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/breadcrumb/getting-started">Bread crumb, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/carousel/getting-started">Carousel, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/context-menu/getting-started">Context Menu, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/menu/getting-started">Menu, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/sidebar/getting-started">Sidebar, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/tab/getting-started">Tab, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/toolbar/getting-started">Toolbar, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/treeview/getting-started">TreeView</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-data/dist/ej2-data.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-lists/dist/ej2-lists.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-buttons/dist/ej2-buttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-popups/dist/ej2-popups.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-inputs/dist/ej2-inputs.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-navigations/dist/ej2-navigations.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-navigations/dist/ej2-react-navigations.min.js"></script> 
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/accumulation-chart/getting-started">Accumulation Chart, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/smithchart/getting-started">Smith Chart, </a><br><a href="https://ej2.syncfusion.com/react/documentation/chart/getting-started">Chart, </a><br><a href="https://ej2.syncfusion.com/react/documentation/sparkline/getting-started">Sparkline, </a><br><a href="https://ej2.syncfusion.com/react/documentation/range-navigator/getting-started">Range Navigator, </a><br><a href="https://ej2.syncfusion.com/react/documentation/stock-chart/getting-started">Stock Chart, </a><br><a href="https://ej2.syncfusion.com/react/documentation/bullet-chart/getting-started">Bullet Chart</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-data/dist/ej2-data.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-buttons/dist/ej2-buttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-lists/dist/ej2-lists.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-popups/dist/ej2-popups.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-splitbuttons/dist/ej2-splitbuttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-navigations/dist/ej2-navigations.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-calendars/dist/ej2-calendars.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-file-utils/dist/ej2-file-utils.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-compression/dist/ej2-compression.min.js"></script> 
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-pdf-export/dist/ej2-pdf-export.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-svg-base/dist/ej2-svg-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-charts/dist/ej2-charts.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-charts/dist/ej2-react-charts.min.js"></script>  
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/auto-complete/getting-started">Auto Complete, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/combo-box/getting-started">Combo Box, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/drop-down-list/getting-started">Dropdown List, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/drop-down-tree/getting-started">Dropdown Tree, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/list-box/getting-started">ListBox, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/mention/getting-started">Mention, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/multi-select/getting-started">Multiselect</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-data/dist/ej2-data.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-buttons/dist/ej2-buttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-lists/dist/ej2-lists.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-popups/dist/ej2-popups.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-splitbuttons/dist/ej2-splitbuttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-inputs/dist/ej2-inputs.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-navigations/dist/ej2-navigations.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-dropdowns/dist/ej2-dropdowns.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script> 
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-dropdowns/dist/ej2-react-dropdowns.min.js"></script>  
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/barcode/getting-started">Barcode</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-data/dist/ej2-data.min.js"></script>   
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-barcodegenerator/dist/ej2-barcodegenerator.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-file-utils/dist/ej2-file-utils.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-compression/dist/ej2-compression.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-pdf-export/dist/ej2-pdf-export.min.js"></script>   
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-svg-base/dist/ej2-svg-base.min.js"></script> 
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script> 
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-barcodegenerator/dist/ej2-react-barcodegenerator.min.js"></script>  
 
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/calendar/getting-started">Calendar, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/datepicker/getting-started">Date Picker, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/daterangepicker/getting-started">DateRangePicker List, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/datetimepicker/getting-started">DateTimePicker, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/timepicker/getting-started">TimePicker</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-data/dist/ej2-data.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-buttons/dist/ej2-buttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-lists/dist/ej2-lists.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-popups/dist/ej2-popups.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-splitbuttons/dist/ej2-splitbuttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-inputs/dist/ej2-inputs.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-calendars/dist/ej2-calendars.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-calendars/dist/ej2-react-calendars.min.js"></script>  
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/check-box/getting-started">Check Box, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/chips/getting-started">Chips, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/floating-action-button/getting-started">FloatingActionButton, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/radio-button/getting-started">Radio Button, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/speed-dial/getting-started">Speed Dial, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/switch/getting-started">Switch</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-buttons/dist/ej2-buttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-buttons/dist/ej2-react-buttons.min.js"></script>  
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/circular-gauge/getting-started">Circular Gauge</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-file-utils/dist/ej2-file-utils.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-compression/dist/ej2-compression.min.js"></script> 
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-pdf-export/dist/ej2-pdf-export.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-svg-base/dist/ej2-svg-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-circulargauge/dist/ej2-circulargauge.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-circulargauge/dist/ej2-react-circulargauge.min.js"></script>  
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/color-picker/getting-started">Color Picker, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/maskedtextbox/getting-started">MaskedTextBox, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/numerictextbox/getting-started">NumericTextBox, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/range-slider/getting-started">Range Slider, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/rating/getting-started">Rating, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/textbox/getting-started">Text Box, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/uploader/getting-started">Uploader</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-buttons/dist/ej2-buttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-popups/dist/ej2-popups.min.js"></script>   
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-splitbuttons/dist/ej2-splitbuttons.min.js"></script> 
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-inputs/dist/ej2-inputs.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-inputs/dist/ej2-react-inputs.min.js"></script>  
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/dashboard-layout/getting-started">Dashboard Layout, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/splitter/getting-started">Splitter</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-layouts/dist/ej2-layouts.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-layouts/dist/ej2-react-layouts.min.js"></script>  
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/dialog/getting-started">Dialog, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/predefined-dialogs/getting-started">Predefined Dialogs, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/tooltip/getting-started">Tooltip</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-buttons/dist/ej2-buttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-popups/dist/ej2-popups.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-popups/dist/ej2-react-popups.min.js"></script>  
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/document-editor/getting-started">Document Editor</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-data/dist/ej2-data.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-buttons/dist/ej2-buttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-lists/dist/ej2-lists.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-popups/dist/ej2-popups.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-splitbuttons/dist/ej2-splitbuttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-inputs/dist/ej2-inputs.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-navigations/dist/ej2-navigations.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-file-utils/dist/ej2-file-utils.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-compression/dist/ej2-compression.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-charts/dist/ej2-charts.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-documenteditor/dist/ej2-documenteditor.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-documenteditor/dist/ej2-react-documenteditor.min.js"></script>  
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/drop-down-button/getting-started">DropDownButton, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/progress-button/getting-started">ProgressButton, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/split-button/getting-started">SplitButton</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-buttons/dist/ej2-buttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-popups/dist/ej2-popups.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-splitbuttons/dist/ej2-splitbuttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-splitbuttons/dist/ej2-react-splitbuttons.min.js"></script>  
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/file-manager/getting-started">File Manager</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-buttons/dist/ej2-buttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-lists/dist/ej2-lists.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-layouts/dist/ej2-layouts.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-popups/dist/ej2-popups.min.js"></script>   
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-splitbuttons/dist/ej2-buttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-inputs/dist/ej2-inputs.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-navigations/dist/ej2-navigations.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-file-utils/dist/ej2-file-utils.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-compression/dist/ej2-compression.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-excel-export/dist/ej2-excel-export.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-pdf-export/dist/ej2-pdf-export.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-grids/dist/ej2-grids.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-filemanager/dist/ej2-filemanager.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-filemanager/dist/ej2-react-filemanager.min.js"></script>  
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/gantt/getting-started">Gantt</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-data/dist/ej2-data.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-file-utils/dist/ej2-file-utils.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-compression/dist/ej2-compression.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-pdf-export/dist/ej2-pdf-export.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-buttons/dist/ej2-buttons.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-lists/dist/ej2-lists.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-popups/dist/ej2-popups.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-splitbuttons/dist/ej2-splitbuttons.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-inputs/dist/ej2-inputs.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-navigations/dist/ej2-navigations.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-dropdowns/dist/ej2-dropdowns.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-calendars/dist/ej2-calendars.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-excel-export/dist/ej2-excel-export.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-grids/dist/ej2-grids.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-treegrid/dist/ej2-treegrid.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-layouts/dist/ej2-layouts.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-filemanager/dist/ej2-filemanager.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-richtexteditor/dist/ej2-richtexteditor.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-gantt/dist/ej2-gantt.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-gantt/dist/ej2-react-gantt.min.js"></script>
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/grid/getting-started">Grid</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-data/dist/ej2-data.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-buttons/dist/ej2-buttons.min.js"></script> 
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-splitbuttons/dist/ej2-splitbuttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-popups/dist/ej2-popups.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-navigations/dist/ej2-navigations.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-inputs/dist/ej2-inputs.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-dropdowns/dist/ej2-dropdowns.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-calendars/dist/ej2-calendars.min.js"></script>   
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-lists/dist/ej2-lists.min.js"></script>   
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-excel-export/dist/ej2-excel-export.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-pdf-export/dist/ej2-pdf-export.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-file-utils/dist/ej2-file-utils.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-compression/dist/ej2-compression.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-grids/dist/ej2-grids.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-grids/dist/ej2-react-grids.min.js"></script>  
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/heatmap-chart/getting-started">HeatMap Chart</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-data/dist/ej2-data.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-file-utils/dist/ej2-file-utils.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-compression/dist/ej2-compression.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-pdf-export/dist/ej2-pdf-export.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-svg-base/dist/ej2-svg-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-heatmap/dist/ej2-heatmap.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-heatmap/dist/ej2-react-heatmap.min.js"></script>  
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/image-editor/getting-started">Image Editor</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-data/dist/ej2-data.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-buttons/dist/ej2-buttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-lists/dist/ej2-lists.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-popups/dist/ej2-popups.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-splitbuttons/dist/ej2-splitbuttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-inputs/dist/ej2-inputs.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-navigations/dist/ej2-navigations.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-image-editor/dist/ej2-react-image-editor.min.js"></script>  
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/inplace-editor/getting-started">InplaceEditor</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-buttons/dist/ej2-buttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-lists/dist/ej2-lists.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-calendars/dist/ej2-calendars.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-data/dist/ej2-data.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-popups/dist/ej2-popups.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-dropdowns/dist/ej2-dropdowns.min.js"></script> 
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-splitbuttons/dist/ej2-splitbuttons.min.js"></script>   
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-inputs/dist/ej2-inputs.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-filemanager/dist/ej2-filemanager.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-navigations/dist/ej2-navigations.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-richtexteditor/dist/ej2-richtexteditor.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-inplace-editor/dist/ej2-inplace-editor.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-inplace-editor/dist/ej2-react-inplace-editor.min.js"></script>  
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/kanban/getting-started">Kanban</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-data/dist/ej2-data.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-buttons/dist/ej2-buttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-layouts/dist/ej2-layouts.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-inputs/dist/ej2-inputs.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-lists/dist/ej2-lists.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-popups/dist/ej2-popups.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-navigations/dist/ej2-navigations.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-dropdowns/dist/ej2-dropdowns.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-kanban/dist/ej2-kanban.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-kanban/dist/ej2-react-kanban.min.js"></script>  
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/linear-gauge/getting-started">Linear Gauge</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-svg-base/dist/ej2-svg-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-file-utils/dist/ej2-file-utils.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-compression/dist/ej2-compression.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-pdf-export/dist/ej2-pdf-export.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-lineargauge/dist/ej2-lineargauge.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-lineargauge/dist/ej2-react-lineargauge.min.js"></script>  
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/listview/getting-started">ListView</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-data/dist/ej2-data.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-buttons/dist/ej2-buttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-lists/dist/ej2-lists.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-lists/dist/ej2-react-lists.min.js"></script>  
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/maps/getting-started">Maps</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-data/dist/ej2-data.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-svg-base/dist/ej2-svg-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-file-utils/dist/ej2-file-utils.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-compression/dist/ej2-compression.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-pdf-export/dist/ej2-pdf-export.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-maps/dist/ej2-maps.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-maps/dist/ej2-react-maps.min.js"></script>  
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/message/getting-started">Message, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/skeleton/getting-started">Skeleton, </a><br/><a href="https://ej2.syncfusion.com/react/documentation/toast/getting-started">Toast</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-buttons/dist/ej2-buttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-popups/dist/ej2-popups.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-notifications/dist/ej2-notifications.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-notifications/dist/ej2-react-notifications.min.js"></script>  
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/pivotview/getting-started">PivotTable</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-data/dist/ej2-data.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-buttons/dist/ej2-buttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-lists/dist/ej2-lists.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-file-utils/dist/ej2-file-utils.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-compression/dist/ej2-compression.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-excel-export/dist/ej2-excel-export.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-inputs/dist/ej2-inputs.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-popups/dist/ej2-popups.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-calendars/dist/ej2-calendars.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-svg-base/dist/ej2-svg-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-navigations/dist/ej2-navigations.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-dropdowns/dist/ej2-dropdowns.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-compression/dist/ej2-compression.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-pdf-export/dist/ej2-react-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-grids/dist/ej2-grids.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-pivotview/dist/ej2-pivotview.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-pivotview/dist/ej2-react-pivotview.min.js"></script>  
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/progress-bar/getting-started">ProgressBar</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-data/dist/ej2-data.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-svg-base/dist/ej2-svg-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-progressbar/dist/ej2-progressbar.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-progressbar/dist/ej2-react-progressbar.min.js"></script>  
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/query-builder/getting-started">Query Builder</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-data/dist/ej2-data.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-buttons/dist/ej2-buttons.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-lists/dist/ej2-lists.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-popups/dist/ej2-popups.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-splitbuttons/dist/ej2-splitbuttons.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-inputs/dist/ej2-inputs.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-navigations/dist/ej2-navigations.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-dropdowns/dist/ej2-dropdowns.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-calendars/dist/ej2-calendars.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-querybuilder/dist/ej2-querybuilder.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-querybuilder/dist/ej2-react-querybuilder.min.js"></script>
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/ribbon/getting-started">Ribbon</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-data/dist/ej2-data.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-buttons/dist/ej2-buttons.min.js"></script> 
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-splitbuttons/dist/ej2-splitbuttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-popups/dist/ej2-popups.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-navigations/dist/ej2-navigations.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-dropdowns/dist/ej2-dropdowns.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-ribbon/dist/ej2-react-ribbon.min.js"></script>  
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/rich-text-editor/getting-started">RichTextEditor</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-data/dist/ej2-data.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-buttons/dist/ej2-buttons.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-lists/dist/ej2-lists.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-popups/dist/ej2-popups.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-splitbuttons/dist/ej2-splitbuttons.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-inputs/dist/ej2-inputs.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-navigations/dist/ej2-navigations.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-dropdowns/dist/ej2-dropdowns.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-calendars/dist/ej2-calendars.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-file-utils/dist/ej2-file-utils.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-compression/dist/ej2-compression.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-pdf-export/dist/ej2-pdf-export.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-excel-export/dist/ej2-excel-export.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-grids/dist/ej2-grids.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-layouts/dist/ej2-layouts.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-filemanager/dist/ej2-filemanager.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-richtexteditor/dist/ej2-richtexteditor.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-richtexteditor/dist/ej2-react-richtexteditor.min.js"></script>
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/schedule/getting-started">Schedule</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-data/dist/ej2-data.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-buttons/dist/ej2-buttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-lists/dist/ej2-lists.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-popups/dist/ej2-popups.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-splitbuttons/dist/ej2-splitbuttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-inputs/dist/ej2-inputs.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-excel-export/dist/ej2-excel-export.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-compression/dist/ej2-compression.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-calendars/dist/ej2-calendars.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-navigations/dist/ej2-navigations.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-dropdowns/dist/ej2-dropdowns.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-schedule/dist/ej2-schedule.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-schedule/dist/ej2-react-schedule.min.js"></script>  
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/spreadsheet/getting-started">Spreadsheet</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-buttons/dist/ej2-buttons.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-lists/dist/ej2-lists.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-popups/dist/ej2-popups.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-splitbuttons/dist/ej2-splitbuttons.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-inputs/dist/ej2-inputs.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-navigations/dist/ej2-navigations.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-dropdowns/dist/ej2-dropdowns.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-file-utils/dist/ej2-file-utils.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-compression/dist/ej2-compression.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-pdf-export/dist/ej2-pdf-export.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-charts/dist/ej2-charts.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-grids/dist/ej2-grids.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-inputs/dist/ej2-inputs.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-spreadsheet/dist/ej2-spreadsheet.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-spreadsheet/dist/ej2-react-spreadsheet.min.js"></script>  
```
</td>
</tr>
<tr>
<td><a href="https://ej2.syncfusion.com/react/documentation/treemap/getting-started">TreeMap</a></td>
<td>

```bash
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-base/dist/ej2-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-data/dist/ej2-data.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-file-utils/dist/ej2-file-utils.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-compression/dist/ej2-compression.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-pdf-export/dist/ej2-pdf-export.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-svg-base/dist/ej2-svg-base.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-treemap/dist/ej2-treemap.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-base/dist/ej2-react-base.min.js"></script>  
<script src="https://cdn.syncfusion.com/ej2/21.1.35/ej2-react-treemap/dist/ej2-react-treemap.min.js"></script>  
```
</td>
</tr>
</table>