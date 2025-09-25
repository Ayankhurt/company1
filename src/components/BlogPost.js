import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Eye, MessageCircle, Share2, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function BlogPost({ postId, onNavigate }) {
  // Blog posts data with full content
  const blogPosts = [
    {
      id: 1,
      title: '10 SEO Strategies That Will Dominate 2025',
      excerpt: 'Discover the latest SEO techniques that are driving real results for businesses in 2024. From Core Web Vitals to AI-powered content optimization.',
      // category: 'SEO',
      author: 'Sarah Rodriguez',
      date: '2024-01-15',
      readTime: '8 min read',
      views: 2400,
      comments: 23,
      featured: true,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop',
      tags: ['SEO', 'Digital Marketing', 'Strategy', '2024 Trends'],
      content: `
        <p>In the fast-changing world of digital marketing, SEO remains a cornerstone for driving organic traffic and boosting online authority. As we move through 2024, certain SEO strategies are proving to be crucial for businesses aiming to top search results.</p>
    
        <h2>1. AI-Powered Content Optimization</h2>
        <p>AI is transforming content creation and SEO. Advanced tools use machine learning to understand search intent, spot content gaps, and offer actionable recommendations that meet user needs effectively.</p>
    
        <h2>2. Core Web Vitals Excellence</h2>
        <p>Google’s Core Web Vitals—Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS)—remain essential ranking signals. Prioritizing these metrics ensures better user experience and higher search rankings.</p>
    
        <h2>3. Voice Search Optimization</h2>
        <p>With voice assistants on the rise, optimizing for natural language queries and long-tail keywords is key to capturing voice search traffic and enhancing visibility.</p>
    
        <h2>4. E-A-T Enhancement</h2>
        <p>Expertise, Authoritativeness, and Trustworthiness (E-A-T) continue to be vital. Building strong author profiles, earning high-quality backlinks, and maintaining transparency build trust with both users and search engines.</p>
    
        <h2>5. Mobile-First Optimization</h2>
        <p>Mobile users dominate online traffic. Ensuring your site is mobile-friendly with responsive design, fast load times, and intuitive navigation is critical for SEO success.</p>
    
        <h2>6. Local SEO Mastery</h2>
        <p>For businesses with physical locations, optimizing Google My Business listings, managing local citations, and producing location-based content helps attract nearby customers effectively.</p>
    
        <h2>7. Technical SEO Audits</h2>
        <p>Regular technical audits identify crawl errors, duplicate content, and site structure issues that could harm your SEO. Fixing these improves site health and search performance.</p>
    
        <h2>8. Content Clustering</h2>
        <p>Organizing your content into related topic clusters enhances topical authority and improves internal linking, which benefits overall domain ranking.</p>
    
        <h2>9. Schema Markup Implementation</h2>
        <p>Implementing structured data helps search engines better interpret your content, increasing the chances of rich snippets and higher click-through rates.</p>
    
        <h2>10. Continuous Performance Monitoring</h2>
        <p>SEO is an ongoing process. Regularly tracking rankings, traffic, and conversions allows you to adapt and optimize strategies for sustained growth.</p>
    
        <p>By consistently applying these strategies and staying adaptable, businesses can achieve strong and lasting SEO success in 2024 and beyond.</p>
      `
    },
    {
      id: 2,
      title: 'Mastering High-Converting Landing Pages: Proven Strategies That Deliver Results',
      excerpt: 'Unlock the essential elements that turn your landing pages into conversion powerhouses. Filled with tested techniques, real-world examples, and expert advice to boost your conversion rates effectively.',
      // category: 'Web Development & Conversion Optimization',
      author: 'Michael Kim',
      date: '2024-01-12',
      readTime: '12 min read',
      views: 1800,
      comments: 31,
      featured: false,
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop',
      tags: ['Landing Pages', 'CRO', 'Web Design', 'Conversions'],
      content: `
        <p>Crafting high-converting landing pages blends creativity with strategy. Success depends on understanding user behavior, applying smart design principles, and continuously testing to optimize performance.</p>
    
        <h2>The Psychology Behind Conversion</h2>
        <p>Conversion starts with understanding what motivates users. Leverage scarcity, social proof, and crystal-clear value propositions to encourage action.</p>
    
        <h2>Optimize Above the Fold</h2>
        <p>The area visible without scrolling is your prime real estate. Make sure your headline, subheading, and main call-to-action instantly communicate your value and grab attention.</p>
    
        <h2>Effective Headline Writing</h2>
        <p>Your headline is your first impression. Craft headlines that are specific, benefit-driven, and create a sense of urgency without sounding pushy.</p>
    
        <h2>Visual Hierarchy & Design</h2>
        <p>Guide visitors’ eyes with a clear visual hierarchy. Use size, color, contrast, and spacing to lead users smoothly from interest to action.</p>
    
        <h2>Build Trust with Social Proof</h2>
        <p>Boost credibility by showcasing testimonials, client logos, security badges, and reviews. Trust signals reduce hesitation and increase conversions.</p>
    
        <h2>Optimize Your Forms</h2>
        <p>Forms often seal the deal. Keep them simple, use clear labels, offer helpful error messages, and consider progressive profiling to reduce friction.</p>
    
        <h2>Strong Call-to-Action (CTA) Design</h2>
        <p>Your CTA buttons must stand out visually and use compelling, action-oriented language. Experiment with colors, sizes, and copy to discover what drives clicks.</p>
    
        <h2>Mobile Optimization is Essential</h2>
        <p>With more users on mobile devices, ensure your landing pages are fully responsive, feature touch-friendly buttons, readable text, and quick load times.</p>
    
        <h2>Speed Up Your Page</h2>
        <p>Page loading speed directly affects conversions. Compress images, streamline code, and use content delivery networks to keep your pages lightning fast.</p>
    
        <h2>Continuous A/B Testing</h2>
        <p>Test everything—from headlines and images to layouts and CTAs. Data-driven iteration is the key to unlocking higher conversion rates.</p>
    
        <h2>Analytics & User Tracking</h2>
        <p>Measure success with conversion tracking, heatmaps, and session recordings. These tools reveal user behavior and highlight areas for improvement.</p>
    
        <p>Remember, there’s no universal formula. What converts for one business might differ for another. The secret is to test, analyze, and refine your landing pages based on your unique audience and goals.</p>
      `
    },
    {
      id: 3,
      title: 'The Ultimate Guide to Graphic Design in 2024: Principles, Tools, and Trends',
      excerpt: 'Master the essential principles, cutting-edge tools, and emerging trends that define modern graphic design. From typography to layout, learn how to tell compelling visual stories.',
      // category: 'Graphic Design',
      author: 'Alex Chen',
      date: '2024-01-10',
      readTime: '15 min read',
      views: 3200,
      comments: 45,
      featured: true,
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Graphic Design', 'Typography', 'Visual Design', 'Creative Tools'],
      content: `
        <p>Graphic design in 2024 is more dynamic and accessible than ever. With rapid advancements in tools, trends, and techniques, staying updated is essential for designers who want to create impactful and meaningful visual communications.</p>
    
        <h2>Timeless Design Principles</h2>
        <p>While technology evolves, core design principles remain foundational. Balance, contrast, hierarchy, alignment, and proximity continue to be key elements that create effective and harmonious designs.</p>
    
        <h2>Typography in the Digital Era</h2>
        <p>Typography has transformed with digital innovation. Variable fonts, enhanced web font options, and intuitive pairing tools offer limitless opportunities for creative and expressive type design.</p>
    
        <h2>Color Theory and Emotional Impact</h2>
        <p>Understanding color psychology empowers designers to craft visuals that resonate emotionally. Colors influence mood and behavior, making thoughtful color choices critical to design success.</p>
    
        <h2>Effective Layouts and Grid Systems</h2>
        <p>Strong layouts direct viewers’ attention and establish visual order. Modern grid systems—both traditional and digital—ensure consistency and enhance readability across platforms.</p>
    
        <h2>Crafting Brand Identity</h2>
        <p>Building a cohesive brand identity involves aligning design elements with brand values, target audience, and market positioning. Key components include logos, color palettes, and comprehensive style guides.</p>
    
        <h2>Essential Digital Tools</h2>
        <p>The design software landscape is continuously evolving. From industry standards like Adobe Creative Suite to collaborative platforms like Figma and Canva, selecting the right tool is crucial for productivity and creativity.</p>
    
        <h2>Responsive Design for All Devices</h2>
        <p>Designing for diverse screen sizes requires attention to breakpoints, flexible layouts, and scalable elements to ensure an optimal user experience on any device.</p>
    
        <h2>Designing for Accessibility</h2>
        <p>Accessible design broadens your audience by considering color contrast, text legibility, and intuitive navigation, ensuring your work is usable by everyone.</p>
    
        <h2>Staying Ahead with Trends</h2>
        <p>Keeping up with emerging trends helps keep designs fresh and relevant. However, trends should complement rather than overpower your creative vision.</p>
    
        <h2>Portfolio Building and Presentation</h2>
        <p>A compelling portfolio and strong presentation skills are vital for showcasing your work and advancing your design career.</p>
    
        <p>Graphic design blends creativity and technical skill. By mastering foundational principles and embracing new tools and trends, designers can create stunning work that not only looks great but also communicates effectively and inspires action.</p>
      `
    },
    {
      id: 4,
      title: 'Top Social Media Marketing Trends to Watch in 2025',
      excerpt: 'Stay ahead with the latest social media trends—from short-form video and social commerce to authentic influencer partnerships and community building.',
      // category: 'Social Media',
      author: 'Emma Thompson',
      date: '2024-01-08',
      readTime: '10 min read',
      views: 1950,
      comments: 28,
      featured: false,
      image: 'https://images.unsplash.com/photo-1683721003111-070bcc053d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29jaWFsJTIwbWVkaWElMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D',
      tags: ['Social Media', 'Trends', 'Marketing Strategy', 'Engagement'],
      content: `
        <p>Social media marketing is evolving faster than ever, with new platforms, features, and strategies shaping the digital landscape. Staying informed about these trends is essential for marketers aiming to connect meaningfully and stay competitive.</p>
    
        <h2>Short-Form Video Takes Center Stage</h2>
        <p>TikTok, Instagram Reels, and YouTube Shorts have transformed how audiences consume content. Brands excelling in short-form videos capture attention quickly and boost engagement dramatically.</p>
    
        <h2>Seamless Social Commerce Integration</h2>
        <p>The gap between social media and e-commerce is disappearing. Instagram Shopping, Facebook Marketplace, and TikTok Shop let users discover and buy products directly, streamlining the purchase journey.</p>
    
        <h2>Authentic Influencer Collaborations</h2>
        <p>Micro and nano-influencers are increasingly valuable due to their engaged audiences and authentic voices. Genuine partnerships outweigh follower numbers in driving real impact.</p>
    
        <h2>User-Generated Content (UGC) Strategies</h2>
        <p>Encouraging users to create and share content fosters community and builds trust. Contests, branded hashtags, and featuring user content amplify brand engagement authentically.</p>
    
        <h2>Community Building as a Priority</h2>
        <p>Developing tight-knit communities via Facebook Groups, Discord servers, or niche forums creates loyal audiences and deepens brand relationships.</p>
    
        <h2>Leveraging Ephemeral Content</h2>
        <p>Stories and temporary posts generate urgency and immediate interaction. Using these features strategically increases visibility and engagement.</p>
    
        <h2>Advanced Social Listening & Analytics</h2>
        <p>Tools for tracking audience sentiment, campaign performance, and emerging trends provide brands with valuable insights to refine strategies and seize new opportunities.</p>
    
        <h2>Cross-Platform Content Strategies</h2>
        <p>Adapting content to each platform’s unique features and audience behavior, while maintaining brand consistency, ensures maximum reach and engagement.</p>
    
        <h2>Privacy & Data Compliance</h2>
        <p>With evolving privacy laws, marketers must innovate ways to deliver personalized experiences despite limited data access, respecting user privacy.</p>
    
        <h2>Exploring Emerging Platforms</h2>
        <p>New social media platforms and features constantly arise, offering forward-thinking brands the chance to experiment and gain early-mover advantages.</p>
    
        <p>Success in social media marketing hinges on balancing trend awareness with authentic storytelling that resonates with your brand’s audience and core values.</p>
      `
    },
    {
      id: 5,
      title: 'Powerful Digital Marketing Automation Strategies to Boost Engagement',
      excerpt: 'Learn how to automate your digital marketing campaigns with segmentation, personalization, and multi-channel automation to drive higher conversions and better engagement.',
      // category: 'Digital Marketing',
      author: 'Sarah Rodriguez',
      date: '2024-01-05',
      readTime: '11 min read',
      views: 2100,
      comments: 19,
      featured: false,
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D',
      tags: ['Digital Marketing', 'Automation', 'Lead Nurturing', 'Personalization'],
      content: `
        <p>Marketing automation is a vital tool for scaling your digital marketing efforts while maintaining personalized customer interactions. When done right, automation boosts engagement and drives higher conversions.</p>
    
        <h2>What is Marketing Automation?</h2>
        <p>Marketing automation uses software to automate repetitive marketing tasks and workflows, allowing teams to focus on strategy while delivering timely, consistent communication to prospects and customers.</p>
    
        <h2>Email Marketing Automation</h2>
        <p>Email remains one of the most effective marketing channels. Automating email sequences, trigger-based campaigns, and behavior-driven messaging helps nurture leads and convert them efficiently.</p>
    
        <h2>Lead Scoring & Qualification</h2>
        <p>Automated lead scoring prioritizes prospects based on their interactions and engagement, ensuring your sales team focuses on the most qualified leads while nurturing others through targeted workflows.</p>
    
        <h2>Customer Journey Mapping</h2>
        <p>Mapping the customer journey enables tailored automation. Creating workflows for each stage ensures relevant, timely communication that guides prospects toward conversion.</p>
    
        <h2>Behavioral Trigger Campaigns</h2>
        <p>Campaigns triggered by user actions—such as welcome emails, abandoned cart reminders, and re-engagement messages—significantly improve conversion rates and customer retention.</p>
    
        <h2>Segmentation for Personalization</h2>
        <p>Segmenting your audience by demographics, behavior, and preferences allows for personalized automated campaigns that resonate with specific groups, increasing engagement and conversions.</p>
    
        <h2>Cross-Channel Automation</h2>
        <p>Integrating automation across email, social media, SMS, and push notifications creates a unified customer experience, maximizing touchpoints and engagement opportunities.</p>
    
        <h2>Scaling Personalization</h2>
        <p>Modern automation tools enable dynamic content and personalized messaging at scale, leveraging user data to deliver relevant experiences that feel one-to-one.</p>
    
        <h2>Tracking Performance & Optimization</h2>
        <p>Consistently monitoring metrics and running A/B tests allows you to optimize automated campaigns for better performance and ROI.</p>
    
        <h2>Integration & Data Management</h2>
        <p>Successful automation depends on seamless integration between platforms and clean, organized data to build accurate customer profiles and effective workflows.</p>
    
        <p>Remember, marketing automation enhances human connection rather than replaces it. The goal is to deliver timely, relevant, and valuable experiences that nurture prospects and deepen customer relationships.</p>
      `
    },
    {
      id: 6,
      title: 'Measuring Impact in Video Editing Projects',
      excerpt: 'Learn how to evaluate the effectiveness of your video edits and projects. Includes tools, metrics, and techniques to improve your video content.',
      // category: 'Video Editing',
      author: 'Michael Kim',
      date: '2024-01-03',
      readTime: '9 min read',
      views: 1650,
      comments: 22,
      featured: false,
      image: 'https://images.unsplash.com/photo-1682506457554-b34c9682e985?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZlZGlvJTIwZWRpdGluZ3xlbnwwfHwwfHx8MA%3D%3D',
      tags: ['Video Editing', 'Post Production', 'Metrics', 'Content Impact'],
      content: `
        <p>Video editing is not just about creating visually appealing content—it's about crafting stories that engage, inform, and inspire action. Measuring the impact of your video editing projects is crucial for understanding what works and improving future content.</p>
        
        <h2>Understanding Video Performance Metrics</h2>
        <p>Key performance indicators for video content include view duration, engagement rate, click-through rate, and conversion metrics. Understanding these metrics helps editors make data-driven decisions about content creation.</p>
        
        <h2>Engagement Analysis</h2>
        <p>Engagement metrics reveal how viewers interact with your content. High engagement indicates that your editing choices—pacing, transitions, and visual elements—are resonating with your audience.</p>
        
        <h2>Storytelling Effectiveness</h2>
        <p>Effective storytelling in video editing involves pacing, rhythm, and emotional impact. Analyzing viewer retention curves can reveal which parts of your video are most engaging or where viewers lose interest.</p>
        
        <h2>Visual Impact Assessment</h2>
        <p>The visual elements of your video—color grading, composition, and effects—contribute significantly to viewer engagement. A/B testing different visual approaches can help identify what resonates best with your audience.</p>
        
        <h2>Audio and Sound Design Impact</h2>
        <p>Audio quality and sound design play crucial roles in video engagement. Clear dialogue, appropriate music, and well-placed sound effects can significantly impact viewer retention and emotional response.</p>
        
        <h2>Platform-Specific Optimization</h2>
        <p>Different platforms have different viewing behaviors and requirements. Optimizing video length, aspect ratios, and content style for specific platforms can improve performance and engagement.</p>
        
        <h2>Thumbnail and Hook Effectiveness</h2>
        <p>The first few seconds of your video are critical for retention. Analyzing drop-off rates in the opening moments can help improve hooks and opening sequences.</p>
        
        <h2>Call-to-Action Performance</h2>
        <p>If your video includes calls-to-action, tracking their effectiveness is important. Placement, timing, and presentation of CTAs can significantly impact conversion rates.</p>
        
        <h2>Iterative Improvement Process</h2>
        <p>Continuous improvement based on performance data is essential. Regular analysis of metrics and viewer feedback helps refine editing techniques and content strategy.</p>
        
        <h2>Tools for Video Analytics</h2>
        <p>Various tools and platforms provide detailed analytics for video content. Understanding how to interpret and act on this data is crucial for improving video editing effectiveness.</p>
        
        <p>Remember that great video editing serves the story and the audience. While metrics provide valuable insights, the ultimate goal is to create content that informs, entertains, and inspires viewers to take action.</p>
      `
    }
  ];

  // Find the blog post by ID
  const post = blogPosts.find(p => p.id === parseInt(postId));

  if (!post) {
    return React.createElement(
      "div",
      { className: "min-h-screen bg-slate-900 flex items-center justify-center" },
      React.createElement("div", { className: "text-center" },
        React.createElement("h1", { className: "text-4xl font-bold text-white mb-4" }, "Post Not Found"),
        React.createElement("p", { className: "text-gray-400 mb-8" }, "The blog post you're looking for doesn't exist."),
        React.createElement(Button, {
          onClick: () => onNavigate('blog'),
          className: "bg-gradient-to-r from-purple-600 to-teal-500 hover:opacity-90 cursor-pointer"
        }, "Back to Blog")
      )
    );
  }

  return React.createElement(
    "article",
    { className: "min-h-screen bg-slate-900 text-white" },

    // Header
    React.createElement("div", { className: "bg-slate-800/50 border-b border-slate-700" },
      React.createElement("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6" })
    ),

    // Main content
    React.createElement("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12" },
      
      // Article header
      React.createElement(motion.div, {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.2 },
        className: "mb-12"
      },
        React.createElement("div", { className: "mb-6" },
          React.createElement("div", { className: "mb-8" },
            React.createElement(Button, {
              onClick: () => onNavigate('blog'),
              variant: "ghost",
              className: "text-gray-400 hover:text-white cursor-pointer"
            },
              React.createElement(ArrowLeft, { className: "w-4 h-4 mr-2" }),
              "Back to Blog"
            )
          ),
          React.createElement(Badge, { className: "bg-purple-600 text-white mb-4" }, post.category),
          React.createElement("h1", { className: "text-4xl lg:text-5xl font-bold mb-6 leading-tight" }, post.title),
          React.createElement("p", { className: "text-xl text-gray-300 mb-8 leading-relaxed" }, post.excerpt)
        ),

        // Article meta
        React.createElement("div", { className: "flex flex-wrap items-center gap-6 text-gray-400 mb-8" },
          React.createElement("div", { className: "flex items-center" },
            React.createElement(User, { className: "w-5 h-5 mr-2" }),
            post.author
          ),
          React.createElement("div", { className: "flex items-center" },
            React.createElement(Calendar, { className: "w-5 h-5 mr-2" }),
            new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })
          ),
          React.createElement("div", { className: "flex items-center" },
            React.createElement(Clock, { className: "w-5 h-5 mr-2" }),
            post.readTime
          ),
          React.createElement("div", { className: "flex items-center" },
            React.createElement(Eye, { className: "w-5 h-5 mr-2" }),
            `${post.views.toLocaleString()} views`
          ),
          React.createElement("div", { className: "flex items-center" },
            React.createElement(MessageCircle, { className: "w-5 h-5 mr-2" }),
            `${post.comments} comments`
          )
        ),

        // Featured image
        React.createElement("div", { className: "relative mb-8 rounded-2xl overflow-hidden" },
          React.createElement(ImageWithFallback, {
            src: post.image,
            alt: post.title,
            className: "w-full h-64 md:h-96 object-cover"
          }),
          React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" })
        ),

        // Tags
        React.createElement("div", { className: "flex flex-wrap gap-2 mb-8" },
          post.tags.map((tag, index) =>
            React.createElement(Badge, {
              key: index,
              variant: "outline",
              className: "border-purple-500/30 text-purple-400"
            }, tag)
          )
        )
      ),

      // Article content
      React.createElement(motion.div, {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.2 },
        className: "prose prose-lg prose-invert max-w-none mb-12"
      },
        React.createElement("div", {
          dangerouslySetInnerHTML: { __html: post.content },
          className: "text-gray-300 leading-relaxed [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-8 [&>h2]:mb-4 [&>p]:mb-6 [&>p]:text-gray-300"
        })
      ),

      // Thank you section
      React.createElement(motion.div, {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.4 },
        className: "border-t border-slate-700 pt-8"
      },
        React.createElement("div", { className: "text-center" },
          React.createElement("div", { className: "flex items-center justify-center text-gray-400" },
            React.createElement(BookOpen, { className: "w-5 h-5 mr-2" }),
            "Thank you for reading!"
          )
        )
      )
    )
  );
}
