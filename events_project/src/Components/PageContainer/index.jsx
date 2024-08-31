import Footer from "../../layout/Footer/index"
import Header from "../../layout/Header/index"
const PageContainer = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default PageContainer