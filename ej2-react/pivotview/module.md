---
layout: post
title: Modules in React Pivot Table | Syncfusion
description: Learn about every React Pivot Table feature module and how to import, inject, and configure modules for relational and OLAP reports.
control: Pivot Table
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Modules in React Pivot Table

Syncfusion<sup style="font-size:70%">&reg;</sup> React Pivot Table provides optional modules for features that are not part of its core rendering behavior. Import and inject only the modules required by the report. This keeps the component configuration explicit and avoids registering unused features.

Import a module from `@syncfusion/ej2-react-pivotview`, register it through the `Inject` element inside `PivotViewComponent`, and configure the associated component property when one is required. The following table lists all injectable Pivot Table modules exported by the package.

| Feature | Module | Related configuration | Data source support |
| --- | --- | --- | --- |
| [Grouping bar](./grouping-bar) | `GroupingBar` | `showGroupingBar` | Relational and OLAP |
| [Field list](./field-list) | `FieldList` | `showFieldList` | Relational and OLAP |
| [Calculated field](./calculated-field) | `CalculatedField` | `allowCalculatedField` | Relational and OLAP; formula syntax differs |
| [Conditional formatting](./conditional-formatting) | `ConditionalFormatting` | `allowConditionalFormatting` | Relational and OLAP |
| [Number formatting](./number-formatting) | `NumberFormatting` | `allowNumberFormatting` | Relational and OLAP |
| [Grouping](./grouping) | `Grouping` | `allowGrouping` | Relational |
| [Drill through](./drill-through) | `DrillThrough` | `allowDrillThrough` | Relational and OLAP; OLAP access depends on cube permissions |
| [Toolbar](./tool-bar) | `Toolbar` | `showToolbar` and `toolbar` | Relational and OLAP |
| [Pivot Chart](./pivot-chart) | `PivotChart` | `displayOption`, `chartSettings`, and `chartSeries` | Relational and OLAP |
| [Virtual scrolling](./virtual-scrolling) | `VirtualScroll` | `enableVirtualization` | Relational and OLAP |
| [Paging](./paging) | `Pager` | `enablePaging`, `pageSettings`, and `pagerSettings` | Relational and OLAP |
| [Excel and CSV export](./excel-export) | `ExcelExport` | `allowExcelExport` | Relational and OLAP |
| [PDF export](./pdf-export) | `PDFExport` | `allowPdfExport` | Relational and OLAP |

> Importing a module alone does not enable its feature. Inject the module and configure the related property. Features without a module, including core aggregation, member filtering, sorting, drill down, and value sorting, do not need an entry in `Inject`.

## Module relationships and limitations

Some modules can be used independently, while others are commonly combined:

* `Toolbar` provides the toolbar UI. Inject the feature module for a toolbar command that uses an optional feature, such as `ExcelExport`, `PDFExport`, `ConditionalFormatting`, `NumberFormatting`, `CalculatedField`, or `PivotChart`.
* `FieldList` enables the field list hosted by `PivotViewComponent`. The stand-alone field list is rendered with `PivotFieldListComponent`; it is a component rather than an additional injectable module. Inject other optional modules that its enabled commands use.
* `Pager` and `VirtualScroll` are alternative large-data rendering strategies and must not be enabled together.
* `Grouping` applies to relational data. OLAP grouping and calculations are defined by the cube and use OLAP-specific report settings.
* `DrillThrough` can expose source records. The application and data service must authorize access to those records independently of the Pivot Table UI.

## Complete module import reference

The following import contains the complete set of injectable Pivot Table modules. In an application, retain only the modules used by that Pivot Table instance and pass those modules to `Inject`.

```tsx
import {
  CalculatedField,
  ConditionalFormatting,
  DrillThrough,
  ExcelExport,
  FieldList,
  Grouping,
  GroupingBar,
  NumberFormatting,
  Pager,
  PDFExport,
  PivotChart,
  Toolbar,
  VirtualScroll
} from '@syncfusion/ej2-react-pivotview';
```

## Enabling basic features

The following example enables the grouping bar, field list, and calculated field features. It imports the corresponding modules from `@syncfusion/ej2-react-pivotview`, configures the feature properties, and injects the modules into the Pivot Table.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/module-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/module-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/module-cs1" %}
