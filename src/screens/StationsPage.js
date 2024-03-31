import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RedirectToPageButton = () => {
    const navigation = useNavigation();

    const redirectToPage = () => {
        navigation.navigate('PageAll');
    };

    return (
        <View>
            <Button title="Aller à la page /api/test/all" onPress={redirectToPage} />
        </View>
    );
};

export default RedirectToPageButton;



// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';
//
// const StationsPage = () => {
//     const [stations, setStations] = useState([]);
//     const [selectedStation, setSelectedStation] = useState();
//
//     useEffect(() => {
//         fetch('http://localhost:8080/api/v1/stations')
//             .then((response) => {
//                 console.log('Response received');
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log('Data:', data);
//                 setStations(data);
//             })
//             .catch((error) => console.error('Error fetching stations:', error));
//     }, []);
//
//     return (
//         <View style={styles.container}>
//             <Text>Please select a station:</Text>
//             <RNPickerSelect
//                 onValueChange={(value) => setSelectedStation(value)}
//                 items={stations.map((station) => ({
//                     label: station.name,
//                     value: station.id,
//                 }))}
//             />
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });
//
// export default StationsPage;
