import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image,TouchableOpacity,Set,TouchableHighlight} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
//import COLORS from '../../consts/colors';
import foods from './../Const/Foods';
//import {PrimaryButton} from '../components/Button';
import RazorpayCheckout from 'react-native-razorpay';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';




const CartScreen = ({navigation}) => {

  var [addItem, setaddItem] = React.useState(1);

  
  const CartCard = ({item}) => {
    return (
      <View style={style.cartCard}>
        <Image source={item.image} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <Text style={{fontSize: 13, color: 'grey'}}>
            {item.ingredients}
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>${item.price}</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>{addItem}</Text>
          <View style={style.actionBtn}>
            <Icon name="remove" size={25} color='white' />
          <TouchableOpacity onPress={()=>setaddItem(addItem++)}> <Icon name="add" size={25} color='white' /></TouchableOpacity> 
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={foods}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Total Price
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>$50</Text>
            </View>
            <View style={{marginHorizontal: 30}}>
            <TouchableOpacity style={style.buttonHover}>
     
     <Text style={{textAlign:'center'}}>Pay Now</Text>
     </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
 );

   
  
 
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor:'orange',
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonHover: {
    marginTop: 20,
    borderRadius:50,
    paddingTop: 15,
    paddingBottom: 15,
    width:270,
    shadowColor: 'rgba(46, 229, 157, 0.4)',
    shadowOpacity: 1.5,
    elevation: 8,
    shadowRadius: 20 ,
    shadowOffset : { width: 1, height: 13},
    backgroundColor: 'orange',
    color: '#FFFFFF',
    justifyContent:'center',
    alignSelf:'center'
  },
});

export default CartScreen;