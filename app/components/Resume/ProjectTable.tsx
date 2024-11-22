import { Text, View, StyleSheet } from "@react-pdf/renderer";
import dayjs from "dayjs";

type Props = {
  name: string;
  start_date: string;
  end_date: string;
  scale: string;
  detail: string;
  environment: string;
};

const styles = StyleSheet.create({
  textWrap: {
    flexWrap: "wrap",
    flexGrow: 1,
  },
  itemsTable: {
    display: "flex",
    width: "auto",
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableItem: {
    borderWidth: 1,
    borderStyle: "solid",
    padding: 2,
    fontSize: 10,
  },
});

export const ProjectTable: React.FC<Props> = ({
  name,
  start_date,
  end_date,
  scale,
  detail,
  environment,
}) => {
  return (
    <View style={{ ...styles.itemsTable, paddingBottom: "16" }}>
      <View style={styles.tableRow}>
        <Text
          style={{
            ...styles.tableItem,
            width: "20%",
            textAlign: "center",
            backgroundColor: "#d3d3d3",
          }}
        >
          プロジェクト
        </Text>
        <Text
          style={{
            ...styles.tableItem,
            width: "80%",
          }}
        >
          {name}
        </Text>
      </View>
      <View style={styles.tableRow}>
        <Text
          style={{
            ...styles.tableItem,
            width: "20%",
            textAlign: "center",
            backgroundColor: "#d3d3d3",
          }}
        >
          期間
        </Text>
        <Text style={{ ...styles.tableItem, width: "30%" }}>
          {dayjs(start_date).format("YYYY年MM月")} ~{" "}
          {dayjs(end_date).format("YYYY年MM月")}
        </Text>
        <Text
          style={{
            ...styles.tableItem,
            width: "20%",
            textAlign: "center",
            backgroundColor: "#d3d3d3",
          }}
        >
          規模
        </Text>
        <Text style={{ ...styles.tableItem, width: "30%" }}>{scale}</Text>
      </View>
      <View style={styles.tableRow}>
        <Text
          style={{
            ...styles.tableItem,
            width: "60%",
            textAlign: "center",
            backgroundColor: "#d3d3d3",
          }}
        >
          概要
        </Text>
        <Text
          style={{
            ...styles.tableItem,
            width: "40%",
            textAlign: "center",
            backgroundColor: "#d3d3d3",
          }}
        >
          開発環境
        </Text>
      </View>
      <View style={styles.tableRow}>
        <Text
          style={{
            ...styles.tableItem,
            ...styles.textWrap,
            width: "60%",
          }}
        >
          {detail}
        </Text>
        <Text
          style={{
            ...styles.tableItem,
            ...styles.textWrap,
            width: "40%",
          }}
        >
          {environment}
        </Text>
      </View>
    </View>
  );
};
