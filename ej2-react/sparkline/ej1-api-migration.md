---
layout: post
title: Ej1 api migration in React Sparkline component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion React Sparkline component of Syncfusion Essential JS 2 and more.
control: Ej1 api migration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in React Sparkline component

This article describes the API migration process of Accordion component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## Sparkline Types

{% raw %}

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Type| **Property:** *type*<br/><br/>  `<EJ.Sparkline id="sparkline" type="line"> </EJ.Sparkline>, document.getElementById('sparkline')`| **Property:** *type*<br/><br/> `<SparklineComponent  id='sparkline' type='Line'></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');` |

## Databinding

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Datasource| **Property:** *dataSource*<br/><br/> `<EJ.Sparkline id="sparkline" dataSource={dataSource1}> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *dataSource*<br/><br/> `<SparklineComponent  id='sparkline' dataSource={[ {x:0,yval:50},{x:1,yval:30}]}></SparklineComponent >,`<br><br/>`document.getElementById('sparkline')`|
|Binding X values with datasource| **Property:** *xName*<br/><br/> `<EJ.Sparkline id="sparkline" xName="x"> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *xName*<br/><br/> `<SparklineComponent  id='sparkline' xName='xValue'></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Binding Y values with datasource| **Property:** *yName*<br/><br/> `<EJ.Sparkline id="sparkline" yName="yval"> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *yName*<br/><br/> `<SparklineComponent  id='sparkline' yName='yValue'></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|

<!-- markdownlint-disable MD038 -->

## Markers

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Enable markers| **Property:** *markerSettings.visible*<br/><br/> `var markerSettings = { visible:true }` <br/> `<EJ.Sparkline id="sparkline" markerSettings={markerSettings}> </EJ.Sparkline>, document.getElementById('sparkline')`| **Property:** *markerSettings.visible*<br/><br/> `<SparklineComponent  id='sparkline' markerSettings=} visible: ['All']}></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Color| **Property:** *markerSettings.fill*<br/><br/> `var markerSettings = { fill:"green" }` <br/> `<EJ.Sparkline id="sparkline" markerSettings={markerSettings}> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *markerSettings.fill*<br/><br/> `<SparklineComponent  id='sparkline' markerSettings=} fill:'green'}></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Size| **Property:** *markerSettings.width*<br/><br/> `var markerSettings = { width:2 }` <br/> `<EJ.Sparkline id="sparkline" markerSettings={markerSettings}> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *markerSettings.size*<br/><br/> `<SparklineComponent  id='sparkline' markerSettings=} size:10}></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Opacity| **Property:** *markerSettings.opacity*<br/><br/> `var markerSettings = { opacity:0.5 }` <br/> `<EJ.Sparkline id="sparkline" markerSettings={markerSettings}> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *markerSettings.opacity*<br/><br/> `<SparklineComponent  id='sparkline' markerSettings=} opacity:0.5}></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Border color| **Property:** *markerSettings.border.color*<br/><br/> `var markerSettings = { border:{ color: "red"} }` <br/> `<EJ.Sparkline id="sparkline" markerSettings={markerSettings}> </EJ.Sparkline>, document.getElementById('sparkline')`| **Property:** *markerSettings.border.color*<br/><br/> `<SparklineComponent  id='sparkline' markerSettings=} border:{color:'green'}}></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Border width| **Property:** *markerSettings.border.width*<br/><br/> `var markerSettings = { border:{width:2} }` <br/> `<EJ.Sparkline id="sparkline" markerSettings={markerSettings}> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *markerSettings.border.width*<br/><br/> `<SparklineComponent  id='sparkline' markerSettings=} border:{width:2}}></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Border opacity| **Property:** *markerSettings.border.opacity*<br/><br/> `var markerSettings = { border:{opacity:0.5} }` <br/> `<EJ.Sparkline id="sparkline" markerSettings={markerSettings}> </EJ.Sparkline>, document.getElementById('sparkline')` |Not applicable|

## Data labels

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Enable data labels| Not applicable |**Property:** *dataLabelSettings.visible*<br/><br/> `<SparklineComponent  id='sparkline' dataLabelSettings=} visible:['All'] }></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Color| Not applicable |**Property:** *dataLabelSettings.fill*<br/><br/> `<SparklineComponent  id='sparkline' dataLabelSettings=} color:'green'}></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Opacity| Not applicable |**Property:** *dataLabelSettings.opacity*<br/><br/>`<SparklineComponent  id='sparkline' dataLabelSettings=} opacity:0.5}></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');` |
|Border color| Not applicable |**Property:** *dataLabelSettings.border.color*<br/><br/> `<SparklineComponent  id='sparkline' dataLabelSettings=} border:{color:'green'}}></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Border width| Not applicable |**Property:** *dataLabelSettings.border.width*<br/><br/> `<SparklineComponent  id='sparkline' dataLabelSettings=} border:{width:2}}></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Format| Not applicable |**Property:** *dataLabelSettings.format*<br/><br/> `<SparklineComponent  id='sparkline' dataLabelSettings=} format:'${xval}: ${yval}'}></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Horizontal Offset| Not applicable |**Property:** *dataLabelSettings.offset.x*<br/><br/> `<SparklineComponent  id='sparkline' dataLabelSettings=} offset:{x:10}}></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Vertical Offset| Not applicable |**Property:** *dataLabelSettings.offset.y*<br/><br/> `<SparklineComponent  id='sparkline' dataLabelSettings=} offset:{y:10}}></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Font color| Not applicable |**Property:** *dataLabelSettings.textStyle.color*<br/><br/> `<SparklineComponent  id='sparkline' dataLabelSettings=}textStyle:{color:'red'}}></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Font family| Not applicable |**Property:** *dataLabelSettings.textStyle.fontFamily*<br/><br/> `<SparklineComponent  id='sparkline' dataLabelSettings=}textStyle:{fontFamily:'Arial'}}></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Font style| Not applicable |**Property:** *dataLabelSettings.textStyle.fontStyle*<br/><br/> `<SparklineComponent  id='sparkline' dataLabelSettings=} textStyle:{fontStyle:'Normal'}}></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Font weight| Not applicable |**Property:** *dataLabelSettings.textStyle.fontWeight*<br/><br/> `<SparklineComponent  id='sparkline' dataLabelSettings=} textStyle:{fontWeight:'Bold'}}></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Font opacity| Not applicable |**Property:** *dataLabelSettings.textStyle.opacity*<br/><br/> `<SparklineComponent  id='sparkline' dataLabelSettings=} textStyle:{opacity:0.5}}></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Font size| Not applicable |**Property:** *dataLabelSettings.textStyle.fontSize*<br/><br/> `<SparklineComponent  id='sparkline' dataLabelSettings=} textStyle:{fontSize:'10px'}}></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|

## Range band

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Color| **Property:** *rangeBandSettings.color*<br/><br/>`var rangeBandSettings = { color:"green" }` <br/> `<EJ.Sparkline id="sparkline" rangeBandSettings={rangeBandSettings}> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *rangeBandSettings.color*<br/><br/> `<SparklineComponent  id='sparkline' rangeBandSettings=} color:'green'}></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Opacity| **Property:** *rangeBandSettings.opacity*<br/><br/> `var rangeBandSettings = { opacity:0.5 }` <br/> `<EJ.Sparkline id="sparkline" rangeBandSettings={rangeBandSettings}> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *rangeBandSettings.opacity*<br/><br/> `<SparklineComponent  id='sparkline' rangeBandSettings=} opacity:0.5}></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Start range| **Property:** *rangeBandSettings.startRange*<br/><br/> `var rangeBandSettings = { startRange: 4 }` <br/> `<EJ.Sparkline id="sparkline" rangeBandSettings={rangeBandSettings}> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *rangeBandSettings.startRange*<br/><br/> `<SparklineComponent  id='sparkline' rangeBandSettings=} startRange:4}></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|End range| **Property:** *rangeBandSettings.endRange*<br/><br/> `var rangeBandSettings = { endRange:30 }` <br/> `<EJ.Sparkline id="sparkline" rangeBandSettings={rangeBandSettings}> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *rangeBandSettings.endRange*<br/><br/> `<SparklineComponent  id='sparkline' rangeBandSettings=} endRange:30}></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|

## Special points customization

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|High point color| **Property:** *highPointColor*<br/><br/> `<EJ.Sparkline id="sparkline" highPointColor="green"> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *highPointColor*<br/><br/> `<SparklineComponent  id='sparkline' highPointColor='green'></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Low point color| **Property:** *lowPointColor*<br/><br/> `<EJ.Sparkline id="sparkline" lowPointColor="green"> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *lowPointColor*<br/><br/> `<SparklineComponent  id='sparkline' lowPointColor='green'></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Negative point color| **Property:** *negativePointColor*<br/><br/> `<EJ.Sparkline id="sparkline" negativePointColor="green"> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *negativePointColor*<br/><br/> `<SparklineComponent  id='sparkline' negativePointColor='green'></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Start point color| **Property:** *startPointColor*<br/><br/> `<EJ.Sparkline id="sparkline" startPointColor="green"> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *startPointColor*<br/><br/> `<SparklineComponent  id='sparkline' startPointColor='green'></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|End point color| **Property:** *endPointColor*<br/><br/> `<EJ.Sparkline id="sparkline" endPointColor="green"> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *endPointColor*<br/><br/> `<SparklineComponent  id='sparkline' endPointColor='green'></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Tie point color| **Property:** *tiePointColor*<br/><br/>Not Applicable |**Property:** *tiePointColor*<br/><br/> `<SparklineComponent  id='sparkline' tiePointColor='green'></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|

