
                                 
Thuli Studios Hackathon Submission - Jewelry Retail App

Introduction

This React Native app was developed as part of Thule Studios Hackathon and will be reviewed by Mrs. Keethana Bhaskaran. We extend our sincere thanks to her for evaluating this project.

Our app is focused on creating an elegant, user-centric experience for purchasing jewelry online. We aimed to redefine how users engage with retail jewelry through careful design, extensive research, and vendor collaboration. The UI is meticulously designed, and the app has been optimized for performance to offer a seamless shopping experience.

Background and Research

During the development phase, we conducted extensive research on the optimal UI/UX for online jewelry shopping. We collaborated with 10+ real-time retail jewelry vendors to gather insights and suggestions. Based on their feedback, we’ve crafted a UI that prioritizes clarity, trust, and ease of use. which took us 1+ day

Key Insights from Vendor Feedback:

	•	Minimal and Focused UI: The primary feedback from vendors was the need for a minimal, uncluttered user interface that directs the user’s attention to the jewelry itself. Many existing platforms present too much information, causing confusion and decision fatigue. Our UI takes a grayscale monochrome approach for the landing page, where everything except the jewelry is desaturated. This focuses the user’s attention on the product.
	•	Customizable Skin Tone Feature: We introduced a skin color customization feature for the product models. Users can select different skin tones to see how jewelry looks on various skin shades, a feature that was previously missing from most major jewelry platforms. This empowers customers to make more informed purchasing decisions and ensures a personalized experience.

UI Design and Key Features [Implemented]

	1.	Grayscale Monochrome with Colored Jewelry:
	•	The app’s landing page is designed in grayscale to make the jewelry stand out. By de-emphasizing the surrounding elements, we focus entirely on the jewelry, which is showcased in vibrant colors. This makes it easier for users to visualize the products without distractions.
	2.	Minimal and Clutter-Free Experience:
	•	We’ve drawn comparisons with many jewelry websites, including popular platforms like JosAlukas adn GIVA identified a significant amount of cluttered information that overwhelms users. Our app counters this by stripping down unnecessary details, ensuring users can easily make purchasing decisions.
	3.	Trust-Building Information First:
	•	Based on our research, one of the biggest pain points for online shoppers is trust. To address this, we display all the necessary trust-building information (such as product certifications, reviews, and shipping details) at the forefront. Add to Cart has been deliberately moved to the end of the product page to encourage informed decision-making.
	4.	Recommendation System:
	•	We noticed that many e-commerce websites fail to provide relevant product recommendations including JosAlukas and giva they show completely differnt poduct in realted product section, that would make the user go mad, interms of store what they expect is more designs in a related manner, we have to created that sense in our online store. Our Recommendation System has been improved to offer only truly related items . This ensures that users are presented with products that complement their browsing history and preferences, avoiding the issue of irrelevant suggestions.

 Product Page Features [Implemented]

	1.	Information-First Design:
	•	Our product page prioritizes trust-building elements like product certifications, user reviews, and detailed descriptions. All the important information that helps build trust is shown before the “Add to Cart” button, based on feedback from vendors. This structure encourages users to learn more about the product before deciding to purchase.
	2.	Vendor-Specific Curation:
	•	The layout of the product briefing page is designed following suggestions from the vendors. All information is organized to cater to user habits and preferences for retail jewelry shopping, making the experience more intuitive.
	3.	Customizable Options:
	•	We’ve incorporated features like ring size selection and skin color customization that allow users to personalize their shopping experience.
 
 
Advanced Prompt Handling with Gemini & Unsplash API: 
	•	In this version, we’ve already incorporated the Unsplash API to retrieve product-related images. However, one of the challenges we faced was handling irregular or irrelevant prompts provided by users. To overcome this, we leveraged Google Gemini to redefine and personalize the user input before sending it to the Unsplash API.
	•	The user’s input is first processed by Gemini to create a clean and accurate query that works well with the Unsplash API, ensuring that only relevant results are retrieved. This process helps users get more precise and meaningful results, tailored to their needs.

 
Technical Highlights: React Native Optimization [Possible changes in the mind but not implemented]

	1.	Image Optimization:
	•	Images are crucial in a jewelry app, but they can often bloat the app’s size and slow down performance. We implemented image optimization strategies by compressing and using the appropriate image formats (like WebP) to reduce the load time without sacrificing quality. This makes the app faster and more efficient, especially for mobile users.
	2.	Efficient Component Rendering:
	•	We’ve leveraged React Native’s optimization techniques to ensure smooth performance across various devices. The app uses FlatList and VirtualizedList to efficiently render long lists of products, ensuring that only the visible items are rendered at a time, reducing memory usage.
	3.	Lazy Loading:
	•	To further enhance performance, we implemented lazy loading for images and product data. This ensures that users can start interacting with the app quickly while content loads in the background.
	4.	Optimized Navigation:
	•	React Native’s Stack Navigator and Tab Navigator were optimized to ensure fast screen transitions and reduced memory consumption. This makes the app feel more responsive and fluid.


Future Scope

	1.	VR and AR Integration Using SnapStudio:
	•	In the future, we plan to integrate Virtual Reality (VR) and Augmented Reality (AR) experiences using SnapStudio. This will allow users to visualize how the jewelry looks on them in real-time, providing a highly immersive shopping experience. The idea is to let customers interact with the jewelry in 3D and even try it on virtually before making a purchase.
	2.	Image Carousel for Product Gallery:
	•	Due to time constraints, we were unable to implement a carousel feature for the product images. However, in future updates, we plan to include an image carousel that allows users to swipe through multiple images of the same product, providing a richer visual experience.
	3.	Skin Color Optimization and SnapStudio:
	•	We are also planning to extend the skin color customization feature by leveraging SnapStudio for more accurate and dynamic skin tone visualizations. This will allow users to better match the jewelry against their skin tone in real-time using AR.
	4.	Improved Visualization of the Gallery:
	•	Given more time, we aim to provide a better visualization experience for the gallery itself, offering higher resolution images, zoom features, and enhanced navigation within the gallery to improve the overall user experience.
	5.	In reviewing other jewelry websites, I noticed a lack of emotional connection and relatability in how products are presented. Many sites focus solely on technical details, like dimensions, which fail to establish empathy with the user. To address this, I wanted to create a more relatable experience by using everyday items, such as a mobile phone, as a reference for scale in the product images. By visually comparing jewelry to something users interact with daily, they can better visualize how the pieces will look and feel in real life. This approach adds a sense of familiarity and connection between the user and the online store, ensuring they don’t feel disconnected or alienated during their shopping experience
 



These future enhancements will further refine the app and provide users with an even more engaging and intuitive shopping experience.
Conclusion

This React Native app reimagines the online jewelry shopping experience by focusing on minimalist UI design, trust-building information, and performance optimization. By working closely with real-world vendors and leveraging modern app optimization techniques, we’ve created an app that is both aesthetically pleasing and functional.

                             [ I was so eager to solve this problem for a very long time, i did'nt get time and situatioin , thanks for the oppurtunity :) ]
                              

A special thank you to Mrs. Keetana Bhaskaran for her time and consideration in reviewing this submission.

Thank you for reading! We hope this app sets a new standard for online jewelry retail and enhances the shopping experience for all users.
