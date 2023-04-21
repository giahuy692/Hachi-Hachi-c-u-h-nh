import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import '@progress/kendo-angular-intl/locales/vi/all';

//Component
import { AppComponent } from './app.component';
import { LayoutComponent } from './p-coupon-policies/Layout/Layout.component';
import { HeaderComponent } from './p-coupon-policies/Header/Header.component';
import { PToolGroupsComponent } from './p-coupon-policies/p-tool-groups/p-tool-groups.component';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ServiceService } from './service/service.service';
import { TranslatePipe } from './pipe/translate.pipe';

// Icon
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//kendo
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { CInformationComponent } from './p-coupon-policies/c-information/c-information.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { GridModule } from '@progress/kendo-angular-grid';
import { CConditionsComponent } from './p-coupon-policies/c-conditions/c-conditions.component';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { CGridLayoutBlockComponent } from './c-grid-layout-block/c-grid-layout-block.component';
import { CDetailComponent } from './p-coupon-policies/c-detail/c-detail.component';
import { CConfigComponent } from './p-coupon-policies/c-config/c-config.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { TooltipsModule } from '@progress/kendo-angular-tooltip';
import { CDialogComponent } from './c-dialog/c-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    DateTimePickerComponent,
    DatePickerComponent,
    TranslatePipe,
    PToolGroupsComponent,
    CInformationComponent,
    CConditionsComponent,
    CGridLayoutBlockComponent,
    CDetailComponent,
    CConfigComponent,
    CDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    LayoutModule,
    ButtonsModule,
    DateInputsModule,
    DropDownsModule,
    NavigationModule,
    InputsModule,
    LabelModule,
    GridModule,
    TreeViewModule,
    HttpClientModule,
    DialogsModule,
    TooltipsModule,
    FontAwesomeModule,
  ],
  providers: [ServiceService, { provide: LOCALE_ID, useValue: 'vi-VN' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
