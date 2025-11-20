import React, { useEffect, useState } from "react";
import API from "../api/axios";
import { Button } from "@headlessui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Tab Button Component
const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md text-sm font-medium border ${
      active ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"
    }`}
  >
    {children}
  </button>
);

// Section Header Component
const SectionHeader = ({ title, action }) => (
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-xl font-semibold">{title}</h2>
    {action}
  </div>
);

// Empty State Component
const EmptyState = ({ title, subtitle, action }) => (
  <div className="text-center py-16 border-2 border-dashed rounded-lg">
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <div className="text-gray-500 mb-4">{subtitle}</div>
    {action}
  </div>
);

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({ products: 0, blogs: 0, users: 0 });
  const [loading, setLoading] = useState(false);
  // Fetch data
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data } = await API.get("/products");
      // Ensure data is an array
      setProducts(Array.isArray(data) ? data : []);
      if (!Array.isArray(data) || data.length === 0) {
        console.log("No products found in database");
      }
    } catch (e) {
      console.error("Error fetching products:", e);
      toast.error(e.response?.data?.message || "Failed to load products. Check if backend is running.");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const { data } = await API.get("/blogs"); // /blogs not /blogs/invalid-id
      setBlogs(data);
    } catch (e) {
      toast.error(e.response?.data?.message || "Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (id) => {
    try {
      await API.delete(`/blogs/${id}`);
      toast.success("Blog deleted successfully!");
      fetchBlogs();
    } catch (e) {
      toast.error(e.response?.data?.message || "Failed to delete blog");
    }
  };

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const { data } = await API.get("/admin/users");
      setUsers(data);
    } catch (e) {
      toast.error(e.response?.data?.message || "Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const { data } = await API.get("/admin/stats");
      setStats(data);
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchStats();
    if (activeTab === "products") fetchProducts();
    if (activeTab === "blogs") fetchBlogs();
    if (activeTab === "users") fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  // Product form state
  const [productForm, setProductForm] = useState({
    name: "",
    price: "",
    description: "",
    images: [],
    colors: [],
    colorsInput: "",
    sizes: [],
    categoryone: "",
    categorytwo: "",
    brand: "",
    availability: "In Stock",
  });
  const [editingProductId, setEditingProductId] = useState(null);

  // Blog form state
  const [blogForm, setBlogForm] = useState({
    title: "",
    categories: [],
    tags: [],
    images: [],
    contents: [],
  });

  const [editingBlogId, setEditingBlogId] = useState(null);

  // Blog submit
  const submitBlog = async (e) => {
    e.preventDefault();

    if (!blogForm.title.trim() || blogForm.contents.length === 0) {
      toast.error("Title and Content are required!");
      return;
    }

    try {
      if (editingBlogId) {
        await API.put(`/blogs/${editingBlogId}`, blogForm);
        toast.success("Blog updated successfully!");
      } else {
        await API.post("/blogs", blogForm);
        toast.success("Blog created successfully!");
      }
      setBlogForm({
        title: "",
        categories: [],
        tags: [],
        images: [],
        contents: [],
      });
      setEditingBlogId(null);
      fetchBlogs();
    } catch (e) {
      toast.error(e.response?.data?.message || "Failed to save blog");
    }
  };

  // Users role update
  const updateUserRole = async (userId, role) => {
    try {
      await API.put(`/admin/users/${userId}/role`, { role });
      toast.success(`Role updated to ${role}`);
      fetchUsers();
    } catch (e) {
      toast.error(e.response?.data?.message || "Failed to update role");
    }
  };

  // Product submit
  const submitProduct = async (e) => {
    e.preventDefault();

    if (!productForm.name || !productForm.price || !productForm.categoryone) {
      toast.error("Name, Price, and Category One are required!");
      return;
    }

    try {
      if (editingProductId) {
        await API.put(`/products/${editingProductId}`, productForm);
        toast.success("Product updated successfully!");
      } else {
        await API.post("/products", productForm);
        toast.success("Product created successfully!");
      }
      setProductForm({
        name: "",
        price: "",
        description: "",
        images: [],
        colors: [],
        colorsInput: "",
        sizes: [],
        categoryone: "",
        categorytwo: "",
        brand: "",
        availability: "In Stock",
      });
      setEditingProductId(null);
      fetchProducts();
    } catch (e) {
      toast.error(e.response?.data?.message || "Failed to save product");
    }
  };

  // Delete product
  const deleteProduct = async (id) => {
    try {
      await API.delete(`/products/${id}`);
      toast.success("Product deleted successfully!");
      fetchProducts();
    } catch (e) {
      toast.error(e.response?.data?.message || "Failed to delete product");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex relative">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Sidebar */}
        <aside
          className={`
            fixed md:static inset-y-0 left-0 z-50
            w-64 min-h-screen border-r bg-white p-4
            transform transition-transform duration-300 ease-in-out
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          `}
        >
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Admin Panel</h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="md:hidden p-2 hover:bg-gray-100 rounded"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="space-y-2">
            {["dashboard", "products", "blogs", "users"].map((tab) => (
              <Button
                key={tab}
                className={`w-full border rounded-xl py-2 transition-colors ${
                  activeTab === tab
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
                onClick={() => {
                  setActiveTab(tab);
                  setSidebarOpen(false); // Close sidebar on mobile when tab is selected
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-full md:w-auto min-h-screen">
          {/* Top Bar - Mobile Header */}
          <div className="sticky top-0 z-30 bg-white border-b md:border-none px-4 py-3 md:px-6 md:py-4 flex items-center justify-between md:justify-end mb-4 gap-2">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 hover:bg-gray-100 rounded"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
            <div className="flex items-center gap-2 ml-auto">
              <button
                className="px-3 py-2 text-sm bg-black text-white rounded hover:bg-gray-800 transition-colors"
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                  toast.success("Logged out successfully!");
                  setTimeout(() => (window.location.href = "/"), 1500);
                }}
              >
                Logout
              </button>
            </div>
          </div>

          <div className="px-4 md:px-6 pb-6">

            {/* Dashboard */}
            {activeTab === "dashboard" && (
              <div>
                <SectionHeader title="Overview" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {["products", "blogs", "users"].map((key) => (
                    <div key={key} className="rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-sm text-gray-500">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </div>
                      <div className="text-3xl font-semibold mt-2">{stats[key]}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Users Tab */}
            {activeTab === "users" && (
              <div>
                <SectionHeader title="Users" />
                <div className="overflow-x-auto border rounded-lg shadow-sm">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-gray-100 text-left">
                        <th className="px-4 py-3 text-sm font-medium text-gray-700">Name</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-700 hidden sm:table-cell">Email</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-700">Role</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.length === 0 ? (
                        <tr>
                          <td colSpan="4" className="px-4 py-8 text-center text-gray-500">
                            No users found
                          </td>
                        </tr>
                      ) : (
                        users.map((u) => (
                          <tr key={u._id} className="border-t hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3">
                              <div className="font-medium">{u.firstName} {u.lastName}</div>
                              <div className="text-sm text-gray-500 sm:hidden">{u.email}</div>
                            </td>
                            <td className="px-4 py-3 hidden sm:table-cell text-sm">{u.email}</td>
                            <td className="px-4 py-3">
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                u.role === "admin" ? "bg-purple-100 text-purple-800" : "bg-gray-100 text-gray-800"
                              }`}>
                                {u.role}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <button
                                className="px-3 py-1 text-sm border rounded hover:bg-gray-100 transition-colors whitespace-nowrap"
                                onClick={() =>
                                  updateUserRole(
                                    u._id,
                                    u.role === "admin" ? "user" : "admin"
                                  )
                                }
                              >
                                Make {u.role === "admin" ? "User" : "Admin"}
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          {/* Products Tab */}
          {activeTab === "products" && (
            <div>
              <SectionHeader
                title="Products"
                action={
                  <button
                    onClick={() => {
                      setEditingProductId(null);
                      setProductForm({
                        name: "",
                        price: "",
                        description: "",
                        images: [],
                        colors: [],
                        colorsInput: "",
                        sizes: [],
                        categoryone: "",
                        categorytwo: "",
                        brand: "",
                        availability: "In Stock",
                      });
                    }}
                    className="px-3 py-2 text-sm bg-black text-white rounded"
                  >
                    New Product
                  </button>
                }
              />

              {/* Product Form */}
              <form
                onSubmit={submitProduct}
                className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 bg-white p-4 rounded-lg border shadow-sm"
              >
                <input
                  className="border rounded px-3 py-2"
                  placeholder="Name"
                  value={productForm.name}
                  onChange={(e) =>
                    setProductForm({ ...productForm, name: e.target.value })
                  }
                  required
                />
                <input
                  className="border rounded px-3 py-2"
                  placeholder="Price"
                  type="number"
                  value={productForm.price}
                  onChange={(e) =>
                    setProductForm({ ...productForm, price: e.target.value })
                  }
                  required
                />
                <textarea
                  className="md:col-span-2 border rounded px-3 py-2"
                  placeholder="Description"
                  rows="3"
                  value={productForm.description}
                  onChange={(e) =>
                    setProductForm({
                      ...productForm,
                      description: e.target.value,
                    })
                  }
                />
                <input
                  className="border rounded px-3 py-2"
                  placeholder="Images (comma separated URLs)"
                  value={productForm.images.join(",")}
                  onChange={(e) =>
                    setProductForm({
                      ...productForm,
                      images: e.target.value.split(",").map((i) => i.trim()),
                    })
                  }
                />
                <input
                  className="border rounded px-3 py-2"
                  placeholder="Colors (red:#ff0000,blue:#0000ff)"
                  value={productForm.colorsInput}
                  onChange={(e) => {
                    const colorsArr = e.target.value
                      .split(",")
                      .map((c) => {
                        const [name, code] = c.split(":");
                        return { name: name?.trim(), code: code?.trim() };
                      })
                      .filter((c) => c.name && c.code);
                    setProductForm({
                      ...productForm,
                      colors: colorsArr,
                      colorsInput: e.target.value,
                    });
                  }}
                />
                <input
                  className="border rounded px-3 py-2"
                  placeholder="Sizes (S,M,L,XL)"
                  value={productForm.sizes?.join(",")}
                  onChange={(e) =>
                    setProductForm({
                      ...productForm,
                      sizes: e.target.value.split(",").map((s) => s.trim()),
                    })
                  }
                />
                <input
                  className="border rounded px-3 py-2"
                  placeholder="Category One"
                  value={productForm.categoryone}
                  onChange={(e) =>
                    setProductForm({
                      ...productForm,
                      categoryone: e.target.value,
                    })
                  }
                  required
                />
                <input
                  className="border rounded px-3 py-2"
                  placeholder="Category Two"
                  value={productForm.categorytwo}
                  onChange={(e) =>
                    setProductForm({
                      ...productForm,
                      categorytwo: e.target.value,
                    })
                  }
                />
                <input
                  className="border rounded px-3 py-2"
                  placeholder="Brand"
                  value={productForm.brand}
                  onChange={(e) =>
                    setProductForm({ ...productForm, brand: e.target.value })
                  }
                />
                <select
                  className="border rounded px-3 py-2"
                  value={productForm.availability}
                  onChange={(e) =>
                    setProductForm({
                      ...productForm,
                      availability: e.target.value,
                    })
                  }
                >
                  <option value="In Stock">In Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
                </select>
                <button
                  className="md:col-span-2 px-4 py-2 bg-black text-white rounded"
                  type="submit"
                >
                  {editingProductId ? "Update" : "Create"} Product
                </button>
              </form>

              {/* Product List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {loading ? (
                  <p className="text-gray-500">Loading products...</p>
                ) : products.length === 0 ? (
                  <EmptyState
                    title="No products found"
                    subtitle={
                      <div className="text-sm text-gray-500 mt-2">
                        <p>The database is empty or there was an error loading products.</p>
                        <p className="mt-2">Please check:</p>
                        <ul className="list-disc list-inside mt-1 space-y-1 text-xs">
                          <li>Backend server is running on port 5000</li>
                          <li>MongoDB connection is working</li>
                          <li>API URL is correct in .env file</li>
                        </ul>
                      </div>
                    }
                    action={
                      <button 
                        className="px-3 py-2 bg-black text-white rounded mt-4"
                        onClick={() => {
                          setEditingProductId(null);
                          setProductForm({
                            name: "",
                            price: "",
                            description: "",
                            images: [],
                            colors: [],
                            colorsInput: "",
                            sizes: [],
                            categoryone: "",
                            categorytwo: "",
                            brand: "",
                            availability: "In Stock",
                          });
                        }}
                      >
                        Create First Product
                      </button>
                    }
                  />
                ) : (
                  products.map((p) => (
                    <div key={p._id} className="border rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-sm sm:text-base truncate flex-1">{p.name}</h3>
                        <span className="text-sm font-semibold text-gray-700 ml-2">
                          ${p.price}
                        </span>
                      </div>
                      {p.images?.[0] && (
                        <img
                          src={p.images[0]}
                          alt={p.name}
                          className="w-full h-36 sm:h-40 object-cover rounded mb-3"
                        />
                      )}
                      <div className="flex gap-2 flex-wrap">
                        <button
                          className="px-3 py-1 text-sm border rounded hover:bg-gray-100 transition-colors flex-1 sm:flex-initial"
                          onClick={() => {
                            setEditingProductId(p._id);
                            setProductForm({
                              name: p.name || "",
                              price: p.price || "",
                              description: p.description || "",
                              images: p.images || [],
                              colors: p.colors || [],
                              colorsInput: p.colors
                                ?.map((c) => `${c.name}:${c.code}`)
                                .join(","),
                              sizes: p.sizes || [],
                              categoryone: p.categoryone || "",
                              categorytwo: p.categorytwo || "",
                              brand: p.brand || "",
                              availability: p.availability || "In Stock",
                            });
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="px-3 py-1 text-sm border rounded text-red-600 border-red-300 hover:bg-red-50 transition-colors flex-1 sm:flex-initial"
                          onClick={() => deleteProduct(p._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

                  {/* Blogs Tab */}
        {activeTab === "blogs" && (
          <div>
            <SectionHeader
              title="Blogs"
              action={
                <button
                  onClick={() => {
                    setEditingBlogId(null);
                    setBlogForm({ title: "", categories: [], tags: [], images: [], contents: [] });
                  }}
                  className="px-3 py-2 text-sm bg-black text-white rounded"
                >
                  New Blog
                </button>
              }
            />

            {/* Blog Form */}
            <form
              onSubmit={submitBlog}
              className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 bg-white p-4 rounded-lg border shadow-sm"
            >
              {/* Title */}
              <input
                className="border rounded px-3 py-2"
                placeholder="Title"
                value={blogForm.title}
                onChange={(e) =>
                  setBlogForm({ ...blogForm, title: e.target.value })
                }
                required
              />

              {/* Categories */}
              <input
                className="border rounded px-3 py-2"
                placeholder="Categories (comma separated)"
                value={(blogForm.categories || []).join(", ")}
                onChange={(e) =>
                  setBlogForm({
                    ...blogForm,
                    categories: e.target.value
                      .split(",")
                      .map((c) => c.trim())
                      .filter((c) => c.length > 0),
                  })
                }
              />

              {/* Tags */}
              <input
                className="border rounded px-3 py-2"
                placeholder="Tags (comma separated)"
                value={(blogForm.tags || []).join(", ")}
                onChange={(e) =>
                  setBlogForm({
                    ...blogForm,
                    tags: e.target.value
                      .split(",")
                      .map((t) => t.trim())
                      .filter((t) => t.length > 0),
                  })
                }
              />

              {/* Images */}
              <input
                className="border rounded px-3 py-2"
                placeholder="Image URLs (comma separated)"
                value={(blogForm.images || []).join(", ")}
                onChange={(e) =>
                  setBlogForm({
                    ...blogForm,
                    images: e.target.value
                      .split(",")
                      .map((i) => i.trim())
                      .filter((i) => i.length > 0),
                  })
                }
              />

              {/* Contents */}
              <textarea
                className="md:col-span-2 border rounded px-3 py-2"
                placeholder="Contents (separate paragraphs with | )"
                rows="4"
                value={(blogForm.contents || []).join(" | ")}
                onChange={(e) =>
                  setBlogForm({
                    ...blogForm,
                    contents: e.target.value
                      .split("|")
                      .map((c) => c.trim())
                      .filter((c) => c.length > 0),
                  })
                }
                required
              />

              <button
                className="md:col-span-2 px-4 py-2 bg-black text-white rounded"
                type="submit"
              >
                {editingBlogId ? "Update" : "Create"} Blog
              </button>
            </form>

            {/* Blog List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {loading ? (
                <p>Loading...</p>
              ) : blogs.length === 0 ? (
                <EmptyState
                  title="No blogs"
                  subtitle="Create your first blog."
                  action={
                    <button className="px-3 py-2 bg-black text-white rounded">
                      Create Blog
                    </button>
                  }
                />
              ) : (
                blogs.map((b) => (
                  <div key={b._id} className="border rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-medium mb-2 text-sm sm:text-base">{b.title}</h3>
                    {b.images?.[0] && (
                      <img
                        src={b.images[0]}
                        alt={b.title}
                        className="w-full h-36 sm:h-40 object-cover rounded mb-3"
                      />
                    )}
                    <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                      {b.contents?.[0] || b.content || "No content"}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <button
                        className="px-3 py-1 text-sm border rounded hover:bg-gray-100 transition-colors flex-1 sm:flex-initial"
                        onClick={() => {
                          setEditingBlogId(b._id);
                          setBlogForm({
                            title: b.title || "",
                            categories: Array.isArray(b.categories)
                              ? b.categories
                              : [],
                            tags: Array.isArray(b.tags) ? b.tags : [],
                            images: Array.isArray(b.images)
                              ? b.images
                              : b.image
                              ? [b.image]
                              : [],
                            contents: Array.isArray(b.contents)
                              ? b.contents
                              : b.content
                              ? [b.content]
                              : [],
                          });
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="px-3 py-1 text-sm border rounded text-red-600 border-red-300 hover:bg-red-50 transition-colors flex-1 sm:flex-initial"
                        onClick={() => deleteBlog(b._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
