import { useEffect, useState } from 'react'
import * as Font from "expo-font"
import { initWorkouts } from '../storage/workout'

export default function useCachedResources() {
    const [isLoadingCompleted, setLoadingComplete] = useState(true)

    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                await initWorkouts();
                await Font.loadAsync({
                    "monsterrat": require("../assets/fonts/Montserrat-Regular.ttf"),
                    "monsterrat-bold": require("../assets/fonts/Montserrat-Bold.ttf"),
                })
            } catch (e) {
                console.warn(e)
            } finally {
                setLoadingComplete(true)
            }
        }

        loadResourcesAndDataAsync()
    }, [isLoadingCompleted])

    return isLoadingCompleted;
}