## Axis customization

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Show axis line| **Property:** *axisSettings.visible*<br/><br/> `var axisLineSettings = { visible : true};`<br/>`<EJ.Sparkline id="sparkline"  axisLineSttings={axisLineSettings}> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *axisSettings.lineSettings.visible*<br/><br/> `<SparklineComponent  id='sparkline' axisSettings=} lineSettings:{ visible: true } }></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Line color| **Property:** *axisSettings.color*<br/><br/> `var axisLineSettings = { color : "red"};`<br/>`<EJ.Sparkline id="sparkline"  axisLineSttings={axisLineSettings}> </EJ.Sparkline>, document.getElementById('sparkline')`|**Property:** *axisSettings.lineSettings.color*<br/><br/> `<SparklineComponent  id='sparkline' axisSettings=} lineSettings:{ color: 'green' } }></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Line width| **Property:** *axisSettings.width*<br/><br/> `var axisLineSettings = { width : 2};`<br/>`<EJ.Sparkline id="sparkline"  axisLineSttings={axisLineSettings}> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *axisSettings.lineSettings.width*<br/><br/> `<SparklineComponent  id='sparkline' axisSettings=} lineSettings:{ width: 2 } }></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Dash array| **Property:** *axisSettings.dashArray*<br/><br/> `var axisLineSettings = { dashArray : 1,2};`<br/>`<EJ.Sparkline id="sparkline"  axisLineSttings={axisLineSettings}> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *axisSettings.lineSettings.dashArray*<br/><br/> `<SparklineComponent  id='sparkline' axisSettings=} lineSettings:{ dashArray: 1,2 } }></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|X axis minimum value| Not applicable |**Property:** *axisSettings.minX*<br/><br/> `<SparklineComponent  id='sparkline' axisSettings=} minX: 2 }></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|X axis maximum value| Not applicable |**Property:** *axisSettings.maxX*<br/><br/>`<SparklineComponent  id='sparkline' axisSettings=} maxX:10 }></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Y axis minimum value| Not applicable |**Property:** *axisSettings.minY*<br/><br/> `<SparklineComponent  id='sparkline' axisSettings={ {minY: 5 }></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Y axis maximum value| Not applicable |**Property:** *axisSettings.maxY*<br/><br/> `<SparklineComponent  id='sparkline' axisSettings=} maxY: 10 }></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Horizontal axis line position| Not applicable |**Property:** *axisSettings.value*<br/><br/> `<SparklineComponent  id='sparkline' axisSettings=} value: 10 }></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|

