import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { images } from "../constants";
import { StatusBar } from "expo-status-bar";

import CustomButton from "../components/CustomButton";
import { Link, router } from "expo-router";

const RootLayout = () => {
  return (
    <>
      <SafeAreaView className="h-full bg-primary">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[130px] h-[84px] top-20 mx-auto -mb-20 "
          />
          <View className="w-full h-full items-center space-y-6 justify-center">
            <Image
              source={images.cards}
              resizeMode="contain"
              className="w-[380px] h-[300px]"
            />
            <Text className=" text-3xl font-psemibold text-center text-white ">
              Discover unlimited possibilities with{" "}
              <Text className="text-secondary">Aora</Text>{" "}
            </Text>

            <CustomButton
              title="Continue with Email"
              customStyling={"mt-6"}
              handlePress={() => {
                router.push("/sign-in");
              }}
            />
          </View>
        </ScrollView>
        <StatusBar style="light" />
      </SafeAreaView>
    </>
  );
};

export default RootLayout;
