---
layout: post
title: Ej1 api migration in React Range navigator component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion React Range navigator component of Syncfusion Essential JS 2 and more.
control: Ej1 api migration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in React Range navigator component

This article describes the API migration process of Chart component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## RangeNavigator

<!-- markdownlint-disable MD033 -->
| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
|Allow snapping| **Property:** *allowSnapping* <br/><br/>`<EJ.RangeNavigator`<br/>`allowSnapping ={true}>` <br/>`</EJ.RangeNavigator>`|**Property:** *allowSnapping* <br/><br/>`<RangeNavigatorComponent id='charts' allowSnapping={true}>`<br/>`</RangeNavigatorComponent>`|
|Animation duration| Not Applicable|**Property:** *allowSnapping* <br/><br/>`<RangeNavigatorComponent id='charts' animationDuration='2000'>`<br/>`</RangeNavigatorComponent>`|
|Border for range navigator| **Property:** *border* <br/><br/>var border = { color:'blue', width:2, opacity:0.5 };<br/>`<EJ.RangeNavigator`<br/>`border ={border}>` <br/>`</EJ.RangeNavigator>`|**Property:** *navigatorBorder* <br/><br/>`<RangeNavigatorComponent id='charts' navigatorBorder={ width: 4, color: 'green'}>`<br/>`</RangeNavigatorComponent>`|
|dataSource for range navigator| **Property:** *dataSource* <br/><br/>var series = { type: 'line', dataSource: data };<br/>`<EJ.RangeNavigator`<br/>`series={series}>` <br/>`</EJ.RangeNavigator>`|**Property:** *dataSource* <br/><br/>`<RangenavigatorSeriesDirective dataSource={data}>`<br/>`</RangenavigatorSeriesDirective>`|
|enabling deffered update for range navigator| **Property:** *enableDeferedUpdate* <br/><br/>`<EJ.RangeNavigator`<br/>`enableDeferedUpdate={true}>` <br/>`</EJ.RangeNavigator>`|**Property:** *enableDeferredUpdate* <br/><br/>`<RangeNavigatorComponent id='charts' enableDeferredUpdate={false}>`<br/>`</RangeNavigatorComponent>`|
|multilevel level labels| **Property:** *labelSettings.higherLevelLabels* <br/><br/>var labelSettings= { higherLevel: { } };<br/>`<EJ.RangeNavigator`<br/>`labelSettings = {labelSettings}>` <br/>`</EJ.RangeNavigator>`|**Property:** *enableGrouping* <br/><br/>`<RangeNavigatorComponent id='charts' enableGrouping={false}>`<br/>`</RangeNavigatorComponent>`|
|enabling scroll bar| **Property:** *enableScrollBar* <br/><br/>var labelSettings= { higherLevel: { } };<br/>`<EJ.RangeNavigator`<br/>`enableScrollBar={true}>` <br/>`</EJ.RangeNavigator>`|Not Applicable|
|enabling auto resizing| **Property:** *enableAutoResize* <br/><br/>`<EJ.RangeNavigator`<br/>`enableAutoResize={true}>` <br/>`</EJ.RangeNavigator>`|Not Applicable|
|enabling isResponsive| **Property:** *isResponsive* <br/><br/>`<EJ.RangeNavigator`<br/>`isResponsive={true}>` <br/>`</EJ.RangeNavigator>`|Not Applicable|
|enabling RTL for range navigator| **Property:** *enableRtl* <br/><br/>`<EJ.RangeNavigator`<br/>`enableRtl={true}>` <br/>`</EJ.RangeNavigator>`|**Property:** *enableRtl* <br/><br/>`<RangeNavigatorComponent id='charts' enableRtl={false}>`<br/>`</RangeNavigatorComponent>`|
|interval for range navigator| **Property:** *valueAxisSettings.range.interval* <br/><br/>var valueAxisSettings= {Interval: 5 };<br/>`<EJ.RangeNavigator`<br/>`valueAxisSettings={valueAxisSettings}>` <br/>`</EJ.RangeNavigator>`|**Property:** *interval* <br/><br/>`<RangeNavigatorComponent id='charts' interval={1}>`<br/>`</RangeNavigatorComponent>`|
|intervaltype for range navigator| **Property:** *valueAxisSettings.range.intervalType* <br/><br/>var valueAxisSettings= {intervalType: 'Years'};<br/>`<EJ.RangeNavigator`<br/>`valueAxisSettings={valueAxisSettings}>` <br/>`</EJ.RangeNavigator>`|**Property:** *intervalType* <br/><br/>`<RangeNavigatorComponent id='charts' intervalType='Months'>`<br/>`</RangeNavigatorComponent>`|
|labelformat for range navigator| Not applicable|**Property:** *labelFormat* <br/><br/>`<RangeNavigatorComponent id='charts' labelFormat='yMd'>`<br/>`</RangeNavigatorComponent>`|
|label intersect action for range navigator| Not applicable|**Property:** *labelIntersectAction* <br/><br/>`<RangeNavigatorComponent id='charts' labelIntersectAction='Hide'>`<br/>`</RangeNavigatorComponent>`|
|labelStyle range navigator| **Property:** *valueAxisSettings.font* <br/><br/>var valueAxisSettings= {font: { } };<br/>`<EJ.RangeNavigator`<br/>`valueAxisSettings={valueAxisSettings}>` <br/>`</EJ.RangeNavigator>`|**Property:** *labelStyle* <br/><br/>`<RangeNavigatorComponent id='charts' labelStyle='Hide'>`<br/>`</RangeNavigatorComponent>`|
|locale of range navigator| **Property:** *locale* <br/><br/>`<EJ.RangeNavigator`<br/>`locale='en-US'>` <br/>`</EJ.RangeNavigator>`|**Property:** *locale* <br/><br/>`<RangeNavigatorComponent id='charts' locale='en-US'>`<br/>`</RangeNavigatorComponent>`|
|major grid lines of range navigator| **Property:** *valueAxisSettings.majorGridLines* <br/><br/>var valueAxisSettings= { majorGridLines: { width: 2, color: 'red' } };<br/>`<EJ.RangeNavigator`<br/>`locale='en-US'>` <br/>`</EJ.RangeNavigator>`|**Property:** *majorGridLines* <br/><br/>`<RangeNavigatorComponent id='charts' majorGridLines={ width: 2, color: 'red'}>`<br/>`</RangeNavigatorComponent>`|
|margin of range navigator|Not Applicable|**Property:** *margin* <br/><br/>`<RangeNavigatorComponent id='charts' margin={ }>`<br/>`</RangeNavigatorComponent>`|
|maximum value of range navigator| **Property:** *valueAxisSettings.range.max* <br/><br/>var valueAxisSettings= { range: { max: 2 } };<br/>`<EJ.RangeNavigator`<br/>`locale='en-US'>` <br/>`</EJ.RangeNavigator>`|**Property:** *maximum* <br/><br/>`<RangeNavigatorComponent id='charts' maximum={34}>`<br/>`</RangeNavigatorComponent>`|
|minimum value of range navigator| **Property:** *valueAxisSettings.range.min* <br/><br/>var valueAxisSettings= { range: { min: 2 } };<br/>`<EJ.RangeNavigator`<br/>`locale='en-US'>` <br/>`</EJ.RangeNavigator>`|**Property:** *minimum* <br/><br/>`<RangeNavigatorComponent id='charts' minimum={4}>`<br/>`</RangeNavigatorComponent>`|
|query for data source of range navigator| Not Applicable|**Property:** *query* <br/><br/>`<RangeNavigatorComponent id='charts' query=''>`<br/>`</RangeNavigatorComponent>`|
|Secondary label alignment of range navigator| Not Applicable|**Property:** *secondaryLabelAlignment* <br/><br/>`<RangeNavigatorComponent id='charts' secondaryLabelAlignment='Far'>`<br/>`</RangeNavigatorComponent>`|
|Skeleton of range navigator axis| Not Applicable|**Property:** *skeleton* <br/><br/>`<RangeNavigatorComponent id='charts' skeleton=''>`<br/>`</RangeNavigatorComponent>`|
|skeletontype of range navigator axis| Not Applicable|**Property:** *skeletonType* <br/><br/>`<RangeNavigatorComponent id='charts' skeletonType=''>`<br/>`</RangeNavigatorComponent>`|
|Theme of range navigator| **Property:** *theme* <br/><br/>`<EJ.RangeNavigator`<br/>`theme=''>` <br/>`</EJ.RangeNavigator>`|**Property:** *theme* <br/><br/>`<RangeNavigatorComponent id='charts' theme=''>`<br/>`</RangeNavigatorComponent>`|
|Default selector value range navigator| **Property:** *selectedRangeSettings* <br/><br/>var selectedRangeSettings= {start:'', end:''};<br>`<EJ.RangeNavigator`<br/>`selectedRangeSettings={selectedRangeSettings}>` <br/>`</EJ.RangeNavigator>`|**Property:** *value* <br/><br/>`<RangeNavigatorComponent id='charts' value=[ 2, 10]>`<br/>`</RangeNavigatorComponent>`|
|Value type of range navigator| **Property:** *valueType* <br/><br>`<EJ.RangeNavigator`<br/>`valueType='DateTime'>` <br/>`</EJ.RangeNavigator>`|**Property:** *valueType* <br/><br/>`<RangeNavigatorComponent id='charts' valueType='Logarithmic'>`<br/>`</RangeNavigatorComponent>`|
|Width of range navigator| **Property:** *size.width* <br/><br>`<EJ.RangeNavigator`<br/>`size={ width: '200'}>` <br/>`</EJ.RangeNavigator>`|**Property:** *width* <br/><br/>`<RangeNavigatorComponent id='charts' width='400'>`<br/>`</RangeNavigatorComponent>`|
|Height of range navigator| **Property:** *size.height* <br/><br>`<EJ.RangeNavigator`<br/>`size={ height: '200'}>` <br/>`</EJ.RangeNavigator>`|**Property:** *height* <br/><br/>`<RangeNavigatorComponent id='charts' height='400'>`<br/>`</RangeNavigatorComponent>`|
|Series settings for range navigator| **Property:** *seriesSettings* <br/><br>var seriesSettings= { };<br/>`<EJ.RangeNavigator`<br/>`seriesSettings={seriesSettings}>` <br/>`</EJ.RangeNavigator>`|Not Applicable|
|Range settings for range navigator| **Property:** *rangeSettings* <br/><br>var rangeSettings= { start: 3, end: 6 };<br/>`<EJ.RangeNavigator`<br/>`rangeSettings={rangeSettings}>` <br/>`</EJ.RangeNavigator>`|Not Applicable|
|Scroll range settings for range navigator| **Property:** *scrollRangeSettings* <br/><br>var scrollRangeSettings= { start: 3, end: 6 };<br/>`<EJ.RangeNavigator`<br/>`scrollRangeSettings={scrollRangeSettings}>` <br/>`</EJ.RangeNavigator>`|Not Applicable|

