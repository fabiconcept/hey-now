import { Stack } from "expo-router";

export default function _layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="verify-code" options={{ headerShown: false }} />
            <Stack.Screen name="create-account" options={{ headerShown: false }} />
        </Stack>
    )
}