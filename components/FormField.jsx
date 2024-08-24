import {
  View,
  Text,
  TextInput,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

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
      <View className="bg-white/10 rounded-lg mt-1 flex-row items-center  justify-between border-primary focus:border-secondary border ">
        <TextInput
          value={value}
          onChangeText={handleValueChange}
          className="px-4 py-3  text-white flex-1 "
          // placeholder={placeholder}
          placeholderTextColor="#232533"
          keyboardType={keyboardType}
          secureTextEntry={!showPassword && title === "Password"}
          {...props}
        />
        {title === "Password" && (
          <TouchableOpacity
            onPress={() => {
              setShowPassword(!showPassword);
            }}
            className="p-1 pr-2"
          >
            <Image
              source={showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
