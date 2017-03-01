/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

export default class AvatarItem extends Component {
  render() {
    <View style={styles.container}>
      <Image style={styles.avatarImage} source= />
      <Text style={styles.title}>John Doe</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  avatarImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  title: {
    flex: 1,
    fontSize: 19,
    fontWeight: 'bold',
  },
});


AppRegistry.registerComponent('app4', () => app4);
