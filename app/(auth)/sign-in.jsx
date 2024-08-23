import { View, Text, ScrollView, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import { isSearchBarAvailableForCurrentPlatform } from "react-native-screens";
import { images } from "../../constants";
import CustomButton from "../../components/CustomButton";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {};

  return (
    <SafeAreaView className="bg-primary h-full text-white p-2">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View>
          <Image source={images.logo} className="w-[115px] h-[34px] mx-auto" />
        </View>
        <View className="mt-6 text-center">
          <Text className="text-3xl font-psemibold text-secondary text-center ">
            Log In
          </Text>
          <FormField
            customStyles={"mt-6"}
            title={"Email"}
            value={form.email}
            placeholder={"email"}
            handleValueChange={(e) => {
              setForm({ ...form, email: e });
            }}
          />
          <FormField
            customStyles={"mt-6"}
            title={"Password"}
            value={form.password}
            placeholder={"password"}
            handleValueChange={(e) => {
              setForm({ ...form, password: e });
            }}
          />
          <CustomButton
            customStyling={"w-full mt-6"}
            title={"Login"}
            handlePress={handleSubmit}
            isLoading={isSubmitting}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
