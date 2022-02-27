import { Navbar, Footer } from "@components/ui";


export default function BaseLayout({children}) {
    return (
      <>
          <Navbar />
       <div className="max-w-7xl mx-auto px-4">
          <div className="fit">
             {children}
          </div>
      </div>
      <Footer />
      </>
    )
}