## Series

<!-- markdownlint-disable MD033 -->
| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
|animation| **Property:** *enableAnimation* <br/><br>`<EJ.RangeNavigator`<br/>`enableAnimation={true}>` <br/>`</EJ.RangeNavigator>`|**Property:** *animation.enable* <br/><br/>`<RangeNavigatorComponent id='charts' animation={ enable: true}>`<br/>`</RangeNavigatorComponent>`|
|Border for range navigator series| **Property:** *border* <br/><br>var series = [{ border: { color: 'transparent', width: 2 } }];<br/>`<EJ.RangeNavigator`<br/>`series={series}>` <br/>`</EJ.RangeNavigator>`|**Property:** *border* <br/><br/>`<RangenavigatorSeriesDirective`<br/>`border={ color: 'pink', width: 2}>`<br/>`</RangenavigatorSeriesDirective>`|
|dataSource for range navigator| **Property:** *series.dataSource* <br/><br>var series = [{ dataSource: [{}] }];<br/>`<EJ.RangeNavigator`<br/>`series={series}>` <br/>`</EJ.RangeNavigator>`|**Property:** *series.dataSource* <br/><br/>`<RangenavigatorSeriesDirective`<br/>`dataSource={data}>`<br/>`</RangenavigatorSeriesDirective>`|
|query for data source of range navigator| Not Applicable|**Property:** *query* <br/><br/>`<RangenavigatorSeriesDirective`<br/>`dataSource={data} query=''>`<br/>`</RangenavigatorSeriesDirective>`|
|series type for range navigator| **Property:** *series.type* <br/><br>var series = [{ type: '' }];<br/>`<EJ.RangeNavigator`<br/>`series={series}>` <br/>`</EJ.RangeNavigator>`|**Property:** *series.type* <br/><br/>`<RangenavigatorSeriesDirective`<br/>`type=''>`<br/>`</RangenavigatorSeriesDirective>`|
|series xName for range navigator| **Property:** *series.xName* <br/><br>var series = [{ xName: '' }];<br/>`<EJ.RangeNavigator`<br/>`series={series}>` <br/>`</EJ.RangeNavigator>`|**Property:** *series.xName* <br/><br/>`<RangenavigatorSeriesDirective`<br/>`xName=''>`<br/>`</RangenavigatorSeriesDirective>`|
|series yName for range navigator| **Property:** *series.yName* <br/><br>var series = [{ yName: '' }];<br/>`<EJ.RangeNavigator`<br/>`series={series}>` <br/>`</EJ.RangeNavigator>`|**Property:** *series.yName* <br/><br/>`<RangenavigatorSeriesDirective`<br/>`yName=''>`<br/>`</RangenavigatorSeriesDirective>`|
|series fill color for range navigator| **Property:** *series.fill* <br/><br>var series = [{ fill: '' }];<br/>`<EJ.RangeNavigator`<br/>`series={series}>` <br/>`</EJ.RangeNavigator>`|**Property:** *series.fill* <br/><br/>`<RangenavigatorSeriesDirective`<br/>`fill=''>`<br/>`</RangenavigatorSeriesDirective>`|
|series width for range navigator| **Property:** *series.width* <br/><br>var series = [{ width: '2' }];<br/>`<EJ.RangeNavigator`<br/>`series={series}>` <br/>`</EJ.RangeNavigator>`|**Property:** *series.width* <br/><br/>`<RangenavigatorSeriesDirective`<br/>`width=''>`<br/>`</RangenavigatorSeriesDirective>`|
|series dashArray for range navigator|Not Applicable|**Property:** *series.dashArray* <br/><br/>`<RangenavigatorSeriesDirective`<br/>`dashArray='10,5'>`<br/>`</RangenavigatorSeriesDirective>`|

