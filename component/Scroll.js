import moment from 'moment-timezone'
import React from 'react'
import { View, ScrollView, Image, Text, StyleSheet } from "react-native"
import Future from '../component/Future'
const WeatherScroll =  ({weatherData}) => {
    return (
        <ScrollView horizontal={true} style={styles.scrollV}>
                <CurrentT data={weatherData && weatherData.length > 0 ? weatherData[0] :{}}/>
                <Future data={weatherData}/>
        </ScrollView>
    )
}
const CurrentT = ({data}) => {
    if(data && data.weather){
        const img = {uri:`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        return (
            <View horizontal={true} style={styles.currentTe}>
    <Image source={img} style={styles.image}/>
    <View style={styles.container2}>
        <Text style={styles.day}>{moment(data.dt * 1000).format('dddd')}</Text>
        <Text style={styles.temp}>Night -{data.temp.night}°C</Text>
        <Text style={styles.temp}>Day - {data.temp.day}°C</Text>
    </View>
            </View>
        )
    }else{
        return  (<View></View>)
       
    }
   
}
const styles = StyleSheet.create ({
    image:{
        width:150,
        height:150
    },
    scrollV:{
        flex:0.4,
        backgroundColor:'#18181bcc',
        padding:30,
    },
    currentTe:{
        flexDirection:'row',
        backgroundColor:'#00000033',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        borderColor:'#eee',
        borderWidth:1,
        padding: 55,
    },
      
    day:{
        fontSize:20,
        color:"white",
        backgroundColor:"#3c3c44",
        padding:10,
        textAlign:'center',
        borderRadius: 50,
        fontWeight:'200',
        marginBottom:15,
    },
    temp:{
        fontSize: 16,
        color:'white',
        fontWeight:'100',
        textAlign:'center'
    },
    container2:{
        paddingRight:40,
    }

        
})
export default WeatherScroll