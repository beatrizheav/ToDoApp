import React, { useState } from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { containers } from "../styles/containers";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colorsTheme } from "../styles/colorsTheme";
import CustomTitle from "../components/CustomTitle";
import CustomButton from "../components/CustomButton";
import CategoryView from "../components/CategoryView";
import categoryData from "../data/categories.json";
import { categories } from "../styles/screens/categories";
import AddEditCategory from "../components/AddEditCategory";

const Categories = () => {
  const [isSheetVisible, setIsSheetVisible] = useState(false);
  const [categoryEdit, setCategoryEdit] = useState("");
  const [action, setAction] = useState("edit");
  const router = useRouter();

  const toggleSheetVisibility = () => {
    setIsSheetVisible((prevState) => !prevState);
  };

  const handleEditCategory = () => {
    toggleSheetVisibility();
    setAction("edit");
  };

  const renderItem = ({ item }) => (
    <CategoryView
      category={item}
      onPress={handleEditCategory}
      setCategoryEdit={setCategoryEdit}
    />
  );

  console.log(categoryEdit);

  return (
    <View style={[containers.safeArea, categories.container]}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons
          name="arrow-back-outline"
          size={24}
          color={colorsTheme.darkBlue}
        />
      </TouchableOpacity>
      <View style={categories.title}>
        <CustomTitle text={"Categories"} type={"small"} />
      </View>
      <View style={categories.listContainer}>
        <FlatList
          data={categoryData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={categories.add}>
        <CustomButton
          type={"add"}
          onPress={() => {
            setAction("add");
            toggleSheetVisibility();
          }}
        />
      </View>
      {isSheetVisible && (
        <AddEditCategory
          isVisible={isSheetVisible}
          toggleVisibility={toggleSheetVisibility}
          action={action}
          categoryEdit={categoryEdit}
        />
      )}
    </View>
  );
};

export default Categories;
