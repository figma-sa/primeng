import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'block-ui-basic-demo',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>The element to block should be placed as a child of BlockUI and <i>blocked</i> property is required to control the state.</p>
        </app-docsectiontext>
        <div class="card">
            <p-button label="Block" (click)="blockedPanel = true" />
            <p-button label="Unblock" (click)="blockedPanel = false" />
            <p-blockui [target]="pnl" [blocked]="blockedPanel" />
            <p-panel #pnl header="Header" class="mt-6">
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </p-panel>
        </div>
        <app-code [code]="code" selector="block-ui-basic-demo"></app-code>
    `
})
export class BasicDoc {
    blockedPanel: boolean = false;

    code: Code = {
        basic: `<p-button label="Block" (click)="blockedPanel = true" />
<p-button label="Unblock" (click)="blockedPanel = false" />
<p-blockui [target]="pnl" [blocked]="blockedPanel" />
<p-panel #pnl header="Header" class="mt-6">
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
</p-panel>`,
        html: `<div class="card">
    <p-button label="Block" (click)="blockedPanel = true" />
    <p-button label="Unblock" (click)="blockedPanel = false" />
    <p-blockui [target]="pnl" [blocked]="blockedPanel" />
    <p-panel #pnl header="Header" class="mt-6">
        <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </p-panel>
</div>`,
        typescript: `import { Component } from '@angular/core';
import { BlockUI } from 'primeng/blockui';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { Ripple } from 'primeng/ripple';

@Component({
    selector: 'block-ui-basic-demo',
    templateUrl: './block-ui-basic-demo.html',
    standalone: true,
    imports: [BlockUI, ButtonModule, PanelModule, Ripple]
})
export class BlockUiBasicDemo {
    blockedPanel: boolean = false;
}`
    };
}
