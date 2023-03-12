import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './layouts/aboutpage/aboutpage.component';
import { BalancepageComponent } from './layouts/balancepage/balancepage.component';
import { PaymentpageComponent } from './layouts/paymentpage/paymentpage.component';
import { AddAssetsComponent } from './layouts/add-assets/add-assets.component';
import { AssetsComponent } from './layouts/myassets/assets.component';
import { LoginComponent } from './layouts/login/login.component';
import { ProfileComponent } from './layouts/profile/profile.component';
import { RegisterComponent } from './layouts/register/register.component';
import { ContactpageComponent } from './layouts/contactpage/contactpage.component';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { ServicesComponent } from './layouts/services/services.component';

import { PasswordResetRequestComponent } from './secondary-layouts/password-reset-request/password-reset-request.component';
import { AuthGuard } from './services/userAuthGuard/auth.guard';
import { PageNotFoundComponent } from './secondary-layouts/page-not-found/page-not-found.component';
import { AdminUsersComponent } from './layouts/admin/admin-users/admin-users.component';

import { AdminComponent } from './layouts/admin/admin.component';
import { AdminBillsComponent } from './layouts/admin/admin-bills/admin-bills.component';
import { SendbillComponent } from './layouts/admin/sendbill/sendbill.component';
import { RoleGuard } from './services/role.guard';
import { AssetsRequestsComponent } from './layouts/admin/assets-requests/assets-requests.component';
import { MybillsComponent } from './secondary-layouts/mybills/mybills.component';
import { SellAssetsComponent } from './layouts/sell-assets/sell-assets.component';
import { SendMoneyComponent } from './layouts/send-money/send-money.component';
import { AdminDashboardComponent } from './layouts/admin/admin-dashboard/admin-dashboard.component';
import { AdminAssetsComponent } from './layouts/admin/admin-assets/admin-assets.component';
import { AdminTransacBillsComponent } from './layouts/admin/admin-transac-bills/admin-transac-bills.component';
import { AdminTransacAssetsComponent } from './layouts/admin/admin-transac-assets/admin-transac-assets.component';
import { AdminTransacMoneyComponent } from './layouts/admin/admin-transac-money/admin-transac-money.component';

import { InvoicesComponent } from './layouts/invoices/invoices.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'balance',
    component: BalancepageComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'sendMoney',
    component: SendMoneyComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'payment',
    component: PaymentpageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'about', component: AboutpageComponent },
  { path: 'assets', component: AssetsComponent, canActivate: [AuthGuard] },
  {
    path: 'assets/add-asset',
    component: AddAssetsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'contact', component: ContactpageComponent },
  { path: 'home/services', component: ServicesComponent },
  {
    path: 'reset-password',
    component: PasswordResetRequestComponent,
    children: [
      {
        path: '',
        redirectTo: 'request-password-reset',
        pathMatch: 'full',
      },
      {
        path: 'confirm',
        component: PasswordResetRequestComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [RoleGuard],
    children: [
      { path: 'users', component: AdminUsersComponent },
      { path: 'bills', component: AdminBillsComponent },
      { path: 'sendbill', component: SendbillComponent },
      { path: 'AseetsRequests', component: AssetsRequestsComponent },

      { path: 'assets', component: AdminAssetsComponent },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'TransactionBills', component: AdminTransacBillsComponent },
      { path: 'TransactionMoney', component: AdminTransacMoneyComponent },
      { path: 'TransactionAssets', component: AdminTransacAssetsComponent },
    ],
  },
  { path: 'myBills', component: MybillsComponent, canActivate: [AuthGuard] },
  {
    path: 'sellassets',
    component: SellAssetsComponent,
    canActivate: [AuthGuard],
  },

  { path: 'invoices', component: InvoicesComponent, canActivate: [AuthGuard] },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
