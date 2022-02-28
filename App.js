import react ,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import DateTime from './component/DateTime';
import Scroll from './component/Scroll'
import * as Location from 'expo-location'
const API_KEY ='8454b30320e782618ac54a2ad0dd381b';
const img = require('./assets/lluvia.jpg')



export default function App() {
  const [data,setDate] = useState({})


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
     apiData('40.7128','-74.0060')
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
    apiData(location.coords.latitude, location.coords.longitude)
    })();
    },[])

  
const apiData = (latitude, longitude) => {
  if(latitude && longitude){
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
    .then(res => res.json())
    .then(data => {

      console.log(data)
      setDate(data)
      })
  }
  
}
  
  return (
    <View style={styles.container}>
      <ImageBackground
      source={img}
      style={styles.imagecss}
      >
        <DateTime current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon}/>
        <Scroll  weatherData={data.daily}/>
      </ImageBackground>
    </View>
  );
}
      

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    
  },
  imagecss:{flex: 1, resizeMode:'cover', justifyContent:'center', width: 410
},

});
