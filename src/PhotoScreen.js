/**
 * Created by ARK on 05.03.2018.
 */
import React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';

export default class PhotoScreen extends React.Component{
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


const styles = StyleSheet.create({
  viewPhotoView:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  viewPhotoImage:{
    width: 200,
    height: 200,
  }
});
