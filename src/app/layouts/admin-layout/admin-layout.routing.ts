import { SignInComponent } from './../../Authentication/sign-in/sign-in.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AuthguardGuard } from 'app/Services/Guards/authguard.guard';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent ,canActivate:[AuthguardGuard] },
    { path: 'user-profile',   component: UserProfileComponent ,canActivate:[AuthguardGuard]},
    { path: 'table-list',     component: TableListComponent ,canActivate:[AuthguardGuard]},
    { path: 'add-new-user',     component: TypographyComponent,canActivate:[AuthguardGuard] },
    { path: 'icons',          component: IconsComponent ,canActivate:[AuthguardGuard]},
    { path: 'maps',           component: MapsComponent ,canActivate:[AuthguardGuard]},
    { path: 'notifications',  component: NotificationsComponent ,canActivate:[AuthguardGuard]},
];
