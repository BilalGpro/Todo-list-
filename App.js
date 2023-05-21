import * as React from 'react';
import { NavigationContainer } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Text, View,Button, StyleSheet, Alert,Image,StatusBar,FlatList,TouchableOpacity,TextInput} from 'react-native';
import {ToggleButton } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';





//TODO LIST APP
export default function App() {
  const [toggle,setToggle]= useState(true);
  const [edit,setedit]=useState(null);
  const [todos,setTodos] = useState([

    ]);
    const [text,setText]= useState('');
    const change=(value)=>{
      setText(value);
    }
    
    const submit =(text)=>{
      if(text && !toggle){
        setTodos(todos.map((item)=>{
          if(item.key == edit){
            return{...item, text:text}
          }
          return item;
        }))
        setToggle(true);
        setText('');
        setedit(null);
       
      }
      else{
        setTodos((pretodo)=>{
          return[
            {text:text,key:Math.random().toString()},
            ...pretodo
          ]
          
        })
      }
      
      setText('');
      
    }

    const Press =(key)=>{
    setTodos((todoss)=>{
       return todoss.filter((todo)=>todo.key != key)
    })
   }

   const Update =(key)=>{
    // const naa=setTodos((todoss)=>{
    //    return todoss.filter((todo)=>todo.key == key)
    // })
    const newa = todos.filter((val)=>{
      return val.key==key;
    })
    setToggle(false);
    console.log(newa);
    setText(newa[0].text);
    setedit(key);
    
   }

  return (
    
    
    <View style={{backgroundColor:'white',flex:1}}>
      <StatusBar
      backgroundColor={'#68EDC6'}
      />
      <View style={{backgroundColor:'#68EDC6',height:120,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:40}}>
          To Do List
        </Text>
      </View>

      <View style={{flexDirection:'row',padding:30,width:'80%'}}>
      <TextInput style={{width:180,color:'#68EDC6'}}
      label="Enter an item"
      mode='outlined'
      right='React.ReactNode'
      onChangeText={change}
      value={text}
    />
    <View style={{paddingLeft:20,paddingTop:8,justifyContent:'space-evenly'}}>
      {toggle ? <Button  mode="contained"  onPress={()=>submit(text)} style={{backgroundColor:'#68EDC6'}} >
    Add Item
  </Button> : <Button  mode="contained"  onPress={()=>submit(text)} style={{backgroundColor:'#68EDC6'}} >
    Update 
  </Button>
  } 
    
  </View>
      </View>
      <View >
      
      {todos.map((item) => (
        <TouchableOpacity onPress={()=>Update(item.key)}>
        <View style={{flexDirection:'row'}}>
         <Text style={{color:'#32E875',padding:16,marginTop:16,borderColor: '#68EDC6',borderWidth:3,borderStyle:"solid",borderRadius:10,width:'80%',marginLeft:20,flexDirection:'row',justifyContent:'space-around'}}>{item.text}
         
        </Text>
   
        <Button icon="delete" style={{paddingTop:20,color:'black'}} onPress={()=>Press(item.key)}>
</Button>
    

         </View>
         </TouchableOpacity>
      ))}
    
      </View>

      
    </View>
    
  );
}



//DISCOUNT CALCULATOR APP
// export default function App() {
//   const [value,setvalue]=useState(0);
//   const increment= ()=>{
//     setvalue(value+1)
//   }
//   const decrement= ()=>{
//    if(value==0){
//     Alert.alert('cannot decrement to negative value')
//    }
//    else{
//     setvalue(value-1)
//    }
//   }
//   const[final,setfinal]=useState(0);
//   const[save,setsave]=useState(0);
//   const[amount,setamount]=useState(0);
//   const[discount,setdiscount]=useState(0);

//   const calculate=()=>{
//     setfinal(amount-(amount*discount/100));
//     setsave(amount * discount/100)
//   }



//   return (
    
//     <View style={{flex:1,backgroundColor:'black'}}>
//       <View style={{backgroundColor:'#68EDC6',height:120,justifyContent:'center',alignItems:'center'}}>
//         <Text style={{fontSize:21,fontStyle:'italic'}}>DISCOUNT CALCLULATOR APP</Text>
//       </View>
//       <View style={{padding:40,alignItems:'center'}}>
//       <Text style={{color:'white',fontSize:20}}>Final Price: {final}</Text>
//       <Text style={{color:'white',fontSize:20}}>Discount Price: {save}</Text>
//       </View>
//       <View style={{alignItems:'center'}}>
//         <TextInput style={{borderColor:'cyan',borderWidth:1,width:'80%',borderRadius:15,margin:12}} placeholder='Original Price' onChangeText={(val)=>setamount(val)}>
//         </TextInput>
//         <TextInput style={{borderColor:'cyan',borderWidth:1,width:'80%',borderRadius:15}} placeholder='Discount %' onChangeText={(val)=>setdiscount(val)}>
//         </TextInput>
//       </View>
//       <View style={{margin:20}}>
//       <Button title='Calculate' onPress={calculate} />
//       </View>
      
    

      
//     </View>
    
