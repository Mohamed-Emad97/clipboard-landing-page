import {Landing, About, Title, Companies, Download, Footer, Image, Services} from "./Components/index";

function App() {

  return (
    <>
      <Landing/>
      <Title 
          title="Keep track of your snippets"  
          txt="Clipboard instantly stores any item you copy in the cloud, meaning you can access
          your snippets immediately on all your devices. Our Mac and ioOS apps will help you
          organize everything.
          "
          align ="text-center"
          padding="py-5"
      />
      <About/>
      <Title 
          title="Access Clipboard Anywhere"  
          txt="
          Whether you're on the go, or at your computer, you can access all your clipboard
          snippets in a few simple clicks.
          "
          align ="text-center"
          padding="py-5"
      />
      <Image/>
      <Title 
          title="Supercharge your workflow"  
          txt="
          We've got the tools to boost your productivity.
          "
          align ="text-center"
          padding="py-5"
      />
      <Services/>
      <Companies/>
      <Title 
          title="Clipboard for iOS and Mac OS"  
          txt="
          Available for free on the app store. Download for Mac or iOS, sync with iCloud and
          you're ready to start adding to your clipboard.
          "
          align ="text-center"
          padding="py-5"
      />
      <Download/>
      <Footer/>
    </>
  )
}

export default App
