import React from "react";

import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const SettingScreen=()=>{
  return (
   <View>
    <View style={{ width: '100%', backgroundColor: 'white' }}>
     
     
      <View style={styles.top2}>
        <Image source={require('../asset/backbtn.png')} style={styles.top}></Image>
        <Text style={styles.toptext}>Settings</Text>
        <Text style={styles.toptext}>1/3</Text>
      </View>
      </View>
  <ScrollView >
     <View >
      <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
     
      <View>
        <Text style={styles.profile}>PROFILE</Text>
      </View>



      <View style={styles.profile2} >
        <Image source={{ uri: "https://image.shutterstock.com/image-photo/close-portrait-young-smiling-handsome-260nw-1180874596.jpg" }} style={styles.image1}></Image>
       <View style={{marginLeft:-8,marginTop:5}}>
        <Image source={require('../asset/edit.png')} style={styles.image2} ></Image>
        </View>
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.text}>Harjot Singh </Text>

          <Text style={{ color: '#ba55d3', marginTop: 3 }}>Name, Phone & Email</Text>
        </View>
        <Image source={require('../asset/arrow.png')} style={styles.arrow} ></Image>
      </View>


      <View>
        <Text style={styles.profile4}>CARD APPLICATION</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
 <View style={styles.profile6} >

       <Text style={styles.text3}>Verify Address </Text>
       
         <Image source={require('../asset/tick.png')} style={styles.arrow1} ></Image>
         <View style={{width:500}}>
         <Text style={styles.text4}>Matched</Text>
</View>
        </View>
      </View>
    
      
      <View>
        <Text style={styles.profile4}>ACCOUNT</Text>
      </View>
     
     
     
      <View style={styles.profile5} >
  
       <View style={{  flexDirection: 'row'}}>
        <Text style={styles.text3}>Payment Currency </Text>
        <Image source={require('../asset/arrow.png')} style={styles.arrow2} ></Image>
      
        </View>
     <View style={{width:'93%', backgroundColor: 'grey',height:1,alignSelf:'center',marginTop:10}}></View>
      <View style={{  flexDirection: 'row'}}>
  
        <Text style={styles.text31}>Language </Text>
        <Image source={require('../asset/arrow.png')} style={styles.arrow5} ></Image>
   
      </View>
      <View style={{width:'93%', backgroundColor: 'grey',height:1,alignSelf:'center',marginTop:15}}></View>
      <View style={{  flexDirection: 'row'}}>
   
        <Text style={styles.text31}>PayStrings </Text>
        <Image source={require('../asset/arrow.png')} style={styles.arrow6} ></Image>
   
     </View>
       </View>
     
     
     
     
     
     
     
      <View>
        <Text style={styles.profile4}>PAY</Text>
      </View>
      <View style={styles.profile3} >
        <Text style={styles.text3}>Refund Currency </Text>
        <Image source={require('../asset/arrow.png')} style={styles.arrow4} ></Image>
    </View>
    <View>
        <Text style={styles.profile4}>APP CUSTOMIZATION</Text>
      </View>
      <View style={styles.profile3} >
        <Text style={styles.text3}>App Customization Settings </Text>
        <Image source={require('../asset/arrow.png')} style={styles.arrow3} ></Image>
    </View>
    <View>
        <Text style={styles.profile4}></Text>
      </View>
      <View style={styles.profile3} >
        <Text style={styles.text3}>App Customization Settings </Text>
        <Image source={require('../asset/arrow.png')} style={styles.arrow3} ></Image>
    </View>
      {/* <Text>
        Jai Shree Ram
      </Text> */}
    </View>
    </View>
 </ScrollView>  
    </View>
 
  )
}
export default SettingScreen;

const styles = StyleSheet.create({
  top: {
    marginLeft: 10,
    marginTop: 10,
  },
  top2: {
    flexDirection: 'row',

  },
  toptext: {
    marginLeft: 120,
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ba55d3'
  },
  profile: {
    marginTop: 50,
    color: '#843996',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20
  },
  profile2: {
    width: '90%',
    height: 100,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: 10,
    shadowColor: 'grey',
    shadowOpacity: 12,
    elevation: 20,

  },
  profile3: {
    width: '90%',
    height: 70,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: 5,
    shadowColor: 'grey',
    shadowOpacity: 12,
    elevation: 20,
  },
  profile4: {
    marginTop: 30,
    color: '#843996',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20
  },
  profile5: {
    width: '90%',
    height: 180,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'column',
    marginTop: 5,
    shadowColor: 'grey',
    shadowOpacity: 12,
    elevation: 20,
  },
  profile6: {
    width: '90%',
    height: 70,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: 5,
    shadowColor: 'grey',
    shadowOpacity: 12,
    elevation: 20,
    marginLeft:20
  },
  image1: {
    width: 70,
    height: 70,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "grey",
    marginTop: 13,
    marginLeft: 15
  },
  image2: {
    width: 15,
    height: 15,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "grey",
    marginTop: 60,
    marginRight: 20

  },
  text: {
    marginTop: 25,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black'
  },
  arrow: {
    marginLeft: 70,
    marginTop: 40,
  },
  arrow2: {
    marginLeft: 160,
    marginTop: 30,
  },
  arrow3: {
    marginLeft: 90,
    marginTop: 30,
  },
  arrow4: {
    marginLeft: 180,
    marginTop: 30,
  },
  arrow5: {
    marginLeft: 230,
    marginTop: 20,
  },
  arrow6: {
    marginLeft: 215,
    marginTop: 20,
  },
  text2: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black'

  },
  text3: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginTop: 30

  },
  text31: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginTop:15

  },
  text4: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'green',
    marginTop: 30

  },
  arrow1: {
    marginLeft: 90,
    width: 25,
    height: 25,
    marginTop: 30,
  },
})