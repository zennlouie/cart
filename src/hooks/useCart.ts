import { useEffect, useMemo, useState } from 'react';
import { DISCOUNT_VOUCHER, Product } from '../data/products';

export function useCart() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [voucherCode, setVoucherCode] = useState('');
  const [appliedVoucher, setAppliedVoucher] = useState('');
  const [isVoucherValid, setIsVoucherValid] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => [...prevItems, product]);
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prevItems => {
      const itemIndex = prevItems.findIndex(item => item.id === productId);

      return prevItems.filter((_, index) => index !== itemIndex);
    });
  };

  const applyVoucher = () => {
    const normalizedCode = voucherCode.trim().toLowerCase();
    setAppliedVoucher(normalizedCode);
  };

  useEffect(() => {
    setIsVoucherValid(appliedVoucher === DISCOUNT_VOUCHER);
  }, [appliedVoucher]);

  const itemCount = cartItems.length;

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  }, [cartItems]);

  const discountAmount = useMemo(() => {
    return isVoucherValid ? subtotal * 0.1 : 0;
  }, [isVoucherValid, subtotal]);

  const total = useMemo(() => {
    return subtotal - discountAmount;
  }, [discountAmount, subtotal]);

  return {
    appliedVoucher,
    cartItems,
    discountAmount,
    isVoucherValid,
    itemCount,
    subtotal,
    total,
    voucherCode,
    addToCart,
    applyVoucher,
    removeFromCart,
    setVoucherCode,
  };
}
