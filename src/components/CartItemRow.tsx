import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { formatCurrency, Product } from '../data/products';

type CartItemRowProps = {
  item: Product;
  onRemove: (productId: string) => void;
};

export function CartItemRow({ item, onRemove }: CartItemRowProps) {
  return (
    <View className="my-1 flex-row items-center justify-between rounded-3xl border border-white bg-surface-800 p-4">
      <View className="mx-1">
        <Text className="text-base font-bold text-white">
          {item.productName}
        </Text>
        <Text className="text-sm text-gray-400">
          {formatCurrency(item.price)}
        </Text>
      </View>
      <Pressable
        className="p-2 rounded-full border border-secondary-200/20 bg-secondary-200/10 active:bg-secondary-200/20"
        onPress={() => onRemove(item.id)}>
        <Text className="text-sm font-bold text-red-600">Remove</Text>
      </Pressable>
    </View>
  );
}
