'use client'
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (  
    <div className="max-w-[800px] mx-auto py-8">
     <div className="flex justify-center items-end gap-4">
       <h1 className="text-4xl">A man can code and design.</h1>
      <Image 
      src='/gorilla.gif'
      width={50}
      height={50}
      alt="abhishek"
      className="mb-1"
      loading="eager"
      />
     </div>
      <div className="w-full olumns-1 sm:columns-2  gap-4 mt-12 ">
        <blockquote className="twitter-tweet break-inside-avoid" data-media-max-width="560">
          <p lang="en" dir="ltr">
            did i cook? <a href="https://t.co/gZ4Bgz82rE">pic.twitter.com/gZ4Bgz82rE</a>
          </p>
          &mdash; Abhishek (@abhiix4) <a href="https://twitter.com/abhiix4/status/1933554779277697296?ref_src=twsrc%5Etfw">June 13, 2025</a>
        </blockquote>
        
        <blockquote className="twitter-tweet break-inside-avoid">
          <p lang="en" dir="ltr">
            Firebase is up, so <a href="https://t.co/w7wpE4etVn">https://t.co/w7wpE4etVn</a> is up. <a href="https://t.co/UCEMh30uvY">pic.twitter.com/UCEMh30uvY</a>
          </p>
          &mdash; Abhishek (@abhiix4) <a href="https://twitter.com/abhiix4/status/1933244824960053406?ref_src=twsrc%5Etfw">June 12, 2025</a>
        </blockquote>
        
        <blockquote className="twitter-tweet break-inside-avoid">
          <p lang="en" dir="ltr">
            Just made a little extension that writes tweets for me! 😅 Needed it for my own sanity. Here&#39;s a peek at how it works! <a href="https://t.co/RZT965o3ms">pic.twitter.com/RZT965o3ms</a>
          </p>
          &mdash; Abhishek (@abhiix4) <a href="https://twitter.com/abhiix4/status/1933486397207535803?ref_src=twsrc%5Etfw">June 13, 2025</a>
        </blockquote>
        
        <blockquote className="twitter-tweet break-inside-avoid">
          <p lang="en" dir="ltr">
            check this out : <a href="https://t.co/Qf5FOY38jK">https://t.co/Qf5FOY38jK</a> <a href="https://t.co/YjdW5zow9S">https://t.co/YjdW5zow9S</a> <a href="https://t.co/BWWWo5XjR8">pic.twitter.com/BWWWo5XjR8</a>
          </p>
          &mdash; Abhishek (@abhiix4) <a href="https://twitter.com/abhiix4/status/1932470490909778217?ref_src=twsrc%5Etfw">June 10, 2025</a>
        </blockquote>
        
        <blockquote className="twitter-tweet break-inside-avoid">
          <p lang="en" dir="ltr">
            A minimal GitHub Issue Tracker.<br/>Helps you view issues across multiple repos in one clean dashboard.<br/>Still a WIP, but here's a quick demo 👇<a href="https://twitter.com/hashtag/buildinpublic?src=hash&amp;ref_src=twsrc%5Etfw">#buildinpublic</a> <a href="https://t.co/es1kxRouED">pic.twitter.com/es1kxRouED</a>
          </p>
          &mdash; Abhishek (@abhiix4) <a href="https://twitter.com/abhiix4/status/1931722329735967077?ref_src=twsrc%5Etfw">June 8, 2025</a>
        </blockquote>
      </div>

       <h1 className="text-xl text-center mt-8">Get in touch - <a href="mailto:abhiifour@gmail.com">abhiifour@gmail.com</a></h1>
    </div>
  );
}