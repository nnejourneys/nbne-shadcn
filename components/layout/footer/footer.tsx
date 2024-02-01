import FooterMenu from "./footer-menu";
import SocialLinks from "./social-links";
import Copyright from "./copyright";
import Developer from "./developer";
import FooterIntro from "./footer-intro";
import Footerdata from "@/data/footer.json";
import Menuitems from "@/data/menu.json";
import Bounded from "@/components/styledcomps/bounded";
import BackTopBtn from "./back-top-btn";

export default function Footer() {
  const importantlinks = Menuitems.menu.footer[0];
  const quicklinks = Menuitems.menu.footer[1];
  return (
    <footer className="bg-muted border-t-2 border-primary relative">
      <Bounded width="marginx">
        <div className="grid md:grid-cols-4 gap-8 pt-20">
          <div className="md:col-span-2">
            <FooterIntro footerdata={Footerdata} />
            <SocialLinks footerdata={Footerdata} />
          </div>
          <FooterMenu footermenu={importantlinks} />
          <FooterMenu footermenu={quicklinks} />
        </div>
        <Copyright footerdata={Footerdata} />
      </Bounded>
      <BackTopBtn />
      <Developer />
    </footer>
  );
}
