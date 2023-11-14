import {Header} from "@/app/(main)/header";
import {Footer} from "@/app/(main)/footer";

export default function HomeLayout (props) {
    return (
      <>
        <Header />

        {props.children}

        <Footer />
      </>
    );
}