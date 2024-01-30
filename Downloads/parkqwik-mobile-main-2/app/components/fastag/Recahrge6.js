import React, {useEffect} from 'react'
import { View, Text, StyleSheet,Image,TouchableOpacity,TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Bbp from "../images/bbp.png"
import Nt from "../images/NETC.png"








const styles = StyleSheet.create( {
  
  main1 : {
    backgroundColor : "white",
    height : 1000
  },
  tamil1: {
    display : "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems : "center",
    position : "relative",
    top : -45,
    zIndex : 1,
    left : 100
  },
location1 : {
  width : 15,
  height : 20,
  resizeMode : "stretch",
  marginRight : 5
  // backgroundColor : "red"
},
tamil1Text : {
  fontSize : 12,
  fontWeight : "500",
  color : "white"
},
inputContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: 'lightgrey',
  borderRadius: 8,
  paddingHorizontal: 15,
  // paddingVertical: 10,
  width : 328,
  marginLeft : 15,
  height: 40
},

inputContainerUpload: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1A9E75',
    borderRadius: 2,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width : 130,
    marginLeft : 20,
    backgroundColor: "#F0FFFA"
  },
searchIcon: {
  width: 20,
  height: 20,
  marginRight: 10,
},
input: {
  flex: 1,
  fontSize: 13,
  color: 'black', 
fontFamily : "Poppins_400Regular"
// fontFamily : "Poppins_500Medium"
// fontFamily : "Poppins_600SemiBold"



},

  tamil1Text1  : {
    fontSize : 16,
    fontWeight : "500",
    marginLeft : 15,
    marginTop : 10,
    // marginBottom : 20,
    // fontFamily : "Poppins_400Regular"
fontFamily : "Poppins_500Medium"
// fontFamily : "Poppins_600SemiBold"


    

  },
  inputContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent : "space-evenly",
    borderWidth: 5,
    borderColor: 'rgb(250 250 250)',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width : 328,
    marginLeft : 20,
    height : 70,
    backgroundColor : "white"
  },

  searchIcon1 : {
    width: 20,
    height: 20,
    marginLeft: 10,
  },

  inputContainer3 :  {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent : "center",
    // marginTop : 
  },

  searchIcon2 : {
    width : 35,
    height : 25,
    resizeMode: "stretch"
  }  ,
  inputContainer3Text : {
    fontSize : 12,
    fontFamily : "Poppins_400Regular"
// fontFamily : "Poppins_500Medium"
// fontFamily : "Poppins_600SemiBold"


  },
  searchIconTan : {
    width : 40,
    height : 40,
    resizeMode : "stretch",
    marginRight : 10
  },
  searchIconTan1 : {
    width : 40,
    height : 40,
    resizeMode : "stretch",
    marginLeft : 10
  },
  tamil1Text2 : {
    fontSize : 12,
    fontWeight : "500"
  },

  searchIconUpload : {
    color : "#1A9E75",
    // fontFamily : "Poppins_400Regular"
// fontFamily : "Poppins_500Medium"
fontFamily : "Poppins_600SemiBold"


  },

  
  backButton : {
    // color: "rgb(5,166,90)",
    fontSize:10,
    borderWidth: 1,
    borderColor: 'rgb(5,166,90)',
    borderRadius: 15,
    paddingHorizontal: 1,
    paddingVertical: 5,
    width : 330,
    textAlign: "center",
     backgroundColor : "#1A9E75",
     marginTop : 450,
     marginLeft :15,
     height: 41,
     display: "flex",
     justifyContent: 'center',
     alignItems: "center",
     height: 41
      
  },


  nextScreen3Text2 : {
    fontSize: 12,
    
    // fontWeight:"400",
    marginBottom: 10,
    color: "#A0A0A0",
    width : 286,
    fontFamily:"Poppins_400Regular",
    marginLeft: 15
  },

  title : {
    color : "white",
    textAlign : "center",
    fontWeight: "500",
    fontSize : 16,
    // fontFamily : "Poppins_400Regular"
// fontFamily : "Poppins_500Medium"
fontFamily : "Poppins_600SemiBold"


  },


  nextScreen3Power: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 5,
    marginLeft: 15
    
  },

  nextScreen3PowerPowered: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular"
  },

  nextScreen3PowerImage : {
    resizeMode: "stretch",
    width: 50,
   height:35,
   // marginTop:20
   marginLeft:5
},

   
   
})



const Fasttag2 = () => {
 
  const navigation = useNavigation();


  useEffect(() => {
    // The effect logic will be triggered when the button is pressed
  }, [navigation]); // Adding navigation to the dependency array
  
  
  return (
  <View style ={styles.main1}>
      
      <Text style={styles.tamil1Text1}>Enter Vehicle or Chassis Number</Text>
      <Text style={styles.nextScreen3Text2}>Get upto 100% cashback on first 3 Fastag {"\n"} Recharge</Text>

  <View style={styles.inputContainer}>
   
      <TextInput
        placeholder="Enter Vehicle Number"
        style={styles.input}
        placeholderTextColor="gray"
      />
    </View>


     
    <View style={styles.nextScreen3Power}>
                    <Text  style={styles.nextScreen3PowerPowered}>
                    Powered by

                    </Text>
                 
                 <Image
                          source={Nt}
                            style={styles.nextScreen3PowerImage}
                           />

                 
                        <Image
                          source={Bbp}
                            style={styles.nextScreen3PowerImage}
                           />

                   </View>

    
   




    
  

  <TouchableOpacity style={styles.backButton}  >
  <Text style={styles.title}>Recharge Now</Text>
</TouchableOpacity>



  </View>
  )
}

export default Fasttag2;


