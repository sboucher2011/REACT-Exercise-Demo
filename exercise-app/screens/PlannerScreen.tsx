import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";

export default function PlannerScreen({navigation}: NativeStackHeaderProps) {

    useEffect(() => {
        console.log("Going Home")
    },[])

    return (
        <View>
            <Text>I am planner screen</Text>
            <Button title="Go To Home" onPress={() => navigation.navigate("Home")}/>
        </View>
    )
}