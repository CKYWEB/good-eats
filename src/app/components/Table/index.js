import Table from "rc-table";
import styles from "./table.module.scss";
export default function TableComponent (props) {
    return (
      <Table
        className={styles.table}
        {...props}
      />
    );
}