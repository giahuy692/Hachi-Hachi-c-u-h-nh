import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(products: any[], filters: any): any[] {
    console.log('Pipe: ', products);
    console.log('filters at pipe: ', filters);
    // Kiểm tra xem products có tồn tại không
    if (!products) {
      return [];
    }

    // Lọc sản phẩm dựa trên loại sản phẩm
    return products.filter((product) => {
      console.log('product: ', product);

      // Lọc theo tên sản phẩm
      if (
        filters.category &&
        !product.category.toLowerCase().includes(filters.category.toLowerCase())
      ) {
        return false;
      }

      // Lọc theo đang hoạt động
      if (filters.active && product.active > filters.active) {
        return false;
      }

      // Lọc theo ngừng hoạt động
      if (filters.inActive && product.inActive < filters.inActive) {
        return false;
      }

      // Nếu sản phẩm không bị loại bỏ, return true
      return true;
    });
  }
}
