import { Product } from '../model/product.model';
import { Subject } from 'rxjs';

export class ProductService {
    private productList = new Subject<Product[]>();
}
