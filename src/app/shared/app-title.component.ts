import { CdkPortal, DomPortalHost, PortalHost } from '@angular/cdk/portal';
import {
  AfterViewInit,
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  Injector,
  OnDestroy,
  ViewChild,
} from '@angular/core';

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

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private injector: Injector, private appRef: ApplicationRef) {}

  ngAfterViewInit() {
    this.portalHost = new DomPortalHost(
      document.querySelector('#toolbar-title'),
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
