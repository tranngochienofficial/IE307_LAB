import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import Header from './header';
import Post from './post';


const postsData = [
  {
    id: 1,
    profileImage: 'https://i.pinimg.com/564x/d4/19/5b/d4195bea24a42f467121069756c1afa8.jpg',
    username: "Hi En",
    postText: "Hopeless... 😅",
    contentImage: 'https://i.pinimg.com/564x/09/5d/17/095d178d7a3fb7152ae991617cec12f9.jpg',
    likes: 20,
    liked: false,
    comments: 3,
    shares: 15,
  },
  {
    id: 2,
    profileImage: 'https://i.pinimg.com/564x/71/71/01/717101475f3de761a8fdc547510755b9.jpg',
    username: "hientn",
    postText: "I can do it! 🦢🦢",
    contentImage: 'https://i.pinimg.com/564x/82/b5/5a/82b55a1d820081a85c62d28a6d8dec9d.jpg',
    likes: 33,
    liked: false,
    comments: 12,
    shares: 5,
  },
  {
    id: 3,
    profileImage: 'https://i.pinimg.com/564x/54/29/64/5429649db56c2141684de58015b696a7.jpg',
    username: "Noo",
    postText: "Have a good day!",
    contentImage: 'https://i.pinimg.com/564x/84/f8/a5/84f8a53a14b53ad45071e32dc9245b64.jpg',
    likes: 60,
    liked: false,
    comments: 3,
    shares: 22,
  },
];

export default function App() {
  const [myPosts, setPosts] = useState([...postsData]);
  const [isClicked, setIsClicked] = useState(false);

  const handleOnLikeClick = (postId) => {
    const updatedPosts = myPosts.map(post => {
      if (post.id == postId && !isClicked) {
        return {
          ...post,
          likes: post.likes + 1,
          liked: post.liked = true,
        }
      }
      else if(post.id == postId && isClicked){
        return {
          ...post,
          likes: post.likes - 1,
          liked: post.liked = false,
        }
      }
      return post;
    });
    setIsClicked(!isClicked);
    setPosts(updatedPosts);
  }

  const handleOnShareClick = (postId) => {
    const updatedPosts = myPosts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          shares: post.shares + 1,
        }
      }
      return post;
    });
    setPosts(updatedPosts);
  }

  const handleOnCommentClick = (postId) => {
    const updatedPosts = myPosts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: post.comments + 1,
        }
      }
      return post;
    });
    setPosts(updatedPosts);
  }

  return (
    <ScrollView style={myStyles.scrollView}>
      <View style={myStyles.container}>
        <Header appName="Social Media Feed"/>
        <View sytle={myStyles.myFeed}>
          {myPosts.map(post => (
              <Post
                key = {post.id}
                myPost={post}
                myLikeEvent={handleOnLikeClick}
                myCommentEvent={handleOnCommentClick}
                myShareEvent={handleOnShareClick}
              />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    marginTop: 35,
  },
  myFeed: {
    flex: 1,
  },
});
