import React,{Component} from 'react';
import {View,Text,Dimensions,FlatList,Image,TouchableOpacity,StyleSheet,ActivityIndicator} from 'react-native';
import CardView from "react-native-cardview";
import  productDescription from './ProductDescription';
const {width,height} = Dimensions.get('window');
export default class ProductListing extends Component{
 constructor(props){
   super(props);
   this.state={
       listData:[],
       loading:true
   }
 }
    componentDidMount(){
        fetch('https://picsum.photos/v2/list', {
    method: 'GET',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
}).then((response) => response.json())
  .then((responseJson) => {
      this.setState({listData:responseJson})
      this.setState({loading:false})
  })
    }

    showCardList = () => {
        return(
          <View style={ styles.listContainer}>
          <FlatList
                numColumns={2}
                data={this.state.listData}
                renderItem={({ item: rowData,index }) => {
             return(
             <View style={styles.cardContainer}>	
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('productDescription',{imageUrl:rowData.download_url})}>
             <CardView
             style={styles.cardViewStyle}
              cardElevation={4}
              cardMaxElevation={4}>
              <Image
                    
                    source={{uri:rowData.download_url,
                             cache: 'only-if-cached'}}
                    
                    style={styles.cardImage}
                  />
            
              
        </CardView>
        </TouchableOpacity>
        {/* <Text style={{fontSize:16,marginTop:12,color:'black',fontWeight:'bold'}}>{rowData.category_name}</Text>  */}
            </View>
             )
                }}
                keyExtractor={(item, index) => index}
               
              />
          </View>
             )
          };
    render(){
        if(this.state.loading){
            return(
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator size={30} color={"black"}/>
                </View>
            )
        }
        return(
            <View>
               
           
            <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
            
               <Text style={{alignSelf:'center',fontSize:20,fontWeight:'bold'}}>Product Listing</Text>
            <View>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Cart',{value:'cart'})}>
              
   
              </TouchableOpacity>
            </View>
          </View>
          
               {this.showCardList()}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    listContainer:{marginTop:30,marginLeft:5,backgroundColor:'#F5F5F5',paddingBottom: 100,},
    cardContainer:{padding:8},
    cardViewStyle:{width:width/2-20,backgroundColor:'#FDFDFD'},
    cardImage:{alignSelf:'center',width: width / 2-40, height:220,marginLeft:10,marginRight:10,marginTop:10,marginBottom:10,backgroundColor:'grey' }
    ,headerView:{
        flexDirection:'column'
    }
})