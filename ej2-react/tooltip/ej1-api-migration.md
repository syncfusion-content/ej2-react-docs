---
layout: post
title: Ej1 api migration in React Tooltip component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion React Tooltip component of Syncfusion Essential JS 2 and more.
control: Ej1 api migration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in React Tooltip component

This article describes the API migration process of Tooltip component from Essential JS 1 to Essential JS 2.

{% raw %}

| Behavior |API in Essential JS 1  | API in Essential JS 2 |
|--|--|--|
| Position | **Property:**  _position_ <br/><br/> `public  position  = { target: { horizontal:  "center", vertical:  "top" },` <br/> `stem: { horizontal:  "center", vertical:  "bottom" } };` <br/><br/>  `<EJ.Tooltip id='tooltip' position={this.position}>` <br/> `</EJ.Tooltip>` <br/>  | **Property:**  _position_ <br/><br/> `<TooltipComponent position='TopCenter'>`<br/>`</TooltipComponent>`|
| Animation | **Property:**  _animation_ <br/><br/> `public  animation  = { animation :{ effect :  "slide", speed :  1000} };`  <br/><br/> `<EJ.Tooltip id='tooltip' animation={this.animation}>` <br/> `</EJ.Tooltip>` <br/> | **Property:**  _animation_  <br/> <br/> `public animation = { open: { effect: ‘FadeIn’,` <br/> `duration: 150, delay: 0 },` <br/> `close: { effect: ‘FadeOut’,` <br/> `duration: 150, delay: 0 } };` <br/><br/> `<TooltipComponent position='TopCenter'` <br/> `animation={this.animation}>` <br/> `</TooltipComponent>` <br/>|
| Close Time Out | **Property:**  _autoCloseTimeout_ <br/><br/> `<EJ.Tooltip id='tooltip' autoCloseTimeout={5000} >` <br/> `</EJ.Tooltip>` | **Property:**  _closeDelay, openDelay_ <br/><br/> `<TooltipComponent position='TopCenter'` <br/> `closeDelay={500} >` <br/> `</TooltipComponent>` <br/>  |
| Sticky Mode | **Property :**  _closeMode_ <br/><br/> `<EJ.Tooltip id='tooltip' closeMode="sticky">` <br/> `</EJ.Tooltip>` <br/> | **Property:**  _isSticky_ <br/><br/> `<TooltipComponent position='TopCenter'` <br/> `isSticky={true}>` <br/> `</TooltipComponent>` <br/> |
| Offset from target | **Property :**  _tip.adjust.xValue/ tip.adjust.yValue_ <br/><br/> `public tip = { size: { width: 25, height: 12 },` <br/> `adjust: { xValue: 5, yValue: 6 } };`  <br/><br/> `<EJ.Tooltip id='tooltip' tip={this.tip}>` <br/> `</EJ.Tooltip>` <br/>  | **Property:**  _offSetX/ offSetY_ <br/><br/> `<TooltipComponent position='TopCenter'` <br/> `offsetX={10} offsetY={10}>` <br/> `</TooltipComponent>` <br/> |
| Mouse trail on target |  **Not Applicable**  | **Property:**  _mouseTrail_  <br/><br/> `<TooltipComponent mouseTrail={true}>` <br/> `</TooltipComponent>` |
| Open mode of Tooltip | **Not Applicable** | **Property:**  _opensOn_ <br/><br/> `<TooltipComponent opensOn='Click'>` <br/>  `</TooltipComponent>` <br/>|
| Enable disable the tip of Tooltip | **Not Applicable**  | **Property:**  _showTipPointer_ <br/><br/> `<TooltipComponent showTipPointer={true}>` <br/> `</TooltipComponent>` <br/> |
| Hide | **Method:**  _hide()_ <br/><br/> `<EJ.Tooltip id='tooltip' content="Tooltip Content">` <br/> `</EJ.Tooltip>` <br/><br/>  `let toolTipObj = ${"$tooltip"}.ejTooltip("instance");` <br/><br/>  `toolTipObj.hide();` <br/> | **Method:**  _close()_ <br/><br/> `<TooltipComponent cssClass='e-tooltip-css'` <br/> `opensOn='Custom'`  <br/> `content='Tooltip from custom mode'>` <br/> `</TooltipComponent>` <br/><br/> `toolTipObj.close();` <br/> |
| Show | **Method:**  _show()_ <br/><br/> `<EJ.Tooltip id='tooltip' content="Tooltip Content">` <br/> `</EJ.Tooltip>` <br/><br/>  `let toolTipObj = ${"$tooltip"}.ejTooltip("instance");` <br/><br/>  `toolTipObj.show();` <br/>  | **Method:**  _open()_ <br/><br/> `<TooltipComponent cssClass='e-tooltip-css'` <br/> `opensOn='Custom'`  <br/> `content='Tooltip from custom mode'>` <br/> `</TooltipComponent>` <br/><br/> `toolTipObj.open();` <br/>  |
| Enable | **Method:**  _enable()_ <br/><br/> `<EJ.Tooltip id='tooltip' content="Tooltip Content">` <br/> `</EJ.Tooltip>` <br/><br/>  `let toolTipObj = ${"$tooltip"}.ejTooltip("instance");` <br/><br/>  `toolTipObj.enable();` <br/>  | **Method:**  _destroy()_ <br/><br/> `<TooltipComponent cssClass='e-tooltip-css'` <br/>  `content='Tooltip from custom mode'>` <br/> `</TooltipComponent>` <br/><br/> `toolTipObj.destroy();` <br/>|
| Close | **Event:**  _close_ <br/><br/> `public close (args: Event): void { }` <br/><br/> `<EJ.Tooltip id='tooltip' close={this.close};`  <br/> `content="Tooltip Content">` <br/> `</EJ.Tooltip>` <br/>  | **Event:**  _afterClose_ <br/><br/> `<TooltipComponent afterClose={this.afterClose}>` <br/> `</TooltipComponent>` <br/><br/> `public afterClose(args: Event): void { }` <br/> |
| Open | **Event:**  _open_ <br/><br/> `public open (args: Event): void { };` <br/><br/> `<EJ.Tooltip id='tooltip' open={this.open}`  <br/> `content="Tooltip Content">` <br/> `</EJ.Tooltip>` <br/>   | **Event:**  _afterOpen_ <br/><br/> `<TooltipComponent afterOpen={this.afterOpen}>` <br/> `</TooltipComponent>` <br/><br/> `public afterOpen(args: Event): void { }` <br/>  |
| Before Collision | **Not Applicable** | **Event:**  _beforeCollision_ <br/><br/> `<TooltipComponent beforeCollision={this.beforeCollision}>` <br/> `</TooltipComponent>` <br/><br/> `public beforeCollision(args: Event): void { }` <br/> |
| Tracking | **Event:**  _tracking_ <br/><br/> `public tracking (args: Event): void { };` <br/><br/> `<EJ.Tooltip id='tooltip' tracking={this.tracking}`  <br/> `content="Tooltip Content" associate="mouse">` <br/> `</EJ.Tooltip>` <br/>    | **Method:**  _open(),close(),refresh()_ <br/><br/> [Sample](https://ej2.syncfusion.com/react/demos/#/material/tooltip/smartposition) |

{% endraw %}