import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="lea"
        options={{
          title: 'Lea',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="woman" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="hugo"
        options={{
          title: 'Hugo',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="man" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
