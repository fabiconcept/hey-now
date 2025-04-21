import { View, Text, Image, Platform } from 'react-native';
import React from 'react';
import InputComponent from '@/components/Authentication/Input';
import Spider from '@/assets/svgs/spider';
import clsx from 'clsx';
import Button from '@/components/Authentication/Button';
import { Link, router } from 'expo-router';

export default function index() {
    return (
        <View className='relative flex-1'>
            <Image
                source={require('@/assets/images/auth-bg.png')}
                className='w-full h-full object-cover'
            />
            <View className={clsx(
                'absolute h-10 z-10',
                Platform.OS === 'ios' ? 'top-[57%] right-[31px]' : 'top-[56.75%] right-[19px]'
            )}>
                <Spider />
            </View>
            <View className={clsx(
                'absolute top-[40%] left-0 h-[550px] w-full flex-1 p-5',
            )}>
                <View className='gap-10 flex-1'>
                    <Text className='text-2xl max-w-[65%] mt-10 px-3'>
                       A world beyond awaits.
                        Enter your number to begin.
                    </Text>
                    <InputComponent type="phone" />
                    <Button
                        title="Howl In"
                        action={() => router.push("/verify-code")}
                        textClassname='text-themeBeige font-semibold'
                        className='w-full -mt-5'
                    />
                </View>
                <Text className='py-24 px-5 text-center'>
                    By Logging in, you agree to our 
                    <Link className='text-themeBlue font-semibold' href="./"> Terms & Conditions </Link> 
                    and 
                    <Link className='text-themeBlue font-semibold' href="./"> Privacy Policies </Link>.
                </Text>
            </View>
        </View>
    )
}