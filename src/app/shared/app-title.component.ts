import { CdkPortal, DomPortalHost, PortalHost } from '@angular/cdk/portal';
import {
  AfterViewInit,
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  Inject,
  Injector,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-title',
  template: `
    <ng-template cdkPortal>
      <ng-content></ng-content>
    </ng-template>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppTitleComponent implements AfterViewInit, OnDestroy {
  private portalHost: PortalHost;

  @ViewChild(CdkPortal)
  portal: CdkPortal;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngAfterViewInit() {
    this.portalHost = new DomPortalHost(
      this.document.querySelector('#toolbar-title'),
      this.componentFactoryResolver,
      this.appRef,
      this.injector,
    );
    this.portalHost.attach(this.portal);
  }

  ngOnDestroy() {
    this.portalHost.detach();
  }
}
