import {Header} from "@/app/components/Header/header";

export default function ProfileLayout (props) {
    return (
      <>
        <Header />
        {props.children}
      </>
    );
}