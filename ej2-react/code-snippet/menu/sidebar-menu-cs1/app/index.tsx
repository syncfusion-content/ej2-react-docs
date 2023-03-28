{% raw %}


import { enableRipple } from '@syncfusion/ej2-base';
import { AccordionClickArgs, AccordionComponent, AccordionItemDirective, AccordionItemsDirective, ExpandEventArgs, SidebarComponent, SidebarType } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {
    let sidebarObj: SidebarComponent;
    let accordionObj: AccordionComponent;
    let nestedAccordionObj: AccordionComponent;

    let width: string = '200px';
    let type: SidebarType = 'Over';

    function clicked(e: AccordionClickArgs): void {
        const target = (e.originalEvent as Event).target as HTMLElement;
        if (!e.item && !(target.closest('.e-acrdn-item') as HTMLElement).getElementsByClassName('e-tgl-collapse-icon').length) {
            sidebarObj.hide();
        }
    }

    function appliancesAccordion(): void {
        return ReactDom.render(
            <AccordionComponent ref={scope => nestedAccordionObj = scope as AccordionComponent} expanding={nestedExpand} clicked={clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Kitchen' content='<div id="Appliances_Kitchen_Items"></div>' />
                    <AccordionItemDirective header='Washing Machine' content='<div id="Appliances_Washing_Items"></div>' />
                    <AccordionItemDirective header='Air Conditioners' content='<div id="Appliances_Conditioners_Items"></div>' />
                </AccordionItemsDirective>
            </AccordionComponent>,
            document.getElementById("Appliances_Items"));
    }

    function kitchenAccordion(): void {
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

    function acAccordion(): void {
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

    function washingAccordian(): void {
        return ReactDom.render(
            <AccordionComponent clicked={clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Fully Automatic' />
                    <AccordionItemDirective header='Semi Automatic' />
                </AccordionItemsDirective>
            </AccordionComponent>,
            document.getElementById("Appliances_Washing_Items"));
    }

    function accessoriesAccordion(): void {
        return ReactDom.render(
            <AccordionComponent clicked={clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Mobile' />
                    <AccordionItemDirective header='Computer' />
                </AccordionItemsDirective>
            </AccordionComponent>,
            document.getElementById("Accessories_Items"));
    }

    function homeAccordion(): void {
        return ReactDom.render(
            <AccordionComponent clicked={clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Furniture' />
                    <AccordionItemDirective header='Decor' />
                </AccordionItemsDirective>
            </AccordionComponent>,
            document.getElementById("Home_Living_Items"));
    }

    function fashionAccordion(): void {
        return ReactDom.render(
            <AccordionComponent clicked={clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Men' />
                    <AccordionItemDirective header='Women' />
                </AccordionItemsDirective>
            </AccordionComponent>,
            document.getElementById("Fashion_Items"));
    }

    function entertainmentAccordion(): void {
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
    function expand(e: ExpandEventArgs): void {
        if (e.isExpanded && [].indexOf.call(accordionObj.items, e.item) === 0) {
            if ((e.element as Element).querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            appliancesAccordion();
        } else if (e.isExpanded && [].indexOf.call(accordionObj.items, e.item) === 1) {
            if ((e.element as Element).querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            accessoriesAccordion();
        } else if (e.isExpanded && [].indexOf.call(accordionObj.items, e.item) === 2) {
            if ((e.element as Element).querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            fashionAccordion();
        } else if (e.isExpanded && [].indexOf.call(accordionObj.items, e.item) === 3) {
            if ((e.element as Element).querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            homeAccordion();
        } else if (e.isExpanded && [].indexOf.call(accordionObj.items, e.item) === 4) {
            if ((e.element as Element).querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            entertainmentAccordion();
        }
    }

    // Expanding Event function for nested Accordion component.
    function nestedExpand(e: ExpandEventArgs): void {
        if (e.isExpanded && [].indexOf.call(nestedAccordionObj.items, e.item) === 0) {
            if ((e.element as Element).querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            kitchenAccordion();
        } else if (e.isExpanded && [].indexOf.call(nestedAccordionObj.items, e.item) === 1) {
            if ((e.element as Element).querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            washingAccordian();
        } else if (e.isExpanded && [].indexOf.call(nestedAccordionObj.items, e.item) === 2) {
            if ((e.element as Element).querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            acAccordion();
        }
    }

    function hamburgerClick(): void {
        sidebarObj.show();
        accordionObj.refresh();
    }

    function close(): void {
        sidebarObj.hide();
    }

    return (
        <div>
            <div className="header">
                <span id="hamburger" className="e-icons menu default" onClick={hamburgerClick}/>
                <div className="content">Header content</div>
            </div>
            <SidebarComponent id='default-sidebar' width={width} type={type} ref={scope => sidebarObj = scope as SidebarComponent}>
                <div className="title-header">
                    <div style={{display:'inline-block'}}>Menu</div>
                    <span  id="close" className="e-icons" onClick={close}/>
                </div>
                <div className="content-area">
                    <AccordionComponent ref={scope => accordionObj = scope as AccordionComponent} expanding={expand} clicked={clicked}>
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

ReactDom.render(<App />,document.getElementById('element'));


{% endraw %}