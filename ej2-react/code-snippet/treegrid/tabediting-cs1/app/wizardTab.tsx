import { TreeGrid } from '@syncfusion/ej2-treegrid';
import { SelectingEventArgs } from '@syncfusion/ej2-navigations';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import { TabOneComponent } from './tabOne';
import { TabTwoComponent } from './tabTwo';


export class DialogFormTemplate extends React.Component<{}, {}> {
    private treegrid: TreeGrid;
    private tab: TabComponent | null;
    constructor(props: any) {
        super(props);
        this.state = Object.assign({}, props[0]);
        this.treegrid = props[1];
    }

    public tabOne() {
        const tab = [this.state, this.tab, this.treegrid];
        return (<TabOneComponent {...tab} />);
    }

    public tabTwo() {
        const tab = [this.state, this.tab, this.treegrid];
        return (<TabTwoComponent {...tab} />);
    }

    public next() {
        let valid: boolean = true;
        [].slice.call((document.getElementById('tab1') as HTMLElement)
            .querySelectorAll('[name]')).forEach((element: any) => {
            element.form.ej2_instances[0].validate(element.name);
            if (element.getAttribute('aria-invalid') === 'true'){
                valid = false;
            }
        });
        if (!valid) {
        return false;
        }
        return true;
    }

    public selecting(e: SelectingEventArgs) {
        {
            if(e.isSwiped) {e.cancel = true;}
            if(e.selectingIndex === 1) {e.cancel = !this.next();}
        }
    }

    public render(): any {
        this.tabOne = this.tabOne.bind(this);
        this.tabTwo = this.tabTwo.bind(this);
        this.selecting = this.selecting.bind(this);
        return (<div>
             <TabComponent id='defaultTab' ref={t => this.tab = t} selecting={this.selecting}>
                <TabItemsDirective>
                    <TabItemDirective header= { { 'text': 'Details' } } content={this.tabOne} />
                    <TabItemDirective header= { { 'text': 'Verify' } } content={this.tabTwo}/>
                </TabItemsDirective>
            </TabComponent>
        </div>);
    }
}
