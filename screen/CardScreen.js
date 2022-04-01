import React from "react";
import { Text, View,StyleSheet,Image } from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters";

const CardScreen =()=>{
    return(
        <View>
            <View style={styles.top} >
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../asset/top.png')} style={styles.top2}></Image>
                   <Text style={{fontSize:20,fontWeight:'bold',color:'white',marginTop: 15,marginLeft: 100,}}>Accounts</Text>
                    
                   <Image source={require('../asset/dolor.png')} style={styles.top3}></Image>
                    <Image source={require('../asset/money.png')} style={styles.top5}></Image>
                </View>

                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.text}>Total Balance</Text>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Text style={styles.text1}>$39,196.00 </Text>
                        
                    </View>
                    <View style={styles.twovalues}>
                        <Text style={styles.text3}>-$73,07</Text>
                    </View>
               </View>
    
        </View>
      
     

 <View style={styles.profile7} >
 <View style={styles.profile8} >

    <View style={{ flexDirection: 'column' }}>
         <Text style={styles.text5}>Crypto wallet</Text>
    
     </View>
    
     <Text style={styles.text71}>$12,999,20</Text>
    <Text style={styles.text13}>4.12%</Text>

</View>
<View style={{width:'93%', backgroundColor: 'grey',height:1,alignSelf:'center'}}></View>
<View style={styles.profile8} >

    <View style={{ flexDirection: 'column' }}>
         <Text style={styles.text5}>Crypto Earn</Text>
 
     </View>
    
     <Text style={styles.text71}>$0,00</Text>
    <Text style={styles.text14}>0,00%</Text>
   
</View>
<View style={{width:'93%', backgroundColor: 'grey',height:1,alignSelf:'center'}}></View>
<View style={styles.profile8} >

    <View style={{ flexDirection: 'column' }}>
         <Text style={styles.text5}>Crypto Credit</Text>

     </View>
    
     <Text style={styles.text19}>$0,00</Text>
    <Text style={styles.text20}>-</Text>
   
</View>
</View>
<View style={styles.profile6} >

    <View style={{ flexDirection: 'column' }}>
         <Text style={styles.text5}>Flat Wallet</Text>
 
     </View>
   
     <Text style={styles.text12}>$0,00</Text>
    <Text style={styles.text33}>-</Text>
  
</View>
<View style={styles.profile61} >

    <View style={{ flexDirection: 'column' }}>
         <Text style={styles.text5}>iZOBI.com Visa Card</Text>
  
     </View>
   
     <Text style={styles.text12}>$292,33</Text>
    <Text style={styles.text34}>-</Text>
  
</View>
     
        </View>
    );
} 

// #a54cba
export default CardScreen;

const styles = ScaledSheet.create({
    top: {
        width: '100%',
        height: '290@s',
        backgroundColor: '#ae51c4'
    },
    button:{
      backgroundColor: '#ba55d3',
      width: '80%',
       height: '40@s',
        borderRadius: 40,
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
        marginLeft: 80,
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
        marginLeft: 50,
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
        marginTop: 30,
        color: '#ba55d3',
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
        marginTop: -70,
        shadowColor: 'grey',
        shadowOpacity: 12,
       
        marginLeft:0
      },
      profile61: {
        width: '90%',
        height: 80,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        marginTop: 10,
        shadowColor: 'grey',
        shadowOpacity: 12,
       
        marginLeft:0
      },
      profile7: {
        width: '90%',
        height: 200,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 10,
        flexDirection: 'column',
        marginTop: 5,
        shadowColor: 'grey',
        shadowOpacity: 12,
        elevation: 20,
        top:-80
      },
      profile8: {
        width: '90%',
        height: 70,
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
        marginTop: 20
    
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
        color: '#ba55d3',
        marginTop: 25
       },
       text71:{
        marginLeft: 25,
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
        marginTop: 20
       },
       text13:{
        marginTop: 20,
     marginLeft: 40,
         fontSize: 15,
         color: 'green'
       },
       text34:{
        marginTop: 25,
     marginLeft: 20,
         fontSize: 15,
         color: 'red'
       },
       text33:{
        marginTop: 20,
     marginLeft: 90,
         fontSize: 15,
         color: 'red'
       },
       text14:{
        marginTop: 20,
     marginLeft: 90,
         fontSize: 15,
         color: 'black'
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
        marginLeft: 30,
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
        marginTop: 20
       },
       text20:{
        marginTop: 15,
     marginLeft: 70,
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
