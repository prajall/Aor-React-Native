import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="bg-indigo-950">
      <FlatList
        data={[
          { name: "Hello", id: 1 },
          { name: "Hello1", id: 2 },
          { name: "Hello2", id: 3 },
          { name: "Hello3", id: 4 },
        ]}
        renderItem={({ item }) => {
          return (
            <View>
              <Text className="text-gray-100">{item.name}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => {
          return (
            <View>
              <Text className="text-white text-3xl font-psemibold">
                Welcome, Prajal
              </Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
