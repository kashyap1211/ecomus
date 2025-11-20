import { BrowserRouter as Router, Routes , Route} from "react-router-dom";
import "./App.css";
import { path } from "./constant";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import LandingPage from "./Pages/LandingPage";
import ShopPage from "./Pages/ShopPage";
import ProductsPage from "./Pages/ProductsPage";
import BlogDetail from "./Containers/Blog/BlogDetail";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ViewCart from "./Containers/Products/ViewCart";
import Checkout from "./Containers/Products/Checkout";
import Collections from "./Containers/Home/Collections";
import QuickAdd from "./Containers/Home/QuickAdd";
import Faqs from "./Containers/Home/Faqs";
import AboutUs from "./Containers/Home/AboutUs";
import PageNotFound from "./Components/PageNotFound";
import Popup from "./Components/Popup";
import AdminRoute from "./Components/AdminRoute";
import AdminDashboard from "./Pages/AdminDashboard";
import Order from "./Components/Order";


function App() {
  return (
    <>
     <Popup />
    <Router>
      <Routes>
        <Route path={path.home} element={<LandingPage/>} />
        <Route path={path.viewcart} element={<LandingPage screen ={<ViewCart/>}/>} />
        <Route path={path.checkout} element={<LandingPage screen ={<Checkout/>}/>} />
        <Route path={path.collections} element={<LandingPage screen ={<Collections/>}/>} />
        <Route path={path.quickadd} element={<LandingPage screen ={<QuickAdd/>}/>} />
        <Route path={path.faqs} element={<LandingPage screen ={<Faqs/>}/>} />
        <Route path={path.aboutus} element={<LandingPage screen ={<AboutUs/>}/>} />
        <Route path={path.pagenotfound} element={<LandingPage screen ={<PageNotFound/>}/>} />
        <Route path={path.blog} element={<LandingPage screen ={<BlogPage/>}/>} />
        <Route path={path.blogdetail} element={<LandingPage screen ={<BlogDetail/>}/>} />
        <Route path={path.contact} element={<LandingPage screen = {<ContactPage/>}/>} />
        <Route path={path.products} element={<LandingPage screen = {<ProductsPage/>}/>} />
        <Route path={path.shop} element={<LandingPage screen = {<ShopPage/>}/>} />
        <Route path={path.order} element={<LandingPage screen = {<Order/>}/>} />


        
        <Route
          path={path.admin}
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route path={path.login} element={<LandingPage screen ={<Login/>}/>} />
        <Route path={path.register} element={<LandingPage screen ={<Register/>}/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
