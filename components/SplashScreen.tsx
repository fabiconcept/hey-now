import { useEffect } from 'react';
import { Image, StyleSheet, View} from 'react-native';

export default function SplashScreenComponent({ onFinish }: { onFinish: () => void }) {
    useEffect(() => {
        // This will trigger the callback after 2 seconds
        // Adjust the timing as needed for your splash experience
        const timer = setTimeout(() => {
            onFinish();
        }, 2000);
        
        // Clean up the timer if the component unmounts
        return () => clearTimeout(timer);
    }, [onFinish]);
    
    return (
        <View style={styles.container}>
            <Image 
                source={require('../assets/images/splash-screen.png')}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3148EB', // Match your app's background color
    },
    image: { 
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    }
});