import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const Home = () => {
  return (
    <ScrollView style={styles.container} showsHorizontalScrollIndicator="false">
      {/* Post 1 */}
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Image
            source={{
              uri: "https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.6435-1/91084366_3331004163595123_8677568585016541184_n.jpg?stp=dst-jpg_s320x320&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeECsRPMYp1fTSupwVjKuq8PLbwzW8Vvm7UtvDNbxW-btWU6KLbHX6fpfOqR0fvQG8Udtx091wJooyJa7esbBdok&_nc_ohc=CYZGKimZeHoAX8MmSNx&_nc_ht=scontent.fmnl17-1.fna&oh=00_AfB-cmcv1l9HyIpkwK30VSbAZmN-4h-gJ0ZPQiNmcTAD4A&oe=6620F40D",
            }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Vincent CuaRIZZma pogii</Text>
        </View>

        <Text style={styles.postContent}>Senti lang #sad @works at sa puso mo</Text>

        <Image
          source={{
            uri: "https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.18169-9/15355835_1492782424083982_5950839957430221979_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH684-T2twPdCGQtH8EGQ7LwYClmgttYQXBgKWaC21hBfa55rN-sjiztsyWbbqh8ijgNaMG6QGGMwFMYzyWQCAF&_nc_ohc=E_8vZ3DJ3OUAX8jq9QM&_nc_ht=scontent.fmnl17-1.fna&oh=00_AfDpeEF3BYrW3Mzxq7EJqZ0cuksMMXn7vl5Ikz-FGfF7Ow&oe=6620FF13",
          }}
          style={styles.postImage}
        />

        <View style={styles.postFooter}>
          <Text style={styles.likes}>1m Likes</Text>
          <Text style={styles.comments}>100 Comments</Text>
        </View>
      </View>

      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Image
            source={{
              uri: "https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-1/292129276_765704401251788_4672371069152692822_n.jpg?stp=dst-jpg_s320x320&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFEzcIITV7JkZD2uCKcScKbgYFwGot6_fuBgXAai3r9-75ne1pUxA4z4_7FC49TW0pwB-sHempYo8qlND9Li0CQ&_nc_ohc=4YFAjUcb_EsAX_kulWQ&_nc_ht=scontent.fmnl17-5.fna&oh=00_AfDWFuu2cSl7FNoM8q00jHUFdD8ha402mgJA6DetYjCMHg&oe=65FE8627",
            }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Bhoxs MJ Angeles</Text>
        </View>

        <Text style={styles.postContent}>hbd to me #walAng_nakaAl4l4_xDD</Text>

        <Image
          source={{
            uri: "https://scontent.fcrk1-2.fna.fbcdn.net/v/t1.6435-9/86735594_3068571206496039_1003760657671127040_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE-9sT5P9uU-MgtYAwYdU21pVzLvPJKAa6lXMu88koBrtTSI70OKs9nsgS_Ju3oBY0_bfU8k3i2-eo0hB5r1G17&_nc_ohc=3Wu_j3fK6C0AX9Amdp1&_nc_ht=scontent.fcrk1-2.fna&oh=00_AfCZx4OvGkZ_YouQ-J2zixYRmxyZHfZSeqRLeFngF4S_hw&oe=6620D4DD",
          }}
          style={styles.postImage}
        />

        <View style={styles.postFooter}>
          <Text style={styles.likes}>2.5k Likes</Text>
          <Text style={styles.comments}>no comments</Text>
        </View>
      </View>

      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Image
            source={{
              uri: "https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-1/432686329_3276337872668429_4900389073470920701_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEWEoY84EajiN3YwOD_1smdxyDJPpJUwMrHIMk-klTAysQJTaen_5uJmKDaGFKuIpMdgVWdcyMHS3nAGJZcNra0&_nc_ohc=TwJghG_77yIAX8gdK9x&_nc_ht=scontent.fmnl17-2.fna&oh=00_AfAXkyHZxjSABwJCzLWhymCM8VveoV-oFwHrAA_-QOT0gA&oe=65FDFBB6",
            }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Zebaj Allidnara</Text>
        </View>

        <Text style={styles.postContent}>Tara kain? or ikaw kainin q? jok xD heheh peace yow </Text>

        <Image
          source={{
            uri: "https://scontent.fmnl17-5.fna.fbcdn.net/v/t1.6435-9/38813767_2030732137238881_7905546272235323392_n.jpg?stp=dst-jpg_p720x720&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGQRhiH0dM1ATn0rtCKnKNIdVTQZEJ2pNJ1VNBkQnak0kGjfAAWD6Bdn2kwOUhuApXbj56eDUTL9scRGQXSUUxY&_nc_ohc=oogIVt3LNUkAX88ce32&_nc_ht=scontent.fmnl17-5.fna&oh=00_AfBRwdW7bBqRNqGPqt6MKJD7wEvzFYJGUNFJnFo4F1dDug&oe=6620E9EB",
          }}
          style={styles.postImage}
        />

        <View style={styles.postFooter}>
          <Text style={styles.likes}>1k Likes</Text>
          <Text style={styles.comments}>25 Comments</Text>
        </View>
      </View>

      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Image
            source={{
              uri: "https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-1/395050810_1051436886201623_8300993850108871876_n.jpg?stp=dst-jpg_s320x320&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGFrDr1jzhIVdHJBtZ_kkz5ddQN6m-o0Kh11A3qb6jQqJ6r09yKah9H8rccDkUn_d3vKmpluyp-Kw90vI8-AuE9&_nc_ohc=5DtG8VYptrMAX_dTVNA&_nc_ht=scontent.fmnl17-5.fna&oh=00_AfDiSRV7K98FRcqL4sr4MMYfYhgNUCu4Yjrnj1DgTZlV3w&oe=65FDEDCA",
            }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Ako To Sii Kyle Ar4ndilla</Text>
        </View>

        <Text style={styles.postContent}>hahaha throwbAck Tuesday Lol : PP </Text>

        <Image
          source={{
            uri: "https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.18169-9/227343_100782410013498_8366197_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFczYCnDj4Vx1myifhXMtXv1ynfGhnToxrXKd8aGdOjGk4rb9KkvyABZCeB0eCJCqdxOF1qcEaLnXcM9IW_66MO&_nc_ohc=LhYUx2NiFRQAX-WWtzK&_nc_ht=scontent.fmnl17-2.fna&oh=00_AfCUbruS6EHBxvyJ1QAVv3d6T4w8Unej5KUUm8d1n_cW-A&oe=6620D72C",
          }}
          style={styles.postImage}
        />

        <View style={styles.postFooter}>
          <Text style={styles.likes}>1.1k Likes</Text>
          <Text style={styles.comments}>Comments are turned off</Text>
        </View>
        <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Image
            source={{
              uri: "https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-1/278025057_5356787914341080_2327032269693168107_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEtOYavaxLU6NlVd2xvlAXzrc0o1MLpCbWtzSjUwukJtWWUQEyrisgrYKHVx8ZwmERJno28gyi3NhRuzYUe3puH&_nc_ohc=hvGQn4YW92YAX_P4I8v&_nc_ht=scontent.fmnl17-5.fna&oh=00_AfBrU1Tp4NyUFBwMgqz9Y38I4PchO7ypaN_6nZenOX51FQ&oe=65FE9604",
            }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Santos Justine </Text>
        </View>

        <Text style={styles.postContent}> init nUh????? swimming? #HolYw33k #pinarusahanSiPapaJesus</Text>

        <Image
          source={{
            uri: "https://scontent.fmnl17-4.fna.fbcdn.net/v/t1.6435-9/45266162_2175278255825411_3959844140493045760_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeElAGHRrwGp2TR8PEHE-_Q8NEu9_EMLa8U0S738QwtrxRecTzLtdrAnWceMaC45NunbAXUQFcwqi-qhlSvl-4FW&_nc_ohc=ybmxiloXbi4AX_reYR9&_nc_ht=scontent.fmnl17-4.fna&oh=00_AfDAQuKVXuB5oLbDxOA1lQ25OpDY705hpdGZzGJlpaQ8AA&oe=6620D834",
          }}
          style={styles.postImage}
        />

        <View style={styles.postFooter}>
          <Text style={styles.likes}>800 Likes</Text>
          <Text style={styles.comments}>8 Comments</Text>
        </View>
        <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Image
            source={{
              uri: "https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-1/426061860_3694919080834142_8200814738624541255_n.jpg?stp=dst-jpg_s320x320&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGrhRqvMnhvarki-o2bBy8HsXX4bXz-63qxdfhtfP7reqOJArO5cTc8eFyEdhdupbjTlAYNcifltQsh11f1rT9H&_nc_ohc=JZnQ8uST6B0AX_Z8-bL&_nc_ht=scontent.fmnl17-2.fna&oh=00_AfAMJxXSr_vQjH3s0e4-FG3xoGupWHsLimR_mbI-mqW0sQ&oe=65FDFCF2",
            }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Joeffrey III</Text>
        </View>

        <Text style={styles.postContent}>Hai poH! tamBay lng </Text>

        <Image
          source={{
            uri: "https://scontent.fcrk1-2.fna.fbcdn.net/v/t1.6435-9/130691583_3797038990330542_7809348249554841334_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEDk3YCVV40POMMlk6aw4PwYQoIb-dAbFphCghv50BsWlIfE2gqZXsSi-ao0meXi9zaWBl2kbu54vs2ahcNtIdk&_nc_ohc=wzq1rA0y0KEAX83UDy5&_nc_ht=scontent.fcrk1-2.fna&oh=00_AfCqwlIWHtlIW7UPW_HiubweSgG4Y-mJemv_HrSJjMbxsg&oe=6620DB7D",
          }}
          style={styles.postImage}
        />

        <View style={styles.postFooter}>
          <Text style={styles.likes}>76 Likes</Text>
          <Text style={styles.comments}>10 Comments</Text>
        </View>
        </View>
      </View>
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Image
            source={{
              uri: "https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-1/416904740_2346939105695785_5019847907608402639_n.jpg?stp=dst-jpg_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEq_f9KzH4Ar4oMpmpICiGKDXgjK4EuzA8NeCMrgS7MDx8c8P1OWzryXkvKcMmjJupsnPRVhUd_qtuueBfAwLzh&_nc_ohc=y_EXZaRaAZ0AX-sfhwD&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl17-5.fna&oh=00_AfBkY5Z52LZFA1PQj2VGsPbLVIsMtRjXhHatO7RsRwZKKQ&oe=65FF42DC",
            }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Ayane "AYA" Marie Carmona Piadozo (Ganda)</Text>
        </View>

        <Text style={styles.postContent}>Pa like po plzzs </Text>

        <Image
          source={{
            uri: "https://scontent.fcrk1-2.fna.fbcdn.net/v/t1.18169-9/15781572_115183648985165_3860777419901100291_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFOHpaizAdugzTMYOyuFuzk3cb1oR6MCivdxvWhHowKK7ROu_uejx0X7-FbKaLK2Bj3QjwxIt2ElliK1u8Kz1Bg&_nc_ohc=94nR0T3Ec0AAX-gzlzJ&_nc_ht=scontent.fcrk1-2.fna&oh=00_AfBhs0J8erZoBdZINRH3q40pxyzTqPOIr2LRT5bkUWUrWg&oe=662105C0",
          }}
          style={styles.postImage}
        />

        <View style={styles.postFooter}>
          <Text style={styles.likes}>1b Likes</Text>
          <Text style={styles.comments}>5k Comments</Text>
        </View>
      </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  postContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    fontWeight: "bold",
  },
  postContent: {
    marginBottom: 10,
  },
  postImage: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  postFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  likes: {
    fontWeight: "bold",
  },
  comments: {
    color: "#333",
  },
  commentsContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    padding: 10,
  },
  comment: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 5,
    marginBottom: 5,
  },
  commentText: {
    color: "#333",
  },
});

export default Home;