## StyleSettings

<!-- markdownlint-disable MD033 -->
| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
|Style settings of range navigator| **Property:** *navigatorStyleSettings* <br/><br>var navigatorStyleSettings = { leftThumbTemplate: 'left' };<br/>`<EJ.RangeNavigator`<br/>`navigatorStyleSettings={navigatorStyleSettings}>` <br/>`</EJ.RangeNavigator>`|**Property:** *navigatorStyleSettings* <br/><br/>`<RangeNavigatorComponent id='charts'`<br/>`navigatorStyleSettings={ unselectedRegionColor: 'transparent' }`<br/>`</RangeNavigatorComponent>`|
|Selected region color of range navigator| **Property:** *selectedRegionColor* <br/><br>var navigatorStyleSettings = { selectedRegionColor: 'red' };<br/>`<EJ.RangeNavigator`<br/>`navigatorStyleSettings={navigatorStyleSettings}>` <br/>`</EJ.RangeNavigator>`|**Property:** *selectedRegionColor* <br/><br/>`<RangeNavigatorComponent id='charts'`<br/>`navigatorStyleSettings={selectedRegionColor: 'red' }`<br/>`</RangeNavigatorComponent>`|
|UnSelected region color of range navigator| **Property:** *unselectedRegionColor* <br/><br>var navigatorStyleSettings = { unselectedRegionColor: 'red' };<br/>`<EJ.RangeNavigator`<br/>`navigatorStyleSettings={navigatorStyleSettings}>` <br/>`</EJ.RangeNavigator>`|**Property:** *unselectedRegionColor* <br/><br/>`<RangeNavigatorComponent id='charts'`<br/>`navigatorStyleSettings={unselectedRegionColor: 'red' }`<br/>`</RangeNavigatorComponent>`|
|Thumb color of range navigator| **Property:** *thumbColor* <br/><br>var navigatorStyleSettings = { thumbColor: 'red' };<br/>`<EJ.RangeNavigator`<br/>`navigatorStyleSettings={navigatorStyleSettings}>` <br/>`</EJ.RangeNavigator>`|**Property:** *thumbSettings* <br/><br/>`<RangeNavigatorComponent id='charts'`<br/>`navigatorStyleSettings={thumbSettings: 'red' }`<br/>`</RangeNavigatorComponent>`|
|Selected region opacity of range navigator| **Property:** *selectedRegionOpacity* <br/><br>var navigatorStyleSettings = { selectedRegionOpacity: 0.4 };<br/>`<EJ.RangeNavigator`<br/>`navigatorStyleSettings={navigatorStyleSettings}>` <br/>`</EJ.RangeNavigator>`|Not Applicable|
|Unselected region opacity of range navigator| **Property:** *UnselectedRegionOpacity* <br/><br>var navigatorStyleSettings = { UnselectedRegionOpacity: 0.4 };<br/>`<EJ.RangeNavigator`<br/>`navigatorStyleSettings={navigatorStyleSettings}>` <br/>`</EJ.RangeNavigator>`|Not Applicable|
|Background for thumb| **Property:** *background* <br/><br>var navigatorStyleSettings = { background: 'red' };<br/>`<EJ.RangeNavigator`<br/>`navigatorStyleSettings={navigatorStyleSettings}>` <br/>`</EJ.RangeNavigator>`|Not Applicable|
|border for thumb| **Property:** *border* <br/><br>var navigatorStyleSettings = { border: { color: 'red', width: 2} };<br/>`<EJ.RangeNavigator`<br/>`navigatorStyleSettings={navigatorStyleSettings}>` <br/>`</EJ.RangeNavigator>`|Not Applicable|
|Highlightsettings for range navigator| **Property:** *highlightSettings* <br/><br>var navigatorStyleSettings = { highlightSettings: { } };<br/>`<EJ.RangeNavigator`<br/>`navigatorStyleSettings={navigatorStyleSettings}>` <br/>`</EJ.RangeNavigator>`|Not Applicable|
|Selected style settings for range navigator| **Property:** *selectionSettings* <br/><br>var navigatorStyleSettings = { selectionSettings: { } };<br/>`<EJ.RangeNavigator`<br/>`navigatorStyleSettings={navigatorStyleSettings}>` <br/>`</EJ.RangeNavigator>`|Not Applicable|
|Left thumb template for range navigator| **Property:** *leftThumbTemplate* <br/><br>var navigatorStyleSettings = { leftThumbTemplate: ''};<br/>`<EJ.RangeNavigator`<br/>`navigatorStyleSettings={navigatorStyleSettings}>` <br/>`</EJ.RangeNavigator>`|Not Applicable|
|Right thumb template for range navigator| **Property:** *rightThumbTemplate* <br/><br>var navigatorStyleSettings = { rightThumbTemplate: ''};<br/>`<EJ.RangeNavigator`<br/>`navigatorStyleSettings={navigatorStyleSettings}>` <br/>`</EJ.RangeNavigator>`|Not Applicable|

