import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

type VoucherInputProps = {
  code: string;
  appliedVoucher: string;
  isVoucherValid: boolean;
  onApply: () => void;
  onChangeCode: (value: string) => void;
};

export function VoucherInput({
  code,
  appliedVoucher,
  isVoucherValid,
  onApply,
  onChangeCode,
}: VoucherInputProps) {

  const hasAttemptedApply = appliedVoucher.length > 0;
  return (
    <View className="rounded-3xl border border-secondary-200/20 bg-secondary-200/10 my-3 p-4">
      <Text className="text-base font-black text-white">
        Voucher Code
      </Text>
      <Text className="mt-1 text-sm leading-5 text-gray-300">
        Apply `discount10` to unlock a 10% discount.
      </Text>
      <View className="mt-4 flex-row items-center">
        <TextInput
          autoCapitalize="none"
          className="mr-3 flex-1 rounded-2xl border border-white/10 bg-surface-800 px-4 py-3 text-white"
          onChangeText={onChangeCode}
          placeholder="Enter discount10"
          placeholderTextColor="#94a3b8"
          value={code}
        />
        <Pressable
          className="rounded-2xl bg-secondary-200 px-4 py-3 active:bg-cyan-300"
          onPress={onApply}>
          <Text className="font-bold text-surface-950">Apply</Text>
        </Pressable>
      </View>
      {hasAttemptedApply ? (
        <Text
          className={`mt-3 text-sm font-medium ${isVoucherValid ? 'text-secondary-200' : 'text-pink-300'}`}>
          {isVoucherValid
            ? 'Voucher applied. 10% discount added.'
            : 'Voucher not recognized.'}
        </Text>
      ) : null}
    </View>
  );
}
