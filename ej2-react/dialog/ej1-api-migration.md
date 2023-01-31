---
layout: post
title: Ej1 api migration in React Dialog component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion React Dialog component of Syncfusion Essential JS 2 and more.
control: Ej1 api migration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in React Dialog component

This article describes the API migration process of Dialog component from Essential JS 1 to Essential JS 2.

## Accessibility and Localization

{% raw %}

<!-- markdownlint-disable MD033 -->
| **Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Keyboard Navigation | **Property** : allowKeyboardNavigation<br/> <br/>`<EJ.Dialog allowKeyboardNavigation={true}></EJ.Dialog>`  | No separate Property for enable/disable keyboard navigation.  Its enabled by default. |
| Localization | **Property** : locale<br/> <br/>`<EJ.Dialog locale="es-ES"></EJ.Dialog>` | **Property** : locale<br/> <br/>`<DialogComponent locale="es-ES" />`  |
| Right to left | **Property:** enableRTL<br/> <br/>`<EJ.Dialog enableRTL={true}></EJ.Dialog>` | **Property:** enableRTL<br/> <br/>`<DialogComponent enableRtl={true} />`  |

## Header

<!-- markdownlint-disable MD033 -->
| **Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Header Content | **Property** : title<br/> <br/>`<EJ.Dialog title="EJ1 Dialog header"></EJ.Dialog>`<br/>   **Method** : setTitle<br/> $('#dialog').ejDialog('setTitle', 'EJ1 Dialog Header');   | **Property** : header<br/> <br/>`<DialogComponent header='EJ2 Dialog' />`  |
| close button | **Property** : actionButtons<br/> <br/>`<EJ.Dialog actionButtons={this.actionbuttons}></EJ.Dialog>`<br/><br/>`actionbuttons: any; constructor() { this.actionbuttons = ['close'];}`<br/> | **Property** : showCloseIcon<br/> <br/>`<DialogComponent showCloseIcon={true} />` |
| Event triggers when click on action buttons | **Event:** actionButtonClick<br/> <br/>`<EJ.Dialog actionButtons={this.actionbuttons}actionButtonClick={this.buttonAction}></EJ.Dialog>`<br/><br/>`actionbuttons: any; constructor() { this.actionbuttons = ['close'];, buttonAction(event) {} }`<br/> | Not Applicable |
| Minimize | **Property** : actionButtons<br/> <br/>`<EJ.Dialog actionButtons={this.actionbuttons}></EJ.Dialog>`<br/><br/>`actionbuttons: any; constructor() { this.actionbuttons = ['minimize'];}`<br/> | Not Applicable |
| Maximize | **Property** : actionButtons<br/> <br/>`<EJ.Dialog actionButtons={this.actionbuttons}></EJ.Dialog>`<br/><br/>`actionbuttons: any; constructor() { this.actionbuttons = ['maximize'];}`<br/>  | Not Applicable |
| Collapse /Expand | **Property** : actionButtons <br/>  **Method** : collapse(), expand ()<br/> <br/>`<EJ.Dialog actionButtons={this.actionbuttons}></EJ.Dialog>`<br/><br/>`actionbuttons: any; constructor() { this.actionbuttons = ['collapsible'];}`<br/>$('#dialog').ejDialog('collapse'); <br/>$('#dialog').ejDialog('expand')  | Not Applicable |
| Event triggers when expanding the collapsed dialog | **Event:** expand<br/> <br/>`<EJ.Dialog id="dialog" expand={this.expandAction}></EJ.Dialog>`<br/><br/>`expandAction(event) {})`<br/>| Not Applicable |
| Event triggers when collapsing the expanded dialog | **Event:** collapse<br/> <br/>`<EJ.Dialog id="dialog" collapse={this.collapseAction}></EJ.Dialog>`<br/><br/>`collapseAction(event) {})`<br/> | Not Applicable |
| Pin | **Property** : actionButtons<br/> <br/>`<EJ.Dialog actionButtons={this.actionbuttons}></EJ.Dialog>`<br/><br/>`actionbuttons: any; constructor() { this.actionbuttons = ['pin'];}`<br/> | Not Applicable |
| Header visibility | **Property:** showHeader<br/> <br/>`<EJ.Dialog showHeader={true}></EJ.Dialog>` | Not Applicable |
| Close on escape key press | **Property** : closeOnEscape<br/> <br/>`<EJ.Dialog closeOnEscape={true}></EJ.Dialog>`| **Property** : closeOnEscape<br/> <br/>`<DialogComponent closeOnEscape={true} />` |