## Tooltip

<!-- markdownlint-disable MD033 -->
| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
|tooltip| **Property:** *visible* <br/><br>var tooltipSettings = { visible: true};<br/>`<EJ.RangeNavigator`<br/>`tooltipSettings = {tooltipSettings}>` <br/>`</EJ.RangeNavigator>`|**Property:** *enable* <br/><br/>`<RangeNavigatorComponent id='charts'`<br/>`tooltip= { enable: true }`<br/>`</RangeNavigatorComponent>`|
|background color of tooltip| **Property:** *backgroundColor* <br/><br>var tooltipSettings = { backgroundColor: 'red'};<br/>`<EJ.RangeNavigator`<br/>`tooltipSettings = {tooltipSettings}>` <br/>`</EJ.RangeNavigator>`|**Property:** *fill* <br/><br/>`<RangeNavigatorComponent id='charts'`<br/>`tooltip= { fill: 'pink' }`<br/>`</RangeNavigatorComponent>`|
|Font style of tooltip| **Property:** *font* <br/><br>var tooltipSettings = { font: 'red'};<br/>`<EJ.RangeNavigator`<br/>`tooltipSettings = {tooltipSettings}>` <br/>`</EJ.RangeNavigator>`|**Property:** *textStyle* <br/><br/>`<RangeNavigatorComponent id='charts'`<br/>`tooltip= { textStyle: 'pink' }`<br/>`</RangeNavigatorComponent>`|
|Label format of tooltip| **Property:** *labelFormat* <br/><br>var tooltipSettings = {labelFormat: 'yMd'};<br/>`<EJ.RangeNavigator`<br/>`tooltipSettings = {tooltipSettings}>` <br/>`</EJ.RangeNavigator>`|**Property:** *format* <br/><br/>`<RangeNavigatorComponent id='charts'`<br/>`tooltip= { format: 'yMd' }`<br/>`</RangeNavigatorComponent>`|
|Display mode of tooltip| **Property:** *tooltipDisplayMode* <br/><br>var tooltipSettings = { tooltipDisplayMode: 'always'};<br/>`<EJ.RangeNavigator`<br/>`tooltipSettings = {tooltipSettings}>` <br/>`</EJ.RangeNavigator>`|**Property:** *displayMode* <br/><br/>`<RangeNavigatorComponent id='charts'`<br/>`tooltip= {displayMode: 'Always'}`<br/>`</RangeNavigatorComponent>`|
|Template of tooltip| Not Applicable|**Property:** *template* <br/><br/>`<RangeNavigatorComponent id='charts'`<br/>`tooltip= {template: '<div>Chart</div>'}`<br/>`</RangeNavigatorComponent>`|
|Border of tooltip|Not Applicable|**Property:** *border* <br/><br/>`<RangeNavigatorComponent id='charts'`<br/>`tooltip= {border:  { color: 'red', width: 2} }`<br/>`</RangeNavigatorComponent>`|
|Border of tooltip|Not Applicable|**Property:** *opacity* <br/><br/>`<RangeNavigatorComponent id='charts'`<br/>`tooltip= {opacity: 0.5 }`<br/>`</RangeNavigatorComponent>`|

