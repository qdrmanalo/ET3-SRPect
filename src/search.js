import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import HeaderSRP from '../components/headerSRP';
import { FontAwesome, Entypo } from '@expo/vector-icons';

export default function SearchScreen() {
  
  const [focused, setFocused] = useState(false);
  const [search, setSearch] = useState('');
  const onFocus = () => setFocused(true);
  const cancelInput = () => setFocused(false);
  const clearSearch = () => setSearch('')

  // Test Serch List
  const [list, setList] = useState([
    createImageMessage('http://unsplash.it/500/500'),
    createTextMessage('World'),
    createTextMessage('Hello'),
    createLocationMessage({
      latitude: 37.78825,
      longitude: -122.4324,
    }),
  ]);
  
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <HeaderSRP/>
      </View>
      <View style={styles.menuContainer}>
        <View style={styles.searchBarContainer}>
          <View style={
            focused
            ? styles.searchBar__tapped
            : styles.searchBar__untapped
          }>
            <FontAwesome name="search" size={20} color="black" />
            <TextInput
            style={styles.input}
            onFocus={onFocus} 
            placeholder='Search' placeholderTextColor='#A1A1A1'
            value={search}
            onChangeText={setSearch} 
            />
            {focused && (
              <TouchableOpacity>
                <Entypo name="cross" size={20} color="black" onPress={clearSearch}/>
              </TouchableOpacity>
            )}
          </View>
          {focused && (
            <TouchableOpacity style={styles.cancelButton} onPress={cancelInput}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.listContainer}>
          <FlatList />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  headerContainer: {
    flex: 1,
  },
  menuContainer: {
    flex: 5,
  },
  searchBarContainer: {
    height: '10%',
    paddingHorizontal: '5%',
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  searchBar__tapped: {
    height: 25,
    width: "80%",
    borderRadius: 10,
    paddingLeft: 5,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  searchBar__untapped: {
    height: 25,
    width: "95%",
    paddingLeft: 5,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 15,
    width: "90%",
    marginHorizontal: '2%',
  },
  cancelButton: {
    paddingLeft: '2%',
  },
  cancelText: {
    fontSize: 15,
    color: '#F00'
  },
  listContainer: {
    flex: 1,
    borderWidth: 1,
  },
});