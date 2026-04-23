import React from 'react';
import { Text, View } from 'react-native';
import { formatCurrency } from '../data/products';

type CartSummaryProps = {
  itemCount: number;
  subtotal: number;
  discountAmount: number;
  total: number;
};

export function CartSummary({
  itemCount,
  subtotal,
  discountAmount,
  total,
}: CartSummaryProps) {
  return (
    <View className="overflow-hidden rounded-3xl border border-white/10 bg-surface-800">
      <View className="bg-secondary-200 px-5 py-3">
        <Text className="text-xs font-black uppercase tracking-[2px] text-surface-950">
          Checkout
        </Text>
      </View>
      <View className="p-5">
        <Text className="text-2xl font-black text-white">
          Cart Summary
        </Text>
      <View className="mt-4">
        <View className="flex-row items-center justify-between">
          <Text className="text-gray-300">Items</Text>
          <Text className="font-medium text-white">{itemCount}</Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-gray-300">Subtotal</Text>
          <Text className="font-medium text-white">
            {formatCurrency(subtotal)}
          </Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-gray-300">Discount</Text>
          <Text className="font-medium text-white">
            {formatCurrency(discountAmount)}
          </Text>
        </View>
        <View className="mt-2 border-t border-white/10 pt-3">
          <View className="flex-row items-center justify-between">
            <Text className="text-base font-semibold text-white">Total</Text>
            <Text className="text-xl font-black text-secondary-200">
              {formatCurrency(total)}
            </Text>
          </View>
        </View>
      </View>
      </View>
    </View>
  );
}
