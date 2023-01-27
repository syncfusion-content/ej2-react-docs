---
layout: post
title: Ej1 api migration in React Heatmap chart component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion React Heatmap chart component of Syncfusion Essential JS 2 and more.
control: Ej1 api migration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in React Heatmap chart component

This article describes the API migration process of heat map component from Essential JS 1 to Essential JS 2.

## Members

{% raw %}

<!-- markdownlint-disable MD033 -->
| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| Specifies the width of the heat map | **Property:**  *width*<br/><br/><code>`<EJ.HeatMap id="HeatMap" width="810px">`<br/>`</EJ.HeatMap>`</code>| **Property:**  *width*<br/><br/><code>`<HeatMapComponent id='heatmap-container' width={'300px'}>`</HeatMapComponent>`</code>|
| Specifies the height of the heat map| **Property:**  *height*<br/><br/><code>`<EJ.HeatMap id="HeatMap" height="810px">`<br/>`</EJ.HeatMap>`</code>| **Property:**  *height*<br/><br/><code>`<HeatMapComponent id='heatmap-container' height={'300px'}>`<br/>`</HeatMapComponent>`</code>|
| Enables or disables tooltip of heat map| **Property:**  *showtooltip*<br/><br/><code>`<EJ.HeatMap id="HeatMap" showTooltip="true">`<br/>`</EJ.HeatMap>`</code>| **Property:**  *showTooltip*<br/><br/><code>`<HeatMapComponent id='heatmap-container' showTooltip = { true }>`<br/>`</HeatMapComponent>`</code>|
| Defines the tooltip that should be shown when the mouse hovers over cells.| **Property:**  *toolTipSettings.templateId*<br/><br/><code>`<EJ.HeatMap id="HeatMap" toolTipSettings={toolTipSettings}>`<br/>`</EJ.HeatMap>`<br> <br><code>toolTipSettings = {templateId:"mouseovertoolTipId"}</code>|**Property:**  *tooltipRender*<br/><br/><code>`<HeatMapComponent id='heatmap-container' tooltipRender={tooltipTemplate}>`<br/>`</HeatMapComponent>`<br> <br><code>private tooltipTemplate(args: ITooltipEventArgs): void { };</code>|
| Specifies the source data of the heat map.| **Property:**  *itemsSource*<br/><br/><code>`<EJ.HeatMap id="HeatMap" itemsSource={itemsSource}>`<br/>`</EJ.HeatMap>`<br> <br><code>itemsSource = []</code>| **Property:**  *dataSource*<br/><br/><code>`<HeatMapComponent id='heatmap-container' dataSource={dataSource}>`<br>`</HeatMapComponent>`<br> <br><code>dataSource = []</code>|
| Specifies whether the cell content can be visible or not.| **Property:**  *heatmapCell.showContent*<br/><br/><code>`<EJ.HeatMap id="HeatMap" heatmapCell={heatmapCell}>`<br/>`</EJ.HeatMap>`<br> <br><code>heatmapCell = { showContent: "Hidden" }</code>| **Property:**  *cellSettings.showLabel* <br><br><code>`<HeatMapComponent id='heatmap-container' cellSettings={cellSettings}>`<br>`</HeatMapComponent>`<br> <br><code>cellSettings = {showLabel: false}</code>|
| Specifies the color of the heat map column data.| **Property:**  *colorMappingCollection.color*<br/><br/><code>`<EJ.HeatMap id="HeatMap" colorMappingCollection="colorMappingCollection">`<br>`</EJ.HeatMap>`<br> <br><code>colorMappingCollection = [ { color: "#8ec8f8" } ];</code>| **Property:**  *paletteSettings.palette.color*<br/><br/><code>`<HeatMapComponent id='heatmap-container' paletteSettings={paletteSettings}>`<br>`</HeatMapComponent>`<br> <br><code>paletteSettings = {palette: [{ color: '#C06C84'},]}</code>|
| Specifies the color values of the heat map column data.| **Property:**  *colorMappingCollection.value*<br/><br/><code>`<EJ.HeatMap id="HeatMap" colorMappingCollection="colorMappingCollection">`<br>`</EJ.HeatMap>`<br> <br><code>colorMappingCollection = [ { value: 50 } ];</code>| **Property:**  *paletteSettings.palette.value*<br/><br/><code>`<HeatMapComponent id='heatmap-container' paletteSettings={paletteSettings}>`<br>`</HeatMapComponent>`<br> <br><code>paletteSettings = {palette: [{ value: 50},]}</code>|
| Specifies the label text of the heat map color.| **Property:**  *colorMappingCollection.label.text*<br/><br/><code>`<EJ.HeatMap id="HeatMap" colorMappingCollection="colorMappingCollection">`<br>`</EJ.HeatMap>`<br> <br><code>colorMappingCollection = [ { label:{ text: "Moderate" } } ];</code>| **Property:**  *paletteSettings.palette.label*<br/><br/><code>`<HeatMapComponent id='heatmap-container' paletteSettings={paletteSettings}>`<br>`</HeatMapComponent>`<br> <br><code>paletteSettings = {palette: [{ label:'Low' },{ label:'Moderate' }]}</code>|
| Specifies the style of the heat map color label.| **Property:**  *colorMappingCollection.label.bold* **Property:**  *colorMappingCollection.label.italic*<br/><br/><code>`<EJ.HeatMap id="HeatMap" colorMappingCollection="colorMappingCollection">`<br>`</EJ.HeatMap>`<br> <br><code>colorMappingCollection = [ { label:{ bold: true } } ];<br>colorMappingCollection = [ { label:{ italic: true } } ];</code>| **Property:**  *legendSettings.textStyle.fontStyle*<br/><br/><code>`<HeatMapComponent id='heatmap-container' legendSettings={legendSettings}>`<br>`</HeatMapComponent>`<br> <br><code>legendSettings = {textStyle: { fontStyle:'bold' }}</code>|
| Specifies the font size of the heat map label.| **Property:**  *colorMappingCollection.label.fontSize*<br/><br/><code>`<EJ.HeatMap id="HeatMap" colorMappingCollection="colorMappingCollection">`<br>`</EJ.HeatMap>`<br> <br><code>colorMappingCollection = [ { label:{ fontSize: 18 } } ];</code>| **Property:**  *legendSettings.textStyle.size*<br/><br/><code>`<HeatMapComponent id='heatmap-container' legendSettings={legendSettings}>`<br>`</HeatMapComponent>`<br> <br><code>legendSettings = {textStyle: { size: 18 }}</code>|
| Specifies the font family of the heat map label.| **Property:**  *colorMappingCollection.label.fontFamily*<br/><br/><code>`<EJ.HeatMap id="HeatMap" colorMappingCollection="colorMappingCollection">`<br>`</EJ.HeatMap>`<br> <br><code>colorMappingCollection = [ { label:{ fontFamily: "Arial" } } ];</code>| **Property:**  *legendSettings.textStyle.fontFamily*<br/><br/><code>`<HeatMapComponent id='heatmap-container' legendSettings={legendSettings}>`<br>`</HeatMapComponent>`<br> <br><code>legendSettings = {textStyle: { fontFamily: 'Arial' }}</code>|
| Specifies the font color of the heat map label.| **Property:**  *colorMappingCollection.label.fontColor*<br/><br/><code>`<EJ.HeatMap id="HeatMap" colorMappingCollection="colorMappingCollection">`<br>`</EJ.HeatMap>`<br> <br><code>colorMappingCollection = [ { label:{ fontColor: "red" } } ];</code>|**Property:**  *legendSettings.textStyle.fontFamily*<br/><br/><code>`<HeatMapComponent id='heatmap-container' legendSettings={legendSettings}>`<br>`</HeatMapComponent>`<br> <br><code>legendSettings = {textStyle: { color: 'red' }}</code>|
| Specifies the mapping name of the column.| **Property:**  *itemsMapping.column.propertyName*<br/><br/><code>`<EJ.HeatMap itemsMapping={itemsMapping}>`<br>`</EJ.HeatMap>`<br> <br><code>itemsMapping = {column: { "propertyName": "ProductName" }}</code>|**Property:**  *dataSource.yDataMapping*<br/><br/><code>`<HeatMapComponent id='heatmap-container' dataSource={dataSource}>`<br>`</HeatMapComponent>`<br> <br><code>dataSource = {data: heatmapData,yDataMapping: 'columnid'}</code>|
| Specifies the mapping name of the row.| **Property:**  *itemsMapping.row.propertyName*<br/><br/><code>`<EJ.HeatMap itemsMapping={itemsMapping}>`<br>`</EJ.HeatMap>`<br> <br><code>itemsMapping = {row: { "displayName": "Product Name" }}</code>|**Property:**  *dataSource.xDataMapping*<br/><br/><code>`<HeatMapComponent id='heatmap-container' dataSource={dataSource}>`<br>`</HeatMapComponent>`<br> <br><code>dataSource = {data: heatmapData,xDataMapping: 'rowid'}</code>
| Specifies the mapping name of the row.</b>| **Property:**  *itemsMapping.value.displayName*<br/><br/><code>`<EJ.HeatMap itemsMapping={itemsMapping}>`<br>`</EJ.HeatMap>`<br> <br><code>itemsMapping = {value: { "displayName": "Product Name" }}</code>| **Property:**  *dataSource.valueMapping*<br/><br/><code>`<HeatMapComponent id='heatmap-container' dataSource={dataSource}>`<br>`</HeatMapComponent>`<br> <br><code>dataSource = {data: heatmapData,valueMapping: 'value'}</code>|

## Events

<!-- markdownlint-disable MD033 -->
| Behavior | API in Essential JS 1 | API in Essential JS 2 |
| --- | --- | --- |
| Triggered when the cell get clicked.| **Property:**  *cellSelected*<br/><br/><code>`<EJ.HeatMap actionComplete="actionComplete">`<br>`</EJ.HeatMap>`<br> <br><code>actionComplete = function(args) {}</code>|**Property:**  *cellClick*<br/><br/><code>`<HeatMapComponent id='heatmap-container' cellClick={this.cellClick.bind(this)}>`<br>`</HeatMapComponent>`<br><br><code>public cellClick(args: ICellClickEventArgs): void {} </code>|

{% endraw %}