## Footer

<!-- markdownlint-disable MD033 -->
| **Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Footer Content | **Property** :footerTemplateId<br/> <br/>`<EJ.Dialog footerTemplateId='sample'></EJ.Dialog>`| **Property:** footerTemplate<br/> <br/>`<DialogComponent footerTemplate= {this.footerTemplate} />`<br/><br/>`footerTemplate { <button>Submit</button> }` |
| Footer action buttons | Not applicable | **Property** : buttons<br/> <br/>`<DialogComponent buttons={this.dialogbuttons} />`<br/><br/>`constructor(props: {}) { this.dialogbuttons = [{ click: this.dlgButtonClick, buttonModel: {content: 'OK',  isPrimary: true} }]`<br/> |
| Footer visibility | **Property** : showFooter<br/> <br/>`<EJ.Dialog showFooter={true}></EJ.Dialog>` | Not Applicable |

## Content

<!-- markdownlint-disable MD033 -->
| **Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Dialog content | **Method** : setContent<br/> <br/>`<EJ.Dialog id="basicDialog"></EJ.Dialog>`<br/> $('#basicDialog').ejDialog('setContent', 'Dialog Content') | **Property** : content<br/> <br/>`<DialogComponent content= 'Dialog content' />` |
| Loading content using AJAX request   | **Property** : contentType, contentUrl<br/> <br/>`<EJ.Dialog contentType="ajax" contentType=''></EJ.Dialog>` | Not Applicable |
| Event triggers after the dialog content loaded in DOM | **Event:** contentLoad<br/> <br/>`<EJ.Dialog contentLoad={this.onLoad}></EJ.Dialog>`<br/><br/>`onLoad(event) {}`<br/> | Not Applicable |
| Event trigger when fails to load ajax content | **Event:** ajaxError<br/> <br/>`<EJ.Dialog ajaxError={this.onAjaxError}></EJ.Dialog>`<br/><br/>`onAjaxError(event) {}`<br/> | Not Applicable |
| Event trigger when load ajax content successfully | **Event:** ajaxSuccess<br/> <br/>`<EJ.Dialog ajaxSuccess={this.onAjaxSuccess}></EJ.Dialog>`<br/><br/>`onAjaxSuccess(event) {}`<br/> | Not Applicable |

## Animation

<!-- markdownlint-disable MD033 -->
| **Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Enabling Animation | **Property** : enableAnimation<br/> <br/>`<EJ.Dialog enableAnimation={true}></EJ.Dialog>`| Not Applicable |
| Animation effects | **Property** : animation.show.effect<br/> <br/>`<EJ.Dialog animation={this.animation}></EJ.Dialog>`<br/><br/>`animation: object = { show: { effect: 'slide'} };`<br/> | **Property** : animationSettings.effect<br/><br/> `<DialogComponent animation={this.animationSettings} />`<br/><br/>`private animationSettings: Object; constructor(props: {}) { this.animationSettings = { effect: 'Zoom' } }`<br/> |
| Animation duration | **Property:** animation.show.duration<br/> <br/>`<EJ.Dialog animation={this.animation}></EJ.Dialog>`<br/><br/>`animation: object = { show: { effect: 'slide', duration: 500 } };`<br/> | **Property** : animationSettings.duration<br/> <br/> `<DialogComponent animation={this.animationSettings} />`<br/><br/>`private animationSettings: Object; constructor(props: {}) { this.animationSettings = { effect: 'Zoom', duration: 500 } }`<br/> |
| Animation delay | Not applicable | **Property:** animationSettings.delay<br/> <br/> `<DialogComponent animation={this.animationSettings} />`<br/><br/>`private animationSettings: Object; constructor(props: {}) { this.animationSettings = { effect: 'Zoom', duration: 500, delay: 500 } }`<br/> |

## Draggable and resizing

