import { Stack } from "expo-router";

export default function Pertemuan4Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen_4" />
      <Stack.Screen name="SearchPage" />
    </Stack>
  );
}
