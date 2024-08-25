import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Definición de la pantalla principal
function HomeScreen({ navigation }) {
    return (
        <ImageBackground
            source={require('./assets/background.jpg')}
            style={styles.background}
        >
            <View style={styles.container}>
                <Image
                    source={require('./assets/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('SecondScreen')} // Navegar a la segunda pantalla
                >
                    <Text style={styles.buttonText}>Iniciar</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
        </ImageBackground>
    );
}

// Definición de la segunda pantalla
function SecondScreen() {
    const movies = [
        { id: '1', name: 'Alien: Romulus', image: require('./assets/alien-romulus.jpg') },
        { id: '2', name: 'El salto', image: require('./assets/el-salto.jpg') },
        { id: '3', name: 'El cuervo', image: require('./assets/el-cuervo-957452.jpg') },
        { id: '4', name: 'El hombre bueno', image: require('./assets/el-hombre-bueno.jpg') },
        { id: '5', name: 'El sindicato', image: require('./assets/el-sindicato.jpg') },
        { id: '6', name: 'Dragon ball z: la galaxia corre peligro', image: require('./assets/dragon-ball-z-.jpg') },
        { id: '7', name: 'Robo en los suburbios', image: require('./assets/robo-en-los-suburbios.jpg') },
        { id: '8', name: 'Bajoterra: el retorno de los elementales', image: require('./assets/bajoterra.jpg') },
        { id: '9', name: 'Gantzo', image: require('./assets/gantzo.jpg') },
        { id: '10', name: 'Shark girl', image: require('./assets/shark-girl.jpg') },
        { id: '11', name: 'Lumina', image: require('./assets/lumina.jpg') },
        { id: '12', name: 'Cosmos', image: require('./assets/cosmos.jpg') },
        { id: '13', name: 'The outlaws', image: require('./assets/the-outlaws.jpg') },
        { id: '14', name: 'Hoy, si', image: require('./assets/hoy-si.jpg') },
        { id: '15', name: 'Tierra de los muertos', image: require('./assets/tierra-de-los-muertos.jpg') },
        { id: '16', name: 'Mortal', image: require('./assets/mortal.jpg') },
        { id: '17', name: 'Red de traicion', image: require('./assets/red-de-traicion.jpg') },
        { id: '18', name: 'Shiki Oriori', image: require('./assets/shiki.jpg') },
        { id: '19', name: 'Furia sin limites', image: require('./assets/furia-sin-limites.jpg') },
        { id: '20', name: 'Wrath of van helsing', image: require('./assets/wrath-of-van-helsing.jpg') },
        { id: '21', name: 'The hangman', image: require('./assets/the-hangman.jpg') },
        { id: '22', name: 'Sting araña asesina', image: require('./assets/sting-arana-asesina.jpg') },
        { id: '23', name: 'Viejos', image: require('./assets/viejos.jpg') },
        { id: '24', name: 'El rostro de la venganza', image: require('./assets/el-rostro-de-la-venganza.jpg') },
        { id: '25', name: 'Before dawn', image: require('./assets/before-dawn.jpg') },
        { id: '26', name: 'Una maniobra arriesgada', image: require('./assets/una-maniobra-arriesgada.jpg') },
        { id: '27', name: 'Entre la vida y la muerte', image: require('./assets/entre-la-vie-et-la-mort.jpg') },
        { id: '28', name: 'El vientre del mal', image: require('./assets/el-vientre-del-mal.jpg') },
        { id: '29', name: 'Invasion final', image: require('./assets/invasion-final.jpg') },
        { id: '30', name: 'Hombres duros', image: require('./assets/hombres-duros.jpg') },
    ];

    const series = [
        { id: '31', name: 'Breaking Bad', image: require('./assets/breaking bag.jpg') },
        { id: '32', name: 'La casa de papel', image: require('./assets/la-casa-de-papel.jpg') },
        { id: '33', name: 'Top boy', image: require('./assets/top-boy.jpg') },
        { id: '34', name: 'Lupin', image: require('./assets/lupin.jpg') },
        { id: '35', name: 'Swat', image: require('./assets/swat.jpg') },
        { id: '36', name: 'Lucifer', image: require('./assets/lucifer.jpg') },
        // ... más series ...
    ];

    const MovieItem = ({ item }) => (
        <View style={styles.movieContainer}>
            <Image source={item.image} style={styles.movieImage} />
            <Text style={styles.movieTitle}>{item.name}</Text>
        </View>
    );

    const SeriesItem = ({ item }) => (
        <View style={styles.seriesContainer}>
            <Image source={item.image} style={styles.seriesImage} />
            <Text style={styles.seriesTitle}>{item.name}</Text>
        </View>
    );

    return (
        <ScrollView style={styles.secondContainer}>
            <View style={styles.stickyHeaderContainer}>
                <Image
                    source={require('./assets/deadpool-3.jpg')} // Ruta de la imagen local
                    style={styles.video} // Usa el estilo para el video
                />
            </View>

            <Text style={styles.sectionTitle}>Películas</Text>
            <FlatList
                data={movies}
                renderItem={MovieItem}
                keyExtractor={item => item.id}
                numColumns={3} // Número de columnas en el grid
                contentContainerStyle={styles.flatListContent}
            />

            <Text style={styles.sectionTitle}>Series</Text>
            <FlatList
                data={series}
                renderItem={SeriesItem}
                keyExtractor={item => item.id}
                numColumns={3} // Número de columnas en el grid
                contentContainerStyle={styles.flatListContent}
            />
        </ScrollView>
    );
}

// Configuración de la navegación
const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }} // Oculta el encabezado
                />
                <Stack.Screen
                    name="SecondScreen"
                    component={SecondScreen}
                    options={{
                        title: 'Muvixfree',
                        headerStyle: {
                            backgroundColor: '#FE9900', // Color naranja para la barra de encabezado
                        },
                        headerTintColor: '#fff', // Color blanco para el texto del encabezado
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 500,
        height: 150,
        position: 'absolute',
        top: 510, // Ajusta la posición según sea necesario
        left: -50, // Ajusta la posición según sea necesario
    },
    button: {
        backgroundColor: '#808080', // Color gris sólido
        borderRadius: 10, // Bordes redondeados
        paddingVertical: 15, // Espaciado vertical dentro del botón
        paddingHorizontal: 30, // Espaciado horizontal dentro del botón
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 100, // Ajusta la distancia desde la parte inferior
        width: 200, // Ajusta el ancho del botón
        height: 50, // Ajusta la altura del botón
    },
    buttonText: {
        color: '#fff', // Color blanco para el texto
        fontSize: 18,
        fontWeight: 'bold',
    },
    secondContainer: {
        flex: 1,
        backgroundColor: '#000', // Fondo negro
    },
    stickyHeaderContainer: {
        position: 'relative',
        zIndex: 1,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FE9900', // Color naranja
        marginVertical: 10,
        marginLeft: 10,
    },
    flatListContent: {
        paddingHorizontal: 5,
    },
    movieContainer: {
        flex: 1,
        margin: 5,
        alignItems: 'center',
    },
    movieImage: {
        width: 120,
        height: 180,
        resizeMode: 'cover',
    },
    movieTitle: {
        color: '#fff', // Texto blanco
        marginTop: 5,
        textAlign: 'center',
        fontSize: 12,
    },
    seriesContainer: {
        flex: 1,
        margin: 5,
        alignItems: 'center',
        width: '100%', // Ancho completo para series
    },
    seriesImage: {
        width: '100%', // Ancho completo para la imagen de la serie
        height: 200,
        resizeMode: 'cover',
    },
    seriesTitle: {
        color: '#fff', // Texto blanco
        marginTop: 5,
        textAlign: 'center',
        fontSize: 12,
    },
    video: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
});
