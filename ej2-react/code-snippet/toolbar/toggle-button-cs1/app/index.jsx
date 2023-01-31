import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ToolbarComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-navigations';
import { Button } from '@syncfusion/ej2-react-buttons';
function ReactApp() {
    let undoBtn;
    let zoomBtn;
    let mediaBtn;
    let filterBtn;
    let visibleBtn;
    const tbCreated = () => {
        zoomBtn = new Button({ cssClass: `e-flat`, iconCss: 'e-icons e-zoomin-icon', isToggle: true });
        zoomBtn.appendTo('#zoom_btn');
        mediaBtn = new Button({ cssClass: `e-flat`, iconCss: 'e-icons e-play-icon', isToggle: true });
        mediaBtn.appendTo('#media_btn');
        undoBtn = new Button({ cssClass: `e-flat`, iconCss: 'e-icons e-undo-icon', isToggle: true });
        undoBtn.appendTo('#undo_btn');
        filterBtn = new Button({ cssClass: `e-flat`, iconCss: 'e-icons e-filter-icon', isToggle: true });
        filterBtn.appendTo('#filter_btn');
        visibleBtn = new Button({ cssClass: `e-flat`, iconCss: 'e-icons e-hide-icon', isToggle: true, content: 'Hide' });
        visibleBtn.appendTo('#visible_btn');
        //Toggle button click event handlers
        zoomBtn.element.onclick = () => {
            if (zoomBtn.element.classList.contains('e-active')) {
                zoomBtn.iconCss = 'e-icons e-zoomout-icon';
            }
            else {
                zoomBtn.iconCss = 'e-icons e-zoomin-icon';
            }
        };
        mediaBtn.element.onclick = () => {
            if (mediaBtn.element.classList.contains('e-active')) {
                mediaBtn.iconCss = 'e-icons e-pause-icon';
            }
            else {
                mediaBtn.iconCss = 'e-icons e-play-icon';
            }
        };
        undoBtn.element.onclick = () => {
            if (undoBtn.element.classList.contains('e-active')) {
                undoBtn.iconCss = 'e-icons e-redo-icon';
            }
            else {
                undoBtn.iconCss = 'e-icons e-undo-icon';
            }
        };
        filterBtn.element.onclick = () => {
            if (filterBtn.element.classList.contains('e-active')) {
                filterBtn.iconCss = 'e-icons e-filternone-icon';
            }
            else {
                filterBtn.iconCss = 'e-icons e-filter-icon';
            }
        };
        visibleBtn.element.onclick = () => {
            if (visibleBtn.element.classList.contains('e-active')) {
                document.getElementById('content').style.display = 'none';
                visibleBtn.content = 'Show';
                visibleBtn.iconCss = 'e-icons e-show-icon';
            }
            else {
                document.getElementById('content').style.display = 'block';
                visibleBtn.content = 'Hide';
                visibleBtn.iconCss = 'e-icons e-hide-icon';
            }
        };
    };
    const divMargin = { margin: '25px 0' };
    return (<div className='control-pane'>
      <div className='control-section tbar-control-section'>
        <div className='control toolbar-sample tbar-sample' style={divMargin}>
          <ToolbarComponent id="ej2Toolbar" created={tbCreated}>
            <ItemsDirective>
              <ItemDirective template='<button class="e-btn" id="media_btn"></button>'/>
              <ItemDirective type='Separator'/>
              <ItemDirective template='<button class="e-btn" id="zoom_btn"></button>'/>
              <ItemDirective type='Separator'/>
              <ItemDirective template='<button class="e-btn" id="undo_btn"></button>'/>
              <ItemDirective type='Separator'/>
              <ItemDirective template='<button class="e-btn" id="filter_btn"></button>'/>
              <ItemDirective type='Separator'/>
              <ItemDirective template='<button class="e-btn" id="visible_btn"></button>'/>
            </ItemsDirective>
          </ToolbarComponent>
        </div>
      </div>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById('toolbar'));
root.render(<ReactApp />);
