---
layout: post
title: Accessibility in React Circular gauge component | Syncfusion
description: Learn here all about Accessibility in Syncfusion React Circular gauge component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---


# Accessibility in React Circular gauge component

Circular gauge provides built-in compliance with the [WAI-ARIA](http://www.w3.org/WAI/PF/aria-practices/) specifications.
WAI-ARIA Accessibility supports are achieved through the attributes like `aria-label`. It helps to provides information about elements in a document for assistive technology.

**Aria-label:**   Attribute provides the text label with some default description for below elements in gauge.

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>Element</b></td>
<td><b>Default description</b></td>
</tr>
<tr>
<td>Pointer</td>
<td>Reads the pointer value</td>
</tr>
<tr>
<td>Annotation</td>
<td>Read the annotation description</td>
</tr>
<tr>
<td>Gauge Title</td>
<td>Reads the gauge title</td>
</tr>
</table>

You can change this default description, using description property available in [`Pointers`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/pointer/), [`Annotations`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/annotation/) and [`CircularGauge`](https://ej2.syncfusion.com/react/documentation/api/circular-gauge/) object. It helps the screen reader to read for assistive purpose.