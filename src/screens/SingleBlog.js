import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { Ionicons } from '@expo/vector-icons';
import {
  Container,
  Button,
  Header,
  Footer,
  Content,
  Left,
  Right,
} from 'native-base';

export default class FindAgent extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <Header
          style={{
            backgroundColor: '#fff',
            flexDirection: 'row',
            shadowColor: '#000',

            justifyContent: 'center',
            alignItems: 'center',
            shadowOpacity: 0.4,

            shadowRadius: 10,
            shadowOffset: {
              height: 0.5,
              width: 0.5,
            },
          }}>
          <TouchableOpacity
            onPress={() => navigate('AllBlog')}
            style={{ position: 'absolute', left: 5 }}>
            <Icon name="arrowleft" color="#C4C4C4" size={26} />
          </TouchableOpacity>
          <Text style={{fontSize: 18}}>Blog</Text>
        </Header>
        <Content>
          <ScrollView>
            <Image
              source={require('../images/Blog.png')}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: Dimensions.get('window').width / 1.1,
                height: 180,
                borderRadius: 20,
                marginHorizontal: 10,

                marginTop: 15,
              }}
            />

            <Text style={{ fontWeight: 'bold', marginLeft: 15, marginTop: 15 }}>
              This is Blog Title
            </Text>

            <Text style={{ marginLeft: 15, marginTop: 25, margin: 10 }}>
              In literary theory, a text is any object that can be "read",
              whether this object is a work of literature, a street sign, an
              arrangement of buildings on a city block, or styles of clothing.
            </Text>
            <Text style={{ marginLeft: 15, marginTop: 10, margin: 10 }}>
              In literary theory, a text is any object that can be "read",
              whether this object is a work of literature, a street sign, an
              arrangement of buildings on a city block, or styles of clothing.
            </Text>
            <Text style={{ marginLeft: 15, marginTop: 10, margin: 10 }}>
              In literary theory, a text is any object that can be "read",
              whether this object is a work of literature, a street sign, an
              arrangement of buildings on a city block, or styles of clothing.
            </Text>
            <Text style={{ marginLeft: 15, marginTop: 10, margin: 10 }}>
              In literary theory, a text is any object that can be "read",
              whether this object is a work of literature, a street sign, an
              arrangement of buildings on a city block, or styles of clothing.
            </Text>
            <Text style={{ marginLeft: 15, marginTop: 10, margin: 10 }}>
              In literary theory, a text is any object that can be "read",
              whether this object is a work of literature, a street sign, an
              arrangement of buildings on a city block, or styles of clothing.
            </Text>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingTop: 10,
  },
});
