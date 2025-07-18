import { Code } from '@/domain/code';
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
    selector: 'linear-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>SpeedDial items are defined with the <i>model</i> property based on MenuModel API. Default orientation of the items is linear and <i>direction</i> property is used to define the position of the items related to the button.</p>
        </app-docsectiontext>
        <div class="card">
            <div style="height: 500px; position: relative;">
                <p-toast />
                <p-speeddial [model]="items" direction="up" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', bottom: 0 }" />
                <p-speeddial [model]="items" direction="down" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', top: 0 }" />
                <p-speeddial [model]="items" direction="left" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', right: 0 }" />
                <p-speeddial [model]="items" direction="right" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', left: 0 }" />
            </div>
        </div>
        <app-code [code]="code" selector="speed-dial-linear-demo"></app-code>
    `,
    providers: [MessageService]
})
export class LinearDoc implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'https://angular.dev'
            }
        ];
    }

    code: Code = {
        basic: `<p-speeddial [model]="items" direction="up" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', bottom: 0 }" />
<p-speeddial [model]="items" direction="down" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', top: 0 }" />
<p-speeddial [model]="items" direction="left" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', right: 0 }" />
<p-speeddial [model]="items" direction="right" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', left: 0 }" />`,

        html: `<div class="card">
    <div style="height: 500px; position: relative;">
        <p-toast />
        <p-speeddial [model]="items" direction="up" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', bottom: 0 }" />
        <p-speeddial [model]="items" direction="down" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', top: 0 }" />
        <p-speeddial [model]="items" direction="left" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', right: 0 }" />
        <p-speeddial [model]="items" direction="right" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', left: 0 }" />
    </div>
</div>`,

        typescript: `import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SpeedDial } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'speed-dial-linear-demo',
    templateUrl: './speed-dial-linear-demo.html',
    standalone: true,
    imports: [SpeedDial, ToastModule],
    providers: [MessageService]
})
export class SpeedDialLinearDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target:'_blank',
                url: 'https://angular.dev'
            }
        ];
    }
}`
    };
}
