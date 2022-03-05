import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import PrivateRoute from "./route/PrivateRoute";
import PublicRoute from "./route/PublicRoute";
import { Suspense } from "react";
import Loader from "./loader/Loader";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Buttons from "./pages/Buttons";

function App() {
  const isAuthenticated = true;

  return (
    <Suspense fallback={<Loader />}>
       <Router>
         <Routes>
           <Route element={<PublicRoute isAuthenticated={isAuthenticated} />}>
             <Route path="/" element={<Login />} />
           </Route>
           <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path="home" element={<Home />}>
              <Route path="" element={<Contact />} />
              <Route path="contact" element={<Contact />} />
              <Route path="button" element={<Buttons />} />
              <Route path="container" element={<Buttons />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
