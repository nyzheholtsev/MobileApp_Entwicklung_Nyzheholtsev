import { StyleSheet } from "react-native";

export const listStyles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 3,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },

  cardSubtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  smallAvatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 15,
  },
});
