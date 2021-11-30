import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DATA = [
    {
      id: Math.random().toString(),
      title: "Does Dry is January Actually Improve Your Health?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: require("../../images/1.jpeg"),
      time: "4 min read",
      profile: require("../../images/img.jpg"),
      name: "Subash Chandra",
      color: "#ffccdd",
    },
    {
      id: Math.random().toString(),
      title: "How to Seem Like You Always Have Your Shot Together",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: require("../../images/2.jpeg"),
      time: "4 min read",
      profile: require("../../images/img1.jpg"),
      name: "Jonhy Vino",
      color: "#ffe6ee",
    },
    {
      id: Math.random().toString(),
      title: "Does Dry is January Actually Improve Your Health?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: require("../../images/3.jpeg"),
      time: "4 min read",
      profile: require("../../images/img2.jpg"),
      name: "Masudur Rah",
      color: "#aeb795",
    },
    {
      id: Math.random().toString(),
      title: "You do hire a designer to make something. You hire them.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: require("../../images/4.jpeg"),
      time: "4 min read",
      profile: require("../../images/img.jpg"),
      name: "Tasha Walker",
      color: "#d1d6c2",
    },
  ],
  Item = ({ color, image, title, name, time, profile }) => {
    return (
      <View style={styles.item}>
        <View style={styles.itemHeaderLeft}>
          <View
            style={{
              borderTopWidth: 10,
              borderStartWidth: 10,
              borderColor: color,
              width: "70%",
              height: 80,
              margin: -20,
            }}
          >
            <View
              style={{
                margin: 10,
                backgroundColor: "#fff",
                width: "70%",
                height: 80,
              }}
            ></View>
          </View>
          <Image source={image} style={styles.itemHeaderProfile} />
        </View>
        <View style={styles.itemHeaderRight}>
          <Text style={styles.itemHeaderRightText}>{title}</Text>
          <View style={styles.itemBody}>
            <Image source={profile} style={styles.itemBodyImage} />
            <Text style={styles.name}>{name}</Text>
            <Entypo name="dot-single" size={24} color="#cccccc" />
            <Text style={styles.itemBodyText}>{time}</Text>
          </View>
        </View>
      </View>
    );
  };

const HomeTab = () => {
  const { navigate } = useNavigation();
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.product}
        onPress={() => navigate("details", { item: item })}
      >
        <Item {...item} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edf3ed",
  },

  item: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 10,
    height: 160,
  },

  itemHeaderLeft: {
    flex: 0.7,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingLeft: -70,
    backgroundColor: "#fff",
  },

  itemHeaderProfile: {
    width: "80%",
    height: 120,
    marginLeft: -50,
    marginTop: -4,
  },

  itemHeaderRight: {
    flex: 1.3,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: -12,
  },

  itemHeaderLeftInner: {
    width: "50%",
    height: "50%",
    borderWidth: 5,
    borderColor: Item.color,
  },

  itemHeaderRightText: {
    fontSize: 20.5,
    fontWeight: "bold",
    color: "#595959",
  },

  itemBody: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    fontWeight: "bold",
  },

  itemBodyImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },

  name: {
    fontSize: 16,
    color: "#999999",
    marginLeft: 5,
  },
  itemBodyText: {
    fontSize: 12,
    color: "#cccccc",
    marginLeft: 5,
  },

  product: {
    // marginBottom: 10,
  },
});

export default HomeTab;