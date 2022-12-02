import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
    return (
        <View style={styles.appContainer}>
            <View>
                <TextInput placeholder="What's on your mind?" />
                <Button title="Post" />
            </View>
            <View style={styles.postsContainer}>
                <View style={styles.postContainer}>
                    <View style={styles.postVotesContainer}>
                        <Text>Votes</Text>
                    </View>
                    <View style={styles.postContentAndDetailsContainer}>  
                        <View  style={styles.postContentContainer}>
                            <Text>Post no. 1</Text>
                        </View>
                        <View style={styles.postDetailsContainer}>
                            <Text>1m ago --- 2 km away</Text>
                        </View>
                    </View> 
                </View>

                <View style={styles.postContainer}>
                    <View style={styles.postVotesContainer}>
                        <Text>Votes</Text>
                    </View>
                    <View style={styles.postContentAndDetailsContainer}>  
                        <View  style={styles.postContentContainer}>
                            <Text>Post no. 2</Text>
                        </View>
                        <View style={styles.postDetailsContainer}>
                            <Text>5m ago --- 3 km away</Text>
                        </View>
                    </View> 
                </View>

                <View style={styles.postContainer}>
                    <View style={styles.postVotesContainer}>
                        <Text>Votes</Text>
                    </View>
                    <View style={styles.postContentAndDetailsContainer}>  
                        <View  style={styles.postContentContainer}>
                            <Text>Post no. 3</Text>
                        </View>
                        <View style={styles.postDetailsContainer}>
                            <Text>15m ago --- 1 km away</Text>
                        </View>
                    </View> 
                </View>
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
