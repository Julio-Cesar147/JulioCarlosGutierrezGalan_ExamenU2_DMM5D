import { Button } from '@rneui/base';
import { Image } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';

export default function Perfil () {
    let [getmodalVisible, setModalVisible] = useState(false);
  let [getmodalVisible2, setModalVisible2] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    {
      //Foto del Perfil
    }
      <Image
      source={require( '../assets/Wallpapers/01.png')}
    style={{
    width: 70,
    height: 70,
    borderRadius: 50,
    overflow: "hidden",
    marginTop:50,
  }}
/>
{
  //Texto de Usuario e Info de la cuenta
}
  <Text   style={{
    flexDirection: 'column',
    justifyContent: 'center',
    height: 50, 
    alignItems: 'flex-start',
    marginTop: 10,

  }}>UCG_202</Text>
<View
  style={{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60, 
    marginStart: -30,
    margin: -110,
    
  }}
>
  <Text
    style={{
      marginStart: -20
    }}
  > 0 </Text>
  <Text
  style={{
    marginStart:10,
    marginLeft:-20 
  }}
  >Publicaciones</Text>

  <Text
    style={{
      marginStart: 165,
      marginLeft:210,
      marginTop:-38
    }}
  > 120 </Text>
  <Text
  style={{
    marginStart:170,
    marginLeft:215
  }}
  >Seguidores</Text>

<Text
    style={{
      marginStart: 320,
      marginLeft:320,
      marginTop:-38
    }}
  > 260 </Text>
  <Text
  style={{
    marginStart:320,
    marginLeft:360
  }}
  >Seguidos</Text>
</View>

<View>
  
</View>

{
  //Historias del Perfil
}
<Image
    source={require( '../assets/Wallpapers/05.jpg')}
    style={{
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft:70,
    marginTop:160,

  }}

  
/>

<Image
    source={require( '../assets/Wallpapers/05.jpg')}
    style={{
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft:190,
    marginTop:-20,
  }}
/>

{ //Modales para foros de Perfil
}
<View style={styles.img}>
      <Image 
      source={require("../assets/Wallpapers/50.jpg")} 
      style={{width:100, height:100}}
      onLongPress={() => setModalVisible(true)}
      onPressOut={() => setModalVisible(false)}/>

      <StatusBar style="auto" />
      
      <Modal animationType='fade' 
      visible={getmodalVisible}>
      <Image 
      source={require("../assets/Wallpapers/50.jpg")} 
      style={{width:500, height:500}}/>
      <Button  title="Me gusta" color={"secondary"}/>

      </Modal>
    </View>

    <View style={styles.img}>
      <Image 
      source={require("../assets/Wallpapers/50.jpg")} 
      style={{width:100, height:100}}
      onLongPress={() => setModalVisible(true)}
      onPressOut={() => setModalVisible(false)}/>

      <StatusBar style="auto" />
      
      <Modal animationType='fade' 
      visible={getmodalVisible}>
      <Image 
      source={require("../assets/Wallpapers/50.jpg")} 
      style={{width:500, height:500}}/>
      <Button  title="Me gusta" color={"secondary"}/>

      </Modal>
    </View>
<View style={styles.img}>
      <Image 
      source={require("../assets/Wallpapers/50.jpg")} 
      style={{width:100, height:100}}
      onLongPress={() => setModalVisible(true)}
      onPressOut={() => setModalVisible(false)}/>

      <StatusBar style="auto" />
      
      <Modal animationType='fade' 
      visible={getmodalVisible}>
      <Image 
      source={require("../assets/Wallpapers/50.jpg")} 
      style={{width:500, height:500}}/>
      <Button  title="Me gusta" color={"secondary"}/>

      </Modal>
    </View>

    {
      //Segunmda Parte de Modales
    }

    <View style={styles.img2}>
      <Image 
      source={require("../assets/Wallpapers/53.jpg")} 
      style={{width:100, height:100}}
      onLongPress={() => setModalVisible2(true)}
      onPressOut={() => setModalVisible2(false)}/>

      <StatusBar style="auto" />
      
      <Modal animationType='fade' 
      visible={getmodalVisible2}>
      <Image 
      source={require("../assets/Wallpapers/53.jpg")} 
      style={{width:500, height:500}}/>
      <Button  title="Me gusta" color={"secondary"}/>

      </Modal>
    </View>

    
    <View style={styles.img2}>
      <Image 
      source={require("../assets/Wallpapers/53.jpg")} 
      style={{width:100, height:100}}
      onLongPress={() => setModalVisible2(true)}
      onPressOut={() => setModalVisible2(false)}/>

      <StatusBar style="auto" />
      
      <Modal animationType='fade' 
      visible={getmodalVisible2}>
      <Image 
      source={require("../assets/Wallpapers/53.jpg")} 
      style={{width:500, height:500}}/>
      <Button  title="Me gusta" color={"secondary"}/>

      </Modal>
    </View>

    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginLeft:10
  },

   img:{
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginLeft:20,
    marginTop:40
   },

   img2:{
    flexDirection:"row",
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginLeft:140,
    marginTop:-240,
  
  }

  
})