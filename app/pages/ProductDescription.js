import React,{Component} from 'react';
import {View,Text,Image,Dimensions,StyleSheet,TouchableOpacity} from 'react-native';
import ProductListing from './ProductList';

const {width,height} = Dimensions.get('window');
export default class ProductDescription extends Component{
    constructor(props){
        super(props);
        this.state={
            imageUrl:this.props.navigation.state.params.imageUrl
        }
    }
    render(){
        return(
            <View>
                <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductListing')}>
                <Image
                  style={styles.backImage}
                  source={require("../assets/images/back.png")}
                />
                 </TouchableOpacity>
            <Text style={styles.titleText}>Product Details</Text>
        
            <Text style={styles.titleText}></Text>
        
                </View>
              
                 <View style={styles.imageContainer}>
                <Image
                style={styles.imageView}
                source={{uri:this.state.imageUrl}}/>
            </View>
           
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',justifyContent:'space-between',marginTop:20
    },
    backImage:{
        width: 25, height: 15, marginLeft: 10,marginTop:15
    },
    titleText:{
        alignSelf:'center',fontSize:20,fontWeight:'bold',marginTop:10
    },
    imageContainer:{
        marginTop:20
    },
    imageView:{
        width:width,height:300,backgroundColor:'grey'
    }
})