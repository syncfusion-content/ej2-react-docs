---
layout: post
title: Ej1 api migration in React Range Slider component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion React Range Slider component of Syncfusion Essential JS 2 and more.
control: Ej1 api migration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---


# Ej1 api migration in React Range Slider component

This article describes the API migration process of the Slider component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

{% raw %}

| Behavior | API in Essential<sup style="font-size:70%">&reg;</sup> JS 1 | API in Essential<sup style="font-size:70%">&reg;</sup> JS 2 |
| --- | --- | --- |
| Max value | **Property:**  *maxValue*  <br  /> `<EJ.Slider maxValue={60} />` | **Property:**  *max*  <br  /> `<SliderComponent id='slider' max={100} />` |
| Min value | **Property:**  *minValue*  <br  /> `<EJ.Slider minValue={60} />`| **Property:**  *min*  <br  />`<SliderComponent id='slider' min={100} />` |
| Step | **Property:**  *incrementStep, largeStep, smallStep, showSmallTicks*  <br  /> `<EJ.Slider incrementStep={20} smallStep={5} largeStep={40} showSmallTicks={true} />`| **Property:**  *ticks*  <br  /> `public ticks = { placement: ‘After’, largeStep: 20, smallStep: 10, showSmallTicks: true };` <br/><br/> `<SliderComponent id='slider' ticks={this.ticks} />`|
| Type | **Property:**  *sliderType*  <br  /> `<SliderComponent id='slider' value={30} sliderType="minrange" />` | **Property:**  *type*  <br  /> `<SliderComponent id='slider' type='Range' />` |
| Tooltip | **Property:**  *showTooltip*  <br  /> `<SliderComponent id='slider' value={30} showTooltip={true} />`| **Property:**  *tooltip*  <br  /> `public tooltip = { placement: ‘Before’, isVisible: true, showOn: ‘Always’ };` <br/><br/> `<SliderComponent id='slider' tooltip={this.tooltip} />` |
| RTL | **Property:**  *enableRTL*  <br  /> `<SliderComponent id='slider' value={30} enableRTL={true} />` | **Property:**  *enableRtl*  <br  /> `<SliderComponent id='slider' enableRtl={false} />` |
| Custom values | **Not Applicable** | **Property:**  *customValues*  <br  /> `public customValues = [‘Mon’, ‘Tue’, ‘Wed’];` <br/><br/> `<SliderComponent id='slider' customValues={this.customValues} />` |
| Limit the Slider movement | **Not Applicable** | **Property:**  *limits*  <br  /> `public limits = { enabled: true, minStart: 10, minEnd: 40 };` <br/><br/> `<SliderComponent id='slider' type='MinRange' limits={this.limits} />`|
| Disable | **Method:**  *disable*  <br  /> `<SliderComponent id='slider' value={30}  />` <br/> <br/> `public sliderObj = ${"#slider"}.ejSlider("instance");` <br/> `sliderObj.disable();` | **Property:**  *enabled*  <br  /> `<SliderComponent id='slider' enable={false} value={50} />` |
| Enable | **Method:**  *enable*  <br  /> `<SliderComponent id='slider' value={30}  />` <br/> <br/> `public sliderObj = ${"#slider"}.ejSlider("instance");` <br/> `sliderObj.enable();` | **Property:**  *enabled*  <br  /> `<SliderComponent id='slider' enable={true} value={50} />`|
| Set Value | **Method:**  *setValue(value ,[enableAnimation])*  <br  /> `<SliderComponent id='slider' value={30}  />` <br/> <br/> `public sliderObj = ${"#slider"}.ejSlider("instance");` <br/> `sliderObj.setValue(50);` | **Property:**  *value*  <br  /> `<SliderComponent id='slider' value={this.state.value} />` <br/><br/> `this.setState({value: 100});` |
| Get Value | **Method:**  *getValue()*  <br  /> `<SliderComponent id='slider' value={30}  />` <br/> <br/> `public sliderObj = ${"#slider"}.ejSlider("instance");` <br/> `sliderObj.getValue();` | **Property:**  *value*  <br  /> `<SliderComponent id='slider' value={30} />` <br/> <br/> `public sliderValue = this.sliderObj.value;` |
| Destroy | **Not Applicable** | **Method:**  *destroy()*  <br  /> `<SliderComponent id='slider' value={30} />` <br/> <br/> `public sliderValue = this.sliderObj.destroy();` |
| Change | **Event:**  *change*  <br  /> `public change(args) { }` <br/>`<SliderComponent id='slider' value={30} change={this.change} />` | **Event:**  *changed*  <br  /> `public changed(args): void { };` <br/> <br/> `<SliderComponent id='slider' value={30} changed={this.changed} />`|
| Create | **Event:**  *create*  <br  /> `public create(args) { }` <br/>`<SliderComponent id='slider' value={30} create={this.create} />` | **Event:**  *created*  <br  /> `public created(args): void { };` <br/> <br/> `<SliderComponent id='slider' value={30} created={this.created} />`|
| Slide | **Event:**  *slide*  <br  /> `public slide(args) { }` <br/>`<SliderComponent id='slider' value={30} slide={this.slide} />` | **Event:**  *change*  <br  /> `public change(args): void { };` <br/> <br/> `<SliderComponent id='slider' value={30} change={this.change} />`|
| Start | **Event:**  *start*  <br  /> `public start(args) { }` <br/>`<SliderComponent id='slider' value={30} start={this.start} />` | **Event:**  *created*  <br  />  `public created(args): void { };` <br/> <br/> `<SliderComponent id='slider' value={30} created={this.created} />` |
| Stop | **Event:**  *stop*  <br  /> `public stop(args) { }` <br/>`<SliderComponent id='slider' value={30} stop={this.stop} />`| **Event:**  *changed*  <br  /> `public changed(args): void { };` <br/> <br/> `<SliderComponent id='slider' value={30} changed={this.changed} />`<br  />|
| Rendered Ticks | **Not Applicable** | **Event:**  *renderedTicks*  <br  /> `public renderedTicks(args): void { };` <br/> <br/> `<SliderComponent id='slider' value={30} renderedTicks={this.renderedTicks} />` |

{% endraw %}