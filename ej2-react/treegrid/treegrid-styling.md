---
layout: post
title: TreeGrid styling in React TreeGrid | Syncfusion
description: Learn here all about TreeGrid styling in Syncfusion React TreeGrid of Syncfusion Essential JS 2 and more.
control: TreeGrid styling
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# TreeGrid styling in React TreeGrid

Modify the TreeGrid appearance by overriding its default CSS. The following table lists CSS classes and their corresponding sections in the TreeGrid. A custom theme for all React controls can be created using the [Theme Studio](https://ej2.syncfusion.com/themestudio/?theme=material).

Section|CSS class|Purpose of CSS class
-----|-----|-----
**Root**|e-treegrid|Applied to the root element (div) of the TreeGrid.
**Header**|e-gridheader|Applied to the header root element; customize the dividing line between header and content.
||e-table|Applied to the header table; sets the table width to 100%.
||e-columnheader|Applied to the table row (tr) in the header.
||e-headercell|Applied to the header cell (th); customize header background and border colors.
||e-headercelldiv|Applied to the div inside the header cell (th); recommended for customizing header structure and layout.
**Body**|e-gridcontent|Applied to the content root; customize the body background color.
||e-table|Applied to the content table; sets the table width to 100%.
||e-altrow|Applied to alternate rows; customize alternate row background color.
||e-rowcell|Applied to all data cells; customize cell appearance and styling.
||e-groupcaption|Applied to caption cells (td) in grouped rows; customize caption cell background color.
||e-selectionbackground|Applied to selected cells; customize selection styling.
||e-hover|Applied to rows on hover; customize hover styling.
**Pager**|e-pager|Applied to the pager root element; customize background and font color.
||e-pagercontainer|Applied to pager numeric items.
||e-parentmsgbar|Applied to the pager information area.
**Summary**|e-gridfooter|Applied to the summary (footer) root element.
||e-summaryrow|Applied to summary rows.
||e-summarycell|Applied to summary cells; customize summary background color.

> Refer to the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for highlights. Explore the [React TreeGrid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.