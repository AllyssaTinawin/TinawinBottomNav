import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const Profile = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Profile Picture */}
        <Image
          source={{
            uri: "https://media.licdn.com/dms/image/D4E03AQH_ITTwrazJNA/profile-displayphoto-shrink_800_800/0/1684552657269?e=1716422400&v=beta&t=kRRR8pkv4JS2reTvKrHw2XyKDCd6tQi-J7OWhS80Qm4",
          }}
          style={styles.profileImage}
        />
        {/* Username and Bio */}
        <View style={styles.userInfo}>
          <Text style={styles.username}>Allyssa Tinawin</Text>
          <Text style={styles.bio}>BSIT 3-1</Text>
        </View>
        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>4</Text>
            <Text style={styles.statText}>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>1,948</Text>
            <Text style={styles.statText}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>1,021</Text>
            <Text style={styles.statText}>Following</Text>
          </View>
        </View>

        <View style={styles.grid_container}>
          <View style={styles.grid_row}>
            <Image
              source={{
                uri: "https://picfiles.alphacoders.com/355/thumb-1920-355178.jpg",
              }}
              style={styles.grid_image}
            />
            <Image
              source={{
                uri: "https://www.themoviedb.org/t/p/original/1QRmDIYOMzdcTBaf0Pn09fCi83x.jpg",
              }}
              style={styles.grid_image}
            />
          </View>
          <View style={styles.grid_row}>
            <Image
              source={{
                uri: "https://theinfluencermedia.files.wordpress.com/2014/08/the-wind-rises-poster.jpg",
              }}
              style={styles.grid_image}
            />
            <Image
              source={{
                uri: "https://th.bing.com/th/id/R.c7ce41d0f84610a4c364456591cfc4ba?rik=6%2f7AFFgCCACeLg&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f29000000%2fSpirited-Away-spirited-away-29095841-1024-768.jpg&ehk=6%2frDh75HklVOHrZ4w9PgUd1W3FFLeqCzbY40OUHwkkw%3d&risl=&pid=ImgRaw&r=0",
              }}
              style={styles.grid_image}
            />
            
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  userInfo: {
    alignItems: "center",
    marginBottom: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
  },
  bio: {
    fontSize: 16,
    color: "#777",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  stat: {
    alignItems: "center",
    marginHorizontal: 30,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statText: {
    fontSize: 16,
    color: "#777",
  },
  photosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  photo: {
    width: "48%",
    aspectRatio: 1, // Square aspect ratio for photos
    marginBottom: 10,
  },

  grid_container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  grid_row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  grid_image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});

export default Profile;
