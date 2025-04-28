import Howler from '@/assets/svgs/icons/Howler';
import {
    MaterialTopTabNavigationOptions,
    MaterialTopTabNavigationEventMap,
    createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
import { withLayoutContext } from 'expo-router';
import { Platform, Text, View } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import clsx from 'clsx';
import Globe from '@/assets/svgs/icons/Globe';
import Scroll from '@/assets/svgs/icons/Scroll';

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
    MaterialTopTabNavigationOptions,
    typeof Navigator,
    TabNavigationState<ParamListBase>,
    MaterialTopTabNavigationEventMap
>(Navigator);


const _layout = () => {
    return (
        <MaterialTopTabs
            screenOptions={{
                tabBarStyle: {
                    position: "absolute",
                    bottom: 15,
                    left: "50%",
                    transform: [{ translateX: "-50%" }],
                    width: Platform.OS === "ios" ? "90%" : "95%",
                    height: 76,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: "#E5E7EB",
                    overflow: "hidden",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 1,
                    elevation: 5,
                },
                tabBarShowLabel: false,
                tabBarIndicatorStyle: {
                    backgroundColor: "blue",
                    height: 3,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    position: "absolute",
                    top: 0,
                },
            }}
        >
            <MaterialTopTabs.Screen
                name="Chats"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View 
                            className={clsx(
                                "h-[82px] items-center flex-col w-20 flex",
                                focused ? "" : "pt-1"
                            )}
                        >
                            {!focused && <View className="bg-[#3148EB] items-center justify-center h-6 aspect-square rounded-full p-1 absolute top-0 -right-1">
                                <Text className="text-xs text-white">9+</Text>
                            </View>}
                            <View className={focused ? "scale-100" : "scale-125"}>
                                <Howler fill={focused ? "#3148EB" : "#999"} />
                            </View>
                            {focused && <Text className={"text-blue-500 whitespace-nowrap w-full -mt-1 text-center"}>Howls</Text>}
                        </View>
                    ),
                    tabBarShowLabel: false
                }}
            />
            <MaterialTopTabs.Screen
                name="Calls"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View 
                            className={clsx(
                                "h-[82px] items-center flex-col w-20 flex",
                                focused ? "" : "pt-1"
                            )}
                        >
                            {!focused && <View className="bg-[#3148EB] items-center justify-center h-6 aspect-square rounded-full p-1 absolute top-0 -right-1">
                                <Text className="text-xs text-white">9+</Text>
                            </View>}
                            <View className={focused ? "scale-100" : "scale-125"}>
                                <Scroll fill={focused ? "#3148EB" : "#999"}  />
                            </View>
                            {focused && <Text className={"text-blue-500 whitespace-nowrap w-full -mt-1 text-center"}>Summons</Text>}
                        </View>
                    ),
                }}
            />
            <MaterialTopTabs.Screen
                name="Story"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View 
                            className={clsx(
                                "h-[82px] items-center flex-col w-20 flex ",
                                focused ? "" : "pt-1"
                            )}
                        >
                            <View className={focused ? "scale-100" : "scale-125"}>
                                <Globe fill={focused ? "#3148EB" : "#999"}  />
                            </View>
                            {focused && <Text className={"text-blue-500 whitespace-nowrap w-full -mt-1 text-center"}>Tales</Text>}
                        </View>
                    ),
                }}
            />
        </MaterialTopTabs>
    )
}

export default _layout