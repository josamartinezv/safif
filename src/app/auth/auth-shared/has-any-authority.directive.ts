import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from '../account.service';

@Directive({
  selector: '[appHasAnyAuthority]'
})
export class HasAnyAuthorityDirective implements OnDestroy {
  private authorities: string[] = [];
  private authenticationSubscription?: Subscription

  constructor(
    private accountService: AccountService,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }
  @Input()
  set appHasAnyAuthority(value: string | string[]) {
    this.authorities = typeof value === 'string' ? [value] : value;
    this.updateView();
    this.authenticationSubscription = this.accountService.getAuthenticationState()
    .subscribe(() => this.updateView());
  }
  ngOnDestroy():void{
    if(this.authenticationSubscription){
      this.authenticationSubscription.unsubscribe();
    }
  }
  private updateView(): void{
    const hasAnyAuthority = this.accountService.hasAnyAuthority(this.authorities);
    this.viewContainerRef.clear();
    if(hasAnyAuthority){
      this.viewContainerRef.createEmbeddedView(this.templateRef);

    }
  }

}
