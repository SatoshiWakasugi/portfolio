import {
  Document as PDFDocument,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
  updatedAt: string;
};

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    fontFamily: "NotoSansJP",
  },
  header: {
    marginBottom: 24,
    fontWeight: "bold",
  },
  flexRowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textVertical: {
    flexDirection: "column",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  pageNumber: {
    fontSize: 8,
  },
});

export const Document: React.FC<Props> = ({ children, updatedAt }) => {
  useEffect(() => {
    document.body.style.height = "100vh";
  }, []);

  return (
    <PDFViewer height="100%" width="100%">
      <PDFDocument>
        <Page size="A4" style={styles.page} wrap>
          <View style={styles.flexRowBetween}>
            <View style={styles.header}>
              <View>
                <Text style={styles.title}>職務経歴書</Text>
              </View>
              <View style={styles.textVertical}>
                <Text>氏名：若杉 智史（ワカスギ サトシ）</Text>
              </View>
            </View>
            <View style={styles.textVertical}>
              <Text>{updatedAt} 現在</Text>
            </View>
          </View>
          <View>{children}</View>
          <Text
            fixed
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            style={styles.pageNumber}
          />
        </Page>
      </PDFDocument>
    </PDFViewer>
  );
};
