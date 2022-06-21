import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

type DefaultParams = {
    route: {
        params: {
            slug: string
        }
    }
}

type Navigation = NativeStackHeaderProps & DefaultParams

export default function WorkoutDetailScreen({route}: Navigation) {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{route.params.slug}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
    },
    header: {
      fontSize: 20,
      marginBottom: 20,
      fontWeight: "bold",
    }
  })