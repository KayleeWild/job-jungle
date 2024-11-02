import { StatusBar } from 'expo-status-bar';
import { 
  Dimensions,
  StyleSheet, 
  Text,
  TouchableHighlight, 
  TouchableOpacity,
  View, 
  SafeAreaView, 
  Image,
  Alert, 
  Platform,
  Button} from 'react-native';

export default function App() {

  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      // flexWrap: "wrap",
      alignContent: "center"
    }}
    >
      <View style={{
        backgroundColor: 'pink',
        width: 100,
        height: 100,
        borderRadius: "50px",
      }}>
      </View>
      <View style={{
        backgroundColor: 'gold',
        width: 100,
        height: 100,
        borderRadius: "50px"
      }}>
      </View>
      <View style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 100,
        borderRadius: "50px"
      }}>
      </View>
      <View style={{
        backgroundColor: 'grey',
        width: 100,
        height: 100,
        borderRadius: "50px"
      }}>
      </View>
      <View style={{
        backgroundColor: 'greenyellow',
        width: 100,
        height: 100,
        borderRadius: "50px"
      }}>
      </View>
    </View>
  );
}

const containerStyle = { backgroundColor: "orange"};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
