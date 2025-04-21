import { Text } from 'react-native';
import { ButtonProps } from '@/types/button.types';
import clsx from 'clsx';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Pressable } from 'react-native';

export default function Button(props: ButtonProps) {
    const pressed = useSharedValue(0);
    
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                { translateY: withTiming(pressed.value * 4, { duration: 100 }) }
            ],
            opacity: withTiming(pressed.value ? 0.9 : 1, { duration: 100 }),
            // Animated shadow properties
            shadowOffset: {
                width: 0,
                height: withTiming(pressed.value ? 0 : 4, { duration: 100 }),
            },
            shadowOpacity: withTiming(pressed.value ? 0 : 1, { duration: 100 }),
            shadowRadius: 0,
            shadowColor: 'rgba(79,42,235,0.5)',
            elevation: withTiming(pressed.value ? 0 : 4, { duration: 100 }),
        };
    });

    return (
        <Animated.View
            style={[animatedStyles]}
        >
            <Pressable 
                onPressIn={() => {
                    pressed.value = 1;
                }}
                onPressOut={() => {
                    pressed.value = 0;
                }}
                onPress={props.action}
                disabled={props.disabled}
                className={clsx(
                    "bg-themeBlue text-white py-5 px-4 rounded-lg border border-themeBeige",
                    props.className
                )}
            >
                <Text className={clsx(
                    'text-white text-center text-lg',
                    props.textClassname
                )}>{props.title}</Text>
            </Pressable>
        </Animated.View>
    );
}