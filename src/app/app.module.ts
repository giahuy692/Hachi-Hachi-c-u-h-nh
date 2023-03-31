import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//Angualr material
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

//Service
import { ProductService } from './service/product/product.service';
import { CategoryService } from './service/category/category.service';

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//kendon
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

//Componenet
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FilterGroupComponent } from './filter-group/filter-group.component';
import { SelectDataComponent } from './select-data/select-data.component';
import { TableProductComponent } from './table-product/table-product.component';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { InfomationCouponComponent } from './infomation-coupon/infomation-coupon.component';
import { ApplicableConditionsComponent } from './applicable-conditions/applicable-conditions.component';
import '@progress/kendo-angular-intl/locales/vi/all';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { TranslatePipe } from './pipe/translate.pipe';
import { TreeViewModule } from '@progress/kendo-angular-treeview';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    CheckboxComponent,
    FilterGroupComponent,
    SelectDataComponent,
    TableProductComponent,
    InfomationCouponComponent,
    ApplicableConditionsComponent,
    DatepickerComponent,
    TranslatePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    FontAwesomeModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    InputsModule,
    LabelModule,
    DropDownsModule,
    GridModule,
    ButtonsModule,
    LayoutModule,
    NavigationModule,
    DateInputsModule,
    IntlModule,
    TreeViewModule,
  ],
  providers: [
    ProductService,
    CategoryService,
    { provide: LOCALE_ID, useValue: 'vi-VN' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
