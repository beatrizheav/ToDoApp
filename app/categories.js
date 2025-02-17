import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { containers } from "../styles/containers";
import BackIcon from "../components/BackIcon";
import CustomTitle from "../components/CustomTitle";
import CustomButton from "../components/CustomButton";
import CategoryView from "../components/CategoryView";
import categoryData from "../data/categories.json";
import { categories } from "../styles/screens/categories";
import AddEditCategory from "../components/AddEditCategory";
import axiosInstance from "../api/axiosInstance";
import { useUser } from "../context/UserContext";

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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axiosInstance.get("/categories/userCategories", {
          params: { user: user.id },
        });
        setApiCategoryResponse(data);
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
          data={apiCategoryResponse}
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
          setRefreshing={setRefreshing}
        />
      )}
    </View>
  );
};

export default Categories;
