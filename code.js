const trendingContent = [
    { title: "Stranger Things", image: "https://wallpapers.com/images/featured/stranger-things-pictures-7fj1jv6tvf3izh0t.jpg" },
    { title: "The Crown", image: "https://i.insider.com/5bbd20320114551bb45eaf04?width=960&format=jpeg" },
    { title: "Breaking Bad", image: "https://ntvb.tmsimg.com/assets/p8696131_b_h10_aa.jpg?w=1280&h=720" },
];

const recommendedContent = [
    { title: "The Witcher", image: "https://plugins-media.makeupar.com/smb/blog/post/2022-06-24/0558e12f-7c8b-4a49-9796-f8b0d166b9df.jpg" },
    { title: "Money Heist", image: "https://wallpapers.com/images/featured/stranger-things-pictures-7fj1jv6tvf3izh0t.jpg" },
    { title: "Ozark", image: "https://wallpapers.com/images/featured/stranger-things-pictures-7fj1jv6tvf3izh0t.jpg" },
];

function displayContent(sectionId, content) {
    const section = document.getElementById(sectionId);
    content.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `<img src="${item.image}" alt="${item.title}" />
                         <p>${item.title}</p>`;
        section.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayContent('trending', trendingContent);
    displayContent('recommended', recommendedContent);
});
