import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import { TabOneComponent } from './tabOne';
import { TabTwoComponent } from './tabTwo';
export class DialogFormTemplate extends React.Component {
    grid;
    tab;
    constructor(props) {
        super(props);
        this.state = Object.assign({}, props[0]);
        this.grid = props[1];
    }
    tabOne() {
        const tab = [this.state, this.tab, this.grid];
        return (<TabOneComponent {...tab}/>);
    }
    tabTwo() {
        const tab = [this.state, this.tab, this.grid];
        return (<TabTwoComponent {...tab}/>);
    }
    next() {
        let valid = true;
        [].slice.call(document.getElementById('tab1')
            .querySelectorAll('[name]')).forEach((element) => {
            element.form.ej2_instances[0].validate(element.name);
            if (element.getAttribute('aria-invalid') === 'true') {
                valid = false;
            }
        });
        if (!valid) {
            return false;
        }
        return true;
    }
    selecting(e) {
        {
            if (e.isSwiped) {
                e.cancel = true;
            }
            if (e.selectingIndex === 1) {
                e.cancel = !this.next();
            }
        }
    }
    render() {
        this.tabOne = this.tabOne.bind(this);
        this.tabTwo = this.tabTwo.bind(this);
        this.selecting = this.selecting.bind(this);
        return (<div>
             <TabComponent id='defaultTab' ref={t => this.tab = t} selecting={this.selecting}>
                <TabItemsDirective>
                    <TabItemDirective header={{ 'text': 'Details' }} content={this.tabOne}/>
                    <TabItemDirective header={{ 'text': 'Verify' }} content={this.tabTwo}/>
                </TabItemsDirective>
            </TabComponent>
        </div>);
    }
}
