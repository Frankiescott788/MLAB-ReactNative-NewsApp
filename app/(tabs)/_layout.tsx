import { AuthContext } from '@/context/auth';
import { Redirect, Tabs } from 'expo-router';
import React, { useContext } from 'react';

export default function TabLayout() {

  const { isAuthenticated } = useContext(AuthContext);

  if(!isAuthenticated) {
    return <Redirect href={"/(auth)/signup"}/>
  }

  return (
    <Tabs screenOptions={{ headerShown : false }}>
      <Tabs.Screen name='index'/>
    </Tabs>
  );
}
