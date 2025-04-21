import { TouchableOpacity, View } from 'react-native';
import CameraPlus from '@/assets/svgs/cameraPlus';
import CrossedBones from '@/assets/svgs/crossedBones';

export default function ChoosePhoto() {
    return (
        <View className='h-36 w-36 mx-auto mb-5 rounded-full bg-white border border-themeBlue items-center justify-center'>
            <View className='scale-75'>
                <CameraPlus />
            </View>
            <TouchableOpacity className='absolute -bottom-4 left-1/2 -translate-x-1/2'>
                <CrossedBones />
            </TouchableOpacity>
        </View>
    )
}