<!-- markdownlint-disable MD033 -->
| **Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Draggable dialog | **Property** : allowDraggable<br/> <br/>`<EJ.Dialog allowDraggable={true}></EJ.Dialog>` | **Property** : allowDragging<br/> <br/>`<DialogComponent allowDragging= {true} />` |
| Event triggers when the user drags the dialog | **Event:** drag<br/> <br/>`<EJ.Dialog drag={this.onDrag }></EJ.Dialog>`<br/><br/>`onDrag(event) {}`<br/> | **Event:** drag<br/> <br/>`<DialogComponent drag= {this.onDrag} />`<br/><br/>`private onDrag() {}`<br/> |
| Event triggers when the start to drag the dialog | **Event:** dragStart <br/> <br/>`<EJ.Dialog dragStart={this.onDragStart }></EJ.Dialog>`<br/><br/>`onDragStart(event) {}`<br/> | **Event:** dragStart <br/><br/>`<DialogComponent dragStart= {this.onDragStart} />`<br/><br/>`private onDragStart() {}`<br/> |
| Event triggers when the stops to drag the dialog | **Event:** dragStop<br/> <br/>`<EJ.Dialog dragStop={this.onDragStop }></EJ.Dialog>`<br/><br/>`onDragStop(event) {}`<br/> | **Event:** dragStop<br/><br/>`<DialogComponent dragStop= {this.onDragStop} />`<br/><br/>`private onDragStop() {}` <br/> |
| Resizing dialog | **Property** : enableResize<br/> <br/>`<EJ.Dialog enableResize={true}></EJ.Dialog>` |  Not applicable   |
| Event triggers when resizing the dialog | **Event:** resize <br/> <br/>`<EJ.Dialog resize={this.onReSize }></EJ.Dialog>`<br/><br/>`onReSize(event) {}`<br/> |  Not Applicable |
| Event triggers when starts to resizing the dialog | **Event:** resizeStart<br/><br/>`<EJ.Dialog resizeStart={this.onResizeStart }></EJ.Dialog>`<br/><br/>`onResizeStart(event) {}`<br/> | Not Applicable |
| Event triggers when the stops to resizing the dialog | **Event:** resizeStop<br/><br/>`<EJ.Dialog resizeStop={this.onResizeStop }></EJ.Dialog>`<br/><br/>`onResizeStop(event) {}`<br/> | Not Applicable |

## Target

<!-- markdownlint-disable MD033 -->
| **Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Target element to append dialog in document | **Property** : target <br/> <br/>`<EJ.Dialog target='#dialogTarget'></EJ.Dialog>` | **Property**: target<br/> <br/>`<DialogComponent target='#dialogTarget' />` |
| Element for draggable area | **Property** : containment<br/> <br/>`<EJ.Dialog containment='#dragArea'></EJ.Dialog>` | Not applicable |

## Position

<!-- markdownlint-disable MD033 -->
| **Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Customizing dialog position using X, Y coordinate values | **Property** : position<br/> <br/>`<EJ.Dialog position={this.dialogPosition}></EJ.Dialog>`<br/><br/>`dialogPosition: any = { position: { X: 300, Y: 100 } }`<br/>| **Property** : position<br/><br/> `<DialogComponent position={this.dialogPosition} />`<br/><br/>`private dialogPosition: object { position: {X:300, Y:100} }`<br/> |
| positioning dialog using position values | Not Applicable | **Property**: position<br/> <br/> `<DialogComponent position={this.dialogPosition} />`<br/><br/>`private dialogPosition: object { position: {X: 'center', Y: 'center'} }`<br/> |

## Visibility

<!-- markdownlint-disable MD033 -->
| **Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Render dialog in visible/hidden state | **Property:** showOnInit<br/> <br/>`<EJ.Dialog showOnInit={true}></EJ.Dialog>` | **Property:** visible<br/> <br/>`<DialogComponent visible= {this.state.hideDialog} />`<br/><br/>`constructor(props: {}) { this.setState({ hideDialog: false }) };` |

## Dialog Mode

<!-- markdownlint-disable MD033 -->
| **Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Render modal dialog |**Property** : enableModal<br/> <br/>`<EJ.Dialog enableModal={true}></EJ.Dialog>` | **Property** : isModal<br/> <br/> `<DialogComponent isModal= {true} />` |

## Tooltip

<!-- markdownlint-disable MD033 -->
| **Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Sets the tooltip for dialog buttons | **Property** : tooltip<br/><br/> `<EJ.Dialog tooltip={this.tooltip}></EJ.Dialog>`<br/><br/>`tooltip: object { close: 'Exit' }`<br/> | No Separate Property for tooltip. It renders based on locale text. |

