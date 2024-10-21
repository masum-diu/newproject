import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
    return (
        <SafeAreaView className="p-4">
            <View >
                <Text>Home</Text>
            </View>
        </SafeAreaView>

    )
}

export default HomeScreen