import HeaderSection from "../sections/header.tsx";
import ContentSection from "../sections/content.tsx";
import FooterSection from "../sections/footer.tsx";
import BoardList from "../components/boardList.tsx";

export default function Home(){
    return (
        <div>
            <HeaderSection title="Home"/>
            <ContentSection Content={BoardList}/>
            <FooterSection/>
        </div>
    );
}