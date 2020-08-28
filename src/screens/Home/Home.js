import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, Image } from 'react-native'
import { connect } from 'react-redux';

import { getList } from '../../actions'


const Home = (props) => {

    useEffect(() => {
        props.getList()

    }, [])

    const renderItem = ({ item }) => (
        <View style={{ height: 100, margin: 10, flexDirection: 'row', backgroundColor: 'white' }}>
            <Image
                defaultSource = {require['../../img/dummy.png']}
                source={{ uri: item.image }}
                style={{ height: 100, width: 100 }}
                resizeMode='contain'
            />
            <View style={{ padding: 10 }}>
                <Text style={styles.text}>  Name: {item.name}</Text>
                <Text style={styles.text}>  Status: {item.status}</Text>
                <Text style={styles.text}>  species: {item.species}</Text>


            </View>

        </View>
    );

    return (

        <View style={{ flex: 1 }}>
            <FlatList
                style={{ flex: 1 }}
                data={props.characters}
                renderItem={renderItem}
                keyExtractor={item => item._id}
                ListEmptyComponent={() => {
                    return (
                        <View style={{
                            alignItems: 'center',
                            marginTop: 20,
                            height: 300,
                            justifyContent: 'center'
                        }}>
                            <Text style={{ fontSize: 10, marginBottom: 30 }}>Herhangi bir data bulunamadı.</Text>


                        </View>

                    )
                }}
                initialNumToRender={2}
            />
        </View>

    )

}

const styles = {
    text: { padding: 3 }
}


//Home page yi reduxa bağlamak
//burada bir get işlemi yapılacak
const mapStateToProps = ({ charactersResponse }) => {
    const { loadingCharacter, characters } = charactersResponse;
    return { loadingCharacter, characters };
};

export default connect(mapStateToProps, { getList })(Home);