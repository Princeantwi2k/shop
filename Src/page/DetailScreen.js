import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import {
  Feather,
  MaterialIcons,
  EvilIcons,
  SimpleLineIcons,
  Entypo,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DetailScreen = (props) => {
  const { color, profile, image, name, title, description, time } =
    props.route.params.item;
    
  const { goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            backgroundColor: color,
            flex: 0.9,
            flexDirection: "row",
            paddingTop: 75,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              goBack();
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <SimpleLineIcons
                name="arrow-left"
                size={30}
                color="#666"
                style={{ marginLeft: 20, paddingTop: 3 }}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.headerContentTitle}>Beauty</Text>
        </View>
        <View style={styles.headerContentRight}>
          <View style={{ flexDirection: "row" }}>
            <Feather
              name="headphones"
              size={30}
              color="#999999"
              style={{ marginRight: 10 }}
            />
            <MaterialIcons
              name="favorite-border"
              size={30}
              color="#999999"
              style={{ marginRight: 10 }}
            />
            <EvilIcons
              name="share-google"
              size={40}
              color="#999999"
              style={{ marginRight: 10 }}
            />
          </View>
        </View>
      </View>
      <ScrollView style={styles.body}>
        <View style={styles.bodyContent}>
        <View style={{ borderStartWidth: 15, borderColor:color, width: "100%",
              height: 150, marginTop:-20,marginLeft: -10 }}>
                  <View style={{ backgroundColor: '#fff'}}>
                      </View>
                  </View>
          <View style={styles.bodyContentImage}>
            <Image source={image} style={styles.image} />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.author}>
            <Image source={profile} style={styles.profile} />
            <Text style={styles.name}>{name}</Text>
            <Entypo name="dot-single" size={24} color="#cccccc" />
            <Text style={styles.time}>{time}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 150,
  },

  headerContent: {
    flex: 0.7,
    flexDirection: "row",
    paddingVertical: 10,
    backgroundColor: "#fff",
  },

  headerContentTitle: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#333",
    paddingLeft: 5,
  },

  headerContentRight: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 65,
  },

    body: {
        flex: 1,
    },

    bodyContent: {
        padding: 10,
        paddingTop: 20,
    },

    bodyContentImage: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -135,
    },

    image: {
        width: "90%",
        height: 290,
    },

    titleContainer: {
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingTop: 10,
    },

    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#333",
    },

    author: {
        flexDirection: "row",
        padding: 10,
        marginTop: 10,
        paddingHorizontal: 20,
    },

    descriptionContainer: {
        padding: 10,
        paddingHorizontal: 20,
    },

    profile: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10,
    },

    name: {
        fontSize: 18,
        color: "#666",
    },

    time: {
        fontSize: 14,
        color: "#999",

    },

    description: {
        fontSize: 14,
        color: "#999",
    },


});