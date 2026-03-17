---
layout: post
title: Render methods in React Chart component | Syncfusion
description: Learn here all about Render methods in Syncfusion React Chart component of Syncfusion Essential JS 2 and more.
control: Render methods 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
<!-- markdownlint-disable MD036 -->

# Render methods in React Chart component

Chart uses following two rendering methods.

* SVG
* Canvas

## SVG

SVG is used to render the Chart by default for all browsers except IE8 and older versions.

## Canvas

Switch between SVG and Canvas rendering by using the `enableCanvas` option. The canvas mode is useful in the following scenarios:

* Plotting large number of data points.
* Performing high frequency live updates.

**Limitations**

- Animation is not supported in canvas mode.
\
Note: Canvas rendering improves performance for very large datasets or high-frequency updates but may limit certain SVG-specific features.