//1.import component raect-native
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
//2.buat component
// component adalah function yang return jsx
const App = () => {
  return (
    //jsx
    //view as a container
    <>
      <View style={styles.container}>
        <Text style={styles.title}>My Biodata</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.subTitle}>My Picture</Text>
        <Image style={styles.img1} source={require('./picture/girl.png')} />
        <Text style={styles.subTitle}>About Me:</Text>
        <Text style={styles.subTitleA}>Name: Natasha Kountur</Text>
        <Text style={styles.subTitleB}>Birth Date: 31 January 2003</Text>
        <Text style={styles.subTitleC}>Born in: Bandung</Text>
        <Text style={styles.subTitleC1}>Age: 21</Text>
        <Text style={styles.subTitleC2}>Golongan darah: B</Text>
        <Text style={styles.subTitleC3}>Agama: Kristen Advent</Text>
        <Text style={styles.subTitleD}>Favorite Food: Noodle</Text>
        <Text style={styles.subTitleD1}>I have 2 pet name:</Text>
        <Image
          style={styles.img2}
          source={require('./picture/raincloud.jpeg')}
        />
        <Text style={styles.subTitle2}>Rain & Cloud</Text>
      </ScrollView>
    </>
  );
};

//3.export component
export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: 'pink',
    borderWidth: 5,
    borderRadius: 20, //untuk ujung container atau border
    margin: 30, //border with komponen terluar
    padding: 30, //border with text component(inner)
  },

  title: {
    fontSize: 40,
    fontWeight: '700',
    color: 'navy',
    textAlign: 'center',
    //margin bisa juga dilakukan disini
  },

  subTitle: {
    fontSize: 25,
    marginRight: 40,
    fontWeight: 500,
    marginBottom: 20,
    marginTop: 20,
    color: 'black',
    textAlign: 'center',
  },

  subTitleA: {
    fontSize: 20,
    marginRight: 120,
    fontWeight: 500,
    marginBottom: -10,
    marginTop: 20,
    color: 'black',
    textAlign: 'center',
  },

  subTitleB: {
    fontSize: 20,
    marginRight: 80,
    fontWeight: 500,
    marginBottom: -10,
    marginTop: 20,
    color: 'black',
    textAlign: 'center',
  },

  subTitleC: {
    fontSize: 20,
    marginRight: 175,
    fontWeight: 500,
    marginBottom: -10,
    marginTop: 20,
    color: 'black',
    textAlign: 'center',
  },

  subTitleC1: {
    fontSize: 20,
    marginRight: 250,
    fontWeight: 500,
    marginBottom: -10,
    marginTop: 20,
    color: 'black',
    textAlign: 'center',
  },

  subTitleC2: {
    fontSize: 20,
    marginRight: 155,
    fontWeight: 500,
    marginBottom: -10,
    marginTop: 20,
    color: 'black',
    textAlign: 'center',
  },

  subTitleC3: {
    fontSize: 20,
    marginRight: 110,
    fontWeight: 500,
    marginBottom: -10,
    marginTop: 20,
    color: 'black',
    textAlign: 'center',
  },

  subTitleD: {
    fontSize: 20,
    marginRight: 130,
    fontWeight: 500,
    marginBottom: -10,
    marginTop: 20,
    color: 'black',
    textAlign: 'center',
  },

  subTitleD1: {
    fontSize: 20,
    marginRight: 150,
    fontWeight: 500,
    marginBottom: -10,
    marginTop: 30,
    color: 'black',
    textAlign: 'center',
  },

  subTitle1: {
    fontSize: 20,
    marginRight: 80,
    fontWeight: 500,
    marginBottom: -10,
    marginTop: 20,
    color: 'black',
    textAlign: 'center',
  },

  subTitle2: {
    fontSize: 25,
    marginRight: 110,
    fontWeight: 500,
    marginBottom: 20,
    marginTop: 20,
    color: 'black',
    textAlign: 'center',
  },

  img1: {
    height: 200,
    width: 200,
    marginLeft: 100,
  },

  img2: {
    height: 200,
    width: 200,
    marginLeft: 50,
    marginTop: 20,
  },
});
