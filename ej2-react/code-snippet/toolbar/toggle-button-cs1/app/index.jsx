import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useRef } from 'react';
import { ToolbarComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

const ReactApp = () => {
  const zoomBtnRef = useRef<ButtonComponent>(null);
  const mediaBtnRef = useRef<ButtonComponent>(null);
  const undoBtnRef = useRef<ButtonComponent>(null);
  const filterBtnRef = useRef<ButtonComponent>(null);
  const visibleBtnRef = useRef<ButtonComponent>(null);
  const contentRef = useRef(null);

  //Toggle button click event handlers
  const zoomBtnClick = () => {
    if (zoomBtnRef.current) {
      zoomBtnRef.current.element.onclick = () => {
        if (zoomBtnRef.current.element.classList.contains('e-active')) {
          zoomBtnRef.current.iconCss = 'e-icons e-zoomout-icon';
        } else {
          zoomBtnRef.current.iconCss = 'e-icons e-zoomin-icon';
        }
      };
    }
  }

  const mediaBtnClick = () => {
    if (mediaBtnRef.current) {
      mediaBtnRef.current.element.onclick = () => {
        if (mediaBtnRef.current.element.classList.contains('e-active')) {
          mediaBtnRef.current.iconCss = 'e-icons e-pause-icon';
        } else {
          mediaBtnRef.current.iconCss = 'e-icons e-play-icon';
        }
      };
    }
  }

  const undoBtnClick = () => {
    if (undoBtnRef.current) {
      undoBtnRef.current.element.onclick = () => {
        if (undoBtnRef.current.element.classList.contains('e-active')) {
          undoBtnRef.current.iconCss = 'e-icons e-redo-icon';
        } else {
          undoBtnRef.current.iconCss = 'e-icons e-undo-icon';
        }
      };
    }
  }

  const filterBtnClick = () => {
    if (filterBtnRef.current) {
      filterBtnRef.current.element.onclick = () => {
        if (filterBtnRef.current.element.classList.contains('e-active')) {
          filterBtnRef.current.iconCss = 'e-icons e-filternone-icon';
        } else {
          filterBtnRef.current.iconCss = 'e-icons e-filter-icon';
        }
      };
    }
  }

  const visibleBtnClick = () => {
    if (visibleBtnRef.current) {
      visibleBtnRef.current.element.onclick = () => {
        if (visibleBtnRef.current.element.classList.contains('e-active')) {
          contentRef.current.style.display = 'none';
          visibleBtnRef.current.content = 'Show';
          visibleBtnRef.current.iconCss = 'e-icons e-show-icon';
        } else {
          contentRef.current.style.display = 'block';
          visibleBtnRef.current.content = 'Hide';
          visibleBtnRef.current.iconCss = 'e-icons e-hide-icon';
        }
      };
    }
  }

  const zoomBtn = () => {
    return (<div>
      <ButtonComponent cssClass='e-flat' iconCss='e-icons e-zoomin-icon' isToggle={true} ref={zoomBtnRef}></ButtonComponent>
    </div>);
  }
  const mediaBtn = () => {
    return (<div>
      <ButtonComponent cssClass='e-flat' iconCss='e-icons e-play-icon' isToggle={true} ref={mediaBtnRef}></ButtonComponent>
    </div>);
  }
  const undoBtn = () => {
    return (<div>
      <ButtonComponent cssClass='e-flat' iconCss='e-icons e-undo-icon' isToggle={true} ref={undoBtnRef}></ButtonComponent>
    </div>);
  }
  const filterBtn = () => {
    return (<div>
      <ButtonComponent cssClass='e-flat' iconCss='e-icons e-filter-icon' isToggle={true} ref={filterBtnRef}></ButtonComponent>
    </div>);
  }
  const visibleBtn = () => {
    return (<div>
      <ButtonComponent cssClass='e-flat' iconCss='e-icons e-hide-icon' isToggle={true} content='Hide' ref={visibleBtnRef}></ButtonComponent>
    </div>);
  }
  const divMargin = { margin: '25px 0' };

  return (
    <div className='control-pane'>
      <div className='control-section tbar-control-section'>
        <div className='control toolbar-sample tbar-sample' style={divMargin}>
          <ToolbarComponent id="ej2Toolbar">
            <ItemsDirective>
              <ItemDirective template={mediaBtn} click={mediaBtnClick} />
              <ItemDirective type='Separator' />
              <ItemDirective template={zoomBtn} click={zoomBtnClick} />
              <ItemDirective type='Separator' />
              <ItemDirective template={undoBtn} click={undoBtnClick} />
              <ItemDirective type='Separator' />
              <ItemDirective template={filterBtn} click={filterBtnClick} />
              <ItemDirective type='Separator' />
              <ItemDirective template={visibleBtn} click={visibleBtnClick} />
            </ItemsDirective>
          </ToolbarComponent>
          <br></br>
          <div ref={contentRef}>
            This content will be hidden, when you click on hide button and toggle
            get an active state as show, otherwise it will be visible.
          </div>
        </div>
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('toolbar'));
root.render(<ReactApp />);