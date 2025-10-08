import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Policy from "./components/Layout/Policy/Policy";
import Slider from "./components/Slider/Slider";
import Products from "./components/Products/Products";
import Categories from "./components/Categories/Categories";
import Campaigns from "./components/Campaigns/Campaigns";
import Blogs from "./components/Blogs/Blogs";
import Brands from "./components/Brands/Brands";
import CampaignSingle from "./components/CampaignSingle/CampaignSingle"; 
import "./App.css";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import Cart from "./components/Cart/Cart";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
function App() {
  return (
    <>
     {/* <HomePage /> */}
     {/* <ShopPage /> */}
    {/* <ContactPage /> */}
    {/* <AuthPage /> */}
   {/* <CartPage /> */}
   {/* <BlogPage /> */}
   {/* <BlogDetailsPage />   */}
   <ProductDetailsPage />
     </>
  );
}

export default App;
