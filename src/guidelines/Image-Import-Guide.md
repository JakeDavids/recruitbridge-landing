# How to Import Your Own Images in RecruitBridge

## Method 1: Direct URL from Image Hosting Services

The easiest way to use your own images is to upload them to an image hosting service and use the direct URL.

### Recommended Image Hosting Services:
1. **Imgur** (https://imgur.com) - Free, simple image hosting
2. **Cloudinary** (https://cloudinary.com) - Professional option with optimization
3. **AWS S3** - If you have AWS account
4. **Google Drive** - Make sure to use proper sharing settings

### Steps:
1. Upload your image to the hosting service
2. Get the direct image URL (must end in .jpg, .png, .webp, etc.)
3. Replace the URL in your code

### Example:
```tsx
<img
  src="https://your-image-host.com/your-image.jpg"
  alt="Description of image"
  className="w-full h-full object-cover"
/>
```

## Method 2: Using Base64 Encoding (For Small Images Only)

For small images like logos, you can convert them to base64.

### Steps:
1. Go to https://www.base64-image.de/ or similar tool
2. Upload your image
3. Copy the base64 string
4. Use in your code like this:

```tsx
<img
  src="data:image/png;base64,iVBORw0KGgoAAAANS..."
  alt="Your logo"
/>
```

⚠️ **Warning**: Only use this for very small images (< 50KB) as it increases file size.

## Method 3: Import from Project (Figma Make)

In Figma Make, you can import images directly:

```tsx
// If your image is in the project
import myImage from './assets/my-image.jpg';

// Then use it
<img src={myImage} alt="My image" />
```

## Where to Replace Images in RecruitBridge:

### 1. **Hero Section Logo**
Location: `/components/HeroSection.tsx`
Current: `logoImage` variable at the top of the file

### 2. **ForAthletes Section Image**
Location: `/components/ForAthletes.tsx`
Look for: `<img src="https://images.unsplash.com/photo-..."`

### 3. **Testimonial Photos**
Location: `/components/Testimonials.tsx`
In the `testimonials` array, each testimonial has an `image` property

### 4. **TestimonialHighlight**
Location: `/components/TestimonialHighlight.tsx`
Currently uses an emoji 🏈, but you can replace with image:

```tsx
// Replace this:
<span style={{ fontSize: '1.5rem' }}>🏈</span>

// With this:
<img 
  src="https://your-image-url.com/athlete-photo.jpg" 
  alt="Athlete"
  className="w-full h-full object-cover rounded-full"
/>
```

### 5. **FinalCTA Background**
Location: `/components/FinalCTA.tsx`
Look for the background image URL in the component

## Image Best Practices:

### Recommended Sizes:
- **Hero Logo**: 500x500px (transparent PNG)
- **Section Images**: 1200x800px
- **Testimonial Photos**: 400x400px (square)
- **Background Images**: 1920x1080px

### Format Recommendations:
- **Photos**: JPG or WebP
- **Logos/Graphics**: PNG or SVG
- **Backgrounds**: JPG (for file size)

### Optimization:
- Compress images before uploading (use https://tinypng.com)
- Use appropriate dimensions (don't upload 4K images for small thumbnails)
- WebP format offers best quality/size ratio

## Quick Replace Guide:

To replace an image in the code:
1. Find the component file in `/components/`
2. Look for `src="https://..."`
3. Replace the URL with your own
4. Make sure the URL is publicly accessible
5. Test that the image loads correctly

## Example: Replacing Caleb Irving's Photo

```tsx
// In /components/TestimonialHighlight.tsx
// Find this testimonial object and update:

{
  name: 'Caleb Irving',
  role: 'D-Lineman • Class of 2028',
  quote: '...',
  image: 'YOUR_IMAGE_URL_HERE.jpg',  // ← Replace this
}
```

## Need Help?

If you're having trouble with images:
1. Make sure the URL is publicly accessible
2. Check that the URL ends with an image extension (.jpg, .png, etc.)
3. Test the URL by pasting it directly in your browser
4. Ensure HTTPS is used (not HTTP)
