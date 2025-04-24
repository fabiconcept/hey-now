import { TouchableOpacity, View } from 'react-native';
import CameraPlus from '@/assets/svgs/cameraPlus';
import CrossedBones from '@/assets/svgs/crossedBones';
import AnimatedPressable from '../Global/AnimatedPress';

export default function ChoosePhoto() {
    return (
        <View className='h-36 w-36 mx-auto mb-5 rounded-full bg-white border border-themeBlue items-center justify-center'>
            <AnimatedPressable>
                <View className='scale-75'>
                    <CameraPlus />
                </View>
            </AnimatedPressable>
            <TouchableOpacity className='absolute -bottom-4 left-1/2 -translate-x-1/2'>
                <AnimatedPressable containerClassName='ml-1' activeOpacity={0.8}>
                    <CrossedBones />
                </AnimatedPressable>
            </TouchableOpacity>
        </View>
    )
}