import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { formatCurrency, Product } from '../data/products';

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <View className="mb-4 overflow-hidden rounded-3xl border border-white/10 bg-surface-800">
      <View className="border-b border-secondary-200/15 bg-secondary-200/10 px-4 py-3">
        <Text className="text-xs font-bold uppercase tracking-[2px] text-secondary-200">
          Featured Item
        </Text>
      </View>
      <View className="p-4">
        <Text className="text-xl font-black tracking-tight text-white">
          {product.productName}
        </Text>
        <Text className="mt-2 text-sm leading-6 text-gray-300">
          {product.description}
        </Text>
        <View className="mt-5 flex-row items-center justify-between">
          <View>
            <Text className="text-xs font-semibold uppercase tracking-[1.5px] text-gray-500">
              Price
            </Text>
            <Text className="mt-1 text-lg font-black text-secondary-200">
              {formatCurrency(product.price)}
            </Text>
          </View>
          <Pressable
            className="rounded-full bg-secondary-200 px-5 py-3 active:bg-cyan-300"
            onPress={() => onAddToCart(product)}>
            <Text className="text-sm font-bold text-surface-950">Add to Cart</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
