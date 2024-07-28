import { StyleSheet, View } from 'react-native';

export const FlexDirectionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.box1]} />
            <View style={[styles.box, styles.box2]} />
            <View style={[styles.box, styles.box3]} />
            <View style={[styles.box, styles.box4]} />
            <View style={[styles.box, styles.box1]} />
            <View style={[styles.box, styles.box2]} />
            <View style={[styles.box, styles.box3]} />
            <View style={[styles.box, styles.box4]} />
            <View style={[styles.box, styles.box1]} />
            <View style={[styles.box, styles.box2]} />
            <View style={[styles.box, styles.box3]} />
            <View style={[styles.box, styles.box4]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D1D1D1',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: 30,
    },
    box: {
        // flex: 1,
        width: 100,
        height: 100,
    },
    box1: {
        backgroundColor: '#5856D6',
        // top: -100,
    },
    box2: {
        backgroundColor: '#4240A2',
        // alignSelf: 'flex-end',
    },
    box3: {
        backgroundColor: '#2E2D71',
    },
    box4: {
        backgroundColor: '#222155',
    },
})
