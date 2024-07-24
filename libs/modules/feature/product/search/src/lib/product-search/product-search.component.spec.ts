import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  ProductSearchService,
  mockProducts,
} from '@ecommerce/product-data-access';
import { of } from 'rxjs';
import { ProductSearchComponent } from './product-search.component';

describe('ProductSearchComponent', () => {
  let component: ProductSearchComponent;
  let fixture: ComponentFixture<ProductSearchComponent>;
  let productSearchService: ProductSearchService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSearchComponent, NoopAnimationsModule],
      providers: [
        {
          provide: ProductSearchService,
          useValue: { searchByName: () => of(mockProducts) },
        },
      ],
    }).compileComponents();

    productSearchService = TestBed.inject(ProductSearchService);
    fixture = TestBed.createComponent(ProductSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should debounce when input field is changed', fakeAsync(() => {
    jest.spyOn(productSearchService, 'searchByName');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    setInputValue(input, 'tv');

    expect(productSearchService.searchByName).not.toHaveBeenCalled();

    tick(500);

    expect(productSearchService.searchByName).toHaveBeenCalledWith(input.value);
  }));

  it('should search multiple times', fakeAsync(() => {
    jest.spyOn(productSearchService, 'searchByName');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    setInputValue(input, 'tv');

    tick(500);

    setInputValue(input, 'notebook');

    tick(500);

    expect(productSearchService.searchByName).toHaveBeenCalledTimes(2);
  }));

  it('should prevent identical submissions', fakeAsync(() => {
    jest.spyOn(productSearchService, 'searchByName');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    setInputValue(input, 'tv');

    tick(500);

    setInputValue(input, 'tv');

    tick(500);

    expect(productSearchService.searchByName).toHaveBeenCalledTimes(1);
  }));

  it('should prevent empty submissions', fakeAsync(() => {
    jest.spyOn(productSearchService, 'searchByName');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    setInputValue(input, '');

    tick(500);

    expect(productSearchService.searchByName).not.toHaveBeenCalled();
  }));

  it('should return products observable correctly', () => {
    component.products$.subscribe((products) => {
      expect(products).toEqual(mockProducts);
    });
  });
});

/**
 * Atribuir valores ao componente a ser testado
 * @param { HTMLInputElement } component
 * @param { string } typedValue
 */
export function setInputValue(component: HTMLInputElement, typedValue: string) {
  component.value = typedValue;
  component.dispatchEvent(new Event('input'));
}
