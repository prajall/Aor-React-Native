import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

const FormField = ({
  title,
  keyboardType,
  customStyles,
  placeholder,
  value,
  handleValueChange,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`${customStyles}`}>
      <Text className=" text-white font-pregular">{title}</Text>
      <View className="bg-white/10 rounded-lg mt-1">
        <TextInput
          value={value}
          onChangeText={handleValueChange}
          className="px-4 py-3  text-white"
          placeholder={placeholder}
          placeholderTextColor="#232533"
          keyboardType={keyboardType}
          secureTextEntry={showPassword && title === "Password"}
          {...props}
        />
      </View>
    </View>
  );
};

export default FormField;
