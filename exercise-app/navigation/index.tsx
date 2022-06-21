import { FontAwesome, Entypo } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";
import WorkoutDetailScreen from '../screens/WorkoutDetailScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {

    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    )
}

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
              name="Root" 
              component={BottomTabNavigator} 
              options={{headerShown: false}}
            />
            <Stack.Screen 
              name="WorkoutDetail" 
              component={WorkoutDetailScreen}
              options={{title: "Workout Info"}}
            />
        </Stack.Navigator>
        
    )
}

const Tab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({color, size}) => <FontAwesome name="home" size={size} color={color} />}} />
      <Tab.Screen name="Planner" component={PlannerScreen} options={{tabBarIcon: ({color,size}) => <Entypo name="add-to-list" size={size} color={color} />}}/>
    </Tab.Navigator>
  );
}