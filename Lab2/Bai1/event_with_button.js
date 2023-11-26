import React, { useState } from "react";
import {
   View,
   StyleSheet,
} from 'react-native';
import CustomButton from './custom_button';

export default function Button_Event({ myPost, myLikeEvent, myCommentEvent, myShareEvent }) {
   return (
      <View style={myStyles.interactiveContainer}>
         <CustomButton
            myPost={myPost}
            btnImage={myPost.liked ? require('./images/icons/liked.png') : require('./images/icons/like.png')}
            btnText="Likes"
            myHandleOnClick={myLikeEvent}
         />
         <CustomButton
            myPost={myPost}
            btnImage={require('./images/icons/comment.png')}
            btnText="Comments"
            myHandleOnClick={myCommentEvent}
         />
         <CustomButton
            myPost={myPost}
            btnImage={require('./images/icons/share.png')}
            btnText="Shares"
            myHandleOnClick={myShareEvent}
         />
      </View>
   );
};

const myStyles = StyleSheet.create({
   interactiveContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 5,
      padding: 5,
   }

});