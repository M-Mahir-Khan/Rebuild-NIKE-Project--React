import React, { useEffect, useRef } from 'react';
import '../assets/style.css';
import '../assets/responsive.css';
import Navbar from '../components/Navbar';

function About() {
  // Refs to DOM elements
  const textRef = useRef();
  const leafRef = useRef();
  const hill1Ref = useRef();
  const hill4Ref = useRef();
  const hill5Ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      if (textRef.current) textRef.current.style.transform = `translateY(${value * 2.5}px)`;
      if (leafRef.current) leafRef.current.style.transform = `translate(${value * 1.5}px, ${value * -1.5}px)`;
      if (hill5Ref.current) hill5Ref.current.style.transform = `translateX(${value * 1.5}px)`;
      if (hill4Ref.current) hill4Ref.current.style.transform = `translateX(${-value * 1.5}px)`;
      if (hill1Ref.current) hill1Ref.current.style.transform = `translateY(${value * 1}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <Navbar/>
      <section className="parallax">
        <img src="/Images/About/hill1.png" id="hill1" ref={hill1Ref} alt="hill1" />
        <img src="/Images/About/hill2.png" alt="hill2" />
        <img src="/Images/About/hill3.png" alt="hill3" />
        <img src="/Images/About/hill4.png" ref={hill4Ref} alt="hill4" />
        <img src="/Images/About/hill5.png" ref={hill5Ref} alt="hill5" />
        <img src="/Images/About/tree.png" alt="tree" />
        <h2 id="about-text" ref={textRef}>NIKE COLLECTION</h2>
        <img src="/Images/About/leaf.png" id="leaf" ref={leafRef} alt="leaf" />
        <img src="/Images/About/plant.png" alt="plant" />
      </section>

      <section className="sec">
        <h2>About NIKE</h2>
        <p className="text-light">
          {/* Add your content here */}
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum non vel laudantium aliquid,
                rem dolores,
                cupiditate labore dignissimos omnis voluptas, culpa nemo nisi odit! Et perspiciatis esse nihil fuga suscipit
                omnis rerum officia molestiae nostrum! Corrupti vero laudantium pariatur mollitia illum? Maxime similique
                modi hic et asperiores neque corrupti laudantium dolores dolorem deleniti aspernatur dolorum qui animi
                officiis labore eum voluptate recusandae necessitatibus, quibusdam id accusantium odio unde. Incidunt
                deleniti laboriosam placeat officia dolorum mollitia vel, aspernatur ad, neque reiciendis, temporibus ipsa
                aperiam cum quasi nisi voluptates modi. Reprehenderit vero itaque tenetur culpa vel, repudiandae illum esse
                vitae repellat saepe quia ad numquam fuga illo modi exercitationem? Molestiae harum doloremque deleniti? Ab,
                officia tenetur accusamus et voluptas nobis inventore quisquam.<br/><br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum non vel laudantium aliquid, rem dolores,
                cupiditate labore dignissimos omnis voluptas, culpa nemo nisi odit! Et perspiciatis esse nihil fuga suscipit
                omnis rerum officia molestiae nostrum! Corrupti vero laudantium pariatur mollitia illum? Maxime similique
                modi hic et asperiores neque corrupti laudantium dolores dolorem deleniti aspernatur dolorum qui animi
                officiis labore eum voluptate recusandae necessitatibus, quibusdam id accusantium odio unde. Incidunt
                deleniti laboriosam placeat officia dolorum mollitia vel, aspernatur ad, neque reiciendis, temporibus ipsa
                aperiam cum quasi nisi voluptates modi. Reprehenderit vero itaque tenetur culpa vel, repudiandae illum esse
                vitae repellat saepe quia ad numquam fuga illo modi exercitationem? Molestiae harum doloremque deleniti? Ab,
                officia tenetur accusamus et voluptas nobis inventore quisquam.<br/><br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum non vel laudantium aliquid, rem dolores,
                cupiditate labore dignissimos omnis voluptas, culpa nemo nisi odit! Et perspiciatis esse nihil fuga suscipit
                omnis rerum officia molestiae nostrum! Corrupti vero laudantium pariatur mollitia illum? Maxime similique
                modi hic et asperiores neque corrupti laudantium dolores dolorem deleniti aspernatur dolorum qui animi
                officiis labore eum voluptate recusandae necessitatibus, quibusdam id accusantium odio unde. Incidunt
                deleniti laboriosam placeat officia dolorum mollitia vel, aspernatur ad, neque reiciendis, temporibus ipsa
                aperiam cum quasi nisi voluptates modi. Reprehenderit vero itaque tenetur culpa vel, repudiandae illum esse
                vitae repellat saepe quia ad numquam fuga illo modi exercitationem? Molestiae harum doloremque deleniti? Ab,
                officia tenetur accusamus et voluptas nobis inventore quisquam.<br/><br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum non vel laudantium aliquid, rem dolores,
                cupiditate labore dignissimos omnis voluptas, culpa nemo nisi odit! Et perspiciatis esse nihil fuga suscipit
                omnis rerum officia molestiae nostrum! Corrupti vero laudantium pariatur mollitia illum? Maxime similique
                modi hic et asperiores neque corrupti laudantium dolores dolorem deleniti aspernatur dolorum qui animi
                officiis labore eum voluptate recusandae necessitatibus, quibusdam id accusantium odio unde. Incidunt
                deleniti laboriosam placeat officia dolorum mollitia vel, aspernatur ad, neque reiciendis, temporibus ipsa
                aperiam cum quasi nisi voluptates modi. Reprehenderit vero itaque tenetur culpa vel, repudiandae illum esse
                vitae repellat saepe quia ad numquam fuga illo modi exercitationem? Molestiae harum doloremque deleniti? Ab,
                officia tenetur accusamus et voluptas nobis inventore quisquam.<br/><br/>
        </p>
      </section>
    </>
  );
}

export default About;
