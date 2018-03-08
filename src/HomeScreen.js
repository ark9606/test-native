/**
 * Created by ARK on 05.03.2018.
 */
import React from 'react';
import { TouchableHighlight, StyleSheet, Text, ScrollView, View, Image, Alert } from 'react-native';

import {connect} from 'react-redux';
import {loadData, appendData} from './actions/dataActions';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Test Application',
  };

  constructor(props){
    super(props);
    this.loadMore = this.loadMore.bind(this);
  }
  loadMore(){
    const newPage = this.props.current_page + 1;
    fetch(`https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF&page=${newPage}`,{
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
      this.props.appendData(data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  componentDidMount(){
    fetch('https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF',{
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {

        // this.setState({readyToShow:true, data});
        this.props.setData(data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    const toRender = this.props.photos ?
      <View>
        <View style={styles.list} >
          {this.props.photos.map(p=>
            <TouchableHighlight key={p.id}
                                style={styles.listItem}
                                underlayColor="white"
                                onPress={()=>this.props.navigation.navigate('ViewPhoto', { photoUrl: p.image_url[0], name: p.name})}>

              <View>
                <Image source={{uri: p.image_url[0]}} style={styles.listItemImage}/>
                <View style={styles.listItemInfo}>
                  <Text numberOfLines={1}>{p.name}</Text>
                  <Text numberOfLines={1} style={styles.listItemInfoUser}>made by {p.user.username}</Text>
                </View>
              </View>
            </TouchableHighlight>
          )}

        </View>
        <TouchableHighlight style={styles.loadMoreBtn}
                            underlayColor="white"
                            onPress = {this.loadMore}>
          <Text style={styles.loadMoreBtnText}>Load more</Text>
        </TouchableHighlight
        >
      </View>
      : <Text>Loading</Text>;
    return (
      <ScrollView>
        {toRender}
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list:{
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#eee'
  },
  listItem:{
    margin: 10,
    backgroundColor: '#fff',
    width: 150,
    height: 150
  },
  listItemImage:{
    width: 150,
    height: 100
  },
  listItemInfo:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 5,
  },
  listItemInfoUser:{
    color: 'gray',
    overflow: 'hidden',
  },
  loadMoreBtn:{
    flex: 1,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd'
  },
  loadMoreBtnText:{
    color: '#009800',
  }
});

// state - redux global state
const mapStateToProps = (state)=>{
  return {
    ...state
  };
};

// state - redux global state
const mapDispatchToProps = (dispatch)=>{
  return {
    setData: (data)=>{
      dispatch(loadData(data));
    },
    appendData: (data)=>{
      dispatch(appendData(data));
    },

  };
};
export default connect(mapStateToProps, mapDispatchToProps )(HomeScreen);