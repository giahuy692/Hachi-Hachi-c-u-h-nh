import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FilterGroupComponent } from './filter-group/filter-group.component';
import { SelectDataComponent } from './select-data/select-data.component';
import { TableProductComponent } from './table-product/table-product.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ProductFilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    CheckboxComponent,
    FilterGroupComponent,
    SelectDataComponent,
    TableProductComponent,
    PaginationComponent,
    ProductFilterPipe,
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
  ],
  providers: [ProductService, CategoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
