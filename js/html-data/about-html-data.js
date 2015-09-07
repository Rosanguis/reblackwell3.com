var articles = {};
articles.georgiaTech = {
    id: 'about-georgia-tech',
    cssClass: 'about',
    sections: {
        header: {
            type: 'header',
            title: 'Georgia Tech',
            subtitle: 'B.S. Industrial Engineering<br>High Honors',
            text: 'Georgia Tech prepared me for my career by providing a wide variety of technical skills and life experiences'
        },
        section: {
            1: {
                id: 'study-abroad',
                title: {
                    data: 'China &amp; Singapore',
                    foundationGrid: 'small-5'
                },
                img: {
                    type: 'url', //Sprite or URI?
                    data: 'images/about/tech_tower.jpg',
                    foundationGrid: 'small-7'
                },
                text: 'I studied abroad during the summer of 2014 for 6 weeks in China and 6 weeks in Singapore. This was my most impactful experience at Georgia Tech. I made lasting connections with people abroad who showed me the similarities and differences between Asian, primarily Chinese, and Western culture. In fact, I still study Mandarin Chinese and message with Chinese friends in Mandarin and English nearly daily.'
            },
            2: {
                id: 'data-science',
                title: {
                    data: 'Data Science',
                    foundationGrid: 'small-5',
                },
                img: {
                    type: 'url', //Sprite or URI?
                    data: 'images/about/tech_tower.jpg',
                    foundationGrid: 'small-7'
                },
                text: 'During my final year at Georgia Tech, I took an interest in data science. I had an excellent professor for a data visualization class and another great professor for a challenging analytics course. The next semester I attended the Strata Hadoop World conference in California. (For the most part it was over my head.) My interest in data science has not wavered, and I am finding avenues to improve my skills and experience in data visualization and analysis.'
            }
        },
        aside: {
            data: 'Fun fact: Both of my parents are also Georgia Tech alumni. There was no escape for me.'
        }
    }
};
articles.unionPacific = {
    id: 'about-union-pacific',
    cssClass: 'about',
    sections: {
        header: {
            type: 'header',
            title: 'Union Pacific',
            subtitle: 'Associate Application Developer',
            text: 'As a Java developer on a $200 million replacement of an existing critical system, I have learned the details of developing software and gained an understanding of the big picture and complexity involved in large-scale projects'
        },
        section: {
            1: {
                id: 'existing-code',
                title: {
                    data: 'Working with Existing Code Base',
                    foundationGrid: 'small-7'
                },
                img: {
                    type: 'url', //Sprite or URI?
                    data: 'images/about/tech_tower.jpg',
                    foundationGrid: 'small-5'
                },
                text: 'Given that the programming for my project began nearly 10 years ago, there is a tremendous amount of reliance on existing code. This is a radical shift from coding for school assignments, where the only existing code I would use were popular libraries that had easily acessible public documentation. Beginning my career in a well-established project has helped me learn general and project-specific standards quickly since I can reference code and learn from it.'
            },
            2: {
                id: 'tech-meth',
                title: {
                    data: 'Technologies &amp; Methodologies',
                    foundationGrid: 'small-7',
                },
                img: {
                    type: 'url', //Sprite or URI?
                    data: 'images/about/tech_tower.jpg',
                    foundationGrid: 'small-5'
                },
                //Data structure does not apply
                text: '<div class="row" data-equalizer> <div class="small-6 columns" data-equalizer-watch> <ul class="circle"> <li>Java</li> <li>Maven</li> <li>Spring</li> <li>Subversion</li> </ul> </div> <div class="small-6 columns" data-equalizer-watch> <ul class="circle"> <li>Agile</li> <li>Unit Testing</li> <li>Code Reviews</li> </ul> </div> </div>'
            }
        },
        aside: {
            data: 'Fun fact: I work within NetControl. NetControl will replace Train Control System, which was completed in the 1970&rsquo;s but has become increasingly difficult to maintain.'
        }
    }
};
articles.globalTravel = {
    id: 'about-global-travel',
    cssClass: 'about',
    sections: {
        header: {
            type: 'header',
            title: 'Global Travel',
            subtitle: '3 Continents, 20+ Countries, &amp; All 50 States',
            text: 'Traveling to a variety of different destinations has broaden my horizons by showing me the differences between cultures, and things that are always the same'
        },
        section: {
            1: {
                id: 'asia',
                title: {
                    data: 'Asia',
                    foundationGrid: 'small-5'
                },
                img: {
                    type: 'url', //Sprite or URI?
                    data: 'images/about/tech_tower.jpg',
                    foundationGrid: 'small-7'
                },
                text: '<p>I spent 3 months in Asia during 2014. They were the most exciting days of my life and I treausure my time exploring China, Singapore, and Indonesia. I was lucky enough to meet kind people in China who helped me explore authentic Chinese culture. </p> <p> I was confused a large percentage of the time in China because everyone around me, including my hosts, was speaking Mandarin or Cantonese. I am continuing to learn Mandarin Chinese so I have a better shot of not being confused next time.</p>'
            },
            2: {
                id: 'europe',
                title: {
                    data: 'Europe',
                    foundationGrid: 'small-5',
                },
                img: {
                    type: 'url', //Sprite or URI?
                    data: 'images/about/tech_tower.jpg',
                    foundationGrid: 'small-7'
                },
                text: ' <p>When I was 18, my dad and I spent 7 weeks in Europe and visited over 10 countries. I planned the trip to maximize the number of interesting things we could see every day. We stuck to my schedule for maybe a week before we were tired of seeing art museums. Afterwards we used the schedule but didn&rsquo;t follow it religiously. </p> <p>The trip was great since we got to visit so many simultaneously modern and historic cities: London, Paris, Rome, Berlin, Amsterdam, Prague, etc. </p>'
            },
            //Must be updated to add third section
            //Empty skeleton or cloning
            3: {
                id: 'north-america',
                title: {
                    data: 'North America',
                    foundationGrid: 'small-5',
                },
                img: {
                    type: 'url', //Sprite or URI?
                    data: 'images/about/tech_tower.jpg',
                    foundationGrid: 'small-7'
                },
                text: ' <p>Every summer when I was in elementary, middle, and high school, my family would take a vacation to a particular region of the United States and see a cluster of states. They wanted to take me and my sister to all 50 states before we turned 18. And I am happy to say they succeeded. Learning about the United States through travel has been great. The most important thing I learned is that Southerners are the friendliest. But I&rsquo;m from Atlanta, so I already knew that. </p> <p> I have also visited Canada and Mexico as well as a variety of Caribbean island nations. </p>'
            }
        },
        aside: {
            data: 'Fun fact: Though Mandarin Chinese is often considered one of the most difficult languages for Westerners to learn, its grammar is much simpler than most Western languages. In fact, verbs do not even need to be conjugated.'
        }
    }
};
