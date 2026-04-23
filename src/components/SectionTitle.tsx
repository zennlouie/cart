import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';

type SectionTitleProps = {
  title: string;
  subtitle?: ReactNode;
};

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <View className="mb-4">
      <Text className="text-2xl font-black tracking-tight text-white">
        {title}
      </Text>
      {subtitle ? (
        <Text className="mt-1 text-sm leading-5 text-gray-400">
          {subtitle}
        </Text>
      ) : null}
    </View>
  );
}
