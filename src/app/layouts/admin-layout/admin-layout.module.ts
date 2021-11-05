import { YesNoPipe } from './../../Shared/pipes/yes-no.pipe';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule} from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';

import { AddEventAttendanceComponent } from 'app/Admin-Components/add-event-attendance/add-event-attendance.component';
import { AddEventCategoryComponent } from 'app/Admin-Components/add-event-category/add-event-category.component';
import { AddEventDetailsComponent } from 'app/Admin-Components/add-event-details/add-event-details.component';
import { AddEventStatusComponent } from 'app/Admin-Components/add-event-status/add-event-status.component';
import { AddEventVenueComponent } from 'app/Admin-Components/add-event-venue/add-event-venue.component';
import { AddGenderComponent } from 'app/Admin-Components/add-gender/add-gender.component';
import { AddJobComponent } from 'app/Admin-Components/add-job/add-job.component';
import { AddNationalityComponent } from 'app/Admin-Components/add-nationality/add-nationality.component';
import { AddOrganizerComponent } from 'app/Admin-Components/add-organizer/add-organizer.component';
import { AddUniversityComponent } from 'app/Admin-Components/add-university/add-university.component';
import { AddUserAdminComponent } from 'app/Admin-Components/add-user-admin/add-user-admin.component';
import { AddUserAttendComponent } from 'app/Admin-Components/add-user-attend/add-user-attend.component';
import { AddUserImagesComponent } from 'app/Admin-Components/add-user-images/add-user-images.component';
import { AddUserTypeComponent } from 'app/Admin-Components/add-user-type/add-user-type.component';

import { EventAttendanceComponent } from 'app/Admin-Components/event-attendance/event-attendance.component';
import { EventCategoryComponent } from 'app/Admin-Components/event-category/event-category.component';
import { EventDetailsComponent } from 'app/Admin-Components/event-details/event-details.component';
import { EventStatusComponent } from 'app/Admin-Components/event-status/event-status.component';
import { EventVenueComponent } from 'app/Admin-Components/event-venue/event-venue.component';
import { GenderComponent } from 'app/Admin-Components/gender/gender.component';
import { JobComponent } from 'app/Admin-Components/job/job.component';
import { NationalityComponent } from 'app/Admin-Components/nationality/nationality.component';
import { OrganizerComponent } from 'app/Admin-Components/organizer/organizer.component';
import { UniversityComponent } from 'app/Admin-Components/university/university.component';
import { UserAdminComponent } from 'app/Admin-Components/user-admin/user-admin.component';
import { UserAttendComponent } from 'app/Admin-Components/user-attend/user-attend.component';
import { UserImagesComponent } from 'app/Admin-Components/user-images/user-images.component';
import { UserTypeComponent } from 'app/Admin-Components/user-type/user-type.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatRadioModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    YesNoPipe,
    
    AddEventAttendanceComponent,
    AddEventCategoryComponent,
    AddEventDetailsComponent,
    AddEventStatusComponent,
    AddEventVenueComponent,
    AddGenderComponent,
    AddJobComponent,
    AddNationalityComponent,
    AddOrganizerComponent,
    AddUniversityComponent,
    AddUserAdminComponent,
    AddUserAttendComponent,
    AddUserImagesComponent,
    AddUserTypeComponent,
    EventAttendanceComponent,
    EventCategoryComponent,
    EventDetailsComponent,
    EventStatusComponent,
    EventVenueComponent,
    GenderComponent,
    JobComponent,
    NationalityComponent,
    OrganizerComponent,
    UniversityComponent,
    UserAdminComponent,
    UserAttendComponent,
    UserImagesComponent,
    UserTypeComponent

  ]
})

export class AdminLayoutModule {}
