
export type Product = {
  id: string;
  productName: string;
  description: string;
  price: number;
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    productName: 'Item #1',
    description: 'Short Description of the Item #1',
    price: 499,
  },
  {
    id: '2',
    productName: 'Item #2',
    description: 'Short Description of the Item #2',
    price: 999,
  },
  {
    id: '3',
    productName: 'Item #3',
    description: 'Short Description of the Item #3',
    price: 1499,
  },
  {
    id: '4',
    productName: 'Item #4',
    description: 'Short Description of the Item #4',
    price: 349,
  },
];


export function formatCurrency(value: number) {
  return `PHP ${value.toFixed(2)}`;
}

export const DISCOUNT_VOUCHER = 'discount10';
