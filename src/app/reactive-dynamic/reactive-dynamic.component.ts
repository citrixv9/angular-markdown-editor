import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import { EditorInstance, EditorOption } from '../../lib/angular-markdown-editor';

@Component({
  templateUrl: './reactive-dynamic.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./reactive-dynamic.component.scss']
})
export class ReactiveDynamicComponent implements OnInit {
  bsEditorInstance: EditorInstance;
  dynamicForm: FormGroup;
  editorOptions: EditorOption;

  get notes(): FormArray {
    return this.dynamicForm.get('notes') as FormArray;
  }

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.editorOptions = {
      autofocus: false,
      iconlibrary: 'fa',
      savable: false,
      hiddenButtons: ['cmdImage', 'cmdPreview', 'cmdTable', 'cmdQuote', 'cmdCode', 'cmdUrl', 'cmdHeading'],
      onFullscreenExit: (e) => this.hidePreview(e),
      onShow: (e) => this.bsEditorInstance = e
    };

    this.buildForm();
    for(let i = 0; i < 3; i++) {
      this.addNote();
    }
  }


  buildForm() {
    this.dynamicForm = this.fb.group({
      field1: [''],
      field2: [''],
      notes: this.fb.array([])
    });
  }

  getMarkdownElem() {
    return this.fb.group({
      body: ['']
    });
  }

  hidePreview(e) {
    if (this.bsEditorInstance && this.bsEditorInstance.hidePreview) {
      this.bsEditorInstance.hidePreview();
    }
  }

  addNote() {
    this.notes.push(this.getMarkdownElem());
  }
}