## Control State

<!-- markdownlint-disable MD033 -->
| **Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Enable/Disable the control | **Property** : enabled <br/><br/> `<EJ.Dialog enabled={false}></EJ.Dialog>` | Not Applicable |
| Enable/ Disable page scrolling | **Property:** backgroundScroll<br/> <br/>`<EJ.Dialog backgroundScroll={false}></EJ.Dialog>` | No separate Property for disabling page scroll. By default, scrolling prevented for modal dialog  |

## State Maintenance

<!-- markdownlint-disable MD033 -->
| **Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Save the model values in local storage or cookies |**Property** : enablePersistence <br/> <br/>`<EJ.Dialog enablePersistence={true}></EJ.Dialog>` |**Property** : enablePersistence <br/><br/>`<DialogComponent enablePersistence= {true} />` |

## Common

<!-- markdownlint-disable MD033 -->
| **Behavior** | **Property in Essential JS 1** | **Property in Essential JS 2** |
| ------------ | ------------------------- | ------------------------- |
| Adjusting Height | **Property** : height <br/><br/>`<EJ.Dialog height={400}></EJ.Dialog>` | **Property** : height <br/><br/> `<DialogComponent height= '50%' />` |
| Adjusting width | **Property:** width <br/><br/>`<EJ.Dialog width={400}></EJ.Dialog>` |**Property** : width <br/><br/> `<DialogComponent width= '50%' />` |
| Adding custom class | **Property:** cssClass <br/><br/>`<EJ.Dialog cssClass='custom-class'></EJ.Dialog>` | **Property**: cssClass <br/><br/> `<DialogComponent cssClass='custom-class' />` |
| Adding zIndex | **Property:** zIndex <br/><br/> `<EJ.Dialog zIndex={2000}></EJ.Dialog>`| **Property:** zIndex <br/><br/> `<DialogComponent zIndex='2000' />` |
| Maximum height | **Property:** maxHeight  <br/><br/> `<EJ.Dialog maxHeight={600}></EJ.Dialog>` | Not Applicable |
| Maximum width | **Property:** maxWidth <br/><br/> `<EJ.Dialog maxWidth={600}></EJ.Dialog>` | Not Applicable |
| Minimum height | **Property:** minHeight <br/><br/> `<EJ.Dialog minHeight={300}></EJ.Dialog>` | Not Applicable |
| Minimum width | **Property:** minWidth <br/><br/> `<EJ.Dialog minWidth={300}></EJ.Dialog>` | Not Applicable |
| Adding html attributes | **Property:** htmlAttributes <br/><br/> `<EJ.Dialog htmlAttributes={this.htmlAttributes}></EJ.Dialog>`<br/><br/>`htmlAttributes: object { class: 'my-class' }` <br/> | Not Applicable |
| Custom icon in the header | **Property:** faviconCSS <br/><br/> `<EJ.Dialog faviconCSS='custom-icon'></EJ.Dialog>` | Not Applicable |
| Rounded corner appearance | **Property:** showRoundedCorner <br/><br/> `<EJ.Dialog showRoundedCorner={true}></EJ.Dialog>` | Not Applicable |
| Make control flexible for mobile view | **Property:** isResponsive <br/><br/> `<EJ.Dialog isResponsive={true}></EJ.Dialog>` | Not Applicable |
| Close the Dialog | **Method:** close() <br/><br/> `<EJ.Dialog id ='dialog'></EJ.Dialog>` <br/>$('#dialog').ejDialog('close') | **Method** : hide() <br/> <br/>`<DialogComponent id='dialog' ref={dialog => this.dialogInstance = dialog />`<br/><br/>`constructor(props: {}) { this.dialogInstance.hide(); }` <br/> |
| Event triggers before the dialog closes | **Event:** beforeClose <br/> <br/>`<EJ.Dialog beforeClose={this.onBeforeClose}></EJ.Dialog>`<br/><br/>`onBeforeClose (event) {}` <br/> | **Event:** beforeClose <br/> <br/>`<DialogComponent beforeClose= {this.onBeforeClose.bind(this)} />`<br/><br/>`private onBeforeClose() {}`  <br/>|
| Event triggers when the dialog closes | **Event:** close <br/> <br/>`<EJ.Dialog close={this.onClose}></EJ.Dialog>`<br/><br/>`onClose (event) {}` <br/> | **Event:** close <br/><br/>`<DialogComponent close= {this.onClose.bind(this)} />`<br/><br/>`private onClose() {}` <br/> |
| Destroy the control | **Method:** destroy() <br/> <br/> `<EJ.Dialog id ='dialog'></EJ.Dialog>` <br/> $('#dialog').ejDialog('destroy') | **Method:** destroy() <br/> <br/>`<DialogComponent id='dialog' ref={dialog => this.dialogInstance = dialog />`<br/><br/>`constructor(props: {}) { this.dialogInstance.destroy(); }` <br/> |
| Focus the dialog element | **Method:** focus() <br/><br/> `<EJ.Dialog id ='dialog'></EJ.Dialog>` <br/> $('#dialog').ejDialog('focus') | Not Applicable |
| Check whether the dialog is open | **Method:** isOpen() <br/> <br/> `<EJ.Dialog id ='dialog'></EJ.Dialog>` <br/>$('#dialog').ejDialog('isOpen') | Not Applicable |
| Maximize the dialog | **Method:** maximize() <br/> <br/> `<EJ.Dialog id ='dialog'></EJ.Dialog>` <br/>$('#dialog').ejDialog('maximize') | Not Applicable |
| Minimize the dialog | **Method:** minimize() <br/><br/> `<EJ.Dialog id ='dialog'></EJ.Dialog>`  <br/>$('#dialog').ejDialog('minimize') | Not Applicable |
| Open the dialog | **Method:** open() <br/> <br/> `<EJ.Dialog id ='dialog'></EJ.Dialog>` <br/>$('#dialog').ejDialog('open') | **Method** : show()  <br/> <br/>`<DialogComponent id='dialog' ref={dialog => this.dialogInstance = dialog />`<br/><br/>`constructor(props: {}) { this.dialogInstance.show(); }` <br/> |
| Event trigger before the dialog opens | **Event:** beforeOpen <br/><br/> `<EJ.Dialog beforeOpen={this.onBeforeOpen}></EJ.Dialog>`<br/><br/>`onBeforeOpen (event) {}` <br/> | **Event:** beforeOpen <br/><br/>`<DialogComponent beforeOpen= {this.onBeforeOpen.bind(this)} />`<br/><br/>`private onBeforeOpen() {}` <br/> |
| Event triggers when the opens the dialog | **Event:** open <br/> <br/> `<EJ.Dialog open={this.onOpen}></EJ.Dialog>`<br/><br/>`onOpen (event) {}` <br/> | Event: open  <br/><br/>`<DialogComponent open= {this.onOpen.bind(this)} />`<br/><br/>`private onOpen() {}` <br/> |
| Refresh the dialog | **Method:** refresh()  <br/> <br/>`<EJ.Dialog id ='dialog'></EJ.Dialog>` <br/>$('#dialog').ejDialog('refresh') | **Method** : refreshPosition()  <br/> <br/>`<DialogComponent id='dialog' ref={dialog => this.dialogInstance = dialog />`<br/><br/>`constructor(props: {}) { this.dialogInstance.refreshPosition(); }` <br/> |
| Pin/ unpin the dialog | **Method:** pin <br/> <br/>`<EJ.Dialog id ='dialog'></EJ.Dialog>` <br/>$('#dialog').ejDialog('pin');  <br/>$('#dialog').ejDialog('unpin');  | **Not Applicable** |
| Event triggers after the dialog created successfully | **Event:** create <br/><br/>`<EJ.Dialog create={this.onCreate}></EJ.Dialog>`<br/><br/>`onCreate (event) {}` <br/> | **Event** : created <br/> <br/>`<DialogComponent created= {this.onCreated.bind(this)} />`<br/><br/>`private onCreated() {}` <br/> |
| Event triggers when the control destroyed successfully | **Event:** destroy <br/><br/>`<EJ.Dialog destroy={this.onDestroy}></EJ.Dialog>`<br/><br/>`onDestroy (event) {}` <br/> | Not Applicable |
| Event triggers on clicking on modal dialog overlay | **Not Applicable** | **Event** : overlayClick <br/><br/>`<DialogComponent overlayClick= {this.onOverlayClick.bind(this)} />`<br/><br/>`private onOverlayClick() {}`  <br/> |

{% endraw %}