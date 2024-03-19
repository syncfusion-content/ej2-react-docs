{% raw %}
import { createElement, detach, isNullOrUndefined, select } from '@syncfusion/ej2-base';
import { FormValidator } from '@syncfusion/ej2-inputs';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    uploadObj;
    dialogObj;
    path = {
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'
    };
    content = 'Your details have been updated successfully, Thank you.';
    width = '250px';
    visible = false;
    autoUpload = true;
    header = 'Success';
    extensions = '.png, .jpg, .jpeg';
    options = { rules: { 'name': { required: [true, '* Enter your name'] } } };
    customDropRef;
    onCreated() {
        this.uploadObj.dropArea = this.customDropRef;
        this.uploadObj.dataBind();
        const formObj = new FormValidator('#form1', this.options);
        return formObj;
        setTimeout(() => {
            this.uploadObj.element.setAttribute('data-required-message', '* Choose your image to upload');
            this.uploadObj.element.setAttribute('required', '');
            this.uploadObj.element.setAttribute('data-msg-containerid', 'uploadError');
        }, 500);
    }
    browseClick() {
        const wrapperEle = select('.e-file-select-wrap button', document);
        wrapperEle.click();
    }
    onFileSelect(args) {
        if (args.filesData.length > 0) {
            if (document.getElementsByClassName('upload-image').length > 0) {
                detach(document.getElementsByClassName('imgWrapper')[0]);
            }
            const imageTag = createElement('IMG', { className: 'upload-image', attrs: { 'alt': 'Image' } });
            const wrapper = createElement('span', { className: 'imgWrapper' });
            wrapper.appendChild(imageTag);
            const rootFile = this.customDropRef;
            rootFile.insertBefore(wrapper, rootFile.firstChild);
            this.readURL(wrapper, args.filesData[0]);
        }
        args.cancel = true;
    }
    readURL(li, args) {
        const preview = li.querySelector('.upload-image');
        const file = args.rawFile;
        const reader = new FileReader();
        reader.addEventListener('load', () => { preview.src = reader.result; }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
    }
    onFormSubmit() {
        const formObj = new FormValidator('#form1', this.options);
        const formStatus = formObj.validate();
        const imgValidate = !isNullOrUndefined(document.getElementsByClassName('imgWrapper')[0]);
        if (formStatus && imgValidate) {
            formObj.element.reset();
            if (imgValidate) {
                detach(document.getElementsByClassName('imgWrapper')[0]);
                this.dialogObj.show();
            }
        }
    }
    render() {
        return (<div className="control_wrapper">
            <div className="col-lg-12 control-section">
                <h4 className="form-title">Photo Contest</h4>
            <div className="controls" id="control_wrapper">
                <form id="form1" method="post" action='https://services.syncfusion.com/react/production/api/FileUploader/Save'>
                    <div id="name-attr" className="form-group" style={{ paddingTop: '40px' }}>
                        <div className="e-float-input">
                            <input type="text" id="name" name="name" required={true} data-required-message='* Enter your name' data-msg-containerid="nameError"/>
                            <span className="e-float-line"/>
                            <label className="e-float-text e-label-top" htmlFor='name'>Name</label>
                        </div>
                        <div id="nameError"/>
                    </div>
                    <div id="dropArea">
                        <div id="uploadError"/>
                        <div id='customBrowse' ref={dropEle => this.customDropRef = dropEle} className="form-group dropUpload" onClick={this.browseClick = this.browseClick.bind(this)}>   Click here...
                         <UploaderComponent ref={uplaod => { this.uploadObj = uplaod; }} autoUpload={this.autoUpload} selected={this.onFileSelect = this.onFileSelect.bind(this)} allowedExtensions={this.extensions} created={this.onCreated = this.onCreated.bind(this)}/>
                        </div>
                    </div>
                    <div className="submitBtn">
                        <button type="button" className="submit-btn e-btn" id="submit-btn" onClick={this.onFormSubmit = this.onFormSubmit.bind(this)}>Submit</button>
                        <div className="desc"><span>*This button is not a submit type and the form submit handled from externally.</span></div>
                    </div>
                </form>
                <DialogComponent id="dialog" width='350px' ref={dialog => { this.dialogObj = dialog; }} isModal={true} showCloseIcon={true} header={this.header} visible={false} content={this.content} target={".control_wrapper"}/>
                </div>
            </div>
        </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
{% endraw %}