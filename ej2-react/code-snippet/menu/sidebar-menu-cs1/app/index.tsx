{% raw %}


import { enableRipple } from '@syncfusion/ej2-base';
import { AccordionClickArgs, AccordionComponent, AccordionItemDirective, AccordionItemsDirective, ExpandEventArgs, SidebarComponent, SidebarType } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

class App extends React.Component<{}, {}> {
    public sidebarObj: SidebarComponent;
    public accordionObj: AccordionComponent;
    public nestedAccordionObj: AccordionComponent;

    public width: string = '200px';
    public type: SidebarType = 'Over';

    constructor(props: any) {
        super(props);
        this.close = this.close.bind(this);
        this.expand = this.expand.bind(this);
        this.nestedExpand = this.nestedExpand.bind(this);
        this.clicked = this.clicked.bind(this);
        this.hamburgerClick = this.hamburgerClick.bind(this);
    }

    public clicked(e: AccordionClickArgs): void {
        const target = (e.originalEvent as Event).target as HTMLElement;
        if (!e.item && !(target.closest('.e-acrdn-item') as HTMLElement).getElementsByClassName('e-tgl-collapse-icon').length) {
            this.sidebarObj.hide();
        }
    }

    public appliancesAccordion(): void {
        return ReactDom.render(
            <AccordionComponent ref={scope => this.nestedAccordionObj = scope as AccordionComponent} expanding={this.nestedExpand} clicked={this.clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Kitchen' content='<div id="Appliances_Kitchen_Items"></div>' />
                    <AccordionItemDirective header='Washing Machine' content='<div id="Appliances_Washing_Items"></div>' />
                    <AccordionItemDirective header='Air Conditioners' content='<div id="Appliances_Conditioners_Items"></div>' />
                </AccordionItemsDirective>
            </AccordionComponent>,
            document.getElementById("Appliances_Items"));
    }

    public kitchenAccordion(): void {
        return ReactDom.render(
            <AccordionComponent clicked={this.clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Electric Cookers' />
                    <AccordionItemDirective header='Coffee Makers' />
                    <AccordionItemDirective header='Blenders' />
                </AccordionItemsDirective>
            </AccordionComponent>,
            document.getElementById("Appliances_Kitchen_Items"));
    }

    public acAccordion(): void {
        return ReactDom.render(
            <AccordionComponent clicked={this.clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Inverter ACs' />
                    <AccordionItemDirective header='Split ACs' />
                    <AccordionItemDirective header='Window ACs' />
                </AccordionItemsDirective>
            </AccordionComponent>,
            document.getElementById("Appliances_Conditioners_Items"));
    }

    public washingAccordian(): void {
        return ReactDom.render(
            <AccordionComponent clicked={this.clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Fully Automatic' />
                    <AccordionItemDirective header='Semi Automatic' />
                </AccordionItemsDirective>
            </AccordionComponent>,
            document.getElementById("Appliances_Washing_Items"));
    }

     public accessoriesAccordion(): void {
        return ReactDom.render(
            <AccordionComponent clicked={this.clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Mobile' />
                    <AccordionItemDirective header='Computer' />
                </AccordionItemsDirective>
            </AccordionComponent>,
            document.getElementById("Accessories_Items"));
    }

    public homeAccordion(): void {
        return ReactDom.render(
            <AccordionComponent clicked={this.clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Furniture' />
                    <AccordionItemDirective header='Decor' />
                </AccordionItemsDirective>
            </AccordionComponent>,
            document.getElementById("Home_Living_Items"));
    }

    public fashionAccordion(): void {
        return ReactDom.render(
            <AccordionComponent clicked={this.clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Men' />
                    <AccordionItemDirective header='Women' />
                </AccordionItemsDirective>
            </AccordionComponent>,
            document.getElementById("Fashion_Items"));
    }

    public entertainmentAccordion(): void {
        return ReactDom.render(
            <AccordionComponent clicked={this.clicked}>
                <AccordionItemsDirective>
                    <AccordionItemDirective header='Televisions' />
                    <AccordionItemDirective header='Home Theatres' />
                    <AccordionItemDirective header='Gaming Laptops' />
                </AccordionItemsDirective>
            </AccordionComponent>,
            document.getElementById("Entertainment_Items"));
    }

    // Expanding Event function for main Accordion component.
    public expand(e: ExpandEventArgs): void {
        if (e.isExpanded && [].indexOf.call(this.accordionObj.items, e.item) === 0) {
            if ((e.element as Element).querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            this.appliancesAccordion();
        } else if (e.isExpanded && [].indexOf.call(this.accordionObj.items, e.item) === 1) {
            if ((e.element as Element).querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            this.accessoriesAccordion();
        } else if (e.isExpanded && [].indexOf.call(this.accordionObj.items, e.item) === 2) {
            if ((e.element as Element).querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            this.fashionAccordion();
        } else if (e.isExpanded && [].indexOf.call(this.accordionObj.items, e.item) === 3) {
            if ((e.element as Element).querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            this.homeAccordion();
        } else if (e.isExpanded && [].indexOf.call(this.accordionObj.items, e.item) === 4) {
            if ((e.element as Element).querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            this.entertainmentAccordion();
        }
    }

    // Expanding Event function for nested Accordion component.
    public nestedExpand(e: ExpandEventArgs): void {
        if (e.isExpanded && [].indexOf.call(this.nestedAccordionObj.items, e.item) === 0) {
            if ((e.element as Element).querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            this.kitchenAccordion();
        } else if (e.isExpanded && [].indexOf.call(this.nestedAccordionObj.items, e.item) === 1) {
            if ((e.element as Element).querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            this.washingAccordian();
        } else if (e.isExpanded && [].indexOf.call(this.nestedAccordionObj.items, e.item) === 2) {
            if ((e.element as Element).querySelectorAll('.e-accordion').length > 0) {
                return;
            }
            this.acAccordion();
        }
    }

    public hamburgerClick(): void {
        this.sidebarObj.show();
        this.accordionObj.refresh();
    }

    public close(): void {
        this.sidebarObj.hide();
    }

    public render() {
        return (
            <div>
                <div className="header">
                    <span id="hamburger" className="e-icons menu default" onClick={this.hamburgerClick}/>
                    <div className="content">Header content</div>
                </div>
                <SidebarComponent id='default-sidebar' width={this.width} type={this.type} ref={scope => this.sidebarObj = scope as SidebarComponent}>
                    <div className="title-header">
                        <div style={{display:'inline-block'}}>Menu</div>
                        <span  id="close" className="e-icons" onClick={this.close}/>
                    </div>
                    <div className="content-area">
                        <AccordionComponent ref={scope => this.accordionObj = scope as AccordionComponent} expanding={this.expand} clicked={this.clicked}>
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
}

ReactDom.render(<App />,document.getElementById('element'));


{% endraw %}