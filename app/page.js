import { Topbar } from "./containers/topbar"
import { Header } from "./containers/header"
import { Video } from "./containers/video"
import Whyus from "./containers/whyus"
import { Partnerships } from "./containers/partnerships"
import { Projects } from "./containers/projects"
import { Numbers } from "./containers/numbers"
import { Whyagente } from "./containers/whyagente"
import { Services } from "./containers/services"
import { About } from "./containers/about"
import { Testimonials } from "./containers/testimonials"
import { Faq } from "./containers/faq"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-nexa font-light">
      <Topbar />
      <Header />
      <Video />
      <Whyus />
      <Partnerships />
      <Projects />
      <Numbers />
      <Whyagente />
      <Services />
      <About />
      <Testimonials />
      <Faq />
    </div>
  );
}
