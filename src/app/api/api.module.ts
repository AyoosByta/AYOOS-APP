/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { QueryResourceService } from './services/query-resource.service';
import { CommandResourceService } from './services/command-resource.service';
import { UserResourceService } from './services/user-resource.service';
import { AccountResourceService } from './services/account-resource.service';
import { GatewayResourceService } from './services/gateway-resource.service';
import { LogoutResourceService } from './services/logout-resource.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    QueryResourceService,
    CommandResourceService,
    UserResourceService,
    AccountResourceService,
    GatewayResourceService,
    LogoutResourceService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
