import { AccessibilityDoc } from '@/doc/radiobutton/accessibilitydoc';
import { DisabledDoc } from '@/doc/radiobutton/disableddoc';
import { DynamicDoc } from '@/doc/radiobutton/dynamicdoc';
import { FilledDoc } from '@/doc/radiobutton/filleddoc';
import { GroupDoc } from '@/doc/radiobutton/groupdoc';
import { ImportDoc } from '@/doc/radiobutton/importdoc';
import { InvalidDoc } from '@/doc/radiobutton/invaliddoc';
import { RadioButtonDocModule } from '@/doc/radiobutton/radiobuttondoc.module';
import { ReactiveFormsDoc } from '@/doc/radiobutton/reactiveformsdoc';
import { SizesDoc } from '@/doc/radiobutton/sizesdoc';
import { TemplateDrivenFormsDoc } from '@/doc/radiobutton/templatedrivenformsdoc';
import { Component } from '@angular/core';

@Component({
    template: `<app-doc
        docTitle="Angular RadioButton Component"
        header="RadioButton"
        description="RadioButton is an extension to standard radio button element with theming."
        [docs]="docs"
        [apiDocs]="['RadioButton']"
        themeDocs="radiobutton"
    ></app-doc>`,
    standalone: true,
    imports: [RadioButtonDocModule]
})
export class RadioButtonDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'group',
            label: 'Group',
            component: GroupDoc
        },
        {
            id: 'dynamic',
            label: 'Dynamic',
            component: DynamicDoc
        },
        {
            id: 'filled',
            label: 'Filled',
            component: FilledDoc
        },
        {
            id: 'sizes',
            label: 'Sizes',
            component: SizesDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'invalid',
            label: 'Invalid',
            component: InvalidDoc
        },
        {
            id: 'forms',
            label: 'Forms',
            children: [
                { id: 'templatedriven', label: 'Template Driven', component: TemplateDrivenFormsDoc },
                { id: 'reactive', label: 'Reactive Forms', component: ReactiveFormsDoc }
            ]
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];
}
