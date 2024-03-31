import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://192.168.1.74:8080/api/test/all');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <View style={styles.container}>
            {data ? (
                <Text>{JSON.stringify(data)}</Text> // Afficher les données comme vous le souhaitez
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;
