"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, Facebook, HelpCircle, Heart, Instagram, Mail, MessageCircle, Newspaper, Star, Target, Trophy, Twitter, Users } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="small"
      sizing="large"
      background="aurora"
      cardStyle="glass-depth"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Team", id: "team" },
            { name: "Features", id: "features" },
            { name: "News", id: "blog" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Thunderbolts Basketball"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Thunderbolts Basketball Team"
          description="Join our championship-winning school basketball team and develop your skills, teamwork, and passion for the game under expert coaching"
          tag="Champions 2024"
          tagIcon={Trophy}
          buttons={[
            { text: "Join Our Team", href: "contact" },
            { text: "Meet the Players", href: "team" }
          ]}
          imageSrc="https://pixabay.com/get/gf33f9dbde9d02ef19af5feb3cffaff6f2e11ab83d182dfa0e8a2404cb4b3f21572efc027ac526b0b4dc171295260924c49a4c1800971a37999fd240c0e480f02_1280.jpg"
          imageAlt="Thunderbolts basketball team in action"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="We believe in building champions both on and off the court. Our program develops athletic excellence, character, leadership, and lifelong friendships through the power of basketball."
          features={[
            {
              icon: Users,
              title: "Team Spirit",
              description: "Build lasting friendships and learn the value of teamwork through collaborative training and competitive play"
            },
            {
              icon: Target,
              title: "Skill Development",
              description: "Improve your basketball fundamentals with personalized coaching and structured practice sessions"
            },
            {
              icon: Award,
              title: "Championship Culture",
              description: "Compete at the highest level with a winning tradition and commitment to excellence in every game"
            },
            {
              icon: Heart,
              title: "Character Building",
              description: "Develop leadership skills, discipline, and sportsmanship that will benefit you throughout life"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Program Highlights"
          description="Discover what makes our basketball program exceptional for student athletes"
          tag="Excellence"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "Professional Coaching",
              description: "Learn from experienced coaches with championship backgrounds and proven track records in player development",
              imageSrc: "https://pixabay.com/get/gee1c5b6a87e8b8959ea5e6d56c479fe7096cd8d9cb3a667aba24ff68951a58c6ee6a536f78b5fa0335ec77992326f526eb57e06398dd4c88a50845f3ff6eeec4_1280.jpg",
              imageAlt: "Basketball coaching session",
              button: { text: "Meet Our Coaches", href: "team" }
            },
            {
              title: "Strategic Game Planning",
              description: "Master basketball fundamentals and advanced strategies through comprehensive game analysis and tactical training",
              imageSrc: "https://pixabay.com/get/g3d7a3a96952dab67cc934b2dd42c926193f8eda189579d9158021b712f17a25b30e976f4da472284f73c0b6958b70ecf_1280.jpg",
              imageAlt: "Basketball strategy planning",
              button: { text: "Learn More", href: "about" }
            }
          ]}
          buttons={[
            { text: "View All Programs", href: "contact" }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="Get to know the dedicated coaches and talented players who make up the Thunderbolts family"
          tag="Our Family"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Coach Martinez",
              role: "Head Coach",
              imageSrc: "https://pixabay.com/get/gfaf02a1b5da03551b103a74b256627ba425eea541a3119675d92cf7623e2e58882add1c212d62bcb8dc66433b4e4cdb6749c607b8f78f0efbe3bc22c77a3d5c0_1280.jpg",
              imageAlt: "Coach Martinez portrait"
            },
            {
              id: "2",
              name: "Marcus Johnson",
              role: "Team Captain",
              imageSrc: "https://pixabay.com/get/gc419c46484eeb94ef897a461b65922a583d81d7e83f1160bde6b70feb445f59d767fb51091769cafc8b637cf5de6b5603db401839db5f11c676aa603775f583e_1280.jpg",
              imageAlt: "Marcus Johnson portrait"
            },
            {
              id: "3",
              name: "Sarah Williams",
              role: "Point Guard",
              imageSrc: "https://pixabay.com/get/ge17f6769be47d9fb6e6eafa51a69ce91d8efa134e2e2247109a4e3d00e377f96372ceda05065b0bdd1f14544fae4ffd106f7313ecfad9e3c128ab24a14ab6622_1280.jpg",
              imageAlt: "Sarah Williams portrait"
            },
            {
              id: "4",
              name: "David Chen",
              role: "Forward",
              imageSrc: "https://pixabay.com/get/g684ed4a379545989b0f9fa4b3e74baed4750cab05371e3c8ecdd12e359a33253caec55311022427731ea18a8c64ab9bc393f643ea6a63b85b0a06638f4db0e4e_1280.jpg",
              imageAlt: "David Chen portrait"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Community Says"
          description="Hear from players, parents, and supporters about their Thunderbolts experience"
          tag="Testimonials"
          tagIcon={MessageCircle}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Alex Rodriguez",
              role: "Senior Player",
              company: "Thunderbolts Team",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g2499a98fff15dd1308c1f0b4d0711bfd69a111a66eb1c1e5c5ea1763c287f866ce3195329b1dc81fbe4edfdfbe1d40143d216050997de84cf0366b453a673e85_1280.jpg",
              imageAlt: "Alex Rodriguez portrait"
            },
            {
              id: "2",
              name: "Emma Thompson",
              role: "Junior Guard",
              company: "Thunderbolts Team",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gf9e83ba3f4a2e0965ab864c67611e2595d9bb4fabc801cb5cab2bf9aadda7ed49948579060785e5780b15094df1ed0a9902b6cae5845e8fbc3d122a07ffce8d5_1280.jpg",
              imageAlt: "Emma Thompson portrait"
            },
            {
              id: "3",
              name: "Mrs. Garcia",
              role: "Parent",
              company: "Team Supporter",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gc20f89e587ab4e9d090ce42812ab0916a747e2478a55652a81e5d848dd6b28808929eb52f9d4abe30f1b82c8ce5217a9875b2d422129bd660acee2bcbd05dc5c_1280.jpg",
              imageAlt: "Mrs. Garcia portrait"
            },
            {
              id: "4",
              name: "Principal Davis",
              role: "School Principal",
              company: "Lincoln High School",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gfbc1c6d346d58d2ed0d7b7233194479a4a744732e68b34dbea0ae838e9b06311862b579bae315fccd676200a1d4bc93cbc1de211837f1e8dadcd9d747275ddd5_1280.jpg",
              imageAlt: "Principal Davis portrait"
            },
            {
              id: "5",
              name: "Coach Stevens",
              role: "Assistant Coach",
              company: "Thunderbolts Staff",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g0e53eca74a53b540f6cacbca98224b27ae6402663bc6a0b8a31d34eea5a4312fe3aef77756312ab4bfce6d01c1ebde483f875d1883fe781ed2a5b63daee5f7c7_1280.jpg",
              imageAlt: "Coach Stevens portrait"
            },
            {
              id: "6",
              name: "Jordan Parker",
              role: "Alumni",
              company: "Class of 2022",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g4101843be87bac9d2b060254a0e25e072fb7e39ea6e89a9ac50384b54a3a33132219cf958a71e7cff3c9354c4897d2c00bfdf28021f2b560adbbec63c862c58c_1280.jpg",
              imageAlt: "Jordan Parker portrait"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about joining our basketball team and program requirements"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          faqs={[
            {
              id: "1",
              title: "What are the requirements to join the team?",
              content: "Students must maintain a minimum 2.5 GPA, attend all practices, and demonstrate commitment to teamwork and sportsmanship. No prior experience is required - we welcome players of all skill levels."
            },
            {
              id: "2",
              title: "What is the practice schedule?",
              content: "Regular practices are held Monday through Friday from 3:30-5:30 PM in the school gymnasium. Additional weekend practices may be scheduled during championship season."
            },
            {
              id: "3",
              title: "Do you provide equipment and uniforms?",
              content: "Yes, the school provides all game uniforms and basic equipment. Players are responsible for their own basketball shoes and practice gear."
            },
            {
              id: "4",
              title: "How do I try out for the team?",
              content: "Tryouts are held at the beginning of each school year in September. Contact Coach Martinez or visit the athletic department for specific dates and requirements."
            },
            {
              id: "5",
              title: "Are there fees to participate?",
              content: "There is a small participation fee of $50 per season to cover transportation and tournament entry fees. Financial assistance is available for students who need it."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest Team News"
          description="Stay updated with the latest news, game results, and team announcements"
          tag="News"
          tagIcon={Newspaper}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Championship",
              title: "Thunderbolts Win Regional Championship",
              excerpt: "Our team secured victory in the regional finals with an outstanding 85-72 win against the Eagles",
              imageSrc: "https://pixabay.com/get/g0595734e084bcc077b173debeb7fe95870ac991ab7ff763a462097e0ebe68c2ba48ded0807a39a0b359bd07f75e1fd011cbee19f6ab7370f12df9ea52fc18f4e_1280.jpg",
              imageAlt: "Championship trophy celebration",
              authorName: "Coach Martinez",
              authorAvatar: "https://pixabay.com/get/gfaf02a1b5da03551b103a74b256627ba425eea541a3119675d92cf7623e2e58882add1c212d62bcb8dc66433b4e4cdb6749c607b8f78f0efbe3bc22c77a3d5c0_1280.jpg",
              date: "15 Mar 2024"
            },
            {
              id: "2",
              category: "Team News",
              title: "New Season Training Camp Begins",
              excerpt: "Summer training camp starts next week with focus on fundamentals and team building exercises",
              imageSrc: "https://pixabay.com/get/g3acf8726e7282937a2b04a039faec6c9e0c4fcebbf96a031262049a851c6a03e729b0f84991b6cb3d513697995f17666_1280.jpg",
              imageAlt: "Team huddle during strategy session",
              authorName: "Assistant Coach",
              authorAvatar: "https://pixabay.com/get/g0e53eca74a53b540f6cacbca98224b27ae6402663bc6a0b8a31d34eea5a4312fe3aef77756312ab4bfce6d01c1ebde483f875d1883fe781ed2a5b63daee5f7c7_1280.jpg",
              date: "8 Mar 2024"
            },
            {
              id: "3",
              category: "Community",
              title: "Youth Basketball Clinic Success",
              excerpt: "Over 100 elementary students participated in our annual youth basketball clinic last weekend",
              imageSrc: "https://pixabay.com/get/g8273d12bb4d2157c3e5a348895862339e9c4943ebe264b98092c8e266d53057b456de9dd62154269f4971ec9dbc6c1ee2611159fc9482e0014936c8db59126ed_1280.jpg",
              imageAlt: "Community basketball event",
              authorName: "Team Captain",
              authorAvatar: "https://pixabay.com/get/gc419c46484eeb94ef897a461b65922a583d81d7e83f1160bde6b70feb445f59d767fb51091769cafc8b637cf5de6b5603db401839db5f11c676aa603775f583e_1280.jpg",
              date: "1 Mar 2024"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get in Touch"
          title="Join the Thunderbolts Family"
          description="Ready to be part of our championship basketball team? Get in touch with our coaching staff to learn more about tryouts and team requirements."
          tagIcon={Mail}
          inputPlaceholder="Enter your email"
          buttonText="Contact Us"
          termsText="By contacting us, you agree to receive information about our basketball program and team activities."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Thunderbolts Basketball"
          columns={[
            {
              title: "Team",
              items: [
                { label: "Roster", href: "team" },
                { label: "Coaches", href: "team" },
                { label: "Schedule", href: "blog" }
              ]
            },
            {
              title: "Program",
              items: [
                { label: "Training", href: "features" },
                { label: "Tryouts", href: "contact" },
                { label: "Requirements", href: "faq" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Contact", href: "contact" },
                { label: "News", href: "blog" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/thunderboltsbasketball",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/thunderboltsbb",
              ariaLabel: "Follow us on Twitter"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/thunderboltsbasketball",
              ariaLabel: "Like us on Facebook"
            }
          ]}
          copyrightText="© 2024 Thunderbolts Basketball Team. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}