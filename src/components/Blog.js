import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Filter, TrendingUp, Eye, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Blog({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'SEO', 'Graphic Design', 'Social Media', 'Digital Marketing', 'Web Development', 'Video Editing'];

  const blogPosts = [
    {
      id: 1,
      title: '10 SEO Strategies That Will Dominate 2024',
      excerpt: 'Discover the latest SEO techniques that are driving real results for businesses in 2024. From Core Web Vitals to AI-powered content optimization.',
      category: 'SEO',
      author: 'Sarah Rodriguez',
      date: '2024-01-15',
      readTime: '8 min read',
      views: 2400,
      comments: 23,
      featured: true,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop',
      tags: ['SEO', 'Digital Marketing', 'Strategy', '2024 Trends']
    },
    {
      id: 2,
      title: 'Mastering High-Converting Landing Pages: Strategies That Work',
      excerpt: 'Discover the key components that transform your landing pages into powerful conversion machines. Packed with proven techniques, real-world examples, and expert tips to boost your conversion rates effectively.',
      category: 'Web Development & Conversion Optimization',
      author: 'Michael Kim',
      date: '2024-01-12',
      readTime: '12 min read',
      views: 1800,
      comments: 31,
      featured: false,
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop',
      tags: ['Landing Pages', 'CRO', 'Web Design', 'Conversions']
    },
    {
      id: 3,
      title: 'The Ultimate Guide to Graphic Design in 2024',
      excerpt: 'Learn the principles, tools, and trends that define modern graphic design. From typography to layout, master the art of visual storytelling.',
      category: 'Graphic Design',
      author: 'Alex Chen',
      date: '2024-01-10',
      readTime: '15 min read',
      views: 3200,
      comments: 45,
      featured: true,
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',  // or replace with one from above
      tags: ['Graphic Design', 'Typography', 'Visual Design', 'Creative Tools']
    },
    {
      id: 4,
      title: 'Social Media Marketing Trends to Watch',
      excerpt: 'Stay ahead of the curve with the latest social media marketing trends, including short-form video, social commerce, and influencer partnerships.',
      category: 'Social Media',
      author: 'Emma Thompson',
      date: '2024-01-08',
      readTime: '10 min read',
      views: 1950,
      comments: 28,
      featured: false,
      image: 'https://images.unsplash.com/photo-1683721003111-070bcc053d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29jaWFsJTIwbWVkaWElMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D',
      tags: ['Social Media', 'Trends', 'Marketing Strategy', 'Engagement']
    },
    {
      id: 5,
      title: 'Effective Digital Marketing Automation Strategies',
      excerpt: 'Discover how to automate your digital marketing campaigns to boost engagement and conversions. Learn segmentation, personalization, and automation best practices across channels.',
      category: 'Digital Marketing',
      author: 'Sarah Rodriguez',
      date: '2024-01-05',
      readTime: '11 min read',
      views: 2100,
      comments: 19,
      featured: false,
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D',
      tags: ['Digital Marketing', 'Automation', 'Lead Nurturing', 'Personalization']
    },
    {
      id: 6,
      title: 'Measuring Impact in Video Editing Projects',
      excerpt: 'Learn how to evaluate the effectiveness of your video edits and projects. Includes tools, metrics, and techniques to improve your video content.',
      category: 'Video Editing',
      author: 'Michael Kim',
      date: '2024-01-03',
      readTime: '9 min read',
      views: 1650,
      comments: 22,
      featured: false,
      image: 'https://images.unsplash.com/photo-1682506457554-b34c9682e985?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZlZGlvJTIwZWRpdGluZ3xlbnwwfHwwfHx8MA%3D%3D',
      tags: ['Video Editing', 'Post Production', 'Metrics', 'Content Impact']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } },
  };

  return React.createElement(
    "section",
    { className: "py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" },

    // Background
    React.createElement("div", { className: "absolute inset-0" },
      React.createElement(motion.div, {
        animate: { x: [0, 50, 0], y: [0, -25, 0], rotate: [0, 90, 180] },
        transition: { duration: 20, repeat: Infinity, ease: "linear" },
        className: "absolute top-32 right-16 w-28 h-28 bg-gradient-to-br from-purple-500/10 to-teal-500/10 rounded-full blur-lg"
      })
    ),

    // Wrapper
    React.createElement("div", { className: "max-w-7xl mx-auto relative z-10" },

      // Header
      React.createElement(motion.div, {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: "text-center mb-16"
      },
        React.createElement("h1", { className: "text-4xl lg:text-6xl font-bold mb-6" },
          React.createElement("span", { className: "bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent" },
            "Digital Marketing Blog"
          )
        ),
        React.createElement("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto mb-8" },
          "Stay ahead of the curve with the latest insights, strategies, and trends in digital marketing."
        ),
        React.createElement("div", { className: "flex flex-col lg:flex-row items-center justify-center gap-4 max-w-4xl mx-auto" },
          React.createElement("div", { className: "relative flex-1 max-w-md" },
            React.createElement(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" }),
            React.createElement(Input, {
              type: "text",
              placeholder: "Search articles...",
              value: searchTerm,
              onChange: e => setSearchTerm(e.target.value),
              className: "pl-10 bg-slate-800/50 border-slate-700 focus:border-purple-500 text-white"
            })
          ),
          React.createElement("div", { className: "flex items-center gap-2 flex-wrap" },
            React.createElement(Filter, { className: "text-gray-400 w-5 h-5" }),
            categories.map(category =>
              React.createElement(Button, {
                key: category,
                variant: selectedCategory === category ? "default" : "outline",
                size: "sm",
                onClick: () => setSelectedCategory(category),
                className: selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-teal-500 text-white border-0 cursor-pointer"
                  : "border-slate-600 text-gray-300 hover:border-purple-500/50 hover:text-purple-400 cursor-pointer"
              }, category)
            )
          )
        )
      ),

      // Featured posts
      selectedCategory === 'All' && React.createElement(motion.div, {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.2 },
        className: "mb-16"
      },
        React.createElement("h2", { className: "text-2xl font-bold text-white mb-8 flex items-center" },
          React.createElement(TrendingUp, { className: "mr-3 w-6 h-6 text-purple-400" }),
          "Featured Articles"
        ),
        React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8" },
          featuredPosts.slice(0, 2).map(post =>
            React.createElement(motion.div, {
              key: post.id,
              whileHover: { y: -5 },
              className: "group cursor-pointer"
            },
              React.createElement(Card, { 
                className: "h-full bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 overflow-hidden cursor-pointer",
                onClick: () => onNavigate('blog', post.id)
              },
                React.createElement("div", { className: "relative" },
                  React.createElement(ImageWithFallback, { src: post.image, alt: post.title, className: "w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" }),
                  React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" }),
                  React.createElement(Badge, { className: "absolute top-4 left-4 bg-purple-600/90 text-white" }, "Featured"),
                  React.createElement(Badge, { className: "absolute top-4 right-4 bg-slate-900/80 text-white" }, post.category)
                ),
                React.createElement(CardHeader, null,
                  React.createElement(CardTitle, { className: "text-xl text-white group-hover:text-purple-400 transition-colors line-clamp-2" }, post.title),
                  React.createElement(CardDescription, { className: "text-gray-300 line-clamp-3" }, post.excerpt)
                ),
                React.createElement(CardContent, null,
                  React.createElement("div", { className: "flex flex-wrap gap-2 mb-4" },
                    post.tags.slice(0, 3).map((tag, i) =>
                      React.createElement(Badge, { key: i, variant: "outline", className: "text-xs border-purple-500/30 text-purple-400" }, tag)
                    )
                  ),
                  React.createElement("div", { className: "flex items-center justify-between text-sm text-gray-400" },
                    React.createElement("div", { className: "flex items-center space-x-4" },
                      React.createElement("div", { className: "flex items-center" },
                        React.createElement(User, { className: "w-4 h-4 mr-1" }), post.author
                      ),
                      React.createElement("div", { className: "flex items-center" },
                        React.createElement(Calendar, { className: "w-4 h-4 mr-1" }),
                        new Date(post.date).toLocaleDateString()
                      )
                    ),
                    React.createElement("div", { className: "flex items-center space-x-3" },
                      React.createElement("div", { className: "flex items-center" },
                        React.createElement(Eye, { className: "w-4 h-4 mr-1" }), post.views
                      ),
                      React.createElement("div", { className: "flex items-center" },
                        React.createElement(MessageCircle, { className: "w-4 h-4 mr-1" }), post.comments
                      )
                    )
                  ),
                  React.createElement(Button, { 
                    className: "w-full mt-4 bg-gradient-to-r from-purple-600 to-teal-500 hover:opacity-90 transition-all duration-300 cursor-pointer",
                    onClick: () => onNavigate('blog', post.id)
                  },
                    "Read More", React.createElement(ArrowRight, { className: "ml-2 w-4 h-4" })
                  )
                )
              )
            )
          )
        )
      ),

      // Regular posts
      React.createElement(motion.div, { variants: containerVariants, initial: "hidden", animate: "visible" },
        React.createElement("h2", { className: "text-2xl font-bold text-white mb-8" },
          selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`
        ),
        filteredPosts.length === 0
          ? React.createElement("div", { className: "text-center py-16" },
              React.createElement("div", { className: "text-6xl mb-4" }, "📝"),
              React.createElement("h3", { className: "text-xl font-semibold text-white mb-2" }, "No articles found"),
              React.createElement("p", { className: "text-gray-400" }, "Try adjusting your search or filter criteria.")
            )
          : React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" },
              (selectedCategory === 'All' ? regularPosts : filteredPosts).map(post =>
                React.createElement(motion.div, { key: post.id, variants: cardVariants, whileHover: { y: -5 }, className: "group cursor-pointer" },
                  React.createElement(Card, { 
                    className: "h-full bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 overflow-hidden cursor-pointer",
                    onClick: () => onNavigate('blog', post.id)
                  },
                    React.createElement("div", { className: "relative" },
                      React.createElement(ImageWithFallback, { src: post.image, alt: post.title, className: "w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500" }),
                      React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" }),
                      React.createElement(Badge, { className: "absolute top-3 right-3 bg-slate-900/80 text-white text-xs" }, post.category)
                    ),
                    React.createElement(CardHeader, { className: "pb-3" },
                      React.createElement(CardTitle, { className: "text-lg text-white group-hover:text-purple-400 transition-colors line-clamp-2" }, post.title),
                      React.createElement(CardDescription, { className: "text-gray-300 text-sm line-clamp-2" }, post.excerpt)
                    ),
                    React.createElement(CardContent, null,
                      React.createElement("div", { className: "flex flex-wrap gap-1 mb-3" },
                        post.tags.slice(0, 2).map((tag, i) =>
                          React.createElement(Badge, { key: i, variant: "outline", className: "text-xs border-purple-500/30 text-purple-400" }, tag)
                        )
                      ),
                      React.createElement("div", { className: "flex items-center justify-between text-xs text-gray-400 mb-4" },
                        React.createElement("div", { className: "flex items-center" },
                          React.createElement(User, { className: "w-3 h-3 mr-1" }), post.author
                        ),
                        React.createElement("div", { className: "flex items-center" },
                          React.createElement(Calendar, { className: "w-3 h-3 mr-1" }), new Date(post.date).toLocaleDateString()
                        )
                      ),
                      React.createElement("div", { className: "flex items-center justify-between text-xs text-gray-500 mb-4" },
                        React.createElement("span", null, post.readTime),
                        React.createElement("div", { className: "flex items-center space-x-2" },
                          React.createElement("div", { className: "flex items-center" },
                            React.createElement(Eye, { className: "w-3 h-3 mr-1" }), post.views
                          ),
                          React.createElement("div", { className: "flex items-center" },
                            React.createElement(MessageCircle, { className: "w-3 h-3 mr-1" }), post.comments
                          )
                        )
                      ),
                      React.createElement(Button, { 
                        variant: "outline", 
                        className: "w-full border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 cursor-pointer",
                        onClick: () => onNavigate('blog', post.id)
                      },
                        "Read Article", React.createElement(ArrowRight, { className: "ml-2 w-3 h-3" })
                      )
                    )
                  )
                )
              )
            )
      )
    )
  );
}
