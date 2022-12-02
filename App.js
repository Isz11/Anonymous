import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
    const [enteredPostText, setEnteredPostText] = useState('');
    const [posts, setPosts] = useState([]);

    function postInputHandler(enteredText) {
        setEnteredPostText(enteredText);
    };

    function addPostHandler() {
        setPosts((currentPosts) => [...currentPosts, enteredPostText]);
    };

    return (
        <View style={styles.appContainer}>
            <View>
                <TextInput placeholder="What's on your mind?" onChangeText={postInputHandler}/>
                <Button title="Post" onPress={addPostHandler}/>
            </View>
            <View style={styles.postsContainer}>
                {posts.map((post) => 
                    <View key={post} style={styles.postContainer}>
                        <View style={styles.postVotesContainer}>
                            <Text>Votes</Text>
                        </View>
                        <View style={styles.postContentAndDetailsContainer}>  
                            <View  style={styles.postContentContainer}>
                                <Text>{post}</Text>
                            </View>
                            <View style={styles.postDetailsContainer}>
                                <Text>1m ago --- 2 km away</Text>
                            </View>
                        </View> 
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: 'cyan',
        alignItems: 'center',
        padding: 20,
    },
    postsContainer: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 1,
        width: '100%',
    },
    postContainer: {
        flexDirection: 'row',
        margin: 2,
        borderWidth: 1,
        padding: 2,
        height: 100,
    },
    postContentAndDetailsContainer: {
        flex: 1,
    },
    postVotesContainer: {
        margin: 1,
        borderWidth: 1,
        padding: 1,
    },
    postContentContainer: {
        flex: 1,
        margin: 1,
        borderWidth: 1,
        padding: 1,
    },
    postDetailsContainer: {
        margin: 1,
        borderWidth: 1,
        padding: 1,
        height: '30%',
    },
});
