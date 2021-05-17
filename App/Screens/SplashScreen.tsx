import React, { useRef, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Video } from 'expo-av'

export const SplashScreen: React.FC = () => {

    const video = useRef(null)

    return (
        <Video
            ref={video}
            style={styles.video}
            source={require('../../assets/splash.mp4')}
            resizeMode="cover"
            isLooping={false}
            shouldPlay={true}



        />
    )
}

const styles = StyleSheet.create({
    video: {
        height: "100%",
        width: "100%"
    }
}
);
