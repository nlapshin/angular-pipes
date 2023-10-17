import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(products: any[], selectedCategory: string): any[] {
    if (!selectedCategory) {
      return products;
    }
    return products.filter(product => product.category === selectedCategory);
  }
}
