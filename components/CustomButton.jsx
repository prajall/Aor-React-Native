import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  customStyling,
  textStyling,
  handlePress,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      className={`justify-center px-6 py-4 rounded-md bg-secondary items-center min-h-[50px] ${customStyling} ${
        isLoading ? "opacity-50" : ""
      }`}
      onPress={handlePress}
    >
      <Text className={`text-md font-psemibold ${textStyling} `}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
