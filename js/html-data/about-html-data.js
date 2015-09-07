var articles = {
    georgiaTech: {
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
    }
};
