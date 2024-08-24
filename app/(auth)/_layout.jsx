import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import SignIn from "./sign-in";
import SignUp from "./sign-up";

const AuthLayout = () => {
  return (
    <>
      <Stack
        screenOptions={{ headerShown: false }}
        className="flex-1 items-center justify-center"
      >
        <Stack.Screen name="sign-in" screenOptions={{ headerShown: false }} />
      </Stack>
      {/* <StatusBar backgroundColor="#161622" style="light" /> */}
    </>
  );
};

export default AuthLayout;
