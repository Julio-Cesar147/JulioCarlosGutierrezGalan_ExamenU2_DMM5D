import TabNav from "../components/tabNav";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inicio from "../screens/Inicio";
import Perfil from "../screens/Perfil";
import Busqueda from "../screens/Busqueda";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator()

/*export default function MainRoutes () {
    return (
        <Stack.Navigator initialRouteName="Tab">
                <Stack.Screen name="Tab" component={TabNav()}/>
        </Stack.Navigator>
        
    )
    
}*/