/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Button, Image, SafeAreaView, Text, TextInput, View} from 'react-native';
import {styles} from './style';
function App(): JSX.Element {
  const [age, setAge] = useState('');
  const [showMessage, setShowMessage] = useState('');

  const handleAgeChange = (text: any) => {
    // TextInput'den gelen metni yaş (age) state'ine atayın
    setAge(text);
  };
  const imageUrl =
    showMessage === 'Oy kullanabilirsiniz'
      ? 'https://upload.wikimedia.orgj/wikipedia/commons/5/50/Smile_Image.png'
      : 'https://static-00.iconduck.com/assets.00/emoji-sad-icon-1024x1024-t873gdf3.png';
  const handleButtonPress = () => {
    // Yaş (age) değerini kullanmak için burada kullanabilirsiniz
    console.log('Girilen yaş:', age);

    if (age == '') {
      setShowMessage('');
    } else if (parseInt(age) >= 18) {
      // Yaş 18 veya daha büyükse "Oy kullanabilirsiniz" mesajını göster
      setShowMessage('Oy kullanabilirsiniz');
    } else {
      // Yaş 18'den küçükse "Oy kullanamazsınız" mesajını göster
      setShowMessage('Oy kullanamazsınız');
    }
  };
  return (
    <SafeAreaView style={styles.safe_a}>
      <Text style={styles.header_s}>Oy kullanma durumu sorgulama</Text>
      <View style={styles.first_v}>
        <TextInput
          keyboardType="numeric"
          placeholder="Yaşınızı girin."
          style={styles.text_input}
          value={age}
          onChangeText={handleAgeChange}
        />
        <Button
          title="Hesapla"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          onPress={handleButtonPress}
        />
      </View>
      {showMessage != '' && <Text>{showMessage}</Text>}

      {showMessage != '' && (
        <Image
          style={styles.logo}
          source={{
            uri: imageUrl,
          }}
        />
      )}
    </SafeAreaView>
  );
}

export default App;
