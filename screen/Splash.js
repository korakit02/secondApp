import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const Flex = () => {
    return (
        <View style={styles.container}>
           <View style={styles.section}>
            <Image style={styles.image} source={require('../assets/lru1.png')}/>
            </View>
                
            <View style={[styles.section]}>
                <Text style={styles.text}>สมุรไพรท้องถิ่นไทเลย</Text>
            </View>

            <View style={styles.section}>
                <Image style={styles.coverScreenlmage}source={require('../assets/pob.jpg')}/>
            </View>

            <View style={styles.screenSection}>
                <Image style={styles.image}source={require('../assets/king.jpg')}/>
                <Image style={styles.image}source={require('../assets/magood.jpg')}/>
                <Image style={styles.image}source={require('../assets/holapa.jpg')}/>
            </View>

            <View style={[styles.section]}>
                <Text style={styles.text}>มหาวิทยาลัยราชภัฎเลย</Text>
            </View>
         </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:'blue',
        flexDirection:'column',
},
section:{
    flex:1,
    justifyContent:'center',
    alignltems:'center',
    marginVertical:30,
},
coverScreenlmage:{
    width:'100%',
    height:200,//ปรับความสูงตามที่ต้องการ
    resizeMode:'cover',
    maeginTop:100,//เลื่อนลงข้างล่างเพิ่มเติม
},
screenSection:{
    flex:3,//ให้ส่วนนี้ใช้พื้นที่มากขั้น
    justifyContent:'center',
    alignltems:'center',
    marginVertical:10,
    flexDirection:'row',
    marginTop:100,//เลื่อนลงข้างล้างเพิ่มเติม
},
image:{
    width:120,
    height:120,
    marginHorizontal:10,//เพิ่ม margin แนวนอนระหว่างรูปภาพ
},
text:{
    textAlign:'center',
    fontSize:32,
    color:'white'
},
});

export default Flex;