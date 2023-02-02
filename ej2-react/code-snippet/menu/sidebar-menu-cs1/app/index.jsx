{% raw %}
import { enableRipple } from '@syncfusion/ej2-base';
import { AccordionComponent, AccordionItemDirective, AccordionItemsDirective, SidebarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
class App extends React.Component {
    sidebarObj;
    accordionObj;
    nestedAccordionObj;
    width = '200px';
    type = 'Over';
    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
        this.expand = this.expand.bind(this);
        this.nestedExpand = this.nestedExpand.bind(this);
        this.clicked = this.clicked.bind(this);
        this.hamburgerClick = this.hamburgerClick.bind(this);
    }
    clicked(e) {
        const target = e.originalEvent.target;
        if (!e.item && !target.closest('.e-acrdn-item').getElementsByClassName('e-tgl-collapse-icon').length) {
            this.sidebarObj.hide();
        }
    }
    appliancesAccordion() {
        return ReactDom.render(<AccordionComponent ref={scope => this.nestedAccordionObj = scope} expanding={this.nestedExpand} clicked={this.clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Kitchen' content='<div id="Appliances_Kitchen_Items"></div>'/>
                    <AccordionItemDirective header='Washing Machine' content='<div id="Appliances_Washing_Items"></div>'/>
                    <AccordionItemDirective header='Air Conditioners' content='<div id="Appliances_Conditioners_Items"></div>'/>
                </AccordionItemsDirective>
            </AccordionComponent>, document.getElementById("Appliances_Items"));
    }
    kitchenAccordion() {
        return ReactDom.render(<AccordionComponent clicked={this.clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Electric Cookers'/>
                    <AccordionItemDirective header='Coffee Makers'/>
                    <AccordionItemDirective header='Blenders'/>
                </AccordionItemsDirective>
            </AccordionComponent>, document.getElementById("Appliances_Kitchen_Items"));
    }
    acAccordion() {
        return ReactDom.render(<AccordionComponent clicked={this.clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Inverter ACs'/>
                    <AccordionItemDirective header='Split ACs'/>
                    <AccordionItemDirective header='Window ACs'/>
                </AccordionItemsDirective>
            </AccordionComponent>, document.getElementById("Appliances_Conditioners_Items"));
    }
    washingAccordian() {
        return ReactDom.render(<AccordionComponent clicked={this.clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Fully Automatic'/>
                    <AccordionItemDirective header='Semi Automatic'/>
                </AccordionItemsDirective>
            </AccordionComponent>, document.getElementById("Appliances_Washing_Items"));
    }
    accessoriesAccordion() {
        return ReactDom.render(<AccordionComponent clicked={this.clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Mobile'/>
                    <AccordionItemDirective header='Computer'/>
                </AccordionItemsDirective>
            </AccordionComponent>, document.getElementById("Accessories_Items"));
    }
    homeAccordion() {
        return ReactDom.render(<AccordionComponent clicked={this.clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Furniture'/>
                    <AccordionItemDirective header='Decor'/>
                </AccordionItemsDirective>
            </AccordionComponent>, document.getElementById("Home_Living_Items"));
    }
    fashionAccordion() {
        return ReactDom.render(<AccordionComponent clicked={this.clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Men'/>
                    <AccordionItemDirective header='Women'/>
                </AccordionItemsDirective>
            </AccordionComponent>, document.getElementById("Fashion_Items"));
    }
    entertainmentAccordion() {
        return ReactDom.render(<AccordionComponent clicked={this.clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Televisions'/>
                    <AccordionItemDirective header='Home Theatres'/>
                    <AccordionItemDirective header='Gaming Laptops'/>
                </AccordionItemsDirective>
            </AccordionComponent>, document.getElementById("Entertainment_Items"));
    }
    // Expanding Event function for main Accordion component.
    expand(e) {
        if (e.isExpanded && [].indexOf.call(this.accordionObj.items, e.item) === 0) {
            if (e.element.querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            this.appliancesAccordion();
        }
        else if (e.isExpanded && [].indexOf.call(this.accordionObj.items, e.item) === 1) {
            if (e.element.querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            this.accessoriesAccordion();
        }
        else if (e.isExpanded && [].indexOf.call(this.accordionObj.items, e.item) === 2) {
            if (e.element.querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            this.fashionAccordion();
        }
        else if (e.isExpanded && [].indexOf.call(this.accordionObj.items, e.item) === 3) {
            if (e.element.querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            this.homeAccordion();
        }
        else if (e.isExpanded && [].indexOf.call(this.accordionObj.items, e.item) === 4) {
            if (e.element.querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            this.entertainmentAccordion();
        }
    }
    // Expanding Event function for nested Accordion component.
    nestedExpand(e) {
        if (e.isExpanded && [].indexOf.call(this.nestedAccordionObj.items, e.item) === 0) {
            if (e.element.querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            this.kitchenAccordion();
        }
        else if (e.isExpanded && [].indexOf.call(this.nestedAccordionObj.items, e.item) === 1) {
            if (e.element.querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            this.washingAccordian();
        }
        else if (e.isExpanded && [].indexOf.call(this.nestedAccordionObj.items, e.item) === 2) {
            if (e.element.querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            this.acAccordion();
        }
    }
    hamburgerClick() {
        this.sidebarObj.show();
        this.accordionObj.refresh();
    }
    close() {
        this.sidebarObj.hide();
    }
    render() {
        return (<div>
                <div className="header">
                    <span id="hamburger" className="e-icons menu default" onClick={this.hamburgerClick}/>
                    <div className="content">Header content</div>
                </div>
                <SidebarComponent id='default-sidebar' width={this.width} type={this.type} ref={scope => this.sidebarObj = scope}>
                    <div className="title-header">
                        <div style={{ display: 'inline-block' }}>Menu</div>
                        <span id="close" className="e-icons" onClick={this.close}/>
                    </div>
                    <div className="content-area">
                        <AccordionComponent ref={scope => this.accordionObj = scope} expanding={this.expand} clicked={this.clicked}>
                            <AccordionItemsDirective>
                                <AccordionItemDirective header='Appliances' content='<div id="Appliances_Items"></div>'/>
                                <AccordionItemDirective header='Accessories' content='<div id="Accessories_Items"></div>'/>
                                <AccordionItemDirective header='Fashion' content='<div id="Fashion_Items"></div>'/>
                                <AccordionItemDirective header='Home & Living' content='<div id="Home_Living_Items"></div>'/>
                                <AccordionItemDirective header='Entertainment' content='<div id="Entertainment_Items"></div>'/>
                            </AccordionItemsDirective>
                        </AccordionComponent>
                    </div>
                </SidebarComponent>
                <div>
                    <div className="main-content">Main content</div>
                </div>
            </div>);
    }
}
ReactDom.render(<App />, document.getElementById('element'));
{% endraw %}