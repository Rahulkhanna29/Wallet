import React from "react";
import { Text, View,StyleSheet,Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const TrackScreen =()=>{
    return(
      <ScrollView>
        <View>
           <View>
            <View style={styles.top} >
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../asset/setting.png')} style={styles.top2}></Image>
                    <Image source={require('../asset/logo.png')} style={styles.top3}></Image>
                    <Image source={require('../asset/chat.png')} style={styles.top5}></Image>
                </View>

                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.text}>Total Balance</Text>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Text style={styles.text1}>$ 4 063,28 </Text>
                        <Text style={styles.text2}>EUR</Text>
                    </View>
                    <View style={styles.twovalues}>
                        <Text style={styles.text3}>-0.82% / -$33,55</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 15, }}>
                    <Image source={require('../asset/trade.png')}></Image>
                    <Image source={require('../asset/transfer.png')} style={{ marginLeft: 50, }}></Image>
                </View>
                <View style={{ flexDirection: 'column', alignSelf: 'center', marginTop: 5, marginLeft: 8, }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, color: 'white' }}>Trade</Text>
                        <Text style={{ fontSize: 20, color: 'white', marginLeft: 50, }}>Transfer</Text>
                    </View>
                </View>
           

           
            </View>
      
      
      
        <View>
        <View style={{ flexDirection: 'row' }}>
        <Text style={styles.profile4}>FAVOURITES</Text>
        <Text style={styles.profile5}>SEE ALL</Text>
     </View>
    
    
     
 <View style={styles.profile6} >
 <Image source={require('../asset/bitcoin.png')} style={styles.bitcoin} ></Image>
     <View style={{ flexDirection: 'column' }}>
          <Text style={styles.text5}> Bitcoin</Text>
      <Text style={styles.text7}>BTC</Text>
      </View>
      <View style={{ flexDirection: 'column' }}>
      <Text style={styles.text8}>$4  557,91</Text>
     <Text style={styles.text9}>-1.23%</Text>
     </View>
</View>
</View>
        </View>
    
      <View>
        <View style={{width:'100%', backgroundColor: 'white', height: 350,top:-10}}>
        <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../asset/backbtn.png')} style={styles.top2}></Image>
                    <Text style={styles.toptext}>DEPOSIT BNB</Text>
                    <Image source={require('../asset/cross.png')} style={styles.top4}></Image>
                </View>
                <View>
        <Text style={styles.profile41}>BNB Wallet Address(BEP2)</Text>
      </View>
     
      <View style={{ flexDirection: 'row' }}>
 <View style={styles.profile12} >
   <Text style={{fontSize:20,marginLeft:20,marginTop:10, color:'lightgrey'}}>16TTDVTYVNFH5461FH</Text>
<Image source={require('../asset/bar.png')} style={{marginLeft: 30,marginTop: 10,}}></Image>
<Image source={require('../asset/file.png')} style={{marginLeft: 20,marginTop: 10}}></Image>

        </View>
      </View>
      <View>
        <Text style={styles.profile41}>BNB MEMO</Text>
      </View>
     
      <View style={{ flexDirection: 'row' }}>
 <View style={styles.profile12} >
   <Text style={{fontSize:20,marginLeft:20,marginTop:10,color:'lightgrey'}}>325634565</Text>
<Image source={require('../asset/bar.png')} style={{marginLeft: 130,marginTop: 10,}}></Image>
<Image source={require('../asset/file.png')} style={{marginLeft: 20,marginTop: 10}}></Image>

        </View>
      </View> 
      <Text style={{marginLeft:20}}>BOTH the Memo and Address are required when you make a </Text>
      <Text style={{alignSelf:'center'}}> BNB deposit to your BNB wallet</Text>
              
      <TouchableOpacity>
               <Text
                  style={styles.button}
                
                  >Share Address & Memo</Text>
           
            </TouchableOpacity>
  
               </View>

       </View>
      
        </View>
        </ScrollView>
    );
}
export default TrackScreen;


