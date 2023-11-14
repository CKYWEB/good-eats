import {Header} from "@/app/(main)/Header/header";
import {Footer} from "@/app/(main)/Footer/footer";

export default function HomeLayout (props) {
    return (
      <>
        <Header />

        {props.children}

        <Footer />
      </>
    );
}