import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import PostPage from "./pages/PostPage";
import SearchResults from "./pages/SearchResults";
import BlogsAdmin from "./pages/BlogsAdmin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Unified blogs route */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<PostPage />} />
          {/* Other routes */}
          {/* Removed category and contact routes */}
          <Route path="/search" element={<SearchResults />} />
          {/* Individual blog post page route */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/blogs-admin" element={<BlogsAdmin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