## Appearance customization

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Background color| **Property:** *background*<br/><br/> `<EJ.Sparkline id="sparkline"  background="grey"> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *containerArea.background*<br/><br/> `<SparklineComponent  id='sparkline' background='grey'></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Border color | Not applicable |**Property:** *containerArea.border.color*<br/><br/> `<SparklineComponent  id='sparkline' containerArea=} border: {color:'green'} }></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Border width | Not applicable |**Property:** *containerArea.border.width*<br/><br/> `<SparklineComponent  id='sparkline' containerArea=} border: {width:2} }></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Series color| **Property:** *fill*<br/><br/> `<EJ.Sparkline id="sparkline"  fill="green"> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *fill*<br/><br/> `<SparklineComponent  id='sparkline' fill='grey'></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Series opacity| **Property:** *opacity*<br/><br/> `<EJ.Sparkline id="sparkline"  opacity={0.5}> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *opacity*<br/><br/> `<SparklineComponent  id='sparkline' opacity={0.5}></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Line series width| **Property:** *width*<br/><br/> `<EJ.Sparkline id="sparkline"  width={2}> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *lineWidth*<br/><br/> `<SparklineComponent  id='sparkline' lineWidth={ 2 }></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Series border color| **Property:** *border.color*<br/><br/> `var border = {color:"green"};`<br/>`<EJ.Sparkline id="sparkline"  border={border}> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *border.color*<br/><br/>`<SparklineComponent  id='sparkline'  border: }color:'green'} }></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Series border width| **Property:** *border.width*<br/><br/> `var border = {width:2};`<br/>`<EJ.Sparkline id="sparkline"  border={border}> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *border.width*<br/><br/> `<SparklineComponent  id='sparkline' border= }width:2} }></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Series palette| **Property:** *palette*<br/><br/> `<EJ.Sparkline id="sparkline"  palettes={palettes}> </EJ.Sparkline>, document.getElementById('sparkline')`<br/><br/>`var palettes = { "red", "green", "orange", "blue" };` |**Property:** *palette*<br/><br/> `<SparklineComponent  id='sparkline' palette=''></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Theme| **Property:** *theme*<br/><br/> `<EJ.Sparkline id="sparkline"  theme="flatdark"> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *theme*<br/><br/> `<SparklineComponent  id='sparkline' theme='flatdark'></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Width| **Property:** *size.width*<br/><br/> `var size = { width:200};`<br/>`<EJ.Sparkline id="sparkline"  size={size}> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *width*<br/><br/> `<SparklineComponent  id='sparkline' size=} width: '300px' }></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Height| **Property:** *size.height*<br/><br/> `var size = { height:200};`<br/>`<EJ.Sparkline id="sparkline"  size={size}> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *height*<br/><br/> `<SparklineComponent  id='sparkline' size=} height:'300px' }></SparklineComponent >, document.getElementById('sparkline');`|

