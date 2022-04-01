import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = () => {
    return (
        <ScrollView>
        <View>
            <View style={styles.top} >
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../asset/setting.png')} style={styles.top2}></Image>
                    <Image source={require('../asset/logo.png')} style={styles.top3}></Image>
                    <Image source={require('../asset/chat.png')} style={styles.top4}></Image>
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
     <Text style={styles.text91}>-1.23%</Text>
     </View>
</View>

 
        </View>

        <View style={styles.profile6} >
 <Image source={require('../asset/ehtereum.png')} style={styles.bitcoin} ></Image>
     <View style={{ flexDirection: 'column' }}>
          <Text style={styles.text5}>Ehtereum</Text>
      <Text style={styles.text7}>ETH</Text>
      </View>
      <View style={{ flexDirection: 'column' }}>
      <Text style={styles.text8}>$2 892,58</Text>
     <Text style={styles.text9}>+6.18%</Text>
     </View>
</View>
<View style={styles.profile6} >
 <Image source={require('../asset/tether.png')} style={styles.bitcoin} ></Image>
     <View style={{ flexDirection: 'column' }}>
          <Text style={styles.text5}> Tether(ERC20)</Text>
      <Text style={styles.text7}>USDT</Text>
      </View>
      <View style={{ flexDirection: 'column' }}>
      <Text style={styles.text10}>$1 852,58</Text>
     <Text style={styles.text11}>+4.12%</Text>
     </View>
</View>

<View style={styles.profile6} >
 <Image source={require('../asset/binan.png')} style={styles.bitcoin} ></Image>
     <View style={{ flexDirection: 'column' }}>
          <Text style={styles.text5}>Binance Coin</Text>
      <Text style={styles.text7}>BNB</Text>
      </View>
      <View style={{ flexDirection: 'column' }}>
      <Text style={styles.text17}>$4  557,91</Text>
     <Text style={styles.text18}>-1.23%</Text>
     </View>
</View>
<View style={styles.profile6} >
 <Image source={require('../asset/others.jpg')} style={styles.bitcoin} ></Image>
     <View style={{ flexDirection: 'column' }}>
          <Text style={styles.text5}>Other</Text>
      <Text style={styles.text7}>UND</Text>
      </View>
      <View style={{ flexDirection: 'column' }}>
      <Text style={styles.text14}>$4  557,91</Text>
     <Text style={styles.text15}>-1.23%</Text>
     </View>
</View>

<View style={styles.twovalues1}>
                        <Text style={styles.text16}>Refer & Get $25 USD</Text>
                    </View>

                    <View>
       
        <Text style={styles.profile4}>TOP GAINERS</Text>
       
     </View>

  <View style={styles.profile7} >
  <View style={styles.profile8} >
 <Image source={require('../asset/arwe.png')} style={styles.bitcoin} ></Image>
     <View style={{ flexDirection: 'column' }}>
          <Text style={styles.text5}>Arweave</Text>
      <Text style={styles.text7}>AR</Text>
      </View>
     
      <Text style={styles.text12}>$54,61</Text>
     <Text style={styles.text13}>+31.61%</Text>
 <Image source={require('../asset/icon1.png')} style={{width:25,height:25,marginLeft:10,marginTop:10}}></Image>
</View>
<View style={{width:'93%', backgroundColor: 'grey',height:1,alignSelf:'center'}}></View>
<View style={styles.profile8} >
 <Image source={require('../asset/kusama.png')} style={styles.bitcoin} ></Image>
     <View style={{ flexDirection: 'column' }}>
          <Text style={styles.text5}>Kusama</Text>
      <Text style={styles.text7}>KSM</Text>
      </View>
     
      <Text style={styles.text12}>$325,75</Text>
     <Text style={styles.text13}>+26.81%</Text>
     <Image source={require('../asset/icon1.png')} style={{width:25,height:25,marginLeft:4,marginTop:10}}></Image>
</View>
<View style={{width:'93%', backgroundColor: 'grey',height:1,alignSelf:'center'}}></View>    
<View style={styles.profile8} >
 <Image source={require('../asset/min.png')} style={styles.bitcoin} ></Image>
     <View style={{ flexDirection: 'column' }}>
          <Text style={styles.text5}>Mina</Text>
      <Text style={styles.text7}>MINA</Text>
      </View>
     
      <Text style={styles.text19}>$3,03</Text>
     <Text style={styles.text20}>+22.82%</Text>
     <Image source={require('../asset/icon1.png')} style={{width:25,height:25,marginLeft:8,marginTop:10}}></Image>
</View>
<View style={{width:'93%', backgroundColor: 'grey',height:1,alignSelf:'center',}}></View>
<View style={styles.profile8} >
 <Image source={require('../asset/cosmos.png')} style={styles.bitcoin} ></Image>
     <View style={{ flexDirection: 'column' }}>
          <Text style={styles.text5}>Cosmos</Text>
      <Text style={styles.text7}>ATOM</Text>
      </View>
    
      <Text style={styles.text12}>$20,65</Text>
     <Text style={styles.text13}>+19.25%</Text>
     <Image source={require('../asset/icon1.png')} style={{width:25,height:25,marginLeft:10,marginTop:10}}></Image>

</View>
<View style={{width:'93%', backgroundColor: 'grey',height:1,alignSelf:'center'}}></View>
<View style={styles.profile8} >
 <Image source={require('../asset/palka.png')} style={styles.bitcoin} ></Image>
     <View style={{ flexDirection: 'column' }}>
          <Text style={styles.text5}>Palkadot</Text>
      <Text style={styles.text7}>DOT</Text>
      </View>
    
      <Text style={styles.text12}>$25,15</Text>
     <Text style={styles.text13}>+18.25%</Text>
     <Image source={require('../asset/icon1.png')} style={{width:25,height:25,marginLeft:4,marginTop:10}}></Image>
   
</View>
       </View>
     
       <View style={styles.profile9} >
       <View style={{ flexDirection: 'column' }}>
       <Text style={styles.text71}>SUPERCHARGER</Text>
       <Text style={styles.text21}>Deposit CRO to mine new coins with</Text>
       <Text style={styles.text21}>1-click</Text>
       <Text style={styles.text21}>Estimated APY:10.15%</Text>
       </View>
       </View>


       <View style={{flexDirection:'row'}}> 
       
       <Text style={styles.profile4}>IZOBI NEWS</Text>
       <Image source={require('../asset/news.png')} style={{marginTop:25, marginLeft:10}}></Image>
     </View>
    
    
   <View style={{flexDirection:'row'}}> 
<View style={styles.profile10} >
    <Text style={styles.text22}> iZobi App Lists Request</Text>
    <Text style={styles.text22}> (REQ)</Text>
   <View style={{width:'85%'}}>
    <Text style={styles.text23}> FIND OUR MORE</Text>
    </View>
    </View>
    <View style={styles.profile11} >
    <Text style={styles.text22}> iZobi App Lists Request</Text>
    <Text style={styles.text22}> (REQ)</Text>
   
    <Text style={styles.text23}> FIND OUR MORE</Text>
    </View>
     </View>
     
     
       </View>
       </ScrollView>
    );
}
export default HomeScreen;


const styles = StyleSheet.create({
    top: {
        width: '100%',
        height: 320,
        backgroundColor: '#ae51c4'
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
    text71: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center',
        marginTop: 10,
        borderBottomWidth:1,
        borderBottomColor:'white'
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
       borderTopRightRadius:20,
      borderBottomRightRadius: 20,
      
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
        marginTop: 30,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20
      },
      profile41: {
        marginTop: 30,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20,
        flexDirection: 'row',
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
        elevation: 20,
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
        backgroundColor: '#ae51c4',
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
       marginLeft: 10,
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
         color: 'green'
       },
       text91: {
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
         color: 'green'
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
         color: 'green'
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
         color: 'green'
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
        marginTop: 60,
        borderBottomWidth:1,
        borderBottomColor:'#ba55d3'
      },
});
