import Paw from '@/assets/svgs/paw';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

interface BlinkingComponentProps {
    minDelay?: number;
    maxDelay?: number;
    minOpacity?: number;
    maxOpacity?: number;
    animationDuration?: number;
    children?: React.ReactNode;
    className?: string;
}

export default function BlinkingPaw({
    minDelay = 500,
    maxDelay = 3000,
    minOpacity = 0,
    maxOpacity = 1,
    animationDuration = 300,
    children,
    className
}: BlinkingComponentProps) {
    // Shared value for opacity
    const opacity = useSharedValue(0);

    // Function to get random number between min and max
    const getRandomNumber = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // Function to get random opacity value between minOpacity and maxOpacity
    const getRandomOpacity = () => {
        return getRandomNumber(minOpacity * 100, maxOpacity * 100) / 100;
    };

    // Function to handle blinking
    const blink = () => {
        const randomDelay = getRandomNumber(minDelay, maxDelay);
        const randomOpacity = getRandomOpacity();
        
        // Always start from opacity 0
        opacity.value = 0;
        
        // Animate to random opacity
        opacity.value = withTiming(randomOpacity, { duration: animationDuration });
        
        // Schedule next blink after random delay
        setTimeout(() => {
            blink();
        }, randomDelay);
    };

    // Start blinking effect
    useEffect(() => {
        blink();
        
        // Cleanup function
        return () => {
            // Clear any pending timeouts if component unmounts
        };
    }, []);

    // Animated style for the view
    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
        };
    });

    return (
        <Animated.View className={clsx(
            "flex items-center justify-center",
            className
        )} style={animatedStyle}>
            <View className='opacity-30'><Paw/></View>
        </Animated.View>
    );
}