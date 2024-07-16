import AsideFooter from "../AsideFooter"
import DevCommunityCard from "../DevCommunityCard";
import NavLinks from "../NavLinks";
import OtherLinks from "../OthersLinks";
import SocialLinks from "../SocialLinks";
import Tags from "../Tags";
import WelcomeCard from "../WelcomeCard";


export default function LeftSidebar() {
    return (
        <aside className="w-full px-2 py-3 space-y-4">
            <WelcomeCard />
            <NavLinks />
            <OtherLinks />
            <SocialLinks />
            <Tags />
            <DevCommunityCard />
            <AsideFooter />
        </aside>
    )
}