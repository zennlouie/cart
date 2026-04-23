import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { CartItemRow } from '../components/CartItemRow';
import { CartSummary } from '../components/CartSummary';
import { ProductCard } from '../components/ProductCard';
import { SectionTitle } from '../components/SectionTitle';
import { VoucherInput } from '../components/VoucherInput';
import { PRODUCTS } from '../data/products';
import { useCart } from '../hooks/useCart';

export function ShopScreen() {
  const {
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
  } = useCart();

  return (
    <View className="flex-1 bg-surface-950">
      <ScrollView>
        <View className="p-5">
          <View className="m-3 rounded-3xl border border-white/10 bg-surface-900">
            <View className="p-5">
              <Text className="text-4xl font-black tracking-tight text-white">
                Welcome to Kulay Shop.
              </Text>
              <Text className="m-1 text-base leading-6 text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit blanditiis quo temporibus minus reiciendis maxime tenetur nobis nostrum repellendus quasi!
              </Text>
              <View className="m-1 flex-row gap-3">
                <View className="p-2 rounded-full border border-secondary-200/20 bg-secondary-200/10">
                  <Text className="text-sm font-bold text-secondary-200">
                    {PRODUCTS.length} products
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View className="px-4 py-2 rounded-3xl border border-white/10 bg-surface-900">
            <SectionTitle
              subtitle={`${PRODUCTS.length} static products`}
              title="Products"
            />
            {PRODUCTS.map(product => (
              <ProductCard
                key={product.id}
                onAddToCart={addToCart}
                product={product}
              />
            ))}
          </View>

          <View className="m-3 p-3 rounded-3xl border border-white/10 bg-surface-900">
            <SectionTitle
              subtitle={`Real-time cart count: ${itemCount}`}
              title="Your Cart"
            />

            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <CartItemRow
                  key={`${item.id}-${index}`}
                  item={item}
                  onRemove={removeFromCart}
                />
              ))
            ) : (
              <View className="p-5 rounded-3xl border border-dashed border-secondary-200/20 bg-surface-900">
                <Text className="text-sm text-gray-400">
                  Your cart is empty. Add a product to get started.
                </Text>
              </View>
            )}

            <VoucherInput
              appliedVoucher={appliedVoucher}
              code={voucherCode}
              isVoucherValid={isVoucherValid}
              onApply={applyVoucher}
              onChangeCode={setVoucherCode}
            />

            <View className="my-2">
              <CartSummary
                discountAmount={discountAmount}
                itemCount={itemCount}
                subtotal={subtotal}
                total={total}
              />
            </View>

          </View>
        </View>
      </ScrollView>
    </View>
  );
}
