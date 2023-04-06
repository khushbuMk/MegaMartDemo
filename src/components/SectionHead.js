import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const SectionHead = ({ title, subTitle, seeAllPress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title} {' '}
                <Text style={styles.subTitle}>
                    {subTitle}
                </Text>
            </Text>
            <TouchableOpacity onPress={seeAllPress} >
                <Text style={styles.seeAll}>
                    See All
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    seeAll: {
        color: '#3669C9'
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 25,
        color: '#0C1A30'
    },
    subTitle: {
        fontSize: 15

    }
})