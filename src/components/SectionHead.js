import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const SectionHead = ({ title, subTitle, seeAllPress }) => {
    return (
        <View style={styles.spacing}>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
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

    },
    spacing: {
        marginTop: 40,
        marginBottom: 10,
        width: Dimensions.get('window').width * .9,
        justifyContent: 'center',
    },
})