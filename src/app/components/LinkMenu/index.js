import Link from "next/link";
import styles from "./LinkMenu.module.scss";
import {usePathname} from "next/navigation";

export default function LinkMenu (props) {
    const {routes} = props;
    const pathname = usePathname();

    const isLinkActive = (currentPath, p) => {
        return currentPath.startsWith(p);
    };

    return (
      <ul className="list-unstyled">
        {routes.map(r => (
          <Link
            key={r.href}
            href={r.href}
          >
            <li
              className={`py-3 ps-3 border-bottom fs-5
                  ${isLinkActive(pathname, r.href) ? styles["li--active"] : styles.li}`}
            >
              {r.label}
            </li>
          </Link>
        ))}
      </ul>
    );
}