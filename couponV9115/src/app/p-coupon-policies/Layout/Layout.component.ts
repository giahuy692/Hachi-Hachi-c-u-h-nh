// Angular
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  DrawerComponent,
  DrawerItem,
  DrawerSelectEvent,
} from '@progress/kendo-angular-layout';
import { ProductList, ProductApi } from 'src/app/DTO';
import { ServiceService } from 'src/app/service/service.service';

//Kendo

@Component({
  selector: 'app-Layout',
  templateUrl: './Layout.component.html',
  styleUrls: ['./Layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  // Variable Sidebar
  public showChildren: boolean = false;
  public selectedItem: number;
  public expanded = false;
  public expandedRight = false;

  public items = [
    {
      text: 'KHUYẾN MÃI',
      icon: 'icon_coppy.png',
      selected: true,
      id: 0,
    },
    {
      text: 'NỘI DUNG WEBSITE',
      icon: 'icon_coppy.png',
      id: 1,
    },
    {
      text: 'QUẢN LÝ BANNER',
      icon: 'icon_coppy.png',
      id: 2,
    },
    {
      text: 'CHÍNH SÁCH',
      icon: 'icon_coppy.png',
      id: 3,
      child: [
        {
          text: 'Coupon',
          icon: '',
          parentId: 3,
        },
        {
          text: 'xxxxxxxxxx',
          icon: '',
          parentId: 3,
        },
        {
          text: 'xxxxxxxxxx',
          icon: '',
          parentId: 3,
        },
        {
          text: 'xxxxxxxxxx',
          icon: '',
          parentId: 3,
        },
        {
          text: 'xxxxxxxxxx',
          icon: '',
          parentId: 3,
        },
      ],
    },

    {
      text: 'BÁO CÁO EXCEL',
      icon: 'icon_coppy.png',
      id: 4,
      expanded: false,
    },
  ];

  // Variable detail product
  @ViewChild('drawerRight') public DrawerRightComponent: DrawerComponent;
  CodeProduct: number = 0;
  ProductName: string = '';
  ImagesProduct: any;

  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.service.Product.subscribe((value: ProductApi) => {
      this.ProductName = value.ProductName;
      this.CodeProduct = parseInt(value.Barcode);
      this.ImagesProduct = value.ImageThumb;
    });
  }

  //- Drawer left
  //Handle  onSelectd in drawer left
  public onSelect(ev: DrawerSelectEvent): void {
    this.selectedItem = ev.item.id;
  }

  //Handle show children in drawer left
  toggleChildren() {
    this.showChildren = !this.showChildren;
  }

  //Handle expand change drawer left
  onExpandChange(e: boolean): void {
    if (e == false) {
      this.showChildren = false;
    }
  }
}
