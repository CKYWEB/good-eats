import {Header} from "@/app/components/Header/header";
import {Footer} from "@/app/components/Footer/footer";

export default function HomeLayout (props) {
    return (
      <>
        <Header />

        {props.children}

        <Footer />
      </>
    );
}