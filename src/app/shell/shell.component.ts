import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shell',
  template: `
    <mat-sidenav-container>
      <mat-sidenav #sidenav mode="side" opened>
        <mat-nav-list>
          <a mat-list-item routerLink="/list">Virtual Scroll List</a>
          <a mat-list-item routerLink="/list">Virtual Scroll Table</a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      :host {
        min-height: calc(100vh - 38px);

        display: flex;
        flex-direction: column;
      }

      mat-sidenav-container {
        flex-grow: 1;
        background: #eee;

        position: relative;
      }

      mat-sidenav {
        background: lightcoral;
        width: 180px;
        min-width: 180px;
        max-width: 300px;
      }

      mat-sidenav-content {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {}