## Tooltip

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Show tooltip| **Property:** *tooltip.visible*<br/><br/> `var tooltip = { visible:true};`<br/>`<EJ.Sparkline id="sparkline"  tooltip={tooltip}> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *tooltipSettings.visible*<br/><br/> `<SparklineComponent  id='sparkline' tooltipSettings=} visible:true }>  <Inject services={[SparklineTooltip]} /> </SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Background| **Property:** *tooltip.fill*<br/><br/> `var tooltip = { fill:"green"};`<br/>`<EJ.Sparkline id="sparkline"  tooltip={tooltip}> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *tooltipSettings.fill*<br/><br/> `<SparklineComponent  id='sparkline' tooltipSettings=} fill:'green' }> <Inject services={[SparklineTooltip]} /> </SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Format| Not applicable |**Property:** *tooltipSettings.format*<br/><br/> `<SparklineComponent  id='sparkline' tooltipSettings=} format:'${x} : ${yval}' }> <Inject services={[SparklineTooltip]} /> </SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Template| **Property:** *tooltip.template*<br/><br/> `var tooltip = { template:'item'};`<br/>`<EJ.Sparkline id="sparkline"  tooltip={tooltip}> </EJ.Sparkline>, document.getElementById('sparkline')`<br/> `<div id="item"> //.. </div>` <br/> |**Property:** *tooltipSettings.template*<br/><br/> `<SparklineComponent  id='sparkline' tooltipSettings=} template:'<div> //... </div>' }> <Inject services={[SparklineTooltip]} /> </SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Font color| **Property:** *tooltip.font.color*<br/><br/> `var tooltip = { font:{ color:"green"};`<br/>`<EJ.Sparkline id="sparkline"  tooltip={tooltip}> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *tooltipSettings.textStyle.color*<br/><br/> `<SparklineComponent  id='sparkline' tooltipSettings=} textStyle:{color:'green'} }> <Inject services={[SparklineTooltip]} /> </SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Font opacity| **Property:** *tooltip.font.opacity*<br/><br/> `var tooltip = { font:{ opacity:0.5};`<br/>`<EJ.Sparkline id="sparkline"  tooltip={tooltip}> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *tooltipSettings.textStyle.opacity*<br/><br/> `<SparklineComponent  id='sparkline' tooltipSettings=} textStyle:{opacity:0.5} }> <Inject services={[SparklineTooltip]} /> </SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Font size| **Property:** *tooltip.font.size*<br/><br/> `var tooltip = { font:{ size:"10px"};`<br/>`<EJ.Sparkline id="sparkline"  tooltip={tooltip}> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *tooltipSettings.textStyle.size*<br/><br/> `<SparklineComponent  id='sparkline' tooltipSettings=} textStyle:{size:'12px'} }> <Inject services={[SparklineTooltip]} /> </SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Font family| **Property:** *tooltip.font.fontFamily*<br/><br/> `var tooltip = { font:{ fontFamily:"Arial"};`<br/>`<EJ.Sparkline id="sparkline"  tooltip={tooltip}> </EJ.Sparkline>, document.getElementById('sparkline')`|**Property:** *tooltipSettings.textStyle.fontFamily*<br/><br/> `<SparklineComponent  id='sparkline' tooltipSettings=} textStyle:{fontFamily:'Arial'} }> <Inject services={[SparklineTooltip]} /> </SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Font style| **Property:** *tooltip.font.fontStyle*<br/><br/> `var tooltip = { font:{ fontStyle:"Normal"};`<br/>`<EJ.Sparkline id="sparkline"  tooltip={tooltip}> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *tooltipSettings.textStyle.fontStyle*<br/><br/> `<SparklineComponent  id='sparkline' tooltipSettings=} textStyle:{fontStyle:'Normal'} }> <Inject services={[SparklineTooltip]} /> </SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Font weight| **Property:** *tooltip.font.fontWeight*<br/><br/> `var tooltip = { font:{ fontWeight:"Bold"};`<br/>`<EJ.Sparkline id="sparkline"  tooltip={tooltip}> </EJ.Sparkline>, document.getElementById('sparkline')` |**Property:** *tooltipSettings.textStyle.fontWeight*<br/><br/> `<SparklineComponent  id='sparkline' tooltipSettings=} textStyle:{fontWeight:'Bold'} }> <Inject services={[SparklineTooltip]} /> </SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Enable track line| Not applicable |**Property:** *tooltipSettings.trackLineSettings.visible*<br/><br/> `<SparklineComponent  id='sparkline' size=} height:'300px' }></SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|`<SparklineComponent  id='sparkline' tooltipSettings=} trackLineSettings:{visible:true} }> <Inject services={[SparklineTooltip]} /> </SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|
|Track line width| Not applicable |**Property:** *tooltipSettings.trackLineSettings.width*<br/><br/> `<SparklineComponent  id='sparkline' tooltipSettings=} trackLineSettings:{width:2} }> <Inject services={[SparklineTooltip]} /> </SparklineComponent >,`<br><br/>`document.getElementById('sparkline');`|

