import React from 'react';
import {
   Text,
   View,
   StyleSheet,
   Image,
} from 'react-native';
import ButtonEvent from './event_with_button';

export default function Post ({ myPost, myLikeEvent, myCommentEvent, myShareEvent }){
   return (
      <View style={myStyles.stylePost}> 
      <View style={myStyles.postHeader}>
         <Image source={{ uri: myPost.profileImage }} style={myStyles.profileImage} />
         <Text style={myStyles.myText}>{myPost.username}</Text>
      </View>
      <Text style={myStyles.postText}>{myPost.postText}</Text>
      <Image source={{ uri: myPost.contentImage }} style={myStyles.contentImage} />
      <View style={myStyles.statusContainer}>
         <Text style={myStyles.textStatusContainer}>{myPost.likes} <Text style={myStyles.textStatusContainer}> Likes </Text></Text>
         <Text style={myStyles.textStatusContainer}>{myPost.comments} <Text style={myStyles.textStatusContainer}> Comments </Text></Text>
         <Text style={myStyles.textStatusContainer}>{myPost.shares} <Text style={myStyles.textStatusContainer}> Shares </Text></Text>
      </View>

      <View style={myStyles.horizontalLine}></View>

      <ButtonEvent
         myPost={myPost}
         myLikeEvent={myLikeEvent}
         myCommentEvent={myCommentEvent}
         myShareEvent={myShareEvent}
      />
   </View>
   );
}

const myStyles = StyleSheet.create({
   textStatusContainer: {
      color: '#a6a6a6',
      fontSize: 15,
   },
   postText: {
      fontSize: 18,
   },
   stylePost: {
      flex: 1,
      padding: 12,
      backgroundColor: 'white',
      borderRadius: 10,
      margin: 10,
      marginBottom: 0,
   },
   textWithButton: {
      fontSize: 15,
      justifyContent: 'center',
      fontWeight: 'bold',
      marginTop: 2,
   },
   myText: {
      fontSize: 19,
      marginVertical: 10,
      justifyContent: 'center',
      fontWeight: 'bold',
   },
   myFeed: {
      flex: 1,
   },
   bgTitle: {
      padding: 20,
      backgroundColor: 'blue',
   },
   textTitle: {
      textAlign: 'center',
      fontSize: 28,
      fontWeight: 'bold',
      color: 'white',
   },
   profileImage: {
      width: 45,
      height: 45,
      borderRadius: 25,
      marginRight: 13,
   },
   // styles thong tin nguoi post
   postHeader: {
      flexDirection: 'row',
      marginBottom: 10,
   },
   contentImage: {
      width: '100%',
      height: 250,
      borderRadius: 10,
      marginVertical: 10,
   },
   statusContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
   },
   horizontalLine: {
      height: 1,
      backgroundColor: 'silver',
      marginVertical: 18,
   },
   buttonImage: {
      width: 25,
      height: 25,
      marginRight: 5,
      justifyContent: 'center',
   },
   buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
   },
});
