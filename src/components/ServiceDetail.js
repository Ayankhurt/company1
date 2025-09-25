import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Star, Users, Clock, Award, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function ServiceDetail({ serviceId, onNavigate }) {
  // Services data with detailed information
  const services = [
    {
      id: 1,
      icon: 'Search',
      title: "SEO (Search Engine Optimization)",
      shortDesc: "Boost your organic visibility and drive qualified traffic",
      // category: "SEO",
      duration: "3-6 months",
      price: "Starting from $500/month",
      rating: 4.9,
      projects: 150,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop",
      features: [
        "Keyword Research & Strategy",
        "On-Page Optimization",
        "Technical SEO Audits",
        "Link Building",
        "Local SEO",
        "SEO Analytics & Reporting"
      ],
      benefits: [
        "Increase organic traffic by 200-400%",
        "Higher search engine rankings",
        "Long-term sustainable growth",
        "Better user experience",
        "Increased brand authority",
        "Cost-effective marketing"
      ],
      process: [
        {
          step: "01",
          title: "SEO Audit & Analysis",
          description: "Comprehensive analysis of your current SEO status, identifying opportunities and challenges."
        },
        {
          step: "02", 
          title: "Keyword Research",
          description: "In-depth keyword research to identify high-value, low-competition opportunities."
        },
        {
          step: "03",
          title: "On-Page Optimization",
          description: "Optimizing your website's content, structure, and technical elements for better rankings."
        },
        {
          step: "04",
          title: "Link Building",
          description: "Building high-quality backlinks to improve your domain authority and rankings."
        },
        {
          step: "05",
          title: "Monitoring & Reporting",
          description: "Continuous monitoring and monthly reporting on performance metrics and improvements."
        }
      ],
      content: `
        <p>Search Engine Optimization (SEO) is the foundation of digital marketing success. Our comprehensive SEO services help businesses achieve higher search engine rankings, increase organic traffic, and establish long-term online authority.</p>
        
        <h2>Why SEO Matters</h2>
        <p>SEO is crucial for businesses looking to establish a strong online presence. With 93% of online experiences beginning with a search engine, appearing on the first page of search results can make or break your business success.</p>
        
        <h2>Our SEO Approach</h2>
        <p>We follow a data-driven, white-hat SEO approach that focuses on sustainable, long-term results. Our strategy combines technical optimization, content creation, and strategic link building to deliver measurable improvements in search rankings and organic traffic.</p>
        
        <h2>Technical SEO Excellence</h2>
        <p>Our technical SEO services include site speed optimization, mobile responsiveness, crawlability improvements, and Core Web Vitals optimization. We ensure your website meets all technical requirements for optimal search engine performance.</p>
        
        <h2>Content Optimization</h2>
        <p>Content is king in SEO. We create and optimize content that not only ranks well in search engines but also provides genuine value to your audience, establishing your brand as an authority in your industry.</p>
        
        <h2>Local SEO Specialization</h2>
        <p>For businesses with physical locations, our local SEO services help you dominate local search results. We optimize your Google My Business profile, manage local citations, and implement location-based content strategies.</p>
        
        <h2>Measurable Results</h2>
        <p>We provide detailed monthly reports showing your SEO progress, including keyword rankings, organic traffic growth, and conversion improvements. Our transparent reporting keeps you informed every step of the way.</p>
      `
    },
    {
      id: 2,
      icon: 'MousePointer',
      title: "Graphic Designing",
      shortDesc: "Create stunning visuals that capture attention and communicate your message effectively",
      // category: "Design",
      duration: "1-4 weeks",
      price: "Starting from $200/project",
      rating: 4.8,
      projects: 200,
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=400&fit=crop",
      features: [
        "Visual Communication",
        "Attractiveness",
        "Clarity",
        "Branding",
        "Emotional Connection",
        "Marketing Tool"
      ],
      benefits: [
        "Professional brand image",
        "Increased brand recognition",
        "Better user engagement",
        "Higher conversion rates",
        "Competitive advantage",
        "Consistent visual identity"
      ],
      process: [
        {
          step: "01",
          title: "Discovery & Briefing",
          description: "Understanding your brand, target audience, and project requirements through detailed consultation."
        },
        {
          step: "02",
          title: "Concept Development",
          description: "Creating initial concepts and design directions that align with your brand and goals."
        },
        {
          step: "03",
          title: "Design Creation",
          description: "Bringing concepts to life with professional design tools and techniques."
        },
        {
          step: "04",
          title: "Review & Refinement",
          description: "Collaborative review process with revisions to ensure perfect alignment with your vision."
        },
        {
          step: "05",
          title: "Final Delivery",
          description: "Delivery of final designs in all required formats with usage guidelines."
        }
      ],
      content: `
        <p>Graphic design is the art of visual communication that combines creativity with strategic thinking. Our graphic design services help businesses create compelling visual identities that resonate with their target audience and drive business results.</p>
        
        <h2>The Power of Visual Communication</h2>
        <p>Humans are visual creatures. Studies show that people process visual information 60,000 times faster than text. Effective graphic design can communicate complex ideas instantly and create lasting emotional connections with your audience.</p>
        
        <h2>Brand Identity Development</h2>
        <p>Your brand identity is how your audience perceives your business. Our designers create cohesive visual systems that include logos, color palettes, typography, and design guidelines that reflect your brand's personality and values.</p>
        
        <h2>Marketing Material Design</h2>
        <p>From business cards to social media graphics, we design marketing materials that grab attention and drive action. Every piece is crafted to support your marketing goals and maintain brand consistency across all touchpoints.</p>
        
        <h2>Digital Design Excellence</h2>
        <p>In today's digital world, your online presence is crucial. We create web graphics, social media content, email templates, and digital advertisements that look great on all devices and platforms.</p>
        
        <h2>Print Design Mastery</h2>
        <p>Despite the digital shift, print materials remain powerful marketing tools. Our expertise in print design ensures your materials look professional and impactful in physical form.</p>
        
        <h2>Design Trends & Innovation</h2>
        <p>We stay current with design trends while maintaining timeless appeal. Our designs balance contemporary aesthetics with classic principles to ensure your materials remain relevant and effective.</p>
      `
    },
    {
      id: 3,
      icon: 'Share2',
      title: "Digital Marketing",
      shortDesc: "Comprehensive digital strategies that drive growth and maximize your online presence",
      // category: "Marketing",
      duration: "Ongoing",
      price: "Starting from $800/month",
      rating: 4.9,
      projects: 120,
      image: "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?w=800&h=400&fit=crop",
      features: [
        "Wide Reach",
        "Cost-Effective",
        "Targeted Advertising",
        "Measurable Results",
        "Customer Engagement",
        "Flexibility"
      ],
      benefits: [
        "Reach global audiences",
        "Lower cost per acquisition",
        "Real-time campaign optimization",
        "Detailed performance analytics",
        "Higher ROI compared to traditional marketing",
        "Scalable strategies"
      ],
      process: [
        {
          step: "01",
          title: "Strategy Development",
          description: "Creating comprehensive digital marketing strategies tailored to your business goals and target audience."
        },
        {
          step: "02",
          title: "Channel Selection",
          description: "Identifying the most effective digital channels for reaching your audience and achieving your objectives."
        },
        {
          step: "03",
          title: "Campaign Creation",
          description: "Developing compelling campaigns with creative assets, messaging, and targeting parameters."
        },
        {
          step: "04",
          title: "Launch & Optimization",
          description: "Launching campaigns and continuously optimizing based on performance data and market feedback."
        },
        {
          step: "05",
          title: "Analysis & Reporting",
          description: "Providing detailed analytics and insights to measure success and guide future strategies."
        }
      ],
      content: `
        <p>Digital marketing encompasses all marketing efforts that use electronic devices or the internet. Our comprehensive digital marketing services help businesses connect with customers using digital channels like search engines, social media, email, and websites.</p>
        
        <h2>Multi-Channel Approach</h2>
        <p>We don't rely on a single channel. Our integrated approach combines SEO, social media, email marketing, content marketing, and paid advertising to create a comprehensive digital presence that reaches your audience wherever they are.</p>
        
        <h2>Data-Driven Strategies</h2>
        <p>Every decision we make is backed by data. We use advanced analytics tools to track performance, measure ROI, and continuously optimize campaigns for better results.</p>
        
        <h2>Audience Targeting</h2>
        <p>Understanding your audience is crucial for digital marketing success. We use demographic, psychographic, and behavioral data to create highly targeted campaigns that resonate with your ideal customers.</p>
        
        <h2>Content Marketing Integration</h2>
        <p>Content is at the heart of digital marketing. We create valuable, relevant content that attracts and engages your target audience, building trust and driving conversions.</p>
        
        <h2>Conversion Optimization</h2>
        <p>Driving traffic is only half the battle. We optimize your digital presence to convert visitors into customers through strategic design, compelling calls-to-action, and seamless user experiences.</p>
        
        <h2>Technology Integration</h2>
        <p>We leverage cutting-edge marketing technology to automate processes, personalize experiences, and scale your marketing efforts efficiently.</p>
      `
    },
    {
      id: 4,
      icon: 'FileText',
      title: "App Development",
      shortDesc: "Build powerful mobile and web applications that solve problems and drive business growth",
      // category: "Development",
      duration: "2-6 months",
      price: "Starting from $5,000/project",
      rating: 4.8,
      projects: 80,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
      features: [
        "User-Friendly Design",
        "Cross-Platform Compatibility",
        "Performance Optimization",
        "Security",
        "Regular Updates",
        "Integration"
      ],
      benefits: [
        "Enhanced customer engagement",
        "Streamlined business processes",
        "24/7 accessibility",
        "Scalable solutions",
        "Competitive advantage",
        "Data-driven insights"
      ],
      process: [
        {
          step: "01",
          title: "Requirements Analysis",
          description: "Detailed analysis of your business needs, user requirements, and technical specifications."
        },
        {
          step: "02",
          title: "Design & Prototyping",
          description: "Creating user experience designs and interactive prototypes to visualize the final product."
        },
        {
          step: "03",
          title: "Development",
          description: "Building the application using modern technologies and best practices for optimal performance."
        },
        {
          step: "04",
          title: "Testing & Quality Assurance",
          description: "Comprehensive testing across devices and platforms to ensure bug-free performance."
        },
        {
          step: "05",
          title: "Launch & Support",
          description: "Deploying the application and providing ongoing support and maintenance services."
        }
      ],
      content: `
        <p>Mobile and web applications have become essential tools for modern businesses. Our app development services help you create powerful, user-friendly applications that solve real problems and drive business growth.</p>
        
        <h2>Cross-Platform Development</h2>
        <p>We develop applications that work seamlessly across iOS, Android, and web platforms. Our cross-platform approach ensures consistent user experiences while reducing development time and costs.</p>
        
        <h2>User-Centered Design</h2>
        <p>Great apps start with great user experience. We follow user-centered design principles to create intuitive, engaging interfaces that users love and find easy to navigate.</p>
        
        <h2>Modern Technology Stack</h2>
        <p>We use cutting-edge technologies and frameworks to build scalable, secure, and high-performance applications. Our tech stack includes React Native, Flutter, Node.js, and cloud services.</p>
        
        <h2>Security & Performance</h2>
        <p>Security and performance are our top priorities. We implement best practices for data protection, secure authentication, and optimized performance to ensure your app is both safe and fast.</p>
        
        <h2>Scalable Architecture</h2>
        <p>We build applications with scalability in mind. Our architecture can handle growth from hundreds to millions of users without compromising performance or user experience.</p>
        
        <h2>Ongoing Support</h2>
        <p>App development doesn't end at launch. We provide ongoing support, maintenance, and feature updates to ensure your application continues to meet your business needs.</p>
      `
    },
    {
      id: 5,
      icon: 'Mail',
      title: "Video Editing",
      shortDesc: "Create engaging videos that captivate your audience and deliver your message effectively",
      // category: "Media",
      duration: "1-3 weeks",
      price: "Starting from $300/project",
      rating: 4.7,
      projects: 90,
      image: "https://images.unsplash.com/photo-1682506457554-b34c9682e985?w=800&h=400&fit=crop",
      features: [
        "Cutting & Trimming",
        "Transitions & Effects",
        "Color Correction",
        "Audio Editing",
        "Motion Graphics",
        "Exporting Formats"
      ],
      benefits: [
        "Professional video quality",
        "Increased engagement",
        "Better storytelling",
        "Brand consistency",
        "Higher conversion rates",
        "Versatile content formats"
      ],
      process: [
        {
          step: "01",
          title: "Project Planning",
          description: "Understanding your vision, target audience, and project goals to create an effective video strategy."
        },
        {
          step: "02",
          title: "Pre-Production",
          description: "Scripting, storyboarding, and planning the visual and audio elements of your video."
        },
        {
          step: "03",
          title: "Editing & Post-Production",
          description: "Professional editing with cutting-edge software to create polished, engaging content."
        },
        {
          step: "04",
          title: "Review & Refinement",
          description: "Collaborative review process with revisions to ensure the final product meets your expectations."
        },
        {
          step: "05",
          title: "Delivery & Optimization",
          description: "Delivering final videos in multiple formats optimized for different platforms and uses."
        }
      ],
      content: `
        <p>Video content is the most engaging form of digital media, with 85% of internet users watching videos online. Our video editing services help you create compelling visual stories that capture attention and drive action.</p>
        
        <h2>Professional Video Editing</h2>
        <p>Our experienced editors use industry-standard software like Adobe Premiere Pro, After Effects, and DaVinci Resolve to create professional-quality videos that stand out from the competition.</p>
        
        <h2>Creative Storytelling</h2>
        <p>Great videos tell compelling stories. We help you craft narratives that resonate with your audience, using pacing, rhythm, and visual elements to create emotional connections.</p>
        
        <h2>Brand Integration</h2>
        <p>Every video we create reinforces your brand identity. We incorporate your colors, fonts, logos, and messaging to ensure consistent brand representation across all video content.</p>
        
        <h2>Multi-Platform Optimization</h2>
        <p>Different platforms have different requirements. We optimize videos for YouTube, social media, websites, and presentations, ensuring optimal viewing experiences everywhere.</p>
        
        <h2>Motion Graphics & Animation</h2>
        <p>We create custom motion graphics and animations that bring your ideas to life. From simple logo animations to complex explainer videos, we make your content visually stunning.</p>
        
        <h2>Audio Enhancement</h2>
        <p>Great audio is crucial for video success. We enhance audio quality, add background music, and create custom sound effects that complement your visual content.</p>
      `
    },
    {
      id: 6,
      icon: 'Code',
      title: "Web Development",
      shortDesc: "Build fast, responsive websites that convert visitors into customers",
      // category: "Development",
      duration: "1-4 months",
      price: "Starting from $2,000/project",
      rating: 4.9,
      projects: 180,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      features: [
        "Responsive Web Design",
        "E-commerce Development",
        "CMS Implementation",
        "Performance Optimization",
        "Mobile App Development",
        "Maintenance & Support"
      ],
      benefits: [
        "Professional online presence",
        "Increased credibility",
        "Better user experience",
        "Higher conversion rates",
        "SEO optimization",
        "Mobile accessibility"
      ],
      process: [
        {
          step: "01",
          title: "Discovery & Planning",
          description: "Understanding your business goals, target audience, and technical requirements to plan the perfect website."
        },
        {
          step: "02",
          title: "Design & Prototyping",
          description: "Creating visual designs and interactive prototypes that align with your brand and user expectations."
        },
        {
          step: "03",
          title: "Development",
          description: "Building your website using modern technologies and best practices for optimal performance and security."
        },
        {
          step: "04",
          title: "Testing & Launch",
          description: "Comprehensive testing across devices and browsers before launching your website to the world."
        },
        {
          step: "05",
          title: "Ongoing Support",
          description: "Providing maintenance, updates, and support to keep your website running smoothly and securely."
        }
      ],
      content: `
        <p>Your website is often the first impression customers have of your business. Our web development services create fast, responsive, and conversion-optimized websites that effectively represent your brand and drive business results.</p>
        
        <h2>Responsive Design Excellence</h2>
        <p>With over 60% of web traffic coming from mobile devices, responsive design is essential. We create websites that look and function perfectly on all devices, from smartphones to desktops.</p>
        
        <h2>Performance Optimization</h2>
        <p>Website speed directly impacts user experience and search rankings. We optimize every aspect of your website for fast loading times, including images, code, and server configurations.</p>
        
        <h2>SEO-Friendly Architecture</h2>
        <p>We build websites with SEO in mind from the ground up. Clean code, proper structure, and optimized elements help search engines understand and rank your content effectively.</p>
        
        <h2>E-commerce Solutions</h2>
        <p>For businesses selling online, we create powerful e-commerce websites with secure payment processing, inventory management, and user-friendly shopping experiences.</p>
        
        <h2>Content Management Systems</h2>
        <p>We implement user-friendly CMS platforms that allow you to easily update content, manage products, and maintain your website without technical expertise.</p>
        
        <h2>Security & Maintenance</h2>
        <p>Website security is crucial for protecting your business and customers. We implement security best practices and provide ongoing maintenance to keep your site secure and up-to-date.</p>
      `
    },
    {
      id: 7,
      icon: 'Palette',
      title: "UI/UX Design",
      shortDesc: "Design intuitive experiences that delight users and drive conversions",
      // category: "Design",
      duration: "2-8 weeks",
      price: "Starting from $1,500/project",
      rating: 4.8,
      projects: 110,
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing",
        "Design Systems",
        "Mobile-First Design"
      ],
      benefits: [
        "Improved user satisfaction",
        "Higher conversion rates",
        "Reduced development costs",
        "Better brand perception",
        "Competitive advantage",
        "Scalable design systems"
      ],
      process: [
        {
          step: "01",
          title: "User Research",
          description: "Understanding your users through research, interviews, and analysis to inform design decisions."
        },
        {
          step: "02",
          title: "Information Architecture",
          description: "Organizing content and functionality in a logical, user-friendly structure."
        },
        {
          step: "03",
          title: "Wireframing & Prototyping",
          description: "Creating low-fidelity wireframes and interactive prototypes to test concepts early."
        },
        {
          step: "04",
          title: "Visual Design",
          description: "Creating beautiful, on-brand visual designs that enhance user experience."
        },
        {
          step: "05",
          title: "Testing & Iteration",
          description: "Testing designs with real users and iterating based on feedback and data."
        }
      ],
      content: `
        <p>User Interface (UI) and User Experience (UX) design are crucial for creating digital products that users love. Our UI/UX design services focus on creating intuitive, engaging experiences that drive business results.</p>
        
        <h2>User-Centered Design Process</h2>
        <p>We start every project by understanding your users. Through research, interviews, and analysis, we create designs that solve real problems and meet actual user needs.</p>
        
        <h2>Information Architecture</h2>
        <p>Good UX starts with clear information architecture. We organize content and functionality in logical, intuitive ways that help users find what they need quickly and easily.</p>
        
        <h2>Wireframing & Prototyping</h2>
        <p>We create wireframes and interactive prototypes to test concepts before development. This iterative approach saves time and money while ensuring the final product meets user expectations.</p>
        
        <h2>Visual Design Excellence</h2>
        <p>Our visual designs combine aesthetics with functionality. We create beautiful interfaces that not only look great but also enhance usability and support your brand identity.</p>
        
        <h2>Mobile-First Approach</h2>
        <p>With mobile usage continuing to grow, we design mobile-first experiences that work seamlessly across all devices and screen sizes.</p>
        
        <h2>Usability Testing</h2>
        <p>We test our designs with real users to identify issues and opportunities for improvement. This data-driven approach ensures our designs actually work for your audience.</p>
      `
    },
    {
      id: 8,
      icon: 'TrendingUp',
      title: "Social Media Marketing",
      shortDesc: "Build engaging communities and drive brand awareness through strategic social media presence",
      // category: "Marketing",
      duration: "Ongoing",
      price: "Starting from $600/month",
      rating: 4.8,
      projects: 140,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      features: [
        "Platform Targeting",
        "Content Creation",
        "Paid Advertising",
        "Audience Engagement",
        "Analytics & Insights",
        "Brand Awareness"
      ],
      benefits: [
        "Increased brand visibility",
        "Direct customer engagement",
        "Cost-effective advertising",
        "Real-time feedback",
        "Community building",
        "Lead generation"
      ],
      process: [
        {
          step: "01",
          title: "Strategy Development",
          description: "Creating comprehensive social media strategies aligned with your business goals and target audience."
        },
        {
          step: "02",
          title: "Content Planning",
          description: "Developing content calendars and creative concepts that engage your audience and support your brand."
        },
        {
          step: "03",
          title: "Content Creation",
          description: "Creating high-quality visual and written content optimized for each social media platform."
        },
        {
          step: "04",
          title: "Community Management",
          description: "Managing your social media presence with regular posting, engagement, and customer service."
        },
        {
          step: "05",
          title: "Performance Analysis",
          description: "Monitoring performance metrics and adjusting strategies based on data and insights."
        }
      ],
      content: `
        <p>Social media marketing is essential for building brand awareness, engaging with customers, and driving business growth. Our social media marketing services help you create a strong presence across all relevant platforms.</p>
        
        <h2>Multi-Platform Strategy</h2>
        <p>We develop strategies tailored to each social media platform's unique characteristics and audience behavior. From Facebook to TikTok, we help you reach your audience wherever they are.</p>
        
        <h2>Content Creation Excellence</h2>
        <p>Great content is the foundation of social media success. We create engaging posts, stories, videos, and graphics that capture attention and encourage interaction.</p>
        
        <h2>Community Building</h2>
        <p>We help you build genuine communities around your brand through consistent engagement, valuable content, and authentic interactions with your audience.</p>
        
        <h2>Paid Social Advertising</h2>
        <p>Strategic paid advertising on social platforms can significantly amplify your reach and drive targeted traffic to your website or store.</p>
        
        <h2>Influencer Partnerships</h2>
        <p>We identify and collaborate with relevant influencers to extend your reach and build credibility with new audiences.</p>
        
        <h2>Analytics & Optimization</h2>
        <p>We track performance across all platforms and continuously optimize your social media strategy based on data and insights to maximize ROI.</p>
      `
    }
  ];

  // Find the service by ID
  const service = services.find(s => s.id === parseInt(serviceId));

  if (!service) {
    return React.createElement(
      "div",
      { className: "min-h-screen bg-slate-900 flex items-center justify-center" },
      React.createElement("div", { className: "text-center" },
        React.createElement("h1", { className: "text-4xl font-bold text-white mb-4" }, "Service Not Found"),
        React.createElement("p", { className: "text-gray-400 mb-8" }, "The service you're looking for doesn't exist."),
        React.createElement(Button, {
          onClick: () => onNavigate('services'),
          className: "bg-gradient-to-r from-purple-600 to-teal-500 hover:opacity-90 cursor-pointer"
        }, "Back to Services")
      )
    );
  }

  return React.createElement(
    "article",
    { className: "min-h-screen bg-slate-900 text-white" },

    // Header
    React.createElement("div", { className: "bg-slate-800/50 border-b border-slate-700" },
      React.createElement("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6" })
    ),

    // Main content
    React.createElement("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12" },
      
      // Service header
      React.createElement(motion.div, {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.2 },
        className: "mb-12"
      },
        React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" },
          
          // Back button
          React.createElement("div", { className: "lg:col-span-2 mb-8" },
            React.createElement(Button, {
              onClick: () => onNavigate('services'),
              variant: "ghost",
              className: "text-gray-400 hover:text-white cursor-pointer"
            },
              React.createElement(ArrowLeft, { className: "w-4 h-4 mr-2" }),
              "Back to Services"
            )
          ),
          
          // Service info
          React.createElement("div", null,
            React.createElement(Badge, { className: "bg-purple-600 text-white mb-4" }, service.category),
            React.createElement("h1", { className: "text-4xl lg:text-5xl font-bold mb-6 leading-tight" }, service.title),
            React.createElement("p", { className: "text-xl text-gray-300 mb-8 leading-relaxed" }, service.shortDesc),
            
            // Service stats
            React.createElement("div", { className: "grid grid-cols-2 gap-6 mb-8" },
              React.createElement("div", { className: "flex items-center" },
                React.createElement(Star, { className: "w-5 h-5 text-yellow-400 mr-2" }),
                React.createElement("span", { className: "text-white font-semibold" }, service.rating),
                React.createElement("span", { className: "text-gray-400 ml-1" }, "(Rating)")
              ),
              React.createElement("div", { className: "flex items-center" },
                React.createElement(Award, { className: "w-5 h-5 text-purple-400 mr-2" }),
                React.createElement("span", { className: "text-white font-semibold" }, service.projects),
                React.createElement("span", { className: "text-gray-400 ml-1" }, "Projects")
              ),
              React.createElement("div", { className: "flex items-center" },
                React.createElement(Clock, { className: "w-5 h-5 text-teal-400 mr-2" }),
                React.createElement("span", { className: "text-white font-semibold" }, service.duration)
              ),
              React.createElement("div", { className: "flex items-center" },
                React.createElement(TrendingUp, { className: "w-5 h-5 text-green-400 mr-2" }),
                React.createElement("span", { className: "text-white font-semibold" }, service.price)
              )
            )
          ),

          // Service image
          React.createElement("div", { className: "relative" },
            React.createElement("div", { className: "rounded-2xl overflow-hidden" },
              React.createElement(ImageWithFallback, {
                src: service.image,
                alt: service.title,
                className: "w-full h-80 object-cover"
              })
            )
          )
        )
      ),

      // Features section
      React.createElement(motion.div, {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.4 },
        className: "mb-16"
      },
        React.createElement("h2", { className: "text-3xl font-bold text-white mb-8" }, "What's Included"),
        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" },
          service.features.map((feature, index) =>
            React.createElement("div", {
              key: index,
              className: "flex items-center p-4 bg-slate-800/50 rounded-lg border border-slate-700"
            },
              React.createElement(CheckCircle, { className: "w-5 h-5 text-green-400 mr-3 flex-shrink-0" }),
              React.createElement("span", { className: "text-gray-300" }, feature)
            )
          )
        )
      ),

      // Benefits section
      React.createElement(motion.div, {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.6 },
        className: "mb-16"
      },
        React.createElement("h2", { className: "text-3xl font-bold text-white mb-8" }, "Benefits"),
        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" },
          service.benefits.map((benefit, index) =>
            React.createElement(Card, {
              key: index,
              className: "bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300"
            },
              React.createElement(CardContent, { className: "p-6" },
                React.createElement("div", { className: "flex items-start" },
                  React.createElement("div", { className: "w-2 h-2 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full mt-2 mr-4 flex-shrink-0" }),
                  React.createElement("p", { className: "text-gray-300" }, benefit)
                )
              )
            )
          )
        )
      ),

      // Process section
      React.createElement(motion.div, {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.8 },
        className: "mb-16"
      },
        React.createElement("h2", { className: "text-3xl font-bold text-white mb-8" }, "Our Process"),
        React.createElement("div", { className: "space-y-8" },
          service.process.map((step, index) =>
            React.createElement("div", {
              key: index,
              className: "flex items-start gap-6"
            },
              React.createElement("div", { className: "flex-shrink-0" },
                React.createElement("div", { className: "w-12 h-12 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full flex items-center justify-center" },
                  React.createElement("span", { className: "text-white font-bold" }, step.step)
                )
              ),
              React.createElement("div", null,
                React.createElement("h3", { className: "text-xl font-semibold text-white mb-2" }, step.title),
                React.createElement("p", { className: "text-gray-300" }, step.description)
              )
            )
          )
        )
      ),

      // Detailed content
      React.createElement(motion.div, {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 1.0 },
        className: "mb-16"
      },
        React.createElement("h2", { className: "text-3xl font-bold text-white mb-8" }, "About This Service"),
        React.createElement("div", {
          dangerouslySetInnerHTML: { __html: service.content },
          className: "prose prose-lg prose-invert max-w-none text-gray-300 leading-relaxed [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-8 [&>h2]:mb-4 [&>p]:mb-6 [&>p]:text-gray-300"
        })
      ),

      // CTA section
      React.createElement(motion.div, {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 1.2 },
        className: "bg-gradient-to-r from-purple-600/20 to-teal-500/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-purple-500/20"
      },
        React.createElement("div", { className: "text-center" },
          React.createElement("h2", { className: "text-3xl font-bold text-white mb-4" }, "Ready to Get Started?"),
          React.createElement("p", { className: "text-gray-300 mb-8" }, "Contact us today to discuss how we can help you achieve your goals with our " + service.title + " services."),
          React.createElement("div", { className: "flex flex-col sm:flex-row gap-4 justify-center" },
            React.createElement(Button, {
              onClick: () => onNavigate('contact'),
              className: "bg-gradient-to-r from-purple-600 to-teal-500 hover:opacity-90 cursor-pointer"
            }, "Get Free Consultation"),
            React.createElement(Button, {
              onClick: () => onNavigate('services'),
              variant: "outline",
              className: "border-slate-600 text-gray-300 hover:border-purple-500/50 cursor-pointer"
            }, "View All Services")
          )
        )
      )
    )
  );
}
