import React, { useRef, useState } from "react";
import { View, Button, Text } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import CustomTitle from "./CustomTitle";
import CustomInput from "./CustomInput";
import InputDatePicker from "./InputDatePicker";
import DropdownInput from "./DropdownInput";

const AddEditTask = ({ action }) => {
  const [date, setDate] = useState(new Date());
  const refRBSheet = useRef();

  const title = action === "add" ? "Add task" : "Edit task";

  return (
    <View style={{ flex: 1 }}>
      <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => refRBSheet.current.open()}
      />
      <RBSheet
        closeOnPressMask={false}
        ref={refRBSheet}
        useNativeDriver={false} // Disable useNativeDriver
        customStyles={{
          container: {
            height: "80%",
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            paddingTop: 20,
            paddingHorizontal: 20,
          },
        }}
        customModalProps={{
          animationType: "slide",
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}
      >
        <CustomTitle text={title} />
        <Button
          title="CLOSE BOTTOM SHEET"
          onPress={() => refRBSheet.current.close()} // Close the bottom sheet when button is pressed
        />
        <CustomInput
          label={"Task"}
          placeholder={"What do you need to do"}
          value={""}
          onChangeValue={""}
          type={"text"}
        />
        <CustomInput
          label={"Description"}
          placeholder={"Description"}
          value={""}
          onChangeValue={""}
          type={"paragraph"}
        />
        <InputDatePicker label={"Due Date"} date={date} setDate={setDate} />
        <DropdownInput
          label={"Priority"}
          type={"priority"}
          value={""}
          onChange={""}
          placeholder={""}
        />
      </RBSheet>
    </View>
  );
};

export default AddEditTask;
