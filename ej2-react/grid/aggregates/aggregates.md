---
layout: post
title: Aggregates in React Grid component | Syncfusion
description: Learn here all about Aggregates in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Aggregates 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Aggregates in React Grid component

Aggregate values are displayed in the footer, group footer, or group caption of the Grid. It can be configured through [`aggregates`](https://ej2.syncfusion.com/angular/documentation/api/grid/#aggregates) property.
 [`field`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn/#field) and [`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn/#type)
 are the minimum properties required to represent an aggregate column.

To use the aggregate feature, you have to inject the **Aggregate** module.

By default, the aggregate value can be displayed in the footer, group, and caption cells. To show the aggregate value in one of the cells, use the [`footerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn/#footertemplate), [`groupFooterTemplate`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn/#groupfootertemplate), or [`groupCaptionTemplate`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn/#groupcaptiontemplate) property.

## Built-in aggregate types

The aggregate type should be specified in the [`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn/#type) property to configure an aggregate column.

The built-in aggregates are,
* Sum
* Average
* Min
* Max
* Count
* Truecount
* Falsecount

> * Multiple aggregates can be used for an aggregate column by setting the [`type`](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn/#type) property
with an array of aggregate types.
> * Multiple types for a column is supported only when one of the aggregate templates is used.