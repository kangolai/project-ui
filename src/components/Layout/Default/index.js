import Header from '../header';
import Footer from '../footer';
function defaultLayout({ children }) {
    return (
        <div id="wrapper">
            <Header></Header>
            <div id="wrapper_container">{children}</div>
            <Footer></Footer>
        </div>
    );
}

export default defaultLayout;
