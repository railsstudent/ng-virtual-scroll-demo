import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shell',
  template: `
    <ng-container *ngIf="(mobileLayout$ | async) as mobileLayout">
      <mat-toolbar color="primary" class="app-toolbar">
        <button mat-icon-button (click)="snav.toggle()"><mat-icon>menu</mat-icon></button>
        <h1 class="app-name">Virtual Scroll Demo</h1>
      </mat-toolbar>
      <mat-sidenav-container>
        <mat-sidenav
          #snav
          mode="side"
          [mode]="mobileLayout.matches ? 'over' : 'side'"
          [fixedInViewport]="mobileLayout.matches"
          [fixedTopGap]="56"
        >
          <mat-nav-list>
            <a mat-list-item routerLink="/">Batched Virtual Scroll List</a>
            <a mat-list-item routerLink="/basic">Basic Virtual Scroll List</a>
          </mat-nav-list>
        </mat-sidenav>
        <mat-sidenav-content>
          <router-outlet></router-outlet>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </ng-container>
  `,
  styles: [
    `
      :host {
        min-height: 100vh;

        display: flex;
        flex-direction: column;
      }

      .app-name {
        margin-left: 0.5rem;
      }

      mat-sidenav-container {
        flex-grow: 1;
        background: #eee;

        position: relative;
      }

      mat-sidenav {
        background: lightcoral;
        width: 220px;
        min-width: 220px;
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
export class ShellComponent {
  mobileLayout$ = this.breakpointObserver.observe(['(max-width: 599px)']);

  constructor(private breakpointObserver: BreakpointObserver) {}
}
