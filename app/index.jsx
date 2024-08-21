import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Slot } from "expo-router";

const RootLayout = () => {
  return (
    <>
      <Text className="text-3xl text-red-400">Hello</Text>
      <Link href={"/profile"}>Profile</Link>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
