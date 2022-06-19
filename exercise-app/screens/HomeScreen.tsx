import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function HomeScreen({navigation}: NativeStackHeaderProps) {

    useEffect(() => {
        console.log("Going Planner")
    },[])

    return (
        <View>
            <Text>I am home screen</Text>
            <Button title="Go To Planner" onPress={() => navigation.navigate("Planner")}/>
        </View>
    )
}