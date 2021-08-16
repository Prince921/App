import React, {useState} from 'react';
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
  Picker
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
const LoanCalculator = ({ navigation })=> {
  const [loan, setLoan] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [rate, setRate] = useState(0);


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
          onPress={() => navigation.navigate('Home')}
          style={{ position: 'absolute', left: 5 }}>
          <Icon name="arrowleft" color="#C4C4C4" size={26} />
        </TouchableOpacity>
        <Text style={{fontSize: 18}}>Loan Calculator</Text>
      </Header>
        <Content>
          <TouchableOpacity
            style={{
              margin: 8,
              borderRadius: 20,
              borderWidth: 2,

              borderColor: '#fff',

              marginHorizontal: 10,

              marginTop: 25,

              backgroundColor: '#fff',
              paddingVertical: 2,

              shadowColor: '#C4C4C4',
              shadowOpacity: 1,
              elevation: 10,
              padding: 5,
            }}>
            <View
              style={{
                marginBottom: 10,
                flexDirection: 'row',
                marginTop: 10,
              }}>
              <Left>
                <Text style={{ fontWeight: 'bold' }}>Total Payment</Text>
              </Left>
              <Right><Text>{(100*loan + loan*tenure*rate)/100}</Text></Right>
            </View>
            <View
              style={{
                marginBottom: 10,
                flexDirection: 'row',
              }}>
              <Left>
                <Text style={{ fontWeight: 'bold' }}>S.I</Text>
              </Left>
              <Right>
<Text>{(loan*tenure*rate)/100}</Text>
              </Right>
            </View>
            <View
              style={{
                flexWrap: 'wrap',
                marginBottom: 10,
                flexDirection: 'row',
              }}>
              <Left>
                <Text style={{ fontWeight: 'bold' }}>Principle Amount</Text>
              </Left>
              <Right>
<Text>{loan}</Text>
              </Right>
            </View>
          </TouchableOpacity>
          <View style={{ marginHorizontal: 10, marginTop: 10 }}>
            <Text>Loan Amount</Text>
          </View>
          <View
            style={{
              borderWidth: 2,
              marginTop: 10,
              borderRadius: 13,
              borderColor: '#FFF',
              backgroundColor: '#fff',
              paddingVertical: 2,

              marginHorizontal: 10,

              shadowColor: 'black',
              shadowOpacity: 1,
              elevation: 10,
              flexDirection: 'row',

              alignItems: 'center',
              height: 47,
            }}>
            <Icon
              name="wallet"
              color="#C4C4C4"
              size={20}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 5,
                marginRight: 10,
              }}
            />
            <TextInput
              placeholder="50000"
              keyboardType={'numeric'}
              style={{ flex: 1 }}
              onChangeText={(loan)=>setLoan(loan)}



            />
          </View>
          <View style={{ marginHorizontal: 10, marginTop: 10 }}>
            <Text>Rate of Intrest</Text>
          </View>
          <View
            style={{

              marginTop: 15,
              borderRadius: 13,
              borderColor: '#FFF',
              backgroundColor: '#fff',

              flexDirection: 'row',

              marginHorizontal: 10,
              alignItems: 'center',
              shadowColor: 'black',
              shadowOpacity: 1,
              elevation: 10,
              justifyContent: 'center',
            }}>
            <View style={{ marginLeft: 10 }}>
              <Icon name="barschart" color="#C4C4C4" size={20} />
            </View>
            <View
              style={{
                flexDirection: 'row',

                alignItems: 'center',
              }}>
              <Picker
              selectedValue={rate}
                onValueChange={(rate)=>setRate(rate)}
                style={{
                  width: 320,
                }}>
                <Picker.Item label="Rate" value="0"/>
               <Picker.Item label="1" value="1" />
               <Picker.Item label="2" value="2"/>
              <Picker.Item label="3" value="3" />
              </Picker>
            </View>
          </View>

          <View style={{ marginHorizontal: 10, marginTop: 10 }}>
            <Text>Loan Tenure</Text>
          </View>
          <View
            style={{
              borderWidth: 2,
              marginTop: 10,
              borderRadius: 13,
              borderColor: '#FFF',
              backgroundColor: '#fff',
              paddingVertical: 2,

              marginHorizontal: 10,

              shadowColor: 'black',
              shadowOpacity: 1,
              elevation: 10,
              flexDirection: 'row',

              alignItems: 'center',
              height: 47,
              marginBottom: 50
            }}>
            <Icon
              name="clockcircleo"
              color="#C4C4C4"
              size={20}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 5,
                marginRight: 10,
              }}
            />
            <TextInput
              placeholder="Enter Loan Tenure"
              keyboardType={'numeric'}
              style={{ flex: 1 }}
              onChangeText={(tenure)=>setTenure(tenure)}

            />
          </View>
        </Content>
      </Container>
    );

};
export default LoanCalculator;