const styles = StyleSheet.create({
    top: {
        width: '100%',
        height: 320,
        backgroundColor: '#ae51c4'
    },
    button:{
      backgroundColor: '#ba55d3',
      width: '80%',
       height: 40,
        borderRadius: 10,
         paddingTop: 12,
          color: 'white',
          marginTop:20,
           alignSelf: 'center',
            paddingLeft: 90 
    },
    top2: {
        marginLeft: 10,
        marginTop: 10,
    },
    top3: {
        marginLeft: 200,
        marginTop: 10,
    },
    top4: {
        marginLeft: 80,
        marginTop: 10,
    },
    top5: {
      marginLeft: 10,
      marginTop: 10,
  },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 30
    },
    text1: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center',
        marginTop: 10
    },
    text2: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 20
    },
    twovalues: {
        backgroundColor: 'white',
        width: ' 40%',
        height: 40,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 10
    },
    twovalues1: {
        backgroundColor: '#0335fc',
        width: ' 40%',
        height: 40,
       borderTopRightRadius:10,
      borderBottomRightRadius: 10,
        marginTop: 10
    },
    text3: {
        marginTop: 10,
        marginLeft: 10,
        color: '#ba55d3',
        fontWeight:'bold'
    },
    text16:{
        fontWeight: 'bold',
            marginTop: 10,
            marginLeft: 5,
            color: 'white'
       
    },

    profile4: {
        marginTop: 20,
        color: '#ba55d3',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20
      },
      profile41: {
        marginTop: 20,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20
      },
      profile5: {
        marginTop: 30,
        color: '#ba55d3',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 150
      },
      profile6: {
        width: '90%',
        height: 80,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        marginTop: 5,
        shadowColor: 'grey',
        shadowOpacity: 12,
       
        marginLeft:0
      },
      profile7: {
        width: '90%',
        height: 400,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 10,
        flexDirection: 'column',
        marginTop: 5,
        shadowColor: 'grey',
        shadowOpacity: 12,
        elevation: 20,
      },
      profile8: {
        width: '90%',
        height: 80,
       borderRadius: 10,
        flexDirection: 'row',
        
       
      },
      profile9: {
        width: '90%',
        height: 170,
        backgroundColor: '#ba55d3',
        alignSelf: 'center',
        borderRadius: 10,
        flexDirection: 'column',
        marginTop: 5,
        shadowColor: 'grey',
        shadowOpacity: 12,
        elevation: 20,
      },
      profile10: {
        width: '60%',
        height: 170,
        backgroundColor: 'white',
       
        borderRadius: 10,
        flexDirection: 'column',
        marginTop: 5,
        shadowColor: 'grey',
        shadowOpacity: 12,
        elevation: 20,
      },
      profile11: {
        width: '60%',
        height: 170,
        backgroundColor: 'white',
       marginLeft:10,
        borderRadius: 10,
        flexDirection: 'column',
        marginTop: 5,
        shadowColor: 'grey',
        shadowOpacity: 12,
        elevation: 20,
      },
      profile12: {
        width: '90%',
        height: 50,
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
      text5: {
        marginLeft: 15,
        fontWeight: 'bold',
        fontSize: 22,
        color: 'black',
        marginTop: 10
    
      },
   
     bitcoin: {
        marginLeft: 10,
        width: 50,
        height: 50,
        marginTop: 15,
      },
      text6: {
        marginTop: 25,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'
      },
      text7: {
       marginTop: 10,
       marginLeft: 25,
        fontSize: 15,
        color: 'black'
      },
      text8: {
        marginLeft: 100,
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
        marginTop: 15
       },
       text9: {
        marginTop: 15,
        marginLeft: 130,
         fontSize: 15,
         color: 'red'
       },
       text10:{
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
        marginTop: 15
       },
       text11:{
        marginTop: 15,
        marginLeft: 35,
         fontSize: 15,
         color: 'red'
       },
       text12:{
        marginLeft: 25,
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
        marginTop: 15
       },
       text13:{
        marginTop: 15,
     marginLeft: 20,
         fontSize: 15,
         color: 'red'
       },
       text14:{
        marginLeft: 130,
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
        marginTop: 15
       },
       text15:{
        marginTop: 15,
        marginLeft: 160,
         fontSize: 15,
         color: 'red'
       },
       text17:{
        marginLeft: 65,
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
        marginTop: 15
       },
       text18:{
        marginTop: 15,
     marginLeft: 90,
         fontSize: 15,
         color: 'red'
       },
       text19:{
        marginLeft: 40,
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
        marginTop: 15
       },
       text20:{
        marginTop: 15,
     marginLeft: 30,
         fontSize: 15,
         color: 'red'
       },
       text21: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 10
    },
    text22: {
        marginLeft: 15,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        marginTop: 10
    
      },
      text23: {
        marginLeft: 15,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#ba55d3',
        marginTop: 60
    
      },
      toptext: {
        marginLeft: 80,
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#ba55d3'
      },
});
