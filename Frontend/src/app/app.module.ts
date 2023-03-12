import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { AssetsComponent } from './layouts/myassets/assets.component';
import { AddAssetsComponent } from './layouts/add-assets/add-assets.component';
import { ProfileComponent } from './layouts/profile/profile.component';
import { LoginComponent } from './layouts/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutpageComponent } from './layouts/aboutpage/aboutpage.component';
import { BalancepageComponent } from './layouts/balancepage/balancepage.component';
import { PaymentpageComponent } from './layouts/paymentpage/paymentpage.component';
import { HeaderComponent } from './secondary-layouts/header/header.component';
import { FooterComponent } from './secondary-layouts/footer/footer.component';
import { ContactpageComponent } from './layouts/contactpage/contactpage.component';
import { ServicesComponent } from './layouts/services/services.component';
import { RegisterComponent } from './layouts/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { PasswordResetRequestComponent } from './secondary-layouts/password-reset-request/password-reset-request.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CutPipe } from './pipes/cut.pipe';
import { BalancePipe } from './pipes/balance.pipe';

import {
  ToastrModule,
  ToastNoAnimation,
  ToastNoAnimationModule,
} from 'ngx-toastr';

import { PageNotFoundComponent } from './secondary-layouts/page-not-found/page-not-found.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth/auth-interceptor.interceptor';
import { AdminUsersComponent } from './layouts/admin/admin-users/admin-users.component';

import { AdminComponent } from './layouts/admin/admin.component';
import { SidebarComponent } from './layouts/admin/admin-layouts/sidebar/sidebar.component';
import { AdminFooterComponent } from './layouts/admin/admin-layouts/admin-footer/admin-footer.component';
import { AssetsRequestsComponent } from './layouts/admin/assets-requests/assets-requests.component';
import { AdminBillsComponent } from './layouts/admin/admin-bills/admin-bills.component';
import { SendbillComponent } from './layouts/admin/sendbill/sendbill.component';
import { MybillsComponent } from './secondary-layouts/mybills/mybills.component';
import { SellAssetsComponent } from './layouts/sell-assets/sell-assets.component';
import { InvoicesComponent } from './layouts/invoices/invoices.component';
import { SendMoneyComponent } from './layouts/send-money/send-money.component';
import { AdminDashboardComponent } from './layouts/admin/admin-dashboard/admin-dashboard.component';
import { AdminAssetsComponent } from './layouts/admin/admin-assets/admin-assets.component';
import { AdminTransacAssetsComponent } from './layouts/admin/admin-transac-assets/admin-transac-assets.component';
import { AdminTransacMoneyComponent } from './layouts/admin/admin-transac-money/admin-transac-money.component';
import { AdminTransacBillsComponent } from './layouts/admin/admin-transac-bills/admin-transac-bills.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProfileComponent,
    AboutpageComponent,
    BalancepageComponent,
    PaymentpageComponent,
    AssetsComponent,
    AddAssetsComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ContactpageComponent,
    ServicesComponent,
    RegisterComponent,
    PasswordResetRequestComponent,
    CutPipe,
    BalancePipe,
    PageNotFoundComponent,
    AdminUsersComponent,
    AdminComponent,
    SidebarComponent,
    AdminFooterComponent,
    AssetsRequestsComponent,
    AdminBillsComponent,
    SendbillComponent,
    MybillsComponent,
    SellAssetsComponent,
    InvoicesComponent,
    SendMoneyComponent,
    AdminDashboardComponent,
    AdminAssetsComponent,
    AdminTransacAssetsComponent,
    AdminTransacMoneyComponent,
    AdminTransacBillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
