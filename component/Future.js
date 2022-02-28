import React from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'
import moment from 'moment-timezone'
function Future({data}) {
  return (
    <View style={styles.itemview}>
     
     {
      data && data.length > 0 ?
       data.map((data, index)=> (
         <FutureItem  key ={index} idemData={data}/>
       
       ))
       :
       <View/>

       
       
      } 
      
       
     
     
    </View>
  )
}
const FutureItem = ({idemData}) => {
    const imag = {uri:`http://openweathermap.org/img/wn/${idemData.weather[0].icon}@2x.png`}
    return (
        <View style={styles.futureitem}>
            <Image style={styles.image} source={imag}/>
            <Text style={styles.day}>{moment(idemData.dt * 1000).format('dddd')}</Text>
            <Text style={styles.temp}>Day - {idemData.temp.day}°C</Text>
            <Text style={styles.temp}>Night-{idemData.temp.night} 26°C</Text>
           
        </View>
    )
}
const styles = StyleSheet.create({
    image:{
        width: 100,
        height:100,
    },
    futureitem:{
      flex: 1,
      justifyContent:'center',
      backgroundColor:'#00000033',
      borderRadius:10,
      borderColor:'#eee',
      borderWidth:1,
      padding: 20,
      marginLeft:10
    },
   
   
  temp:{
      fontSize: 16,
      color:'white',
      fontWeight:'100',
      textAlign:'center'
  },
  day:{
    fontSize:17,
    color:"white",
    backgroundColor:"#3c3c44",
    padding:10,
    textAlign:'center',
    borderRadius: 50,
    fontWeight:'200',
    marginBottom:15,
},
itemview:{
  flexDirection:'row'
}
})
export default Future
