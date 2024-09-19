import React from 'react';

const blogs = [
  {
    id: 1,
    title: 'The Latest Tech Trends in 2024',
    excerpt: 'Explore the most cutting-edge technology trends to watch out for in 2024.',
    image: 'https://via.placeholder.com/400',
    author: 'John Doe',
    date: 'September 10, 2024',
  },
  {
    id: 2,
    title: 'Top 10 Gadgets for Every Tech Enthusiast',
    excerpt: 'Here’s a list of the must-have gadgets for all tech lovers.',
    image: 'https://via.placeholder.com/400',
    author: 'Jane Smith',
    date: 'August 25, 2024',
  },
  {
    id: 3,
    title: 'How AI is Changing the World of Electronics',
    excerpt: 'A deep dive into the revolutionary changes AI is bringing to electronics.',
    image: 'https://via.placeholder.com/400',
    author: 'Sam Wilson',
    date: 'July 15, 2024',
  },
  {
    id: 4,
    title: 'How AI is Changing the World of Electronics',
    excerpt: 'A deep dive into the revolutionary changes AI is bringing to electronics.',
    image: 'https://via.placeholder.com/400',
    author: 'Sam Wilson',
    date: 'July 15, 2024',
  },
  {
    id: 5,
    title: 'How AI is Changing the World of Electronics',
    excerpt: 'A deep dive into the revolutionary changes AI is bringing to electronics.',
    image: 'https://via.placeholder.com/400',
    author: 'Sam Wilson',
    date: 'July 15, 2024',
  },
  {
    id: 6,
    title: 'How AI is Changing the World of Electronics',
    excerpt: 'A deep dive into the revolutionary changes AI is bringing to electronics.',
    image: 'https://via.placeholder.com/400',
    author: 'Sam Wilson',
    date: 'July 15, 2024',
  },
  // Add more blog posts here
];

const Blog = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Latest Blog Posts</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800 hover:text-orange-500 transition duration-300">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-3">{blog.excerpt}</p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 text-sm">{blog.author}</p>
                  <p className="text-gray-500 text-sm">{blog.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
