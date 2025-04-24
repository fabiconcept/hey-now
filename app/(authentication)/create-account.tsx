import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import BlinkingPaw from '@/components/Global/BlinkingComponent';
import InputComponent from '@/components/Authentication/Input';
import Button from '@/components/Authentication/Button';
import ChoosePhoto from '@/components/Authentication/ChoosePhoto';

export default function createAccount() {
    return (
        <View className='relative flex-1 bg-themeBlue'>
            <Image
                source={require('@/assets/images/verify-code.png')}
                className='w-full h-full object-cover mt-12'
            />

            <View className='absolute top-0 left-0 h-full w-full items-end justify-center'>
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
                <View className='p-5 gap-4 w-full h-full absolute bottom-0'>
                    <Text className='text-2xl max-w-[65%] mt-32 px-3'>
                    Choose your name, tell your story, and let the world hear your howl.
                    </Text>

                    <View className='gap-4'>
                        <Text className='text-center px-5 mt-12 text-gray-400'>Choose your moonlit form</Text>
                        <ChoosePhoto />

                        <TextInput 
                            className='w-full px-5 py-5 border border-themeBlue bg-white rounded-lg' 
                            placeholder='Your true name echoes in the dark.' 
                        />
                        <TextInput 
                            className='w-full px-5 py-5 h-40 border border-themeBlue bg-white rounded-lg' 
                            placeholder='Your true name echoes in the dark.' 
                            multiline
                            numberOfLines={4}
                        />
                    </View>
                    <Button 
                        title="Howl into the Wild" 
                        action={() => {}}
                    />
                </View>
            </View>
        </View>
    )
}