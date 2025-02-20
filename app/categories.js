import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import BackIcon from "../components/BackIcon";
import CustomTitle from "../components/CustomTitle";
import CustomButton from "../components/CustomButton";
import SwipeableView from "../components/SwipeableView";
import AddEditCategory from "../components/AddEditCategory";
import axiosInstance from "../api/axiosInstance";
import { useUser } from "../context/UserContext";
import { categories } from "../styles/screens/categories";
import { containers } from "../styles/containers";

const Categories = () => {
  const [isSheetVisible, setIsSheetVisible] = useState(false);
  const [categoryEdit, setCategoryEdit] = useState("");
  const [action, setAction] = useState("edit");
  const [apiCategoryResponse, setApiCategoryResponse] = useState(null);
  const { user } = useUser();
  const [refreshing, setRefreshing] = useState(false);

  const toggleSheetVisibility = () => {
    setIsSheetVisible((prevState) => !prevState);
  };

  const handleCategoryAction = (actionType, item) => {
    toggleSheetVisibility();
    setAction(actionType);
    actionType === "edit" && setCategoryEdit(item);
  };

  const renderItem = ({ item }) => (
    <SwipeableView
      item={item}
      onPressEdit={() => handleCategoryAction("edit", item)}
      setRefresh={setRefreshing}
      isTask={false}
    />
  );

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axiosInstance.get("/categories/userCategories", {
          params: { user: user.id },
        });
        setApiCategoryResponse(
          data.filter((item) => item.name !== "No category")
        );
      } catch (error) {
        console.error(
          "Error fetching categories:",
          error.response?.data?.message || error.message
        );
      }
    };
    fetchCategories();
  }, [refreshing]);

  return (
    <View style={[containers.safeArea, categories.container]}>
      <BackIcon />
      <View style={categories.title}>
        <CustomTitle text={"Categories"} type={"small"} />
      </View>
      <View style={categories.listContainer}>
        <FlatList
          key={refreshing}
          data={apiCategoryResponse}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={categories.add}>
        <CustomButton
          type={"add"}
          onPress={() => handleCategoryAction("add")}
        />
      </View>
      {isSheetVisible && (
        <AddEditCategory
          isVisible={isSheetVisible}
          toggleVisibility={toggleSheetVisibility}
          action={action}
          categoryEdit={categoryEdit}
          setRefreshing={setRefreshing}
        />
      )}
    </View>
  );
};

export default Categories;
