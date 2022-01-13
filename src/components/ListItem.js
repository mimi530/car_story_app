import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import colors from "../constants/colors";
import AppText from "./AppText";
import { Swipeable } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItem({
    title,
    description,
    milage,
    date,
    icon,
    renderRightActions,
    onPress,
}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={styles.container}>
                    {icon && (
                        <View style={styles.iconBox}>
                            <MaterialCommunityIcons
                                name={icon}
                                size={40}
                                color={colors.white}
                            />
                        </View>
                    )}
                    <View style={styles.content}>
                        <AppText style={styles.title}>{title}</AppText>
                        {description && (
                            <AppText style={styles.description}>
                                {description}
                            </AppText>
                        )}
                        <View style={styles.footer}>
                            <AppText style={styles.milage}>
                                {milage
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, " ") +
                                    " km"}
                            </AppText>
                            {date && (
                                <AppText style={styles.date}>{date}</AppText>
                            )}
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Swipeable>
    );
}

export default ListItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    iconBox: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: 50,
        marginRight: 10,
    },
    content: {
        flex: 1,
    },
    date: {
        backgroundColor: colors.primary,
        paddingHorizontal: 10,
        borderRadius: 10,
        fontSize: 15,
    },
    description: {
        fontSize: 15,
    },
    milage: {
        fontSize: 15,
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
    },
    title: {
        fontWeight: "bold",
        color: colors.primary,
        marginBottom: 10,
    },
});
