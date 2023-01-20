{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { createElement } from '@syncfusion/ej2-base';
import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
export default class App extends React.Component {
    animationSettings = { effect: 'None' };
    dialogInstance;
    imageEditorInstance;
    buttonEle;
    buttonRef;
    image;
    fileChanged(args) {
        const URL = window.URL;
        const url = URL.createObjectURL(args.target.files[0]);
        this.imageEditorInstance.open(url.toString());
        document.getElementById('img-upload').value = null;
    }
    handleImageLoaded() {
        let canvas = document.querySelector('#img-canvas');
        let image = document.querySelector('#custom-img');
        let ctx = canvas.getContext('2d');
        canvas.width = image.width < image.height ? image.width : image.height;
        canvas.height = canvas.width;
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    }
    buttons = [
        {
            click: this.dlgOpenButtonClick.bind(this),
            buttonModel: {
                content: 'Open',
                cssClass: 'e-custom-img-btn e-img-custom-open'
            }
        },
        {
            click: this.dlgResetButtonClick.bind(this),
            buttonModel: {
                content: 'Reset',
                cssClass: 'e-custom-img-btn e-img-custom-reset'
            }
        },
        {
            click: this.dlgRotateButtonClick.bind(this),
            buttonModel: {
                content: 'Rotate',
                cssClass: 'e-custom-img-btn e-img-custom-rotate'
            }
        },
        {
            click: this.dlgDoneButtonClick.bind(this),
            buttonModel: {
                content: 'Apply',
                cssClass: 'e-custom-img-btn e-img-custom-apply',
                isPrimary: true
            }
        }
    ];
    dlgOpenButtonClick() {
        document.getElementById('img-upload').click();
    }
    dlgResetButtonClick() {
        this.imageEditorInstance.reset();
    }
    dlgRotateButtonClick() {
        this.imageEditorInstance.rotate(-90);
    }
    dlgDoneButtonClick() {
        this.imageEditorInstance.crop();
        let croppedData = this.imageEditorInstance.getImageData();
        let canvas = document.querySelector('#img-canvas');
        let ctx = canvas.getContext('2d');
        let parentDiv = document.querySelector('.e-profile');
        let tempCanvas = parentDiv.appendChild(createElement('canvas'));
        let tempContext = tempCanvas.getContext('2d');
        tempCanvas.width = croppedData.width;
        tempCanvas.height = croppedData.height;
        tempContext.putImageData(croppedData, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
        tempCanvas.remove();
        parentDiv.style.borderRadius = '100%';
        canvas.style.backgroundColor = '#fff';
        this.dialogInstance.hide();
    }
    contentTemplate() {
        return (<ImageEditorComponent ref={img => this.imageEditorInstance = img} toolbar={[]} fileOpened={this.fileOpened.bind(this)} created={this.created.bind(this)}></ImageEditorComponent>);
    }
    fileOpened() {
        this.imageEditorInstance.select('circle');
    }
    created() {
        this.imageEditorInstance.theme = window.location.href.split('#')[1].split('/')[1];
    }
    editClicked() {
        this.dialogInstance.show();
        let canvas = document.querySelector('#img-canvas');
        this.imageEditorInstance.open(canvas.toDataURL());
    }
    ;
    render() {
        return (<div className='control-pane'>
                <div className='col-lg-12 control-section e-img-editor-profile'>
                    <div className='e-profile'>
                        <div className='e-custom-wrapper'>  
                            <canvas id='img-canvas'></canvas>
                            <img alt='img' className='e-custom-img' id='custom-img' onLoad={this.handleImageLoaded.bind(this)} src='images/profile.png'/>
                            <input type='file' id='img-upload' className='e-custom-file' onChange={this.fileChanged.bind(this)}/>
                            <span id='custom-edit' className='e-custom-edit' onClick={this.editClicked.bind(this)}>
                                <span className='e-custom-icon sb-icons'></span>
                            </span>
                        </div>
                    </div>
                </div>
                <div id='profile-dialog'>
                <DialogComponent id='profile-dialog' showCloseIcon={true} animationSettings={this.animationSettings} closeOnEscape={true} visible={false} width={'340px'} height={'420px'} ref={dialog => this.dialogInstance = dialog} target='.sb-desktop-wrapper' header='Edit Profile Image' buttons={this.buttons} content={this.contentTemplate.bind(this)} position={{ X: 'center', Y: 100 }}>
                </DialogComponent>
                </div>
            </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));
{% endraw %}