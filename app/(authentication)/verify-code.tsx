import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import BlinkingPaw from '@/components/BlinkingComponent';
import InputComponent from '@/components/Authentication/Input';
import Button from '@/components/Authentication/Button';
import { router } from 'expo-router';

export default function verifyCode() {
    return (
        <View className='relative flex-1 bg-themeBlue'>
            <Image
                source={require('@/assets/images/verify-code.png')}
                className='w-full h-full object-cover mt-12'
            />

            <View className='absolute top-0 left-0 h-full w-full items-center justify-center'>
                <BlinkingPaw 
                    animationDuration={600}
                    className='w-10 h-10 absolute bottom-10 right-10 -rotate-12'
                />
                <BlinkingPaw 
                    animationDuration={600}
                    className='w-10 h-10 absolute bottom-10 left-32 rotate-[60deg] scale-75'
                />
                <BlinkingPaw 
                    animationDuration={600}
                    className='w-10 h-10 absolute bottom-60 left-10 rotate-[23deg] scale-[0.9]'
                />
                <BlinkingPaw 
                    animationDuration={600}
                    className='w-10 h-10 absolute bottom-72 right-16 rotate-[2deg] scale-[0.8]'
                />
                <BlinkingPaw 
                    animationDuration={600}
                    className='w-10 h-10 absolute top-28 -left-1 rotate-[-12deg] scale-[1]'
                />
                <BlinkingPaw 
                    animationDuration={600}
                    className='w-10 h-10 absolute top-48 left-52 rotate-[-47deg] scale-[0.85]'
                />
                <BlinkingPaw 
                    animationDuration={600}
                    className='w-10 h-10 absolute top-[35%] left-8 rotate-[-12deg] scale-[0.85]'
                />
                <BlinkingPaw 
                    animationDuration={600}
                    className='w-10 h-10 absolute top-[40%] right-8 rotate-[-105deg] scale-[0.85]'
                />

                {/* Input and Button */}
                <View className='px-5 gap-4'>
                    <Text className='text-center px-5 text-lg'>
                        Check your messages and enter the code to unlock the night.
                    </Text>
                    <InputComponent type="code" />
                    <Button action={() => router.push("/(authentication)/create-account")} title="Unlock the Night" />
                </View>
                <Text className='text-center px-5 text-lg absolute bottom-10 left-1/2 -translate-x-1/2'>Resend Howl in <Text className='text-themeBlue'>29s</Text></Text>
            </View>
        </View>
    )
}