## Rendering

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Enable canvas rendering| **Property:** *enableCanvasRendering*<br/><br/> `<EJ.Sparkline id="sparkline"  enableCanvasRendering={true}> </EJ.Sparkline>, document.getElementById('sparkline')` | Not applicable |

## Localization

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Localization| **Property:** *locale*<br/><br/> `<EJ.Sparkline id="sparkline"  locale="en-US"> </EJ.Sparkline>, document.getElementById('sparkline')` | **Property:** *type*<br/><br/> `<SparklineComponent  id='sparkline' locale='en-US'> </SparklineComponent >,`<br><br/>`document.getElementById('sparkline');` |

## Methods

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Dynamically updating sparkline| **Method:** *redraw*<br/><br/> `<EJ.Sparkline id="sparkline"> </EJ.Sparkline>, document.getElementById('sparkline')` <br/> `function sparkMethod() { var sparObj = $("#sparkline").data("ejSparkline"); sparkObj.redraw(); } `  | **Method:** *refresh*<br/><br/> `export class Spark extends SampleBase<{}, {}> { `<br/>`private sparkInstance: SparklineComponent; `<br/>` private change(): void{`<br/>`this.sparkInstance.refresh();`<br/>`}` |

## Events

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
|Load| **Event:** *load*<br/><br/> `<EJ.Sparkline id="sparkline" load={load}></EJ.Sparkline>,`<br/>`document.getElementById('maps')`<br/>`function load(args) {}`  | **Event:** *load*<br/><br/> `<SparklineComponent id='sparkline'  load={this.load.bind(this)}></SparklineComponent>,`<br/>`document.getElementById('sparkline');`<br/>` public  load(args: ILoadEventArgs): void {}` |
|Load completed| **Event:** *loaded*<br/><br/> `<EJ.Sparkline id="sparkline" loaded={loaded}></EJ.Sparkline>,`<br/>`document.getElementById('maps')`<br/>`function loaded(args) {}` | **Event:** *loaded*<br/><br/> `<SparklineComponent id='sparkline'  loaded={this.loaded.bind(this)}></SparklineComponent>,`<br/>`document.getElementById('sparkline');`<br/>` public  loaded(args: ILoadedEventArgs): void {}` |
|Initialize tooltip| **Event:** *tooltipInitialize*<br/><br/> `<EJ.Sparkline id="sparkline" tooltipInitialize={tooltipInitialize}></EJ.Sparkline>,`<br/>`document.getElementById('maps')`<br/>`function tooltipInitialize(args) {}` | **Event:** *tooltipInitialize*<br/><br/> `<SparklineComponent id='sparkline'  tooltipInitialize={this.tooltipInitialize.bind(this)}></SparklineComponent>,`<br/>`document.getElementById('sparkline');`<br/>` public  tooltipInitialize(args: ITooltipInitializeEventArgs): void {}` |
|Series rendering| **Event:** *seriesRendering*<br/><br/> `<EJ.Sparkline id="sparkline" seriesRendering={seriesRendering}></EJ.Sparkline>,`<br/>`document.getElementById('maps')`<br/>`function seriesRendering(args) {}` | **Event:** *seriesRendering*<br/><br/> `<SparklineComponent id='sparkline'  seriesRendering={this.seriesRendering.bind(this)}></SparklineComponent>,`<br/>`document.getElementById('sparkline');`<br/>` public  seriesRendering(args: ISeriesRenderingEventArgs): void {}` |
|Region mouse move| **Event:** *pointRegionMouseMove*<br/><br/> `<EJ.Sparkline id="sparkline" pointRegionMouseMove={pointRegionMouseMove}></EJ.Sparkline>,`<br/>`document.getElementById('maps')`<br/>`function pointRegionMouseMove(args) {}` | **Event:** *pointRegionMouseMove*<br/><br/> `<SparklineComponent id='sparkline'  pointRegionMouseMove={this.pointRegionMouseMove.bind(this)}></SparklineComponent>,`<br/>`document.getElementById('sparkline');`<br/>` public  pointRegionMouseMove(args: IPointRegionMouseMoveEventArgs): void {}` |
|Region click| **Event:** *pointRegionMouseClick*<br/><br/> `<EJ.Sparkline id="sparkline" pointRegionMouseClick={pointRegionMouseClick}></EJ.Sparkline>,`<br/>`document.getElementById('maps')`<br/>`function pointRegionMouseClick(args) {}` | **Event:** *pointRegionMouseClick*<br/><br/> `<SparklineComponent id='sparkline'  pointRegionMouseClick={this.pointRegionMouseClick.bind(this)}></SparklineComponent>,`<br/>`document.getElementById('sparkline');`<br/>` public  pointRegionMouseClick(args: IPointRegionMouseClickEventArgs): void {}` |
|Mouse move| **Event:** *sparklineMouseMove*<br/><br/> `<EJ.Sparkline id="sparkline" sparklineMouseMove={sparklineMouseMove}></EJ.Sparkline>,`<br/>`document.getElementById('maps')`<br/>`function sparklineMouseMove(args) {}` | **Event:** *sparklineMouseMove*<br/><br/> `<SparklineComponent id='sparkline'  sparklineMouseMove={this.sparklineMouseMove.bind(this)}></SparklineComponent>,`<br/>`document.getElementById('sparkline');`<br/>` public  sparklineMouseMove(args: ISparklineMouseMoveEventArgs): void {}` |
|Mouse leave| **Event:** *sparklineMouseLeave*<br/><br/> `<EJ.Sparkline id="sparkline" sparklineMouseLeave={sparklineMouseLeave}></EJ.Sparkline>,`<br/>`document.getElementById('maps')`<br/>`function sparklineMouseLeave(args) {}` | Not applicable |
|Click| **Event:** *click*<br/><br/> `<EJ.Sparkline id="sparkline" click={click}></EJ.Sparkline>,`<br/>`document.getElementById('maps')`<br/>`function click(args) {}` | **Event:** *sparklineMouseClick*<br/><br/> `<SparklineComponent id='sparkline'  sparklineMouseClick={this.sparklineMouseClick.bind(this)}></SparklineComponent>,`<br/>`document.getElementById('sparkline');`<br/>` public  sparklineMouseClick(args: ISparklineMouseClickEventArgs): void {}` |
|doubleClick| **Event:** *doubleClick*<br/><br/>`<EJ.Sparkline id="sparkline" doubleClick={doubleClick}></EJ.Sparkline>,`<br/>`document.getElementById('maps')`<br/>`function doubleClick(args) {}` | Not applicable |
|rightClick| **Event:** *rightClick*<br/><br/> `<EJ.Sparkline id="sparkline" rightClick={rightClick}></EJ.Sparkline>,`<br/>`document.getElementById('maps')`<br/>`function rightClick(args) {}` | Not applicable |
|axisRendering| Not applicable | **Event:** *axisRendering*<br/><br/> `<SparklineComponent id='sparkline'  axisRendering={this.axisRendering.bind(this)}></SparklineComponent>,`<br/>`document.getElementById('sparkline');`<br/>` public  axisRendering(args: IAxisRenderingEventArgs): void {}` |
|dataLabelRendering| Not applicable | **Event:** *dataLabelRendering*<br/><br/> `<SparklineComponent id='sparkline'  dataLabelRendering={this.dataLabelRendering.bind(this)}></SparklineComponent>,`<br/>`document.getElementById('sparkline');`<br/>` public  dataLabelRendering(args: IDataLabelRenderingEventArgs): void {}` |
|markerRendering| Not applicable | **Event:** *markerRendering*<br/><br/> `<SparklineComponent id='sparkline'  markerRendering={this.markerRendering.bind(this)}></SparklineComponent>,`<br/>`document.getElementById('sparkline');`<br/>` public  markerRendering(args: IMarkerRenderingEventArgs): void {}` |
|pointRendering| Not applicable | **Event:** *pointRendering*<br/><br/> `<SparklineComponent id='sparkline'  pointRendering={this.pointRendering.bind(this)}></SparklineComponent>,`<br/>`document.getElementById('sparkline');`<br/>` public  pointRendering(args: IPointRenderingEventArgs): void {}` |
|resize| Not applicable | **Event:** *resize*<br/><br/> `<SparklineComponent id='sparkline'  resize={this.resize.bind(this)}></SparklineComponent>,`<br/>`document.getElementById('sparkline');`<br/>` public  resize(args: IResizeEventArgs): void {}` |

{% endraw %}