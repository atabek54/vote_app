import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safe_a: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  first_v: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  header_s: {
    fontSize: 20,
    margin: 15,
  },
  text_input: {
    fontSize: 20,
    borderWidth: 1, // Sınır kalınlığı
    borderColor: 'gray', // Sınır rengi
    borderRadius: 5, // Sınırın köşe yuvarlama
    width: 200, // TextInput genişliği
    padding: 10,
    marginLeft: 10,
  },
  logo: {
    width: 166,
    height: 166,
    marginTop: 100,
  },
});
