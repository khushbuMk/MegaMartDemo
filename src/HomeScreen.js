import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { Dimensions, FlatList, Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStore from './AsyncStore';
import { Categories, EcomData, Images } from './constants';
import { Ionicons } from '@expo/vector-icons';
import { SectionHead } from './components/SectionHead';
import CategoryItem from './components/CategoryItem';
import ProductCard from './components/ProductCard';
import ProductCardContainer from './components/ProductCardContainer';



export default function Home({ navigation, setToken }) {

    const [search, setSearch] = useState();

    const handleLogout = () => {
        AsyncStore.clearToken()
        setToken('');
    };

    useEffect(() => {
        navigation.setOptions({
            header: (props) => (
                <SafeAreaView {...props.options.headerStyle} style={{ paddingTop: Platform.OS == 'android' ? 40 : 0, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                        <View style={{
                            justifyContent: 'center',
                        }}>
                            <Image source={Images.Logo} resizeMode={'contain'} style={{ width: 100 }} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={{ marginRight: 10 }}>
                                <Ionicons name='notifications-outline' size={24} color={'black'} />
                                <View style={styles.notification} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons name='cart-outline' size={30} color={'black'} />
                                <View style={styles.notification} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            ),
            headerStyle: {
                elevation: 5,
                shadowOpacity: 1,
                backgroundColor: 'white',
                padding: 10
            },
        })
    }, [])


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View
                style={{
                    width: '100%', padding: 20,
                }}>

                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Search Product Name"
                        onChangeText={setSearch}
                        value={search}
                        style={{ flex: 1 }}
                    />
                    <TouchableOpacity>
                        <Ionicons
                            name={'search-outline'}
                            size={24}
                            color="#000"
                        />
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal style={{ height: 170, width: '100%' }} >
                    <Image source={Images.Featured} style={styles.banner} resizeMode='contain' />
                    <Image source={Images.Featured} style={styles.banner} resizeMode='contain' />
                    <Image source={Images.Featured} style={styles.banner} resizeMode='contain' />
                </ScrollView>

                <View style={styles.gap} />

                <SectionHead title={'Markets'} />

                <FlatList
                    horizontal
                    data={Categories}
                    renderItem={CategoryItem}
                />

            </View>



            <View
                style={{
                    backgroundColor: '#FAFAFA',
                    borderRadius: 20,
                    width: '100%',
                    alignItems: 'center'
                }}
            >

                <SectionHead title={'New Arrivals'} />
                <FlatList
                    horizontal
                    data={EcomData.new_arrival}
                    renderItem={ProductCardContainer}
                    keyExtractor={({index})=>index}
                />
                

                <View style={{ height: 170 }} >
                    <Image source={Images.Banner.MobileSale} style={styles.banner} resizeMode='contain' />
                </View>


                <SectionHead title={'Suggested for you'} />
                <FlatList
                    horizontal
                    data={EcomData.suggested}
                    renderItem={ProductCardContainer}
                    keyExtractor={({index})=>index}
                />

                <View style={{ height: 170 }} >
                    <Image source={Images.Banner.HeadphoneSale} style={styles.banner} resizeMode='contain' />
                </View>


                <SectionHead title={"What's Trending"} />
                <FlatList
                    horizontal
                    data={EcomData.trending}
                    renderItem={ProductCardContainer}
                    keyExtractor={({index})=>index}
                />

                <SectionHead title={'Top Picks-'} subTitle={'Grocery'} />
                <FlatList
                    horizontal
                    data={EcomData.Grocery}
                    renderItem={ProductCardContainer}
                    keyExtractor={({index})=>index}
                />
                


                <SectionHead title={'Top Picks-'} subTitle={'Fashion'} />
                <FlatList
                    horizontal
                    data={EcomData.Fashion}
                    renderItem={ProductCardContainer}
                    keyExtractor={({index})=>index}
                />


                <SectionHead title={'Top Picks-'} subTitle={'Fruits & Vegetables'} />
                <FlatList
                    horizontal
                    data={EcomData.FruitsNVegs}
                    renderItem={ProductCardContainer}
                    keyExtractor={({index})=>index}
                />


                <TouchableOpacity onPress={handleLogout} style={styles.button} >
                    <Text style={styles.buttonText}>LogOut</Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginVertical: 8,
        minWidth: 200,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    notification: {
        height: 10,
        width: 10,
        backgroundColor: 'red',
        borderRadius: 10,
        position: 'absolute',
        right: 1,
        top: 2
    },
    inputContainer: {
        backgroundColor: '#FAFAFA',
        borderRadius: 10,
        padding: 10,
        marginVertical: 8,
        minWidth: 200,
        flexDirection: 'row',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gap: {
        height: 40,
    },
    banner: {
        marginRight: 10,
        height: '100%',
        width: Dimensions.get('screen').width * .9,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
            },
            android: {
                // elevation: 5,
            },
        }),
    }
});
