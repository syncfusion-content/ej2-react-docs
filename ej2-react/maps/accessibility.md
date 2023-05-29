---
layout: post
title: Accessibility in React Maps component | Syncfusion
description: Learn here all about Accessibility in Syncfusion React Maps component of Syncfusion Essential JS 2 and more.
control: Accessibility 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in React Maps component

Maps provides built-in compliance with the [WAI-ARIA](http://www.w3.org/WAI/PF/aria-practices/) specifications. The WAI-ARIA accessibility support is achieved through the attribute like `aria-label` in the SVG element. It helps to provide information about elements in a document for assistive technology. This attribute sets the text label with some default description for the following elements in Maps.

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td><b>Element</b></td>
<td><b>Default description</b></td>
</tr>
<tr>
<td>Maps container</td>
<td>Specifies the Maps component.</td>
</tr>
<tr>
<td>Maps title</td>
<td>Specifies the title of the Maps.</td>
</tr>
<tr>
<td>Maps subtitle</td>
<td>Specifies the sub-title of the Maps.</td>
</tr>
<tr>
<td>Legend title</td>
<td>Specifies the title of legend in the Maps.</td>
</tr>
</table>

To change this default description, use the [`description`](https://ej2.syncfusion.com/react/documentation/api/maps/#description) property available in [`legendSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/commonTitleSettingsModel/#description), [`titleSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/titleSettingsModel/#description), [`subtitleSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/subTitleSettingsModel/#description) and [`Maps`](https://ej2.syncfusion.com/react/documentation/api/maps/#description). It helps the screen reader to read for an assistive purpose.

## Keyboard Navigation

All the Maps actions can be controlled via keyboard keys. The applicable key combinations and their relative functionalities are listed below for the appropriate UI features available in the component.

Interaction Keys |Description
-----|-----
<kbd>Tab</kbd> |Moves to the next focusable element on the map, such as the legend or shape.
<kbd>Shift</kbd> + <kbd>Tab</kbd> |Moves to the previous focusable element on the map, such as the legend or shape.
<kbd> + </kbd> |When zooming is enabled, zoom in operation can be performed.
<kbd> - </kbd> |When zooming is enabled, zoom out operation can be performed.
<kbd>Left arrow</kbd> |When zoomed in, the map can be scrolled to the left.
<kbd>Right arrow</kbd> |When zoomed in, the map can be scrolled to the right.
<kbd>Up arrow</kbd> |When zoomed in, the map can be scrolled upward.
<kbd>Down arrow</kbd> |When zoomed in, the map can be scrolled downward.
<kbd> R </kbd> |When zooming is enabled, reset operation can be performed.
<kbd>Enter</kbd> |The page can be navigated to the next and previous states in legend. Similarly, the selection can be made while navigating over the shape.