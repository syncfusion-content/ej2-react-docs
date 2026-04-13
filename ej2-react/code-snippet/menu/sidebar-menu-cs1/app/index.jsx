{% raw %}
import { enableRipple } from '@syncfusion/ej2-base';
import { AccordionComponent, AccordionItemDirective, AccordionItemsDirective, SidebarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
function App() {
    let sidebarObj;
    let accordionObj;
    let nestedAccordionObj;

    let width = '200px';
    let type = 'Over';

    function clicked(e) {
        const target = (e.originalEvent).target;
        if (!e.item && !(target.closest('.e-acrdn-item')).getElementsByClassName('e-tgl-collapse-icon').length) {
            sidebarObj.hide();
        }
    }

    function appliancesAccordion() {
        return ReactDom.render(
            <AccordionComponent ref={scope => nestedAccordionObj = scope} expanding={nestedExpand} clicked={clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Kitchen' content='<div id="Appliances_Kitchen_Items"></div>' />
                    <AccordionItemDirective header='Washing Machine' content='<div id="Appliances_Washing_Items"></div>' />
                    <AccordionItemDirective header='Air Conditioners' content='<div id="Appliances_Conditioners_Items"></div>' />
                </AccordionItemsDirective>
            </AccordionComponent>,
            document.getElementById("Appliances_Items"));
    }

    function kitchenAccordion() {
        return ReactDom.render(
            <AccordionComponent clicked={clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Electric Cookers' />
                    <AccordionItemDirective header='Coffee Makers' />
                    <AccordionItemDirective header='Blenders' />
                </AccordionItemsDirective>
            </AccordionComponent>,
            document.getElementById("Appliances_Kitchen_Items"));
    }

    function acAccordion() {
        return ReactDom.render(
            <AccordionComponent clicked={clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Inverter ACs' />
                    <AccordionItemDirective header='Split ACs' />
                    <AccordionItemDirective header='Window ACs' />
                </AccordionItemsDirective>
            </AccordionComponent>,
            document.getElementById("Appliances_Conditioners_Items"));
    }

    function washingAccordian() {
        return ReactDom.render(
            <AccordionComponent clicked={clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Fully Automatic' />
                    <AccordionItemDirective header='Semi Automatic' />
                </AccordionItemsDirective>
            </AccordionComponent>,
            document.getElementById("Appliances_Washing_Items"));
    }

    function accessoriesAccordion() {
        return ReactDom.render(
            <AccordionComponent clicked={clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Mobile' />
                    <AccordionItemDirective header='Computer' />
                </AccordionItemsDirective>
            </AccordionComponent>,
            document.getElementById("Accessories_Items"));
    }

    function homeAccordion() {
        return ReactDom.render(
            <AccordionComponent clicked={clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Furniture' />
                    <AccordionItemDirective header='Decor' />
                </AccordionItemsDirective>
            </AccordionComponent>,
            document.getElementById("Home_Living_Items"));
    }

    function fashionAccordion() {
        return ReactDom.render(
            <AccordionComponent clicked={clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Men' />
                    <AccordionItemDirective header='Women' />
                </AccordionItemsDirective>
            </AccordionComponent>,
            document.getElementById("Fashion_Items"));
    }

    function entertainmentAccordion() {
        return ReactDom.render(
            <AccordionComponent clicked={clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Televisions' />
                    <AccordionItemDirective header='Home Theatres' />
                    <AccordionItemDirective header='Gaming Laptops' />
                </AccordionItemsDirective>
            </AccordionComponent>,
            document.getElementById("Entertainment_Items"));
    }

    // Expanding Event function for main Accordion component.
    function expand(e) {
        if (e.isExpanded && [].indexOf.call(accordionObj.items, e.item) === 0) {
            if ((e.element).querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            appliancesAccordion();
        } else if (e.isExpanded && [].indexOf.call(accordionObj.items, e.item) === 1) {
            if ((e.element).querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            accessoriesAccordion();
        } else if (e.isExpanded && [].indexOf.call(accordionObj.items, e.item) === 2) {
            if ((e.element).querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            fashionAccordion();
        } else if (e.isExpanded && [].indexOf.call(accordionObj.items, e.item) === 3) {
            if ((e.element).querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            homeAccordion();
        } else if (e.isExpanded && [].indexOf.call(accordionObj.items, e.item) === 4) {
            if ((e.element).querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            entertainmentAccordion();
        }
    }

    // Expanding Event function for nested Accordion component.
    function nestedExpand(e) {
        if (e.isExpanded && [].indexOf.call(nestedAccordionObj.items, e.item) === 0) {
            if ((e.element).querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            kitchenAccordion();
        } else if (e.isExpanded && [].indexOf.call(nestedAccordionObj.items, e.item) === 1) {
            if ((e.element).querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            washingAccordian();
        } else if (e.isExpanded && [].indexOf.call(nestedAccordionObj.items, e.item) === 2) {
            if ((e.element).querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            acAccordion();
        }
    }

    function hamburgerClick() {
        sidebarObj.show();
        accordionObj.refresh();
    }

    function close() {
        sidebarObj.hide();
    }

    return (
        <div>
            <div className="header">
                <span id="hamburger" className="e-icons menu default" onClick={hamburgerClick}/>
                <div className="content">Header content</div>
            </div>
            <SidebarComponent id='default-sidebar' width={width} type={type} ref={scope => sidebarObj = scope}>
                <div className="title-header">
                    <div style={{display:'inline-block'}}>Menu</div>
                    <span  id="close" className="e-icons" onClick={close}/>
                </div>
                <div className="content-area">
                    <AccordionComponent ref={scope => accordionObj = scope} expanding={expand} clicked={clicked}>
                        <AccordionItemsDirective>
                            <AccordionItemDirective header='Appliances' content='<div id="Appliances_Items"></div>' />
                            <AccordionItemDirective header='Accessories' content='<div id="Accessories_Items"></div>' />
                            <AccordionItemDirective header='Fashion' content='<div id="Fashion_Items"></div>' />
                            <AccordionItemDirective header='Home & Living' content='<div id="Home_Living_Items"></div>' />
                            <AccordionItemDirective header='Entertainment' content='<div id="Entertainment_Items"></div>' />
                        </AccordionItemsDirective>
                    </AccordionComponent>
                </div>
            </SidebarComponent>
            <div>
                <div className="main-content">Main content</div>
            </div>
        </div>
    );
}
ReactDom.render(<App />, document.getElementById('element'));
{% endraw %}