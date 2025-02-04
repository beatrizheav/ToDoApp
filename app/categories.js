import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { containers } from "../styles/containers";
import BackIcon from "../components/BackIcon";
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

  return (
    <View style={[containers.safeArea, categories.container]}>
      <BackIcon />
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