## Period Selector

<!-- markdownlint-disable MD033 -->
| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
|period Selector position|Not Applicable|**Property:** *periodSelectorSettings.position* <br/><br/>`<RangeNavigatorComponent id='charts'`<br/>`periodSelectorSettings= { position:'Top'}`<br/>`</RangeNavigatorComponent>`|

## Methods

<!-- markdownlint-disable MD033 -->
| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
|Print|Not Applicable|**Property:** *print()* <br/><br/>public clickHandler(){<br/>this.range.print();}<br/>`<RangeNavigatorComponent id='charts'`<br/>`ref={g => this.range = g}`<br/>`</RangeNavigatorComponent>`|
|Export|Not Applicable|**Property:** *export()* <br/><br/>public clickHandler(){<br/>this.range.export('PNG','export');}<br/>`<RangeNavigatorComponent id='charts'`<br/>`ref={g => this.range = g}`<br/>`</RangeNavigatorComponent>`|

## Events

<!-- markdownlint-disable MD033 -->
| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
|Fires before loading the RangeNavigator.| **Property:** *load* <br/><br/>`<EJ.RangeNavigator`<br/>`load = {Load}>` <br/>`</EJ.RangeNavigator>`<br/>function Load(){ };|**Property:** *load* <br/><br/>`<RangeNavigatorComponent id='charts'`<br/>`load={this.load.bind(this)}`<br/>`</RangeNavigatorComponent>`<br/> public load(): void { };|
|Fires before loading the RangeNavigator.| **Property:** *loaded* <br/><br/>`<EJ.RangeNavigator`<br/>`loaded = {loaded}>` <br/>`</EJ.RangeNavigator>`<br/>function Loaded(){ };|**Property:** *loaded* <br/><br/>`<RangeNavigatorComponent id='charts'`<br/>`loaded={this.loaded.bind(this)}`<br/>`</RangeNavigatorComponent>`<br/> public loaded(): void { };|
|Fires when  the value changes in range navigator| **Property:** *rangeChanged* <br/><br/>`<EJ.RangeNavigator`<br/>`rangeChanged = {rangeChanged}>` <br/>`</EJ.RangeNavigator>`<br/>function rangeChanged(){ };|**Property:** *changed* <br/><br/>`<RangeNavigatorComponent id='charts'`<br/>`changed={this.changed.bind(this)}`<br/>`</RangeNavigatorComponent>`<br/> public changed(): void { };|
|Fires after the RangeNavigator|Not Applicable|**Property:** *resized* <br/><br/>`<RangeNavigatorComponent id='charts'`<br/>`resized={this.resized.bind(this)}`<br/>`</RangeNavigatorComponent>`<br/> public resized(): void { };|
|Fires before tooltip in RangeNavigator|Not Applicable|**Property:** *tooltipRender* <br/><br/>`<RangeNavigatorComponent id='charts'`<br/>`tooltipRender={this.tooltipRender.bind(this)}`<br/>`</RangeNavigatorComponent>`<br/> public tooltipRender(): void { };|
|Fires before period render in the RangeNavigator|Not Applicable|**Property:** *selectorRender* <br/><br/>`<RangeNavigatorComponent id='charts'`<br/>`selectorRender={this.selectorRender.bind(this)}`<br/>`</RangeNavigatorComponent>`<br/> public selectorRender(): void { };|
|Fires when scrollStart the RangeNavigator|**Property:** *scrollStart* <br/><br/>`<EJ.RangeNavigator`<br/>`scrollStart = {scrollStart}>` <br/>`</EJ.RangeNavigator>`<br/>function scrollStart(){ };|Not Applicable|
|Fires when scrollEnd the RangeNavigator|**Property:** *scrollEnd* <br/><br/>`<EJ.RangeNavigator`<br/>`scrollEnd = {scrollEnd}>` <br/>`</EJ.RangeNavigator>`<br/>function scrollEnd(){ };|Not Applicable|
|Fires when selected range Start the RangeNavigator|**Property:** *selectedRangeStart* <br/><br/>`<EJ.RangeNavigator`<br/>`selectedRangeStart = {selectedRangeStart}>` <br/>`</EJ.RangeNavigator>`<br/>function selectedRangeStart(){ };|Not Applicable|
|Fires when selected range ends the RangeNavigator|**Property:** *selectedRangeEnd* <br/><br/>`<EJ.RangeNavigator`<br/>`selectedRangeEnd = {selectedRangeEnd}>` <br/>`</EJ.RangeNavigator>`<br/>function selectedRangeEnd(){ };|Not Applicable|
|Fires when scroll range changed in the RangeNavigator|**Property:** *scrollChanged* <br/><br/>`<EJ.RangeNavigator`<br/>`scrollChanged = {scrollChanged}>`<br/>`</EJ.RangeNavigator>`<br/>function scrollChanged(){ };|Not Applicable|
|Fires when  click in the RangeNavigator|**Property:** *click* <br/><br/>`<EJ.RangeNavigator`<br/>`click = {click}>`<br/>`</EJ.RangeNavigator>`<br/>function click(){ };|Not Applicable|
|Fires when  right click in the RangeNavigator|**Property:** *rightClick* <br/><br/>`<EJ.RangeNavigator`<br/>`rightClick = {rightClick}>`<br/>`</EJ.RangeNavigator>`<br/>function rightClick(){ };|Not Applicable|
|Fires when double click in the RangeNavigator|**Property:** *doubleClick* <br/><br/>`<EJ.RangeNavigator`<br/>`doubleClick = {doubleClick}>`<br/>`</EJ.RangeNavigator>`<br/>function doubleClick(){ };|Not Applicable|