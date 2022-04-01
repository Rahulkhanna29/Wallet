import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, View, Image,Text } from 'react-native';
import HomeScreen from '../screen/HomeScreen';
import TrackScreen from '../screen/TrackScreen';
import CardScreen from '../screen/CardScreen';
import AccountScreen from '../screen/AccountScreen';
import SettingScreen from '../screen/SettingScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Tab = createBottomTabNavigator();

const CustomTabBarButton=({children,onPress})=>(
  <TouchableOpacity style={{top:-15,justifyContent:'center',alignSelf:'center'}}
  onPress={onPress}>
<View style={{width:100,height:150,
}}>
{children}
</View>
  </TouchableOpacity>
);
const Tabs =()=>{
  return (
    <Tab.Navigator 
    screenOptions={{
       style:{ height:100, 
        position:'absolute',
        ...styles.shadow

    }}}
    
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:'center', justifyContent:'center', top:10}}>
            <Image source={require('../asset/home.png')}
            resizeMode="contain"
            style={{
              width:25,
              height:25,
              tintColor:focused?'#ba55d3':'#748c94'
            }}></Image>
            <Text style={{color:focused?'#ba55d3':'#748c94',fontSize:12}}></Text>
          </View>
        ), headerShown:false
      }}/>
      <Tab.Screen name="Account" component={SettingScreen} options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:'center', justifyContent:'center', top:10}}>
            <Image source={require('../asset/wallet.png')}
            resizeMode="contain"
            style={{
              width:25,
              height:25,
              tintColor:focused?'#ba55d3':'#748c94'
            }}></Image>
            <Text style={{color:focused?'#e32f45':'#748c94',fontSize:12}}></Text>
          </View>
        ), headerShown:false
      }}/>
      <Tab.Screen name="Account1" component={AccountScreen} options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:'center', justifyContent:'center'}}>
            <Image source={require('../asset/logo@.png')}
            resizeMode="contain"
          ></Image>
            <Text style={{color:focused?'#e32f45':'#748c94',fontSize:12}}></Text>
          </View>
        ),
        tabBarButton:(props)=>(
          <CustomTabBarButton{...props} />
        )

      }}/>
      <Tab.Screen name="Track" component={TrackScreen} options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:'center', justifyContent:'center', top:10}}>
            <Image source={require('../asset/track.png')}
            resizeMode="contain"
            style={{
              width:25,
              height:25,
              tintColor:focused?'#ba55d3':'#748c94'
            }}></Image>
            <Text style={{color:focused?'#e32f45':'#748c94',fontSize:12}}></Text>
          </View>
        ), headerShown:false
      }}/>
      <Tab.Screen name="Card" component={CardScreen}options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:'center', justifyContent:'center', top:10}}>
            <Image source={require('../asset/card.png')}
            resizeMode="contain"
            style={{
              width:25,
              height:25,
              tintColor:focused?'#ba55d3':'#748c94'
            }}></Image>
            <Text style={{color:focused?'#e32f45':'#748c94',fontSize:12}}></Text>
          </View>
        ), headerShown:false
      }} />
    </Tab.Navigator>

  );
}
export default Tabs;

const styles=StyleSheet.create({
  shadow:{
    shadowColor:'#7F5DF0',
    shadowOffset:{
      width:0,
      height:10
    },
    shadowOpacity:0.25,
    shadowRadius: 3.5,
    elevation:5
  }
})
