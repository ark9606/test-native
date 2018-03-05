import React from 'react';
// import { Alert, TouchableHighlight, StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation'
import  HomeScreen  from './src/HomeScreen';
import PhotoScreen from './src/PhotoScreen';

/*
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Test Application',
  };

  constructor(props){
    super(props);
    this.state = {
      readyToShow: false,
      data: null
    }
  }
  componentDidMount(){
    fetch('https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF',{
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {

      this.setState({readyToShow:true, data});
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    const toRender = this.state.readyToShow ?
      <View style={styles.list} >
        {this.state.data.photos.map(p=>
          <TouchableHighlight key={p.id}
                              style={styles.listItem}
                              underlayColor="white"
                              onPress={()=>this.props.navigation.navigate('ViewPhoto', { photoUrl: p.image_url[0], name: p.name})}>

            <View >
              <Image source={{uri: p.image_url[0]}} style={styles.listItemImage}/>
              <View style={styles.listItemInfo}>
                <Text numberOfLines={1}>{p.name}</Text>
                <Text numberOfLines={1} style={styles.listItemInfoUser}>made by {p.user.username}</Text>
              </View>
            </View>
          </TouchableHighlight>
        )}

      </View> : <Text>Loading</Text>;
    return (
      <ScrollView>
        {toRender}
      </ScrollView>

    );
  }
}
*/
/*
class PhotoScreen extends React.Component{
  constructor(props){
    super(props);
    const { params } = this.props.navigation.state;
  }
  static navigationOptions = {
    title: 'View photo',
  };
  render(){
    const { params } = this.props.navigation.state;
    return (<ScrollView maximumZoomScale={2}
                        minimumZoomScale={1}
                        bouncesZoom={true}
                        contentContainerStyle={styles.viewPhotoView}>
              <Image source={{uri : params.photoUrl}} style={styles.viewPhotoImage}/>
            </ScrollView>)
  }
}
*/
const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  ViewPhoto:{
    screen: PhotoScreen
  },

}, {initialRouteName: 'Home'});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   list:{
//     paddingTop: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//     backgroundColor: '#eee'
//   },
//   listItem:{
//     margin: 10,
//     backgroundColor: '#fff',
//     width: 150,
//     height: 150
//   },
//   listItemImage:{
//     width: 150,
//     height: 100
//   },
//   listItemInfo:{
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     padding: 5,
//   },
//   listItemInfoUser:{
//     color: 'gray',
//     overflow: 'hidden',
//   },
//   viewPhotoView:{
//     flex:1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'black'
//   },
//   viewPhotoImage:{
//     width: 200,
//     height: 200,
//   }
// });
