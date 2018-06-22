import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Injectable()
export class ComponentAdderService {

  private viewRef: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) {
        
  }

  setViewRef(viewRef: ViewContainerRef) {
    this.viewRef = viewRef;
  }

  addComponent(compRef: any){
    const compFactory = this.resolver.resolveComponentFactory(compRef);
    this.viewRef.createComponent(compFactory);
  }
}
