import React, { useEffect } from 'react'
import {View, Text, StyleSheet}  from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getAllSurahs } from '../../stores/actions/user.action'
import { backgroundColor, textColor } from '../../utils/them'

export const Surahs = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllSurahs())
    }, [])

    const surahs = useSelector(state => state.userReducer.surahs)

    return (
        <View>
            <FlatList 
                data={surahs}
                renderItem={({item, index}) => {
                    return(
                        <View style={styles.surahContainer} key={index}>
                            <Text style={styles.textStyle}>
                                {item.name}
                            </Text>
                            <Text style={[styles.textStyle, {left: '90%', position: 'absolute', top: 10}]}> 
                                {index + 1}
                            </Text>
                        </View>
                    )
                }}
                ListEmptyComponent={
                    <View>
                        <Text>
                            Surah not found
                        </Text>
                    </View>
                }
            />
        </View>
    )
} 

const styles = StyleSheet.create({
    surahContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        margin: 5,
        backgroundColor: backgroundColor,
        borderRadius: 10
    },
    textStyle: {
        color: textColor
    }
})