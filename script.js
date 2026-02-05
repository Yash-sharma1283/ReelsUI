const reel = [
  {
    username: "travelwithriya",
    likeCount: 12450,
    isLiked: false,
    commentCount: 320,
    caption: "Sunset hits different at the beach 🌅",
    video: "./vid1.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/11.jpg",
    shareCount: 210,
    isFollowed: true
  },
  {
    username: "fit_ankit",
    likeCount: 9870,
    isLiked: true,
    commentCount: 145,
    caption: "Consistency beats motivation 💪",
    video: "./vid2.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/21.jpg",
    shareCount: 98,
    isFollowed: false
  },
  {
    username: "foodie_tanya",
    likeCount: 22340,
    isLiked: false,
    commentCount: 560,
    caption: "Street momos review 😍🔥",
    video: "./vid3.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/31.jpg",
    shareCount: 430,
    isFollowed: true
  },
  {
    username: "techwithrohit",
    likeCount: 7650,
    isLiked: true,
    commentCount: 210,
    caption: "Best budget gadgets of 2026 📱",
    video: "./vid4.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/41.jpg",
    shareCount: 180,
    isFollowed: true
  },
  {
    username: "dance_with_megha",
    likeCount: 18900,
    isLiked: false,
    commentCount: 670,
    caption: "Tried trending choreography 💃",
    video: "./vid5.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/51.jpg",
    shareCount: 390,
    isFollowed: false
  },
  {
    username: "daily_memes_raj",
    likeCount: 30210,
    isLiked: true,
    commentCount: 890,
    caption: "When assignment deadline is tomorrow 😂",
     video: "./vid1.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/61.jpg",
    shareCount: 720,
    isFollowed: true
  },
  {
    username: "natureclicks",
    likeCount: 15890,
    isLiked: false,
    commentCount: 275,
    caption: "Morning vibes in the hills 🌄",
    video: "./vid2.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/71.jpg",
    shareCount: 160,
    isFollowed: false
  },
  {
    username: "codingwithdev",
    likeCount: 6450,
    isLiked: true,
    commentCount: 120,
    caption: "JavaScript trick you should know 🤯",
    video: "./vid4.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/81.jpg",
    shareCount: 75,
    isFollowed: true
  },
  {
    username: "makeupbyalia",
    likeCount: 27400,
    isLiked: false,
    commentCount: 540,
    caption: "5 min college makeup tutorial 💄",
    video: "./vid3.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/91.jpg",
    shareCount: 310,
    isFollowed: true
  },
  {
    username: "carlover_kunal",
    likeCount: 11200,
    isLiked: true,
    commentCount: 260,
    caption: "Dream car spotting today 🚗🔥",
    video: "./vid5.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/15.jpg",
    shareCount: 140,
    isFollowed: false
  }
];
let sum='';
reel.forEach(function(elem) {
    sum = sum + ` <div class="reel">
           <video autoplay loop muted src="${elem.video}"></video>
            <div class="bottom">
               <div class="user"><img src="${elem.userProfile}" alt="">
                <h4>${elem.username}</h4>
                <button>${elem.isFollowed?'Unfollow':'Follow'}</button>
            </div> 
            <div class="caption"><h4>${elem.caption}</h4> </div>
            </div> 
             <div class="right">
               <div class="like"> 
                <h4 class = "likeicon"><i ${elem.isLiked?'<i class=" love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</h4>
                <h6>${elem.likeCount}</h6>
            </div>
             <div class="comment"> 
               <h4><i class="ri-chat-3-line"></i></h4>
                <h6>${elem.commentCount}</h6>
            </div>
                <div class="share"> 
               <h4><i class="ri-share-forward-line"></i></h4>
                <h6>${elem.shareCount}</h6>
            </div>
               <div class="menu"> 
              <h4><i class="ri-more-2-fill"></i></h4>
                
            </div>
            </div>
            </div> `;
   
    
    
});
let allreelss = document.querySelector('.reels');
allreelss.innerHTML=sum;

